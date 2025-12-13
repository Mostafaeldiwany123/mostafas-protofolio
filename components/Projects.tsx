import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative flex flex-col h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-theme/30 transition-colors duration-500"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />

        {/* Floating Action Button */}
        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-theme transition-colors shadow-lg"
          >
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6">
        <div className="mb-4">
          <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-theme transition-colors">
            {project.title}
          </h3>
          <p className="text-white/60 text-sm leading-relaxed line-clamp-3">
            {project.desc}
          </p>
        </div>

        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 3).map((t: string, i: number) => (
              <span key={i} className="text-[10px] font-mono uppercase tracking-wider text-white/40 px-2 py-1 bg-white/5 rounded-md">
                {t}
              </span>
            ))}
          </div>
          {/* Optional: Add GitHub link if available in data, or just a small icon */}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="work" className="px-4 md:px-10 py-32 max-w-7xl mx-auto">
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-[1px] bg-theme"></span>
            <span className="text-theme font-mono text-sm uppercase tracking-widest">Portfolio</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-white"
          >
            Selected Works
          </motion.h2>
        </div>
        <p className="text-white/50 max-w-sm text-sm md:text-base">
          A collection of projects where design meets functionality. Focused on AI, seamless interactions, and performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={idx} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
