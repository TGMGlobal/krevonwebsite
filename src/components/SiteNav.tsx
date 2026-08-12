"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { LogoMark } from "./LogoMark";

const LINKS = [
  { label: "Selected Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Studio", href: "#philosophy" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useGSAP(
    () => {
      if (!overlayRef.current) return;
      const items = linksRef.current?.querySelectorAll("[data-nav-link]");

      if (open) {
        gsap.set(overlayRef.current, { display: "flex" });
        gsap.fromTo(
          overlayRef.current,
          { clipPath: "inset(0% 0% 100% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 0.6, ease: "power4.inOut" }
        );
        if (items) {
          gsap.fromTo(
            items,
            { autoAlpha: 0, y: 24 },
            { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.06, delay: 0.25, ease: "power3.out" }
          );
        }
      } else if (overlayRef.current.style.display === "flex") {
        gsap.to(overlayRef.current, {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 0.5,
          ease: "power3.inOut",
          onComplete: () => gsap.set(overlayRef.current, { display: "none" }),
        });
      }
    },
    { dependencies: [open] }
  );

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-5 text-paper transition-[background-color,backdrop-filter,padding] duration-300 md:px-10 ${
          scrolled
            ? "bg-ink/85 py-4 backdrop-blur-sm md:py-5"
            : "bg-transparent py-5 mix-blend-difference md:py-7"
        }`}
      >
        <a
          href="#top"
          className="flex items-center gap-2.5 md:gap-3"
          aria-label="Krevon Studio, back to top"
        >
          <LogoMark className="h-6 w-6 md:h-7 md:w-7" />
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] md:text-sm">
            Krevon Studio
          </span>
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="site-menu"
          className="group relative z-[60] flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] cursor-pointer"
        >
          <span>{open ? "Close" : "Menu"}</span>
          <span className="relative flex h-5 w-8 flex-col items-center justify-center gap-[5px]">
            <span
              className={`h-px w-full bg-current transition-transform duration-300 ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-current transition-transform duration-300 ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </header>

      <div
        id="site-menu"
        ref={overlayRef}
        className="fixed inset-0 z-40 hidden flex-col justify-between bg-ink px-5 pb-10 pt-24 text-paper md:px-10"
        style={{ clipPath: "inset(0% 0% 100% 0%)" }}
      >
        <nav
          ref={linksRef}
          aria-label="Primary"
          className="flex flex-1 flex-col justify-center gap-2 md:gap-4"
        >
          {LINKS.map((link, i) => (
            <a
              key={link.href}
              data-nav-link
              href={link.href}
              onClick={() => setOpen(false)}
              className="group flex items-baseline gap-4 border-b border-line-dark py-3 md:py-4"
            >
              <span className="font-mono text-xs text-ink-faint md:text-sm">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-[13vw] leading-[0.95] tracking-tight transition-transform duration-300 group-hover:translate-x-3 md:text-[6vw]">
                {link.label}
              </span>
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-4 font-mono text-xs uppercase tracking-[0.2em] text-ink-faint md:flex-row md:items-center md:justify-between">
          <span>Straight talk. Built to lead.</span>
          <a href="mailto:hello@krevonstudio.com" className="text-paper hover:text-olive">
            hello@krevonstudio.com
          </a>
        </div>
      </div>
    </>
  );
}
