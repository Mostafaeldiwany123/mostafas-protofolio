import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    const newIndex = Math.max(0, Math.min(index, PROJECTS.length - 1));
    setCurrentIndex(newIndex);
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.offsetWidth;
      const index = Math.round(sliderRef.current.scrollLeft / cardWidth);
      setCurrentIndex(index);
    }
  };

  return (
    <section id="projects" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
              <p className="text-gray-500 mt-1 text-sm">Some of the projects I've built.</p>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollToIndex(currentIndex - 1)}
                className="w-8 h-8 md:w-9 md:h-9 border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                disabled={currentIndex === 0}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scrollToIndex(currentIndex + 1)}
                className="w-8 h-8 md:w-9 md:h-9 border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                disabled={currentIndex === PROJECTS.length - 1}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
          
          <div 
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 md:gap-6 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-full snap-start"
              >
                <div className="group bg-white border border-gray-200 overflow-hidden hover:border-gray-300 transition-colors">
                  <div className="aspect-[16/9] bg-gray-100 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="absolute top-3 right-3 bg-white/95 p-2 hover:bg-white transition-colors"
                      >
                        <ExternalLink size={14} className="text-gray-700" />
                      </a>
                    )}
                  </div>
                  
                  <div className="p-4 md:p-5">
                    <h3 className="text-base font-semibold text-gray-900 mb-1">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.desc}</p>
                    
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech} 
                          className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 border border-gray-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center gap-2 mt-6">
            {PROJECTS.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-2 h-2 transition-all ${
                  index === currentIndex 
                    ? 'bg-gray-900 w-5' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;