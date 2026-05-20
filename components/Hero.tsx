import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, ArrowRight, Code, Server } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full pt-32 pb-24 md:pt-40 md:pb-32 flex flex-col items-center justify-center overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-50 rounded-full blur-[100px] opacity-50 -z-10"></div>
      
      <div className="max-w-6xl w-full mx-auto px-6 flex flex-col items-center relative">
        
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-flex items-center px-4 py-1.5 text-xs font-light tracking-widest uppercase border border-gray-200 text-gray-500 rounded-full bg-white/50 backdrop-blur-sm">
            Available for projects
          </span>
        </motion.div>

        {/* Center Image with surrounding floating badges */}
        <div className="relative mb-16 inline-block">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border border-gray-100 shadow-sm p-2 bg-white mx-auto">
              <img
                src="/images/me.jpg"
                alt="Mostafa Eldiwany"
                className="w-full h-full object-cover rounded-full transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* Floating Badges */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute top-12 -left-20 md:-left-28 bg-white border border-gray-100 shadow-sm px-4 py-2 rounded-2xl flex items-center gap-2 z-20"
          >
            <Code size={16} strokeWidth={1.5} className="text-gray-400" />
            <span className="text-xs font-light text-gray-600">Frontend</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute top-24 -right-20 md:-right-32 bg-white border border-gray-100 shadow-sm px-4 py-2 rounded-2xl flex items-center gap-2 z-20"
          >
            <Server size={16} strokeWidth={1.5} className="text-gray-400" />
            <span className="text-xs font-light text-gray-600">Backend</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute bottom-4 -left-16 md:-left-24 bg-white border border-gray-100 shadow-sm px-4 py-2 rounded-2xl flex items-center gap-2 z-20"
          >
            <span className="text-xs font-light text-gray-600">2+ Yrs Exp</span>
          </motion.div>
        </div>
        
        {/* Typography block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 tracking-tight">
            Mostafa Eldiwany
          </h1>
          
          <h2 className="text-lg md:text-xl text-gray-400 mb-6 font-light uppercase tracking-[0.2em]">
            Fullstack Developer
          </h2>
          
          <p className="text-gray-500 font-light leading-relaxed mb-10 text-base md:text-lg max-w-lg mx-auto">
            I build complete web apps from scratch. Frontend, backend, database, and hosting. Basically, I handle everything so you don't have to stress about it.
          </p>
          
          {/* Info and Actions */}
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 font-light">
              <div className="flex items-center gap-2">
                <MapPin size={16} strokeWidth={1.5} />
                <span>Cairo, Egypt</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} strokeWidth={1.5} />
                <a href="mailto:mostafafafa6@gmail.com" className="hover:text-gray-900 transition-colors">
                  mostafafafa6@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
              <a
                href="https://wa.me/201225932280?text=Hi%20Mostafa%2C%20I%20saw%20your%20portfolio%20and%20I%27m%20interested%20in%20discussing%20a%20web%20development%20project."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-3.5 text-sm font-light hover:bg-gray-800 transition-all group w-full sm:w-auto rounded-full"
              >
                Contact Me
                <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://github.com/Mostafaeldiwany123"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-600 px-8 py-3.5 text-sm font-light hover:border-gray-900 hover:text-gray-900 transition-all w-full sm:w-auto rounded-full"
              >
                View GitHub
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;