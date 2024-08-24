'use client';

import React from 'react';

interface ProjectCardProps {
  title: string;
  year: string;
  languages: string[];
  description: string;
  imageSrc: string;
}

function ProjectCard({ title, year, languages, description, imageSrc }: ProjectCardProps) {
  return (
    <div className="w-full lg:w-[45%] mb-8 lg:mb-0 bg-[#141414]">
      <div className="bg-[#141414] rounded-lg flex flex-col p-4 pb-4">
        {/* Title and Year above the image */}
        <h1 className="text-xl md:text-2xl font-bold italic bg-gradient-to-r from-[#0A9841] to-[#b6e0c6] bg-clip-text text-transparent mb-2">
          {title} <span className="text-lg text-white">{year}</span>
        </h1>

        {/* Image */}
        <div className="bg-[#141414] w-full mb-4 rounded-lg">
          <img
            src={imageSrc}
            alt={title}
            className="object-cover h-[150px] sm:h-[180px] md:h-[220px] lg:h-[270px] w-full rounded-lg"
          />
        </div>

        {/* Text Below the Image */}
        <div className="text-white mt-4">
          <p className="font-bold text-lg">Languages Used: <span className="font-normal">{languages.join(', ')}</span></p>
          <p className="italic mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
}

export function ProjectSection() {
  return (
    <div className="bg-[#141414]" >
      <div className="mx-auto max-w-[1300px] h-auto p-4 flex flex-col justify-center items-center">
        {/* First Row of Projects */}
        <div className="flex flex-col lg:flex-row w-full justify-between space-y-8 lg:space-y-0 lg:space-x-8">
          <ProjectCard 
            title="NeuralBlend - In Progress"
            year="2024"
            languages={['Python', 'TypeScript', 'TailwindCSS', 'React', 'Next.js']}
            description="NeuralBlend is a web application that uses a stable diffusion CNN to generate custom images. Built with Python, Next.js, and React, it provides a user-friendly interface where users can input ideas and receive high-quality, AI-generated images tailored to their specifications."
            imageSrc="/images/WIP.jpg"
          />
          <ProjectCard 
            title="CGC UCalgary Website"
            year="2024"
            languages={['React', 'Vite', 'TailwindCSS']}
            description="In a team of two, we developed and launched a dynamic website for the CGC UCalgary club, designed to engage visitors and effectively convey club information."
            imageSrc="/images/cgc.png"
          />
        </div>
        
        <div className="my-8"></div> 

        {/* Second Row of Projects */}
        <div className="flex flex-col lg:flex-row w-full justify-between space-y-8 lg:space-y-0 lg:space-x-8">
          <ProjectCard 
            title="Self-Checkout Station"
            year="2024"
            languages={['Java', 'Swing']}
            description="In a team of 20, we developed a complete software solution for a self-checkout station using Java and Swing. The project included essential components like a barcode scanner, user interface, and payment system, with Swing utilized for building the UI"
            imageSrc="/images/SelfCheckoutStation.png"
          />
          <ProjectCard 
            title="WSBenchMarks - In Progress"
            year="2024"
            languages={['D3.js', 'Encore', 'Go', 'NextJS', 'PostgreSQL', 'React', 'TypeScript', 'TailwindCSS']}
            description="In Nullus Inc, we are in the process of creating a NextJS web-app with the goal of helping users access their investment performance. By comparing their stock performances to others in the market."
            imageSrc="/images/WIP.jpg"
          />
        </div>
      </div>
    </div>
  );
}

