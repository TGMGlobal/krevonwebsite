import Link from "next/link";
import { site } from "@/content/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-cream/15 bg-black text-cream">
      <div className="shell grid grid-cols-1 gap-12 py-16 md:grid-cols-12 md:gap-8 md:py-24">
        <div className="flex flex-col gap-7 md:col-span-6">
          <Link href="/" aria-label={`${site.name}, home`} className="w-fit">
            <Logo on="black" className="h-20 md:h-24" />
          </Link>
          <p className="display text-3xl text-green md:text-4xl">{site.tagline}</p>
          <p className="max-w-md text-sm leading-relaxed text-cream/75">{site.footer.line}</p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-3 md:col-span-3">
          <span className="eyebrow mb-2 text-cream/65">{site.footer.pagesLabel}</span>
          {site.nav.map((link) => (
            <Link key={link.href} href={link.href} className="w-fit text-sm transition-colors hover:text-green">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3 md:col-span-3">
          <span className="eyebrow mb-2 text-cream/65">{site.footer.contactLabel}</span>
          <a href={`mailto:${site.email}`} className="w-fit text-sm transition-colors hover:text-green">
            {site.email}
          </a>
          {site.socials.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              className="w-fit text-sm transition-colors hover:text-green"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="shell eyebrow flex flex-col gap-2 py-6 text-cream/65 sm:flex-row sm:items-center sm:justify-between">
          <span>{site.footer.copyright}</span>
          <span>{site.locations}</span>
        </div>
      </div>
    </footer>
  );
}
