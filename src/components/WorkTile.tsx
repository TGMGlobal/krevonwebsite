const PATTERNS: Record<string, string> = {
  dots: "radial-gradient(currentColor 1.5px, transparent 1.5px)",
  stripes: "repeating-linear-gradient(45deg, currentColor 0 2px, transparent 2px 14px)",
  grid: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
  rings: "repeating-radial-gradient(circle at 30% 30%, transparent 0 18px, currentColor 18px 19px)",
  cross: "repeating-linear-gradient(45deg, currentColor 0 1.5px, transparent 1.5px 16px), repeating-linear-gradient(-45deg, currentColor 0 1.5px, transparent 1.5px 16px)",
};

export type WorkPattern = keyof typeof PATTERNS;

export function WorkTile({
  pattern,
  tone = "olive",
}: {
  pattern: WorkPattern;
  tone?: "olive" | "ink" | "sage";
}) {
  const toneClass =
    tone === "olive" ? "bg-olive text-paper" : tone === "sage" ? "bg-sage text-ink" : "bg-ink text-paper";

  return (
    <div className={`absolute inset-0 ${toneClass}`}>
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: PATTERNS[pattern],
          backgroundSize: pattern === "grid" ? "28px 28px" : pattern === "dots" ? "16px 16px" : undefined,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
    </div>
  );
}
