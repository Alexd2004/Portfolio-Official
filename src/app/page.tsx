import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Credentials } from "@/components/Credentials";
import { OffTheClock } from "@/components/OffTheClock";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <Projects />
        <Skills />
        <Credentials />
        <div className="h-8 md:h-12" aria-hidden />
        <OffTheClock />
      </main>
      <Footer />
    </>
  );
}
