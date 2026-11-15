"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { home } from "@/content/home";
import { caseStudies } from "@/content/work";
import { asset } from "@/lib/paths";
import { Arrow, Button } from "./Button";

/**
 * The four projects. On desktop the section pins and the plates travel
 * sideways with the scroll. On smaller screens, and with reduced motion,
 * they stack.
 */
export function WorkTrack() {
  const rootRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const copy = home.work;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(`(min-width: 1024px) and ${MOTION_OK}`, () => {
        const track = trackRef.current;
        if (!track) return;
        const distance = () => track.scrollWidth - window.innerWidth;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
        tl.to(track, { x: () => -distance(), ease: "none" });
      });
    },
    { scope: rootRef }
  );

  return (
    <section ref={rootRef} className="overflow-hidden bg-black">
      <div className="flex flex-col justify-center py-20 lg:h-svh lg:py-0 lg:pt-22">
        <div className="shell mb-8 flex items-end justify-between gap-6 lg:mb-10">
          <div>
            <p className="eyebrow mb-3 text-green">{copy.eyebrow}</p>
            <h2 className="display text-5xl text-cream md:text-6xl">{copy.heading}</h2>
          </div>
          <div className="hidden sm:block">
            <Button href="/work/" variant="outline">
              {copy.allLabel}
            </Button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex flex-col gap-5 px-5 will-change-transform md:px-10 lg:w-max lg:flex-row lg:gap-6 xl:px-16"
        >
          {caseStudies.map((study, i) => (
            <Link
              key={study.slug}
              href={`/work/${study.slug}/`}
              className="group relative flex w-full flex-col border border-cream/20 transition-colors duration-300 hover:border-green md:flex-row lg:h-[62svh] lg:w-[64vw] lg:shrink-0 xl:w-[58vw]"
            >
              <div className="flex min-h-[24rem] flex-1 flex-col justify-between p-6 md:p-9 lg:min-h-0">
                <div className="flex items-start justify-between gap-6">
                  <span className="eyebrow text-green">
                    {String(i + 1).padStart(2, "0")} / {String(caseStudies.length).padStart(2, "0")}
                  </span>
                  <span className="eyebrow max-w-[60%] text-right text-cream/75">{study.tags.join(" · ")}</span>
                </div>

                <div>
                  <p className="display text-[clamp(5rem,11vw,11rem)] text-green">{study.highlight.value}</p>
                  <p className="mt-1 text-base text-cream/85 md:text-lg">{study.highlight.label}</p>
                </div>

                <div className="flex items-end justify-between gap-6 border-t border-cream/20 pt-5">
                  <div>
                    <h3 className="display text-3xl text-cream md:text-4xl">{study.client}</h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-cream/80">{study.line}</p>
                  </div>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-cream/40 text-cream transition-colors duration-300 group-hover:border-green group-hover:bg-green group-hover:text-black">
                    <Arrow />
                  </span>
                </div>
              </div>

              {study.cover ? (
                <div className="relative order-first h-64 overflow-hidden border-b border-cream/20 md:order-none md:h-auto md:w-[38%] md:shrink-0 md:border-b-0 md:border-l">
                  <Image
                    src={asset(study.cover.src)}
                    alt={study.cover.alt}
                    fill
                    sizes="(min-width: 1024px) 24vw, (min-width: 768px) 38vw, 100vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
              ) : null}
            </Link>
          ))}
        </div>

        <div className="shell mt-8 sm:hidden">
          <Button href="/work/" variant="outline" className="w-full">
            {copy.allLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
