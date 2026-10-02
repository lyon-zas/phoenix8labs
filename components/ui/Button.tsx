import type { AnchorHTMLAttributes } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary";
  size?: "md" | "sm";
};

const base =
  "inline-flex items-center whitespace-nowrap justify-center rounded-md font-semibold no-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber";

const variants = {
  primary: "bg-copper-strong text-white hover:bg-[#b9500f]",
  secondary: "border border-graphite text-ink hover:border-ink-muted",
};

const sizes = {
  md: "h-[52px] px-7 text-base",
  sm: "h-11 px-[22px] text-[15px]",
};

export function Button({ variant = "primary", size = "md", className = "", ...rest }: Props) {
  return <a className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest} />;
}
