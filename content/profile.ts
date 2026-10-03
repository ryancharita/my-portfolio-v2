// Site copy, ported from the v1 portfolio (nextjs-portfolio-template/Constants/userinfo.js)
// and rewritten to the v2 voice in docs/design-system.md.

export const profile = {
  name: "Ryan Joshua Charita",
  initials: "RJ",
  role: "Full stack developer",
  status: "Available for new projects",
  email: "ryanjoshuacharita@gmail.com",
  resume:
    "https://drive.google.com/file/d/1juN9vKy3MKcqrvlA5iiVAi37Y7-q0E6f/view?usp=sharing",
  socials: {
    github: "https://github.com/ryancharita",
    linkedin: "https://www.linkedin.com/in/rj-charita-6b4806342/",
  },
} as const;

// Each id matches a section's id on the page.
export const nav = [
  { label: "Home", id: "home" },
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
] as const;

export type LeadSegment = { text: string; tech?: boolean };

export const hero = {
  // Tech segments render in ink at weight 600 so the stack reads at a glance.
  lead: [
    { text: "Full stack developer with 6+ years building scalable, maintainable web applications with " },
    { text: "React", tech: true },
    { text: ", " },
    { text: "Next.js", tech: true },
    { text: ", " },
    { text: "Node.js", tech: true },
    { text: " and " },
    { text: "PostgreSQL", tech: true },
    { text: "." },
  ] satisfies LeadSegment[],
  actions: {
    primary: { label: "View projects", href: "#work" },
    secondary: { label: "Get in touch", href: "#contact" },
  },
  stats: [
    { label: "Experience", value: "6+ years" },
    { label: "Production", value: "3 platforms" },
    { label: "Focus", value: "Full stack" },
  ],
} as const;

export type Project = {
  name: string;
  description: string;
  tech: string[];
  /** Path under public/, 16:10. */
  image: string;
  href?: string;
};

export const work = {
  eyebrow: "Featured work",
  title: "Selected work",
  intro: "Production platforms I've built and maintained, from payroll to clinic operations.",
  projects: [
    {
      name: "Payruler",
      description: "The most complete payroll and HRMS platform in the Philippines.",
      tech: ["php", "node.js"],
      image: "/projects/payruler.webp",
    },
    {
      name: "Fleet Management System",
      description: "Tracks vehicles, drivers, rentals and fuel for Cebu City taxi fleets.",
      tech: ["react", "graphql", "postgresql"],
      image: "/projects/fleet-management.webp",
    },
    {
      name: "Fresh Clinics",
      description: "Web app and mobile API for cosmetic nurses and clinic owners.",
      tech: ["vue.js", "node.js", "mongodb"],
      image: "/projects/fresh-clinics.webp",
      href: "https://app.freshclinics.com.au/",
    },
  ] satisfies Project[],
};

export const capabilities = {
  eyebrow: "Capabilities",
  title: "Across the stack",
  intro: "From interface to database to deployment — the tools I use to ship production systems.",
  groups: [
    {
      name: "Frontend",
      skills: [
        "React",
        "Next.js",
        "Vue.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "HTML5 & CSS3",
      ],
    },
    {
      name: "Backend",
      skills: [
        "Node.js (Express, NestJS)",
        "REST APIs",
        "WebSockets",
        "PostgreSQL",
        "MongoDB",
        "Supabase",
        "Prisma & Drizzle ORM",
      ],
    },
    {
      name: "Tools & Deployment",
      skills: [
        "Docker",
        "Git",
        "Vercel",
        "Jest",
        "React Testing Library",
        "ESLint & Prettier",
      ],
    },
  ],
};

export const contact = {
  headline: "Have a product that needs building?",
  body: "I'm taking on new projects. Send a short note about what you're building.",
};

export type TimelineEntry = {
  dates: string;
  title: string;
  org: string;
  summary?: string;
};

// Newest first. Dates copied as-is from v1 — confirm overlaps before relying on them.
export const experience = {
  eyebrow: "Experience",
  title: "Where I've worked",
  intro: "Six years across product companies and client teams, from junior developer to team lead.",
  roles: [
    {
      dates: "May 2021 — Jul 2025",
      title: "Mid-level Software Engineer",
      org: "Fresh Clinics",
      summary: "Built and maintained the web app and mobile API behind the clinic platform.",
    },
    {
      dates: "May 2023 — Oct 2024",
      title: "Senior Front-end Developer",
      org: "Digital Transformation",
      summary: "Led and mentored the front-end team while delivering for an international client.",
    },
    {
      dates: "May 2021 — May 2023",
      title: "Mid-level Front-end Developer Lead",
      org: "Digital Transformation",
      summary: "Set up the team at a new office: onboarding, mentoring and technical workflows.",
    },
    {
      dates: "Aug 2019 — May 2021",
      title: "Junior Software Engineer",
      org: "Payruler",
      summary: "Helped build Payruler v2, a full rebuild focused on performance and scale.",
    },
    {
      dates: "Aug 2019 — May 2021",
      title: "Junior Front-end Developer",
      org: "Digital Transformation",
      summary: "Built front-end components for client web applications as an outsourced developer.",
    },
  ] satisfies TimelineEntry[],
  education: {
    eyebrow: "Education",
    entries: [
      {
        dates: "2019",
        title: "BS Computer Science",
        org: "Northwest Samar State University",
      },
    ] satisfies TimelineEntry[],
  },
};
