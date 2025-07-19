'use client'

import Image from "next/image";
import "./globals.css";
import { useState } from "react";
import { Timeline } from "@/components/Timeline";
import { Filter, Code2, Globe, Database, Paintbrush } from "lucide-react";
import { ProjectSection } from "@/components/projectSection";
import { CertificationsSection } from "@/components/certificationsSection";

export default function Home() {

  return (
    <div className="bg-[#2c2c2c] min-h-screen w-full">
      {/* Example of using Playfair Display */}
      <div className="flex justify-center pt-8 md:pt-20 px-4 md:p-20">
        <div className="w-full h-full flex-1">
          
          {/* Bio and Skills Side-by-Side */}
          <div className="flex flex-col lg:flex-row p-4 md:p-20 justify-center items-start pt-6 md:pt-10 pb-8 md:pb-14 gap-6 md:gap-12 mb-8 md:mb-16">
            {/* Bio Section (Left) */}
            <div className="flex-1 text-white text-center space-y-4 flex flex-col items-center">
              <div className="mb-2">
                <h1 className="font-playfair text-2xl md:text-4xl font-bold text-white mb-4">
                  Alexandre Duteau
                </h1>
                <p className="font-eb-garamond text-base md:text-lg text-gray-300 mb-5">
                  Student • Developer • Innovator
                </p>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Passionate computer science student with a keen interest in software development, 
                machine learning, and innovative technologies. Currently pursuing my degree while 
                working on various projects that combine creativity with technical expertise.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                I specialize in full-stack development, data science, and AI/machine learning, 
                with experience in technologies ranging from React and Next.js to Python and C++. 
                My projects demonstrate a strong foundation in both theoretical concepts and 
                practical implementation, always striving to create impactful solutions.
              </p>
            </div>
            {/* Vertical Divider */}
            <div className="hidden lg:flex self-stretch flex-col justify-center">
              <div className="w-px h-full bg-gray-600 mx-8" />
            </div>
            {/* Horizontal Divider for Mobile */}
            <div className="lg:hidden w-full h-px bg-gray-600 my-4" />
            {/* Skills Section (Right) */}
            <div className="flex-1 text-white text-center space-y-4 flex flex-col items-center">
              <div className="mb-1">
                <h1 className="font-playfair text-2xl md:text-4xl font-bold text-white ">
                  Skills
                </h1>
              </div>
              <div className="mt-0 w-full">
                <div className="flex flex-wrap gap-0 justify-center">
                  {/* Languages Title */}
                  <div className="w-full text-center mb-4">
                    <h4 className="font-playfair text-base md:text-lg font-semibold text-white">Languages</h4>
                  </div>
                  {/* Languages */}
                  <span className="px-2 md:px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-xs md:text-sm">Python</span>
                  <span className="px-2 md:px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-xs md:text-sm">Java</span>
                  <span className="px-2 md:px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-xs md:text-sm">C</span>
                  <span className="px-2 md:px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-xs md:text-sm">Go</span>
                  <span className="px-2 md:px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-xs md:text-sm">Assembly</span>
                  <span className="px-2 md:px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-xs md:text-sm">HTML</span>
                  <span className="px-2 md:px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-xs md:text-sm">CSS</span>
                  <span className="px-2 md:px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-xs md:text-sm">SQL</span>
                  {/* Frameworks & Libraries Title */}
                  <div className="w-full text-center mb-4 mt-8">
                    <h4 className="font-playfair text-base md:text-lg font-semibold text-white">Frameworks & Libraries</h4>
                  </div>
                  {/* Frameworks & Libraries */}
                  <span className="px-2 md:px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-xs md:text-sm">React</span>
                  <span className="px-2 md:px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-xs md:text-sm">TypeScript</span>
                  <span className="px-2 md:px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-xs md:text-sm">Next.js</span>
                  <span className="px-2 md:px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-xs md:text-sm">Node.js</span>
                  <span className="px-2 md:px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-xs md:text-sm">Express.js</span>
                  <span className="px-2 md:px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-xs md:text-sm">Django</span>
                  <span className="px-2 md:px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-xs md:text-sm">Tailwind CSS</span>
                  <span className="px-2 md:px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-xs md:text-sm">JavaFX</span>
                  <span className="px-2 md:px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-xs md:text-sm">Java Swing</span>
                  <span className="px-2 md:px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-xs md:text-sm">D3.js</span>
                  <span className="px-2 md:px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-xs md:text-sm">NumPy</span>
                  <span className="px-2 md:px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-xs md:text-sm">JUnit</span>
                  <span className="px-2 md:px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-xs md:text-sm">PostgreSQL</span>
                  <span className="px-2 md:px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-xs md:text-sm">MySQL</span>
                  <span className="px-2 md:px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-xs md:text-sm">MongoDB</span>
                  <span className="px-2 md:px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-xs md:text-sm">Supabase</span>
                  {/* Software & Programs Title */}
                  <div className="w-full text-center mb-4 mt-8">
                    <h4 className="font-playfair text-base md:text-lg font-semibold text-white">Software & Programs</h4>
                  </div>
                  {/* Software & Programs */}
                  <span className="px-2 md:px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-xs md:text-sm">Git</span>
                  <span className="px-2 md:px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-xs md:text-sm">Docker</span>
                  <span className="px-2 md:px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-xs md:text-sm">Vercel</span>
                  <span className="px-2 md:px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-xs md:text-sm">Linux</span>
                  <span className="px-2 md:px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-xs md:text-sm">Vim</span>
                  <span className="px-2 md:px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-xs md:text-sm">VS Code</span>
                  <span className="px-2 md:px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-xs md:text-sm">Eclipse</span>
                  <span className="px-2 md:px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-xs md:text-sm">Jupyter</span>
                  <span className="px-2 md:px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-xs md:text-sm">Adobe Photoshop</span>
                </div>
              </div>
            </div>
          </div>



          <Timeline />
          <ProjectSection />


          {/* Certifications Section */}
          <CertificationsSection />

          {/* Project Section */}



          

         
        </div>
      </div>

     
    </div>
  );
}























