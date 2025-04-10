
import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-16 md:pb-0">
      <div className="container-custom px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-3">
                <span className="text-primary">Rohit</span>
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
                Mathematics Honours Student
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-medium">
                Math meets tech – turning data into insight
              </p>
            </div>

            <div className="flex space-x-4">
              <a 
                href="#contact" 
                className="btn btn-primary flex items-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Get in touch <ArrowRight size={18} />
              </a>
              <a 
                href="#projects" 
                className="btn btn-outline"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                View Projects
              </a>
            </div>
            
            <div className="flex items-center space-x-4 pt-2">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-custom"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-custom"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:rohit@example.com" 
                className="text-foreground hover:text-primary transition-custom"
                aria-label="Email Contact"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/10 flex items-center justify-center">
                <div className="text-6xl md:text-8xl font-mono">&#x222B;</div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-secondary rounded-full w-32 h-32 flex items-center justify-center">
                <div className="font-mono text-4xl">&#x03C0;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
