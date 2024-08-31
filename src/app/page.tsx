import Image from "next/image";
import "./globals.css";
import {NavBar} from "@/components/navbar";
import { AboutTitle } from "@/components/aboutTitle";
import { AboutSection } from "@/components/aboutSection";
import { SkillsTitle } from "@/components/skillsTitle";
import { SkillSection } from "@/components/skillsSection";
import { ProjectTitle } from "@/components/projectTitle";
import { ProjectSection } from "@/components/projectSection";
import { Footer } from "@/components/footer";
import { EB_Garamond } from "next/font/google";

export default function Home() {
  return (


    <div className="bg-[#131313]">
      <NavBar />
      <div className="flex flex-col justify-center items-center text-center w-screen md:w-full h-screen landing-page-bg bg-cover bg-no-repeat mb-20">
        <div className="flex flex-col items-center justify-center text-center text-white h-screen px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Alexandre Duteau</h1>
          <h1 className="text-xl md:text-2xl font-bold mb-3">Student </h1>
          <h1 className="text-xl md:text-2xl font-bold mb-3">Developer</h1>
          <h1 className="text-xl md:text-2xl font-bold mb-3">Innovator</h1>
        </div>
      </div>
      
      {/* <LandingPage /> */}
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
