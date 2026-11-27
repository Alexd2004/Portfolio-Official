export type Credential = {
  title: string;
  org: string;
  year: string;
  detail: string;
  link?: string;
  badge?: string;
};

export const certifications: Credential[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    org: "Amazon Web Services",
    year: "2025",
    detail:
      "Foundational AWS certification covering core services, security, architecture, and pricing.",
    link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
  },
  {
    title: "Machine Learning Specialization",
    org: "Stanford / DeepLearning.AI",
    year: "2025",
    detail:
      "Three-course specialization covering supervised learning, advanced algorithms, and unsupervised learning.",
    link: "https://www.coursera.org/specializations/machine-learning-introduction",
  },
];

export const competitions: Credential[] = [
  {
    title: "Hack the Change 2026",
    org: "University of Calgary",
    year: "2026",
    badge: "15th / 83",
    detail:
      "Placed 15th of 83 teams with SkillQuest, an app that turns the skills a job posting asks for into a game you play to learn them.",
    link: "https://github.com/Alexd2004/HackTheChange2026",
  },
  {
    title: "Hack the Change 2025",
    org: "University of Calgary",
    year: "2025",
    badge: "9th / 65",
    detail:
      "Placed 9th of 65 teams with UrbanSignal, a civic 311 analytics dashboard with an LLM assistant.",
    link: "https://github.com/Alexd2004/HackTheChange2025-webapp",
  },
  {
    title: "Hack the Change 2024",
    org: "University of Calgary",
    year: "2024",
    badge: "16th",
    detail:
      "Placed 16th with BillBoard, a civic engagement platform for tracking government policy.",
    link: "https://github.com/faraz-t/BillBoard",
  },
];
