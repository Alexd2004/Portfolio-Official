import React from "react";

const timelineData = [
  {
    color: "blue-500",
    border: "border-blue-500",
    circle: "bg-blue-500",
    title: "Computer Science Student",
    subtitle: "University of Calgary • Sept 2022 - 2027",
    subtitleColor: "text-blue-400",
    description:
      "Pursuing Bachelor's degree in Computer Science alongside a minor in psychology with focus on Algorithms, Software Engineering, Computer Systems & Architecture, Mathematics & Theory and much more",
  },
  {
    color: "green-500",
    border: "border-green-500",
    circle: "bg-green-500",
    title: "Software Engineer Intern",
    subtitle: "Midas Labs • June 2024 - Present",
    subtitleColor: "text-green-400",
    description:
      "At Midas Labs, I develop RESTful APIs and frontend interfaces for AI-powered chatbot applications using Go, SQL, React, and Next.js. My work focuses on enhancing company websites for user experience and performance, building secure authentication systems, and developing chatbot features for enterprise clients. I also create demos for clients including a mobile demo and prepare data for AI models. This role allows me to combine backend and frontend skills to deliver impactful, scalable solutions.",
  },
  {
    color: "purple-500",
    border: "border-purple-500",
    circle: "bg-purple-500",
    title: "Co-Founder / Software Developer",
    subtitle: "Nullus Inc • April 2024 - Present",
    subtitleColor: "text-purple-400",
    description:
      "Co-founded Nullus Inc, a software development company dedicated to empowering individuals, clubs, and businesses with innovative web solutions while providing students with valuable real-world experience. Alongside my co-founders, I helped establish Nullus to create opportunities for hands-on learning and professional growth in a collaborative environment. Since our founding, we have delivered high-quality web development and branding services to six diverse clients, including university clubs, consulting businesses, and local service providers. This experience has allowed me to expand my technical and entrepreneurial skills, work closely with clients to meet their unique needs, and contribute to building a brand focused on efficiency, innovation, and community impact.",
  },
  {
    color: "orange-500",
    border: "border-orange-500",
    circle: "bg-orange-500",
    title: "Open Source Contributor",
    subtitle: "GitHub • 2023 - Present",
    subtitleColor: "text-orange-400",
    description:
      "Contributing to various open source projects and building personal projects for learning.",
  },
];

export function Timeline() {
  return (
    <div className="flex-1 max-w-2xl mx-auto px-4">
      <h2 className="font-playfair text-2xl font-bold text-white mb-6 text-center">My Programming Timeline</h2>
      <div className="relative">
        {/* Main Timeline Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-600 z-0"></div>
        {/* Timeline Items */}
        <div className="flex flex-col space-y-10">
          {timelineData.map((item, idx) => (
            <div key={idx} className="relative flex items-start min-h-[56px]">
              {/* Circle - always aligned with the card */}
              <div className={`absolute left-6 top-0 w-4 h-4 rounded-full border-4 border-gray-800 -translate-x-1/2 z-10 ${item.circle}`}></div>
              {/* Card content with left margin for line/circle */}
              <div className="ml-12 w-full">
                <div className={`bg-gray-800 p-4 rounded-lg border-l-4 ${item.border}`}>
                  <h3 className="font-playfair text-lg font-semibold text-white mb-1">{item.title}</h3>
                  <p className={`${item.subtitleColor} text-sm mb-2`}>{item.subtitle}</p>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 










