export const site = {
  name: "Alexandre Duteau",
  role: "Software Engineer",
  tagline: "Backend and cloud engineer who ships production systems.",
  location: "Calgary, AB",
  email: "alexandreduteau04@outlook.com",
  github: "https://github.com/Alexd2004",
  resume: "/Alexandre-Duteau-Resume.pdf",
  bio: [
    "I'm a computer science student at the University of Calgary and a software engineer at Midas Labs, where I've spent two years shipping production systems for clients across fintech, nonprofit, association SaaS, and energy services. Most of that work is backend and cloud: a Go and PostgreSQL API, a serverless AWS backend I designed in Terraform, and an embeddable AI chatbot that has served 64,000+ conversations.",
    "Outside work I co-founded Nullus, a student web studio that has delivered nine client projects, and I'm currently building a mini quadcopter from scratch with a friend, custom flight controller and firmware included.",
  ],
} as const;

export const nav = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
] as const;
