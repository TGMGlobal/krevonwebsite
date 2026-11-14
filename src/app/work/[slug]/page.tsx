import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { WorkTile } from "@/components/WorkTile";
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
    title: `${study.client}: ${study.tags[0]}`,
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
    headline: `${study.client}: ${study.title}`,
    description: study.metaDescription,
    url: `${site.url}/work/${study.slug}/`,
    author: { "@type": "Organization", name: site.name, url: `${site.url}/` },
    publisher: { "@type": "Organization", name: site.name, url: `${site.url}/` },
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="bg-black pt-18 md:pt-22">
        <div className="shell pb-10 pt-12 md:pb-14 md:pt-20">
          <Link href="/work/" className="eyebrow group mb-10 inline-flex items-center gap-3 text-cream/75 hover:text-green">
            <Arrow className="rotate-180 group-hover:-translate-x-1 group-hover:translate-x-0" />
            {workPage.eyebrow}
          </Link>
          <ul className="mb-6 flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <li key={tag} className="eyebrow border border-green px-2.5 py-1 text-[0.6875rem] text-green">
                {tag}
              </li>
            ))}
          </ul>
          <h1 className="display max-w-[14ch] text-balance text-[clamp(3rem,9vw,8.5rem)] text-cream">{study.client}</h1>
          <p className="mt-6 max-w-2xl text-pretty text-xl leading-snug text-cream md:text-2xl">{study.title}</p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cream/75">{study.category}</p>
        </div>

        <div className="shell">
          <div className="relative aspect-[4/3] overflow-hidden border border-cream/15 md:aspect-[16/9]">
            <WorkTile image={study.cover} pattern={study.pattern} sizes="100vw" priority />
          </div>
        </div>
      </header>

      <section className="bg-black">
        <div className="shell grid grid-cols-1 gap-14 py-20 md:grid-cols-12 md:gap-8 md:py-28">
          <div className="md:col-span-7">
            <p className="eyebrow mb-5 text-green">{labels.challenge}</p>
            <h2 className="display text-balance text-4xl text-cream md:text-6xl">{study.challengeHeading}</h2>
            <div className="mt-8 flex max-w-xl flex-col gap-5 text-base leading-relaxed text-cream/85 md:text-lg md:leading-relaxed">
              {study.challenge.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <p className="eyebrow mb-5 mt-16 text-green md:mt-24">{labels.work}</p>
            <h2 className="display text-balance text-4xl text-cream md:text-6xl">{study.workHeading}</h2>
            <div className="mt-8 flex max-w-xl flex-col gap-5 text-base leading-relaxed text-cream/85 md:text-lg md:leading-relaxed">
              {study.work.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="md:col-span-4 md:col-start-9">
            <div className="md:sticky md:top-32">
              <p className="eyebrow mb-4 text-cream/75">{labels.scope}</p>
              <ul className="border-t border-cream/30">
                {study.scope.map((item) => (
                  <li key={item} className="border-b border-cream/15 py-3 text-sm text-cream">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-cream/15 bg-black">
        <div className="shell py-20 md:py-28">
          <div className="mb-12 md:mb-16">
            <h2 className="display text-5xl text-cream md:text-7xl">{study.resultsHeading}</h2>
            {study.resultsNote ? <p className="mt-4 max-w-xl text-sm text-cream/75">{study.resultsNote}</p> : null}
          </div>

          <Reveal as="ul" stagger className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
            {study.results.map((stat) => (
              <li key={stat.label} className="border-t border-green pt-5">
                <p className="eyebrow h-5 text-cream/75">{stat.approx ? labels.approx : ""}</p>
                <p className="display text-7xl text-green md:text-8xl">{stat.value}</p>
                {stat.original ? <p className="mt-1 text-xs text-cream/75">{stat.original}</p> : null}
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/85">{stat.label}</p>
              </li>
            ))}
          </Reveal>

          {study.insight ? (
            <Reveal className="mt-16 border-l-4 border-green pl-6 md:mt-24 md:w-9/12 md:pl-10 xl:w-7/12">
              <p className="eyebrow mb-4 text-green">{study.insight.label}</p>
              <p className="text-pretty text-xl font-medium leading-snug text-cream md:text-3xl md:leading-snug">
                {study.insight.text}
              </p>
            </Reveal>
          ) : null}
        </div>
      </section>

      <section className="bg-black">
        <div className="shell pb-20 md:pb-28">
          <h2 className="eyebrow mb-6 text-cream/75">{labels.gallery}</h2>
          <Reveal stagger className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            {study.gallery.map((image, i) => (
              <div
                key={image.alt}
                className={`relative overflow-hidden border border-cream/15 ${
                  i === 0 ? "aspect-[4/3] md:col-span-2 md:aspect-auto" : "aspect-[4/3]"
                } ${i === 2 ? "md:col-span-3 md:aspect-[21/9]" : ""}`}
              >
                <WorkTile
                  image={image}
                  pattern={study.pattern}
                  sizes={i === 1 ? "(min-width: 768px) 33vw, 100vw" : "100vw"}
                />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <Link
        href={`/work/${next.slug}/`}
        className="group block border-t border-cream/15 bg-black transition-colors duration-300 hover:bg-cream/5"
      >
        <div className="shell flex items-end justify-between gap-8 py-14 md:py-20">
          <div>
            <p className="eyebrow mb-4 text-green">{labels.next}</p>
            <p className="display text-5xl text-cream md:text-7xl">{next.client}</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/80">{next.title}</p>
          </div>
          <span className="flex h-14 w-14 shrink-0 items-center justify-center border border-cream/40 text-cream transition-colors duration-300 group-hover:border-green group-hover:bg-green group-hover:text-black">
            <Arrow />
          </span>
        </div>
      </Link>

      <CtaBand heading={workPage.cta.heading} body={workPage.cta.body} button={workPage.cta.button} />
    </article>
  );
}
