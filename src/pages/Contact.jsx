import React, { useEffect } from 'react';
import { Mail, Phone, Github, Linkedin, ExternalLink } from 'lucide-react';
import Button from '../components/Button';

const ContactItem = ({ icon: Icon, label, value, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer"
    className="flex items-center justify-between p-6 border-b border-dark/10 hover:bg-dark/5 transition-colors group"
  >
    <div className="flex items-center gap-6">
      <div className="w-12 h-12 bg-dark rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="font-mono text-sm text-dark/50 tracking-widest mb-1">{label}</p>
        <p className="font-sans font-bold text-xl md:text-2xl text-dark">{value}</p>
      </div>
    </div>
    <ExternalLink className="w-6 h-6 text-dark/20 group-hover:text-accent transition-colors" />
  </a>
);

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-8 md:px-16 min-h-[80vh] flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="mb-16">
          <h1 className="font-sans font-bold text-6xl md:text-8xl tracking-tighter text-dark mb-6">
            Initiate <span className="font-drama italic text-accent">Handshake.</span>
          </h1>
          <p className="font-mono text-xl text-dark/60 leading-relaxed max-w-xl">
            Currently open to opportunities in backend engineering, distributed systems, and real-time infrastructure.
          </p>
        </div>

        <div className="bg-background rounded-[2rem] border border-dark/10 shadow-lg overflow-hidden mb-12">
          <ContactItem 
            icon={Mail} 
            label="EMAIL PROTOCOL" 
            value="praval.parikh@gmail.com" 
            href="mailto:praval.parikh@gmail.com" 
          />
          <ContactItem 
            icon={Linkedin} 
            label="PROFESSIONAL NETWORK" 
            value="linkedin.com/in/praval-parikh" 
            href="https://linkedin.com/in/praval-parikh" 
          />
          <ContactItem 
            icon={Github} 
            label="CODE REPOSITORY" 
            value="github.com/Plebsicle" 
            href="https://github.com/Plebsicle" 
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
