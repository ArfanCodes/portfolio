'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, Target, Users, TrendingUp, Cloud, Brain, Award } from 'lucide-react';
import { sectionHandoff } from '@/lib/animation-utils';

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
  { label: 'Roles', value: '2' },
  { label: 'Workshops', value: '1+' },
  { label: 'Focus Areas', value: 'Leadership & Cloud' },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen py-20 px-6 lg:px-8 bg-white">
      <motion.div
        {...sectionHandoff.experience}
        className="max-w-6xl mx-auto"
      >
        {/* Refined Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-semibold text-neutral-900 tracking-tight mb-3">
            Work Experience
          </h2>
          
          {/* Muted gold divider */}
          <div className="flex justify-center mb-6">
            <div className="w-14 h-0.5 bg-[#C9A24D]" />
          </div>
          
          <p className="text-sm text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            Leadership, technical mentorship, and community-driven impact
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Timeline + Experience Cards */}
          <div className="lg:col-span-8">
            <div className="relative">
              {/* Subtle Timeline Spine - Desktop Only with Reveal Animation */}
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="hidden lg:block absolute left-6 top-8 w-[1px] bg-[#E5E7EB] origin-top"
              />

              {/* Year Marker */}
              <div className="hidden lg:flex items-center gap-3 mb-8 ml-2">
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">2025</span>
              </div>

              <div className="space-y-8">
                {experiences.map((exp, index) => {
                  return (
                    <motion.div
                      key={exp.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="relative"
                    >
                      {/* Timeline Dot - Desktop Only */}
                      <div className="hidden lg:block absolute left-6 top-8 transform -translate-x-1/2 z-10">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                          className={`w-3 h-3 rounded-full border-2 ${
                            exp.isLeadership
                              ? 'bg-[#C9A24D] border-[#C9A24D]'
                              : 'bg-[#1F2937] border-[#1F2937]'
                          }`}
                        />
                      </div>

                      {/* Experience Card */}
                      <div className="lg:ml-16">
                        <div
                          className={`relative bg-white rounded-xl p-6 transition-all duration-300 border border-neutral-200 ${
                            exp.isLeadership
                              ? 'border-l-[3px] border-l-[#C9A24D] shadow-md hover:shadow-lg'
                              : 'shadow-sm hover:shadow-md'
                          }`}
                        >
                          {/* Mobile Year Marker */}
                          <div className="lg:hidden mb-3">
                            <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">2025</span>
                          </div>

                          {/* Role Title - Bold, Largest */}
                          <div className="flex items-start gap-2 mb-2">
                            {/* Mobile Timeline Indicator */}
                            <div className="lg:hidden flex-shrink-0 mt-1">
                              <div
                                className={`w-2 h-2 rounded-full ${
                                  exp.isLeadership ? 'bg-[#C9A24D]' : 'bg-[#1F2937]'
                                }`}
                              />
                            </div>
                            <h3 className="text-xl font-bold text-[#1F2937] flex-1">
                              {exp.title}
                            </h3>
                          </div>

                          {/* Organization & Location */}
                          <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-600 mb-3 lg:ml-0 ml-4">
                            <span className="font-medium">{exp.company}</span>
                            <span className="text-neutral-400">•</span>
                            <span>{exp.location}</span>
                          </div>

                          {/* Duration & Status - Outline Pills */}
                          <div className="flex flex-wrap items-center gap-3 mb-3 lg:ml-0 ml-4">
                            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-300">
                              <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                              <span className="text-xs font-medium text-[#1F2937]">{exp.period}</span>
                            </div>

                            {exp.isOngoing && (
                              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-green-300">
                                <div className="w-2 h-2 rounded-full bg-[#16A34A]" />
                                <span className="text-xs font-medium text-[#1F2937]">Active</span>
                              </div>
                            )}

                            {exp.isLeadership && (
                              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#C9A24D]">
                                <Award className="w-3.5 h-3.5 text-[#C9A24D]" />
                                <span className="text-xs font-medium text-[#1F2937]">Leadership</span>
                              </div>
                            )}
                          </div>

                          {/* Tags - Outline Only */}
                          <div className="flex flex-wrap gap-2 mb-4 lg:ml-0 ml-4">
                            {exp.tags.map((tag, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 text-xs font-medium rounded-full border border-neutral-300 text-[#1F2937]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Impact Summary */}
                          <p className="text-sm text-neutral-700 leading-relaxed mb-4 font-medium lg:ml-0 ml-4">
                            {exp.impactSummary}
                          </p>

                          {/* Key Outcomes - Only for Technical Head */}
                          {index === 0 && exp.keyOutcomes && (
                            <div className="space-y-2.5 lg:ml-0 ml-4">
                              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">
                                Key Outcomes
                              </p>
                              {exp.keyOutcomes.map((outcome, i) => {
                                const Icon = outcome.icon;
                                return (
                                  <div key={i} className="flex items-start gap-3">
                                    <Icon className="w-4 h-4 text-[#1F2937] flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-neutral-700 leading-relaxed">
                                      {outcome.text}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Impact Summary with Divider */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 hidden lg:block"
          >
            <div className="sticky top-24">
              {/* Subtle Divider */}
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#E5E7EB]" />

              <div className="pl-8">
                {/* Impact Stats Card */}
                <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                  <div className="flex items-center gap-2 mb-6">
                    <Target className="w-5 h-5 text-[#C9A24D]" />
                    <h4 className="text-sm font-bold text-[#1F2937] uppercase tracking-wide">
                      Impact Summary
                    </h4>
                  </div>

                  <div className="space-y-5">
                    {impactStats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="border-b border-neutral-200 pb-4 last:border-0 last:pb-0"
                      >
                        <div className="text-2xl font-bold text-[#1F2937] mb-1">
                          {stat.value}
                        </div>
                        <div className="text-xs text-neutral-600 font-medium">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="mt-6 p-5 bg-white rounded-xl border border-neutral-200">
                  <Brain className="w-6 h-6 text-[#C9A24D] mb-3" />
                  <p className="text-sm text-neutral-600 leading-relaxed italic">
                    "I enjoy building technical communities as much as building products."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:hidden mt-8"
        >
          <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
            <div className="flex items-center gap-2 mb-5">
              <Target className="w-5 h-5 text-[#C9A24D]" />
              <h4 className="text-sm font-bold text-[#1F2937] uppercase tracking-wide">
                Impact Summary
              </h4>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {impactStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-[#1F2937] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-neutral-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
