# Phoenix 8 Labs Website — Build Handover for Claude Code

Oct 2, 2026 · @ted

## Overview

Build phoenix8labs.com: a fast, single-page marketing site (plus a few simple pages) that makes Phoenix 8 Labs look credible enough for clients to sign contracts with. The approved homepage design, brand system and logo files already exist; Claude Code's job is to turn them into production code.

**How to use this doc with Claude Code**

1. Export this doc as Markdown and save it in the repo root as `HANDOVER.md`. Add a short `CLAUDE.md` that says: "Read HANDOVER.md before any task. Follow its brand tokens and copy exactly."
2. Put the logo SVGs in `public/brand/` (file names in the Brand section).
3. Save screenshots of the desktop and mobile homepage designs in `docs/design/` so Claude Code can see the target layout. Claude Code cannot open claude.ai links.
4. Start Claude Code in the repo and ask it to work through the build phases at the end of this doc, one phase at a time.

**Goals**

- Clients see a registered, professional company: the legal entity and RC number are visible on every page.
- Visitors understand the five services within 10 seconds of landing.
- Every page has one clear action: book a discovery call.
- Loads fast on Nigerian mobile networks: Lighthouse performance 90+ on mobile.

**About the business**

Phoenix 8 Labs is a brand of TED-ROSA TECH NIG LTD, led by Eyimofe "Ted" Orimolade in Abuja. It designs and builds new systems and improves existing ones: ERP and CRM platforms, AI lead generation, POS and retail systems, websites and mobile apps.

## Tech stack and hosting

Use Next.js with static export, styled with Tailwind CSS, deployed to Cloudflare Pages. The site is content-only, so it needs no database or server.

| Area | Choice | Notes |
| --- | --- | --- |
| Framework | Next.js (latest stable, App Router), TypeScript | `output: "export"` in `next.config` so it builds to static files |
| Styling | Tailwind CSS | Brand tokens defined once as CSS variables and mapped into the Tailwind theme |
| Fonts | Montserrat (600, 700) and Inter (400, 500, 600) | Load with `next/font/google` so they are self-hosted; no external font requests |
| Hosting | Cloudflare Pages | Connect the Git repo; build command `npm run build`, output folder `out` |
| Domain | phoenix8labs.com on Cloudflare | Redirect www to the apex domain; HTTPS only |
| Contact form | Cloudflare Pages Function + Turnstile spam check | Sends to the business email; see Contact form section |
| Analytics | Cloudflare Web Analytics | Free, no cookie banner needed |

**Repo structure**

```
/app
  layout.tsx          fonts, metadata, header, footer
  page.tsx            homepage (composes the sections)
  /services/page.tsx  later phase
  /work/page.tsx      later phase
  /contact/page.tsx
  /privacy/page.tsx
/components
  /sections           Hero, TrustStrip, Services, Work, Process, About, ContactCta
  /ui                 Button, Card, Eyebrow, Container, Icon
/content              site.ts: all copy, services and case studies as typed data
/public/brand         logo SVGs, favicon, social share image
/functions/api        contact.ts (Pages Function)
/docs/design          design screenshots
HANDOVER.md
CLAUDE.md
```

Keep all copy in `/content/site.ts` so text can be changed without touching components.

**Commands**: `npm run dev` (local), `npm run build` (static export to `out/`), `npm run lint`.

## Brand

The site is dark-first: near-black background, copper and amber accents, graphite for secondary lines. Use these exact values; do not invent new colours.

**Colours (dark theme, used site-wide)**

| Token | Hex | Use |
| --- | --- | --- |
| `surface` | #141416 | Page background |
| `surface-raised` | #1E1F22 | Cards, panels |
| `ink` | #F5EFE6 | Headings and main text |
| `ink-muted` | #A89D90 | Body copy, captions |
| `line` | #2C2D31 | Dividers, card borders |
| `copper` | #C85A1E | Brand accent: process step lines, large shapes. Not for small text |
| `amber` | #EE9A36 | Eyebrow labels, links, icons, small highlighted text |
| `copper-strong` | #A8480F | Primary button fill (white text passes contrast) |
| `graphite` | #6C6F75 | Secondary button border, icons |
| `copper-soft` | #3A2014 | Highlight panels ("Not sure which you need?", final call to action) |

A light theme exists in the brand system (surface #FAF7F2, ink #16120E) for documents. The website ships dark only.

**Type**

| Style | Font | Size / line height (desktop) | Size (mobile) |
| --- | --- | --- | --- |
| Hero headline | Montserrat 700, letter-spacing -0.01em | 64px / 1.04 | 38px |
| Section headline | Montserrat 700 | 44px / 1.1 | 30px |
| Card title | Montserrat 600 | 22–24px | 20px |
| Eyebrow label | Montserrat 500, uppercase, letter-spacing 0.3em | 13px | 12px |
| Body large | Inter 400 | 19px / 30px | 17px / 27px |
| Body | Inter 400 | 16px / 26px | 15px / 24px |
| Small | Inter 400 | 14px / 20px | 13px / 20px |

**Spacing and shape**: 4px base unit. Page side padding 80px desktop, 20px mobile; content max width 1280px. Sections 112px apart on desktop, 56px on mobile. Card padding 32px desktop, 24px mobile. Radii: 16px cards and panels, 8px buttons, 4px tags and inputs.

**Logo files** (place in `public/brand/`)

| File | Use |
| --- | --- |
| `phoenix8-lockup-dark.svg` | Header and footer logo (PHOENIX8 + LABS, light text for dark backgrounds) |
| `phoenix8-lockup-tagline-dark.svg` | Social share image and banners |
| `phoenix8-mark.svg` | Large mark in the hero; source for favicon |
| `phoenix8-lockup-light.svg`, `phoenix8-lockup-tagline-light.svg` | Light backgrounds only (not used on the site) |

Logo rules: header logo 44px tall desktop, 34px mobile. Never recolour, stretch, add shadows or glows. Keep clear space equal to the height of the "8" around it. Favicon: the full mark is too detailed below 48px, so use a simplified icon when one is drawn; until then export `phoenix8-mark.svg` to 32px and 180px PNGs as a stopgap.

## Homepage: structure and copy

The homepage is one long page of eight sections in this order. Use this copy exactly; text in \[square brackets\] is a placeholder to keep visible until Ted supplies it.

1. **Header** (sticky, 88px desktop / 68px mobile, bottom border `line`)
   - Logo left, links to the top of the page.
   - Nav: Services · Work · Process · About (anchor links to sections), then a primary button "Book a call" → `#contact`.
   - Mobile: logo + a 44px menu button that opens a full-screen menu with the same links.
2. **Hero** (two columns desktop, stacked mobile with the mark on top)
   - Eyebrow: SOFTWARE · AI · DATA SYSTEMS
   - Headline: We build the systems businesses run on.
   - Body: Phoenix 8 Labs designs and builds the systems growing companies run on: ERP and CRM platforms, AI lead generation, retail and POS systems, websites and mobile apps.
   - Buttons: "Book a discovery call" (primary) → `#contact`; "See our work" (secondary, graphite border) → `#work`.
   - Right column: `phoenix8-mark.svg` at about 560px wide.
3. **Trust strip** (full-width band with top and bottom borders)
   - Left: A brand of **TED-ROSA TECH NIG LTD** · RC \[NUMBER\] · Registered with the CAC
   - Right: Based in Abuja · Working across Nigeria and beyond (hidden on mobile)
4. **Services** `#services`
   - Eyebrow: WHAT WE BUILD
   - Headline: New systems built from scratch. Existing ones made to work.
   - Side text: Every project starts with how your business actually works, then we build the software around it.
   - Six cards in a 3-column grid (1 column mobile), each with a stroke icon in amber:
     - **ERP & CRM systems**: One system for sales, inventory, finance and HR across all your companies and branches, with dashboards leadership actually uses.
     - **AI lead generation**: Engines that find, score and qualify prospects automatically, then trigger personalised outreach so your team only talks to warm leads.
     - **POS & retail systems**: Offline-first point of sale and inventory that keeps selling when the internet drops, and syncs when it's back.
     - **Websites**: Fast, secure company websites on modern frameworks, including migrations off slow WordPress setups.
     - **Mobile apps**: iOS and Android apps in Flutter and React Native, from customer apps to field tools, payments and Web3 integrations.
     - Highlight card (`copper-soft` background): **Not sure which you need?** Tell us where the business is losing time or money. We'll map it and recommend the smallest system that fixes it. Link: "Start with a free consultation →" → `#contact`.
5. **Selected work** `#work`
   - Eyebrow: SELECTED WORK · Headline: Built for real operations.
   - Four case-study cards, 2-column grid (1 column mobile), each with an image area (260px tall desktop, 180px mobile), a category tag in amber, a title and a summary:
     - ERP · ENERGY: **Multi-company ERP for a solar energy group**. One ERPNext platform running sales, stock and finance for a group of sister companies, with around 500 users. \[RESULT\]
     - AI · COMMERCIAL REAL ESTATE: **AI lead engine for a commercial property group**. Sources and scores prospective tenants and partners automatically, feeding a CRM and executive reporting dashboard. \[RESULT\]
     - RETAIL · POS: **Offline-first POS for a multi-vertical building**. Point of sale and inventory for several businesses under one roof, built to keep trading through network outages. \[RESULT\]
     - WEB · MIGRATION: **From WordPress to a modern Next.js site**. A corporate website moved off shared WordPress hosting onto Next.js and Cloudflare for speed and security. \[RESULT\]
   - Until screenshots arrive, image areas show a `#26272B` panel with a label like \[Dashboard screenshot\].
6. **How we work** `#process`
   - Eyebrow: HOW WE WORK · Headline: Clear steps. No surprises.
   - Four steps in a row (stacked mobile), each with a 2px `copper` top border, an amber number and text:
     - **01 Discover**: We map your processes, people and pain points, then agree scope, cost and timeline in writing.
     - **02 Design**: You see and click through the screens before a line of production code is written.
     - **03 Build**: Short cycles with working demos, so you can test with your team as it takes shape.
     - **04 Launch & support**: Data migration, staff training and ongoing support after go-live.
   - Stack line: **We build with** Next.js · React Native · Flutter · Frappe / ERPNext · Python · Cloudflare · Solana
7. **About and testimonial** `#about` (one raised panel, two columns desktop)
   - Left: “\[Client testimonial: one or two sentences about the result you delivered.\]” — \[Name\], \[Role\], \[Company\]
   - Right: Eyebrow ABOUT. Phoenix 8 Labs is led by Eyimofe “Ted” Orimolade, a developer and AI transformation lead who has built CRM infrastructure, ERP rollouts, AI tooling and mobile apps for organisations in Abuja and beyond. The name says what we do: build systems that last, whether we're starting from a blank page or renewing what you already have.
8. **Final call to action** `#contact` (`copper-soft` panel)
   - Headline: Building something new, or fixing what you have?
   - Body: Book a 30-minute call. You'll leave with a clear view of what to fix first, whether or not we work together.
   - Primary button "Book a discovery call" and the email hello@phoenix8labs.com. The contact form (next sections) sits here.
9. **Footer**
   - Logo, then: Phoenix 8 Labs is a brand of TED-ROSA TECH NIG LTD, RC \[NUMBER\]. \[Office address\], Abuja, Nigeria.
   - Links: Services · Work · Contact · Privacy · LinkedIn (\[LINKEDIN URL\]). Copyright line with the current year.

**Other pages (phase 3)**: `/privacy` (simple privacy notice covering the contact form, in line with the Nigeria Data Protection Act; Ted to approve the text) and a custom 404 page with a link home. Separate `/services` and `/work` detail pages can come later, once real case studies exist.

## Components, responsiveness and accessibility

Build a small set of reusable components and assemble every section from them.

| Component | Spec |
| --- | --- |
| `Button` (primary) | `copper-strong` fill, white text, Inter 600 16px, 52px tall (44px in header), 8px radius; hover slightly lighter; visible amber focus ring |
| `Button` (secondary) | Transparent, 1px `graphite` border, `ink` text, same size |
| `Card` | `surface-raised` fill, 1px `line` border, 16px radius, 32px padding (24px mobile) |
| `Eyebrow` | Montserrat 500, uppercase, 0.3em tracking, `amber` |
| `Container` | max-width 1280px, side padding 80px desktop, 20px mobile |
| `Icon` | Inline SVG, 1.6px stroke, round caps, amber, 36px; use a library such as Lucide rather than images |

**Breakpoints**: mobile first. Below 768px everything stacks to one column. 768–1023px: services and work in 2 columns, process in 2×2. 1024px and up: the desktop layout described above. Test at 360, 390, 768, 1024, 1280 and 1440px.

**Motion**: subtle only. Sections may fade up 12px on first scroll into view (200–300ms); card hover lifts the border to `graphite`. Respect `prefers-reduced-motion` by turning all of it off. Smooth scroll for anchor links, with an offset for the sticky header.

**Accessibility (WCAG 2.1 AA)**

- One `h1` per page; sections use `h2`, cards `h3`.
- Real `<a>` and `<button>` elements; every icon-only button has an `aria-label`; the mobile menu traps focus and closes on Escape.
- Text contrast: `ink` and `ink-muted` pass on both surfaces; white on `copper-strong` passes (5.4:1). Never put body text in `copper`.
- Logo images use `alt="Phoenix 8 Labs"`; the decorative hero mark uses `alt=""`.
- Touch targets at least 44×44px. Add a "Skip to content" link.

## Contact form, SEO and performance

**Contact form** (in the final call-to-action section)

- Fields: Name, Work email, Company, Phone (optional), What do you need? (dropdown: ERP & CRM, AI lead generation, POS & retail, Website, Mobile app, Not sure yet), Message. All with visible labels.
- Spam protection: Cloudflare Turnstile.
- Submit posts to a Cloudflare Pages Function at `/api/contact`, which verifies Turnstile and emails the enquiry to hello@phoenix8labs.com using an email API (for example Resend). Keep API keys in Cloudflare environment variables, never in the repo.
- Show a clear success message, and an error message that offers the email address as a fallback.
- Optional later: a calendar booking link (Calendly or Cal.com) on the "Book a discovery call" buttons once Ted sets one up.

**SEO**

- Title: Phoenix 8 Labs | Software, AI and Data Systems in Abuja, Nigeria
- Meta description: We design and build ERP and CRM systems, AI lead generation, POS and retail systems, websites and mobile apps for growing businesses in Nigeria.
- Open Graph and Twitter card image (1200×630) built from `phoenix8-lockup-tagline-dark.svg` on `#141416`.
- `sitemap.xml`, `robots.txt`, canonical URLs on https://phoenix8labs.com.
- JSON-LD `Organization` schema with the legal name TED-ROSA TECH NIG LTD, brand name Phoenix 8 Labs, Abuja address, email and logo.

**Performance targets**

- Lighthouse mobile: performance ≥ 90, accessibility ≥ 95, best practices ≥ 95, SEO 100.
- No client-side JavaScript beyond the mobile menu, form and scroll animations.
- Logo SVGs are 30–40 KB each because of their detailed shading; inline nothing, load them as `<img>` with width and height set, and lazy-load anything below the fold. Case-study screenshots as WebP or AVIF via build-time optimisation.
- Add Cloudflare Web Analytics with its script snippet.

## Placeholders and open decisions

Claude Code builds with the placeholders in place; Ted fills these before launch.

- [ ] CAC RC number for TED-ROSA TECH NIG LTD (trust strip, footer, schema)
- [ ] Office address in Abuja
- [ ] One measurable result per case study, e.g. "monthly reporting cut from 4 days to live"
- [ ] Screenshots for the four case studies, with any client or personal data blurred
- [ ] Confirm permission to show each project publicly (some were built for an employer or under contract)
- [ ] At least one client testimonial with name, role and company
- [ ] Business email set up: hello@phoenix8labs.com (or the preferred address)
- [ ] LinkedIn company page URL
- [ ] Privacy notice text approved
- [ ] Decide: keep "Rebuilt to last" as the tagline, or switch to "Built to last" so it covers new builds too
- [ ] Decide: booking link (Calendly or Cal.com) or contact form only
- [ ] Simplified favicon / app icon from the phoenix mark

## Build phases and acceptance criteria

Ask Claude Code to complete one phase at a time and stop for review after each.

1. **Setup**: Next.js + TypeScript + Tailwind project, static export, brand tokens as CSS variables mapped into Tailwind, fonts via `next/font`, logo files in `public/brand/`, `CLAUDE.md` and `HANDOVER.md` committed.
   - Done when: `npm run build` produces `out/` with no errors and a blank page shows the correct background, fonts and header logo.
2. **Homepage**: all nine homepage parts built from `/content/site.ts`, matching the design screenshots in `docs/design/`.
   - Done when: the page matches the screenshots at 1440px and 390px, all anchor links scroll to the right section under the sticky header, and the mobile menu works by touch and keyboard.
3. **Contact, privacy and 404**: the contact form with Turnstile and the Pages Function, the privacy page and the 404 page.
   - Done when: a test submission arrives in the business inbox, a bot-like submission is rejected, and both success and error messages display.
4. **SEO, analytics and polish**: metadata, Open Graph image, sitemap, robots, JSON-LD, Cloudflare Web Analytics, favicon, reduced-motion support.
   - Done when: Lighthouse mobile hits the targets in the performance section, and the share preview looks right when the link is pasted into WhatsApp and LinkedIn.
5. **Deploy**: Cloudflare Pages connected to the repo, phoenix8labs.com and www redirect configured, HTTPS on.
   - Done when: every push to `main` deploys automatically, and the live site passes the checks from phases 2–4.

**Before going live**, every item in the placeholders checklist is either filled or deliberately hidden. Nothing in square brackets should appear on the live site.
