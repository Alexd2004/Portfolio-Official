"use client";

import {
  createElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type Tag = "div" | "li" | "p" | "section" | "figure";

type Props = {
  /** Element to render. Defaults to a div; use "li" inside lists so markup stays valid. */
  as?: Tag;
  /** Stagger, in ms. Only matters when several siblings enter the viewport together. */
  delay?: number;
  className?: string;
  children: ReactNode;
};

/**
 * Scroll-triggered reveal: one short translate + fade when the element first
 * enters the viewport. The hidden state lives in CSS (see the motion block in
 * globals.css) and is only applied when scripting is enabled and the visitor
 * has not asked for reduced motion, so the content is never trapped invisible.
 */
export function Reveal({ as = "div", delay = 0, className, children }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        // Reveal when the top edge crosses the trigger line, or immediately if
        // the element is already above the fold (e.g. reload with scroll restore).
        if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style = delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined;

  return createElement(
    as,
    {
      ref,
      "data-reveal": "",
      className: [className, inView ? "is-in" : null].filter(Boolean).join(" ") || undefined,
      style,
    },
    children,
  );
}
