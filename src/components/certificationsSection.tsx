import Image from "next/image";
import { Award, Trophy, FileText, Medal, Brain, Cloud, Cpu, Zap } from "lucide-react";

export function CertificationsSection() {
  const certifications = [
    {
      title: "Machine Learning Specialization",
      organization: "Stanford | DeepLearning AI",
      date: "2025",
      description: "Academic excellence recognition for maintaining a high GPA in Computer Science program.",
      icon: <Brain className="w-6 h-6 text-blue-400" />,
      color: "border-white",
      tag: "bg-white",
      type: "Machine Learning",
      link: "",
    },
    {
        title: "AWS Certified Cloud Practitioner",
        organization: "Amazon Web Services",
        date: "2025",
        description: "Demonstrated foundational knowledge of AWS Cloud concepts, services, security, architecture, pricing, and support.",
        icon: <Cloud className="w-6 h-6 text-blue-400" />,
        color: "border-white",
        tag: "bg-white",
        type: "Cloud",
        link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
      },
  ];

  const competitions = [
    {
        title: "AEAC National UAS Competition",
        organization: "Aerial Evolution Association of Canada",
        date: "2026",
        description: "Student competition to design and build autonomous drones with advanced flight capabilities.",
        icon: <div className="w-8 h-8 text-amber-400 flex flex-col items-center justify-center">
          <Trophy className="w-5 h-5" />
          <span className="text-[9px] font-bold">TBD</span>
        </div>,
        color: "border-white",
        tag: "bg-white",
        type: "UAV Competition",
        link: "https://www.aerialevolution.ca/annual-student-competition/",
      },
    {
      title: "Hack the Change",
      organization: "University of Calgary",
      date: "2024",
      description: "Placed 16th out of all projects in the civic engagement hackathon with the BillBoard platform.",
      icon: <div className="w-8 h-8 text-amber-400 flex flex-col items-center justify-center">
        <Trophy className="w-5 h-5" />
        <span className="text-[9px] font-bold">16th</span>
      </div>,
      color: "border-white",
      tag: "bg-white",
      type: "Competition",
      link: "https://hack-the-change-2024.devpost.com/",
    },
  ];

  return (
    <section id="certifications" className="mt-20 flex flex-col items-center">
      {/* <div className="flex items-center justify-center mb-8 w-full max-w-6xl px-4">
        <div className="hidden sm:block flex-1 h-px bg-gray-600 mx-4" />
        <h2 className="font-playfair text-2xl font-bold text-white text-center whitespace-nowrap">Certifications & Competitions</h2>
        <div className="hidden sm:block flex-1 h-px bg-gray-600 mx-4" />
      </div> */}
      
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl px-4">
        {/* Certifications Section (Left) */}
        <div className="flex-1">
          <div className="flex items-center justify-center mb-6">
            <div className="hidden sm:block flex-1 h-px bg-gray-600 mx-4" />
            <h3 className="font-playfair text-xl font-bold text-white text-center whitespace-nowrap">Certifications</h3>
            <div className="hidden sm:block flex-1 h-px bg-gray-600 mx-4" />
          </div>
          <div className="space-y-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className={`flex flex-row bg-[#232323] border-l-8 ${cert.color} rounded-xl shadow-lg p-4 transition-transform hover:scale-[1.02] overflow-hidden`}
                style={{ fontFamily: 'inherit' }}
              >
                <div className="flex items-center justify-center bg-gray-800 rounded-lg p-3 mr-4 flex-shrink-0">
                  {cert.icon}
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-playfair text-lg font-bold text-white">{cert.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-[10px] font-semibold text-black ${cert.tag} ml-2`}>
                      {cert.type}
                    </span>
                  </div>
                  <p className="text-blue-400 text-sm font-semibold mb-1">{cert.organization}</p>
                  <p className="text-gray-400 text-xs mb-2">{cert.date}</p>
                  <p className="text-gray-300 text-sm leading-snug mb-3">{cert.description}</p>
                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black font-semibold px-3 py-1 rounded-full shadow hover:bg-gray-200 transition text-xs self-start"
                      style={{ fontFamily: 'inherit' }}
                    >
                      View Certificate
                    </a>
                  ) : (
                    <div className="bg-gray-600 text-gray-300 font-semibold px-3 py-1 rounded-full text-xs self-start">
                      No Link Available
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competitions Section (Right) */}
        <div className="flex-1">
          <div className="flex items-center justify-center mb-6">
            <div className="hidden sm:block flex-1 h-px bg-gray-600 mx-4" />
            <h3 className="font-playfair text-xl font-bold text-white text-center whitespace-nowrap">Competitions</h3>
            <div className="hidden sm:block flex-1 h-px bg-gray-600 mx-4" />
          </div>
          <div className="space-y-4">
            {competitions.map((comp, idx) => (
              <div
                key={idx}
                className={`flex flex-row bg-[#232323] border-l-8 ${comp.color} rounded-xl shadow-lg p-4 transition-transform hover:scale-[1.02] overflow-hidden`}
                style={{ fontFamily: 'inherit' }}
              >
                <div className="flex items-center justify-center bg-gray-800 rounded-lg p-3 mr-4 flex-shrink-0">
                  {comp.icon}
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-playfair text-lg font-bold text-white">{comp.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-[10px] font-semibold text-black ${comp.tag} ml-2`}>
                      {comp.type}
                    </span>
                  </div>
                  <p className="text-blue-400 text-sm font-semibold mb-1">{comp.organization}</p>
                  <p className="text-gray-400 text-xs mb-2">{comp.date}</p>
                  <p className="text-gray-300 text-sm leading-snug mb-3">{comp.description}</p>
                  {comp.link ? (
                    <a
                      href={comp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black font-semibold px-3 py-1 rounded-full shadow hover:bg-gray-200 transition text-xs self-start"
                      style={{ fontFamily: 'inherit' }}
                    >
                      View Details
                    </a>
                  ) : (
                    <div className="bg-gray-600 text-gray-300 font-semibold px-3 py-1 rounded-full text-xs self-start">
                      No Link Available
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 