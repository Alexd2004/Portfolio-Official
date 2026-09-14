export type Project = {
  slug: string;
  title: string;
  kind: string;
  accent: string;
  tagline: string;
  description: string[];
  stack: string[];
  points: string[];
  image?: string;
  github?: string;
  website?: string;
  status?: "in-progress";
  context?: string;
  /** Typographic stand-in for projects without a screenshot. Values are lifted from the verified copy above. */
  figure?: { value: string; label: string };
  /** The two most current pieces get the larger treatment in the list. */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "urbansignal",
    featured: true,
    title: "UrbanSignal",
    kind: "Full-Stack",
    accent: "#4f8fe0",
    context: "Hack the Change 2025 · 9th of 65 teams · team of 2",
    tagline:
      "A civic 311 analytics dashboard with an LLM assistant that reasons over aggregated data instead of raw rows.",
    description: [
      "Built in 24 hours at Hack the Change 2025, UrbanSignal ingests over a thousand Calgary 311 service requests into Supabase Postgres and surfaces them through a community-district choropleth map, a live activity feed, and per-request detail and status views for city staff.",
      "The part I'm proudest of is the AI analytics page. Rather than streaming raw rows to the model, it aggregates open requests by community and category server-side into a compact structured summary before prompting, so token cost stays flat as the dataset grows. Authentication is cookie-based SSR through @supabase/ssr with signup, email confirmation, password reset, and middleware-protected routes.",
    ],
    stack: ["Next.js 15", "React 19", "TypeScript", "Supabase", "PostgreSQL", "MapLibre", "OpenAI"],
    points: [
      "Placed 9th of 65 teams in a 24-hour build",
      "Community-district choropleth over 1,000+ real service requests",
      "LLM analytics that pre-aggregates server-side, keeping token cost flat",
      "Full SSR auth flow: signup, email confirmation, password reset, protected routes",
    ],
    github: "https://github.com/Alexd2004/HackTheChange2025-webapp",
    figure: { value: "9th", label: "of 65 teams, in a 24-hour build" },
  },
  {
    slug: "micro-drone",
    featured: true,
    title: "Micro Quadcopter",
    kind: "Embedded",
    accent: "#5fbf9a",
    status: "in-progress",
    context: "Personal project · co-built with a friend · in bench bring-up",
    tagline:
      "A mini quadcopter designed from the ground up: custom flight controller, from-scratch firmware, and every part selected by hand.",
    description: [
      "Rather than assembling an off-the-shelf flight controller with stock firmware, we're building the whole stack ourselves. The flight controller is an ESP32 with an MPU-6050 IMU on a custom board, talking to a RadioMaster ELRS receiver over CRSF at 420 kbaud and driving a BLHeli_S 4-in-1 ESC on four 1104 brushless motors. Power is a 3S 450mAh LiPo through a 5V buck converter, and there's an analog FPV link to a Quest 2 headset.",
      "The firmware is C/C++ on PlatformIO, structured as five independently testable modules: CRSF parsing, sensor fusion, PID stabilization, quad-X motor mixing, and failsafe. We deliberately chose an IMU library that exposes raw registers rather than onboard DMP fusion, so the complementary filter (98% gyro, 2% accelerometer, with 500-sample bias calibration) is written by hand. Before any RF hardware was bound, we validated the CRSF parser with a loopback test where the ESP32 builds valid frames itself, CRC-8 polynomial 0xD5 and all, writes them out its own TX pin, and parses them back on RX.",
      "Getting here involved a thrust-to-weight analysis that flagged a 2S under-volting risk on the motors, a correction after checking manufacturer specs, and a switch to 3S and a lighter 20A ESC. Pin assignment was cross-checked against the board's actual pinout, excluding strapping, JTAG, and input-only pins, with a firmware-only fallback for a PSRAM conflict on the UART pair. Stretch goals are altitude hold, position hold, and target tracking.",
    ],
    stack: ["C/C++", "ESP32", "PlatformIO", "MPU-6050", "ELRS / CRSF", "BLHeli_S", "KiCad"],
    points: [
      "Custom flight controller: ESP32 + MPU-6050, ELRS radio over CRSF",
      "From-scratch firmware in five testable modules, hand-written sensor fusion",
      "CRSF loopback test validates the parser with zero RF hardware",
      "Thrust-to-weight analysis drove the move to 3S and a lighter ESC",
    ],
    figure: { value: "5", label: "firmware modules, each testable on its own" },
  },
  {
    slug: "nfl-prediction-pipeline",
    title: "NFL Game Prediction Pipeline",
    kind: "Data / ML",
    accent: "#e0a24f",
    context: "Personal project · 2-person · 82% of the codebase",
    tagline:
      "A 13,000-line pipeline from web scraping through feature engineering to a served XGBoost model, with a walk-forward backtest.",
    description: [
      "The pipeline scrapes 1,673 NFL games from 2018 to 2024 across 28 scripts using BeautifulSoup, requests, and Selenium, handling paginated navigation, inconsistent table schemas, and rate limiting, and lands them as 30,000+ structured CSVs. A rolling-statistics engine then generates team, player, and momentum features with peak tracking, cached to Parquet for fast retraining.",
      "The model is an XGBoost classifier reaching 71% accuracy against a 62.8% majority-class baseline, tuned through a staged randomized hyperparameter search with class-weight balancing, SMOTE oversampling, and decision-threshold optimization. It's validated with a walk-forward backtest across the 2024 season that retrains weekly on prior data only, to avoid look-ahead bias, and served through a Flask JSON API consumed by a Next.js frontend.",
    ],
    stack: ["Python", "XGBoost", "scikit-learn", "pandas", "BeautifulSoup", "Selenium", "Flask", "Next.js"],
    points: [
      "1,673 games scraped into 30,000+ structured CSVs across 28 scripts",
      "71% accuracy against a 62.8% majority-class baseline",
      "16-week walk-forward backtest, retraining weekly on prior data only",
      "Rolling-statistics feature engine cached to Parquet",
    ],
    figure: { value: "71%", label: "accuracy, against a 62.8% majority-class baseline" },
  },
  {
    slug: "ecominded",
    title: "EcoMinded",
    kind: "Frontend",
    accent: "#e0834f",
    context: "Nullus · live at ecominded.ca",
    tagline:
      "An interactive world emissions explorer with a color-scaling algorithm that keeps small emitters visible.",
    description: [
      "EcoMinded is a climate-awareness platform built with the Nullus team. The centrepiece is a MapLibre GL choropleth of fossil emissions across 190+ countries, driven by a data-driven fill expression over a GeoJSON layer.",
      "The interesting problem was the color ramp. Emissions span a roughly 300,000× range between the largest and smallest countries, so a linear scale renders almost everything as the lowest color. Applying gamma correction (ratio^0.2) to the ramp keeps low-emitting countries visually distinguishable against China's outlier value. There's also a GPT-backed sustainability chat assistant with an API route handling upstream quota and error states.",
    ],
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "MapLibre GL", "Turso", "Drizzle ORM", "OpenAI"],
    points: [
      "MapLibre choropleth across 190+ countries",
      "Gamma-corrected color ramp for a 300,000× data range",
      "GPT-backed chat assistant with quota and error handling",
      "Deployed on Vercel behind a custom domain",
    ],
    image: "/img/ecoMinded.webp",
    website: "https://www.ecominded.ca",
    github: "https://github.com/Alexd2004/temporary-name",
  },
  {
    slug: "billboard",
    title: "BillBoard",
    kind: "Full-Stack",
    accent: "#3fbf8a",
    context: "Hack the Change 2024 · 16th place · team of 5",
    tagline:
      "A civic engagement platform for tracking government policy, with forums, petitions, and an AI assistant.",
    description: [
      "BillBoard helps Canadians follow government policy at every level through a newsfeed, community forums, polls, petitions, and an interactive map of their representatives. Billy, an OpenAI-backed assistant, explains legislation in plain language.",
      "As one of five engineers in a 48-hour build, I owned the policy data layer: the Supabase integration hooks, policy ingestion, and government-level sorting. I also implemented the likes/dislikes voting system on policy records with user attribution, and integrated the AI chatbot.",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Leaflet", "OpenAI"],
    points: [
      "Policy data layer: Supabase hooks, ingestion, government-level sorting",
      "Likes/dislikes voting with user attribution",
      "AI chatbot integration",
      "One of five engineers in a 48-hour build",
    ],
    image: "/img/billBoard.webp",
    github: "https://github.com/faraz-t/BillBoard",
  },
  {
    slug: "self-checkout-station",
    title: "Self-Checkout Station",
    kind: "Java",
    accent: "#a06fd8",
    context: "SENG 300 · team of ~20",
    tagline:
      "A retail self-checkout simulation built by a 20-student team, with JUnit coverage across the core flows.",
    description: [
      "A software engineering course project simulating a full retail self-checkout: barcode scanning, cart management, tax and payment logic, and inventory updates, with a JavaFX interface and JUnit tests across the major functionality.",
      "The engineering challenge was less the code and more the coordination. With roughly twenty students on one codebase, the project only worked because each subsystem sat behind a defined interface, so teams could build in parallel and integrate without stepping on each other.",
    ],
    stack: ["Java", "JavaFX", "Swing", "JUnit"],
    points: [
      "Barcode scanning, cart, payment, and inventory subsystems",
      "JUnit tests across the major flows",
      "Interface-driven design so a 20-person team could work in parallel",
    ],
    image: "/img/SelfCheckoutStation.webp",
  },
  {
    slug: "solar-system",
    title: "Solar System Renderer",
    kind: "Graphics",
    accent: "#e05a4f",
    context: "CPSC 453 · rendering and shader code on a provided GL framework",
    tagline:
      "A real-time OpenGL solar system with hierarchical transforms, a procedural sphere generator, and Phong shading.",
    description: [
      "A computer graphics course project in C++ and OpenGL 3.3. I wrote the rendering and shader layer on top of the course's provided window and GL framework.",
      "That covers a hierarchical transform system composing per-body scale, axial rotation, orbital rotation, and orbital inclination, with the moon's model matrix built against the earth's so it orbits a moving parent; a procedural UV-sphere generator producing positions, normals, UVs, and triangle winding from stack and slice counts; and vertex and fragment shaders implementing textured Phong shading with a reflect()-based specular term, with per-object toggling so the sun bypasses lighting.",
    ],
    stack: ["C++", "OpenGL 3.3", "GLSL", "GLM", "ImGui"],
    points: [
      "Hierarchical transforms: moon orbits a moving earth",
      "Procedural UV-sphere generator",
      "Textured Phong shading in GLSL",
    ],
    image: "/img/solarSystem.webp",
  },
];

export type MoreWork = {
  title: string;
  detail: string;
  stack: string;
  github?: string;
};

export const moreWork: MoreWork[] = [
  {
    title: "Go authentication service",
    detail:
      "Registration and login with bcrypt hashing, HS256 JWTs, parameterized SQL, and identical-401 responses to prevent user enumeration.",
    stack: "Go · Gin · PostgreSQL",
    github: "https://github.com/Alexd2004/ai-video-platform",
  },
  {
    title: "Service health dashboard",
    detail:
      "Sole-author uptime platform: four Encore.go services, a bearer-token auth handler, and a cron job polling every registered service into Postgres, with a Next.js frontend on Vercel.",
    stack: "Encore.go · PostgreSQL · Next.js",
  },
  {
    title: "Commandle authentication",
    detail:
      "Credentials auth on NextAuth v5 beta with bcrypt, JWT sessions, Zod validation, and a hand-rolled useSession hook, against a Neon Postgres schema managed with Drizzle.",
    stack: "Next.js · NextAuth v5 · Drizzle · Neon",
  },
  {
    title: "Encore.go microservices",
    detail:
      "Six services over two years, four of them solo: a URL shortener with gqlgen GraphQL, a feedback API, a KYC token service with HMAC request signing, and more.",
    stack: "Go · Encore.dev · GraphQL",
    github: "https://github.com/Alexd2004/url-shortener",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
