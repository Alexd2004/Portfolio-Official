import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

export function ProjectSection() {
  const projects = [
    {
      title: "NFL Spread Predictor",
      bio: "An integrated full-stack application predicting NFL spreads with live data, advanced ML techniques including XGBoost, and secure user authentication.",
      massiveBio: "This comprehensive machine learning project represents a full-stack solution for predicting NFL game spreads using advanced data science techniques. I scraped and cleaned over 7 years of NFL data, processing more than 500,000 raw statistics into a structured dataset with 64,000+ features per row, including detailed team statistics, player performance metrics, and momentum indicators.\n\nThe core utilizes XGBoost with SMOTE oversampling and custom class weights, achieving 75% balanced accuracy against Vegas betting lines. I directly integrated the trained model into a Next.js frontend using custom hooks, providing real-time predictions with confidence scores and feature importance analysis. The technical stack spans the full data science pipeline from web scraping with Python/Pandas to modern web development with Next.js.",
      skills: ["Python", "XGBoost", "Pandas", "Scikit-learn", "BeautifulSoup (Web Scraping)","Feature Engineering", "Next.js", "Authentication", "SMOTE & Class Balancing" ],
      image: "/images/WIP.jpg",
      points: [
        "Scraped and cleaned 7+ years of NFL data, processing 500,000+ raw statistics into a structured dataset. Trained XGBoost on 64,000+ features per row (e.g., team/player stats, momentum, differences, etc)",
        "Deployed XGBoost with SMOTE oversampling and custom class weights, achieving 75% balanced accuracy against Vegas lines",
        "Directly integrated ML model into Next.js frontend using custom hooks",
      ],
      github: "",
      website: "",
      color: "border-blue-500",
      tag: "bg-blue-500",
      type: "AI/ML",
    },
    {
      title: "Mini Solar System",
      bio: "A 3D interactive solar system simulation built with OpenGL, featuring physically accurate orbital mechanics, Phong shading, and real-time animation.",
      massiveBio: "This 3D solar system simulation represents a sophisticated exploration of computer graphics and physics programming using OpenGL and C++. The project creates an immersive, interactive experience that accurately models the complex orbital mechanics of our solar system while maintaining real-time performance.\n\nAt the core is a custom sphere generation algorithm with proper UV mapping for realistic textures, featuring the Sun, Earth, and Moon with unique surface mapping. The orbital mechanics utilize a hierarchical transformation system with model-view matrices to simulate realistic axial tilts, orbital inclinations, and varying periods. The lighting system employs Phong shading with ambient, diffuse, and specular components, with the Sun acting as a point light source. Performance optimization ensures smooth 60fps animation while rendering complex 3D geometry.",
      skills: [ "C++", "OpenGL", "GLSL Shaders", "3D Transformations"],
      image: "/images/solarSystem.png",
      points: [
        "Implemented sphere generation with custom geometry and UV mapping for Sun/Earth/Moon textures",
        "Designed a transformation hierarchy for orbital mechanics (incl. axial tilt and inclination) using model-view matrices",
        "Applied Phong shading with specular/diffuse/ambient lighting (Sun as point light source)",
      ],
      github: "",
      website: "",
      color: "border-red-500",
      tag: "bg-red-500",
      type: "Graphics",
    },
    {
        title: "BillBoard",
        bio: "A civic engagement platform helping Canadians stay informed about government policies and connect with their representatives through newsfeeds, forums, and AI assistance.",
        massiveBio: "BillBoard represents a comprehensive civic engagement platform designed to bridge the gap between Canadian citizens and their government through technology. The platform features a newsfeed providing real-time updates on government policies from all levels, with interactive features like likes, dislikes, and comments. The community forum serves as a digital town square where users can initiate discussions, launch polls, and create petitions.\n\nA standout feature is the interactive map helping users identify their representatives at all government levels, integrating with government databases for accurate information. Billy, the AI assistant using OpenAI's API, explains Canadian law and policy language in plain language. The technical implementation showcases modern full-stack development with React, Next.js, TypeScript, and Supabase with PostgreSQL. This project placed approximately 16th at Hack the Change 2024.",
        skills: [
          "React", "Next.js", "Typescript", "TailwindCSS", "Supabase", "Leaflet.js", "OpenAI API", "PostgreSQL"
        ],
        image: "/images/billBoard.png",
        points: [
          "Newsfeed for Policy Updates: Real-time updates on new and proposed policies from all levels of government, with interactive features (like, dislike, comment)",
          "Community Forum: Users can post discussion boards, launch polls, and create petitions to rally support and discuss issues relevant to their communities.",
          "Hack the Change 2024 Submission (Placed ~16th out of all projects)."
        ],
        github: "https://github.com/farazht/BillBoard.git",
        website: "",
        color: "border-emerald-500",
        tag: "bg-emerald-500",
        type: "Full-Stack",
      },
    {
      title: "Self-Checkout Station",
      bio: "A simulation of a self-checkout station for retail.",
      massiveBio: "This Java-based self-checkout station simulation demonstrates comprehensive software engineering principles through the creation of a realistic retail automation system. The project combines graphical user interface development with complex business logic to create an intuitive and efficient checkout experience.\n\nThe GUI implementation using JavaFX provides a modern, user-friendly interface that mimics real-world self-checkout systems, featuring barcode scanning, real-time cart management, and an intuitive payment interface. The system includes sophisticated payment processing logic handling various payment methods, tax calculations, and inventory updates with proper error handling. Quality assurance is ensured through comprehensive unit testing using JUnit, covering all major functionality. The project showcases object-oriented design principles with well-structured classes and modular architecture suitable for educational and real-world applications.",
      skills: ["Java", "JavaFX", "Java Swing", "JUnit"],
      image: "/images/SelfCheckoutStation.png",
      points: [
        "Class project with a team of ~20 students, demonstrating collaborative software development and version control",
        "GUI with barcode scanning and automated payment logic using JavaFX",
        "Comprehensive unit testing with JUnit covering all major functionality",
        "Object-oriented design with modular architecture for easy maintenance"
      ],
      github: "https://github.com/Alexd2004/SelfCheckoutStation",
      website: "",
      color: "border-purple-500",
      tag: "bg-purple-500",
      type: "Backend",
    },
    {
      title: "Canadian Global Care ",
      bio: "A comprehensive website for the Canadian Global Care on Campus Club, featuring modern design, content management, and seamless user experience for club information and activities.",
      massiveBio: "The Canadian Global Care Website represents a complete web development project designed to serve the needs of a university club focused on global humanitarian efforts. This project demonstrates full-stack development capabilities while creating a platform that effectively communicates the club's mission, activities, and impact to both current members and potential new recruits.\n\nThe website features a modern, responsive design built with React that ensures optimal viewing across all devices, with clear information architecture for club activities and events. The technical implementation showcases proficiency in modern web development with React frontend, Node.js backend, and MongoDB database. A key feature is content management capabilities allowing club administrators to easily update information without technical expertise, ensuring the online presence remains current and engaging.",
      skills: ["React", "Node.js", "MongoDB"],
      image: "/images/cgc.png",
      points: [
        "Modern responsive design with React frontend and Node.js backend",
        "User-friendly interface for club information and event updates",
        "Professional design reflecting humanitarian organization values"
      ],
      github: "",
      website: "https://cgconcampus.ca/",
      color: "border-teal-500",
      tag: "bg-teal-500",
      type: "Frontend",
    },
    {
      title: "EcoMinded",
      bio: "A comprehensive platform for environmental education and sustainability awareness, featuring interactive tools and global environmental data visualization.",
      massiveBio: "EcoMinded represents a collaborative effort by Nullus, a group of passionate university students committed to creating a greener, more sustainable future. This platform serves as a hub for environmental education, collaboration, and action, designed to raise awareness about carbon emissions, environmental sustainability, and the urgent need for collective action to combat climate change.\n\nThe platform's core feature is EcoChat, an interactive chatbot providing personalized eco-friendly tips and sustainability guidance. A standout feature is the interactive map powered by MapLibre, visualizing global environmental data and showing countries facing various environmental challenges. The map integrates with multiple APIs to display real-time data on carbon emissions, renewable energy adoption, and environmental policies. The platform supports and educates users about key environmental initiatives, including Canada's coal phase-out commitment and Germany's Renewable Energy Sources Act.",
      skills: ["React", "MapLibre", "Chatbot API",  "Data Visualization"],
      image: "/images/ecoMinded.png",
      points: [
        "Interactive EcoChat chatbot providing personalized sustainability guidance",
        "MapLibre integration with API calls showing countries with environmental issues",
        "Educational content on global environmental policies and initiatives",
        "Collaborative project with Nullus team of university students"
      ],
      github: "",
      website: "https://www.ecominded.ca/",
      color: "border-orange-500",
      tag: "bg-orange-500",
      type: "Frontend",
    },
  ];

  return (
    <section id="projectpage" className="mt-20 flex flex-col items-center">
      <div className="flex items-center justify-center mb-8 w-full max-w-6xl px-4">
        <div className="hidden sm:block flex-1 h-px bg-gray-600 mx-4" />
        <h2 className="font-playfair text-2xl font-bold text-white text-center whitespace-nowrap">Projects</h2>
        <div className="hidden sm:block flex-1 h-px bg-gray-600 mx-4" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-full max-w-6xl px-4">
        {projects.map((project, idx) => {
          // Generate a slug for the project (simple kebab-case from title)
          const slug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
          return (
            <div
              key={idx}
              className={`flex flex-col min-h-[240px] bg-[#232323] border-l-8 ${project.color} rounded-xl shadow-lg p-0 pt-0 pb-3 transition-transform hover:scale-[1.012] overflow-hidden max-w-sm mx-auto`}
              style={{ fontFamily: 'inherit' }}
            >
              <div className="w-full flex justify-center ">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={100}
                  className="rounded-t-xl object-cover w-full h-32 md:h-36 lg:h-40 border-b border-gray-800"
                />
              </div>
              <div className="w-full flex flex-col items-start px-5 py-2">
                <div className="flex justify-between items-center w-full mb-1 mt-1">
                  <h3 className="font-playfair text-base md:text-lg font-bold text-white">{project.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-[10px] font-semibold text-white ${project.tag}`}>
                    {project.type}
                  </span>
                </div>
                <p className="text-gray-300 text-xs md:text-sm mb-3 leading-snug">{project.bio}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-1.5 py-0.5 rounded-full text-[10px] font-semibold text-white bg-gray-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <ul className="list-disc list-inside text-gray-300 text-[11px] md:text-xs w-full max-w-xs mx-auto space-y-1 mb-3 pl-2">
                  {project.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
              {/* Bottom Action Bar */}
              <div className="w-full flex flex-row justify-between items-center px-5 mt-auto pt-2">
                {project.title === "Canadian Global Care Website" || project.title === "EcoMinded" ? (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black font-semibold px-2 py-1 rounded-full shadow hover:bg-gray-200 transition text-[11px] md:text-xs"
                    style={{ fontFamily: 'inherit' }}
                  >
                    View Website
                  </a>
                ) : (
                  <Link
                    href={`/project/${slug}`}
                    className="bg-white text-black font-semibold px-2 py-1 rounded-full shadow hover:bg-gray-200 transition text-[11px] md:text-xs"
                    style={{ fontFamily: 'inherit' }}
                  >
                    View Details
                  </Link>
                )}
                <div className="flex flex-row gap-3 items-center">
                  {project.github && project.title !== "Canadian Global Care Website" && project.title !== "EcoMinded" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-300"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.website && project.title !== "Canadian Global Care Website" && project.title !== "EcoMinded" && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-300"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
} 