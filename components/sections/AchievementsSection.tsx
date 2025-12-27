'use client';

import { motion } from 'framer-motion';
import { Award, Trophy, Medal, Star, Calendar, Users } from 'lucide-react';

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
    icon: Trophy,
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
    icon: Medal,
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="min-h-screen py-24 px-6 lg:px-8 bg-gradient-to-br from-[#FFF9EB] via-white to-[#FFF9EB] relative overflow-hidden">
      {/* Background decoration */}
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
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-[#5D0D18] to-[#4A0A12] text-white rounded-full text-sm font-semibold shadow-lg">
              Recognition & Awards
            </span>
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 tracking-tight">
            Achievements
          </h2>
          
          <p className="text-lg text-[#555555] max-w-2xl mx-auto leading-relaxed">
            Awards and milestones that mark professional growth and technical excellence
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.project}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-xl border-2 border-[#5D0D18] hover:shadow-2xl transition-all duration-500 h-full bg-gradient-to-br from-white to-[#9FB2AC]/10">
                  {/* Rank Badge - Top Right */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#5D0D18] to-[#4A0A12] text-white px-6 py-3 rounded-full shadow-xl">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      <span className="text-base font-bold">{achievement.rank}</span>
                    </div>
                  </div>

                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
                    className="mb-6"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5D0D18] to-[#4A0A12] flex items-center justify-center shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  {/* Event Type */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border-2 border-[#9FB2AC]/30 mb-4">
                    <Star className="w-4 h-4 text-[#5D0D18]" />
                    <span className="text-sm font-semibold text-[#1A1A1A]">{achievement.eventType}</span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#1A1A1A] mb-4 group-hover:text-[#5D0D18] transition-colors duration-300">
                    {achievement.project}
                  </h3>

                  {/* Organization & Date */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-[#555555]">
                      <Users className="w-4 h-4" />
                      <span className="font-medium">{achievement.organization}</span>
                    </div>
                    <span className="text-neutral-400">•</span>
                    <div className="flex items-center gap-2 text-sm text-[#555555]">
                      <Calendar className="w-4 h-4" />
                      <span>{achievement.date}</span>
                    </div>
                  </div>

                  {/* Role Badge */}
                  <div className="inline-block px-4 py-2 bg-neutral-100 border border-[#9FB2AC]/30 rounded-full mb-6">
                    <span className="text-sm font-semibold text-[#1A1A1A]">{achievement.role}</span>
                  </div>

                  {/* Description */}
                  <p className="text-base text-[#1A1A1A] leading-relaxed mb-6 font-medium">
                    {achievement.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="pt-6 border-t-2 border-neutral-100">
                    <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {achievement.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs font-medium text-[#1A1A1A] bg-white border border-neutral-300 rounded-lg hover:border-[#5D0D18] hover:bg-[#9FB2AC]/10 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#9FB2AC]/30 text-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#5D0D18] to-[#4A0A12] flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <div className="text-4xl font-bold text-[#1A1A1A] mb-2">2</div>
            <div className="text-sm text-neutral-600 font-medium">Total Awards</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#9FB2AC]/30 text-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#5D0D18] to-[#4A0A12] flex items-center justify-center mx-auto mb-4">
              <Medal className="w-6 h-6 text-white" />
            </div>
            <div className="text-4xl font-bold text-[#1A1A1A] mb-2">2nd</div>
            <div className="text-sm text-neutral-600 font-medium">Place Rankings</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#9FB2AC]/30 text-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#5D0D18] to-[#4A0A12] flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div className="text-4xl font-bold text-[#1A1A1A] mb-2">2025</div>
            <div className="text-sm text-neutral-600 font-medium">Recent Year</div>
          </div>
        </motion.div>
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
