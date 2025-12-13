import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="px-4 md:px-10 py-20 pt-40 border-t border-white/5 bg-[#030303] relative overflow-hidden">
            {/* Background Text */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03]">
                <h1 className="text-[20vw] font-display font-bold leading-none text-center whitespace-nowrap text-white">MOSTAFA</h1>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
                <h2 className="text-5xl md:text-8xl font-display font-bold mb-8 text-white tracking-tighter">
                    Have an idea?
                </h2>
                <a
                    href="https://linkedin.com/in/mostafa-eldiwany-91b9a9319/"
                    target="_blank"
                    rel="noreferrer"
                    className="group relative inline-flex items-center gap-4 bg-white text-black px-8 py-4 md:px-12 md:py-6 rounded-full text-lg md:text-xl font-bold tracking-tight hover:scale-105 transition-transform duration-300"
                >
                    Let's Talk
                    <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" />
                </a>

                <div className="mt-24 flex flex-col md:flex-row justify-between items-center w-full text-sm text-white/40 font-mono gap-4">
                    <p>© {new Date().getFullYear()} Mostafa Eldiwany.</p>
                    <div className="flex gap-6">
                        <a href="https://linkedin.com/in/mostafa-eldiwany-91b9a9319/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
                        <a href="https://instagram.com/daily_tifa1234/" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition-colors">Instagram</a>
                        <a href="https://youtube.com/@DailyTifa" target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors">YouTube</a>
                        <a href="https://github.com/Mostafaeldiwany123" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Github</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
