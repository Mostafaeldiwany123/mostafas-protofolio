import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Gallery from './components/Gallery';
import About from './components/About';
import Footer from './components/Footer';
import { BackgroundEffects, CustomCursor } from './components/ui/Effects';

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`min-h-screen bg-[#030303] text-white selection:bg-theme selection:text-black font-sans ${mounted ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
      
      <BackgroundEffects />
      <CustomCursor />
      <Navbar />

      <main className="flex flex-col w-full relative z-10">
        <Hero />
        <Stats />
        <Projects />
        <Gallery />
        <TechStack />
        <About />
      </main>

      <Footer />
    </div>
  );
}
