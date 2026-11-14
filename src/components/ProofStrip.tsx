import Image from "next/image";
import { home } from "@/content/home";
import { site } from "@/content/site";

function ClientItem({ name, logo }: { name: string; logo: string | null }) {
  return (
    <span className="flex shrink-0 items-center gap-10 md:gap-14">
      {logo ? (
        <Image src={logo} alt={name} width={160} height={48} loading="lazy" className="h-9 w-auto md:h-11" />
      ) : (
        <span className="display text-3xl text-cream md:text-5xl">{name}</span>
      )}
      <span aria-hidden="true" className="display text-3xl text-green md:text-5xl">
        /
      </span>
    </span>
  );
}

export function ProofStrip() {
  const { proof, clients } = home;

  return (
    <section className="border-y border-cream/15 bg-black">
      <div className="shell grid grid-cols-2 gap-x-6 gap-y-10 py-12 md:grid-cols-12 md:gap-8 md:py-16">
        {proof.stats.map((stat) => (
          <div key={stat.label} className="md:col-span-3">
            <p className="display text-7xl text-green md:text-8xl xl:text-9xl">{stat.value}</p>
            <p className="eyebrow mt-3 text-cream/75">{stat.label}</p>
          </div>
        ))}
        <div className="col-span-2 md:col-span-6 md:pl-8">
          <p className="eyebrow mb-4 text-cream/75">{proof.marketsLabel}</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            {site.markets.map((market) => (
              <li key={market} className="display text-3xl text-cream md:text-4xl xl:text-5xl">
                {market}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/15 py-8 md:py-10">
        <p className="shell eyebrow mb-6 text-cream/75">{proof.clientsLabel}</p>

        {/* Screen readers get a plain list. The moving strip is decorative. */}
        <ul className="sr-only">
          {clients.map((client) => (
            <li key={client.name}>{client.name}</li>
          ))}
        </ul>

        <div aria-hidden="true" className="group overflow-hidden">
          <div className="flex w-max animate-marquee gap-10 group-hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:px-5 md:gap-14">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className={`flex shrink-0 items-center gap-10 md:gap-14 ${copy === 1 ? "motion-reduce:hidden" : "motion-reduce:flex-wrap"}`}
              >
                {clients.map((client) => (
                  <ClientItem key={client.name} name={client.name} logo={client.logo} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
