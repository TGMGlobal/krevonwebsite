import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Clients } from "@/components/Clients";
import { WorkTrack } from "@/components/WorkTrack";
import { Rules } from "@/components/Rules";
import { Capabilities } from "@/components/Capabilities";
import { Quote } from "@/components/Quote";
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
      <Quote
        tone="green"
        opening={home.quotes.first.opening}
        rest={home.quotes.first.rest}
        attribution={home.quotes.first.attribution}
      />
      <Clients />
      <WorkTrack />
      <Rules />
      <Capabilities />
      <Quote
        tone="light"
        mirrored
        opening={home.quotes.second.opening}
        rest={home.quotes.second.rest}
        attribution={home.quotes.second.attribution}
        note={home.quotes.note}
      />
      <Closing heading={home.closing.heading} body={home.closing.body} button={home.closing.cta} />
    </>
  );
}
