import React, { useEffect } from 'react';
import { ArrowUpRight, Github, ExternalLink, ShieldAlert, Zap, Database } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-background rounded-[2rem] p-8 md:p-12 border border-dark/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] mb-16 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-6 relative z-10">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <h2 className="font-sans font-bold text-3xl md:text-5xl text-dark tracking-tight">{project.title}</h2>
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="bg-accent text-primary px-3 py-1 rounded-full text-xs font-bold font-sans tracking-wide hover:scale-105 transition-transform flex items-center gap-1">
                LIVE <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
          <p className="font-mono text-dark/60 text-lg">{project.description}</p>
        </div>
        <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-mono text-sm border border-dark/20 px-4 py-2 rounded-full hover:bg-dark hover:text-primary transition-colors">
          <Github className="w-4 h-4" /> View Source <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative z-10">
        <div className="md:col-span-2">
          <h3 className="font-sans font-bold text-2xl mb-4">Architecture & System Design</h3>
          <p className="font-mono text-sm text-dark/70 leading-relaxed mb-6">
            {project.architecture}
          </p>
          <h3 className="font-sans font-bold text-2xl mb-4">Key Challenges & Solutions</h3>
          <ul className="font-mono text-sm text-dark/70 leading-relaxed list-disc list-inside space-y-2">
            {project.challenges.map((challenge, i) => (
              <li key={i}>{challenge}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <div className="bg-dark text-primary rounded-2xl p-6 border border-dark/20">
            <h4 className="font-sans font-bold text-xl mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-accent" /> Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map(tech => (
                <span key={tech} className="bg-primary/10 px-3 py-1 rounded-full font-mono text-xs text-primary/80">
                  {tech}
                </span>
              ))}
            </div>
            
            {project.performance && (
              <>
                <h4 className="font-sans font-bold text-xl mb-4 flex items-center gap-2 mt-8">
                  <Database className="w-5 h-5 text-accent" /> Performance
                </h4>
                <div className="font-mono text-sm text-primary/70">
                  {project.performance}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectsData = [
    {
      title: 'Scalable Financial Transactions System',
      description: 'Distributed backend capable of 3,600+ RPS with strict ACID guarantees.',
      github: 'https://github.com/Plebsicle/microfin',
      live: null,
      stack: ['TypeScript', 'PostgreSQL', 'Kafka', 'Redis', 'NGINX', 'Docker', 'Prometheus', 'Grafana'],
      architecture: 'The system leverages PostgreSQL with PgBouncer, a 9-node Redis Cluster, Apache Kafka, and Nginx to achieve over 3600 RPS with 100% transactional correctness. A key component is the hash-based sequential processing: transactions are hashed by user/account ID, mapping them to specific Kafka partitions to ensure strict ordering per user without distributed database locking.',
      challenges: [
        'Preventing race conditions on balance updates under heavy concurrent load (e.g., rapid retries or double clicks). Solved via Kafka partitioning by account ID to enforce strict sequential processing per account.',
        'Ensuring idempotency so duplicate requests are not processed. Enabled Kafka producer idempotency to maintain exactly-once semantics.',
        'Database connection exhaustion mitigated by integrating PgBouncer for efficient connection pooling.'
      ],
      performance: 'Load tested using K6 with complex scenarios (deposits, transfers, withdrawals). Achieved 3626.18 requests per second with an average response time of 515.29 ms and 0% failure rate.'
    },
    {
      title: 'Feature Flag Management System',
      description: 'Comprehensive feature flag platform with real-time SDK evaluation and custom targeting.',
      github: 'https://github.com/Plebsicle/feature-flags',
      live: 'https://bitswitch.tech',
      stack: ['TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Next.js', 'Tailwind', 'Turborepo'],
      architecture: 'Built as a Turborepo monorepo encompassing an Express.js API, Next.js dashboard, and shared packages. It uses Redis for sub-millisecond flag evaluation caching and PostgreSQL (via Prisma) for persistent rule and tenant storage. The system isolates data via a multi-tenant organization structure and Role-Based Access Control (RBAC).',
      challenges: [
        'Minimizing latency for SDK evaluation requests. Solved by implementing an aggressive Redis caching layer so the API responds instantly without hitting PostgreSQL.',
        'Safely managing gradual feature rollouts. Designed a rules engine that computes user exposure based on percentage rollouts and custom user attributes.',
        'Ensuring production observability. Integrated real-time Slack notifications for state changes (like kill switches) and comprehensive audit logging.'
      ],
      performance: 'Designed to handle high read-heavy workloads through Redis caching, enabling near-instant feature flag evaluations across distributed SDK clients.'
    },
    {
      title: 'Medication Management System',
      description: 'Full-stack medical application featuring Twilio SMS reminders, secure AWS S3 uploads, and AI integration.',
      github: 'https://github.com/Plebsicle/Medication-Management',
      live: 'https://medman.app',
      stack: ['TypeScript', 'Express', 'PostgreSQL', 'Redis', 'React', 'Tailwind', 'AWS S3', 'OpenAI API'],
      architecture: 'A monolithic React frontend communicating with an Express.js REST API. Uses JWT-based stateless authentication and PostgreSQL for the relational health data model. Includes background worker queues to process and dispatch Twilio-based SMS/Email reminders.',
      challenges: [
        'Secure handling of sensitive health documents. Resolved by offloading uploads directly to AWS S3 using short-lived presigned URLs, bypassing the application server to reduce bandwidth and enhance security.',
        'Reducing API latency for common queries like hospital searches. Implemented Redis caching for location-based search results.',
        'Integrating AI assistance within strict contextual boundaries using the OpenAI API to handle basic patient queries safely.'
      ],
      performance: 'Redis caching heavily reduces downstream API calls for geographical queries, ensuring fast, repeatable access.'
    }
  ];

  return (
    <div className="pt-32 pb-24 px-8 md:px-16 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h1 className="font-drama italic text-6xl md:text-8xl text-dark mb-6">Case Studies.</h1>
          <p className="font-mono text-xl text-dark/60 max-w-2xl leading-relaxed">
            Deep dives into system architectures, concurrency control, and scalable solutions.
          </p>
        </div>
        
        <div className="flex flex-col gap-8">
          {projectsData.map((proj, idx) => (
            <ProjectCard key={idx} project={proj} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
