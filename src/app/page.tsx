import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="border-t border-line-soft" />
        <Experience />
        <div className="border-t border-line-soft" />
        <Projects />
        <div className="border-t border-line-soft" />
        <Skills />
        <div className="border-t border-line-soft" />
        <Certifications />
      </main>
      <Footer />
    </>
  );
}
