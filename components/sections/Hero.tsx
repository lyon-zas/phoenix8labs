import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { hero } from "@/content/site";

export function Hero() {
  return (
    <section id="top" className="lg:flex lg:min-h-[640px] lg:items-center">
      <Container className="grid gap-5 pb-12 pt-8 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-0">
        <div className="order-2 flex flex-col gap-5 lg:order-1 lg:gap-7">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1 className="font-display text-[38px] font-bold leading-[1.08] tracking-[-0.01em] lg:text-[64px] lg:leading-[1.04]">
            {hero.headline}
          </h1>
          <p className="max-w-[560px] text-[17px] leading-[27px] text-ink-muted lg:text-[19px] lg:leading-[30px]">
            {hero.body}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button href={hero.primary.href}>{hero.primary.label}</Button>
            <Button href={hero.secondary.href} variant="secondary">
              {hero.secondary.label}
            </Button>
          </div>
        </div>
        <div className="order-1 flex justify-center lg:order-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/phoenix8-mark.svg"
            alt=""
            width={941}
            height={718}
            fetchPriority="high"
            className="h-auto w-[260px] lg:w-[560px]"
          />
        </div>
      </Container>
    </section>
  );
}
