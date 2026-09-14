import { site, personal } from "@/data/site";

type Props = {
  /**
   * On the home page the footer continues the dusk band that "Off the clock"
   * started, so a hairline separates the two. On pages where the footer is
   * the whole band there is nothing above it to rule off.
   */
  standalone?: boolean;
};

/**
 * The end of the page, set like the sign-off of a letter: the name and place
 * in the title column, then a short line, the three ways to get in touch,
 * and the colophon. Same grid as every section above it.
 */
export function Footer({ standalone = false }: Props) {
  return (
    <footer className="bg-dusk text-dusk-ink">
      <div className="mx-auto max-w-site px-6 md:px-10">
        <div
          className={`grid gap-y-8 pb-12 md:pb-16 lg:grid-cols-section lg:gap-x-16 ${
            standalone ? "pt-12 md:pt-16" : "border-t border-dusk-line pt-10 md:pt-12"
          }`}
        >
          <div>
            <p className="display-soft font-display text-[1.35rem] font-medium leading-none">
              {site.name}
            </p>
            <p className="mt-2.5 text-[14px] text-dusk-muted">{personal.place}</p>
          </div>

          <div className="max-w-measure">
            <p className="font-display text-[1.25rem] leading-[1.4] text-dusk-ink text-pretty md:text-[1.375rem]">
              That&rsquo;s the whole page. If any of it is useful to you, say hello.
            </p>

            <ul className="mt-6 flex flex-col gap-y-2 text-[15px] sm:flex-row sm:flex-wrap sm:gap-x-7">
              <li>
                <a href={`mailto:${site.email}`} className="link link-dusk hover:text-white">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link link-dusk hover:text-white"
                >
                  GitHub ↗
                </a>
              </li>
              <li>
                <a
                  href={site.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link link-dusk hover:text-white"
                >
                  Resume (PDF) ↗
                </a>
              </li>
            </ul>

            <p className="mt-9 text-[13px] leading-relaxed text-dusk-muted md:mt-10">
              {personal.colophon}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
