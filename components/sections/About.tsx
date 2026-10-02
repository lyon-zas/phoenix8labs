import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { about } from "@/content/site";

export function About() {
  return (
    <section id="about" className="pb-6 pt-14 lg:pb-14 lg:pt-28">
      <Container>
        <Reveal className="grid gap-8 rounded-lg border border-line bg-surface-raised p-6 md:p-10 lg:grid-cols-2 lg:items-center lg:gap-14 lg:p-14">
          <figure>
            <blockquote className="font-display text-2xl font-semibold leading-[1.35] lg:text-[28px]">
              {about.quote}
            </blockquote>
            <figcaption className="mt-6 text-[15px] font-medium text-ink-muted">
              {about.cite}
            </figcaption>
          </figure>
          <div className="flex flex-col gap-4">
            <Eyebrow>{about.eyebrow}</Eyebrow>
            <p className="text-[17px] leading-7">{about.paragraphs[0]}</p>
            <p className="text-[17px] leading-7 text-ink-muted">{about.paragraphs[1]}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
