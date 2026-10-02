import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { work } from "@/content/site";

export function Work() {
  return (
    <section id="work" className="pb-6 pt-14 lg:pb-14 lg:pt-28">
      <Container className="flex flex-col gap-8 lg:gap-12">
        <Reveal className="flex flex-col gap-4">
          <Eyebrow>{work.eyebrow}</Eyebrow>
          <h2 className="font-display text-[30px] font-bold leading-[1.15] lg:text-[44px] lg:leading-[1.1]">
            {work.headline}
          </h2>
        </Reveal>

        <Reveal className="grid gap-6 md:grid-cols-2">
          {work.items.map((w) => (
            <article
              key={w.title}
              className="overflow-hidden rounded-lg border border-line bg-surface-raised transition-colors hover:border-graphite"
            >
              <div className="flex h-[180px] items-center justify-center bg-[#26272B] text-[13px] text-ink-muted lg:h-[260px] lg:text-sm">
                {w.image}
              </div>
              <div className="flex flex-col gap-2 p-6 lg:gap-3 lg:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-amber lg:text-[13px]">
                  {w.tag}
                </p>
                <h3 className="font-display text-xl font-semibold lg:text-2xl">{w.title}</h3>
                <p className="text-ink-muted">
                  {w.body} {w.result}
                </p>
              </div>
            </article>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
