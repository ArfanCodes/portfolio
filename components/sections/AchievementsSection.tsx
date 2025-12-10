'use client';

import { motion } from 'framer-motion';
import { Award, Star, Trophy, Target } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: '2nd Place – DataNyx (FinTech Track)',
    organization: 'AWS Cloud Club MJCET & IEEE SMC',
    date: 'November 2025',
    description: 'Recognized for building DataNyx, an AI-powered financial stability app leveraging React Native, Supabase, and machine-learning-driven insights.',
  },
  {
    icon: Trophy,
    title: '2nd Place – SwiftBytes (Project Exhibition)',
    organization: 'Envisage, MJCET',
    date: 'July 2025',
    description: 'Awarded for leading the development of SwiftBytes, a smart canteen management platform deployed using AWS and designed for high performance and usability.',
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="min-h-screen py-20 px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Awards and milestones that mark my professional growth
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 border border-neutral-200 hover:border-neutral-300 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl">
                  <achievement.icon className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-neutral-600 font-medium mb-1">
                    {achievement.organization}
                  </p>
                  <p className="text-xs text-neutral-500 mb-2">
                    {achievement.date}
                  </p>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
