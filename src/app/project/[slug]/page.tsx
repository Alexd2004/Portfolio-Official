import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProject } from "@/data/projects";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectVisual } from "@/components/ProjectVisual";

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

  const index = projects.findIndex((p) => p.slug === project.slug);
  const prev = index > 0 ? projects[index - 1] : undefined;
  const next = index < projects.length - 1 ? projects[index + 1] : undefined;

  return (
    <>
      <Header home={false} />
      <main className="mx-auto max-w-site px-6 pb-24 pt-12 md:px-10 md:pb-32 md:pt-16">
        <Link href="/#projects" className="link text-[15px] text-slate hover:text-spruce">
          ← All projects
        </Link>

        <header className="mt-10 lg:grid lg:grid-cols-section lg:gap-x-16">
          <p className="text-[14px] leading-6 text-slate lg:pt-3">
            {project.kind}
            {project.status === "in-progress" && (
              <>
                <br />
                <span className="text-sandstone">In progress</span>
              </>
            )}
            {project.context && (
              <>
                <br />
                {project.context}
              </>
            )}
          </p>
          <div className="mt-4 lg:mt-0">
            <h1 className="display-wonk font-display text-[clamp(2.75rem,7vw,5rem)] font-medium leading-[0.98] tracking-[-0.02em] text-spruce text-balance">
              {project.title}
            </h1>
            <p className="mt-6 max-w-[38rem] font-display text-[1.375rem] leading-[1.35] text-spruce text-pretty md:text-[1.5rem]">
              {project.tagline}
            </p>
          </div>
        </header>

        <div className="mt-12 md:mt-16 lg:grid lg:grid-cols-section lg:gap-x-16">
          <div className="hidden lg:block" aria-hidden />
          <div className="xl:-mr-6">
            <ProjectVisual project={project} priority large sizes="(min-width: 1216px) 1000px, 100vw" />
          </div>
        </div>

        <div className="mt-12 grid gap-y-10 md:mt-16 lg:grid-cols-section lg:gap-x-16">
          <aside className="space-y-9 lg:sticky lg:top-12 lg:self-start">
            <div>
              <h2 className="display-soft font-display text-[1.25rem] font-medium text-spruce">Highlights</h2>
              <ul className="dash-list mt-3 space-y-2.5 text-[15px] leading-relaxed text-slate">
                {project.points.map((pt) => (
                  <li key={pt} className="text-pretty">
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="display-soft font-display text-[1.25rem] font-medium text-spruce">Stack</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-slate">{project.stack.join(", ")}.</p>
            </div>
            {(project.github || project.website) && (
              <ul className="flex flex-wrap gap-x-6 gap-y-1 text-[15px] lg:flex-col">
                {project.website && (
                  <li>
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link font-medium text-spruce"
                    >
                      Live site ↗
                    </a>
                  </li>
                )}
                {project.github && (
                  <li>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link text-spruce"
                    >
                      Source on GitHub ↗
                    </a>
                  </li>
                )}
              </ul>
            )}
          </aside>

          <div className="max-w-measure space-y-6 text-[17px] leading-[1.65] text-spruce text-pretty">
            {project.description.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <nav
          aria-label="Other projects"
          className="mt-24 flex flex-col gap-3 border-t border-frost pt-8 text-[15px] sm:flex-row sm:justify-between md:mt-32"
        >
          {prev ? (
            <Link href={`/project/${prev.slug}`} className="link text-slate hover:text-spruce">
              ← {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link href={`/project/${next.slug}`} className="link text-slate hover:text-spruce sm:text-right">
              {next.title} →
            </Link>
          )}
        </nav>
      </main>
      <Footer />
    </>
  );
}
