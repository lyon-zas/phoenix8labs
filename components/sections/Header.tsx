"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { headerCta, nav } from "@/content/site";

const FOCUSABLE = "a[href], button:not([disabled])";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const header = headerRef.current;
    header?.querySelector<HTMLElement>("[data-menu] a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab" || !header) return;
      const items = Array.from(header.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null,
      );
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open, close]);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 h-[68px] border-b bg-surface transition-[border-color,box-shadow] duration-300 lg:h-[88px] ${
        scrolled
          ? "border-graphite/40 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.7)]"
          : "border-line"
      }`}
    >
      <Container className="flex h-full items-center justify-between">
        <a href="#top" className="inline-block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/phoenix8-lockup-dark.svg"
            alt="Phoenix 8 Labs"
            width={953}
            height={240}
            className="h-[34px] w-auto lg:h-[44px]"
          />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-10 text-[15px] font-medium lg:flex">
          {nav.map((l) => (
            <a key={l.href} href={l.href} className="link-underline text-ink no-underline transition-colors hover:text-amber">
              {l.label}
            </a>
          ))}
          <Button href={headerCta.href} size="sm">
            {headerCta.label}
          </Button>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => (open ? close() : setOpen(true))}
          className="flex h-11 w-11 items-center justify-center rounded-md border border-line text-ink lg:hidden"
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </Container>

      {open && (
        <div
          id="mobile-menu"
          data-menu
          className="anim-menu fixed inset-x-0 bottom-0 top-[68px] overflow-y-auto bg-surface px-5 py-8 lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {nav.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ "--d": `${60 + i * 60}ms` } as React.CSSProperties}
                className="anim-rise border-b border-line py-5 font-display text-2xl font-semibold text-ink no-underline"
              >
                {l.label}
              </a>
            ))}
            <Button href={headerCta.href} onClick={() => setOpen(false)} className="mt-8">
              {headerCta.label}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
