import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollBounds = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      checkScrollBounds();
      slider.addEventListener('scroll', checkScrollBounds);
      window.addEventListener('resize', checkScrollBounds);
    }
    return () => {
      if (slider) {
        slider.removeEventListener('scroll', checkScrollBounds);
      }
      window.removeEventListener('resize', checkScrollBounds);
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-3">Projects</h2>
              <p className="text-gray-500 text-sm font-light">Some of the projects I've built.</p>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleScroll('left')}
                disabled={!canScrollLeft}
                className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-white hover:border-gray-900 transition-all disabled:opacity-20 disabled:pointer-events-none"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => handleScroll('right')}
                disabled={!canScrollRight}
                className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-white hover:border-gray-900 transition-all disabled:opacity-20 disabled:pointer-events-none"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
          
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 snap-start"
              >
                <div className="group bg-white border border-gray-100 overflow-hidden hover:border-gray-200 transition-all duration-300 hover:shadow-sm">
                  <div className="aspect-[16/10] bg-gray-50 relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="absolute top-3 right-3 bg-white/95 p-1.5 border border-gray-100 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors rounded-full"
                      >
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-base font-light text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-500 text-xs font-light mb-4 leading-relaxed">{project.desc}</p>
                    
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech} 
                          className="text-[10px] font-light text-gray-400 bg-gray-50 px-2 py-0.5 border border-gray-100 rounded-full"
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
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;