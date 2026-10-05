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

        <div className="grid gap-6 md:grid-cols-2">
          {work.items.map((w, i) => (
            <Reveal key={w.title} delay={(i % 2) * 110}>
              <article className="group h-full overflow-hidden rounded-lg border border-line bg-surface-raised transition duration-300 hover:-translate-y-1 hover:border-amber/40 hover:shadow-[0_16px_40px_-16px_rgba(200,90,30,0.45)]">
                <div className="h-[180px] overflow-hidden lg:h-[260px]">
                  <div className="flex h-full items-center justify-center bg-[#26272B] text-[13px] text-ink-muted transition-transform duration-500 ease-out group-hover:scale-105 lg:text-sm">
                    {w.image}
                  </div>
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
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
