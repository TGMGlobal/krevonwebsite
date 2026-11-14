import Image from "next/image";
import type { ImageSlot, Pattern } from "@/content/work";
import { workPage } from "@/content/work";

const PATTERNS: Record<Pattern, { image: string; size?: string }> = {
  dots: { image: "radial-gradient(currentColor 1.5px, transparent 1.5px)", size: "18px 18px" },
  stripes: { image: "repeating-linear-gradient(45deg, currentColor 0 1px, transparent 1px 14px)" },
  grid: {
    image:
      "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
    size: "32px 32px",
  },
  rings: { image: "repeating-radial-gradient(circle at 30% 30%, transparent 0 22px, currentColor 22px 23px)" },
};

/**
 * Fills its (relatively positioned) parent with a case study image.
 * While the image slot has no file, it draws a marked placeholder pattern.
 */
export function WorkTile({
  image,
  pattern,
  sizes,
  priority = false,
  showLabel = true,
}: {
  image: ImageSlot;
  pattern: Pattern;
  sizes: string;
  priority?: boolean;
  /** Set false when the parent prints the placeholder label itself. */
  showLabel?: boolean;
}) {
  if (image.src) {
    return (
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className="object-cover"
      />
    );
  }

  const p = PATTERNS[pattern];

  return (
    <div role="img" aria-label={`${workPage.labels.placeholder}: ${image.alt}`} className="absolute inset-0 bg-black">
      <div
        className="absolute inset-0 text-cream/15"
        style={{ backgroundImage: p.image, backgroundSize: p.size }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
      {showLabel ? (
        <span className="eyebrow absolute right-4 top-4 border border-cream/30 px-2 py-1 text-[0.625rem] text-cream/75">
          {workPage.labels.placeholder}
        </span>
      ) : null}
    </div>
  );
}
