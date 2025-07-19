import { notFound } from 'next/navigation';
import Image from 'next/image';

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
    website: "https://alexandreduteau.com/",
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
    github: "https://github.com/Alexd2004/ChatBot-Platform",
    website: "",
    color: "border-red-500",
    tag: "bg-red-500",
    type: "Graphics",
  },
  {
    title: "Self-Checkout Station",
    bio: "A simulation of a self-checkout station for retail.",
    massiveBio: "This Java-based self-checkout station simulation demonstrates comprehensive software engineering principles through the creation of a realistic retail automation system. The project combines graphical user interface development with complex business logic to create an intuitive and efficient checkout experience.\n\nThe GUI implementation using JavaFX provides a modern, user-friendly interface that mimics real-world self-checkout systems, featuring barcode scanning, real-time cart management, and an intuitive payment interface. The system includes sophisticated payment processing logic handling various payment methods, tax calculations, and inventory updates with proper error handling. Quality assurance is ensured through comprehensive unit testing using JUnit, covering all major functionality. The project showcases object-oriented design principles with well-structured classes and modular architecture suitable for educational and real-world applications.",
    skills: ["Java", "JavaFX", "JUnit", "Java Swing"],
    image: "/images/SelfCheckoutStation.png",
    points: [
      "GUI with barcode scanning",
      "Automated payment logic",
      "Unit tested with JUnit"
    ],
    github: "https://github.com/Alexd2004/SelfCheckoutStation",
    website: "",
    color: "border-purple-500",
    tag: "bg-purple-500",
    type: "Desktop App",
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
    github: "",
    website: "",
    color: "border-blue-500",
    tag: "bg-blue-500",
    type: "Full-Stack",
  },
];

function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find(
    (p) => slugify(p.title) === params.slug
  );

  if (!project) {
    return (
      <div className="bg-[#2c2c2c] min-h-screen w-full">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-white">
          <h1 className="text-3xl font-bold mb-4">Project not found</h1>
          <p className="text-gray-400">Sorry, we couldn&apos;t find the project you&apos;re looking for.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#2c2c2c] min-h-screen w-full">
      <div className="flex flex-col items-center max-w-2xl mx-auto py-12 px-4 text-white">
        <div className="w-full flex flex-col items-center mb-8">
          <div className={`bg-[#232323] border-l-8 ${project.color} rounded-xl overflow-hidden h-70 w-full max-w-2xl`}>
            <Image src={project.image} alt={project.title} width={600} height={400} className="rounded-r-xl object-contain w-full h-full" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 mb-2">
          <h1 className="font-playfair text-3xl font-bold text-center">{project.title}</h1>
          <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${project.tag}`}>
            {project.type}
          </span>
        </div>
        <p className="text-gray-300 text-lg mb-4 text-center">{project.bio}</p>
        <div className="flex flex-wrap gap-1 mb-6 justify-center">
          {project.skills.map((skill, i) => (
            <span key={i} className="px-3 py-1 bg-gray-600 text-white text-sm rounded-full">
              {skill}
            </span>
          ))}
        </div>
        <div className="w-full max-w-3xl mx-auto space-y-6 mb-6">
          {project.massiveBio.split('\n\n').map((paragraph, i) => (
            <p key={i} className="text-gray-300 text-base leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="flex flex-row gap-4 mt-2">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 underline">GitHub</a>
          )}
          {project.website && (
            <a href={project.website} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 underline">Live Demo</a>
          )}
        </div>
      </div>
    </div>
  );
} 