import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cta, site } from "@/content/site";

// Phase 3 adds the contact form (Turnstile + /api/contact) to this panel.
export function ContactCta() {
  return (
    <section id="contact" className="py-14 lg:py-28">
      <Container>
        <Reveal className="flex flex-col gap-8 rounded-lg bg-copper-soft p-6 md:p-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:p-[72px]">
          <div className="flex max-w-[720px] flex-col gap-4">
            <h2 className="font-display text-[30px] font-bold leading-[1.15] lg:text-[44px] lg:leading-[1.1]">
              {cta.headline}
            </h2>
            <p className="text-[17px] leading-7 lg:text-lg">{cta.body}</p>
          </div>
          <div className="flex flex-col items-stretch gap-3 lg:items-start">
            <Button href={cta.button.href} className="lg:h-14 lg:px-8 lg:text-[17px]">
              {cta.button.label}
            </Button>
            <a
              href={`mailto:${site.email}`}
              className="py-2 text-center text-[15px] text-amber no-underline hover:text-ink lg:text-left"
            >
              {site.email}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
