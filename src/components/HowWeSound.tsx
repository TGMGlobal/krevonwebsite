const PAIRS = [
  {
    say: "This won't work. Here's what will.",
    not: "We feel there may be a more effective alternative worth exploring.",
  },
  {
    say: "Your competitors are fighting for customers. You should be building a category.",
    not: "We help brands stay competitive in a shifting landscape.",
  },
  {
    say: "We told the client their tagline wasn't working. That's the job.",
    not: "We provide constructive, client-centric feedback to optimise brand outcomes.",
  },
  {
    say: "Good marketing can't fix a bad product. We'll say that before we take the brief.",
    not: "We take a holistic, 360-degree approach to integrated brand strategy.",
  },
];

export function HowWeSound() {
  return (
    <section className="bg-paper-dim px-5 py-24 md:px-10 md:py-36">
      <div className="mb-14 md:mb-20">
        <span className="mb-3 block font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
          03 / How We Sound
        </span>
        <h2 className="max-w-2xl text-balance font-display text-4xl italic leading-tight tracking-tight text-ink md:text-6xl">
          Direct, not clever for its own sake.
        </h2>
      </div>

      <ul className="border-t border-line">
        {PAIRS.map((pair, i) => (
          <li
            key={i}
            className="grid grid-cols-1 gap-4 border-b border-line py-8 md:grid-cols-12 md:gap-6 md:py-10"
          >
            <span className="font-mono text-xs text-ink-faint md:col-span-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-balance font-display text-2xl leading-snug tracking-tight text-ink md:col-span-7 md:text-3xl">
              &ldquo;{pair.say}&rdquo;
            </p>
            <p className="text-pretty text-sm italic leading-relaxed text-ink-faint md:col-span-4">
              not &ldquo;{pair.not}&rdquo;
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
