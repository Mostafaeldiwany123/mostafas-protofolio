import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Clock, Globe, Code2, Download, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-start justify-center px-4 md:px-10 pt-32 md:pt-48 pb-20 overflow-hidden">

            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,188,212,0.05),transparent_70%)]" />

            <div className="z-10 w-full max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left Column: Intro & Pitch (7 cols) */}
                    <motion.div
                        className="lg:col-span-7 flex flex-col gap-8 items-center text-center lg:items-start lg:text-left"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme/10 border border-theme/20 text-theme text-xs font-mono mb-6">
                                AVAILABLE FOR WORK
                            </div>

                            <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight leading-[1.1] mb-6">
                                Hi, I'm <span className="text-theme">Mostafa.</span>
                            </h1>

                            <p className="text-2xl text-white/80 font-light leading-relaxed">
                                I am a <b>Software Developer</b> building modern web experiences.
                            </p>
                        </div>

                        <div className="prose prose-invert max-w-xl">
                            <p className="text-lg text-white/60 leading-relaxed">
                                I build websites that solve problems. I don't just write code, i create solutions that are fast, reliable, and look great on any device.
                            </p>
                            <p className="text-lg text-white/60 leading-relaxed mt-4">
                                My promise is simple: <b>High-quality work delivered on time, every time.</b> Whether you need a personal portfolio or a complex web application, I have the skills and the drive to make it happen.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-2 justify-center lg:justify-start">
                            <a href="#work" className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-theme transition-colors duration-300 flex items-center gap-2">
                                Check My Work
                            </a>
                            <a href="mailto:mostafafafa6@gmail.com" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 transition-colors duration-300 flex items-center gap-2">
                                <Mail size={20} />
                                Contact Me
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: The "CV Card" (5 cols) */}
                    <motion.div
                        className="lg:col-span-5"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 relative overflow-hidden">

                            {/* Card Header */}
                            <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20">
                                    <img src="/images/profile.png" alt="Mostafa" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Mostafa Eldiwany</h3>
                                    <p className="text-white/50 text-sm">Full Stack Developer</p>
                                </div>
                            </div>

                            {/* Info Grid */}
                            <div className="grid gap-6">

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/70">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-xs uppercase tracking-wider font-mono">LOCATION</p>
                                        <p className="text-white font-medium">Cairo, Egypt</p>
                                        <p className="text-white/50 text-sm">Remote & On-site</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/70">
                                        <GraduationCap size={20} />
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-xs uppercase tracking-wider font-mono">BACKGROUND</p>
                                        <p className="text-white font-medium">Computer Science</p>
                                        <p className="text-white/50 text-sm">Egypt University of Informatics</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/70">
                                        <Code2 size={20} />
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-xs uppercase tracking-wider font-mono">CORE STACK</p>
                                        <div className="flex flex-wrap gap-2 mt-1">
                                            <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/90">React</span>
                                            <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/90">Next.js</span>
                                            <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/90">TypeScript</span>
                                            <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/90">Supabase</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/70">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-xs uppercase tracking-wider font-mono">TURNAROUND</p>
                                        <p className="text-theme font-bold">48 Hours or Less</p>
                                        <p className="text-white/50 text-sm">For any project</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/70">
                                        <Globe size={20} />
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-xs uppercase tracking-wider font-mono">LANGUAGES</p>
                                        <p className="text-white font-medium">English (Fluent)</p>
                                        <p className="text-white/50 text-sm">Arabic (Native)</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;