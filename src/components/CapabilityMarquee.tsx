const CAPABILITIES = [
  "Brand Strategy",
  "Branding & Identity",
  "Creative",
  "Social & Content",
  "Websites",
  "Performance Marketing",
  "Digital Growth",
];

export function CapabilityMarquee() {
  const items = [...CAPABILITIES, ...CAPABILITIES];

  return (
    <div className="relative -my-6 overflow-hidden py-14 md:-my-8 md:py-16">
      <div
        aria-hidden="true"
        className="group relative -mx-[8vw] w-[116vw] -rotate-[2deg] overflow-hidden border-y border-line bg-ink py-5 text-paper"
      >
        <div className="flex w-max animate-marquee gap-10 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {items.map((cap, i) => (
            <span
              key={i}
              className="flex shrink-0 items-center gap-10 font-display text-3xl italic tracking-tight text-paper/90 md:text-4xl"
            >
              {cap}
              <span className="text-sage">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
