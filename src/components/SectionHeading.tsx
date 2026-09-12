export function SectionHeading({
  eyebrow,
  title,
  lede,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-muted">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink text-balance md:text-4xl">
        {title}
      </h2>
      {lede && <p className="mt-3 max-w-prose text-ink-2 text-pretty">{lede}</p>}
      <div className="mt-5 h-px w-16 bg-accent" />
    </div>
  );
}
