import React from 'react';
import { Github, Linkedin, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <img src="/logo.svg" alt="Mostafa Eldiwany" className="h-6 w-6" />
            <span className="font-light text-gray-900 text-sm tracking-wide">Mostafa Eldiwany</span>
          </div>
          
          <div className="flex items-center gap-2">
            <a 
              href="mailto:mostafafafa6@gmail.com" 
              className="flex items-center justify-center w-9 h-9 text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all"
            >
              <Mail size={16} />
            </a>
            <a 
              href="https://linkedin.com/in/mostafa-eldiwany-91b9a9319/" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center justify-center w-9 h-9 text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all"
            >
              <Linkedin size={16} />
            </a>
            <a 
              href="https://github.com/Mostafaeldiwany123" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center justify-center w-9 h-9 text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all"
            >
              <Github size={16} />
            </a>
            <a 
              href="https://youtube.com/@DailyTifa" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center justify-center w-9 h-9 text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all"
            >
              <Youtube size={16} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} Mostafa Eldiwany. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;