import Image from "next/image";
import type { Project } from "@/data/projects";

/**
 * The right-hand visual for a project. A screenshot when there is one; when
 * there isn't, one verified number set large in Fraunces on the sky block.
 * Both use the same footprint so the list reads evenly.
 */
export function ProjectVisual({
  project,
  priority = false,
  sizes = "(min-width: 1024px) 19rem, 100vw",
  large = false,
}: {
  project: Project;
  priority?: boolean;
  sizes?: string;
  large?: boolean;
}) {
  if (project.image) {
    return (
      <div className={`relative w-full overflow-hidden border border-frost bg-sky ${large ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top"
        />
      </div>
    );
  }

  if (project.figure) {
    return (
      <div
        className={`flex w-full flex-col justify-end bg-arch ${
          large ? "aspect-[16/9] p-8 md:p-12" : "aspect-[16/10] p-6"
        }`}
        aria-label={`${project.figure.value} ${project.figure.label}`}
        role="img"
      >
        <span
          className={`display-wonk font-display font-medium leading-none tracking-tight text-gold ${
            large ? "text-[clamp(5rem,14vw,9rem)]" : "text-[4.25rem]"
          }`}
          aria-hidden
        >
          {project.figure.value}
        </span>
        <span
          className={`mt-2 max-w-[18rem] font-display italic leading-snug text-dusk-ink ${
            large ? "text-[1.2rem]" : "text-[15px]"
          }`}
          aria-hidden
        >
          {project.figure.label}
        </span>
      </div>
    );
  }

  return null;
}
