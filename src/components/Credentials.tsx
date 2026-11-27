import { certifications, competitions, type Credential } from "@/data/certifications";
import { Section } from "./Section";
import { Reveal } from "./motion/Reveal";

const WORDS = ["No", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
const count = (n: number, one: string, many: string) =>
  `${WORDS[n] ?? n} ${n === 1 ? one : many}`;
// Counted from the data so the line stays right when a credential is added.
const lede = `${count(certifications.length, "certification", "certifications")} and ${count(competitions.length, "hackathon placing", "hackathon placings").toLowerCase()}.`;

function CredentialList({ heading, items }: { heading: string; items: Credential[] }) {
  return (
    <div>
      <Reveal>
        <h3 className="display-soft font-display text-[1.5rem] font-medium leading-tight text-spruce">
          {heading}
        </h3>
      </Reveal>
      <ol className="mt-6 space-y-7">
        {items.map((c, i) => (
          <Reveal as="li" key={c.title} delay={i * 50} className="md:grid md:grid-cols-entry md:gap-x-8">
            <p className="text-[14px] leading-6 text-slate md:pt-[0.1rem]">
              {c.year}
              {c.badge && <span className="text-sandstone"> · {c.badge}</span>}
            </p>
            <div className="mt-1 max-w-measure md:mt-0">
              <p className="text-[17px] font-medium text-spruce">
                {c.link ? (
                  <a href={c.link} target="_blank" rel="noopener noreferrer" className="link">
                    {c.title} ↗
                  </a>
                ) : (
                  c.title
                )}
              </p>
              <p className="mt-0.5 text-[15px] text-slate">{c.org}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-slate text-pretty">{c.detail}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

export function Credentials() {
  return (
    <Section id="credentials" title="Credentials" lede={lede}>
      <div className="space-y-16">
        <CredentialList heading="Certifications" items={certifications} />
        <CredentialList heading="Hackathons" items={competitions} />
      </div>
    </Section>
  );
}
