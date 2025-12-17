'use client';

import { motion } from 'framer-motion';
import { Github, Award } from 'lucide-react';
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
    <section id="projects" className="min-h-screen py-20 px-6 lg:px-8 bg-white">
      {/* Content with entry transition */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="max-w-6xl mx-auto"
      >
        {/* Header with Staggered Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-semibold text-neutral-900 mb-3 tracking-tight">
            Featured Projects
          </h2>
          
          {/* Muted gold divider */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="flex justify-center mb-6"
          >
            <div className="w-12 h-0.5 bg-[#C9A24D]" />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-sm text-neutral-500 max-w-2xl mx-auto leading-relaxed"
          >
            Production-ready and award-winning applications built as an App Developer
          </motion.p>
        </motion.div>

        {/* Project Grid - Flagship First */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.4, delay: index * 0.12 }}
      className="group"
    >
      <Card 
        className={`
          relative overflow-hidden h-full flex flex-col
          p-6 lg:p-7
          ${project.isFlagship ? 'border-l-[3px] border-l-[#C9A24D] shadow-md' : 'shadow-sm'}
          hover:shadow-lg
          transition-all duration-300
          bg-white
        `}
      >
        {/* Flagship Accent Strip Animation */}
        {project.isFlagship && (
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 + 0.3 }}
            className="absolute left-0 top-0 w-[3px] bg-[#C9A24D] origin-top"
          />
        )}

        {/* Project Title - Heavier Weight */}
        <h3 className="text-xl font-bold text-[#1F2937] mb-3 tracking-tight">
          {project.title}
        </h3>

        {/* Outcome Statement - One Line */}
        <p className="text-sm text-neutral-600 leading-relaxed mb-4">
          {project.outcome}
        </p>

        {/* Role + Recognition - Compact Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-5">
          {/* Role Chip - Gray Outline */}
          <span className="px-3 py-1 text-xs font-medium rounded-full border border-neutral-300 text-[#1F2937]">
            {project.role}
          </span>

          {/* Award Chip - Muted Gold Outline */}
          {project.award && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.12 + 0.5 }}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#C9A24D]"
            >
              <Award className="w-3.5 h-3.5 text-[#C9A24D]" />
              <span className="text-xs font-medium text-[#1F2937]">{project.award}</span>
            </motion.div>
          )}
        </div>

        {/* What I Built - 2 Bullets Max */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">
            What I Built
          </p>
          <div className="space-y-1.5">
            {project.whatIBuilt.map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-[#1F2937] flex-shrink-0 mt-1.5" />
                <span className="text-sm text-neutral-700 leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Impact / Result - 1 Line */}
        <div className="mb-5">
          <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">
            Impact
          </p>
          <p className="text-sm text-neutral-700 leading-relaxed">
            {project.impact}
          </p>
        </div>

        {/* Tech Stack - Compressed, Max 5 */}
        <div className="mb-6 flex-1">
          <p className="text-xs font-medium text-neutral-500 mb-2">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs text-neutral-600 border border-neutral-200 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA - Source Code Only */}
        <div className="flex items-center mt-auto pt-4 border-t border-neutral-100">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-600 hover:text-[#1F2937] transition-colors duration-200"
          >
            <Github className="w-4 h-4" />
            <span>Source Code</span>
          </a>
        </div>
      </Card>
    </motion.div>
  );
}
