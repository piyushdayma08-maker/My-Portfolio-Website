export type ProjectType = "Personal Project" | "Client Work";

export type Project = {
  title: string;
  featured?: boolean;
  type: ProjectType;
  description: string;
  highlights?: string[];
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    title: "AI Avatar Generator",
    featured: true,
    type: "Personal Project",
    description:
      "A React-based generator UI where the main work is state + UX: inputs, loading, error states, and clean composition. The daylight/glass look is intentional—easy on the eyes, still premium.",
    highlights: ["Glassmorphism UI", "Daylight (Light Mode) design", "AI-based experience"],
    tech: ["React", "Tailwind", "UI State", "UX"],
    image: "/projects/AI Avatar Generator.png",
    liveUrl: "https://owner-avatar-ai-image-generator.vercel.app/#generator",
    githubUrl: "https://github.com/piyushdayma08-maker/Owner-avatar-AI-Image-Generator.git"
  },
  {
    title: "HRMS Dashboard",
    type: "Personal Project",
    description:
      "A dashboard-style UI built in React: navigation, data tables, and reusable layout pieces that don’t fall apart when the dataset grows.",
    tech: ["React", "Tailwind", "Tables", "Layout"],
    image: "/projects/HRMS Dashboard.png",
    githubUrl: "https://github.com/piyushdayma08-maker/HRMS-Portal.git"
  },
  {
    title: "Travel Experience Website",
    type: "Personal Project",
    description:
      "A landing page that leans into motion without getting heavy—section transitions, scroll rhythm, and responsive layouts that keep the story readable.",
    tech: ["React", "Framer Motion", "Responsive UI", "Motion"],
    image: "/projects/Travel Experience Website.png",
    githubUrl: "https://github.com/piyushdayma08-maker/Travel-Experince-Website.git"
  },
  {
    title: "Flow Desk Dashboard",
    type: "Personal Project",
    description:
      "A SaaS dashboard concept where the focus is component structure: cards, charts placeholders, and consistent spacing across dense screens.",
    tech: ["React", "Tailwind", "Component System", "UI Consistency"],
    image: "/projects/FlowDesk.png",
    githubUrl: "https://github.com/piyushdayma08-maker/saas-dashboard.git"
  },
  {
    title: "Aviation Overseas Supply (Current Company Project)",
    type: "Client Work",
    description:
      "Worked on this project during my internship, focusing on building clean and responsive UI sections. Improved layout structure, spacing, and overall consistency to make the site feel more professional and easy to navigate.",
    tech: ["Responsive UI", "Layout Design", "Frontend Development"],
    image: "/projects/Aviation Overseas Supply.png",
    liveUrl: "https://www.aviationoverseassupply.us/"
  },
  {
    title: "Jyoti Polymers (Internship Project)",
    type: "Client Work",
    description:
      "Currently working on this project as part of my company work. Focused on delivering a clean, content-first UI with simple navigation, consistent typography, and fast loading performance for a better user experience.",
    tech: ["Frontend Development", "Typography", "Performance Optimization"],
    image: "/projects/Jyoti Polymers.png",
    liveUrl: "https://jyotipolymers.com/"
  }
];