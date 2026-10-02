import { Container } from "@/components/ui/Container";
import { site, trust } from "@/content/site";

export function TrustStrip() {
  return (
    <div className="border-y border-line py-4 text-[13px] leading-5 text-ink-muted lg:flex lg:h-[72px] lg:items-center lg:py-0 lg:text-sm">
      <Container className="flex items-center justify-between gap-8">
        <p>
          A brand of <strong className="font-semibold text-ink">{site.legalName}</strong> · RC{" "}
          {site.rc} · {trust.left}
        </p>
        <p className="hidden lg:block">{trust.right}</p>
      </Container>
    </div>
  );
}
