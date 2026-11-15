import Image from "next/image";
import type { CaseImage, GalleryLayout } from "@/content/work";
import { asset } from "@/lib/paths";
import { Reveal } from "./Reveal";

function Picture({ image, sizes, className = "" }: { image: CaseImage; sizes: string; className?: string }) {
  return (
    <Image
      src={asset(image.src)}
      alt={image.alt}
      width={image.width}
      height={image.height}
      sizes={sizes}
      loading="lazy"
      className={`h-auto w-full ${className}`}
    />
  );
}

/** The real work from a project, arranged to suit what it is. */
export function Gallery({
  heading,
  layout,
  images,
  note,
}: {
  heading: string;
  layout: GalleryLayout;
  images: CaseImage[];
  note?: string;
}) {
  const [first, ...rest] = images;

  return (
    <section className="bg-black">
      <div className="shell pt-20 md:pt-28">
        <h2 className="eyebrow mb-8 text-green">{heading}</h2>

        {layout === "wall" ? (
          <Reveal as="ul" stagger className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
            {images.map((image, i) => (
              // Every other piece sits lower, so the wall reads as pinned up and not tiled.
              <li key={image.src} className={i % 2 === 1 ? "md:mt-12" : ""}>
                <Picture image={image} sizes="(min-width: 768px) 25vw, 50vw" />
              </li>
            ))}
          </Reveal>
        ) : null}

        {layout === "feature" && first ? (
          <Reveal className="grid grid-cols-1 gap-3 md:grid-cols-12 md:items-start md:gap-5">
            <div className="md:col-span-8">
              <Picture image={first} sizes="(min-width: 768px) 66vw, 100vw" />
            </div>
            <ul className="grid grid-cols-2 gap-3 md:col-span-4 md:gap-5">
              {rest.map((image) => (
                <li key={image.src}>
                  <Picture image={image} sizes="(min-width: 768px) 16vw, 50vw" />
                </li>
              ))}
            </ul>
          </Reveal>
        ) : null}

        {layout === "pairs" ? (
          <Reveal as="ul" stagger className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-5">
            {images.map((image) => (
              <li key={image.src}>
                <Picture image={image} sizes="(min-width: 640px) 50vw, 100vw" />
              </li>
            ))}
          </Reveal>
        ) : null}

        {note ? <p className="mt-6 text-sm text-cream/75">{note}</p> : null}
      </div>
    </section>
  );
}
