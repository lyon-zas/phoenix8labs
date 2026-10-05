import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { process } from "@/content/site";

export function Process() {
  return (
    <section id="process" className="pb-6 pt-14 lg:pb-14 lg:pt-28">
      <Container className="flex flex-col gap-8 lg:gap-12">
        <Reveal className="flex flex-col gap-4">
          <Eyebrow>{process.eyebrow}</Eyebrow>
          <h2 className="font-display text-[30px] font-bold leading-[1.15] lg:text-[44px] lg:leading-[1.1]">
            {process.headline}
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 130}>
              <div className="relative flex h-full flex-col gap-3 pt-6">
                <span
                  aria-hidden="true"
                  className="step-line absolute inset-x-0 top-0 h-[2px] bg-copper"
                  style={{ "--d": `${i * 130}ms` } as React.CSSProperties}
                />
                <p className="font-display text-[15px] font-bold text-amber">{s.n}</p>
                <h3 className="font-display text-xl font-semibold lg:text-[22px]">{s.title}</h3>
                <p className="text-ink-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 text-sm text-ink-muted">
          <Reveal>
            <strong className="font-semibold text-ink">{process.stackLabel}</strong>
          </Reveal>
          {process.stack.map((t, i) => (
            <Reveal key={t} delay={(i + 1) * 60} className="flex items-center gap-6">
              {i > 0 && <span aria-hidden="true">·</span>}
              <span>{t}</span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
