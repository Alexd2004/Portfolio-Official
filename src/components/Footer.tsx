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
 * The end of the page. The email is the one thing a visitor might act on
 * here, so it gets the same treatment as the resume link in the hero: display
 * size, the chinook underline. Everything else is secondary and sits under it.
 * Same grid as every section above.
 */
export function Footer({ standalone = false }: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dusk text-dusk-ink">
      <div className="mx-auto max-w-site px-6 md:px-10">
        <div
          className={`grid gap-y-10 pb-12 md:pb-16 lg:grid-cols-section lg:gap-x-16 ${
            standalone ? "pt-12 md:pt-16" : "border-t border-dusk-line pt-10 md:pt-14"
          }`}
        >
          <div>
            <p className="display-soft font-display text-[1.35rem] font-medium leading-none">
              {site.name}
            </p>
            <p className="mt-2.5 text-[14px] leading-6 text-dusk-muted">{personal.place}</p>
          </div>

          <div>
            <p className="text-[14px] leading-6 text-dusk-muted">Get in touch</p>
            <a
              href={`mailto:${site.email}`}
              className="display-soft mt-2 inline-block break-all font-display text-[1.375rem] font-medium leading-tight text-dusk-ink underline decoration-gold decoration-2 underline-offset-[0.28em] transition-colors hover:text-gold sm:break-normal md:text-[1.75rem] lg:text-[2rem]"
            >
              {site.email}
            </a>

            <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-2 text-[15px]">
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
              <li>
                <a href="#top" className="link link-dusk hover:text-white">
                  Back to top ↑
                </a>
              </li>
            </ul>

            <p className="mt-10 text-[13px] leading-relaxed text-dusk-muted md:mt-12">
              {personal.colophon} &middot; {year}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
