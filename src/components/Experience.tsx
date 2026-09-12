import { ExternalLink } from "lucide-react";
import { experience, education } from "@/data/experience";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-site px-6 py-20 md:py-24">
      <SectionHeading eyebrow="Experience" title="Where I've worked" />

      <ol className="space-y-6">
        {experience.map((job) => (
          <li
            key={`${job.org}-${job.role}`}
            className="rounded-lg border border-line bg-surface p-6 md:p-8"
            style={{ borderLeftWidth: 4, borderLeftColor: job.accent }}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <div>
                <h3 className="font-display text-xl font-semibold text-ink md:text-2xl">
                  {job.role}
                </h3>
                <p className="mt-1 text-ink-2">
                  {job.orgUrl ? (
                    <a
                      href={job.orgUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 hover:text-ink"
                    >
                      {job.org}
                      <ExternalLink size={13} className="text-muted" />
                    </a>
                  ) : (
                    job.org
                  )}
                  <span className="text-muted"> · {job.location}</span>
                </p>
              </div>
              <p className="text-sm tabular-nums text-muted">
                {job.start} – {job.end}
              </p>
            </div>

            <p className="mt-4 max-w-prose text-sm italic text-muted text-pretty">
              {job.summary}
            </p>

            <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-ink-2">
              {job.points.map((pt) => (
                <li key={pt} className="flex gap-3">
                  <span
                    className="mt-[0.6em] h-1.5 w-1.5 flex-none rounded-full"
                    style={{ background: job.accent }}
                    aria-hidden
                  />
                  <span className="text-pretty">{pt}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="mt-10 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-line-soft pt-8">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Education</p>
          <p className="mt-1.5 font-display text-lg font-semibold text-ink">{education.school}</p>
          <p className="text-ink-2">{education.degree}</p>
        </div>
        <p className="text-sm tabular-nums text-muted">
          {education.start} – {education.end}
        </p>
      </div>
    </section>
  );
}
