import { education } from "@/data/experience";
import { Section } from "./Section";
import { Reveal } from "./motion/Reveal";

/** Same shape as a Work entry: dates in the gutter, degree as the title. */
export function Education() {
  return (
    <Section id="education" title="Education" lede="Finishing the degree while working.">
      <Reveal className="md:grid md:grid-cols-entry md:gap-x-8">
        <p className="text-[14px] leading-6 text-slate md:pt-[0.3rem]">
          {education.start}
          <span className="text-frost"> — </span>
          {education.end}
        </p>
        <div className="mt-1 md:mt-0">
          <h3 className="display-soft font-display text-[1.5rem] font-medium leading-tight text-spruce">
            {education.degree}
          </h3>
          <p className="mt-1 text-[15px] text-slate">{education.school}</p>
        </div>
      </Reveal>
    </Section>
  );
}
