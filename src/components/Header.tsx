import Link from "next/link";
import { site, nav } from "@/data/site";

/**
 * Plain top row. No sticky bar, no hamburger, no client JS: a name, a short
 * list of places to go, and the resume. The nav wraps under the name on
 * narrow screens.
 */
export function Header({ home = true }: { home?: boolean }) {
  return (
    <header className="mx-auto flex max-w-site flex-wrap items-baseline gap-x-8 gap-y-3 px-6 pt-7 md:px-10 md:pt-9">
      <Link
        href="/"
        className="display-soft font-display text-[1.35rem] font-medium leading-none tracking-tight text-spruce"
      >
        {site.name}
      </Link>

      <nav
        aria-label="Primary"
        className="flex flex-wrap items-baseline gap-x-5 gap-y-1 text-[15px] text-slate md:ml-auto"
      >
        {home &&
          nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-spruce"
            >
              {item.label}
            </a>
          ))}
        <a
          href={site.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="link text-spruce"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
