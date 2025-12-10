'use client';

import { motion } from 'framer-motion';
import { Github, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';

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
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-20 px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            A selection of my recent work showcasing various technologies and design approaches
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border-neutral-200 hover:border-neutral-300 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-neutral-900 mb-1">
                          {project.title}
                        </h3>
                        <p className="text-sm font-medium text-neutral-600 italic">
                          {project.tagline}
                        </p>
                      </div>
                      {project.award && (
                        <div className="ml-2 flex-shrink-0">
                          <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg">
                            <Award className="w-3 h-3 text-orange-600" />
                            <span className="text-xs font-semibold text-orange-700">Award</span>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="inline-block px-2 py-1 bg-neutral-100 rounded text-xs font-medium text-neutral-700">
                      {project.role}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-600 mb-4 leading-relaxed text-sm flex-1">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-neutral-700 mb-2">Key Highlights:</p>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start text-xs text-neutral-600">
                          <span className="inline-block w-1 h-1 bg-neutral-400 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium bg-neutral-50 text-neutral-700 rounded-lg border border-neutral-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-neutral-100">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Source Code
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
