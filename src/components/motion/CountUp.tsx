"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  /** A display value such as "9th", "71%" or "5". The leading integer counts up; the rest is kept as a suffix. */
  value: string;
  /** Count duration in ms. */
  duration?: number;
  className?: string;
};

/**
 * Counts a figure up from zero the first time it scrolls into view. Server
 * output is the final value, so no-JS visitors, crawlers and reduced-motion
 * users see the real number with no animation at all.
 */
export function CountUp({ value, duration = 1100, className }: Props) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState<number | null>(null); // null = final value
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || target === null) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        // Already scrolled past: show the final value, don't count.
        if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
          setInView(true);
          io.disconnect();
          return;
        }
        if (!entry.isIntersecting) return;
        io.disconnect();
        setInView(true);
        setShown(0);
        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / duration);
          const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
          setShown(Math.round(eased * target));
          if (p < 1) raf = requestAnimationFrame(tick);
          else setShown(null);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, duration]);

  if (target === null) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span
      ref={ref}
      data-countup=""
      className={[className, "tabular-nums", inView ? "is-in" : null].filter(Boolean).join(" ")}
    >
      {shown === null ? value : `${shown}${suffix}`}
    </span>
  );
}
