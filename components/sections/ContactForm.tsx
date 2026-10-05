"use client";

import { useState } from "react";
import { Turnstile, turnstileEnabled } from "@/components/ui/Turnstile";
import { form, site } from "@/content/site";

type Status = "idle" | "sending" | "success" | "error";

const field =
  "w-full rounded-sm border border-line bg-surface px-4 py-3 text-base text-ink placeholder:text-ink-muted/60 transition duration-200 focus-visible:border-amber focus-visible:shadow-[0_0_0_4px_rgba(238,154,54,0.18)] focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-amber";
const label = "mb-2 block text-sm font-medium text-ink";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [token, setToken] = useState("");
  const [resetSignal, setResetSignal] = useState(0);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, turnstileToken: token }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
    } catch {
      setStatus("error");
      setToken("");
      setResetSignal((n) => n + 1);
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-lg border border-line bg-surface-raised p-6 lg:p-8">
        <h3 className="font-display text-2xl font-semibold">{form.success.title}</h3>
        <p className="mt-3 text-ink-muted">{form.success.body}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-lg border border-line bg-surface-raised p-6 lg:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={label}>
            Name
          </label>
          <input id="cf-name" name="name" type="text" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="cf-email" className={label}>
            Work email
          </label>
          <input id="cf-email" name="email" type="email" required autoComplete="email" className={field} />
        </div>
        <div>
          <label htmlFor="cf-company" className={label}>
            Company
          </label>
          <input id="cf-company" name="company" type="text" required autoComplete="organization" className={field} />
        </div>
        <div>
          <label htmlFor="cf-phone" className={label}>
            Phone <span className="font-normal text-ink-muted">(optional)</span>
          </label>
          <input id="cf-phone" name="phone" type="tel" autoComplete="tel" className={field} />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="cf-need" className={label}>
            What do you need?
          </label>
          <select id="cf-need" name="need" required defaultValue="" className={field}>
            <option value="" disabled>
              Select one
            </option>
            {form.needs.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="cf-message" className={label}>
            Message
          </label>
          <textarea id="cf-message" name="message" rows={4} required className={field} />
        </div>
        {/* Honeypot: hidden from people, tempting to bots. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label>
            Website
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
      </div>

      <div className="mt-5">
        <Turnstile onToken={setToken} resetSignal={resetSignal} />
      </div>

      {status === "error" && (
        <p role="alert" className="mt-5 rounded-sm border border-copper bg-copper-soft px-4 py-3 text-[15px]">
          {form.error}{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-amber">
            {site.email}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending" || (turnstileEnabled && !token)}
        className="mt-6 inline-flex h-[52px] w-full items-center justify-center whitespace-nowrap rounded-md bg-copper-strong px-7 text-base font-semibold text-white transition duration-200 hover:-translate-y-px hover:bg-[#b9500f] active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
      >
        {status === "sending" ? form.sending : form.submit}
      </button>
    </form>
  );
}
