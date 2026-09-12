import { ArrowUpRight, Award, Trophy } from "lucide-react";
import { certifications, competitions, type Credential } from "@/data/certifications";
import { SectionHeading } from "./SectionHeading";

function CredentialCard({ item, icon }: { item: Credential; icon: React.ReactNode }) {
  const Wrapper = item.link ? "a" : "div";
  const linkProps = item.link
    ? { href: item.link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...linkProps}
      className={`group flex gap-4 rounded-lg border border-line bg-surface p-5 ${
        item.link ? "transition-colors hover:border-ink-2/40" : ""
      }`}
    >
      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-md bg-surface-2 text-accent-ink">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h4 className="font-display text-lg font-semibold leading-snug text-ink">
            {item.title}
          </h4>
          {item.badge ? (
            <span className="flex-none rounded-sm bg-accent-soft px-2 py-0.5 text-xs font-semibold tabular-nums text-accent-ink">
              {item.badge}
            </span>
          ) : (
            <span className="flex-none text-sm tabular-nums text-muted">{item.year}</span>
          )}
        </div>
        <p className="mt-0.5 text-sm text-ink-2">
          {item.org}
          {item.badge && <span className="text-muted"> · {item.year}</span>}
        </p>
        <p className="mt-2.5 text-sm leading-relaxed text-ink-2 text-pretty">{item.detail}</p>
        {item.link && (
          <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-muted transition-colors group-hover:text-accent-ink">
            View
            <ArrowUpRight size={13} />
          </span>
        )}
      </div>
    </Wrapper>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-site px-6 py-20 md:py-24">
      <SectionHeading eyebrow="Credentials" title="Certifications & competitions" />

      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.12em] text-muted">
            Certifications
          </h3>
          <div className="space-y-4">
            {certifications.map((c) => (
              <CredentialCard key={c.title} item={c} icon={<Award size={20} />} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.12em] text-muted">
            Competitions
          </h3>
          <div className="space-y-4">
            {competitions.map((c) => (
              <CredentialCard key={c.title} item={c} icon={<Trophy size={20} />} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
