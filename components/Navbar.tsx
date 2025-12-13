import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Youtube, Menu, X, Linkedin, Instagram } from 'lucide-react';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between"
                >

                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-theme flex items-center justify-center text-black font-bold text-sm shadow-md shadow-theme/20 transition-transform duration-300 group-hover:scale-105">
                            M
                        </div>
                        <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-theme transition-colors">
                            Mostafa<span className="text-white/40">.dev</span>
                        </span>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-center gap-6 text-sm font-medium text-white/70">
                            <a href="#work" className="hover:text-theme transition-colors">Work</a>
                            <a href="#stack" className="hover:text-theme transition-colors">Stack</a>
                            <a href="#about" className="hover:text-theme transition-colors">About</a>
                        </div>
                        <div className="w-[1px] h-6 bg-white/10"></div>
                        <div className="flex items-center gap-4">
                            <a href="https://github.com/Mostafaeldiwany123" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition-colors"><Github size={20} /></a>
                            <a href="https://linkedin.com/in/mostafa-eldiwany-91b9a9319/" target="_blank" rel="noreferrer" className="text-white/70 hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
                            <a href="https://instagram.com/daily_tifa1234/" target="_blank" rel="noreferrer" className="text-white/70 hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
                            <a href="https://youtube.com/@DailyTifa" target="_blank" rel="noreferrer" className="text-white/70 hover:text-red-500 transition-colors"><Youtube size={20} /></a>
                            <a href="https://linkedin.com/in/mostafa-eldiwany-91b9a9319/" target="_blank" rel="noreferrer" className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-theme hover:text-black transition-colors transform hover:scale-105 duration-200">
                                Let's Talk
                            </a>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-white/70 hover:text-white"
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </motion.div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden bg-black/95 border-t border-white/5 overflow-hidden"
                        >
                            <div className="px-6 py-8 flex flex-col gap-6 items-center">
                                <a href="#work" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display font-medium text-white hover:text-theme">Work</a>
                                <a href="#stack" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display font-medium text-white hover:text-theme">Stack</a>
                                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display font-medium text-white hover:text-theme">About</a>

                                <div className="w-20 h-[1px] bg-white/10 my-4"></div>

                                <div className="flex gap-6">
                                    <a href="https://github.com/Mostafaeldiwany123" target="_blank" rel="noreferrer" className="text-white/70 hover:text-theme"><Github size={24} /></a>
                                    <a href="https://linkedin.com/in/mostafa-eldiwany-91b9a9319/" target="_blank" rel="noreferrer" className="text-white/70 hover:text-blue-400"><Linkedin size={24} /></a>
                                    <a href="https://instagram.com/daily_tifa1234/" target="_blank" rel="noreferrer" className="text-white/70 hover:text-pink-500"><Instagram size={24} /></a>
                                    <a href="https://youtube.com/@DailyTifa" target="_blank" rel="noreferrer" className="text-white/70 hover:text-red-500"><Youtube size={24} /></a>
                                </div>
                                <a href="https://linkedin.com/in/mostafa-eldiwany-91b9a9319/" target="_blank" rel="noreferrer" className="w-full text-center bg-white text-black py-4 rounded-xl font-bold mt-4">
                                    Contact Me
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
};

export default Navbar;