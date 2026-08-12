const POINTS = [
  {
    title: "Simplicity costs more than complexity",
    body: "It takes research, restraint and the willingness to cut. We simplify because clarity respects people's time.",
  },
  {
    title: "A good recommendation explains itself",
    body: "No client should have to accept something because we said “trust us.”",
  },
  {
    title: "Tools sharpen thinking, never replace it",
    body: "We use AI and every other tool available. None of it excuses shortcuts in the thinking.",
  },
  {
    title: "Reputation compounds",
    body: "Every proposal, campaign and invoice adds to a reputation that outlasts any single client.",
  },
];

export function Credibility() {
  return (
    <section className="border-y border-line bg-paper-dim px-5 py-20 md:px-10 md:py-28">
      <p className="mb-12 max-w-lg text-pretty font-display text-3xl italic leading-snug tracking-tight text-ink md:mb-16 md:text-4xl">
        What we believe, in practice.
      </p>

      <div className="grid grid-cols-1 border-t border-line md:grid-cols-4">
        {POINTS.map((point, i) => (
          <div
            key={point.title}
            className="flex flex-col gap-4 border-b border-line py-8 pr-6 md:border-b-0 md:border-r md:py-10 md:pr-8 last:md:border-r-0"
          >
            <span className="font-mono text-xs text-ink-faint">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-xl leading-tight tracking-tight text-ink md:text-2xl">
              {point.title}
            </h3>
            <p className="text-pretty text-sm leading-relaxed text-ink-soft">
              {point.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
