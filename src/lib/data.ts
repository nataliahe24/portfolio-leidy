import {
  Github,
  Linkedin,
  Code,
  Server,
  Database,
  Cog,
  Paintbrush,
  Smartphone,
} from "lucide-react";

export const projects = [
  {
    id: "project-1",
    title: "Real Estate App",
    description:
      "A web application for the real estate sector, streamlining property sales and rentals. Sellers can list properties with details such as price, rooms, bathrooms, and categories, while buyers can browse listings, schedule visits, and contact owners.",
    technologies: ["Angular", "TypeScript", "SCSS", "HTML"],
    githubLink: "https://github.com/nataliahe24/Real-estate-app",
    image: "project1",
  },
  {
    id: "project-2",
    title: "My Fritter App",
    description:
      "A Java-based application built with Gradle. Features order management, image upload capabilities, and comprehensive error handling API.",
    technologies: ["Java", "Gradle", "REST API"],
    githubLink: "https://github.com/nataliahe24/MyFritterApp",
    image: "project2",
  },
  {
    id: "project-3",
    title: "Task API",
    description:
      "A TypeScript-based REST API for task management. Provides endpoints for creating, updating, and managing tasks with full CRUD operations.",
    technologies: ["TypeScript", "JavaScript", "Node.js", "REST API"],
    githubLink: "https://github.com/nataliahe24/task-api",
    image: "project3",
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
    image: "project4",
  },
];

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React / Next.js", icon: Code },
      { name: "TypeScript", icon: Code },
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
      { name: "Jest / Testing Library", icon: Cog },
    ],
  },
];

export const services = [
  {
    title: "Frontend Development",
    description:
      "Creating beautiful, responsive, and performant user interfaces with modern frameworks like React and Next.js.",
    icon: Paintbrush,
  },
  {
    title: "Backend Development",
    description:
      "Building robust, scalable, and secure server-side applications and APIs using Node.js, Express, and Python.",
    icon: Server,
  },
  {
    title: "Full-Stack Solutions",
    description:
      "Delivering end-to-end web applications, from database design to UI implementation, for a complete digital product.",
    icon: Smartphone,
  },
];

export const socialLinks = {
  github: "https://github.com/nataliahe24",
  linkedin: "https://www.linkedin.com/in/leidy-natalia-henao-rojas-04250a215/",
};
