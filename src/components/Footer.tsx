import { FileText, Github, Mail } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line-soft">
      <div className="mx-auto flex max-w-site flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-ink">{site.name}</p>
          <p className="mt-1 text-sm text-muted">
            {site.role} · {site.location}
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <li>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 text-ink-2 transition-colors hover:text-ink"
            >
              <Mail size={15} />
              {site.email}
            </a>
          </li>
          <li>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-ink-2 transition-colors hover:text-ink"
            >
              <Github size={15} />
              github.com/Alexd2004
            </a>
          </li>
          <li>
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-ink-2 transition-colors hover:text-ink"
            >
              <FileText size={15} />
              Resume
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
