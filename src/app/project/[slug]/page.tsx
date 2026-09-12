import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { projects, getProject } from "@/data/projects";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
  };
}

export default function ProjectPage({ params }: Params) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-site px-6 py-14 md:py-20">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft size={15} />
          All projects
        </Link>

        <header className="mt-8 max-w-prose">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="rounded-sm px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider"
              style={{ background: `${project.accent}22`, color: project.accent }}
            >
              {project.kind}
            </span>
            {project.status === "in-progress" && (
              <span className="rounded-sm bg-accent-soft px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-accent-ink">
                In progress
              </span>
            )}
            {project.context && <span className="text-sm text-muted">{project.context}</span>}
          </div>

          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink text-balance md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 font-display text-xl italic leading-snug text-accent-ink text-pretty md:text-2xl">
            {project.tagline}
          </p>

          {(project.github || project.website) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-ground transition-colors hover:bg-accent-ink"
                >
                  Live site
                  <ArrowUpRight size={15} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm font-medium text-ink-2 transition-colors hover:border-ink-2 hover:text-ink"
                >
                  <Github size={15} />
                  Source
                </a>
              )}
            </div>
          )}
        </header>

        {project.image && (
          <div className="mt-12 overflow-hidden rounded-lg border border-line bg-surface">
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              width={1600}
              height={900}
              sizes="(min-width: 1088px) 1088px, 100vw"
              className="w-full object-cover"
              priority
            />
          </div>
        )}

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
          <div className="max-w-prose space-y-5 text-[17px] leading-relaxed text-ink-2 text-pretty">
            {project.description.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
            <div>
              <h2 className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Highlights</h2>
              <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-ink-2">
                {project.points.map((pt) => (
                  <li key={pt} className="flex gap-2.5">
                    <span
                      className="mt-[0.55em] h-1.5 w-1.5 flex-none rounded-full"
                      style={{ background: project.accent }}
                      aria-hidden
                    />
                    <span className="text-pretty">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Stack</h2>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-sm border border-line-soft bg-surface-2 px-2 py-0.5 text-xs text-ink-2"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
