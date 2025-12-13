import { Project, StatItem } from './types';
import { Youtube, Zap, Box, Code } from 'lucide-react';

export const THEME_COLOR = "#00bcd4";

export const PROJECTS: Project[] = [
  {
    title: "Slicy",
    desc: "My flagship AI website builder, capable of generating full working web apps",
    tech: ["HTML", "CSS", "JS", "Supabase"],
    link: "https://slicy.dev",
    color: "from-purple-500 to-indigo-500",
    image: "/images/slicy.png"
  },
  {
    title: "Cubezila",
    desc: "Cubing platform + YouTube brand with 68K+ subscribers",
    tech: ["React", "Supabase", "Community"],
    link: "https://cubezila.com",
    color: "from-green-400 to-emerald-600",
    image: "/images/cubezila.png"
  },
  {
    title: "Codio",
    desc: "A real-time collaborative platform for students to build projects with live commits & friend requests",
    tech: ["React", "Supabase", "WebSockets"],
    link: "https://codio-dev.netlify.app/",
    color: "from-blue-500 to-cyan-500",
    image: "/images/codio.png"
  },
  {
    title: "EditMe",
    desc: "AI tool that allows you to edit images instantly using smart visual transformations",
    tech: ["React", "Supabase", "AI"],
    link: "https://editme-dev.netlify.app/",
    color: "from-pink-500 to-rose-500",
    image: "/images/editme.png"
  },
  {
    title: "PromptCraftrs",
    desc: "A community to share, save, and explore AI prompts",
    tech: ["Next.js", "Supabase", "AI"],
    link: "https://promptcraftrs.com",
    color: "from-orange-400 to-red-500",
    image: "/images/promptcraftrs.png"
  },
  {
    title: "Domenerate",
    desc: "AI-powered domain generator that shows only available domain names for your brand/company",
    tech: ["React", "Supabase", "AI"],
    link: "https://domenerate.netlify.app/",
    color: "from-teal-400 to-teal-600",
    image: "/images/domenerate.png"
  }
];

export const STATS: StatItem[] = [
  {
    icon: Youtube,
    label: "Subscribers",
    value: "68K+",
    sub: "@DailyTifa",
    color: "red"
  },
  {
    icon: Zap,
    label: "Typing Speed",
    value: "125",
    sub: "WPM",
    color: "yellow"
  },
  {
    icon: Box,
    label: "National Rank",
    value: "#1",
    sub: "Egyptian Speedcubing OH",
    color: "cyan"
  },
  {
    icon: Code,
    label: "Projects",
    value: "20+",
    sub: "Fullstack & AI",
    color: "purple"
  }
];

export const STACK = [
  "html", "css", "tailwind", "js", "ts", "react", "firebase", "github", "vite"
];

export const getTechName = (id: string) => {
  const map: Record<string, string> = {
    html: "HTML5", css: "CSS3", tailwind: "Tailwind", js: "JavaScript",
    ts: "TypeScript", react: "React", firebase: "Firebase",
    nodejs: "Node.js", vite: "Vite", github: "GitHub"
  };
  return map[id] || id.toUpperCase();
}
