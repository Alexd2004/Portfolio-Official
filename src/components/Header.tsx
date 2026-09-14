import Link from "next/link";
import { site, nav } from "@/data/site";

/**
 * Plain top row. No sticky bar, no hamburger, no client JS.
 *
 * From md up it is one line: name on the left, section links and the resume
 * on the right. On narrow screens the resume stays on the first line opposite
 * the name, where a thumb expects it, and the section links drop to a second
 * line of their own instead of wrapping mid-list.
 */
export function Header({ home = true }: { home?: boolean }) {
  return (
    <header className="mx-auto flex max-w-site flex-wrap items-baseline gap-x-5 gap-y-2.5 px-6 pt-7 md:gap-x-6 md:px-10 md:pt-9">
      <Link
        href="/"
        className="display-soft mr-auto font-display text-[1.35rem] font-medium leading-none tracking-tight text-spruce"
      >
        {site.name}
      </Link>

      {home && (
        <nav
          aria-label="Sections"
          className="order-3 flex basis-full flex-wrap items-baseline gap-x-5 gap-y-1 text-[15px] text-slate md:order-2 md:basis-auto"
        >
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-spruce">
              {item.label}
            </a>
          ))}
        </nav>
      )}

      <a
        href={site.resume}
        target="_blank"
        rel="noopener noreferrer"
        className="link order-2 text-[15px] text-spruce md:order-3"
      >
        Resume
      </a>
    </header>
  );
}
