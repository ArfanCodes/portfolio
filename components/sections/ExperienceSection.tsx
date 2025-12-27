'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, Target, Users, TrendingUp, Cloud, Brain, Award, Sparkles } from 'lucide-react';

const experiences = [
  {
    title: 'Technical Head',
    company: 'IEEE Computational Intelligence Society, MJCET',
    location: 'Hyderabad, India',
    period: 'Oct 2025 – Present',
    isLeadership: true,
    isOngoing: true,
    tags: ['Leadership Role', 'Student Community'],
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
    tags: ['Cloud Team', 'Technical Strategy'],
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
    <section id="experience" className="min-h-screen py-24 px-6 lg:px-8 bg-gradient-to-br from-white via-[#FFF9EB] to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-96 h-96 bg-[#9FB2AC]/15 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-[#5D0D18]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
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
              Professional Journey
            </span>
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 tracking-tight">
            Work Experience
          </h2>
          
          <p className="text-lg text-[#555555] max-w-2xl mx-auto leading-relaxed">
            Leadership, technical mentorship, and community-driven impact
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left - Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline line */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="hidden lg:block absolute left-0 top-0 w-1 bg-gradient-to-b from-[#5D0D18] via-[#9FB2AC]/50 to-[#9FB2AC]/20 origin-top"
              />

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative lg:pl-12"
                  >
                    {/* Timeline dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
                      className="hidden lg:block absolute left-0 top-8 -translate-x-1/2"
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        exp.isLeadership 
                          ? 'bg-gradient-to-r from-[#5D0D18] to-[#4A0A12] shadow-lg' 
                          : 'bg-[#9FB2AC] shadow-md'
                      }`}>
                        <Briefcase className="w-4 h-4 text-white" />
                      </div>
                    </motion.div>

                    {/* Experience Card */}
                    <div className={`
                      relative bg-white rounded-2xl p-8 shadow-xl border-2
                      ${exp.isLeadership 
                        ? 'border-[#5D0D18] bg-gradient-to-br from-white to-[#9FB2AC]/10' 
                        : 'border-[#9FB2AC]/30'
                      }
                      hover:shadow-2xl transition-all duration-500 group
                    `}>
                      {/* Leadership badge */}
                      {exp.isLeadership && (
                        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#5D0D18] to-[#4A0A12] text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                          ⭐ LEADERSHIP
                        </div>
                      )}

                      {/* Header */}
                      <div className="mb-6">
                        <h3 className="text-2xl lg:text-3xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#5D0D18] transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-base font-semibold text-[#555555] mb-2">
                          {exp.company}
                        </p>
                        <p className="text-sm text-neutral-500">
                          {exp.location}
                        </p>
                      </div>

                      {/* Badges */}
                      <div className="flex flex-wrap items-center gap-3 mb-6">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 border border-[#9FB2AC]/30">
                          <Calendar className="w-4 h-4 text-neutral-600" />
                          <span className="text-sm font-semibold text-[#1A1A1A]">{exp.period}</span>
                        </div>

                        {exp.isOngoing && (
                          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-sm font-semibold text-green-700">Active</span>
                          </div>
                        )}

                        {exp.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 text-sm font-medium rounded-full bg-white border border-neutral-300 text-[#1A1A1A] hover:border-[#5D0D18] transition-colors duration-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Impact Summary */}
                      <p className="text-base text-[#1A1A1A] leading-relaxed mb-6 font-medium">
                        {exp.impactSummary}
                      </p>

                      {/* Key Outcomes */}
                      {exp.keyOutcomes && (
                        <div className="space-y-3 p-5 bg-gradient-to-r from-[#9FB2AC]/10 to-[#9FB2AC]/5 rounded-xl border border-[#9FB2AC]/30">
                          <h4 className="text-xs font-bold text-[#5D0D18] uppercase tracking-wider mb-4">
                            Key Outcomes
                          </h4>
                          {exp.keyOutcomes.map((outcome, i) => {
                            const Icon = outcome.icon;
                            return (
                              <div key={i} className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white border border-[#9FB2AC]/30 flex items-center justify-center">
                                  <Icon className="w-4 h-4 text-[#5D0D18]" />
                                </div>
                                <span className="text-sm text-[#1A1A1A] leading-relaxed font-medium pt-1">
                                  {outcome.text}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Impact Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 space-y-6">
              {/* Stats Card */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#9FB2AC]/30">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#5D0D18] to-[#4A0A12] flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1A1A1A]">
                    Impact Summary
                  </h4>
                </div>

                <div className="space-y-6">
                  {impactStats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#9FB2AC]/10 to-[#9FB2AC]/5 rounded-xl border border-[#9FB2AC]/30"
                      >
                        <div className="w-12 h-12 rounded-xl bg-white border border-[#9FB2AC]/30 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-[#5D0D18]" />
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-[#1A1A1A] mb-1">
                            {stat.value}
                          </div>
                          <div className="text-sm text-neutral-600 font-medium">
                            {stat.label}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Quote Card */}
              <div className="bg-gradient-to-br from-[#5D0D18] to-[#4A0A12] rounded-2xl p-8 shadow-xl text-white">
                <Brain className="w-8 h-8 mb-4 opacity-80" />
                <p className="text-base leading-relaxed italic font-medium">
                  "I enjoy building technical communities as much as building products."
                </p>
              </div>
            </div>
          </motion.div>
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
