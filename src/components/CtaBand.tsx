import { Button } from "./Button";

/** Full-bleed green call to action. The one place green fills a whole section. */
export function CtaBand({
  heading,
  body,
  button,
}: {
  heading: string;
  body: string;
  button: { label: string; href: string };
}) {
  return (
    <section className="on-light bg-green text-black">
      <div className="shell flex flex-col gap-10 py-20 md:flex-row md:items-end md:justify-between md:gap-8 md:py-28">
        <div>
          <h2 className="display max-w-[14ch] text-balance text-6xl md:text-8xl xl:text-9xl">{heading}</h2>
          <p className="mt-6 max-w-md text-pretty text-base font-medium leading-relaxed md:text-lg">{body}</p>
        </div>
        <Button href={button.href} variant="black" magnetic className="shrink-0 self-start md:self-end">
          {button.label}
        </Button>
      </div>
    </section>
  );
}
