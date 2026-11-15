import Link from "next/link";
import { site } from "@/content/site";
import { Clock } from "./Clock";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-cream/15 bg-black text-cream">
      <div className="shell flex flex-col gap-12 py-14 md:flex-row md:items-end md:justify-between md:py-20">
        <div className="flex flex-col gap-6">
          <Link href="/" aria-label={`${site.name}, home`} className="w-fit">
            <Logo on="black" className="h-20" />
          </Link>
          <p className="display text-3xl text-green">{site.line}</p>
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm">
          {site.nav.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-green">
              {link.label}
            </Link>
          ))}
          {site.socials.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors hover:text-green"
            >
              {social.label}
            </a>
          ))}
          <a href={`mailto:${site.email}`} className="transition-colors hover:text-green">
            {site.email}
          </a>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="shell eyebrow flex flex-col gap-2 py-6 text-cream/70 sm:flex-row sm:items-center sm:justify-between">
          <span>{site.footer.copyright}</span>
          <span>{site.locations}</span>
          <Clock />
        </div>
      </div>
    </footer>
  );
}
