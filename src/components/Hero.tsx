import Image from "next/image";
import { site } from "@/data/site";

/**
 * Name, photo, one spoken sentence, the resume, then the longer version.
 *
 * On a phone the photo comes right after the name so the page breaks before
 * the reader has gone through eight lines of serif. On a laptop it sits in a
 * right column beside the name and the sentence, on a sky block that is
 * shifted down and right, so it breaks the measure instead of sitting in a
 * card. The block is sized to the photo, not to the column, so it never
 * stretches with the text beside it.
 */
export function Hero() {
  const [bio, aside] = site.bio;

  return (
    <section className="mx-auto max-w-site px-6 pb-24 pt-12 md:px-10 md:pb-32 md:pt-20 lg:pt-24">
      <div className="grid gap-y-10 lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-x-16 xl:grid-cols-[minmax(0,1fr)_24rem]">
        {/* 1. The name. */}
        <h1 className="display-wonk font-display text-[clamp(3.5rem,10vw,7.25rem)] font-medium leading-[0.92] tracking-[-0.025em] text-spruce lg:col-start-1">
          Alexandre
          <br />
          Duteau
        </h1>

        {/* 2. The photo, once, large. */}
        <figure className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-2">
          <div className="relative mr-4 sm:max-w-[24rem] lg:mr-0 lg:max-w-none">
            <div
              className="absolute -bottom-4 -right-4 left-5 top-5 bg-sky md:-bottom-6 md:-right-6 md:left-6 md:top-6"
              aria-hidden
            />
            <Image
              src={site.photo.src}
              alt={site.photo.alt}
              width={900}
              height={1200}
              priority
              sizes="(min-width: 1280px) 384px, (min-width: 1024px) 336px, (min-width: 640px) 384px, 100vw"
              className="relative aspect-[3/4] w-full object-cover object-[50%_30%]"
            />
          </div>
          <figcaption className="mt-8 font-display text-[15px] italic text-slate sm:max-w-[24rem] md:mt-10 lg:max-w-none">
            {site.photo.caption}
          </figcaption>
        </figure>

        {/* 3. The sentence, the resume, the longer version. */}
        <div className="lg:col-start-1 lg:row-span-2 lg:row-start-2">
          <p className="max-w-[36rem] font-display text-[1.375rem] leading-[1.35] text-spruce text-pretty md:text-[1.65rem] xl:text-[1.75rem]">
            {site.intro}
          </p>

          {/* The one thing a visitor is most likely here for, set at display
              size so it reads as the primary action without a button chrome. */}
          <ul className="mt-8 flex flex-wrap items-baseline gap-x-7 gap-y-3 md:mt-10">
            <li>
              <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="display-soft group inline-flex items-baseline gap-2 font-display text-[1.25rem] font-medium text-spruce underline decoration-sandstone decoration-2 underline-offset-[0.28em] transition-colors hover:text-sandstone md:text-[1.35rem]"
              >
                Resume
                <span className="text-[0.85em] text-sandstone" aria-hidden>
                  ↗
                </span>
                <span className="sr-only">(PDF, opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="link text-[15px] text-spruce">
                GitHub
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="link text-[15px] text-spruce">
                Email
              </a>
            </li>
          </ul>

          <p className="mt-10 max-w-measure text-[17px] leading-[1.6] text-spruce text-pretty md:mt-12">
            {bio}
          </p>
        </div>

        {/* 4. The "with friends" half of the bio. On a laptop it's a note under
            the photo; on a phone it follows the paragraph above. */}
        <p className="-mt-2 max-w-measure text-[15px] leading-[1.6] text-slate text-pretty lg:col-start-2 lg:row-start-3 lg:-mt-4 lg:max-w-none">
          {aside}
        </p>
      </div>
    </section>
  );
}
