"use client";

import Link from "next/link";
import { useState } from "react";
import { FileText, Menu, X } from "lucide-react";
import { site, nav } from "@/data/site";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line-soft bg-ground/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-site items-center justify-between px-6">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink-2 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-accent/50 bg-accent-soft px-3.5 py-1.5 text-sm font-medium text-accent-ink transition-colors hover:border-accent hover:bg-accent hover:text-ground"
          >
            <FileText size={15} />
            Resume
          </a>
        </nav>

        <button
          type="button"
          className="text-ink-2 hover:text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-line-soft bg-ground md:hidden"
          aria-label="Primary mobile"
        >
          <div className="mx-auto flex max-w-site flex-col gap-1 px-6 py-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded px-2 py-2 text-ink-2 hover:bg-surface hover:text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 rounded-md border border-accent/50 bg-accent-soft px-3.5 py-2 text-sm font-medium text-accent-ink"
              onClick={() => setOpen(false)}
            >
              <FileText size={15} />
              Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
