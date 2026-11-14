import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ProofStrip } from "@/components/ProofStrip";
import { ServicesIntro } from "@/components/ServicesIntro";
import { SelectedWork } from "@/components/SelectedWork";
import { Principles } from "@/components/Principles";
import { Testimonials } from "@/components/Testimonials";
import { CtaBand } from "@/components/CtaBand";
import { home } from "@/content/home";
import { site } from "@/content/site";
import { services } from "@/content/approach";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: home.meta.title,
  description: home.meta.description,
  path: "/",
  absoluteTitle: true,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#organization`,
  name: site.name,
  slogan: site.tagline,
  description: site.description,
  url: `${site.url}/`,
  email: site.email,
  logo: `${site.url}/brand/krevon-avatar.svg`,
  image: `${site.url}/og.png`,
  address: [
    { "@type": "PostalAddress", addressLocality: "Indore", addressCountry: "IN" },
    { "@type": "PostalAddress", addressLocality: "Mumbai", addressCountry: "IN" },
  ],
  areaServed: site.markets,
  sameAs: site.socials.map((social) => social.href),
  knowsAbout: services.map((service) => service.title),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <ProofStrip />
      <ServicesIntro />
      <SelectedWork />
      <Principles />
      <Testimonials />
      <CtaBand heading={home.finalCta.heading} body={home.finalCta.body} button={home.finalCta.cta} />
    </>
  );
}
