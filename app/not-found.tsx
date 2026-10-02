import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export default function NotFound() {
  return (
    <section className="py-20 lg:py-36">
      <Container className="flex flex-col items-start gap-5">
        <Eyebrow>404</Eyebrow>
        <h1 className="font-display text-[38px] font-bold leading-[1.08] lg:text-[64px] lg:leading-[1.04]">
          This page doesn&apos;t exist.
        </h1>
        <p className="max-w-[560px] text-[17px] leading-[27px] text-ink-muted lg:text-[19px] lg:leading-[30px]">
          The link may be old or mistyped. Head back to the homepage to see what we build.
        </p>
        <Button href="/" className="mt-2">
          Back to homepage
        </Button>
      </Container>
    </section>
  );
}
