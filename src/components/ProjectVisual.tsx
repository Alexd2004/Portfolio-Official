import Image from "next/image";
import type { Project } from "@/data/projects";

export type VisualVariant = "compact" | "featured" | "lead";

/**
 * The visual for a project. Every project gets the same sky panel, the same
 * one the hero photo sits on. A screenshot is matted inside it; when there is
 * no screenshot, one verified number is set large in Fraunces on the panel
 * itself. Same footprint, same surface, so the two kinds read as siblings.
 *
 *  compact   the side panel in the list
 *  featured  the full-column panel for the two lead entries in the list
 *  lead      the top of a project page; screenshots show uncropped here
 */
export function ProjectVisual({
  project,
  variant = "compact",
  priority = false,
  sizes = "(min-width: 1024px) 18rem, 100vw",
}: {
  project: Project;
  variant?: VisualVariant;
  priority?: boolean;
  sizes?: string;
}) {
  const panel = {
    compact: "aspect-[16/10]",
    featured: "aspect-[4/3] sm:aspect-[2/1] lg:aspect-[2.4/1]",
    lead: "aspect-[4/3] sm:aspect-[2/1] lg:aspect-[2.6/1]",
  }[variant];

  if (project.image) {
    // The page-top screenshot is shown whole; the list crops to a fixed frame
    // so seven entries line up.
    if (variant === "lead") {
      return (
        <div className="bg-sky p-4 sm:p-6 md:p-8">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            width={1600}
            height={1000}
            sizes={sizes}
            priority={priority}
            className="h-auto w-full"
          />
        </div>
      );
    }

    return (
      <div className={`relative w-full bg-sky ${panel}`}>
        <div
          className={`absolute overflow-hidden ${
            variant === "featured" ? "inset-4 sm:inset-6" : "inset-3"
          }`}
        >
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover object-top"
          />
        </div>
      </div>
    );
  }

  if (project.figure) {
    const value = {
      compact: "text-[4rem] md:text-[4.5rem]",
      featured: "text-[clamp(5.5rem,13vw,10rem)]",
      lead: "text-[clamp(5rem,15vw,11rem)]",
    }[variant];
    const label = {
      compact: "mt-1.5 max-w-[16rem] text-[15px]",
      featured: "max-w-[18rem] text-[1.05rem] md:text-[1.25rem]",
      lead: "max-w-[26rem] text-[1.15rem] md:text-[1.5rem]",
    }[variant];
    const pad = {
      compact: "p-5",
      featured: "p-6 sm:p-8 md:p-10",
      lead: "p-6 sm:p-8 md:p-12",
    }[variant];

    return (
      <div
        className={`flex w-full flex-col justify-end bg-arch ${panel} ${pad}`}
        aria-label={`${project.figure.value} ${project.figure.label}`}
        role="img"
      >
        <div
          className={
            variant === "compact"
              ? "flex flex-col"
              : "flex flex-col gap-x-8 gap-y-2 sm:flex-row sm:items-baseline"
          }
          aria-hidden
        >
          <span
            className={`display-wonk font-display font-medium leading-[0.9] tracking-[-0.03em] text-gold ${value}`}
          >
            {project.figure.value}
          </span>
          <span className={`font-display italic leading-snug text-dusk-ink ${label}`}>
            {project.figure.label}
          </span>
        </div>
      </div>
    );
  }

  return null;
}
