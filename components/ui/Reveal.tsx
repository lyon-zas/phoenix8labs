"use client";

import { useEffect, useRef, useState } from "react";

// Fades content up 12px the first time it scrolls into view.
// Content is visible by default (no-JS, reduced motion); hiding only happens after mount.
export function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"visible" | "hidden" | "shown">("visible");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
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

  const motion =
    state === "hidden"
      ? "translate-y-3 opacity-0"
      : state === "shown"
        ? "translate-y-0 opacity-100 transition duration-300 ease-out"
        : "";

  return (
    <div ref={ref} className={`${motion} ${className}`}>
      {children}
    </div>
  );
}
