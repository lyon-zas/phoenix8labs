// All site copy lives here. Text in [square brackets] is a placeholder Ted supplies before launch.

export type IconName = "erp" | "ai" | "pos" | "web" | "mobile";

export const site = {
  name: "Phoenix 8 Labs",
  legalName: "TED-ROSA TECH NIG LTD",
  rc: "[NUMBER]",
  email: "hello@phoenix8labs.com",
  address: "[Office address]",
  linkedin: "[LINKEDIN URL]",
  url: "https://phoenix8labs.com",
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
] as const;

export const headerCta = { label: "Book a call", href: "#contact" };

export const hero = {
  eyebrow: "Software · AI · Data systems",
  headline: "We build the systems businesses run on.",
  body: "Phoenix 8 Labs designs and builds the systems growing companies run on: ERP and CRM platforms, AI lead generation, retail and POS systems, websites and mobile apps.",
  primary: { label: "Book a discovery call", href: "#contact" },
  secondary: { label: "See our work", href: "#work" },
};

export const trust = {
  left: "Registered with the CAC",
  right: "Based in Abuja · Working across Nigeria and beyond",
};

export const services = {
  eyebrow: "What we build",
  headline: "New systems built from scratch. Existing ones made to work.",
  side: "Every project starts with how your business actually works, then we build the software around it.",
  items: [
    {
      icon: "erp",
      title: "ERP & CRM systems",
      body: "One system for sales, inventory, finance and HR across all your companies and branches, with dashboards leadership actually uses.",
    },
    {
      icon: "ai",
      title: "AI lead generation",
      body: "Engines that find, score and qualify prospects automatically, then trigger personalised outreach so your team only talks to warm leads.",
    },
    {
      icon: "pos",
      title: "POS & retail systems",
      body: "Offline-first point of sale and inventory that keeps selling when the internet drops, and syncs when it's back.",
    },
    {
      icon: "web",
      title: "Websites",
      body: "Fast, secure company websites on modern frameworks, including migrations off slow WordPress setups.",
    },
    {
      icon: "mobile",
      title: "Mobile apps",
      body: "iOS and Android apps in Flutter and React Native, from customer apps to field tools, payments and Web3 integrations.",
    },
  ] satisfies { icon: IconName; title: string; body: string }[],
  highlight: {
    title: "Not sure which you need?",
    body: "Tell us where the business is losing time or money. We'll map it and recommend the smallest system that fixes it.",
    link: { label: "Start with a free consultation →", href: "#contact" },
  },
};

export const work = {
  eyebrow: "Selected work",
  headline: "Built for real operations.",
  items: [
    {
      tag: "ERP · Energy",
      title: "Multi-company ERP for a solar energy group",
      body: "One ERPNext platform running sales, stock and finance for a group of sister companies, with around 500 users.",
      result: "[RESULT]",
      image: "[Dashboard screenshot]",
    },
    {
      tag: "AI · Commercial real estate",
      title: "AI lead engine for a commercial property group",
      body: "Sources and scores prospective tenants and partners automatically, feeding a CRM and executive reporting dashboard.",
      result: "[RESULT]",
      image: "[Lead scoring screenshot]",
    },
    {
      tag: "Retail · POS",
      title: "Offline-first POS for a multi-vertical building",
      body: "Point of sale and inventory for several businesses under one roof, built to keep trading through network outages.",
      result: "[RESULT]",
      image: "[POS screenshot]",
    },
    {
      tag: "Web · Migration",
      title: "From WordPress to a modern Next.js site",
      body: "A corporate website moved off shared WordPress hosting onto Next.js and Cloudflare for speed and security.",
      result: "[RESULT]",
      image: "[Website screenshot]",
    },
  ],
};

export const process = {
  eyebrow: "How we work",
  headline: "Clear steps. No surprises.",
  steps: [
    {
      n: "01",
      title: "Discover",
      body: "We map your processes, people and pain points, then agree scope, cost and timeline in writing.",
    },
    {
      n: "02",
      title: "Design",
      body: "You see and click through the screens before a line of production code is written.",
    },
    {
      n: "03",
      title: "Build",
      body: "Short cycles with working demos, so you can test with your team as it takes shape.",
    },
    {
      n: "04",
      title: "Launch & support",
      body: "Data migration, staff training and ongoing support after go-live.",
    },
  ],
  stackLabel: "We build with",
  stack: ["Next.js", "React Native", "Flutter", "Frappe / ERPNext", "Python", "Cloudflare", "Solana"],
};

export const about = {
  quote: "“[Client testimonial: one or two sentences about the result you delivered.]”",
  cite: "[Name], [Role], [Company]",
  eyebrow: "About",
  paragraphs: [
    "Phoenix 8 Labs is led by Eyimofe “Ted” Orimolade, a developer and AI transformation lead who has built CRM infrastructure, ERP rollouts, AI tooling and mobile apps for organisations in Abuja and beyond.",
    "The name says what we do: build systems that last, whether we're starting from a blank page or renewing what you already have.",
  ],
};

export const cta = {
  headline: "Building something new, or fixing what you have?",
  body: "Book a 30-minute call. You'll leave with a clear view of what to fix first, whether or not we work together.",
  button: { label: "Book a discovery call", href: "mailto:hello@phoenix8labs.com" },
};

export const footer = {
  links: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy", href: "/privacy/" },
    { label: "LinkedIn", href: "#" },
  ],
};
