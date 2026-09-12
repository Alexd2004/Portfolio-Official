import { Github } from "lucide-react";
import { projects, moreWork } from "@/data/projects";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-site px-6 py-20 md:py-24">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        lede="Hackathon wins, a data pipeline, coursework I'm still fond of, and a drone that's currently on the bench."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>

      <div className="mt-16">
        <h3 className="font-display text-xl font-semibold text-ink">More work</h3>
        <p className="mt-1 text-sm text-muted">Smaller builds and services worth a line each.</p>

        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {moreWork.map((w) => (
            <li
              key={w.title}
              className="rounded-lg border border-line-soft bg-surface p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <h4 className="font-medium text-ink">{w.title}</h4>
                {w.github && (
                  <a
                    href={w.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-none text-muted transition-colors hover:text-ink"
                    aria-label={`${w.title} on GitHub`}
                  >
                    <Github size={16} />
                  </a>
                )}
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-2 text-pretty">{w.detail}</p>
              <p className="mt-2.5 text-xs text-muted">{w.stack}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
