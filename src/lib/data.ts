import { Github, Linkedin, Code, Server, Database, Cog, Paintbrush, Smartphone } from 'lucide-react';

export const projects = [
  {
    id: 'project-1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with a modern, responsive design. Includes product catalog, shopping cart, and a secure checkout process.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    githubLink: 'https://github.com',
    image: 'project1',
  },
  {
    id: 'project-2',
    title: 'Project Management Tool',
    description: 'A collaborative project management tool to help teams organize tasks, track progress, and meet deadlines. Features Kanban boards and real-time updates.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    githubLink: 'https://github.com',
    image: 'project2',
  },
  {
    id: 'project-3',
    title: 'Recipe Sharing App',
    description: 'A social application for users to share, discover, and save recipes. Implemented user authentication, recipe submission forms, and a powerful search functionality.',
    technologies: ['Vue.js', 'Supabase', 'PostgreSQL', 'Cloudinary'],
    githubLink: 'https://github.com',
    image: 'project3',
  },
];

export const skills = [
  { 
    category: 'Frontend',
    items: [
      { name: 'React / Next.js', icon: Code },
      { name: 'TypeScript', icon: Code },
      { name: 'JavaScript (ES6+)', icon: Code },
      { name: 'HTML5 & CSS3', icon: Code },
      { name: 'Tailwind CSS', icon: Paintbrush },
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js / Express', icon: Server },
      { name: 'Python / Django', icon: Server },
      { name: 'Firebase', icon: Server },
      { name: 'REST & GraphQL APIs', icon: Cog },
    ]
  },
  {
    category: 'Databases & Tools',
    items: [
      { name: 'MongoDB, PostgreSQL', icon: Database },
      { name: 'Git & GitHub', icon: Github },
      { name: 'Docker', icon: Server },
      { name: 'Jest / Testing Library', icon: Cog },
    ]
  }
];

export const services = [
  {
    title: 'Frontend Development',
    description: 'Creating beautiful, responsive, and performant user interfaces with modern frameworks like React and Next.js.',
    icon: Paintbrush,
  },
  {
    title: 'Backend Development',
    description: 'Building robust, scalable, and secure server-side applications and APIs using Node.js, Express, and Python.',
    icon: Server,
  },
  {
    title: 'Full-Stack Solutions',
    description: 'Delivering end-to-end web applications, from database design to UI implementation, for a complete digital product.',
    icon: Smartphone,
  },
];

export const socialLinks = {
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
};
