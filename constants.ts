import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    title: "Fatma Eldiwany Portfolio",
    desc: "A personal portfolio website designed and developed for a client. Clean layout with image gallery and contact form.",
    tech: ["React", "Tailwind CSS", "Vite"],
    link: "https://fatma-eldiwany.netlify.app/",
    color: "from-slate-500 to-slate-700",
    image: "/images/fatme-portfolio.png"
  },
  {
    title: "Syntaxable",
    desc: "A collaborative code editor with real-time sync, allowing multiple developers to code together in the same document.",
    tech: ["React", "WebSockets", "Node.js", "TypeScript"],
    link: "https://syntaxable.org/",
    color: "from-blue-500 to-cyan-500",
    image: "/images/syntaxable.png"
  },
  {
    title: "Slicy",
    desc: "A modern platform for managing and sharing digital assets with a focus on speed and user experience.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "#",
    color: "from-blue-600 to-indigo-700",
    image: "/images/slicy.png"
  },
  {
    title: "Domenerate",
    desc: "A domain name generator and search tool that helps entrepreneurs find the perfect brand name for their projects.",
    tech: ["React", "API Integration", "Algorithms"],
    link: "#",
    color: "from-purple-500 to-pink-600",
    image: "/images/domenerate.png"
  },
  {
    title: "Conslide",
    desc: "A PowerPoint add-in that helps users work faster with keyboard shortcuts and AI-powered features for creating presentations.",
    tech: ["React", "TypeScript", "Office.js", "AI"],
    link: "https://conslide.netlify.app/",
    color: "from-orange-500 to-red-500",
    image: "/images/conslide.png"
  },
  {
    title: "PromptCrafters",
    desc: "A platform for sharing and discovering AI prompts. Users can browse, share, and rate prompts for various AI models.",
    tech: ["React", "TypeScript", "Supabase"],
    link: "https://promptcraftrs.com/",
    color: "from-violet-500 to-purple-600",
    image: "/images/promptcraftrs.png"
  },
  {
    title: "EditMe",
    desc: "An AI-powered image editing platform that makes it easy to enhance and modify images using advanced AI models.",
    tech: ["React", "TypeScript", "AI", "Canvas"],
    link: "https://editme-dev.netlify.app/",
    color: "from-pink-500 to-rose-500",
    image: "/images/editme.png"
  },
  {
    title: "Cubezila",
    desc: "A tool for speedcubers to track solve times, learn algorithms, and improve their Rubik's cube solving skills.",
    tech: ["React", "TypeScript", "LocalStorage"],
    link: "https://cubezila.netlify.app/",
    color: "from-green-500 to-emerald-600",
    image: "/images/cubezila.png"
  }
];

export const SKILLS = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  backend: ["Node.js", "Supabase", "PostgreSQL", "REST APIs"],
  tools: ["Git", "GitHub", "VS Code", "Vite"],
  other: ["AI Integration", "UI/UX Design", "Problem Solving"]
};

export const EXPERIENCE = [
  {
    role: "Fullstack Developer",
    type: "Freelance",
    period: "2023 - Present",
    desc: "Building web applications for clients. Focus on React, Next.js, and Supabase. Delivered 10+ projects."
  },
  {
    role: "Content Creator",
    company: "YouTube (@DailyTifa)",
    period: "2020 - Present",
    desc: "Tech and cubing content with 68,000+ subscribers."
  }
];

export const EDUCATION = {
  degree: "Bachelor's in Computer Science",
  school: "Egypt University of Informatics",
  period: "2021 - 2025"
};