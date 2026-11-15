import Link from "next/link";
import { home, type Client } from "@/content/home";
import { asset } from "@/lib/paths";
import { Arrow } from "./Button";
import { PenNote, PenStroke } from "./Pen";
import { Reveal } from "./Reveal";

/** Width of each cell on desktop, out of 12. The first client gets the most room. */
const SPANS = ["md:col-span-6", "md:col-span-3", "md:col-span-3", "md:col-span-4", "md:col-span-4", "md:col-span-4"];

/**
 * The client roster as an uneven grid: each cell ticked off by the pen,
 * with a handwritten result on the ones that have a case study.
 * A cell shows the brand's logo when one is set (drawn in one colour so
 * different logos sit together) and the name in type until then.
 */
function Cell({ client, index }: { client: Client; index: number }) {
  const big = index === 0;

  const inner = (
    <>
      <span className="flex items-start justify-between">
        <span className="eyebrow text-cream/70 transition-colors duration-300 group-hover:text-black">
          {String(index + 1).padStart(2, "0")}
        </span>
        <PenStroke
          shape="tick"
          delay={index * 0.12}
          className="h-7 w-8 text-green transition-colors duration-300 group-hover:text-black"
        />
      </span>

      <span className="flex flex-1 flex-col justify-center gap-3 py-6">
        {client.logo ? (
          <span
            role="img"
            aria-label={client.name}
            className="block h-12 w-full max-w-[16rem] bg-cream transition-colors duration-300 group-hover:bg-black md:h-16"
            style={{
              maskImage: `url(${asset(client.logo)})`,
              WebkitMaskImage: `url(${asset(client.logo)})`,
              maskSize: "contain",
              WebkitMaskSize: "contain",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
              maskPosition: "left center",
              WebkitMaskPosition: "left center",
            }}
          />
        ) : (
          <span
            className={`display text-balance text-cream transition-colors duration-300 group-hover:text-black ${
              big ? "text-[clamp(3rem,9vw,9.5rem)]" : "text-[clamp(1.75rem,3.4vw,3.5rem)]"
            }`}
          >
            {client.name}
          </span>
        )}
        {client.note ? (
          <PenNote tilt={-2} className="transition-colors duration-300 group-hover:text-black">
            {client.note}
          </PenNote>
        ) : null}
      </span>

      <span className="eyebrow flex h-5 items-center gap-3 text-cream transition-colors duration-300 group-hover:text-black">
        {client.href ? (
          <>
            {home.clients.caseLabel}
            <Arrow />
          </>
        ) : null}
      </span>
    </>
  );

  const classes =
    "group flex h-full min-h-[12rem] flex-col bg-black p-5 transition-colors duration-300 hover:bg-green md:min-h-[19rem] md:p-7";

  return client.href ? (
    <Link href={client.href} className={classes}>
      {inner}
    </Link>
  ) : (
    <div className={classes}>{inner}</div>
  );
}

export function Clients() {
  const { clients } = home;

  return (
    <section className="bg-black">
      <div className="shell py-20 md:py-32">
        <h2 className="display mb-10 max-w-[24ch] text-balance text-5xl text-cream md:mb-14 md:text-7xl">
          {clients.heading}
        </h2>

        {/* 1px gaps over a tinted background draw the hairlines between cells. */}
        <Reveal as="ul" className="grid grid-cols-2 gap-px border border-cream/25 bg-cream/25 md:grid-cols-12">
          {(clients.items as Client[]).map((client, i) => (
            <li key={client.name} className={`${i === 0 || (i === clients.items.length - 1 && i % 2 === 1) ? "col-span-2" : ""} ${SPANS[i % SPANS.length]}`}>
              <Cell client={client} index={i} />
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
