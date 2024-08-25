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
            <SkillCard name="HTML" imageSrc="/images/html.png" customClass="bg-[#D80621]" />
            <SkillCard name="CSS" imageSrc="/images/css.png" customClass="bg-[#D80621]" />
            <SkillCard name="JavaScript" imageSrc="/images/javascript-logo.png" customClass="bg-[#dc1f37]" />
            <SkillCard name="TypeScript" imageSrc="/images/TypeScript.png" customClass="bg-[#dc1f37]" />
            <SkillCard name="SQL" imageSrc="/images/SQL.png" customClass="bg-[#dc1f37]" />
            <SkillCard name="Python" imageSrc="/images/Python.png" customClass="bg-[#e0384d]" />
            <SkillCard name="Java" imageSrc="/images/java.png" customClass="bg-[#e0384d]" />
            <SkillCard name="Go" imageSrc="/images/Go.png" customClass="bg-[#e45164]" />
            <SkillCard name="C" imageSrc="/images/C_Logo.png" customClass="bg-[#e45164]" />
            <SkillCard name="ARM64" imageSrc="/images/asm.png" customClass="bg-[#e86a7a]" />
          </div>

          <h2 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#0A9841] to-[#b6e0c6] font-bold italic mt-6">Framework/Libraries</h2>
          <div className="flex flex-wrap justify-center mt-4 gap-2 pb-4">
            <SkillCard name="React" imageSrc="/images/React.png" customClass="bg-white"  />
            <SkillCard name="NextJs" imageSrc="/images/Nextjs.png" customClass="bg-white" />
            <SkillCard name="NodeJS" imageSrc="/images/nodejs.png" customClass="bg-white" />
            <SkillCard name="TailwindCSS" imageSrc="/images/Tailwind.png" customClass="bg-white" />
            <SkillCard name="D3" imageSrc="/images/d3.png" customClass="bg-white" />
            <SkillCard name="Django" imageSrc="/images/DJANGOREAL.png" customClass="bg-white" />
            <SkillCard name="Numpy" imageSrc="/images/Numpy.png" customClass="bg-white" />
            <SkillCard name="JUnit" imageSrc="/images/JUNIT.png" customClass="bg-white" />
            <SkillCard name="JavaFX" imageSrc="/images/JavaFX_Logo.png" customClass="bg-white" />
            <SkillCard name="Swing" imageSrc="/images/JavaSwing.png" customClass="bg-white" />
            <SkillCard name="Docker" imageSrc="/images/Docker.png" customClass="bg-white" />




          </div>

          <h2 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#0A9841] to-[#b6e0c6] font-bold italic mt-6">Softwares/Programs</h2>
          <div className="flex flex-wrap justify-center mt-4 gap-2">

            <SkillCard name="Bash" imageSrc="/images/Bash.png" customClass="bg-[#D80621]" />
            <SkillCard name="Linux" imageSrc="/images/Linux.png" customClass="bg-[#D80621]" />
            <SkillCard name="Vercel" imageSrc="/images/Vercel.png" customClass="bg-[#D80621]" />
            <SkillCard name="Git" imageSrc="/images/git-logo.png" customClass="bg-[#dc1f37]" />
            <SkillCard name="Supabase" imageSrc="/images/Supabase.png" customClass="bg-[#dc1f37]" />
            <SkillCard name="MongoDB" imageSrc="/images/MOngo.png.png" customClass="bg-[#dc1f37]" />
            <SkillCard name="MySQL" imageSrc="/images/MySQL.png" customClass="bg-[#e0384d]" />
            <SkillCard name="PostgreSQL" imageSrc="/images/postgres.png" customClass="bg-[#e0384d]" />
            <SkillCard name="Encore" imageSrc="/images/Encore.png" customClass="bg-[#e0384d]" />
            <SkillCard name="Segment" imageSrc="/images/Segment.png" customClass="bg-[#e45164]" />
            <SkillCard name="Baselime" imageSrc="/images/Baselime.png" customClass="bg-[#e45164]" />
            {/* <SkillCard name="Jupyter" imageSrc="/images/883px-Jupyter_logo.svg.png" customClass="bg-[#e86a7a]" /> */}
            {/* <SkillCard name="Photoshop" imageSrc="/images/Adobe-Photoshop-Logo-2019-2020.png" customClass="bg-[#e86a7a]" /> */}


          </div>
        </div>
      </div>
    </div>
  );
}

function SkillCard({ name, imageSrc, customClass, imgClass = "" }: { name: string, imageSrc: string, customClass: string, imgClass?: string }) {
  return (
    <div className={`relative flex items-center justify-center h-[70px] w-[70px] md:h-[90px] md:w-[90px] ${customClass} rounded-lg`}>
      <img src={imageSrc} alt={`${name} Logo`} className={`w-10 h-10 md:w-14 md:h-14 object-contain ${imgClass}`} />
      <div className="absolute inset-0 flex items-center justify-center backdrop-filter backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300">
        <span className="text-black font-bold text-xs md:text-sm">{name}</span>
      </div>
    </div>
  );
}


