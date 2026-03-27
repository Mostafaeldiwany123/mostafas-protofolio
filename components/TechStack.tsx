import React from 'react';
import { motion } from 'framer-motion';
import { STACK, getTechName, THEME_COLOR } from '../constants';

const TechStack = () => {
    return (
        <section id="stack" className="py-32 relative">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Technologies</h2>
                    <p className="text-white/50 max-w-xl mx-auto">
                        Coding languages I learned over the past 2 years.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    {STACK.map((tech, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
                            className="group flex items-center gap-4 px-6 py-4 glass-panel rounded-2xl cursor-default transition-colors hover:border-theme/30"
                        >
                            <div className="w-8 h-8 relative transition-all duration-300 transform group-hover:scale-110">
                                <img
                                    src={`https://skillicons.dev/icons?i=${tech}`}
                                    alt={tech}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="font-mono text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                                {getTechName(tech)}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;