import Image from "next/image";
import { FileText, Github, Mail, ArrowDown } from "lucide-react";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="mx-auto max-w-site px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-muted">
            {site.role} · {site.location}
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink text-balance md:text-6xl">
            {site.name}
          </h1>
          <p className="mt-5 font-display text-xl italic text-accent-ink md:text-2xl">
            {site.tagline}
          </p>

          <div className="mt-8 max-w-prose space-y-4 text-[17px] leading-relaxed text-ink-2 text-pretty">
            {site.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-ground transition-colors hover:bg-accent-ink"
            >
              <FileText size={16} />
              View resume
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2.5 text-sm font-medium text-ink-2 transition-colors hover:border-ink-2 hover:text-ink"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2.5 text-sm font-medium text-ink-2 transition-colors hover:border-ink-2 hover:text-ink"
            >
              <Mail size={16} />
              Email
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[280px] lg:max-w-none">
          <div className="overflow-hidden rounded-lg border border-line bg-surface">
            <Image
              src="/img/personal.webp"
              alt={site.name}
              width={640}
              height={800}
              priority
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </div>

      <a
        href="#experience"
        className="mt-16 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink-2"
      >
        <ArrowDown size={15} />
        Experience
      </a>
    </section>
  );
}
