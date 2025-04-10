
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-foreground text-background">
      <div className="container-custom text-center">
        <div className="mb-6 flex justify-center space-x-6">
          <a 
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-background/80 hover:text-background transition-custom"
          >
            Home
          </a>
          <a 
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-background/80 hover:text-background transition-custom"
          >
            About
          </a>
          <a 
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-background/80 hover:text-background transition-custom"
          >
            Projects
          </a>
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-background/80 hover:text-background transition-custom"
          >
            Contact
          </a>
        </div>
        
        <div className="flex items-center justify-center text-sm">
          <p>
            © {currentYear} Rohit. All rights reserved. Made with 
            <Heart size={14} className="inline mx-1 text-red-400" fill="currentColor" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
