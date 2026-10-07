import { skills } from "@/data/skills";
import { Section } from "./Section";
import { Reveal } from "./motion/Reveal";

/** Written out as sentences. A list of tools reads better than a wall of chips. */
export function Skills() {
  return (
    <Section id="skills" title="Skills" lede="The short version. The resume has the long one.">
      <dl className="max-w-measure space-y-7">
        {skills.map((group, i) => (
          <Reveal key={group.group} delay={i * 50} className="md:grid md:grid-cols-entry md:gap-x-8">
            <dt className="text-[14px] leading-6 text-slate md:pt-[0.15rem]">{group.group}</dt>
            <dd className="mt-1 text-[17px] leading-relaxed text-spruce md:mt-0">
              {group.items.join(", ")}.
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
