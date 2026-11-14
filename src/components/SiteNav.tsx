"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap, useGSAP } from "@/lib/gsap";
import { site } from "@/content/site";
import { Logo } from "./Logo";
import { Arrow } from "./Button";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll and allow Escape to close while the menu is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useGSAP(
    () => {
      const overlay = overlayRef.current;
      if (!overlay) return;
      const items = overlay.querySelectorAll("[data-menu-item]");
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (open) {
        gsap.set(overlay, { display: "flex" });
        if (reduced) {
          gsap.set(overlay, { clipPath: "inset(0% 0% 0% 0%)" });
          return;
        }
        const tl = gsap.timeline();
        tl.fromTo(
          overlay,
          { clipPath: "inset(0% 0% 100% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 0.55, ease: "power4.inOut" }
        ).fromTo(
          items,
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.06, ease: "power3.out" },
          "-=0.2"
        );
      } else if (overlay.style.display === "flex") {
        if (reduced) {
          gsap.set(overlay, { display: "none" });
          return;
        }
        gsap.timeline().to(overlay, {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 0.45,
          ease: "power3.inOut",
          onComplete: () => {
            gsap.set(overlay, { display: "none" });
          },
        });
      }
    },
    { dependencies: [open] }
  );

  const isActive = (href: string) => {
    const strip = (value: string) => value.replace(/\/+$/, "");
    return strip(pathname) === strip(href) || pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
          scrolled || open ? "border-cream/15 bg-black" : "border-transparent bg-black/0"
        }`}
      >
        <div className="shell flex h-18 items-center justify-between md:h-22">
          <Link href="/" aria-label={`${site.name}, home`} onClick={() => setOpen(false)}>
            <Logo on="black" priority className="h-11 md:h-13" />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
            {site.nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`eyebrow transition-colors hover:text-green ${
                  isActive(link.href) ? "text-green" : "text-cream"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={site.cta.href}
              className="group inline-flex items-center gap-3 bg-green px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-cream"
            >
              {site.cta.label}
              <Arrow />
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-menu"
            className="eyebrow -mr-2 flex cursor-pointer items-center gap-3 p-2 text-cream md:hidden"
          >
            <span>{open ? site.menu.close : site.menu.open}</span>
            <span aria-hidden="true" className="relative flex h-4 w-7 flex-col justify-center gap-[6px]">
              <span
                className={`h-[2px] w-full bg-current transition-transform duration-300 ${
                  open ? "translate-y-[4px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] w-full bg-current transition-transform duration-300 ${
                  open ? "-translate-y-[4px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        id="site-menu"
        ref={overlayRef}
        className="fixed inset-0 z-40 hidden flex-col justify-between overflow-y-auto bg-black px-5 pb-8 pt-28 md:hidden"
        style={{ clipPath: "inset(0% 0% 100% 0%)" }}
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {site.nav.map((link, i) => (
            <Link
              key={link.href}
              data-menu-item
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(link.href) ? "page" : undefined}
              className="flex items-baseline gap-4 border-b border-cream/15 py-4"
            >
              <span className="eyebrow text-green">{String(i + 1).padStart(2, "0")}</span>
              <span className="display text-6xl text-cream">{link.label}</span>
            </Link>
          ))}
          <Link
            data-menu-item
            href={site.cta.href}
            onClick={() => setOpen(false)}
            className="group mt-8 inline-flex items-center justify-between gap-3 bg-green px-6 py-5 text-sm font-bold uppercase tracking-[0.18em] text-black"
          >
            {site.cta.label}
            <Arrow />
          </Link>
        </nav>

        <div data-menu-item className="mt-10 flex flex-col gap-3">
          <span className="eyebrow text-green">{site.tagline}</span>
          <a href={`mailto:${site.email}`} className="text-sm text-cream underline underline-offset-4">
            {site.email}
          </a>
        </div>
      </div>
    </>
  );
}
