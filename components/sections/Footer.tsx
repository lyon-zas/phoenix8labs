import { Container } from "@/components/ui/Container";
import { footer, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line py-10 lg:py-12">
      <Container className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
        <div className="flex flex-col gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/phoenix8-lockup-dark.svg"
            alt="Phoenix 8 Labs"
            width={953}
            height={240}
            loading="lazy"
            className="h-10 w-auto self-start"
          />
          <p className="max-w-[520px] text-sm leading-[22px] text-ink-muted">
            Phoenix 8 Labs is a brand of {site.legalName}, RC {site.rc}. {site.address}, Abuja,
            Nigeria.
          </p>
          <p className="text-sm text-ink-muted">
            © {new Date().getFullYear()} {site.legalName}
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-1 text-sm">
          {footer.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="inline-flex min-h-11 items-center text-ink-muted no-underline hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
