'use client';

import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Cpu, Cloud, Award, Users } from 'lucide-react';
import { useRef } from 'react';

const experiences = [
  {
    title: 'Technical Head',
    company: 'IEEE Computational Intelligence Society, MJCET',
    period: 'Oct 2025 – Present',
    description: 'As the Technical Head of IEEE-CIS MJCET, I oversee all technical initiatives within the chapter. I lead the student tech team, design hands-on learning experiences, and help foster a strong developer community on campus.',
    achievements: [
      'Directed technical strategy for club events, workshops, and community programs',
      'Led and mentored student workshop in app development and project-building',
      'Collaborated with faculty and student committees to grow chapter reach and engagement',
    ],
    roleType: 'leadership',
    tags: ['Leadership Role', 'Student Community'],
  },
  {
    title: 'Cloud Core Member',
    company: 'Google Developer Groups on Campus (GDSC MJCET)',
    period: 'Nov 2025 – Present',
    description: 'Part of the core Cloud team at GDSC MJCET, contributing to cloud-focused workshops, technical sessions, and community building initiatives.',
    achievements: [
      'Collaborate with cloud team on technical workshops',
      'Support community learning initiatives',
    ],
    roleType: 'cloud',
    tags: ['Cloud Team', 'Technical Strategy'],
  },
];

// Role-based color coding
const roleColors = {
  technical: { 
    bg: 'from-blue-50/30 to-blue-100/20',
    dot: 'bg-blue-500',
    glow: 'shadow-blue-500/20',
    border: 'border-l-blue-500/30',
    accent: 'bg-blue-500/10'
  },
  leadership: { 
    bg: 'from-purple-50/30 to-purple-100/20',
    dot: 'bg-purple-500',
    glow: 'shadow-purple-500/20',
    border: 'border-l-purple-500/30',
    accent: 'bg-purple-500/10'
  },
  cloud: { 
    bg: 'from-teal-50/30 to-teal-100/20',
    dot: 'bg-teal-500',
    glow: 'shadow-teal-500/20',
    border: 'border-l-teal-500/30',
    accent: 'bg-teal-500/10'
  },
};

export default function ExperienceSection() {
  const headerRef = useRef(null);
  const timelineRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: false, margin: '-100px' });
  const isTimelineInView = useInView(timelineRef, { once: false, margin: '-200px' });

  return (
    <section id="experience" className="min-h-screen py-20 px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Background Structure */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-50" />
      
      {/* Radial accents on left and right */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-teal-100/20 rounded-full blur-3xl pointer-events-none" />
      
      {/* Geometric wave pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <path d="M0,400 Q300,300 600,400 T1200,400 L1200,800 L0,800 Z" fill="currentColor" className="text-neutral-900" />
        </svg>
      </div>

      {/* Initials watermark */}
      <div className="absolute top-1/3 right-20 text-[150px] font-bold text-neutral-900/[0.015] select-none pointer-events-none">
        MA
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-neutral-300" />
            <Briefcase className="w-6 h-6 text-neutral-400" />
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-neutral-300" />
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-3">
            Work Experience
          </h2>
          
          {/* Accent underline */}
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full mx-auto mb-6" />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed tracking-wide"
          >
            My professional journey and the impact I've made along the way
          </motion.p>
        </motion.div>

        <div className="relative" ref={timelineRef}>
          {/* Stronger Gradient Column Behind Timeline */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-24 lg:w-40 transform lg:-translate-x-1/2 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-100/10 via-neutral-100/20 to-teal-100/10 rounded-full blur-2xl" />
          </div>
          
          {/* Strengthened Timeline Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isTimelineInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 transform lg:-translate-x-1/2 origin-top"
            style={{
              background: 'linear-gradient(to bottom, #d1d5db, #9ca3af, #d1d5db)',
              boxShadow: 'inset 0 0 2px rgba(0,0,0,0.1)'
            }}
          />

          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <ExperienceCard 
                key={exp.title} 
                experience={exp} 
                index={index}
                isTimelineInView={isTimelineInView}
              />
            ))}
          </div>
        </div>

        {/* Section Footer Transition */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center space-y-6"
        >
          {/* Decorative wave */}
          <svg className="w-full h-12 text-neutral-200" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0,30 Q300,10 600,30 T1200,30" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
          </svg>
          
          {/* Personality quote */}
          <p className="text-sm italic text-neutral-500 max-w-2xl mx-auto">
            "Every role taught me something that shaped who I am as a developer."
          </p>
          
          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

// Separate component for better animation control
function ExperienceCard({ 
  experience, 
  index,
  isTimelineInView 
}: { 
  experience: typeof experiences[0]; 
  index: number;
  isTimelineInView: boolean;
}) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, margin: '-100px' });
  const isLeft = index % 2 === 0;
  const colors = roleColors[experience.roleType as keyof typeof roleColors];

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative flex items-start ${
        isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
      }`}
    >
      {/* Enhanced Timeline Dot with Glow */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isTimelineInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.3 + index * 0.15, type: 'spring', stiffness: 200 }}
        className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 mt-3 z-10"
      >
        {/* Outer ring */}
        <div className={`w-6 h-6 rounded-full ${colors.dot} opacity-20 absolute -inset-1.5`} />
        
        {/* Main dot */}
        <div className={`w-3 h-3 ${colors.dot} rounded-full shadow-lg ${colors.glow} relative`}>
          {/* Pulse animation */}
          <motion.div
            animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute inset-0 ${colors.dot} rounded-full`}
          />
        </div>
      </motion.div>

      {/* Curved Connector for Right Cards */}
      {!isLeft && (
        <svg 
          className="hidden lg:block absolute left-1/2 top-6 w-16 h-8 text-neutral-200"
          viewBox="0 0 64 32"
          fill="none"
        >
          <path 
            d="M0,16 Q32,0 64,16" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            opacity="0.4"
          />
        </svg>
      )}

      <div className={`w-full lg:w-1/2 ${isLeft ? 'lg:pr-20' : 'lg:pl-20'} pl-16 lg:pl-0`}>
        <motion.div
          whileHover={{ scale: 1.01, y: -4 }}
          transition={{ duration: 0.3 }}
          className={`rounded-2xl p-8 border-2 ${colors.border} border-neutral-200/60 hover:border-neutral-300 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] bg-gradient-to-br ${colors.bg} backdrop-blur-sm relative overflow-hidden`}
        >
          {/* Decorative abstract shape */}
          <div className={`absolute -top-10 -right-10 w-32 h-32 ${colors.accent} rounded-full blur-3xl opacity-30`} />
          
          {/* Floating Background Icon */}
          <div className="absolute top-6 right-6 opacity-[0.04] pointer-events-none">
            {experience.roleType === 'leadership' && <Award className="w-28 h-28 text-neutral-900" />}
            {experience.roleType === 'cloud' && <Cloud className="w-28 h-28 text-neutral-900" />}
          </div>

          {/* Structural Header Area */}
          <div className={`flex items-center justify-between mb-6 pb-4 border-b border-neutral-200/40`}>
            <div className="flex items-center gap-2">
              <div className={`p-2 ${colors.accent} rounded-lg`}>
                {experience.roleType === 'leadership' && <Users className="w-4 h-4 text-purple-600" />}
                {experience.roleType === 'cloud' && <Cloud className="w-4 h-4 text-teal-600" />}
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-500 px-3 py-1 bg-neutral-100/60 rounded-full">
                <Calendar className="w-3.5 h-3.5" />
                <span className="font-medium">{experience.period}</span>
              </div>
            </div>
            <Briefcase className="w-5 h-5 text-neutral-300" />
          </div>

          {/* Title with Better Typography */}
          <h3 className="text-2xl font-bold text-neutral-900 mb-2">
            {experience.title}
          </h3>
          
          {/* Company */}
          <p className="text-neutral-600 font-medium mb-4 text-sm tracking-wide">
            {experience.company}
          </p>

          {/* Mini Tag Badges */}
          <div className="flex flex-wrap gap-2 mb-5">
            {experience.tags.map((tag, i) => (
              <span 
                key={i}
                className={`px-3 py-1 text-xs font-medium rounded-full ${colors.accent} text-neutral-700 border border-neutral-200/40`}
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Description */}
          <p className="text-neutral-600 mb-5 leading-relaxed text-sm">
            {experience.description}
          </p>

          {/* Achievements */}
          {experience.achievements.length > 0 && (
            <ul className="space-y-2.5">
              {experience.achievements.map((achievement, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                  className="flex items-start text-sm text-neutral-700 leading-relaxed"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
