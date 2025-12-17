'use client';

import { motion } from 'framer-motion';
import { Award, Calendar, FileText, UserCircle } from 'lucide-react';

const achievements = [
  {
    rank: '2nd Place',
    eventType: '24-Hour Datathon',
    project: 'DataNyx (FinTech Track)',
    organization: 'AWS Cloud Club MJCET & IEEE SMC',
    date: 'November 2025',
    role: 'App Developer',
    description: 'Built an AI-powered financial stability app with predictive insights and real-time budget tracking.',
    techStack: ['React Native', 'Supabase', 'ML Integration'],
  },
  {
    rank: '2nd Place',
    eventType: 'Inter-College Exhibition',
    project: 'SwiftBytes (Project Exhibition)',
    organization: 'Envisage, MJCET',
    date: 'July 2025',
    role: 'Lead Developer',
    description: 'Led development of a smart canteen management platform with high performance and seamless UX.',
    techStack: ['AWS Deployment', 'Performance Optimization'],
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="min-h-screen py-20 px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        {/* Refined Header - Authority Without Noise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-semibold text-neutral-900 mb-3 tracking-tight">
            Achievements & Recognition
          </h2>
          
          {/* Thin divider - muted gold accent */}
          <div className="flex justify-center mb-6">
            <div className="w-14 h-0.5 bg-[#C9A24D]" />
          </div>
          
          <p className="text-sm text-neutral-500 max-w-[60%] mx-auto leading-relaxed">
            Awards and milestones that mark professional growth and technical excellence
          </p>
        </motion.div>

        {/* Awards Grid - Increased horizontal gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.project}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileTap={{ scale: 0.98 }}
              className="group"
            >
              {/* Achievement Card - Premium Design with Vertical Guide */}
              <div className="relative rounded-xl p-7 shadow-sm hover:shadow-md hover:-translate-y-3 transition-all duration-300 h-full flex gap-5 bg-[#F9FAFB] border border-neutral-200">
                {/* Trophy Icon - Left side */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FAF8F3] rounded-lg flex items-center justify-center border border-[#E6DCC8]">
                    <Award className="w-6 h-6 text-[#C9A24D] stroke-[1.5]" />
                  </div>
                </div>
                
                
                {/* Content Column */}
                <div className="flex-1">
                  
                  {/* Elevated Achievement Badge - Top pill with hierarchy */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAF8F3] rounded-full mb-4 border-2 border-[#C9A24D]">
                    <Award className="w-4 h-4 text-[#C9A24D]" />
                    <span className="text-sm font-bold text-[#C9A24D]">{achievement.rank}</span>
                    <span className="text-[#C9A24D]">•</span>
                    <span className="text-sm text-[#1C1C1C]">{achievement.eventType}</span>
                  </div>
                  
                  {/* Project Title - Main heading with medium weight */}
                  <h3 className="text-lg font-medium text-slate-900 mb-2">
                    {achievement.project}
                  </h3>
                  
                  {/* Organization + Date - Same line */}
                  <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
                    <span>{achievement.organization}</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-500">{achievement.date}</span>
                  </div>
                  
                  {/* Role Tag - Pill-style emphasis (intentional, not system-generated) */}
                  <div className="inline-block px-3 py-1.5 bg-white text-[#1C1C1C] text-xs font-medium rounded-full border border-[#C9A24D] mb-3">
                    {achievement.role}
                  </div>
                  
                  {/* Description - Increased line-height for readability */}
                  <p className="text-sm text-slate-600 leading-[1.7] mb-4">
                    {achievement.description}
                  </p>
                  
                  {/* Tech Stack - Skill Chips Row (border-only, no fill) */}
                  <div className="flex flex-wrap gap-2">
                    {achievement.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs text-[#334155] border border-[#CBD5E1] rounded-full bg-transparent hover:bg-slate-50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
