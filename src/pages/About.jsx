import React, { useEffect } from 'react';
import { Code2, Terminal, Award, BookOpen, Layers } from 'lucide-react';

const SkillTag = ({ children }) => (
  <span className="font-mono text-sm bg-inverse/5 border border-dark/10 px-4 py-2 rounded-lg text-dark/80 font-semibold hover:bg-inverse hover:text-inverse-content transition-colors cursor-default">
    {children}
  </span>
);

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-8 md:px-16 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20">
          <h1 className="font-sans font-bold text-6xl md:text-8xl tracking-tighter text-dark mb-6">
            System <span className="font-drama italic text-accent">Parameters.</span>
          </h1>
          <p className="font-mono text-xl text-dark/60 leading-relaxed max-w-2xl">
            CSE undergraduate with a strong foundation in backend systems and distributed architectures. Passionate about building reliable software through clean design, testing, and automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="font-sans font-bold text-3xl mb-8 flex items-center gap-3">
              <Terminal className="w-8 h-8 text-accent" /> Technologies
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-mono text-dark/50 text-sm mb-4 uppercase tracking-widest">Languages</h3>
                <div className="flex flex-wrap gap-3">
                  <SkillTag>TypeScript</SkillTag>
                  <SkillTag>JavaScript</SkillTag>
                  <SkillTag>SQL</SkillTag>
                  <SkillTag>C++</SkillTag>
                </div>
              </div>
              <div>
                <h3 className="font-mono text-dark/50 text-sm mb-4 uppercase tracking-widest">Backend & Infrastructure</h3>
                <div className="flex flex-wrap gap-3">
                  <SkillTag>Node.js</SkillTag>
                  <SkillTag>Express</SkillTag>
                  <SkillTag>PostgreSQL</SkillTag>
                  <SkillTag>Redis</SkillTag>
                  <SkillTag>Kafka</SkillTag>
                  <SkillTag>Docker</SkillTag>
                  <SkillTag>Prometheus</SkillTag>
                </div>
              </div>
              <div>
                <h3 className="font-mono text-dark/50 text-sm mb-4 uppercase tracking-widest">Tools & Frontend</h3>
                <div className="flex flex-wrap gap-3">
                  <SkillTag>React</SkillTag>
                  <SkillTag>Tailwind CSS</SkillTag>
                  <SkillTag>Git / GitHub Actions</SkillTag>
                  <SkillTag>Vitest</SkillTag>
                  <SkillTag>K6</SkillTag>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-16">
            <div>
              <h2 className="font-sans font-bold text-3xl mb-8 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-accent" /> Education
              </h2>
              <div className="bg-background border border-dark/10 rounded-2xl p-8 relative overflow-hidden group hover:border-dark/30 transition-colors">
                <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>
                <h3 className="font-sans font-bold text-2xl mb-2">Indian Institute of Information Technology</h3>
                <p className="font-mono text-dark/70 mb-4">Vadodara, India</p>
                <div className="flex items-center gap-4 font-mono text-sm">
                  <span className="bg-inverse/5 px-3 py-1 rounded-md">B.Tech in CSE</span>
                  <span className="text-accent font-bold">GPA: 8.36 / 10.0</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-sans font-bold text-3xl mb-8 flex items-center gap-3">
                <Award className="w-8 h-8 text-accent" /> Algorithmic Training
              </h2>
              <div className="space-y-4 font-mono text-dark/80 text-sm">
                <div className="flex items-center justify-between border-b border-dark/10 pb-4">
                  <span>Codeforces</span>
                  <span className="bg-primary px-3 py-1 border border-dark/10 rounded-md">450+ Problems (Pupil 1296)</span>
                </div>
                <div className="flex items-center justify-between border-b border-dark/10 pb-4">
                  <span>LeetCode</span>
                  <span className="bg-primary px-3 py-1 border border-dark/10 rounded-md">350+ Problems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
