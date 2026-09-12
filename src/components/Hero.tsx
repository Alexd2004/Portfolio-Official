import Image from "next/image";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="mx-auto max-w-site px-6 pb-24 pt-14 md:px-10 md:pb-32 md:pt-20 lg:pt-24">
      <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,1fr)_21rem] xl:grid-cols-[minmax(0,1fr)_24rem]">
        {/* Name and the one spoken sentence. */}
        <div>
          <h1 className="display-wonk font-display text-[clamp(3.25rem,9vw,7rem)] font-medium leading-[0.95] tracking-[-0.02em] text-spruce">
            Alexandre
            <br />
            Duteau
          </h1>
          <p className="mt-8 max-w-[34rem] font-display text-[1.375rem] leading-[1.35] text-spruce text-pretty md:text-[1.6rem]">
            {site.intro}
          </p>
        </div>

        {/* The photo, once, large. It sits on a pale-sky block that's shifted
            down and right, so it breaks the measure instead of sitting in a card. */}
        <figure className="relative mx-auto w-full max-w-[22rem] lg:col-start-2 lg:row-span-2 lg:mx-0 lg:mt-3 lg:max-w-none">
          <div
            className="absolute -bottom-4 -right-4 left-6 top-6 bg-sky md:-bottom-6 md:-right-6"
            aria-hidden
          />
          <Image
            src={site.photo.src}
            alt={site.photo.alt}
            width={900}
            height={1200}
            priority
            sizes="(min-width: 1280px) 384px, (min-width: 1024px) 336px, 352px"
            className="relative aspect-[3/4] w-full object-cover object-[50%_30%]"
          />
          <figcaption className="relative mt-5 font-display text-[15px] italic text-slate md:mt-7">
            {site.photo.caption}
          </figcaption>
        </figure>

        {/* The longer version, and the three links that matter. */}
        <div className="max-w-measure lg:col-start-1">
          <div className="space-y-5 text-[17px] leading-[1.6] text-spruce text-pretty">
            {site.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-2 text-[15px]">
            <li>
              <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="link font-medium text-spruce"
              >
                Resume (PDF)
              </a>
            </li>
            <li>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link text-spruce"
              >
                GitHub
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="link text-spruce">
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
