import Image from "next/image";
import {NavBar} from "@/components/navbar";
import { AboutTitle } from "@/components/aboutTitle";
import { AboutSection } from "@/components/aboutSection";
import { SkillsTitle } from "@/components/skillsTitle";
import { SkillSection } from "@/components/skillsSection";
import { ProjectTitle } from "@/components/projectTitle";
import { ProjectSection } from "@/components/projectSection";
import { Footer } from "@/components/footer";

export default function Home() {
  return (


    <div className="bg-[#131313]">
      <NavBar />
      <AboutTitle />
      <AboutSection />
      <SkillsTitle />
      <SkillSection />
      <ProjectTitle />
      <ProjectSection />
      <Footer />
    </div>
  );
}
