import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const timelineData = [
  {
    color: "blue-500",
    border: "border-blue-500",
    circle: "bg-blue-500",
    title: "Computer Science Student",
    note: "Undergraduate Program",
    subtitle: "University of Calgary • Sept 2022 - 2027",
    subtitleColor: "text-blue-400",
    description:
      "Pursuing Bachelor's degree in Computer Science alongside a minor in psychology with focus on Algorithms, Software Engineering, Computer Systems & Architecture, Mathematics & Theory and much more",
  },
  {
    color: "red-500",
    border: "border-red-500 ",
    circle: "bg-red-500",
    title: "Software Engineer",
    note: "Internship",
    subtitle: "Midas Labs • June 2024 - Present",
    subtitleColor: "text-red-400",
    description:
      "At Midas Labs, I develop RESTful APIs and frontend interfaces for AI-powered chatbot applications using Go, SQL, React, and Next.js. My work focuses on enhancing company websites for user experience and performance, building secure authentication systems, and developing chatbot features for enterprise clients. I also create demos for clients including a mobile demo and prepare data for AI models. This role allows me to combine backend and frontend skills to deliver impactful, scalable solutions.",
  },
  {
    color: "purple-500",
    border: "border-purple-500",
    circle: "bg-purple-500",
    title: "Co-Founder / Software Developer",
    note: "Entrepreneurship",
    subtitle: "Nullus Inc • April 2024 - Present",
    subtitleColor: "text-purple-400",
    description:
      "Co-founded Nullus Inc, a software development company dedicated to empowering individuals, clubs, and businesses with innovative web solutions while providing students with valuable real-world experience. Alongside my co-founders, I helped establish Nullus to create opportunities for hands-on learning and professional growth in a collaborative environment. Since our founding, we have delivered high-quality web development and branding services to six diverse clients, including university clubs, consulting businesses, and local service providers. This experience has allowed me to expand my technical and entrepreneurial skills, work closely with clients to meet their unique needs, and contribute to building a brand focused on efficiency, innovation, and community impact.",
  },
  {
    color: "orange-500",
    border: "border-orange-500",
    circle: "bg-orange-500",
    title: "Software Engineer/Developer",
    note: "Competition-Bound UAV Development",
    subtitle: " UofA Robotics & Aerial Drones • July 2025 - Present",
    subtitleColor: "text-orange-400",
    description: "Responsible for designing and maintaining the official website for the University of Alberta Robotics & Aerial Drones team, ensuring clear communication of the team's mission, projects, and events. Collaborated with team members to create an engaging and user-friendly online presence. Contributed to the development and programming of the team's drone systems, focusing on software functionality, system integration, and performance improvements. Assisted in testing and troubleshooting to enhance reliability and achieve project deadlines for the Aerial Evolution Association Canada 2026 Compeition.",
},
  {
    color: "green-500",
    border: "border-green-500",
    circle: "bg-green-500",
    title: "Web Developer",
    note: "Club Website",
    subtitle: " UofC Canadian Global Care • Sept 2023 - June 2025",
    subtitleColor: "text-green-400",
    description:
      "Tasked with the creation and maintenance of a user-friendly, simple, and visually appealing website that can reflect all the information about the Canadian Global Care on Campus Club.Tasked with the creation and maintenance of a user-friendly, simple, and visually appealing website that can reflect all the information about the Canadian Global Care on Campus Club.",
  },
];

export function Timeline() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const toggleExpand = (idx: number) => {
    setExpanded(expanded === idx ? null : idx);
  };
  return (
    <div className="flex-1 max-w-2xl mx-auto px-4">
      <div className="flex items-center justify-center mb-6">
        <div className="hidden sm:block flex-1 h-px bg-gray-600 mx-4" />
        <h2 className="font-playfair text-2xl font-bold text-white text-center whitespace-nowrap">My Programming Timeline</h2>
        <div className="hidden sm:block flex-1 h-px bg-gray-600 mx-4" />
      </div>
      <div className="relative">
        {/* Main Timeline Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-600 z-0"></div>
        {/* Timeline Items */}
        <div className="flex flex-col space-y-10">
          {timelineData.map((item, idx) => {
            const isLong = item.description.length > 120;
            const isOpen = expanded === idx || hovered === idx;
            return (
              <div key={idx} className="relative flex items-start min-h-[56px]">
                {/* Circle - always aligned with the card */}
                <div className={`absolute left-6 top-0 w-4 h-4 rounded-full border-4 border-gray-800 -translate-x-1/2 z-10 ${item.circle}`}></div>
                {/* Card content with left margin for line/circle */}
                <div className="ml-12 w-full">
                  <div
                    className={`bg-gray-800 p-4 rounded-lg border-l-4 ${item.border} group transition-shadow duration-150`}
                    onMouseEnter={() => setHovered(idx)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-playfair text-lg font-semibold text-white">{item.title}</h3>
                      <span className="text-xs text-gray-400 ml-2">{item.note}</span>
                    </div>
                    <p className={`${item.subtitleColor} text-sm mb-2`}>{item.subtitle}</p>
                    <div className="text-gray-300 text-sm flex items-start">
                      <span>
                        {isLong && !isOpen
                          ? item.description.slice(0, 120) + "..."
                          : item.description}
                      </span>
                      {isLong && (
                        <button
                          aria-label={isOpen ? "Collapse description" : "Expand description"}
                          onClick={() => toggleExpand(idx)}
                          className="ml-2 mt-0.5 text-gray-400 hover:text-white focus:outline-none transition-opacity duration-150 opacity-100"
                        >
                          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 










