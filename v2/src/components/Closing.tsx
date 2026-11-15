import { site } from "@/content/site";
import { Button } from "./Button";
import { PenNote, PenStroke } from "./Pen";

/** The last screen of a page: one line and one button. */
export function Closing({
  heading,
  body,
  button,
  penNote,
}: {
  heading: string;
  body: string;
  button: { label: string; href: string };
  /** Optional handwritten line under the heading. */
  penNote?: string;
}) {
  return (
    <section className="bg-black">
      <div className="shell flex min-h-[80svh] flex-col justify-center py-24">
        <h2 className="display max-w-[13ch] text-balance text-[clamp(3.5rem,11vw,11.5rem)] text-cream">{heading}</h2>
        {penNote ? (
          <div className="mt-4 w-fit md:ml-[16.666%]">
            <PenStroke shape="underline" className="mb-2 h-3 w-48 text-green md:w-72" />
            <PenNote tilt={-2} className="md:text-4xl">
              {penNote}
            </PenNote>
          </div>
        ) : null}
        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center md:mt-14">
          <Button href={button.href} variant="green" magnetic>
            {button.label}
          </Button>
          <p className="text-base text-cream/85">
            {body}{" "}
            <a href={`mailto:${site.email}`} className="text-cream underline underline-offset-4 hover:text-green">
              {site.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
