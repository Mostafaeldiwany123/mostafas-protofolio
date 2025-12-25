import React from 'react';
import { motion } from 'framer-motion';

const Hobbies = () => {
    return (
        <section id="hobbies" className="px-4 md:px-10 py-20 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">Life Outside Code</h2>
                <p className="text-white/50 max-w-xl mx-auto">
                    When I'm not building for the web, I'm solving puzzles and creating content.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Card 1: YouTube */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="col-span-1 glass-panel rounded-3xl p-8 relative overflow-hidden group min-h-[250px] flex flex-col justify-between"
                >
                    <div className="absolute right-0 top-0 w-64 h-64 bg-red-600/10 blur-[80px] rounded-full group-hover:bg-red-600/20 transition-all duration-500" />

                    <div className="relative z-10 font-light">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center text-white">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                            </div>
                            <span className="font-mono text-sm text-white/60">Content Creation</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Sharing My Journey</h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                            I run a YouTube channel called <b>@DailyTifa</b> where I share my passion for cubing and tech with over <b>68,000 people</b>. It taught me how to communicate ideas clearly and build a community.
                        </p>
                    </div>
                </motion.div>

                {/* Card 2: Typing Speed */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    className="col-span-1 glass-panel rounded-3xl p-8 relative overflow-hidden group min-h-[250px] flex flex-col justify-between"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-sm font-mono text-yellow-500">EFFICIENCY</span>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2">Fast Typer</h3>
                        <p className="text-white/60 text-sm leading-relaxed mb-4">
                            I type at <b>125 words per minute</b>. This isn't just a party trick; it means I can get code out of my head and onto the screen significantly faster than average, saving valuable time on every project.
                        </p>

                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-yellow-500 w-[85%] rounded-full shadow-[0_0_10px_#eab308]"></div>
                        </div>
                    </div>
                </motion.div>

                {/* Card 3: Cubing */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="col-span-1 glass-panel rounded-3xl p-8 relative overflow-hidden group min-h-[250px] flex flex-col justify-between"
                >
                    <div className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10 rotate-12">
                        <div className="w-full h-full border-4 border-theme rounded-xl" />
                    </div>

                    <div className="relative z-10">
                        <span className="text-sm font-mono text-theme mb-4 block">COMPETITIVE CUBING</span>
                        <h3 className="text-2xl font-bold text-white mb-2">#1 In Egypt</h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                            I hold the <b>National Record</b> for solving a Rubik's cube with one hand. Speedcubing pushes me to constantly optimize algorithms and find efficient solutions—a mindset I bring to programming.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hobbies;
