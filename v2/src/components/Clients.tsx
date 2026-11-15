import Link from "next/link";
import { home, type Client } from "@/content/home";
import { asset } from "@/lib/paths";
import { Arrow } from "./Button";
import { Reveal } from "./Reveal";

/**
 * The client roster as a grid of large cells. Each cell shows the brand's
 * logo when one is set, drawn in a single colour so six different logos sit
 * together, and the name in type until then. Hover fills the cell green.
 */
function Cell({ client, index }: { client: Client; index: number }) {
  const inner = (
    <>
      <span className="eyebrow text-cream/70 transition-colors duration-300 group-hover:text-black">
        {String(index + 1).padStart(2, "0")}
      </span>

      <span className="flex flex-1 items-center justify-center px-2 py-6">
        {client.logo ? (
          <span
            role="img"
            aria-label={client.name}
            className="block h-12 w-full max-w-[14rem] bg-cream transition-colors duration-300 group-hover:bg-black md:h-16"
            style={{
              maskImage: `url(${asset(client.logo)})`,
              WebkitMaskImage: `url(${asset(client.logo)})`,
              maskSize: "contain",
              WebkitMaskSize: "contain",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
              maskPosition: "center",
              WebkitMaskPosition: "center",
            }}
          />
        ) : (
          <span className="display text-balance text-center text-[clamp(1.75rem,3.6vw,3.75rem)] text-cream transition-colors duration-300 group-hover:text-black">
            {client.name}
          </span>
        )}
      </span>

      <span className="eyebrow flex h-5 items-center justify-end gap-3 text-cream transition-colors duration-300 group-hover:text-black">
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
    "group flex h-full min-h-[11rem] flex-col bg-black p-5 transition-colors duration-300 hover:bg-green md:min-h-[17rem] md:p-7";

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
        <Reveal as="ul" className="grid grid-cols-2 gap-px border border-cream/25 bg-cream/25 md:grid-cols-3">
          {(clients.items as Client[]).map((client, i) => (
            <li key={client.name}>
              <Cell client={client} index={i} />
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
