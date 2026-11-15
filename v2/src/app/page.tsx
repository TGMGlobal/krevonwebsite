import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Statement } from "@/components/Statement";
import { Clients } from "@/components/Clients";
import { WorkTrack } from "@/components/WorkTrack";
import { Rules } from "@/components/Rules";
import { Capabilities } from "@/components/Capabilities";
import { Quotes } from "@/components/Quotes";
import { Closing } from "@/components/Closing";
import { home } from "@/content/home";
import { site } from "@/content/site";
import { studio } from "@/content/studio";
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
  sameAs: site.socials.map((social) => social.href),
  knowsAbout: studio.services.items.map((service) => service.title),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <Statement text={home.statement} />
      <Clients />
      <WorkTrack />
      <Rules />
      <Capabilities />
      <Quotes />
      <Closing heading={home.closing.heading} body={home.closing.body} button={home.closing.cta} />
    </>
  );
}
