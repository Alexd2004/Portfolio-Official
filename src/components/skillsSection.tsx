'use client'

import React from 'react';
// import './SkillSection.css'; 

export function SkillSection() {
  return (
    <div className="bg-[#141414] pb-4">
      <div className="bg-[#141414] flex justify-center items-center pb-8">
        <div className="w-full max-w-[1300px] p-4 flex flex-col items-center">
          <h2 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#0A9841] to-[#b6e0c6] font-bold italic mt-4">Languages</h2>
          <div className="flex flex-wrap justify-center mt-4 gap-2 pb-4">
            <SkillCard name="HTML" imageSrc="/images/html.png" customClass="bg-[#fc5424]" />
            <SkillCard name="CSS" imageSrc="/images/css.png" customClass="bg-[#264de4]" />
            <SkillCard name="JavaScript" imageSrc="/images/javascript-logo.png" customClass="bg-[#dab92d]" />
            <SkillCard name="Python" imageSrc="/images/Python.png" customClass="bg-[#4F523E]" />
            <SkillCard name="Java" imageSrc="/images/java.png" customClass="bg-white" />
            <SkillCard name="C" imageSrc="/images/C_Logo.png" customClass="bg-[#4772a1]" />
            <SkillCard name="ARM64" imageSrc="/images/asm.png" customClass="bg-[#fad2b9]" />
          </div>

          <h2 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#0A9841] to-[#b6e0c6] font-bold italic mt-6">Framework/Libraries</h2>
          <div className="flex flex-wrap justify-center mt-4 gap-2 pb-4">
            <SkillCard name="Django" imageSrc="/images/DJANGOREAL.png" customClass="bg-[#092e20]" />
            <SkillCard name="Numpy" imageSrc="/images/Numpy.png" customClass="bg-[#d06c4c]" />
            <SkillCard name="D3" imageSrc="/images/D3.png" customClass="bg-[#06b6d4]" />
            <SkillCard name="NodeJS" imageSrc="/images/nodejs.png" customClass="bg-[#21481d]" />
            <SkillCard name="NextJs" imageSrc="/images/NextJs.png" customClass="bg-[#06b6d4]" />
            <SkillCard name="JUnit" imageSrc="/images/JUNIT.png" customClass="bg-[#a12564]" />
            <SkillCard name="JavaFX" imageSrc="/images/JavaFX_Logo.png" customClass="bg-[#091228]" />
            <SkillCard name="React" imageSrc="/images/React.png" customClass="bg-[#61dafb]" />
            <SkillCard name="TailwindCSS" imageSrc="/images/TailwindCSS.png" customClass="bg-[#06b6d4]" />
            <SkillCard name="Swing" imageSrc="/images/Swing.png" customClass="bg-[#06b6d4]" />



          </div>

          <h2 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#0A9841] to-[#b6e0c6] font-bold italic mt-6">Softwares/Programs</h2>
          <div className="flex flex-wrap justify-center mt-4 gap-2">

            <SkillCard name="Bash" imageSrc="/images/Bash.png" customClass="bg-[#ff3500]" />
            
            <SkillCard name="Git" imageSrc="/images/git-logo.png" customClass="bg-[#1750aa]" />

            <SkillCard name="Linux" imageSrc="/images/Linux.png" customClass="bg-[#ff3500]" />
            <SkillCard name="Vercel" imageSrc="/images/Vercel.png" customClass="bg-[#ff3500]" />
            <SkillCard name="Supabase" imageSrc="/images/Supabase.png" customClass="bg-[#ff3500]" />
            <SkillCard name="MySQL" imageSrc="/images/MySQL.png" customClass="bg-[#ff3500]" />
            <SkillCard name="PostgreSQL" imageSrc="/images/PostgreSQL.png" customClass="bg-[#ff3500]" />
            <SkillCard name="Baselime" imageSrc="/images/Baselime.png" customClass="bg-[#ff3500]" />
            <SkillCard name="Segment" imageSrc="/images/Segment.png" customClass="bg-[#ff3500]" />
            <SkillCard name="Photoshop" imageSrc="/images/Adobe-Photoshop-Logo-2019-2020.png" customClass="bg-[#ff3500]" />
            <SkillCard name="Jupyter" imageSrc="/images/883px-Jupyter_logo.svg.png" customClass="bg-[#9e4e15]" />
            <SkillCard name="MongoDB" imageSrc="/images/MOngo.png.png" customClass="bg-[#211f41]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillCard({ name, imageSrc, customClass }: { name: string, imageSrc: string, customClass: string }) {
  return (
    <div className={`relative flex items-center justify-center h-[80px] w-[80px] md:h-[100px] md:w-[100px] ${customClass} rounded-lg`}>
      <img src={imageSrc} alt={`${name} Logo`} className="w-12 h-12 md:w-16 md:h-16" />
      <div className="absolute inset-0 flex items-center justify-center backdrop-filter backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300">
        <span className="text-black font-bold text-xs md:text-sm">{name}</span>
      </div>
    </div>
  );
}
