"use client";

import { useState } from "react";

const CAPABILITIES = [
  {
    title: "Brand Strategy",
    description:
      "Positioning, naming and messaging — the strategic foundation every other decision sits on.",
  },
  {
    title: "Branding & Identity",
    description:
      "Visual systems — mark, type, colour, motion — built to hold together across everywhere a brand shows up.",
  },
  {
    title: "Creative",
    description:
      "Concepts and campaigns with a clear point of view. Ideas first, execution second.",
  },
  {
    title: "Social & Content",
    description:
      "Editorial direction and content systems that keep a voice consistent at real posting speed.",
  },
  {
    title: "Websites",
    description:
      "Digital product and web design, built from the content out — fast, legible, on-brand.",
  },
  {
    title: "Performance Marketing",
    description:
      "Media and campaign execution tied back to strategy, so spend compounds instead of resets.",
  },
  {
    title: "Digital Growth",
    description:
      "Ongoing optimisation across a brand's digital presence — a practice, not a one-off project.",
  },
];

export function Capabilities() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="capabilities" className="bg-ink px-5 py-24 text-paper md:px-10 md:py-36">
      <div className="mb-14 flex items-end justify-between md:mb-20">
        <h2 className="font-display text-5xl italic leading-none tracking-tight md:text-7xl">
          Capabilities
        </h2>
        <span className="hidden font-mono text-xs uppercase tracking-[0.2em] text-paper/50 md:inline">
          04 / What we do
        </span>
      </div>

      <ul className="border-t border-line-dark">
        {CAPABILITIES.map((cap, i) => {
          const open = openIndex === i;
          return (
            <li key={cap.title} className="border-b border-line-dark">
              <button
                type="button"
                onClick={() => setOpenIndex(open ? -1 : i)}
                aria-expanded={open}
                aria-controls={`cap-panel-${i}`}
                className="flex w-full cursor-pointer items-baseline gap-4 py-6 text-left transition-colors hover:text-olive md:gap-8 md:py-8"
              >
                <span className="font-mono text-xs text-paper/40 md:text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-3xl leading-none tracking-tight sm:text-4xl md:text-5xl">
                  {cap.title}
                </span>
                <span
                  className={`ml-auto shrink-0 font-mono text-xl transition-transform duration-300 ${
                    open ? "rotate-45" : ""
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              <div
                id={`cap-panel-${i}`}
                className="grid transition-[grid-template-rows] duration-500 ease-in-out"
                style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <p className="max-w-xl text-pretty pb-8 pl-0 text-base leading-relaxed text-paper/70 sm:pl-[3.25rem] md:pb-10 md:pl-[4.75rem] md:text-lg">
                    {cap.description}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
