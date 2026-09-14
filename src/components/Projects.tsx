import Link from "next/link";
import { projects, moreWork } from "@/data/projects";
import { Section } from "./Section";
import { ProjectVisual } from "./ProjectVisual";
import { Reveal } from "./motion/Reveal";

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      lede="Two hackathons, a data pipeline, some coursework I still like, and a drone."
    >
      <ol className="space-y-16 md:space-y-20">
        {projects.map((p, i) => (
          <Reveal
            as="li"
            key={p.slug}
            className="grid gap-y-6 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-x-10 xl:grid-cols-[minmax(0,1fr)_22rem] xl:gap-x-14"
          >
            <div className="max-w-measure">
              <p className="text-[14px] text-slate">
                {p.kind}
                {p.context && <> · {p.context}</>}
                {p.status === "in-progress" && (
                  <> · <span className="text-sandstone">in progress</span></>
                )}
              </p>
              <h3 className="display-soft mt-2 font-display text-[1.75rem] font-medium leading-tight text-spruce md:text-[2rem]">
                <Link href={`/project/${p.slug}`} className="underline-draw hover:text-sandstone">
                  {p.title}
                </Link>
              </h3>
              <p className="mt-3 text-[16px] leading-relaxed text-spruce text-pretty">
                {p.tagline}
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-slate">{p.stack.join(", ")}</p>

              <p className="mt-5 flex flex-wrap gap-x-6 gap-y-1 text-[15px]">
                <Link href={`/project/${p.slug}`} className="link font-medium text-spruce">
                  Read more
                </Link>
                {p.website && (
                  <a
                    href={p.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link text-spruce"
                  >
                    Live site ↗
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link text-spruce"
                  >
                    Source ↗
                  </a>
                )}
              </p>
            </div>

            {/* The visual overhangs the container edge a little on wide screens. */}
            <div className="lg:self-start xl:-mr-6">
              <Link
                href={`/project/${p.slug}`}
                aria-label={`${p.title} — details`}
                className="group block transition-transform duration-200 ease-out hover:-translate-y-0.5"
              >
                <ProjectVisual project={p} priority={i === 0} />
              </Link>
            </div>
          </Reveal>
        ))}
      </ol>

      <div className="mt-24 md:mt-28">
        <Reveal>
          <h3 className="display-soft font-display text-[1.5rem] font-medium leading-tight text-spruce">
            Smaller things
          </h3>
          <p className="mt-1.5 font-display text-[16px] italic text-slate">
            Services and builds worth a line each.
          </p>
        </Reveal>
        <ul className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {moreWork.map((w, i) => (
            <Reveal as="li" key={w.title} delay={(i % 2) * 70} className="max-w-[26rem]">
              <h4 className="text-[16px] font-medium text-spruce">
                {w.github ? (
                  <a
                    href={w.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    {w.title} ↗
                  </a>
                ) : (
                  w.title
                )}
              </h4>
              <p className="mt-1.5 text-[15px] leading-relaxed text-slate text-pretty">{w.detail}</p>
              <p className="mt-1.5 text-[13px] text-slate/80">{w.stack}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
