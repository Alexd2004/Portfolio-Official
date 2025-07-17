'use client'

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
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Timeline } from "@/components/Timeline";

export default function Home() {

  const [expanded, setExpanded] = useState({
    midas: false,
    nullus: false,
    cofounder: false
  });

  const toggleExpand = (section: "midas" | "nullus" | "cofounder") => {
    setExpanded(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  }
  return (
    <div className="bg-[#2c2c2c] min-h-screen w-screen">
      {/* Example of using Playfair Display */}
      <div className="flex justify-center pt-20 p-40">
        <div className="w-full h-full flex-1">
          
          {/* Bio and Skills Side-by-Side */}
          <div className="flex flex-row justify-center items-start pt-10 gap-12 mb-16">
            {/* Bio Section (Left) */}
            <div className="flex-1 text-white text-center space-y-4 flex flex-col items-center">
              <div className="mb-2">
                <h1 className="font-playfair text-4xl font-bold text-white mb-4">
                  Alexandre Duteau
                </h1>
                <p className="font-eb-garamond text-lg text-gray-300 mb-5">
                  Student • Developer • Innovator
                </p>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Passionate computer science student with a keen interest in software development, 
                machine learning, and innovative technologies. Currently pursuing my degree while 
                working on various projects that combine creativity with technical expertise.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Passionate computer science student with a keen interest in software development, 
                machine learning, and innovative technologies. Currently pursuing my degree while 
                working on various projects that combine creativity with technical expertise.
              </p>
            </div>
            {/* Vertical Divider */}
            <div className="self-stretch flex flex-col justify-center">
              <div className="w-px h-full bg-gray-600 mx-8" />
            </div>
            {/* Skills Section (Right) */}
            <div className="flex-1 text-white text-center space-y-4 flex flex-col items-center">
              <div className="mb-2">
                <h1 className="font-playfair text-4xl font-bold text-white mb-4">
                  Skills
                </h1>
              </div>
              <div className="mt-0 w-full">
                <div className="flex flex-wrap gap-0 justify-center">
                  {/* Languages Title */}
                  <div className="w-full text-center mb-4">
                    <h4 className="font-playfair text-lg font-semibold text-white">Languages</h4>
                  </div>
                  {/* Languages */}
                  <span className="px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-sm">Python</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-sm">Java</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-sm">C</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-sm">Go</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-sm">Assembly</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-sm">HTML</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-sm">CSS</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-sm">SQL</span>
                  {/* Frameworks & Libraries Title */}
                  <div className="w-full text-center mb-4 mt-8">
                    <h4 className="font-playfair text-lg font-semibold text-white">Frameworks & Libraries</h4>
                  </div>
                  {/* Frameworks & Libraries */}
                  <span className="px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-sm">React</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-sm">Express.js</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-sm">Django</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-sm">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-sm">JavaFX</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-sm">Java Swing</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-sm">D3.js</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-sm">NumPy</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-sm">JUnit</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-sm">PostgreSQL</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-sm">MySQL</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-sm">MongoDB</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-sm">Supabase</span>
                  {/* Software & Programs Title */}
                  <div className="w-full text-center mb-4 mt-8">
                    <h4 className="font-playfair text-lg font-semibold text-white">Software & Programs</h4>
                  </div>
                  {/* Software & Programs */}
                  <span className="px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-sm">Git</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-sm">Docker</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-sm">Vercel</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-sm">Linux</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-sm">Vim</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-sm">VS Code</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-sm">Eclipse</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-sm">Jupyter</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-sm">Adobe Photoshop</span>
                </div>
              </div>
            </div>
          </div>



          <Timeline />

         
        </div>
      </div>

     
    </div>
  );
}























