import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="px-4 md:px-10 py-32 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

                <div className="order-2 md:order-1 relative">
                    <div className="glass-panel p-8 rounded-2xl relative z-10 transform md:rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                        <div className="flex gap-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <p className="font-mono text-sm text-white/70 leading-relaxed">
                            <span className="text-purple-400">const</span> <span className="text-blue-400">aboutMe</span> = <span className="text-yellow-400">{"{"}</span><br />
                            &nbsp;&nbsp;role: <span className="text-green-400">"Full Stack Dev"</span>,<br />
                            &nbsp;&nbsp;stack: [<span className="text-green-400">"React"</span>, <span className="text-green-400">"Next.js"</span>, <span className="text-green-400">"Supabase"</span>, <span className="text-green-400">"AI"</span>],<br />
                            &nbsp;&nbsp;focus: <span className="text-green-400">"Performance"</span>,<br />
                            &nbsp;&nbsp;delivery: <span className="text-green-400">"Fast"</span><br />
                            <span className="text-yellow-400">{"}"}</span>;
                        </p>
                    </div>
                    {/* Decorative blob behind */}
                    <div className="absolute top-10 -left-10 w-full h-full bg-theme/10 blur-[60px] rounded-full z-0" />
                </div>

                <div className="order-1 md:order-2">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight"
                    >
                        Turning ideas <br />
                        <span className="text-white/30">into</span> reality.
                    </motion.h2>
                    <p className="text-lg text-white/60 mb-8 leading-relaxed">
                        I specialize in building high-converting landing pages and complex web applications. My focus is on speed, aesthetic design, and user experience. I handle the technical details so you can focus on your business.
                    </p>

                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-2xl font-bold text-white mb-1">10+</h4>
                            <p className="text-sm text-white/40">Projects Completed</p>
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold text-white mb-1">High</h4>
                            <p className="text-sm text-white/40">Quality</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
