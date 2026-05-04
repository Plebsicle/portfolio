import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const ExperienceCard = ({ role, company, type, timeline, descriptions, focus }) => {
  return (
    <div className="bg-background rounded-[2rem] p-8 md:p-12 border border-dark/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden group mb-12">
      <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
        <div>
          <h2 className="font-sans font-bold text-3xl md:text-4xl mb-2">{role} — {company}</h2>
          <p className="font-mono text-accent font-bold text-lg">{type}</p>
        </div>
        <span className="font-mono text-sm bg-dark/5 px-4 py-2 rounded-full border border-dark/10 whitespace-nowrap">{timeline}</span>
      </div>
      <div className="space-y-4 mb-10">
        {descriptions.map((desc, i) => (
          <p key={i} className="font-mono text-dark/70 text-lg leading-relaxed max-w-4xl">
            {desc}
          </p>
        ))}
      </div>
      {focus && (
        <div className="border-t border-dark/10 pt-8">
          <h4 className="font-sans font-bold text-xl mb-6 text-dark/80">CURRENT FOCUS</h4>
          <div className="flex flex-wrap gap-4 font-mono text-sm">
            {focus.map((item, i) => (
              <span key={i} className="bg-dark text-primary px-4 py-2 rounded-md hover:bg-accent transition-colors cursor-default">
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Experience = () => {
  const container = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    gsap.from('.exp-reveal', {
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: 'power3.out',
    });
  }, { scope: container });

  const experiences = [
    {
      role: 'Incoming Summer Intern',
      company: 'DE Shaw',
      type: 'Software Development Engineer in Test (SDET)',
      timeline: 'Summer Internship (upcoming)',
      descriptions: [
        'Focus on software testing, system validation, and quality engineering.',
        'Learning testing frameworks, writing strong test cases, and ensuring correctness in high-performance systems.',
        'Exposure to reliability, edge-case handling, and production-grade validation.'
      ],
      focus: ['Testing frameworks', 'Test case design', 'System reliability & validation', 'Debugging and failure analysis']
    }
  ];

  return (
    <div ref={container} className="pt-32 pb-24 px-8 md:px-16 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h1 className="font-drama italic text-6xl md:text-8xl text-dark mb-6 exp-reveal">Experience.</h1>
          <p className="font-mono text-xl text-dark/60 max-w-2xl leading-relaxed exp-reveal">
            Backend systems + testing + reliability focus.
          </p>
        </div>
        
        <div className="exp-reveal">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} {...exp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
