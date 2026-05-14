'use client';

import { motion } from 'framer-motion';
import { Trophy, Medal, Calendar, Users, Sparkles as SparklesIcon } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Achievement {
  rank: string;
  eventType: string;
  project: string;
  organization: string;
  date: string;
  role: string;
  description: string;
  techStack: string[];
  icon: LucideIcon;
  color: string;
}

const achievements: Achievement[] = [
  {
    rank: '2nd Place',
    eventType: '24-Hour Datathon',
    project: 'DataNyx (FinTech Track)',
    organization: 'AWS Cloud Club MJCET & IEEE SMC',
    date: 'November 2025',
    role: 'Full Stack & Mobile Developer',
    description: 'Built an AI-powered financial stability app with predictive insights and real-time budget tracking.',
    techStack: ['React Native', 'Supabase', 'ML Integration'],
    icon: Trophy,
    color: 'from-emerald-500 to-teal-600'
  },
  {
    rank: '2nd Place',
    eventType: 'Inter-College Exhibition',
    project: 'SwiftBytes (Project Exhibition)',
    organization: 'Envisage, MJCET',
    date: 'July 2025',
    role: 'Lead Full Stack & Mobile Developer',
    description: 'Led development of a smart canteen management platform with high performance and seamless UX.',
    techStack: ['AWS Deployment', 'Performance Optimization'],
    icon: Medal,
    color: 'from-blue-500 to-indigo-600'
  },
];

export default function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="relative py-20 lg:py-28 bg-[#FAF8F5] text-[#1A1614] overflow-hidden"
    >
      {/* Soft warm ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[8%] right-[-10%] w-[560px] h-[560px] rounded-full bg-[#F2E5D2] blur-[150px] opacity-55" />
        <div className="absolute bottom-[8%] left-[-10%] w-[560px] h-[560px] rounded-full bg-[#EFE4D4] blur-[150px] opacity-50" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #1A1614 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-10 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 lg:mb-20"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#E8E2D9] shadow-[0_2px_10px_-4px_rgba(60,40,20,0.08)] mb-6">
                <Trophy size={12} strokeWidth={2.2} className="text-[#C77F45]" />
                <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#5A5550] font-sora">
                  HALL OF FAME
                </span>
              </div>

              <h2 className="font-sora font-semibold tracking-[-0.025em] leading-[1.02] text-[#1A1614] text-4xl sm:text-5xl lg:text-[3.5rem]">
                Recognition <span className="text-[#C77F45]">&amp; Awards</span>
              </h2>

              <p className="mt-5 text-lg text-[#5A5550] max-w-2xl leading-relaxed">
                Milestones marking technical excellence and competitive programming success.
              </p>
            </div>

            <div className="hidden lg:flex items-center gap-3 text-[#8B8680] text-sm font-medium font-sora pb-2 shrink-0">
              <span className="h-[1px] w-10 bg-[#D9CFBE]" />
              <span>{String(achievements.length).padStart(2, '0')} accolades</span>
            </div>
          </div>
        </motion.div>

        {/* Award Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {achievements.map((achievement, index) => (
            <AwardCard key={index} data={achievement} index={index} />
          ))}
        </div>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-3 sm:gap-4"
        >
          <StatCard value="2" label="Total Awards" icon={Trophy} />
          <StatCard value="2nd" label="Place Rankings" icon={Medal} />
          <StatCard value="2025" label="Excellence Year" icon={SparklesIcon} />
        </motion.div>

      </div>
    </section>
  );
}

function AwardCard({ data, index }: { data: Achievement; index: number }) {
  const Icon = data.icon;
  // Parse rank for medallion display ("2nd Place" → "2nd")
  const rankShort = data.rank.split(' ')[0];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group relative rounded-[28px] bg-white border border-[#EFE3D0] shadow-[0_4px_20px_-10px_rgba(70,45,25,0.12)] hover:shadow-[0_28px_56px_-22px_rgba(70,45,25,0.3)] hover:border-[#E0CFB5] transition-all duration-500 overflow-hidden"
    >
      {/* Visual hero strip — gradient backplate with medallion */}
      <div className="relative h-[200px] sm:h-[220px] overflow-hidden">
        {/* Gradient backplate */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAF1E2] via-[#F5E7D2] to-[#EFDFC4]" />

        {/* Decorative concentric arcs */}
        <svg
          className="absolute inset-0 w-full h-full text-[#C77F45] opacity-[0.08]"
          viewBox="0 0 600 220"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <circle cx="500" cy="110" r="120" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="500" cy="110" r="180" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="500" cy="110" r="240" fill="none" stroke="currentColor" strokeWidth="0.75" />
        </svg>

        {/* Soft glow behind medallion */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 w-44 h-44 rounded-full bg-white/60 blur-2xl" />

        {/* Editorial index */}
        <div className="absolute top-5 left-6 flex items-center gap-3">
          <span className="font-sora text-[11px] font-semibold tracking-[0.22em] text-[#7A5A3F]/70">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="h-[1px] w-10 bg-[#7A5A3F]/30" />
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.16em] uppercase text-[#7A5A3F] font-sora">
            <span className="h-1 w-1 rounded-full bg-[#C77F45]" />
            {data.eventType}
          </span>
        </div>

        {/* Date chip top-right */}
        <div className="absolute top-5 right-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white shadow-[0_4px_12px_-4px_rgba(70,45,25,0.15)] text-[11.5px] font-semibold text-[#5A5550]">
          <Calendar size={11} strokeWidth={2.2} className="text-[#A39A8E]" />
          {data.date}
        </div>

        {/* Medallion + rank — bottom-left composition */}
        <div className="absolute left-6 bottom-5 flex items-end gap-4">
          {/* Medallion */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="relative shrink-0"
          >
            {/* Outer ring */}
            <div className="w-[88px] h-[88px] sm:w-[96px] sm:h-[96px] rounded-full bg-gradient-to-br from-[#F8E2BB] via-[#E8B97E] to-[#C77F45] p-[3px] shadow-[0_14px_30px_-12px_rgba(199,127,69,0.55)]">
              {/* Inner disc */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#FFF7EA] to-[#F2DEC0] flex flex-col items-center justify-center relative">
                <Icon size={22} strokeWidth={1.8} className="text-[#7A5A3F] mb-0.5" />
                <span className="font-sora text-[15px] sm:text-base font-bold tracking-tight text-[#1A1614] leading-none">
                  {rankShort}
                </span>
              </div>
            </div>
            {/* Subtle highlight dot */}
            <span className="absolute top-2 left-3 w-2 h-2 rounded-full bg-white/80 blur-[1px]" />
          </motion.div>

          {/* Rank label */}
          <div className="pb-2">
            <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#7A5A3F]/80 font-sora mb-0.5">
              Ranking
            </div>
            <div className="font-sora text-[15px] font-bold tracking-tight text-[#1A1614] leading-none">
              {data.rank}
            </div>
          </div>
        </div>

        {/* Watermark icon — large, faded, top-right */}
        <div className="absolute -top-6 -right-6 opacity-[0.06] group-hover:opacity-[0.09] group-hover:rotate-3 transition-all duration-700 pointer-events-none">
          <Icon size={180} strokeWidth={1} className="text-[#7A5A3F]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6 sm:p-7 lg:p-8 flex flex-col">

        {/* Project title */}
        <h3 className="font-sora font-semibold tracking-[-0.02em] text-[#1A1614] text-2xl sm:text-[1.75rem] lg:text-[1.875rem] leading-[1.1] mb-4 group-hover:text-[#2A2420] transition-colors">
          {data.project}
        </h3>

        {/* Organization */}
        <div className="flex items-start gap-2 mb-5">
          <Users size={14} strokeWidth={2} className="text-[#A39A8E] mt-0.5 shrink-0" />
          <span className="text-[14px] text-[#5A5550] font-medium leading-snug">
            {data.organization}
          </span>
        </div>

        {/* Description */}
        <p className="text-[15px] lg:text-[15.5px] text-[#3A3530] leading-[1.7] mb-7">
          {data.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-[#F2E9D9]">
          {data.techStack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center px-2.5 py-1 text-[11.5px] font-medium text-[#5A5550] bg-white border border-[#E8E2D9] rounded-full hover:bg-[#FAF6EF] hover:border-[#D9CFBE] hover:text-[#1A1614] transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function StatCard({
  value,
  label,
  icon: Icon,
}: {
  value: string;
  label: string;
  icon: LucideIcon;
}) {
  return (
    <div className="group relative flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-[#EFE3D0] shadow-[0_2px_10px_-4px_rgba(70,45,25,0.06)] hover:shadow-[0_12px_28px_-14px_rgba(70,45,25,0.2)] hover:border-[#E0CFB5] transition-all duration-300">
      <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-xl bg-[#F5EFE6] flex items-center justify-center text-[#7A5A3F] group-hover:bg-[#1A1614] group-hover:text-[#E8B97E] transition-colors duration-300">
        <Icon size={18} strokeWidth={1.8} />
      </div>
      <div className="min-w-0">
        <div className="font-sora text-[1.5rem] sm:text-[1.75rem] font-semibold tracking-tight text-[#1A1614] leading-none mb-1">
          {value}
        </div>
        <div className="text-[10.5px] sm:text-[11px] font-semibold tracking-[0.14em] uppercase text-[#8B8680]">
          {label}
        </div>
      </div>
    </div>
  );
}
