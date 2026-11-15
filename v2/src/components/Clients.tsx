import Image from "next/image";
import Link from "next/link";
import { home, type Client } from "@/content/home";
import { asset } from "@/lib/paths";
import { Arrow } from "./Button";
import { Reveal } from "./Reveal";

/** The client list, set as large as the headline. Names are the proof. */
export function Clients() {
  const { clients } = home;

  return (
    <section className="on-light bg-offwhite text-black">
      <div className="shell py-20 md:py-32">
        <h2 className="eyebrow mb-10 text-black/70 md:mb-14">{clients.eyebrow}</h2>

        <Reveal as="ul" stagger className="border-t-2 border-black">
          {(clients.items as Client[]).map((client, i) => {
            const name = client.logo ? (
              <Image
                src={asset(client.logo)}
                alt={client.name}
                width={320}
                height={96}
                loading="lazy"
                className="h-[0.8em] w-auto"
              />
            ) : (
              client.name
            );

            const row = (
              <>
                <span className="eyebrow w-8 shrink-0 text-black/70">{String(i + 1).padStart(2, "0")}</span>
                <span className="display relative text-[clamp(2.5rem,8.6vw,8.5rem)] transition-transform duration-500 ease-out group-hover:translate-x-3">
                  <span
                    aria-hidden="true"
                    className="absolute -inset-x-[0.12em] inset-y-[0.06em] origin-left scale-x-0 bg-green transition-transform duration-500 ease-out group-hover:scale-x-100"
                  />
                  <span className="relative">{name}</span>
                </span>
                {client.href ? (
                  <span className="eyebrow ml-auto hidden shrink-0 items-center gap-3 self-center text-black sm:flex">
                    {clients.caseLabel}
                    <Arrow />
                  </span>
                ) : null}
              </>
            );

            return (
              <li key={client.name} className="border-b border-black/25">
                {client.href ? (
                  <Link href={client.href} className="group flex items-baseline gap-4 py-3 md:gap-8 md:py-4">
                    {row}
                  </Link>
                ) : (
                  <div className="group flex items-baseline gap-4 py-3 md:gap-8 md:py-4">{row}</div>
                )}
              </li>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
