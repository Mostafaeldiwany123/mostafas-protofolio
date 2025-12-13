import React from 'react';
import { motion } from 'framer-motion';
import { THEME_COLOR } from '../constants';

const Stats = () => {
    return (
        <section id="stats" className="px-4 md:px-10 py-20 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">

                {/* Card 1: YouTube - Large Emphasis */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="col-span-1 md:col-span-2 row-span-1 glass-panel rounded-3xl p-8 relative overflow-hidden group"
                >
                    <div className="absolute right-0 top-0 w-64 h-64 bg-red-600/10 blur-[80px] rounded-full group-hover:bg-red-600/20 transition-all duration-500" />
                    <div className="relative z-10 h-full flex flex-col justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                            </div>
                            <span className="font-mono text-sm text-white/60">@DailyTifa</span>
                        </div>
                        <div>
                            <h3 className="text-6xl font-display font-bold text-white tracking-tighter">68K<span className="text-red-500">+</span></h3>
                            <p className="text-white/40 mt-1 font-medium">Subscribers</p>
                        </div>
                    </div>
                </motion.div>

                {/* Card 2: Typing Speed - Progress Ring Style */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    className="col-span-1 row-span-1 glass-panel rounded-3xl p-6 relative overflow-hidden group flex flex-col justify-between"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex justify-between items-start">
                        <span className="text-sm font-mono text-yellow-500">SPEED</span>
                        <span className="text-xs border border-white/10 px-2 py-1 rounded">WPM</span>
                    </div>
                    <div className="flex items-end gap-2">
                        <span className="text-5xl font-display font-bold">125</span>
                        <span className="text-sm text-white/40 mb-2">/ 200</span>
                    </div>
                    {/* Simple Bar visual */}
                    <div className="w-full h-2 bg-white/10 rounded-full mt-2 overflow-hidden">
                        <div className="h-full bg-yellow-500 w-[65%] rounded-full shadow-[0_0_10px_#eab308]"></div>
                    </div>
                </motion.div>

                {/* Card 3: Cubing - 3D Cube Visual */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="col-span-1 row-span-1 glass-panel rounded-3xl p-6 relative overflow-hidden group"
                >
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 opacity-20 rotate-12">
                        {/* Minimal Cube Icon using CSS Borders */}
                        <div className="w-full h-full border-4 border-theme rounded-lg" />
                    </div>
                    <div className="relative z-10 h-full flex flex-col justify-between">
                        <span className="text-sm font-mono text-theme">RANKING</span>
                        <div>
                            <h3 className="text-5xl font-display font-bold text-white">#1</h3>
                            <p className="text-white/40 text-sm">Egypt Speedcubing</p>
                        </div>
                    </div>
                </motion.div>

                {/* Card 4: Projects - Replaced Open Source */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="col-span-1 md:col-span-2 lg:col-span-4 row-span-1 glass-panel rounded-3xl p-8 flex items-center justify-between group overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10 max-w-lg">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded">FREELANCE</span>
                        </div>
                        <h3 className="text-3xl font-bold mb-2 text-white">10+ Projects Delivered</h3>
                        <p className="text-white/50 text-sm">Building high-performance, production-ready applications for clients globally.</p>
                    </div>

                    {/* Visual Decoration */}
                    <div className="hidden md:flex gap-2">
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                            <span className="text-xl">🚀</span>
                        </div>
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 -ml-4">
                            <span className="text-xl">💻</span>
                        </div>
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 -ml-4">
                            <span className="text-xl">✨</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Stats;