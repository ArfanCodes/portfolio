'use client';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Github, Award, ArrowUpRight, Trophy } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';

const projects = [
  {
    title: 'Peso',
    event: 'Datanyx',
    outcome: 'AI-powered fintech app delivering real-time financial insights and stability scoring.',
    role: 'App Developer',
    award: '2nd Place – Datathon',
    awardOrg: 'AWS Cloud Club MJCET & IEEE SMC',
    whatIBuilt: [
      'AI risk engine integration with predictive analytics',
      'Real-time financial dashboards with smart spending insights',
    ],
    impact: 'Gamified achievement system',
    techStack: ['React Native', 'TypeScript', 'Zustand', 'Supabase', 'ML Integration'],
    github: 'https://github.com/ArfanCodes/Peso',
    isFlagship: true,
    image: '/images/project-peso.png',
    color: '#162127', // Dark Jungle Green
  },
  {
    title: 'SwiftBytes',
    event: 'Envisage',
    outcome: 'Smart canteen management platform with high-performance ordering and inventory workflows.',
    role: 'Team Lead & App Developer',
    award: '2nd Place – Exhibition',
    awardOrg: 'Envisage, MJCET',
    whatIBuilt: [
      'Real-time menu and order management system',
      'AWS deployment architecture for institutional scale',
    ],
    impact: 'Recognized for technical excellence and leadership',
    techStack: ['Node.js', 'Express', 'React', 'AWS', 'HTML/CSS'],
    github: 'https://github.com/ArfanCodes/SwiftBytes',
    isFlagship: true,
    image: '/images/project-swiftbytes.png',
    color: '#162127',
  },
  {
    title: 'CropLytics',
    outcome: 'AI-driven farming assistant with real-time weather, soil analysis, and crop recommendations.',
    role: 'Team Lead & App Developer',
    whatIBuilt: [
      'Multilingual onboarding with Appwrite authentication',
      'Performance-optimized components using React.memo',
    ],
    impact: 'Empowering farmers with data-driven decision making',
    techStack: ['React Native', 'FastAPI', 'TypeScript', 'Appwrite', 'AsyncStorage'],
    github: 'https://github.com/ArfanCodes/CropLytics',
    isFlagship: false,
    image: '/images/project-croplytics.png',
    color: '#162127',
  },
  {
    title: 'Habit Tracker App',
    outcome: 'Cross-platform habit tracking with streak visualization and progress analytics.',
    role: 'Developer',
    whatIBuilt: [
      'Interactive streak visualizer component',
      'Real-time sync with Appwrite backend',
    ],
    impact: 'Secure authentication with production Android APK',
    techStack: ['React Native', 'TypeScript', 'Appwrite', 'TailwindCSS'],
    github: 'https://github.com/ArfanCodes/Habit-Tracker-App',
    isFlagship: false,
    image: '/images/project-habit.png',
    color: '#162127',
  },
];

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // We actually don't need global scroll progress for the sticky effect effectively in plain CSS + simple framer, 
  // but let's verify if we want scaling. Scaling adds a nice touch.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section id="projects" className="py-24 lg:py-32 bg-[#0C1519] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#CF9D7B]/10 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#724B39]/10 rounded-full blur-[100px] opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10" ref={containerRef}>
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 lg:mb-32"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#162127] border border-[#3A3534] text-[#CF9D7B] text-sm font-semibold tracking-wide mb-4">
            FEATURED WORK
          </span>
          <h2 className="text-5xl lg:text-7xl font-bold text-[#CF9D7B] mb-6 tracking-tight">
            Selected Projects
          </h2>
          <p className="text-lg font-medium text-[#A0A0A0] max-w-2xl mx-auto leading-relaxed">
            Production-ready applications solving real-world problems with modern architecture.
          </p>
        </motion.div>

        {/* Stacking Cards Container */}
        <div className="flex flex-col gap-10">
          {projects.map((project, index) => {
            // Calculate a target scale based on index to create depth
            // We can just rely on sticky behavior for the main effect, and add a simple motion Viewport.
            // For a true parallax stack, we need the containerRef pattern, but usually CSS Sticky is easier and more performant.
            const targetScale = 1 - ((projects.length - index) * 0.05);
            return (
              <Card 
                key={index} 
                i={index} 
                {...project} 
                progress={scrollYProgress} 
                range={[index * 0.25, 1]} 
                targetScale={targetScale} 
              />
            )
          })}
        </div>
      </div>
    </section>
  );
}

interface CardProps {
  i: number;
  title: string;
  event?: string;
  outcome: string;
  role: string;
  award?: string;
  awardOrg?: string;
  whatIBuilt: string[];
  impact: string;
  techStack: string[];
  github: string;
  isFlagship: boolean;
  image: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const Card = ({ i, title, event, outcome, role, award, awardOrg, whatIBuilt, impact, techStack, github, isFlagship, image, color, progress, range, targetScale }: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  // Scale animation for desktop stacking effect
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div ref={container} className="w-full flex items-center justify-center lg:h-screen lg:sticky lg:top-0 py-10 lg:py-0">
      <motion.div 
        className="relative flex flex-col lg:flex-row gap-8 lg:gap-12 bg-[#162127] rounded-3xl p-6 lg:p-12 shadow-2xl border border-[#3A3534] w-full max-w-6xl origin-top"
        style={{ 
          backgroundColor: color, 
          scale: typeof window !== 'undefined' && window.innerWidth >= 1024 ? scale : 1,
          top: typeof window !== 'undefined' && window.innerWidth >= 1024 ? `calc(-5% + ${i * 25}px)` : 0
        }}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.5 }}
      >
        {/* Left: Content */}
        <div className="flex flex-col justify-between w-full lg:w-1/2 gap-6 lg:gap-8">
          <div>
            <div className="flex flex-col gap-1 mb-4">
              <h3 className="text-2xl lg:text-4xl font-bold font-playfair tracking-tight text-[#E0E0E0]">{title}</h3>
              {event && (
                <span className="text-[#CF9D7B] font-bold text-sm uppercase tracking-widest opacity-80">
                  {event}
                </span>
              )}
            </div>
            
            {/* Mobile Award Badge */}
            {award && (
               <div className="lg:hidden mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#724B39] text-[#CF9D7B] text-[10px] font-bold border border-[#3A3534] shadow-sm animate-pulse">
                  <Trophy size={12} className="fill-[#CF9D7B]" /> {award.toUpperCase()}
               </div>
            )}

            <p className="font-sans text-lg lg:text-xl text-white/95 leading-8 font-normal mb-4 lg:mb-6">
              {outcome}
            </p>

            <div className="flex flex-wrap gap-2 text-sm font-bold text-[#A0A0A0] mb-6">
              <span className="px-3 py-1.5 bg-[#0C1519]/60 rounded-md border border-[#3A3534]">
                {role}
              </span>
              {awardOrg && (
                <span className="px-3 py-1.5 bg-[#0C1519]/60 rounded-md border border-[#3A3534] truncate max-w-[200px] hidden sm:block">
                  {awardOrg}
                </span>
              )}
            </div>

            <ul className="space-y-3 mb-8">
              {whatIBuilt.map((item, index) => (
                <li key={index} className="flex items-start gap-3 font-sans text-base lg:text-lg text-[#E0E0E0]/90 leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#CF9D7B] shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 lg:p-5 rounded-xl bg-[#0C1519]/50 border border-[#3A3534]/50 mb-8">
               <p className="text-[#E0E0E0] font-bold text-sm lg:text-base">
                 <span className="block text-[10px] uppercase tracking-wider opacity-70 mb-1 text-[#CF9D7B]">Impact</span>
                 {impact}
               </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-wrap gap-2 max-w-xs">
              {techStack.map((tech) => (
                <span key={tech} className="px-2 lg:px-3 py-1 text-[10px] lg:text-xs font-semibold text-[#A0A0A0] bg-[#0C1519] border border-[#3A3534] rounded-full">
                  {tech}
                </span>
              ))}
            </div>

            <Button 
              className="w-full sm:w-auto bg-[#724B39] hover:bg-[#5C3A2A] text-[#E0E0E0] rounded-full px-8 py-6 text-base font-bold shadow-xl transition-transform hover:-translate-y-1"
              asChild
            >
              <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <Github size={20} />
                <span>Source</span>
                <ArrowUpRight size={18} />
              </a>
            </Button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative w-full lg:w-1/2 aspect-video lg:aspect-auto lg:h-auto rounded-2xl overflow-hidden shadow-xl border border-[#3A3534] bg-[#0C1519] group min-h-[200px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Desktop Award Badge */}
          {award && (
            <div className="hidden lg:flex absolute top-6 left-6 z-20 flex-col items-start gap-2">
               {isFlagship && (
                  <div className="bg-[#162127] text-[#CF9D7B] px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-2 border border-[#CF9D7B]/20 backdrop-blur-md">
                    <Award size={14} />
                    FLAGSHIP
                  </div>
               )}
               <div className="bg-[#CF9D7B]/90 text-[#0C1519] px-4 py-2 rounded-full text-xs font-extrabold shadow-lg flex items-center gap-2 border border-[#3A3534]/10 backdrop-blur-md animate-pulse">
                  <Trophy size={14} className="fill-[#0C1519]" />
                  {award.toUpperCase()}
               </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}
