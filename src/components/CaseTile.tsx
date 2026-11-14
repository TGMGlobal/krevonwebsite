import Link from "next/link";
import type { CaseStudy } from "@/content/work";
import { workPage } from "@/content/work";
import { WorkTile } from "./WorkTile";
import { Arrow } from "./Button";

/** Large image-led tile linking to a case study. `wide` spans both grid columns on desktop. */
export function CaseTile({
  study,
  index,
  wide = false,
  priority = false,
  heading: Heading = "h3",
}: {
  study: CaseStudy;
  index: number;
  wide?: boolean;
  priority?: boolean;
  /** Heading level for the client name, so each page keeps a correct outline. */
  heading?: "h2" | "h3";
}) {
  return (
    <Link
      href={`/work/${study.slug}/`}
      className={`group relative flex w-full flex-col justify-between overflow-hidden border border-cream/15 text-cream transition-colors duration-300 hover:border-green ${
        wide ? "min-h-[30rem] sm:aspect-[16/10] lg:aspect-[21/9]" : "min-h-[30rem] sm:aspect-[16/10] lg:aspect-[4/5] xl:aspect-square"
      }`}
    >
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
        <WorkTile
          image={study.cover}
          pattern={study.pattern}
          priority={priority}
          showLabel={false}
          sizes={wide ? "100vw" : "(min-width: 1024px) 50vw, 100vw"}
        />
        {study.cover.src ? (
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-black/20" />
        ) : null}
      </div>

      <div className="relative flex items-start justify-between gap-4 p-5 md:p-8">
        <span className="eyebrow flex flex-col gap-2 text-green">
          {String(index + 1).padStart(2, "0")}
          {study.cover.src ? null : (
            <span className="text-[0.625rem] text-cream/75">{workPage.labels.placeholder}</span>
          )}
        </span>
        <ul className="flex flex-wrap justify-end gap-2 pr-0">
          {study.tags.map((tag) => (
            <li key={tag} className="eyebrow border border-cream/30 bg-black/60 px-2.5 py-1 text-[0.625rem] text-cream">
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative flex flex-col gap-5 p-5 md:p-8">
        <div className="flex flex-col gap-1">
          <span className={`display text-green ${wide ? "text-7xl md:text-8xl xl:text-9xl" : "text-7xl md:text-8xl"}`}>
            {study.highlight.value}
          </span>
          <span className="max-w-xs text-sm text-cream/80">{study.highlight.label}</span>
        </div>
        <div className="flex items-end justify-between gap-6 border-t border-cream/20 pt-5">
          <div>
            <Heading className="display text-3xl md:text-4xl">{study.client}</Heading>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-cream/80">{study.title}</p>
          </div>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-cream/40 transition-colors duration-300 group-hover:border-green group-hover:bg-green group-hover:text-black">
            <Arrow />
            <span className="sr-only">{workPage.labels.viewCase}</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
