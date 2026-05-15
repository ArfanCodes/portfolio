'use client';

import { motion } from 'framer-motion';
import { Github, Award, ArrowUpRight, Trophy, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageFrame } from '@/components/ui/ImageFrame';

const projects = [
  {
    title: 'FindMe',
    event: 'Google Solution Challenge',
    outcome: 'Full stack disaster response platform connecting citizens, NGOs, and rescue operators.',
    role: 'Full Stack Developer',
    whatIBuilt: [
      'Real-time Firestore data model across 12+ collections with security rules',
      'FastAPI ML service for composite profile and face matching across missing and found records',
      'Leaflet command map and multilingual UI (English, Hindi, Telugu)'
    ],
    impact: 'Live rescue coordination and safe check-ins',
    techStack: ['React 19', 'Firebase', 'FastAPI', 'Python', 'Leaflet', 'i18next'],
    liveLink: 'https://findme-e570e.web.app',
    isFlagship: true,
    image: '/images/project-findme-v2.png',
    color: '#162127',
  },
  {
    title: 'FINO',
    outcome: 'Personal finance management app with real-time cloud sync and offline-first data persistence.',
    role: 'Full Stack & Mobile Developer',
    whatIBuilt: [
      'Offline-first data persistence reducing perceived latency by ~60%',
      'Category-based budgeting engine and expense tracking module',
      'App-wide state management using Zustand, keeping UI response times under 100ms'
    ],
    impact: 'Scalable data modeling supporting unlimited transaction history',
    techStack: ['React Native', 'Firebase', 'Zustand'],
    github: 'https://github.com/ArfanCodes/fino-your-financial-budget-app',
    isFlagship: true,
    image: '/images/project-fino-v3.png',
    color: '#162127',
  },
  {
    title: 'Peso',
    event: 'Datanyx',
    outcome: 'AI-powered fintech app evaluating user spending patterns and generating AI-backed risk scores and budget predictions.',
    role: 'Full Stack & Mobile Developer',
    award: '2nd Place',
    awardOrg: 'AWS Cloud Club',
    whatIBuilt: [
      'Backend risk-scoring engine integration with a React Native frontend',
      'React Query caching optimizing Supabase queries, reducing redundant network calls by 40%',
      'Real-time data synchronization with conflict resolution using Supabase RLS'
    ],
    impact: 'Awarded 2nd place for system design depth and working product quality',
    techStack: ['React Native', 'Supabase', 'TypeScript', 'Zustand', 'React Query'],
    github: 'https://github.com/ArfanCodes/Peso',
    isFlagship: true,
    image: '/images/project-peso.png',
    color: '#162127',
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="surface-warm relative py-20 lg:py-28 text-[#1A1614] overflow-hidden"
    >

      <div className="container mx-auto px-6 lg:px-10 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#E8E2D9] shadow-[0_2px_10px_-4px_rgba(60,40,20,0.08)] mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C77F45]" />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#5A5550] font-sora">
              FEATURED WORK
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="font-sora font-semibold tracking-[-0.025em] leading-[1.02] text-[#1A1614] text-4xl sm:text-5xl lg:text-[3.5rem]">
              Selected Projects
              <span className="text-[#C77F45]">.</span>
            </h2>
            <div className="hidden lg:flex items-center gap-3 text-[#8B8680] text-sm font-medium font-sora pb-2">
              <span className="h-[1px] w-10 bg-[#D9CFBE]" />
              <span>{String(projects.length).padStart(2, '0')} case studies</span>
            </div>
          </div>

          <p className="mt-5 text-lg text-[#5A5550] max-w-2xl leading-relaxed">
            Production-ready applications solving real-world problems with modern architecture.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="flex flex-col gap-20 lg:gap-28">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              i={index}
              total={projects.length}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface CardProps {
  i: number;
  total: number;
  title: string;
  event?: string;
  outcome: string;
  role: string;
  award?: string;
  awardOrg?: string;
  whatIBuilt: string[];
  impact: string;
  techStack: string[];
  github?: string;
  liveLink?: string;
  isFlagship: boolean;
  image: string;
}

const Card = ({
  i,
  total,
  title,
  event,
  outcome,
  role,
  award,
  awardOrg,
  whatIBuilt,
  impact,
  techStack,
  github,
  liveLink,
  isFlagship,
  image,
}: CardProps) => {
  const reverse = i % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Counter row */}
      <div className="flex items-center gap-4 mb-6 lg:mb-8">
        <span className="font-sora text-[12px] font-semibold tracking-[0.2em] text-[#A39A8E]">
          {String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
        <span className="h-[1px] flex-1 bg-gradient-to-r from-[#E0D3BC] to-transparent" />
        {event && (
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.16em] uppercase text-[#7A5A3F] font-sora">
            <span className="h-1 w-1 rounded-full bg-[#C77F45]" />
            {event}
          </span>
        )}
      </div>

      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>

        {/* IMAGE SHOWCASE */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ scale: 0.96 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative group"
          >
            {/* Floating warm glow */}
            <div className="absolute -inset-6 lg:-inset-10 bg-gradient-to-br from-[#F5E7D2] via-[#F8EFE2] to-[#FFFFFF] rounded-[2.5rem] blur-2xl opacity-70 -z-10" />
            <div className="absolute -bottom-8 -right-4 w-32 h-32 rounded-full bg-[#F0E4D4] blur-2xl opacity-70 -z-10" />

            {/* Image frame */}
            <div className="relative rounded-[1.75rem] overflow-hidden bg-gradient-to-br from-[#F8F1E6] to-[#F0E4D4] ring-1 ring-white/80 border border-[#EFE3D0] shadow-[0_40px_80px_-30px_rgba(70,45,25,0.28),0_12px_30px_-12px_rgba(70,45,25,0.15)] aspect-[16/10]">
              <ImageFrame
                src={image}
                alt={title}
                fill
                imageClassName="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 60vw"
                fallbackLabel="Screenshot unavailable"
              />

              {/* Soft top sheen */}
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />

              {/* Award badges */}
              {(isFlagship || award) && (
                <div className="absolute top-5 left-5 z-20 flex flex-col items-start gap-2">
                  {isFlagship && (
                    <div className="bg-white/95 backdrop-blur-xl text-[#1A1614] px-3.5 py-1.5 rounded-full text-[11px] font-semibold shadow-[0_8px_20px_-8px_rgba(70,45,25,0.3)] flex items-center gap-1.5 border border-white">
                      <Award size={12} className="text-[#C77F45]" strokeWidth={2.2} />
                      FLAGSHIP
                    </div>
                  )}
                  {award && (
                    <div className="bg-[#1A1614] text-white px-3.5 py-1.5 rounded-full text-[11px] font-semibold shadow-[0_8px_20px_-8px_rgba(26,22,20,0.45)] flex items-center gap-1.5 border border-[#1A1614]">
                      <Trophy size={12} className="text-[#E8B97E]" strokeWidth={2.2} />
                      {award.toUpperCase()}
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* CONTENT */}
        <div className="lg:col-span-5 flex flex-col">

          {/* Title block */}
          <div className="mb-6">
            <h3 className="font-sora font-semibold tracking-[-0.02em] text-[#1A1614] text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.05]">
              {title}
            </h3>

            <div className="flex flex-wrap items-center gap-2 mt-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-[#EFE3D0] text-[12px] font-medium text-[#5A5550] shadow-[0_1px_4px_-1px_rgba(70,45,25,0.06)]">
                {role}
              </span>
              {awardOrg && (
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#F5EFE6] border border-[#EFE3D0] text-[12px] font-medium text-[#7A5A3F]">
                  {awardOrg}
                </span>
              )}
            </div>
          </div>

          {/* Outcome */}
          <p className="text-[1.0625rem] lg:text-[1.125rem] text-[#3A3530] leading-[1.7] mb-7">
            {outcome}
          </p>

          {/* What I Built */}
          <ul className="space-y-3.5 mb-7">
            {whatIBuilt.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-[15px] text-[#4A4540] leading-[1.65]">
                <span className="mt-2 h-[2px] w-3.5 bg-[#C77F45] rounded-full shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Impact */}
          <div className="relative p-4 lg:p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#EFE3D0] shadow-[0_2px_12px_-6px_rgba(70,45,25,0.12)] mb-7">
            <div className="absolute -top-2 left-5 px-2 py-0.5 bg-[#1A1614] text-white text-[9px] tracking-[0.2em] uppercase rounded-full font-sora font-medium">
              Impact
            </div>
            <p className="text-[14px] lg:text-[15px] text-[#2A2420] font-medium leading-[1.6] pt-1">
              {impact}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 mb-8">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-2.5 py-1 text-[11.5px] font-medium text-[#5A5550] bg-white/70 border border-[#E8E2D9] rounded-full hover:bg-white hover:border-[#D9CFBE] hover:text-[#1A1614] transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            {liveLink && (
              <Button
                asChild
                className="group bg-[#1A1614] hover:bg-[#2A2420] text-white rounded-full px-6 py-5 text-[14px] font-semibold shadow-[0_10px_24px_-10px_rgba(26,22,20,0.55)] hover:shadow-[0_14px_30px_-10px_rgba(26,22,20,0.6)] hover:-translate-y-[1px] transition-all duration-300"
              >
                <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-sora">
                  <Globe size={15} strokeWidth={2.2} />
                  <span>Live Preview</span>
                  <ArrowUpRight size={15} strokeWidth={2.2} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Button>
            )}
            {github && (
              <Button
                asChild
                className="group bg-white hover:bg-[#FAF6EF] border border-[#E0D3BC] text-[#1A1614] rounded-full px-6 py-5 text-[14px] font-semibold shadow-[0_2px_10px_-4px_rgba(70,45,25,0.08)] hover:-translate-y-[1px] transition-all duration-300"
              >
                <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-sora">
                  <Github size={15} strokeWidth={2.2} />
                  <span>Source</span>
                  <ArrowUpRight size={15} strokeWidth={2.2} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};
