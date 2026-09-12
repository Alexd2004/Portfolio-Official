import { site, personal } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-dusk text-dusk-ink">
      <div className="mx-auto max-w-site px-6 md:px-10">
        <div className="border-t border-dusk-line py-10 md:py-12 lg:grid lg:grid-cols-section lg:gap-x-16">
          <p className="display-soft font-display text-[1.35rem] font-medium leading-none">
            {site.name}
          </p>

          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between lg:mt-0">
            <ul className="flex flex-wrap gap-x-7 gap-y-2 text-[15px]">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="link link-dusk hover:text-white"
                >
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
            <p className="text-[13px] text-dusk-muted">
              {personal.place}. {personal.colophon}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
