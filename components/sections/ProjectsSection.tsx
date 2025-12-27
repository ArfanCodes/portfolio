'use client';

import { motion } from 'framer-motion';
import { Github, Award, ExternalLink, ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

const projects = [
  {
    title: 'DataNyx (Peso)',
    outcome: 'AI-powered fintech app delivering real-time financial insights and stability scoring.',
    role: 'App Developer',
    award: '2nd Place – Datathon',
    awardOrg: 'AWS Cloud Club MJCET & IEEE SMC',
    whatIBuilt: [
      'AI risk engine integration with predictive analytics',
      'Real-time financial dashboards with smart spending insights',
    ],
    impact: 'Gamified achievement system driving 40% higher user engagement',
    techStack: ['React Native', 'TypeScript', 'Zustand', 'Supabase', 'ML Integration'],
    github: 'https://github.com/ArfanCodes/Peso',
    isFlagship: true,
  },
  {
    title: 'SwiftBytes',
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
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-24 px-6 lg:px-8 bg-gradient-to-br from-[#FFF9EB] via-white to-[#FFF9EB] relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#9FB2AC]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#5D0D18]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-[#5D0D18] to-[#4A0A12] text-white rounded-full text-sm font-semibold shadow-lg">
              Featured Work
            </span>
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 tracking-tight">
            Featured Projects
          </h2>
          
          <p className="text-lg text-[#555555] max-w-2xl mx-auto leading-relaxed">
            Production-ready and award-winning applications built with modern technologies
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* CSS for blob animation */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group h-full"
    >
      <Card className={`
        relative overflow-hidden h-full flex flex-col
        p-8 
        ${project.isFlagship 
          ? 'bg-gradient-to-br from-white to-[#9FB2AC]/10 border-2 border-[#5D0D18] shadow-xl' 
          : 'bg-white border-2 border-[#9FB2AC]/30 shadow-lg'
        }
        hover:shadow-2xl
        transition-all duration-500
      `}>
        {/* Flagship badge */}
        {project.isFlagship && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute top-0 right-0 bg-gradient-to-r from-[#5D0D18] to-[#4A0A12] text-white px-4 py-1 rounded-bl-2xl text-xs font-bold"
          >
            ⭐ FLAGSHIP
          </motion.div>
        )}

        {/* Project Title */}
        <h3 className="text-2xl lg:text-3xl font-bold text-[#1A1A1A] mb-4 pr-20 group-hover:text-[#5D0D18] transition-colors duration-300">
          {project.title}
        </h3>

        {/* Outcome */}
        <p className="text-base text-[#555555] leading-relaxed mb-6 font-medium">
          {project.outcome}
        </p>

        {/* Role + Award */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="px-4 py-2 text-sm font-semibold rounded-full bg-neutral-100 text-[#1A1A1A] border border-[#9FB2AC]/30">
            {project.role}
          </span>

          {project.award && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#5D0D18]/10 to-[#4A0A12]/10 border border-[#5D0D18]"
            >
              <Award className="w-4 h-4 text-[#5D0D18]" />
              <span className="text-sm font-semibold text-[#1A1A1A]">{project.award}</span>
            </motion.div>
          )}
        </div>

        {/* What I Built */}
        <div className="mb-6">
          <h4 className="text-xs font-bold text-[#5D0D18] uppercase tracking-wider mb-3">
            What I Built
          </h4>
          <div className="space-y-2">
            {project.whatIBuilt.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#5D0D18] flex-shrink-0 mt-2" />
                <span className="text-sm text-[#1A1A1A] leading-relaxed font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Impact */}
        <div className="mb-6 p-4 bg-gradient-to-r from-[#9FB2AC]/10 to-[#9FB2AC]/5 rounded-xl border border-[#9FB2AC]/30">
          <h4 className="text-xs font-bold text-[#5D0D18] uppercase tracking-wider mb-2">
            Impact
          </h4>
          <p className="text-sm text-[#1A1A1A] leading-relaxed font-medium">
            {project.impact}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-6 flex-1">
          <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-medium text-[#1A1A1A] bg-white border border-neutral-300 rounded-lg hover:border-[#5D0D18] hover:bg-[#9FB2AC]/10 transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4 mt-auto pt-6 border-t-2 border-neutral-100">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A1A1A] hover:text-[#5D0D18] transition-colors duration-200 group/link"
          >
            <Github className="w-5 h-5" />
            <span>View Code</span>
            <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-200" />
          </a>
        </div>
      </Card>
    </motion.div>
  );
}
