import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
    }
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 3,
        transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.2 }
    }
};

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 md:px-10 pt-32 lg:pt-20 pb-16 lg:pb-0 overflow-hidden">

            {/* Background Abstract Glow - Subtle ambient light */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-theme/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
                className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 translate-y-1/2"
            />

            <div className="z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Left Side: Text Content */}
                <motion.div
                    className="flex flex-col items-center lg:items-start text-center lg:text-left"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-mono uppercase tracking-widest text-white/80">Available for hire</span>
                    </motion.div>

                    <motion.h1
                        className="font-display font-bold text-6xl md:text-7xl lg:text-8xl tracking-tighter mb-6 relative z-10"
                        variants={itemVariants}
                    >
                        MOSTAFA <br />
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40 pb-4 -mb-4">
                            ELDIWANY
                        </span>
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-white/60 max-w-lg leading-relaxed font-light mb-10"
                        variants={itemVariants}
                    >
                        <b>Developer • CIS Student • Content Creator • #1 Egyptian Speedcubing Record Holder</b><br />
                        Building creative, intelligent, and interactive experiences through code.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex gap-4"
                    >
                        <a href="#work" className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-theme transition-colors duration-300">
                            View Work
                        </a>
                        <a href="https://linkedin.com/in/mostafa-eldiwany-91b9a9319/" target="_blank" rel="noreferrer" className="px-8 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-colors duration-300">
                            Contact Me
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right Side: Image with Frame */}
                <motion.div
                    className="relative flex justify-center items-center"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
                        {/* Decorative Rotating Ring Behind */}
                        <motion.div
                            className="absolute inset-0 border border-white/5 rounded-full scale-110"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Main Image Container */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-[2rem] p-2 backdrop-blur-sm border border-white/10 rotate-3 transition-transform hover:rotate-0 duration-500">
                            <div className="w-full h-full rounded-[1.5rem] overflow-hidden bg-[#0a0a0a] relative">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10" />
                                <img
                                    src="/images/profile.png"
                                    alt="Mostafa Eldiwany"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ArrowDown size={20} />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;