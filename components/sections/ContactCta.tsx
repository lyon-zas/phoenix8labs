import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { cta, site } from "@/content/site";

export function ContactCta() {
  return (
    <section id="contact" className="py-14 lg:py-28">
      <Container>
        <Reveal className="anim-sheen grid gap-10 rounded-lg bg-copper-soft p-6 md:p-10 lg:grid-cols-[5fr_6fr] lg:items-start lg:gap-14 lg:p-[72px]">
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-[30px] font-bold leading-[1.15] lg:text-[44px] lg:leading-[1.1]">
              {cta.headline}
            </h2>
            <p className="text-[17px] leading-7 lg:text-lg">{cta.body}</p>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex min-h-11 items-center text-[15px] text-amber no-underline hover:text-ink"
            >
              {site.email}
            </a>
          </div>
          <ContactForm />
        </Reveal>
      </Container>
    </section>
  );
}
