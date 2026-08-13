"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { WorkTile, type WorkPattern } from "./WorkTile";

type Project = {
  index: string;
  category: string;
  title: string;
  description: string;
  pattern: WorkPattern;
  tone: "olive" | "ink" | "sage";
  size: "lg" | "sm";
};

const PROJECTS: Project[] = [
  {
    index: "01",
    category: "Brand Strategy & Positioning",
    title: "Finding the sharp edge",
    description:
      "Distilling a crowded category into one position a brand can own — and repeat for the next decade.",
    pattern: "rings",
    tone: "olive",
    size: "lg",
  },
  {
    index: "02",
    category: "Identity & Visual System",
    title: "A system, not a logo",
    description:
      "Mark, type, colour and motion built to hold together across every surface a brand touches.",
    pattern: "grid",
    tone: "ink",
    size: "sm",
  },
  {
    index: "03",
    category: "Website & Digital Product",
    title: "Built to be used",
    description:
      "Interfaces designed from the content out — fast, legible, and unmistakably on-brand.",
    pattern: "cross",
    tone: "sage",
    size: "sm",
  },
  {
    index: "04",
    category: "Social & Content Direction",
    title: "A voice, kept consistent",
    description:
      "Editorial systems and content direction that scale across a real posting calendar.",
    pattern: "dots",
    tone: "olive",
    size: "lg",
  },
  {
    index: "05",
    category: "Performance & Growth",
    title: "Creative that's measured",
    description:
      "Campaign systems built for iteration — where strategy and performance report to each other.",
    pattern: "stripes",
    tone: "ink",
    size: "sm",
  },
];

const TILT = [
  "md:-rotate-[0.6deg]",
  "md:rotate-[0.9deg]",
  "md:-rotate-[1.1deg]",
  "md:rotate-[0.5deg]",
  "md:-rotate-[0.8deg]",
];

const TONE_TEXT: Record<Project["tone"], string> = {
  olive: "text-paper",
  ink: "text-paper",
  sage: "text-ink",
};

export function SelectedWork() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-work-card]");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 60 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: rootRef }
  );

  return (
    <section id="work" ref={rootRef} className="bg-paper px-5 py-24 md:px-10 md:py-36">
      <div className="mb-14 flex flex-col gap-4 md:mb-20 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="mb-3 block font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
            01 / Selected Work
          </span>
          <h2 className="font-display text-5xl italic leading-none tracking-tight text-ink md:text-7xl">
            Selected&nbsp;Work
          </h2>
        </div>
        <p className="max-w-sm text-pretty font-mono text-xs uppercase leading-relaxed tracking-[0.1em] text-ink-faint">
          Full case studies are launching soon. Here&rsquo;s the shape of the
          work — across strategy, identity, product and growth.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {PROJECTS.map((project, i) => (
          <div
            key={project.index}
            className={`group transition-transform duration-500 ease-out hover:rotate-0 ${TILT[i % TILT.length]} ${
              project.size === "lg" ? "md:col-span-2" : ""
            }`}
          >
            <article
              data-work-card
              className={`relative flex flex-col justify-end overflow-hidden border border-line ${TONE_TEXT[project.tone]} ${
                project.size === "lg" ? "aspect-[16/9]" : "aspect-[4/5]"
              }`}
            >
              <div className="transition-transform duration-700 ease-out group-hover:scale-105 absolute inset-0">
                <WorkTile pattern={project.pattern} tone={project.tone} />
              </div>

              <div className="relative flex items-start justify-between p-5 md:p-7">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-current opacity-80">
                  {project.index} / {project.category}
                </span>
              </div>

              <div className="relative mt-auto flex flex-col gap-2 p-5 pt-16 md:p-7 md:pt-24">
                <h3 className="font-display text-3xl leading-tight tracking-tight md:text-4xl">
                  {project.title}
                </h3>
                <p className="max-w-md text-pretty text-sm leading-relaxed opacity-90 md:text-base">
                  {project.description}
                </p>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
