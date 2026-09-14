import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  lede?: string;
  children: ReactNode;
  /** Render on the dusk band instead of the snow ground. */
  dusk?: boolean;
  /**
   * Extra classes on the <section>. Used for the one section that sits on
   * the dusk band, which needs less room below it because the footer follows
   * on the same colour.
   */
  className?: string;
};

/**
 * The section shell. On desktop the title lives in a left column and sticks
 * while the content scrolls past it; sections are separated by whitespace and
 * scale, not rules or boxes.
 *
 * Vertical rhythm, one scale for the whole page:
 *   - every section carries half the section gap on top and bottom
 *     (py-12 / md:py-20), so section-to-section is 96px on phones and 160px
 *     from md up, and no boundary is ever the sum of two different numbers;
 *   - the hero ends with the same half gap, so hero -> Work is one gap too;
 *   - the snow-to-dusk edge sits in the middle of a normal gap.
 */
export const sectionPad = "py-12 md:py-20";

export function Section({ id, title, lede, children, dusk = false, className = "" }: Props) {
  return (
    <section
      id={id}
      className={`mx-auto grid max-w-site gap-y-7 px-6 md:px-10 lg:grid-cols-section lg:gap-x-16 ${sectionPad} ${className}`}
    >
      {/* Sticks while the content scrolls past; top-12 keeps the title clear
          of the browser chrome and lines it up with the first content row. */}
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
            className={`mt-3 max-w-[13rem] font-display text-[17px] italic leading-snug text-pretty lg:mt-4 ${
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
