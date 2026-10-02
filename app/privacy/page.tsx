import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy notice | Phoenix 8 Labs",
  description: "How Phoenix 8 Labs handles personal data submitted through this website.",
  alternates: { canonical: "/privacy/" },
};

const h2 = "mt-10 font-display text-2xl font-semibold";
const p = "mt-3 text-ink-muted";

export default function PrivacyPage() {
  return (
    <section className="py-14 lg:py-28">
      <Container className="max-w-[860px]">
        <p className="mb-6 rounded-sm border border-line bg-surface-raised px-4 py-3 text-sm text-ink-muted">
          [Draft text, pending approval by Ted before launch]
        </p>
        <h1 className="font-display text-[30px] font-bold leading-[1.15] lg:text-[44px] lg:leading-[1.1]">
          Privacy notice
        </h1>
        <p className={p}>
          This notice explains how {site.legalName}, trading as {site.name} (RC {site.rc}), handles
          personal data collected through phoenix8labs.com. We process personal data in line with the
          Nigeria Data Protection Act 2023.
        </p>

        <h2 className={h2}>Who we are</h2>
        <p className={p}>
          {site.legalName} is the data controller. {site.address}, Abuja, Nigeria. Contact:{" "}
          <a href={`mailto:${site.email}`} className="text-amber">
            {site.email}
          </a>
          .
        </p>

        <h2 className={h2}>What we collect</h2>
        <p className={p}>
          When you use the contact form we collect your name, work email address, company, phone number
          (optional), the service you are interested in, and your message. We collect nothing else
          through the form. Our spam check (Cloudflare Turnstile) may process technical information such
          as your IP address to tell people from bots.
        </p>

        <h2 className={h2}>Why we use it</h2>
        <p className={p}>
          We use this information only to reply to your enquiry and, if you go ahead, to arrange and
          deliver the work. Our lawful basis is your consent when you submit the form and our legitimate
          interest in responding to business enquiries. We do not sell your data or use it for
          advertising.
        </p>

        <h2 className={h2}>Who processes it</h2>
        <p className={p}>
          Your enquiry is delivered to our business inbox through Resend (email delivery). The website
          is hosted by Cloudflare, which also provides the spam check and cookie-free visitor
          statistics. These providers process data on our behalf and may do so outside Nigeria; we rely
          on their contractual data protection commitments for those transfers.
        </p>

        <h2 className={h2}>How long we keep it</h2>
        <p className={p}>
          We keep enquiry emails only as long as needed to handle your request and for any follow-up
          relationship, and delete them when they are no longer needed.
        </p>

        <h2 className={h2}>Your rights</h2>
        <p className={p}>
          You can ask us to access, correct or delete your personal data, to restrict or object to its
          use, or to withdraw consent at any time, by emailing {site.email}. You also have the right to
          complain to the Nigeria Data Protection Commission.
        </p>

        <h2 className={h2}>Cookies</h2>
        <p className={p}>
          This site does not use advertising or tracking cookies. Visitor statistics come from
          Cloudflare Web Analytics, which does not use cookies or track you across sites.
        </p>

        <h2 className={h2}>Changes</h2>
        <p className={p}>We may update this notice and will post the current version on this page.</p>
      </Container>
    </section>
  );
}
