import { personal } from "@/data/site";
import { Section } from "./Section";
import { Reveal } from "./motion/Reveal";

/**
 * The page goes from pale sky to dusk here. This is where the person lives:
 * hiking, sports, music, and building things with friends. Nothing specific
 * that he didn't say himself.
 */
export function OffTheClock() {
  return (
    <div className="bg-dusk text-dusk-ink">
      <Section id="off-the-clock" title="Off the clock" lede={personal.placeNote} dusk>
        <Reveal
          as="p"
          className="max-w-measure font-display text-[1.375rem] leading-[1.4] text-dusk-ink text-pretty md:text-[1.5rem]"
        >
          {personal.lede}
        </Reveal>

        <dl className="mt-12 grid max-w-[40rem] gap-x-10 gap-y-7 sm:grid-cols-2">
          {personal.interests.map((it, i) => (
            <Reveal key={it.label} delay={i * 60}>
              <dt className="text-[16px] font-medium text-dusk-ink">{it.label}</dt>
              <dd className="mt-1 text-[15px] leading-relaxed text-dusk-muted text-pretty">
                {it.note}
              </dd>
            </Reveal>
          ))}
        </dl>
      </Section>
    </div>
  );
}
