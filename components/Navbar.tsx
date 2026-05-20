import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
    { name: "Process", id: "process" },
    { name: "What I Do", id: "background" }
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] w-full">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`flex items-center justify-between px-6 md:px-12 transition-all duration-300 bg-white/95 backdrop-blur-md border-b ${
          scrolled ? 'py-4 shadow-sm border-gray-200' : 'py-6 border-transparent'
        }`}
      >
        <div 
          className="flex items-center gap-2.5 shrink-0 cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src="/logo.svg" alt="Mostafa Eldiwany" className="h-6 w-6 object-contain" />
          <span className="text-base font-light tracking-wide text-gray-900 hidden sm:inline-block">Mostafa</span>
        </div>
        
        <div className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              onClick={(e) => handleScrollTo(e, link.id)}
              className="text-sm font-light text-gray-500 hover:text-gray-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/201225932280?text=Hi%20Mostafa%2C%20I%20saw%20your%20portfolio%20and%20I%27m%20interested%20in%20discussing%20a%20web%20development%20project."
            target="_blank"
            rel="noreferrer"
            className="border border-gray-900 text-gray-900 px-5 py-2 text-sm font-light hover:bg-gray-900 hover:text-white transition-all"
          >
            Contact Me
          </a>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="fixed top-16 left-4 right-4 md:hidden bg-white border border-gray-200 shadow-lg p-4 z-[99]"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleScrollTo(e, link.id)}
                className="text-gray-600 hover:text-gray-900 py-3 px-4 hover:bg-gray-50 transition-colors text-sm font-light"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/201225932280?text=Hi%20Mostafa%2C%20I%20saw%20your%20portfolio%20and%20I%27m%20interested%20in%20discussing%20a%20web%20development%20project."
              target="_blank"
              rel="noreferrer"
              className="border border-gray-900 text-gray-900 px-4 py-3 text-sm font-light hover:bg-gray-900 hover:text-white transition-all text-center mt-2"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;