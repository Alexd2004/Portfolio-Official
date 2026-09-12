import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  lede?: string;
  children: ReactNode;
  /** Render on the dusk band instead of the snow ground. */
  dusk?: boolean;
};

/**
 * The section shell. On desktop the title lives in a left column and sticks
 * while the content scrolls past it; sections are separated by whitespace and
 * scale, not rules or boxes.
 */
export function Section({ id, title, lede, children, dusk = false }: Props) {
  return (
    <section
      id={id}
      className="mx-auto grid max-w-site gap-y-8 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-section lg:gap-x-16"
    >
      <div className="lg:sticky lg:top-12 lg:self-start">
        <h2
          className={`display-soft font-display text-[2.25rem] font-medium leading-none tracking-tight ${
            dusk ? "text-dusk-ink" : "text-spruce"
          }`}
        >
          {title}
        </h2>
        {lede && (
          <p
            className={`mt-4 max-w-[13rem] font-display text-[17px] italic leading-snug text-pretty ${
              dusk ? "text-dusk-muted" : "text-slate"
            }`}
          >
            {lede}
          </p>
        )}
      </div>
      <div className="min-w-0">{children}</div>
    </section>
  );
}
