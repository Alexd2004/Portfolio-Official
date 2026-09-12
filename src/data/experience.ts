export type Experience = {
  role: string;
  org: string;
  orgUrl?: string;
  location: string;
  start: string;
  end: string;
  summary: string;
  points: string[];
  accent: string;
};

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    org: "Midas Labs",
    location: "Calgary, AB",
    start: "Jun 2024",
    end: "Present",
    accent: "#e05a4f",
    summary:
      "Product studio building production software for clients across fintech, nonprofit, association SaaS, and energy services.",
    points: [
      "Engineered an embeddable AI chat widget deployed across multiple clients, owning the flagship build end to end for two years and serving 64,000+ queries for a credit counselling nonprofit.",
      "Designed and shipped a serverless AWS backend in Terraform (API Gateway, Lambda, IAM, CloudWatch), stripping all third-party credentials from shipped JavaScript; live at 250 req/day with 100% success.",
      "Top contributor of five engineers on a Go/Postgres career coaching marketplace (56 REST endpoints, 37 migrations, 503 tests), including presigned S3 uploads, SES email delivery, and double-booking prevention.",
      "Shipped four Shadow DOM web components across hundreds of member associations on an association management SaaS, including a union-based audience model for campaign targeting.",
      "Built an AI email drafting experience on AWS Bedrock with streamed rendering, then fixed the merge token validation blocking every generated draft from reaching approved status.",
    ],
  },
  {
    role: "Co-Founder & Software Engineer",
    org: "Nullus Inc.",
    orgUrl: "https://www.nullus.ca",
    location: "Calgary, AB",
    start: "Nov 2023",
    end: "Present",
    accent: "#8b6fd8",
    summary:
      "Student-run web development studio at the University of Calgary. Three founders, ten-person team.",
    points: [
      "Developed 8 client applications in Next.js, TypeScript, React, and Go on Vercel, plus an in-progress React Native rewards app for a restaurant chain.",
      "Drove adoption of a ticket-based PR workflow using Jira with issue-keyed branches, conventional commits, and mandatory peer review, saving the team 4+ hours weekly in rework and merge conflicts.",
    ],
  },
  {
    role: "Web Developer",
    org: "Canadian Global Care on Campus",
    orgUrl: "https://cgconcampus.ca",
    location: "Calgary, AB",
    start: "Oct 2023",
    end: "Apr 2025",
    accent: "#3fa47a",
    summary: "University club focused on global humanitarian efforts.",
    points: [
      "Owned the club's public site across multiple event cycles, serving 200+ weekly visitors at peak.",
      "Rebuilt it from a static page into a 5-route React and Vite app, shipping 2 weeks early and lifting event attendance 36%.",
    ],
  },
];

export const education = {
  school: "University of Calgary",
  degree: "Bachelor of Science in Computer Science",
  start: "Sep 2022",
  end: "Expected Apr 2027",
};
