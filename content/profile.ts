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
