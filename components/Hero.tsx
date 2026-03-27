import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-12 md:gap-16"
        >
          <div className="flex-1 text-center md:text-left">
            <div className="mb-5">
              <span className="inline-flex items-center px-3 py-1.5 text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200">
                Available for projects
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight leading-tight">
              Mostafa Eldiwany
            </h1>
            
            <p className="text-base md:text-lg text-gray-500 mb-2 font-medium">
              Fullstack Developer
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-8 max-w-lg text-[15px] mx-auto md:mx-0">
              I build complete web applications from scratch. Domain, hosting, backend, database. I handle everything so you don't have to.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 mb-8 text-sm text-gray-500 justify-center md:justify-start">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <MapPin size={16} className="text-gray-400" />
                <span>Cairo, Egypt</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Mail size={16} className="text-gray-400" />
                <a href="mailto:mostafafafa6@gmail.com" className="hover:text-gray-900 transition-colors">
                  mostafafafa6@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
              <a
                href="https://wa.me/201225932280?text=Hi%20Mostafa%2C%20I%20saw%20your%20portfolio%20and%20I%27m%20interested%20in%20discussing%20a%20web%20development%20project."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 text-sm font-semibold hover:bg-gray-800 transition-all group w-full sm:w-auto"
              >
                Contact Me
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="https://github.com/Mostafaeldiwany123"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-700 px-5 py-3 text-sm font-medium hover:bg-gray-50 transition-all w-full sm:w-auto"
              >
                View GitHub
              </a>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 overflow-hidden border border-gray-200 rounded-2xl">
                <img
                  src="/images/me.jpg"
                  alt="Mostafa Eldiwany"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-white border border-gray-200 px-4 py-2 shadow-sm">
                <span className="text-sm font-semibold text-gray-900">2+ Years Experience</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;