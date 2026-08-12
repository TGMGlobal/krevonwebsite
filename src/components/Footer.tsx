const SITEMAP = [
  { label: "Selected Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Studio", href: "#philosophy" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/krevonstudio" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink px-5 pb-8 pt-16 text-paper md:px-10 md:pb-10 md:pt-24">
      <div className="grid grid-cols-1 gap-12 border-b border-line-dark pb-14 md:grid-cols-12 md:gap-6 md:pb-20">
        <div className="md:col-span-6">
          <p className="text-balance font-display text-3xl italic leading-snug tracking-tight md:text-4xl">
            We tell you the truth, not what&rsquo;s comfortable — so your
            brand can lead its category.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-3 md:col-span-3">
          <span className="mb-1 font-mono text-xs uppercase tracking-[0.2em] text-paper/40">
            Sitemap
          </span>
          {SITEMAP.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="w-fit text-sm text-paper/80 transition-colors hover:text-olive"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3 md:col-span-3">
          <span className="mb-1 font-mono text-xs uppercase tracking-[0.2em] text-paper/40">
            Elsewhere
          </span>
          {SOCIALS.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              className="w-fit text-sm text-paper/80 transition-colors hover:text-olive"
            >
              {s.label}
            </a>
          ))}
          <a
            href="mailto:hello@krevonstudio.com"
            className="w-fit text-sm text-paper/80 transition-colors hover:text-olive"
          >
            hello@krevonstudio.com
          </a>
        </div>
      </div>

      <div className="flex flex-col-reverse items-start justify-between gap-6 pt-8 md:flex-row md:items-end">
        <span className="font-display text-[15vw] italic leading-[0.8] tracking-tight text-paper/10 md:text-[7vw]">
          Krevon
        </span>

        <div className="flex w-full items-center justify-between gap-4 font-mono text-xs uppercase tracking-[0.15em] text-paper/50 md:w-auto md:flex-col md:items-end md:gap-2">
          <span>© {year} Krevon Studio</span>
          <a href="#top" className="text-paper/70 transition-colors hover:text-olive">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
