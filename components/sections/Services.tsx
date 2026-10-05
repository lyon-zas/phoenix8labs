import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/content/site";

export function Services() {
  const stagger = (i: number) => (i % 3) * 90;
  return (
    <section id="services" className="pb-6 pt-14 lg:pb-14 lg:pt-28">
      <Container className="flex flex-col gap-8 lg:gap-12">
        <Reveal className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="flex flex-col gap-4">
            <Eyebrow>{services.eyebrow}</Eyebrow>
            <h2 className="max-w-[640px] font-display text-[30px] font-bold leading-[1.15] lg:text-[44px] lg:leading-[1.1]">
              {services.headline}
            </h2>
          </div>
          <p className="max-w-[420px] text-[17px] leading-7 text-ink-muted">{services.side}</p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.items.map((s, i) => (
            <Reveal key={s.title} delay={stagger(i)}>
              <Card className="flex flex-col gap-4 lg:min-h-[280px]">
                <Icon name={s.icon} />
                <h3 className="font-display text-xl font-semibold lg:text-[22px]">{s.title}</h3>
                <p className="text-ink-muted">{s.body}</p>
              </Card>
            </Reveal>
          ))}
          <Reveal delay={stagger(services.items.length)}>
            <div className="flex h-full flex-col justify-between gap-4 rounded-lg bg-copper-soft p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(238,154,54,0.35)] lg:min-h-[280px] lg:p-8">
              <h3 className="font-display text-[26px] font-bold leading-[1.2]">
                {services.highlight.title}
              </h3>
              <p>{services.highlight.body}</p>
              <a
                href={services.highlight.link.href}
                className="inline-block self-start font-semibold text-amber no-underline transition duration-200 hover:translate-x-1 hover:text-ink"
              >
                {services.highlight.link.label}
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
