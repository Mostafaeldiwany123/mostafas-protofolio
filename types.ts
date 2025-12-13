import { LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  desc: string;
  tech: string[];
  link: string;
  color: string;
  image: string;
}

export interface StatItem {
  icon: LucideIcon;
  label: string;
  value: string;
  sub: string;
  color: string; // Tailwind color class for glow/border
}
