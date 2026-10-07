import { experience } from "@/data/experience";
import { Section } from "./Section";
import { Reveal } from "./motion/Reveal";

export function Work() {
  return (
    <Section id="work" title="Work" lede="Two years of shipping, most of it backend.">
      <ol className="space-y-14 md:space-y-16">
        {experience.map((job) => (
          <Reveal as="li" key={`${job.org}-${job.role}`} className="md:grid md:grid-cols-entry md:gap-x-8">
            {/* Dates hang in the left gutter on desktop. */}
            <p className="text-[14px] leading-6 text-slate md:pt-[0.3rem]">
              {job.start}
              <span className="text-frost"> — </span>
              {job.end}
            </p>

            <div className="mt-1 max-w-measure md:mt-0">
              <h3 className="display-soft font-display text-[1.5rem] font-medium leading-tight text-spruce">
                {job.role}
              </h3>
              <p className="mt-1 text-[15px] text-slate">
                {job.orgUrl ? (
                  <a
                    href={job.orgUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link text-spruce"
                  >
                    {job.org}
                  </a>
                ) : (
                  <span className="text-spruce">{job.org}</span>
                )}
                {" · "}
                {job.location}
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-spruce text-pretty">
                {job.summary}
              </p>
              <ul className="dash-list mt-4 space-y-2.5 text-[15px] leading-relaxed text-slate">
                {job.points.map((pt) => (
                  <li key={pt} className="text-pretty">
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
