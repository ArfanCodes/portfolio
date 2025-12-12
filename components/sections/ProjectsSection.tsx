'use client';

import { motion, useInView } from 'framer-motion';
import { Github, Award, CheckCircle, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useRef, useState } from 'react';

// Consistent tech tag colors
const techColors: Record<string, string> = {
  'React Native': 'bg-blue-50 text-blue-700 border-blue-200',
  'TypeScript': 'bg-sky-50 text-sky-700 border-sky-200',
  'Zustand': 'bg-purple-50 text-purple-700 border-purple-200',
  'React Query': 'bg-red-50 text-red-700 border-red-200',
  'Supabase': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Axios': 'bg-indigo-50 text-indigo-700 border-indigo-200',
  'FastAPI': 'bg-teal-50 text-teal-700 border-teal-200',
  'Appwrite': 'bg-pink-50 text-pink-700 border-pink-200',
  'AsyncStorage': 'bg-amber-50 text-amber-700 border-amber-200',
  'Node.js': 'bg-green-50 text-green-700 border-green-200',
  'Express': 'bg-slate-50 text-slate-700 border-slate-200',
  'React': 'bg-cyan-50 text-cyan-700 border-cyan-200',
  'HTML/CSS': 'bg-orange-50 text-orange-700 border-orange-200',
  'AWS': 'bg-yellow-50 text-yellow-700 border-yellow-200',
  'TailwindCSS': 'bg-violet-50 text-violet-700 border-violet-200',
};

const projects = [
  {
    title: 'DataNyx (Peso)',
    tagline: 'AI-Powered Financial Stability App',
    description: 'A mobile application that helps users understand and improve their financial health through AI-driven risk scoring, smart spending insights, leak detection, and predictive analytics.',
    tags: ['React Native', 'TypeScript', 'Zustand', 'React Query', 'Supabase', 'Axios'],
    role: 'App Developer',
    highlights: [
      'AI risk engine integration',
      'Gamified achievements and streaks',
      'Real-time financial insights and dashboards'
    ],
    github: 'https://github.com/ArfanCodes/Peso',
    award: 'Winner',
    thumbnail: '💰',
  },
  {
    title: 'CropLytics',
    tagline: 'AI-Driven Farming Assistant',
    description: 'A React Native app offering real-time weather updates, soil analysis inputs, crop recommendations, and multilingual onboarding. Designed to help farmers make informed decisions.',
    tags: ['React Native', 'FastAPI', 'TypeScript', 'Appwrite', 'AsyncStorage'],
    role: 'Team Lead / App Developer',
    highlights: [
      'Appwrite authentication',
      'Multilingual onboarding',
      'Performance optimizations using React.memo'
    ],
    github: 'https://github.com/ArfanCodes/CropLytics',
    thumbnail: '🌾',
  },
  {
    title: 'SwiftBytes',
    tagline: 'Smart Canteen Management System',
    description: 'A full-stack solution built for MJCET\'s shared canteen, enabling fast food ordering, inventory management, and efficient service workflows. Awarded 2nd Place at Envisage 2025.',
    tags: ['Node.js', 'Express', 'React', 'HTML/CSS', 'AWS'],
    role: 'Team Lead',
    highlights: [
      'Real-time menu + order management',
      'AWS deployment for scale',
      'Recognized for technical & leadership excellence'
    ],
    github: 'https://github.com/ArfanCodes/SwiftBytes',
    award: '2nd Place at Envisage 2025',
    thumbnail: '🍔',
  },
  {
    title: 'Habit Tracker App',
    tagline: 'Cross-Platform Habit Tracking Application',
    description: 'An interactive mobile app designed to help users build habits, track daily progress, and visualize streaks with a clean and responsive UI.',
    tags: ['React Native', 'TypeScript', 'Appwrite', 'TailwindCSS'],
    role: 'Developer',
    highlights: [
      'Streak visualizer component',
      'Real-time sync with Appwrite',
      'Secure authentication + Android APK build'
    ],
    github: 'https://github.com/ArfanCodes/Habit-Tracker-App',
    thumbnail: '✅',
  },
];

export default function ProjectsSection() {
  const headerRef = useRef(null);
  const underlineRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });
  const isUnderlineInView = useInView(underlineRef, { once: true });

  return (
    <section id="projects" className="min-h-screen py-20 px-6 lg:px-8 relative overflow-hidden">
      {/* Soft Gradient Background with Blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-neutral-50 to-blue-50/30" />
      
      {/* Abstract gradient blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/15 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-200/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Section Header with Animation */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-4">
            Featured Projects
          </h2>
          
          {/* Animated underline */}
          <div ref={underlineRef} className="flex justify-center mb-6">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isUnderlineInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full origin-center"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed"
          >
            A selection of my recent work showcasing various technologies and design approaches
          </motion.p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Separate ProjectCard component for better control
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.18, // 160-220ms range
        delay: index * 0.1 
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{ scale: 1.01, y: -4 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="group overflow-hidden border border-neutral-200/60 hover:border-neutral-300 transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] h-full flex flex-col rounded-[18px] bg-white/80 backdrop-blur-sm">
          {/* Project Thumbnail Banner */}
          <div className="relative h-32 bg-gradient-to-br from-neutral-100 to-neutral-50 flex items-center justify-center overflow-hidden">
            <motion.div
              animate={isHovered ? { y: -2, scale: 1.05 } : { y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-6xl"
            >
              {project.thumbnail}
            </motion.div>
            
            {/* Award badge with glow */}
            {project.award && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-300/60 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <Award className="w-3.5 h-3.5 text-orange-600" />
                <span className="text-xs font-semibold text-orange-700">Award</span>
              </motion.div>
            )}
          </div>

          <div className="p-7 flex-1 flex flex-col">
            {/* Header with improved hierarchy */}
            <div className="mb-5">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
                {project.title}
              </h3>
              <p className="text-sm font-medium text-neutral-500 mb-4">
                {project.tagline}
              </p>
              
              {/* Role section with structure */}
              <div className="mb-3">
                <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">Role</p>
                <p className="text-sm font-medium text-neutral-700">{project.role}</p>
              </div>
            </div>

            {/* Description with better spacing */}
            <p className="text-neutral-600 mb-5 leading-relaxed text-[1.05rem] flex-1">
              {project.description}
            </p>

            {/* Key Highlights with check icons and accent border */}
            <div className="mb-6">
              <p className="text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-3">Key Highlights</p>
              <ul className="space-y-2.5">
                {project.highlights.map((highlight, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                    className="flex items-start text-sm text-neutral-700 leading-relaxed pl-3 border-l-2 border-blue-200"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            {/* Tech Stack with subheading and consistent colors */}
            <div className="mb-6">
              <p className="text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, y: 4 }}
                    animate={isHovered ? { opacity: 1, y: 0 } : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
                    transition={{ duration: 0.2, delay: isHovered ? i * 0.04 : 0 }}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg border shadow-sm ${
                      techColors[tag] || 'bg-neutral-50 text-neutral-700 border-neutral-200'
                    }`}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3 pt-5 border-t border-neutral-100">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-neutral-900 text-white rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors shadow-sm hover:shadow-md"
              >
                <Github className="w-4 h-4" />
                View Source
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-neutral-200 text-neutral-700 rounded-xl text-sm font-medium hover:border-neutral-300 hover:bg-neutral-50 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
