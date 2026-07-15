import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Background from './components/Background';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`min-h-screen bg-white text-gray-900 font-sans font-light ${mounted ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      <Navbar />
      
      <main>
        <Hero />
        <Process />
        <Testimonials />
        <Background />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}