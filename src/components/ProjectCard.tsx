import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-lg border border-line bg-surface transition-colors hover:border-ink-2/40">
      <Link
        href={`/project/${project.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`${project.title} — details`}
      />

      {project.image ? (
        <div className="relative aspect-[16/9] overflow-hidden border-b border-line-soft bg-surface-2">
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      ) : (
        <div
          className="relative flex aspect-[16/9] items-end border-b border-line-soft p-5"
          style={{
            background: `linear-gradient(160deg, ${project.accent}22 0%, var(--surface-2) 70%)`,
          }}
        >
          <span
            className="font-display text-4xl font-semibold italic"
            style={{ color: project.accent }}
            aria-hidden
          >
            {project.kind}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold leading-snug text-ink">
            {project.title}
          </h3>
          <span
            className="mt-0.5 flex-none rounded-sm px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-wider"
            style={{ background: `${project.accent}22`, color: project.accent }}
          >
            {project.status === "in-progress" ? "In progress" : project.kind}
          </span>
        </div>

        {project.context && (
          <p className="mt-1.5 text-xs text-muted">{project.context}</p>
        )}

        <p className="mt-3 text-sm leading-relaxed text-ink-2 text-pretty">{project.tagline}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 5).map((s) => (
            <li
              key={s}
              className="rounded-sm border border-line-soft bg-surface-2 px-1.5 py-0.5 text-[11px] text-ink-2"
            >
              {s}
            </li>
          ))}
        </ul>

        <div className="relative z-20 mt-auto flex items-center justify-between pt-5">
          <span className="inline-flex items-center gap-1 text-sm font-medium text-accent-ink">
            Details
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-ink"
                aria-label={`${project.title} on GitHub`}
              >
                <Github size={17} />
              </a>
            )}
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-ink"
                aria-label={`${project.title} live site`}
              >
                <ArrowUpRight size={17} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
