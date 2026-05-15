'use client';

import { motion } from 'framer-motion';
import { Calendar, Target, Users, TrendingUp, Cloud, Award, Sparkles, MapPin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface KeyOutcome {
  icon: LucideIcon;
  text: string;
}

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  isLeadership: boolean;
  isOngoing: boolean;
  tags: string[];
  impactSummary: string;
  keyOutcomes: KeyOutcome[];
}

const experiences: Experience[] = [
  {
    title: 'Technical Head',
    company: 'IEEE Computational Intelligence Society, MJCET',
    location: 'Hyderabad, India',
    period: 'Oct 2025 – Present',
    isLeadership: true,
    isOngoing: true,
    tags: ['Leadership', 'Tech Strategy', 'Community'],
    impactSummary: 'As the Technical Head of IEEE-CIS MJCET, I oversee all technical initiatives within the chapter. I lead the student tech team, design hands-on learning experiences, and help foster a strong developer community on campus.',
    keyOutcomes: [
      { icon: Target, text: 'Directed technical strategy for club events, workshops, and community programs' },
      { icon: Users, text: 'Led and mentored student workshop in app development and project-building' },
      { icon: TrendingUp, text: 'Collaborated with faculty and student committees to grow chapter reach and engagement' },
    ],
  },
  {
    title: 'Cloud Core Member',
    company: 'Google Developer Groups on Campus (GDSC MJCET)',
    location: 'Hyderabad, India',
    period: 'Nov 2025 – Present',
    isLeadership: false,
    isOngoing: true,
    tags: ['Cloud Computing', 'Workshops', 'Mentorship'],
    impactSummary: 'Part of the core Cloud team at GDSC MJCET, contributing to cloud-focused workshops, technical sessions, and community building initiatives.',
    keyOutcomes: [
      { icon: Cloud, text: 'Collaborate with cloud team on technical workshops' },
      { icon: Users, text: 'Support community learning initiatives' },
    ],
  },
];

const impactStats = [
  { label: 'Leadership Roles', value: '2', icon: Award },
  { label: 'Workshops Led', value: '1+', icon: Users },
  { label: 'Communities', value: '2', icon: Sparkles },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="surface-warm relative py-20 lg:py-28 text-[#1A1614] overflow-hidden"
    >

      <div className="container mx-auto px-6 lg:px-10 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#E8E2D9] shadow-[0_2px_10px_-4px_rgba(60,40,20,0.08)] mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C77F45]" />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#5A5550] font-sora">
              Professional Journey
            </span>
          </div>

          <h2 className="font-sora font-semibold tracking-[-0.025em] leading-[1.02] text-[#1A1614] text-4xl sm:text-5xl lg:text-[3.5rem]">
            Experience <span className="text-[#C77F45]">&amp; Impact</span>
          </h2>

          <p className="mt-5 text-lg text-[#5A5550] max-w-2xl leading-relaxed">
            Leadership, technical mentorship, and community-driven impact across multiple student developer groups.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-16 lg:mb-20"
        >
          {impactStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="group relative flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-[#EFE3D0] shadow-[0_2px_10px_-4px_rgba(70,45,25,0.06)] hover:shadow-[0_12px_28px_-14px_rgba(70,45,25,0.2)] hover:border-[#E0CFB5] transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-xl bg-[#F5EFE6] flex items-center justify-center text-[#7A5A3F] group-hover:bg-[#1A1614] group-hover:text-[#E8B97E] transition-colors duration-300">
                  <Icon size={18} strokeWidth={1.8} />
                </div>
                <div className="min-w-0">
                  <div className="font-sora text-[1.5rem] sm:text-[1.75rem] font-semibold tracking-tight text-[#1A1614] leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10.5px] sm:text-[11px] font-semibold tracking-[0.14em] uppercase text-[#8B8680]">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Experience entries */}
        <div className="flex flex-col gap-10 lg:gap-12">
          {experiences.map((exp, index) => (
            <TimelineItem key={index} data={exp} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

function TimelineItem({ data, index }: { data: Experience; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="relative group/card"
    >
      {/* Ambient warm bloom behind the card — desktop only (filters are expensive on mobile) */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute -inset-8 -z-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"
        style={{
          background:
            'radial-gradient(60% 60% at 20% 25%, rgba(232,185,126,0.18), transparent 70%), radial-gradient(50% 60% at 85% 75%, rgba(199,127,69,0.10), transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="hidden lg:block absolute -inset-6 -z-10"
        style={{
          background:
            'radial-gradient(45% 60% at 18% 20%, rgba(242,229,210,0.55), transparent 70%)',
        }}
      />

      {/* Card */}
      <article className="relative rounded-[26px] bg-white border border-[#EFE3D0] shadow-[0_8px_28px_-14px_rgba(70,45,25,0.16),0_2px_10px_-6px_rgba(70,45,25,0.08)] group-hover/card:shadow-[0_28px_60px_-22px_rgba(70,45,25,0.28),0_8px_20px_-10px_rgba(70,45,25,0.12)] group-hover/card:-translate-y-0.5 group-hover/card:border-[#E0CFB5] transition-all duration-500 overflow-hidden">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-5 p-5 sm:p-6 lg:p-7">

          {/* LEFT — Meta column */}
          <div className="lg:col-span-4 flex flex-col gap-3.5">

            {/* Period + status chips */}
            <div className="flex flex-wrap items-center gap-1.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F5EFE6] border border-[#EFE3D0] text-[11.5px] font-semibold text-[#7A5A3F]">
                <Calendar size={11} strokeWidth={2.2} />
                {data.period}
              </div>
              {data.isOngoing && (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#E8F5EC] border border-[#CFE5D6] text-[11.5px] font-semibold text-[#2F7A4A]">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#2F7A4A] animate-ping opacity-70" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#2F7A4A]" />
                  </span>
                  Ongoing
                </div>
              )}
              {data.isLeadership && (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1A1614] text-white text-[11.5px] font-semibold">
                  <Award size={11} strokeWidth={2.2} className="text-[#E8B97E]" />
                  Leadership
                </div>
              )}
            </div>

            {/* Organization block */}
            <div className="pt-1">
              <div className="text-[9.5px] font-semibold tracking-[0.18em] uppercase text-[#A39A8E] font-sora mb-1.5">
                Organization
              </div>
              <div className="text-[14px] font-semibold text-[#7A5A3F] leading-snug">
                {data.company}
              </div>
              <div className="inline-flex items-center gap-1.5 text-[12.5px] text-[#8B8680] font-medium mt-1.5">
                <MapPin size={12} strokeWidth={2} />
                {data.location}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {data.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2 py-0.5 text-[11px] font-medium text-[#5A5550] bg-white border border-[#E8E2D9] rounded-full hover:bg-[#FAF6EF] hover:border-[#D9CFBE] hover:text-[#1A1614] transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — Title + content */}
          <div className="lg:col-span-8 flex flex-col">

            {/* Title */}
            <h3 className="font-sora font-semibold tracking-[-0.02em] text-[#1A1614] text-[1.6rem] sm:text-[1.85rem] lg:text-[2rem] leading-[1.05]">
              {data.title}
            </h3>

            {/* Hairline accent */}
            <div className="mt-3 mb-4 flex items-center gap-2">
              <span className="h-[2px] w-8 rounded-full bg-[#C77F45]" />
              <span className="h-[2px] w-2 rounded-full bg-[#C77F45]/30" />
            </div>

            {/* Impact Summary */}
            <p className="text-[14.5px] lg:text-[15px] text-[#4A4540] leading-[1.7] mb-5 max-w-[60ch]">
              {data.impactSummary}
            </p>

            {/* Key Outcomes header */}
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={12} strokeWidth={2.2} className="text-[#C77F45]" />
              <h4 className="text-[10.5px] font-semibold tracking-[0.2em] uppercase text-[#7A5A3F] font-sora">
                Key Outcomes
              </h4>
              <span className="flex-1 h-[1px] bg-gradient-to-r from-[#EFE3D0] to-transparent ml-1" />
            </div>

            {/* Key Outcomes — compact stacked rows with hairline separators */}
            <ul className="flex flex-col">
              {data.keyOutcomes.map((item, i) => {
                const Icon = item.icon;
                const isLast = i === data.keyOutcomes.length - 1;
                return (
                  <li
                    key={i}
                    className={`group/outcome flex items-start gap-3 py-2.5 ${isLast ? '' : 'border-b border-dashed border-[#EFE3D0]'}`}
                  >
                    <div className="w-7 h-7 shrink-0 rounded-lg bg-[#F5EFE6] flex items-center justify-center text-[#7A5A3F] group-hover/outcome:bg-[#1A1614] group-hover/outcome:text-[#E8B97E] transition-colors duration-300">
                      <Icon size={12.5} strokeWidth={2} />
                    </div>
                    <span className="text-[13.5px] lg:text-[14px] text-[#3A3530] leading-[1.55] pt-1">
                      {item.text}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </article>
    </motion.div>
  );
}
