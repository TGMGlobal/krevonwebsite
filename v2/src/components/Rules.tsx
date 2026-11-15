import { home } from "@/content/home";
import { Reveal } from "./Reveal";

export function Rules() {
  const { rules } = home;

  return (
    <section className="on-light bg-offwhite text-black">
      <div className="shell py-24 md:py-40">
        <h2 className="eyebrow mb-12 text-black/70 md:mb-20">{rules.eyebrow}</h2>
        <ol className="flex flex-col gap-16 md:gap-28">
          {rules.items.map((rule, i) => (
            <li key={rule.line} className={i === 1 ? "md:ml-[16.666%]" : i === 2 ? "md:ml-[33.333%]" : ""}>
              <Reveal>
                <span className="eyebrow text-black/70">{String(i + 1).padStart(2, "0")}</span>
                <p className="display mt-3 max-w-[16ch] text-balance text-[clamp(2.5rem,6.4vw,6.5rem)]">{rule.line}</p>
                <p className="mt-5 max-w-sm text-base leading-relaxed text-black/80">{rule.note}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
