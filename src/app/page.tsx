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
    <div className="bg-[#2c2c2c] min-h-screen w-screen">
      {/* Example of using Playfair Display */}
      <div className="flex justify-center pt-20 p-40">
        {/* <div className="p-8 w-5/6 h-3/5 border-2 border-white"> */}
        <div className="w-full h-full flex-1">
                      <div className="flex justify-between items-start gap-12">
              {/* Left Side - Bio */}
              <div className="flex-1">
                <div className="text-center mb-8">
                  <h1 className="font-playfair text-4xl font-bold text-white mb-4">
                    Alexandre Duteau
                  </h1>
                  <p className="font-eb-garamond text-lg text-gray-300 mb-5">
                    Student • Developer • Innovator
                  </p>
                </div>
                
                <div className="text-white text-center space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Passionate computer science student with a keen interest in software development, 
                    machine learning, and innovative technologies. Currently pursuing my degree while 
                    working on various projects that combine creativity with technical expertise.
                  </p>
                  
                  {/* <p className="text-gray-300 leading-relaxed">
                    I specialize in full-stack development, with experience in modern frameworks 
                    and programming languages. Always eager to learn new technologies and contribute 
                    to meaningful projects that make a difference.
                  </p> */}
                  <div className="w-full h-px bg-gray-600 my-2"></div>

                  
                    <div className="mt-6">
                    {/* <h3 className="font-playfair text-xl font-semibold text-white mb-4 text-center">Skills</h3>  */}
                    <div className="flex flex-wrap gap-0 justify-center">
                      {/* Languages Title */}
                      <div className="w-full text-center mb-2">
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
                      {/* <span className="px-3 py-1 bg-gray-700 text-gray-200 border border-gray-600 text-sm">Bash</span> */}
                                            
                      {/* Frameworks & Libraries Title */}
                      <div className="w-full text-center mb-2 mt-8">
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
                      <div className="w-full text-center mb-2 mt-8">
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

              {/* Right Side - Timeline */}
              <div className="flex-1">
                <h2 className="font-playfair text-2xl font-bold text-white mb-6 text-center">My Programming Timeline</h2>
                <div className="relative">
                  {/* Main Timeline Line */}
                  <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-gray-600"></div>
                  
                  {/* Timeline Items */}
                  <div className="space-y-8">
                    {/* Timeline Item 1 */}
                    <div className="relative flex items-start">
                      <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-800 -translate-x-1/2 z-10"></div>
                      <div className="ml-12">
                        <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
                          <h3 className="font-playfair text-lg font-semibold text-white mb-1">Computer Science Student</h3>
                          <p className="text-blue-400 text-sm mb-2">University of Calgary • Sept 2022 - 2027</p>
                          <p className="text-gray-300 text-sm">
                            Pursuing Bachelor&apos;s degree in Computer Science alongside a minor in psychology with focus on Algorithms, Software Engineering, Computer Systems & Architectire, Mathematics & Theory and much more
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Item 2 */}
                    <div className="relative flex items-start">
                      <div className="absolute left-6 w-4 h-4 bg-green-500 rounded-full border-4 border-gray-800 -translate-x-1/2 z-10"></div>
                      <div className="ml-12">
                        <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
                          <h3 className="font-playfair text-lg font-semibold text-white mb-1">Software Engineer Intern</h3>
                          <p className="text-green-400 text-sm mb-2">Midas Labs • June 2024 - Present</p>
                          <p className="text-gray-300 text-sm mb-2">
                            At Midas Labs, I develop RESTful APIs and frontend interfaces for AI-powered chatbot applications using Go, SQL, React, and Next.js. My work focuses on enhancing company websites for user experience and performance, building secure authentication systems, and developing chatbot features for enterprise clients. I also create demos for clients including a mobile demo and prepare data for AI models. This role allows me to combine backend and frontend skills to deliver impactful, scalable solutions.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Item 3 */}
                    <div className="relative flex items-start">
                      <div className="absolute left-6 w-4 h-4 bg-purple-500 rounded-full border-4 border-gray-800 -translate-x-1/2 z-10"></div>
                      <div className="ml-12">
                        <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-purple-500">
                          <h3 className="font-playfair text-lg font-semibold text-white mb-1"> 
                          Co-Founder / Software Developer</h3>
                          <p className="text-purple-400 text-sm mb-2">Nullus Inc • April 2024 - Present</p>
                          <p className="text-gray-300 text-sm">
                          Co-founded Nullus Inc, a software development company dedicated to empowering individuals, clubs, and businesses with innovative web solutions while providing students with valuable real-world experience. Alongside my co-founders, I helped establish Nullus to create opportunities for hands-on learning and professional growth in a collaborative environment. Since our founding, we have delivered high-quality web development and branding services to six diverse clients, including university clubs, consulting businesses, and local service providers. This experience has allowed me to expand my technical and entrepreneurial skills, work closely with clients to meet their unique needs, and contribute to building a brand focused on efficiency, innovation, and community impact.

                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Item 4 */}
                    <div className="relative flex items-start">
                      <div className="absolute left-6 w-4 h-4 bg-orange-500 rounded-full border-4 border-gray-800 -translate-x-1/2 z-10"></div>
                      <div className="ml-12">
                        <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-orange-500">
                          <h3 className="font-playfair text-lg font-semibold text-white mb-1">Open Source Contributor</h3>
                          <p className="text-orange-400 text-sm mb-2">GitHub • 2023 - Present</p>
                          <p className="text-gray-300 text-sm">
                            Contributing to various open source projects and building personal projects for learning.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

      {/* <NavBar />
      <div className="flex flex-col justify-center items-center text-center w-screen md:w-full h-screen landing-page-bg bg-cover bg-no-repeat mb-10">
        <div className="flex flex-col items-center justify-center text-center text-white h-screen px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Alexandre Duteau</h1>
          <h1 className="text-xl md:text-2xl font-bold mb-3">Student </h1>
          <h1 className="text-xl md:text-2xl font-bold mb-3">Developer</h1>
          <h1 className="text-xl md:text-2xl font-bold mb-3">Innovator</h1>
        </div>
      </div>  
      <AboutTitle />
      <AboutSection />
      <SkillsTitle />
      <SkillSection />
      <ProjectTitle />
      <ProjectSection />
      <Footer /> */}
    </div>
  );
}

