import {
  Github,
  Linkedin,
  Code,
  Server,
  Database,
  Cog,
  Paintbrush,
  Smartphone,
  BarChart3,
  PieChart,
  Filter,
  Target,
  Table,
} from "lucide-react";

export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  images: string[];
};

export const projects: Project[] = [
  {
    id: "project-5",
    title: "Sales Analytics & Performance Dashboard",
    description:
      "Developed an automated sales analysis and performance dashboard for a travel agency. The solution extracts and consolidates sales information from Excel reports using scripts, organizes and transforms the data, and presents it through an interactive dashboard. Includes sales KPIs, performance indicators, goal tracking, and progress toward targets, allowing the agency to monitor sales performance and identify opportunities for improvement.",
    technologies: [
      "Looker Studio",
      "Google Sheets",
      "App Script",
      "Data Visualization",
      "KPI Analysis",
      "Business Intelligence",
    ],
    images: ["project5", "project5-1", "project5"],
  },
  {
    id: "project-6",
    title: "Financial Dashboard & Data Automation",
    description:
      "Designed and developed a dashboard for analyzing Costs, Expenses, and Net Income,incorporating KPIs, visualizations, and dynamic filters. I also built a master data repository, performing data cleaning, transformation, and normalization processes, and automated the daily extraction and consolidation of reports.The project helped centralize information, optimize the data flow, and reduce manual intervention in the dashboard update process.",
    technologies: [
      "Looker Studio",
      "Google Sheets",
      "Google Apps Script",
      "Data Visualization",
      "Business Intelligence",
    ],
    images: ["project6-1", "project6-2", "project6-3", "project6-4"],
  },
  {
    id: "project-1",
    title: "Real Estate App",
    description:
      "A web application for the real estate sector, streamlining property sales and rentals. Sellers can list properties with details such as price, rooms, bathrooms, and categories, while buyers can browse listings, schedule visits, and contact owners.",
    technologies: [
      "Java",
      "Spring Security",
      "Hexagonal Architecture",
      "Angular",
      "TypeScript",
      "SCSS",
      "HTML",
    ],
    githubLink: "https://github.com/nataliahe24/Real-estate-app",
    images: ["project1"],
  },
  {
    id: "project-2",
    title: "My Fritter App",
    description:
      "A Java-based application built with Gradle. Features order management, image upload capabilities, and comprehensive error handling API.",
    technologies: ["Java", "Angular", "SCSS", "HTML"],
    githubLink: "https://github.com/nataliahe24/MyFritterApp",
    images: ["project2"],
  },
  {
    id: "project-3",
    title: "Task API",
    description:
      "A TypeScript-based REST API for task management. Provides endpoints for creating, updating, and managing tasks with full CRUD operations.",
    technologies: ["TypeScript", "JavaScript", "Node.js", "REST API"],
    githubLink: "https://github.com/nataliahe24/task-api",
    images: ["project3"],
  },
  {
    id: "project-4",
    title: "Project Management Dashboard",
    description:
      "A modern project management system with AI-powered analytics. Features complete CRUD operations, real-time statistics, Google Gemini AI integration for intelligent insights and recommendations, interactive charts, and responsive design built with React and TypeScript.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Google Gemini AI",
    ],
    githubLink: "https://github.com/nataliahe24/project-front-app",
    images: ["project4"],
  },
];

export const skills = [
  {
    category: "Data Analytics & BI",
    items: [
      { name: "Looker Studio", icon: BarChart3 },
      { name: "Power BI", icon: BarChart3 },
      { name: "Data Visualization", icon: PieChart },
      { name: "Data Cleaning & Transformation", icon: Filter },
      { name: "KPI Development & Analysis", icon: Target },
      { name: "Google Sheets & Excel", icon: Table },
      { name: "SQL", icon: Database },
      { name: "Google Apps Script", icon: Code },
    ],
  },

  {
    category: "Frontend",
    items: [
      { name: "React / Next.js", icon: Code },
      { name: "JavaScript", icon: Code },
      { name: "HTML & CSS", icon: Code },
      { name: "Tailwind CSS", icon: Paintbrush },
    ],
  },

  {
    category: "Backend",
    items: [
      { name: "Java", icon: Code },
      { name: "Node.js / Express", icon: Server },
      { name: "RESTful API", icon: Cog },
    ],
  },

  {
    category: "Databases & Tools",
    items: [
      { name: "MongoDB, PostgreSQL & MySQL", icon: Database },
      { name: "Git & GitHub", icon: Github },
    ],
  },
];

export const services = [
  {
    title: "Data Analysis",
    description:
      "I turn data into actionable insights through dashboards, KPIs, trend analysis, and data cleaning and transformation processes that support smarter business decisions.",
    icon: BarChart3,
  },
  {
    title: "Automation & AI",
    description:
      "I design solutions to automate repetitive tasks and optimize workflows by integrating automation tools, scripting, and artificial intelligence to improve efficiency and scalability.",
    icon: Cog,
  },
  {
    title: "Business & Product Analysis",
    description:
      "I analyze business needs, identify improvement opportunities, and help define digital solutions that align with user needs, operational processes, and strategic objectives.",
    icon: Target,
  },
  {
    title: "Digital Solutions Development",
    description:
      "I use my web development and technology skills to build prototypes, tools, and digital solutions that transform ideas and business needs into functional, user-centered products.",
    icon: Smartphone,
  },
];

export const socialLinks = {
  github: "https://github.com/nataliahe24",
  linkedin: "https://www.linkedin.com/in/leidy-natalia-henao-rojas-04250a215/",
  codepen: "https://codepen.io/natalia24",
};
