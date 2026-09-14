import { personal } from "@/data/site";
import { Section } from "./Section";

/**
 * The page goes from pale sky to dusk here, and stays on dusk through the
 * footer: one continuous ending rather than two stacked bands.
 *
 * This is where the person lives: hiking, sports, music, and building things
 * with friends. Written as a short aside with a hanging label per line, the
 * same shape as the Skills list, not a grid of features. Nothing specific
 * that he didn't say himself.
 */
export function OffTheClock() {
  return (
    <div className="bg-dusk text-dusk-ink">
      <Section
        id="off-the-clock"
        title="Off the clock"
        lede={personal.placeNote}
        dusk
        className="pb-10 md:pb-14"
      >
        <p className="max-w-measure font-display text-[1.375rem] leading-[1.4] text-dusk-ink text-pretty md:text-[1.5rem]">
          {personal.lede}
        </p>

        <dl className="mt-10 max-w-measure space-y-5 md:mt-12">
          {personal.interests.map((it) => (
            <div key={it.label} className="md:grid md:grid-cols-[9.5rem_minmax(0,1fr)] md:gap-x-8">
              <dt className="text-[14px] leading-6 text-dusk-muted md:pt-[0.15rem]">{it.label}</dt>
              <dd className="mt-0.5 text-[17px] leading-relaxed text-dusk-ink text-pretty md:mt-0">
                {it.note}
              </dd>
            </div>
          ))}
        </dl>
      </Section>
    </div>
  );
}
