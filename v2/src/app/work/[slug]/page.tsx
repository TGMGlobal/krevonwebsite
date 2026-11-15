import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/Button";
import { Closing } from "@/components/Closing";
import { Reveal } from "@/components/Reveal";
import { Strike } from "@/components/Strike";
import { Gallery } from "@/components/Gallery";
import { caseStudies, getCaseStudy, getNextCaseStudy, workPage } from "@/content/work";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return pageMeta({
    title: study.metaTitle,
    description: study.metaDescription,
    path: `/work/${study.slug}/`,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const next = getNextCaseStudy(study.slug);
  const { labels } = workPage;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.metaTitle,
    description: study.metaDescription,
    url: `${site.url}/work/${study.slug}/`,
    author: { "@type": "Organization", name: site.name, url: `${site.url}/` },
    publisher: { "@type": "Organization", name: site.name, url: `${site.url}/` },
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="bg-black pt-18 md:pt-22">
        <div className="shell pb-16 pt-12 md:pb-24 md:pt-20">
          <Link href="/work/" className="eyebrow group mb-12 inline-flex items-center gap-3 text-cream/75 hover:text-green">
            <Arrow className="rotate-180 group-hover:-translate-x-1" />
            {workPage.eyebrow}
          </Link>
          <p className="display text-[clamp(5.5rem,20vw,21rem)] text-green">{study.highlight.value}</p>
          <p className="text-lg text-cream/85 md:text-xl">{study.highlight.label}</p>

          <div className="mt-14 grid grid-cols-1 gap-6 border-t border-cream/30 pt-8 md:mt-20 md:grid-cols-12 md:gap-8">
            <h1 className="display text-5xl text-cream md:col-span-6 md:text-7xl">{study.client}</h1>
            <div className="md:col-span-5 md:col-start-8">
              <p className="text-pretty text-xl leading-snug text-cream md:text-2xl md:leading-snug">{study.line}</p>
              <p className="mt-4 text-sm leading-relaxed text-cream/75">{study.category}</p>
              <p className="eyebrow mt-4 text-green">{study.tags.join(" · ")}</p>
            </div>
          </div>
        </div>
      </header>

      <section className="on-light bg-offwhite text-black">
        <div className="shell grid grid-cols-1 gap-14 py-20 md:grid-cols-2 md:gap-16 md:py-28">
          <div className="md:col-span-2">
            <h2 className="eyebrow mb-3 text-black/70">{labels.easyAnswer}</h2>
            <p className="display text-[clamp(2.25rem,6vw,6rem)] text-black/55">
              <Strike>{study.easyAnswer}</Strike>
            </p>
          </div>
          <div>
            <h2 className="eyebrow mb-5 text-black/70">{labels.brief}</h2>
            <p className="text-pretty text-xl font-medium leading-snug md:text-2xl md:leading-snug">{study.brief}</p>
          </div>
          <div>
            <h2 className="eyebrow mb-5 text-black/70">{labels.work}</h2>
            <p className="text-pretty text-base leading-relaxed text-black/85 md:text-lg md:leading-relaxed">{study.work}</p>
          </div>
        </div>
      </section>

      {study.images.length > 0 ? (
        <Gallery heading={labels.made} layout={study.gallery} images={study.images} note={study.imagesNote} />
      ) : null}

      <section className="bg-black">
        <div className="shell py-20 md:py-28">
          <div className="mb-10 flex flex-col gap-3 md:mb-14 md:flex-row md:items-end md:justify-between">
            <h2 className="display text-5xl text-cream md:text-7xl">{study.resultsHeading}</h2>
            {study.resultsNote ? <p className="max-w-sm text-sm text-cream/75 md:text-right">{study.resultsNote}</p> : null}
          </div>

          <Reveal as="ul" stagger className="border-t border-cream/30">
            {study.results.map((stat) => (
              <li
                key={stat.label}
                className="grid grid-cols-1 gap-2 border-b border-cream/30 py-6 md:grid-cols-12 md:items-baseline md:gap-8 md:py-8"
              >
                <p className="flex flex-wrap items-baseline gap-x-3 md:col-span-5">
                  {stat.approx ? <span className="eyebrow text-cream/75">{labels.approx}</span> : null}
                  <span className="display text-6xl text-green md:text-8xl">{stat.value}</span>
                  {stat.original ? <span className="text-sm text-cream/75">{stat.original}</span> : null}
                </p>
                <p className="max-w-lg text-base leading-relaxed text-cream/85 md:col-span-6 md:col-start-7 md:text-lg">
                  {stat.label}
                </p>
              </li>
            ))}
          </Reveal>

          {study.insight ? (
            <Reveal className="mt-16 md:ml-[33.333%] md:mt-24">
              <p className="display max-w-[18ch] text-balance text-4xl text-cream md:text-6xl">{study.insight}</p>
            </Reveal>
          ) : null}
        </div>
      </section>

      <Link href={`/work/${next.slug}/`} className="group block border-t border-cream/15 bg-black">
        <div className="shell flex items-end justify-between gap-8 py-14 md:py-20">
          <div>
            <p className="eyebrow mb-3 text-green">{labels.next}</p>
            <p className="display text-5xl text-cream transition-transform duration-500 ease-out group-hover:translate-x-3 md:text-7xl">
              {next.client}
            </p>
          </div>
          <span className="flex h-14 w-14 shrink-0 items-center justify-center border border-cream/40 text-cream transition-colors duration-300 group-hover:border-green group-hover:bg-green group-hover:text-black">
            <Arrow />
          </span>
        </div>
      </Link>

      <Closing heading={workPage.cta.heading} body={workPage.cta.body} button={workPage.cta.button} />
    </article>
  );
}
