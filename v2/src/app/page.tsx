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
  slogan: site.line,
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
      <WorkTrack />
      <Clients />
      <Quote tone="green" {...home.quotes.first} />
      <Rules />
      <Capabilities />
      <Quote tone="black" side="right" {...home.quotes.second} footnote={home.quotes.note} />
      <Closing
        heading={home.closing.heading}
        body={home.closing.body}
        button={home.closing.cta}
        penNote={home.closing.penNote}
      />
    </>
  );
}
