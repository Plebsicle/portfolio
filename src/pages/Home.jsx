import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Server, Zap, Shield, Database, CheckCircle2, MousePointer2, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const container = useRef(null);
  
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from('.hero-reveal', {
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.08,
      ease: 'power3.out',
      delay: 0.2
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative h-[100dvh] w-full flex flex-col justify-end pb-24 px-8 md:px-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517409276495-21d0097a8dd5?q=80&w=2070&auto=format&fit=crop" 
          alt="Brutalist concrete architecture" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-inverse via-inverse/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl pt-20">
        <div className="mb-6 flex flex-wrap gap-4 items-center hero-reveal">
          <span className="font-mono text-accent bg-inverse/50 px-3 py-1 rounded-full text-sm border border-accent/20 backdrop-blur-md">
            SYSTEM_STATUS: OPERATIONAL
          </span>
          <span className="font-sans font-bold text-inverse-content/80 uppercase tracking-[0.2em] text-sm md:text-base border-l border-inverse-content/20 pl-4">
            Praval Hitesh Parikh
          </span>
        </div>
        
        <h1 className="flex flex-col gap-2 mb-8">
          <span className="font-sans font-bold text-inverse-content text-5xl md:text-7xl tracking-tighter leading-none hero-reveal">
            Command the
          </span>
          <span className="font-drama italic text-accent text-7xl md:text-[8rem] leading-none ml-0 md:ml-12 hero-reveal">
            Infrastructure.
          </span>
        </h1>
        <p className="font-mono text-inverse-content/70 max-w-lg mb-10 text-lg md:text-xl leading-relaxed hero-reveal">
          CSE undergraduate and backend systems engineer evolving towards quality-driven, high-reliability engineering. Designing scalable infrastructure with a rigorous testing mindset.
        </p>
        <div className="hero-reveal flex flex-wrap gap-4">
          <Link to="/projects">
            <Button variant="accent">
              View Projects <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </Link>
          <Link to="/experience">
            <Button variant="outline-light">
              View Experience
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const DiagnosticShuffler = () => {
  const [cards, setCards] = useState([
    { id: 1, title: 'Kafka Event Streaming', desc: 'High-throughput, distributed messaging architecture.' },
    { id: 2, title: 'Redis Caching Layer', desc: 'Sub-millisecond latency for hot data retrieval.' },
    { id: 3, title: 'Microservices API', desc: 'Decoupled, scalable business logic execution.' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prev => {
        const newArr = [...prev];
        const last = newArr.pop();
        newArr.unshift(last);
        return newArr;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-background rounded-[2rem] p-8 border border-dark/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] h-[400px] flex flex-col">
      <div className="mb-6">
        <h3 className="font-sans font-bold text-2xl mb-2 text-dark">Scalable Backends</h3>
        <p className="font-mono text-sm text-dark/60">Distributed data pipelines.</p>
      </div>
      <div className="relative flex-1">
        {cards.map((card, i) => {
          const isTop = i === 0;
          return (
            <div 
              key={card.id}
              className="absolute w-full bg-surface rounded-[1.5rem] p-6 border border-dark/5 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-sm"
              style={{
                top: `${i * 15}px`,
                transform: `scale(${1 - i * 0.05})`,
                zIndex: 10 - i,
                opacity: 1 - i * 0.2
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Database className={`w-5 h-5 ${isTop ? 'text-accent' : 'text-dark/40'}`} />
                <h4 className="font-sans font-bold text-lg">{card.title}</h4>
              </div>
              <p className="font-mono text-xs text-dark/60 leading-relaxed">{card.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const TelemetryTypewriter = () => {
  const [text, setText] = useState('');
  const fullText = `[12:05:01] INFO  [WorkerPool] Initializing 1024 threads\n[12:05:01] DEBUG [SocketHandler] WSS binding port 8080\n[12:05:02] WARN  [LockManager] Spinlock contention detected\n[12:05:02] INFO  [Telemetry] Connection established\n[12:05:03] SUCCESS Traffic routing optimized.`;
  
  useEffect(() => {
    let i = 0;
    let timer;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        timer = setInterval(() => {
          setText(fullText.slice(0, i));
          i++;
          if (i > fullText.length) clearInterval(timer);
        }, 30);
        observer.disconnect();
      }
    });
    
    const el = document.getElementById('typewriter-card');
    if (el) observer.observe(el);
    
    return () => {
      clearInterval(timer);
      if (el) observer.disconnect();
    };
  }, [fullText]);

  return (
    <div id="typewriter-card" className="bg-inverse rounded-[2rem] p-8 border border-dark shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)] h-[400px] flex flex-col group hover:-translate-y-1 transition-transform">
      <div className="mb-6 flex justify-between items-start">
        <div>
          <h3 className="font-sans font-bold text-2xl mb-2 text-inverse-content">Real-Time Control</h3>
          <p className="font-mono text-sm text-inverse-content/60">Architectures & concurrency.</p>
        </div>
        <div className="flex items-center gap-2 bg-inverse border border-inverse-content/20 px-3 py-1 rounded-full">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
          <span className="font-mono text-[10px] text-inverse-content">LIVE FEED</span>
        </div>
      </div>
      <div className="flex-1 bg-[#0a0a0a] rounded-[1rem] p-4 border border-inverse-content/10 overflow-hidden relative">
        <pre className="font-mono text-[10px] sm:text-xs text-inverse-content/80 whitespace-pre-wrap leading-relaxed">
          {text}
          <span className="inline-block w-2 h-4 bg-accent align-middle ml-1 animate-pulse"></span>
        </pre>
      </div>
    </div>
  );
};

const CursorProtocolScheduler = () => {
  const container = useRef(null);
  
  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    tl.set('.custom-cursor', { x: 20, y: 150, opacity: 0 })
      .to('.custom-cursor', { opacity: 1, duration: 0.3 })
      .to('.custom-cursor', { x: 180, y: 60, duration: 1, ease: 'power2.inOut' })
      .to('.custom-cursor', { scale: 0.8, duration: 0.1 })
      .to('.target-cell', { backgroundColor: '#E63B2E', color: '#E8E4DD', duration: 0.2 }, '<')
      .to('.custom-cursor', { scale: 1, duration: 0.1 })
      .to('.custom-cursor', { x: 250, y: 150, duration: 0.8, ease: 'power2.inOut', delay: 0.5 })
      .to('.custom-cursor', { scale: 0.8, duration: 0.1 })
      .to('.save-btn', { scale: 0.95, duration: 0.1 }, '<')
      .to('.save-btn', { scale: 1, duration: 0.1 })
      .to('.custom-cursor', { scale: 1, duration: 0.1 })
      .to('.custom-cursor', { opacity: 0, duration: 0.3 });
      
    tl.set('.target-cell', { backgroundColor: 'transparent', color: '#111111' });
  }, { scope: container });

  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <div ref={container} className="bg-background rounded-[2rem] p-8 border border-dark/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] h-[400px] flex flex-col relative overflow-hidden">
      <div className="mb-8">
        <h3 className="font-sans font-bold text-2xl mb-2 text-dark">System Validation</h3>
        <p className="font-mono text-sm text-dark/60">Rigorous testing & failure handling.</p>
      </div>
      
      <div className="relative flex-1 mt-4">
        <div className="grid grid-cols-7 gap-2 mb-8">
          {days.map((d, i) => (
            <div key={i} className="text-center font-mono text-xs text-dark/40 pb-2 border-b border-dark/10">{d}</div>
          ))}
          {[...Array(14)].map((_, i) => (
            <div key={i} className={`aspect-square rounded-md border border-dark/10 flex items-center justify-center font-mono text-xs text-dark ${i === 10 ? 'target-cell' : ''}`}>
              {i + 1}
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <div className="save-btn bg-inverse text-inverse-content px-4 py-2 rounded-lg font-mono text-xs flex items-center gap-2">
            <CheckCircle2 className="w-3 h-3" /> Run Test Suite
          </div>
        </div>
        <MousePointer2 className="custom-cursor absolute w-6 h-6 text-dark fill-dark z-10 drop-shadow-md" style={{ top: 0, left: 0 }} />
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-32 px-8 md:px-16 bg-primary text-dark relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="font-sans font-bold text-5xl md:text-6xl tracking-tighter mb-4">Functional Artifacts</h2>
          <p className="font-mono text-dark/60 max-w-2xl">Micro-UIs representing core backend competencies.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <DiagnosticShuffler />
          <TelemetryTypewriter />
          <CursorProtocolScheduler />
        </div>
      </div>
    </section>
  );
};



const Philosophy = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from('.manifesto-text', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 60%',
      },
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section id="philosophy" ref={container} className="relative py-40 px-8 md:px-16 bg-inverse text-inverse-content overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1502621035541-d6b38c201886?q=80&w=2070&auto=format&fit=crop" 
          alt="Raw materials texture" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <p className="font-sans text-xl md:text-3xl text-inverse-content/60 mb-8 manifesto-text">
          Most development focuses on: shipping features.
        </p>
        <p className="font-drama italic text-5xl md:text-[6rem] leading-tight manifesto-text">
          I focus on: <span className="text-accent">scalable correctness.</span>
        </p>
      </div>
    </section>
  );
};

const Protocol = () => {
  const container = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.protocol-card');
    
    gsap.set(cards.slice(1), { yPercent: 100 });
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: '+=150%',
        pin: true,
        scrub: 1,
      }
    });

    tl.to(cards[0], { scale: 0.9, opacity: 0.3, filter: 'blur(10px)', duration: 1 }, 0)
      .to(cards[1], { yPercent: 0, duration: 1, ease: 'none' }, 0)
      .to(cards[1], { scale: 0.9, opacity: 0.3, filter: 'blur(10px)', duration: 1 }, 1)
      .to(cards[2], { yPercent: 0, duration: 1, ease: 'none' }, 1);
      
  }, { scope: container });

  const steps = [
    {
      num: '01',
      title: 'Event-Driven Architecture',
      desc: 'Decoupled, high-throughput microservices using Kafka and Redis. Building observable systems that ensure data consistency without tight coupling.',
      icon: <Server className="w-24 h-24 text-accent absolute top-1/2 right-20 -translate-y-1/2 opacity-20" />
    },
    {
      num: '02',
      title: 'Real-Time Concurrency',
      desc: 'Lock-free state management and low-latency data pipelines. Validating resource utilization and correctness under heavy concurrent load.',
      icon: <Activity className="w-24 h-24 text-accent absolute top-1/2 right-20 -translate-y-1/2 opacity-20" />
    },
    {
      num: '03',
      title: 'System Reliability',
      desc: 'Comprehensive testing, fault-tolerance, and failure handling strategies. Engineering systems that fail gracefully and predictably.',
      icon: <Shield className="w-24 h-24 text-accent absolute top-1/2 right-20 -translate-y-1/2 opacity-20" />
    }
  ];

  return (
    <section id="protocol" ref={container} className="h-[100dvh] relative overflow-hidden bg-primary">
      {steps.map((step, i) => (
        <div key={i} className="protocol-card absolute inset-0 w-full h-full flex items-center px-8 md:px-16 bg-primary border-b border-dark/5">
          <div className="max-w-5xl mx-auto w-full relative z-10 flex gap-12 items-start">
            <div className="font-mono text-accent text-6xl md:text-[8rem] leading-none opacity-50 select-none">
              {step.num}
            </div>
            <div className="flex flex-col justify-center mt-4 md:mt-10">
              <h2 className="font-sans font-bold text-4xl md:text-6xl text-dark mb-6 tracking-tight">
                {step.title}
              </h2>
              <p className="font-mono text-dark/70 text-lg md:text-xl max-w-2xl leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
          {step.icon}
        </div>
      ))}
    </section>
  );
};

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Philosophy />
      <Protocol />
    </div>
  );
};

export default Home;
