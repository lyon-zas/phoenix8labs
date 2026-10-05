// Contact endpoint: POST /api/contact (called from worker/index.ts)
// Verifies the Turnstile token, then emails the enquiry through Resend.
// Secrets (set in Cloudflare > Workers > phoenix8labs > Settings > Variables and Secrets, never in the repo):
//   TURNSTILE_SECRET, RESEND_API_KEY
// Optional: CONTACT_TO (default hello@phoenix8labs.com), CONTACT_FROM

export interface Env {
  TURNSTILE_SECRET: string;
  RESEND_API_KEY: string;
  CONTACT_TO?: string;
  CONTACT_FROM?: string;
}

const NEEDS = ["ERP & CRM", "AI lead generation", "POS & retail", "Website", "Mobile app", "Not sure yet"];
const MAX = { name: 120, email: 200, company: 160, phone: 40, need: 40, message: 5000 };

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export const handleContact = async (request: Request, env: Env): Promise<Response> => {
  if (request.method !== "POST") return json({ error: "Method not allowed" }, 405);
  let raw: Record<string, unknown>;
  try {
    raw = await request.json();
  } catch {
    return json({ error: "Invalid request" }, 400);
  }

  // Honeypot: pretend success so bots learn nothing.
  if (str(raw.website, 200)) return json({ ok: true });

  const name = str(raw.name, MAX.name);
  const email = str(raw.email, MAX.email);
  const company = str(raw.company, MAX.company);
  const phone = str(raw.phone, MAX.phone);
  const need = str(raw.need, MAX.need);
  const message = str(raw.message, MAX.message);
  const token = str(raw.turnstileToken, 4096);

  if (!name || !company || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !NEEDS.includes(need)) {
    return json({ error: "Please complete the required fields." }, 400);
  }
  if (!token) return json({ error: "Spam check failed." }, 400);

  const verify = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: new URLSearchParams({
      secret: env.TURNSTILE_SECRET,
      response: token,
      remoteip: request.headers.get("CF-Connecting-IP") ?? "",
    }),
  });
  const outcome = (await verify.json()) as { success?: boolean };
  if (!outcome.success) return json({ error: "Spam check failed." }, 400);

  const html = `
    <h2>New enquiry from phoenix8labs.com</h2>
    <p><strong>Name:</strong> ${esc(name)}<br>
    <strong>Email:</strong> ${esc(email)}<br>
    <strong>Company:</strong> ${esc(company)}<br>
    <strong>Phone:</strong> ${esc(phone) || "-"}<br>
    <strong>Needs:</strong> ${esc(need)}</p>
    <p style="white-space:pre-wrap">${esc(message)}</p>`;

  const send = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: env.CONTACT_FROM ?? "Phoenix 8 Labs <noreply@phoenix8labs.com>",
      to: [env.CONTACT_TO ?? "hello@phoenix8labs.com"],
      reply_to: email,
      subject: `New enquiry: ${need} (${company})`.replace(/[\r\n]+/g, " "),
      html,
    }),
  });
  if (!send.ok) return json({ error: "Could not send message." }, 502);

  return json({ ok: true });
};

