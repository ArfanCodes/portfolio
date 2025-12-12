'use client';

import { motion, useInView } from 'framer-motion';
import { Award, Star, Trophy, Target, Sparkles, Medal } from 'lucide-react';
import { useRef } from 'react';

const achievements = [
  {
    icon: Trophy,
    title: 'DataNyx (FinTech Track)',
    placement: '2nd Place',
    placementColor: 'silver', // for badge styling
    organization: 'AWS Cloud Club MJCET & IEEE SMC',
    date: 'November 2025',
    description: 'Recognized for building DataNyx, an AI-powered financial stability app leveraging React Native, Supabase, and machine-learning-driven insights.',
  },
  {
    icon: Trophy,
    title: 'SwiftBytes (Project Exhibition)',
    placement: '2nd Place',
    placementColor: 'silver',
    organization: 'Envisage, MJCET',
    date: 'July 2025',
    description: 'Awarded for leading the development of SwiftBytes, a smart canteen management platform deployed using AWS and designed for high performance and usability.',
  },
];

export default function AchievementsSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: false, margin: '-100px' });

  return (
    <section id="achievements" className="pt-16 pb-32 px-6 lg:px-8 bg-neutral-50 relative overflow-hidden">
      {/* Soft Gold-Tinted Background Band */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-orange-50/20 to-yellow-50/30 pointer-events-none" />
      
      {/* Subtle Sparkle Texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6l2-6z' fill='%23f59e0b' fill-opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header with Star Accent */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
            </motion.div>
            <h2 className="text-5xl lg:text-6xl font-bold text-neutral-900">
              Achievements & Recognition
            </h2>
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed"
            style={{ letterSpacing: '0.02em' }}
          >
            Awards and milestones that mark my professional growth
          </motion.p>
        </motion.div>

        {/* Awards Grid - Cohesive Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
          {achievements.map((achievement, index) => (
            <AchievementCard 
              key={achievement.title} 
              achievement={achievement} 
              index={index}
            />
          ))}
        </div>

        {/* Closing Summary Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-sm text-neutral-500 italic flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            These achievements reflect my commitment to engineering excellence
            <Sparkles className="w-4 h-4 text-amber-500" />
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Separate component for achievement cards
function AchievementCard({ 
  achievement, 
  index 
}: { 
  achievement: typeof achievements[0]; 
  index: number;
}) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, margin: '-100px' });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white/90 backdrop-blur-sm rounded-[22px] p-8 border border-neutral-200/60 hover:border-amber-200 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(251,191,36,0.15)] relative overflow-hidden h-full flex flex-col"
    >
      {/* Soft Gradient Circle Background */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-amber-100/40 to-orange-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-yellow-100/40 to-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="flex items-start gap-5 relative z-10">
        {/* Trophy Icon in Dedicated Space */}
        <div className="flex-shrink-0">
          <div className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-200/50 shadow-sm">
            <achievement.icon className="w-7 h-7 text-amber-600" />
          </div>
        </div>

        <div className="flex-1">
          {/* Placement Badge */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="px-3 py-1 bg-gradient-to-r from-slate-100 to-slate-200 border border-slate-300/60 rounded-full flex items-center gap-1.5 shadow-sm">
                <Medal className="w-3.5 h-3.5 text-slate-600" />
                <span className="text-xs font-semibold text-slate-700">{achievement.placement}</span>
              </div>
            </div>
          </div>

          {/* Title - Larger and Bolder */}
          <h3 className="text-xl font-bold text-neutral-900 mb-3 leading-tight">
            {achievement.title}
          </h3>

          {/* Organization */}
          <p className="text-sm text-neutral-600 font-medium mb-2 tracking-wide" style={{ letterSpacing: '0.01em' }}>
            {achievement.organization}
          </p>

          {/* Date - Softer Gray */}
          <p className="text-xs text-neutral-400 mb-4">
            {achievement.date}
          </p>

          {/* Description - Better Line Height and Width */}
          <p className="text-sm text-neutral-600 leading-relaxed max-w-md" style={{ lineHeight: '1.7' }}>
            {achievement.description}
          </p>
        </div>
      </div>

      {/* Subtle Gold Accent Border on Hover */}
      <div className="absolute inset-0 rounded-[22px] border-2 border-amber-400/0 group-hover:border-amber-400/20 transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
}
