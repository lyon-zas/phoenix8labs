import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Phoenix 8 Labs | Software, AI and Data Systems in Abuja, Nigeria",
  description:
    "We design and build ERP and CRM systems, AI lead generation, POS and retail systems, websites and mobile apps for growing businesses in Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-copper-strong focus:px-4 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        <header className="sticky top-0 z-50 flex h-[68px] items-center border-b border-line bg-surface lg:h-[88px]">
          <div className="mx-auto w-full max-w-[1280px] px-5 lg:px-20">
            <a href="#top" aria-label="Phoenix 8 Labs home" className="inline-block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/phoenix8-lockup-dark.svg"
                alt="Phoenix 8 Labs"
                width={953}
                height={240}
                className="h-[34px] w-auto lg:h-[44px]"
              />
            </a>
          </div>
        </header>
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
