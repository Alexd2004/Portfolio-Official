export const site = {
  name: "Alexandre Duteau",
  role: "Software Engineer",
  tagline: "Backend and cloud engineer who ships production systems.",
  location: "Calgary, AB",
  email: "alexandreduteau04@outlook.com",
  github: "https://github.com/Alexd2004",
  resume: "/Alexandre-Duteau-Resume.pdf",
  /** One spoken sentence under the name. */
  intro:
    "I'm a software engineer in Calgary. Most days that means backend and cloud work at Midas Labs; the rest of the time it's a student studio, a half-built drone, and whatever the weather is doing an hour west of here.",
  bio: [
    "I'm a computer science student at the University of Calgary, and for the past two years I've been a software engineer at Midas Labs, shipping production systems for clients across fintech, nonprofit, association SaaS, and energy services. Most of that is backend and cloud: a Go and PostgreSQL API, a serverless AWS backend I designed in Terraform, and an embeddable AI chatbot that has now handled 64,000+ conversations.",
    "With friends I co-founded Nullus, a student web studio that has delivered nine client projects. With another friend I'm building a mini quadcopter from scratch, custom flight controller and firmware included. It's on the bench right now, which is engineer for \"not flying yet\".",
  ],
  photo: {
    src: "/img/personal.webp",
    alt: "Alexandre Duteau at night in front of the Arc de Triomphe",
  },
} as const;

/** The non-work half. No invented specifics: no trail names, teams, or bands. */
export const personal = {
  place: "Calgary, Alberta",
  placeNote: "Foothills city. Big sky, long winters, and the Rockies an hour west.",
  lede:
    "Away from a keyboard I hike, I play and follow more sports than I'd admit in an interview, and there's almost always indie rock on. Most of what I build outside work, I build with friends.",
  interests: [
    { label: "Hiking", note: "The mountains are an hour away and I try to act like it." },
    { label: "Sports", note: "Playing and watching, in roughly equal measure." },
    { label: "Indie rock", note: "On more or less constantly." },
    { label: "Building with friends", note: "A student studio, and a drone that's currently on the bench." },
  ],
  colophon: "Set in Fraunces and Karla. Built in Calgary with Next.js.",
} as const;

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Credentials", href: "#credentials" },
  { label: "Off the clock", href: "#off-the-clock" },
] as const;
