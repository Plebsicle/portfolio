import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Button from './Button';

const Footer = () => {
  return (
    <footer className="bg-inverse text-inverse-content rounded-t-[4rem] pt-32 pb-12 px-8 md:px-16 mt-[-4rem] relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
        <div>
          <h2 className="font-sans font-bold text-5xl md:text-7xl tracking-tighter mb-6">
            Ready to <span className="text-accent italic font-drama">scale?</span>
          </h2>
          <Link to="/contact">
            <Button variant="accent">
              Contact Me <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm font-mono">
          <div className="flex flex-col gap-4">
            <span className="text-inverse-content/50 mb-2">CONNECT</span>
            <a href="https://github.com/Plebsicle" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/praval-parikh" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
            <a href="mailto:praval.parikh@gmail.com" className="hover:text-accent transition-colors">Email</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-inverse-content/50 mb-2">NAVIGATION</span>
            <Link to="/about" className="hover:text-accent transition-colors">About</Link>
            <Link to="/projects" className="hover:text-accent transition-colors">Projects</Link>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-inverse-content/10 pt-8 gap-6">
        <div className="font-sans font-bold text-xl">Praval H. Parikh</div>
        <div className="flex items-center gap-3 bg-primary/5 rounded-full px-4 py-2 border border-inverse-content/10">
          <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
          <span className="font-mono text-xs text-inverse-content/80">SYSTEM OPERATIONAL</span>
        </div>
        <div className="font-mono text-xs text-inverse-content/50">
          © {new Date().getFullYear()} — All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
