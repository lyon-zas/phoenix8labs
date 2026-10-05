"use client";

import { useEffect, useRef, useState } from "react";

type From = "up" | "left" | "right";

const offset: Record<From, { x: string; y: string }> = {
  up: { x: "0px", y: "20px" },
  left: { x: "-28px", y: "0px" },
  right: { x: "28px", y: "0px" },
};

// Fades content in the first time it scrolls into view. Stagger with `delay` (ms).
// Content is visible by default (no-JS, reduced motion, already on screen); hiding only
// happens after mount for elements below the fold. Styles live in globals.css (.reveal).
export function Reveal({
  children,
  className = "",
  delay = 0,
  from = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  from?: From;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"visible" | "hidden" | "shown">("visible");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;
    setState("hidden");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal={state}
      className={`reveal ${className}`}
      style={
        {
          "--d": `${delay}ms`,
          "--x": offset[from].x,
          "--y": offset[from].y,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
