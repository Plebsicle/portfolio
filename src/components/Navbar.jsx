import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      ref={navRef}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out flex items-center justify-between px-6 py-3 rounded-full ${
        scrolled || location.pathname !== '/' ? 'w-[90%] max-w-5xl bg-background/80 backdrop-blur-xl border border-dark/10 shadow-lg text-dark' : 'w-full max-w-7xl text-inverse-content bg-transparent'
      }`}
    >
      <Link to="/" className="font-sans font-bold text-xl tracking-tighter hover:text-accent transition-colors">
        Praval H. Parikh
      </Link>
      <div className="hidden md:flex items-center gap-8 font-mono text-sm">
        <Link to="/about" className="hover:-translate-y-[1px] transition-transform">About</Link>
        <Link to="/experience" className="hover:-translate-y-[1px] transition-transform">Experience</Link>
        <Link to="/projects" className="hover:-translate-y-[1px] transition-transform">Projects</Link>
        <Link to="/contact" className="hover:-translate-y-[1px] transition-transform">Contact</Link>
      </div>
      <div className="flex items-center gap-2">
        <Link to="/projects">
          <Button variant={scrolled || location.pathname !== '/' ? 'accent' : 'dark'} className="!py-2 !px-5 text-sm">
            View Projects
          </Button>
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
