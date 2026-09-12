import { skills } from "@/data/skills";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-site px-6 py-20 md:py-24">
      <SectionHeading eyebrow="Skills" title="What I work with" />

      <dl className="space-y-6">
        {skills.map((row) => (
          <div
            key={row.group}
            className="grid gap-3 border-t border-line-soft pt-6 md:grid-cols-[200px_minmax(0,1fr)] md:gap-8"
          >
            <dt className="text-sm font-medium uppercase tracking-[0.12em] text-muted">
              {row.group}
            </dt>
            <dd className="flex flex-wrap gap-2">
              {row.items.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-line bg-surface px-3 py-1.5 text-sm text-ink-2"
                >
                  {s}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
