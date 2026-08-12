import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { CapabilityMarquee } from "@/components/CapabilityMarquee";
import { SelectedWork } from "@/components/SelectedWork";
import { Philosophy } from "@/components/Philosophy";
import { HowWeSound } from "@/components/HowWeSound";
import { Capabilities } from "@/components/Capabilities";
import { Credibility } from "@/components/Credibility";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Krevon Studio",
  description:
    "Krevon Studio is an independent creative, strategy and digital agency. Straight talk. Built to lead. We offer brand strategy, branding and identity, creative, social and content, websites, performance marketing and digital growth.",
  url: "https://krevonstudio.com",
  email: "hello@krevonstudio.com",
  areaServed: "Worldwide",
  knowsAbout: [
    "Brand Strategy",
    "Branding & Identity",
    "Creative",
    "Social & Content",
    "Websites",
    "Performance Marketing",
    "Digital Growth",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav />
      <main id="main">
        <Hero />
        <CapabilityMarquee />
        <SelectedWork />
        <Philosophy />
        <HowWeSound />
        <Capabilities />
        <Credibility />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
