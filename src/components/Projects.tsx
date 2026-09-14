import Link from "next/link";
import type { ReactNode } from "react";
import { projects, moreWork, type Project } from "@/data/projects";
import { Section } from "./Section";
import { ProjectVisual } from "./ProjectVisual";
import { Reveal } from "./motion/Reveal";

function Meta({ project }: { project: Project }) {
  return (
    <p className="text-[14px] leading-relaxed text-slate">
      {project.kind}
      {project.context && <> · {project.context}</>}
      {project.status === "in-progress" && (
        <>
          {" "}
          · <span className="text-sandstone">in progress</span>
        </>
      )}
    </p>
  );
}

function Stack({ project, className = "" }: { project: Project; className?: string }) {
  return (
    <p className={`text-[14px] leading-relaxed text-slate ${className}`}>
      {project.stack.map((s, i) => (
        <span key={s}>
          {i > 0 && <span className="text-slate/60"> · </span>}
          <span className="whitespace-nowrap">{s}</span>
        </span>
      ))}
    </p>
  );
}

function Links({ project, className = "" }: { project: Project; className?: string }) {
  return (
    <p className={`flex flex-wrap gap-x-6 gap-y-1 text-[15px] ${className}`}>
      <Link href={`/project/${project.slug}`} className="link font-medium text-spruce">
        Read more →
      </Link>
      {project.website && (
        <a href={project.website} target="_blank" rel="noopener noreferrer" className="link text-spruce">
          Live site ↗
        </a>
      )}
      {project.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="link text-spruce">
          Source ↗
        </a>
      )}
    </p>
  );
}

function Title({ project, className }: { project: Project; className: string }) {
  return (
    <h3 className={`display-soft font-display font-medium leading-[1.05] text-spruce text-balance ${className}`}>
      <Link href={`/project/${project.slug}`} className="underline-draw transition-colors hover:text-sandstone">
        {project.title}
      </Link>
    </h3>
  );
}

function VisualLink({ project, children }: { project: Project; children: ReactNode }) {
  return (
    <Link
      href={`/project/${project.slug}`}
      aria-label={`${project.title} — details`}
      className="group block transition-transform duration-200 ease-out hover:-translate-y-0.5"
    >
      {children}
    </Link>
  );
}

/** The two current pieces: a full-column panel, then the text underneath in two columns. */
function Featured({ project, priority }: { project: Project; priority: boolean }) {
  return (
    <Reveal as="li">
      <div className="xl:-mr-6">
        <VisualLink project={project}>
          <ProjectVisual
            project={project}
            variant="featured"
            priority={priority}
            sizes="(min-width: 1280px) 880px, (min-width: 1024px) 60vw, 100vw"
          />
        </VisualLink>
      </div>

      <div className="mt-7 grid gap-y-5 md:grid-cols-[minmax(0,1fr)_15rem] md:gap-x-12 lg:grid-cols-[minmax(0,1fr)_16rem]">
        <div className="max-w-measure">
          <Meta project={project} />
          <Title project={project} className="mt-2 text-[2.25rem] md:text-[2.75rem]" />
          <p className="mt-4 text-[17px] leading-[1.6] text-spruce text-pretty md:text-[18px]">
            {project.tagline}
          </p>
        </div>
        <div className="md:pt-1.5">
          <Stack project={project} className="max-w-[26rem]" />
          <Links project={project} className="mt-4 md:flex-col md:gap-y-1.5" />
        </div>
      </div>
    </Reveal>
  );
}

/** Everything else: the side-panel entry, kept tight so seven of them don't drone. */
function Entry({ project }: { project: Project }) {
  return (
    <Reveal
      as="li"
      className="grid gap-y-5 sm:grid-cols-[minmax(0,1fr)_14rem] sm:gap-x-8 lg:grid-cols-[minmax(0,1fr)_16rem] xl:grid-cols-[minmax(0,1fr)_18rem] xl:gap-x-12"
    >
      <div className="max-w-measure">
        <Meta project={project} />
        <Title project={project} className="mt-1.5 text-[1.5rem] md:text-[1.7rem]" />
        <p className="mt-3 text-[16px] leading-relaxed text-spruce text-pretty">{project.tagline}</p>
        <Stack project={project} className="mt-3" />
        <Links project={project} className="mt-4" />
      </div>
      <div className="order-first sm:order-last sm:self-start xl:-mr-6">
        <VisualLink project={project}>
          <ProjectVisual project={project} variant="compact" sizes="(min-width: 1280px) 288px, (min-width: 640px) 224px, 100vw" />
        </VisualLink>
      </div>
    </Reveal>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section
      id="projects"
      title="Projects"
      lede="Two hackathons, a data pipeline, some coursework I still like, and a drone."
    >
      <ol className="space-y-20 md:space-y-24">
        {featured.map((p, i) => (
          <Featured key={p.slug} project={p} priority={i === 0} />
        ))}
      </ol>

      <ol className="mt-20 space-y-12 border-t border-frost pt-14 md:mt-24 md:space-y-14 md:pt-16">
        {rest.map((p) => (
          <Entry key={p.slug} project={p} />
        ))}
      </ol>

      <div className="mt-20 border-t border-frost pt-12 md:mt-24 md:pt-14">
        <h3 className="display-soft font-display text-[1.5rem] font-medium leading-tight text-spruce">
          Smaller things
        </h3>
        <p className="mt-1.5 font-display text-[16px] italic text-slate">
          Services and builds worth a line each.
        </p>
        <ul className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {moreWork.map((w, i) => (
            <Reveal as="li" key={w.title} delay={(i % 2) * 70} className="max-w-[26rem]">
              <h4 className="text-[16px] font-medium text-spruce">
                {w.github ? (
                  <a href={w.github} target="_blank" rel="noopener noreferrer" className="link">
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
