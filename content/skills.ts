export type SkillGroup = {
  title: string;
  subtitle: string;
  items: { name: string; meta: string }[];
};

export const skills: SkillGroup[] = [
  {
    title: "React Ecosystem",
    subtitle: "Most of my day-to-day work happens here",
    items: [
      { name: "React.js (core)", meta: "Building UI with reusable components" },
      { name: "Hooks", meta: "useState, useEffect, and custom hooks in real use" },
      { name: "Component architecture", meta: "Keeping things clean and maintainable" },
      { name: "API integration", meta: "Handling data, loading states, and errors" }
    ]
  },
  {
    title: "Frontend Core",
    subtitle: "Tools I rely on to build fast and clean UIs",
    items: [
      { name: "React", meta: "Structuring apps in a scalable way" },
      { name: "Next.js", meta: "Routing, performance, and static builds" },
      { name: "TypeScript", meta: "Helps avoid silly bugs" },
      { name: "Tailwind", meta: "Quick styling without overthinking CSS" }
    ]
  },
  {
    title: "State & Data",
    subtitle: "Keeping UI and data in sync without chaos",
    items: [
      { name: "Redux", meta: "When state starts getting complex" },
      { name: "Context API", meta: "For simpler global state" },
      { name: "API Integration", meta: "Connecting UI with real data" }
    ]
  },
  {
    title: "UI/UX",
    subtitle: "Where small details make a big difference",
    items: [
      { name: "Visual hierarchy", meta: "Spacing and typography that feel right" },
      { name: "Motion design", meta: "Subtle animations, not overdone" },
      { name: "Accessibility", meta: "Basic usability and readability" }
    ]
  },
  {
    title: "Backend Basics",
    subtitle: "Enough to understand and integrate things properly",
    items: [
      { name: "Node.js", meta: "Basic API understanding" },
      { name: "Laravel", meta: "Worked with it at a basic level" }
    ]
  }
];