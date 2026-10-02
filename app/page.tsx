import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { ContactCta } from "@/components/sections/ContactCta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <Work />
      <Process />
      <About />
      <ContactCta />
    </>
  );
}
