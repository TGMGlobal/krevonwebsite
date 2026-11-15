import Image from "next/image";
import { site } from "@/content/site";
import { asset } from "@/lib/paths";

/**
 * The Krevon logo, always from the SVG files in public/brand/.
 * `on` is the background the logo sits on.
 */
export function Logo({
  on = "black",
  className = "",
  priority = false,
}: {
  on?: "black" | "offwhite";
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={asset(`/brand/krevon-logo-on-${on}.svg`)}
      alt={site.name}
      width={200}
      height={120}
      priority={priority}
      className={`w-auto ${className}`}
    />
  );
}
