import React from 'react';
import { motion } from 'framer-motion';
import { THEME_COLOR } from '../constants';

const Stats = () => {
    return (
        <section id="stats" className="px-4 md:px-10 py-20 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Card 1: Fast Delivery */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="col-span-1 glass-panel rounded-3xl p-8 relative overflow-hidden group min-h-[300px] flex flex-col justify-between"
                >
                    <div className="absolute right-0 top-0 w-64 h-64 bg-green-600/10 blur-[80px] rounded-full group-hover:bg-green-600/20 transition-all duration-500" />

                    <div className="relative z-10">
                        <div className="mb-6">
                            <span className="font-mono text-sm text-green-400">TURNAROUND</span>
                        </div>

                        <h3 className="text-4xl font-display font-bold text-white mb-4">48 Hours</h3>
                        <p className="text-white/60 leading-relaxed text-sm">
                            Time is money. I focus on core requirements to deliver a polished, working product in 48 hours or less. No bloat, just result-driven development.
                        </p>
                    </div>
                </motion.div>

                {/* Card 2: Pricing */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    className="col-span-1 glass-panel rounded-3xl p-8 relative overflow-hidden group min-h-[300px] flex flex-col justify-between"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10">
                        <div className="mb-6">
                            <span className="font-mono text-sm text-yellow-500">PRICING</span>
                        </div>

                        <h3 className="text-4xl font-display font-bold text-white mb-4">Best Value</h3>
                        <p className="text-white/60 leading-relaxed text-sm">
                            I offer premium quality at freelancer rates. You're paying for the code, not for a fancy agency office. Clean, maintainable, and affordable.
                        </p>
                    </div>
                </motion.div>

                {/* Card 3: Experience */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="col-span-1 glass-panel rounded-3xl p-8 relative overflow-hidden group min-h-[300px] flex flex-col justify-between"
                >
                    <div className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10 rotate-12 bg-white/5 rounded-full" />

                    <div className="relative z-10">
                        <div className="mb-6">
                            <span className="font-mono text-sm text-blue-400">RELIABILITY</span>
                        </div>

                        <h3 className="text-4xl font-display font-bold text-white mb-4">Quality Work</h3>
                        <p className="text-white/60 leading-relaxed text-sm">
                            I pay close attention to every detail. My goal is to give you a website that looks great and works perfectly.
                        </p>
                    </div>
                </motion.div>

                {/* Card 4: Projects - Full Width */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="col-span-1 md:col-span-2 lg:col-span-3 glass-panel rounded-3xl p-8 group overflow-hidden relative flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10 max-w-2xl">
                        <div className="mb-4">
                            <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded">PROVEN TRACK RECORD</span>
                        </div>
                        <h3 className="text-4xl font-bold mb-4 text-white">10+ Projects Delivered</h3>
                        <p className="text-white/60 text-base leading-relaxed">
                            From simple landing pages to complex SaaS dashboards like Slicy. I stick to the plan, I communicate clearly, and I don't stop until the project is perfect. My portfolio speaks for itself, check out the gallery below.
                        </p>
                    </div>

                    {/* Visual Decoration */}
                    <div className="hidden md:flex gap-4 opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500">
                        <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-md">
                            <span className="text-2xl">🚀</span>
                        </div>
                        <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-md -ml-6">
                            <span className="text-2xl">💎</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Stats;