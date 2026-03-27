import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { value: "10+", label: "Projects Delivered" },
    { value: "2+", label: "Years Experience" },
  ];

  return (
    <section id="about" className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About</h2>
          
          <div className="flex gap-4 mb-10">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-50 border border-gray-100 px-6 py-4">
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="max-w-2xl">
            <p className="text-gray-600 leading-relaxed mb-4">
              I'm a fullstack developer based in Cairo, Egypt. I build complete web applications — from landing pages to full platforms.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I've delivered over 10 projects for clients. I focus on writing clean code, meeting deadlines, and making sure everything works smoothly.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;