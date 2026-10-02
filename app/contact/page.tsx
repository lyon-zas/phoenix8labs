import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/sections/ContactForm";
import { cta, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact | Phoenix 8 Labs",
  description: "Book a 30-minute discovery call with Phoenix 8 Labs.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <section id="contact" className="py-14 lg:py-28">
      <Container className="grid gap-10 lg:grid-cols-[5fr_6fr] lg:gap-14">
        <div className="flex flex-col gap-4">
          <h1 className="font-display text-[30px] font-bold leading-[1.15] lg:text-[44px] lg:leading-[1.1]">
            {cta.headline}
          </h1>
          <p className="text-[17px] leading-7 text-ink-muted lg:text-lg">{cta.body}</p>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex min-h-11 items-center text-[15px] text-amber no-underline hover:text-ink"
          >
            {site.email}
          </a>
        </div>
        <ContactForm />
      </Container>
    </section>
  );
}
