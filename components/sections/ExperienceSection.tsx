'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, Target, Users, TrendingUp, Cloud, Brain, Award, Sparkles, Zap } from 'lucide-react';

const experiences = [
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
    <section id="experience" className="py-24 lg:py-32 relative bg-[#0C1519] overflow-hidden text-[#E0E0E0]">
      
      {/* Background Decor: Abstract Circuit/Node Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
         <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#CF9D7B] rounded-full blur-[150px] mix-blend-overlay" />
         <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#724B39] rounded-full blur-[150px] mix-blend-overlay" />
         <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#CF9D7B" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
         </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
             <div className="flex items-center gap-3 mb-4">
               <span className="w-12 h-1 bg-[#CF9D7B] rounded-full" />
               <span className="text-[#CF9D7B] font-bold tracking-widest uppercase text-sm">Professional Journey</span>
             </div>
             <h2 className="text-5xl lg:text-7xl font-bold text-[#E0E0E0] mb-6">
               Experience <span className="text-[#CF9D7B]">& Impact</span>
             </h2>
             <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
               Leadership, technical mentorship, and community-driven impact across multiple student developer groups.
             </p>
          </motion.div>

          {/* Stats Bar (Refactored from Sidebar) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-6 lg:gap-8"
          >
            {impactStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="flex items-center gap-4 bg-[#162127]/50 border border-[#CF9D7B]/20 px-6 py-4 rounded-2xl backdrop-blur-sm hover:bg-[#162127] transition-colors">
                  <div className="p-3 bg-gradient-to-br from-[#724B39] to-[#5C3A2A] rounded-xl text-[#E0E0E0] shadow-lg shadow-[#724B39]/20">
                    <Icon size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#E0E0E0] leading-none mb-1">{stat.value}</div>
                    <div className="text-xs font-medium text-[#CF9D7B]/80 uppercase tracking-wide">{stat.label}</div>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>

        {/* Timeline Layout */}
        <div className="relative mt-24">
          
          {/* Central Line */}
          <div className="absolute left-[20px] lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#CF9D7B] via-[#CF9D7B]/20 to-transparent lg:-translate-x-1/2" />

          <div className="space-y-24 lg:space-y-32">
            {experiences.map((exp, index) => (
              <TimelineItem key={index} data={exp} index={index} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

function TimelineItem({ data, index }: { data: any, index: number }) {
  const isLeft = index % 2 === 0;

  return (
    <div className={`relative flex flex-col lg:flex-row gap-8 lg:gap-0 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-start w-full group`}>
      
      {/* Date Marker (Center) */}
      <div className="absolute left-[20px] lg:left-1/2 top-0 lg:-translate-x-1/2 flex flex-col items-center">
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
          className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full border-4 border-[#0C1519] z-20 flex items-center justify-center shadow-[0_0_20px_rgba(207,157,123,0.3)] ${data.isOngoing ? 'bg-[#CF9D7B] animate-pulse' : 'bg-[#CF9D7B]'}`}
        >
           <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 bg-[#0C1519] rounded-full" />
        </motion.div>
      </div>

      {/* Content Card */}
      <motion.div 
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`w-full lg:w-[calc(50%-60px)] pl-16 lg:pl-0 ${isLeft ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:text-left'}`}
      >
        <div className={`inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#CF9D7B]/10 border border-[#CF9D7B]/30 text-xs font-bold text-[#CF9D7B] uppercase tracking-wider ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
           <Calendar size={14} />
           {data.period}
        </div>
        
        <h3 className="text-3xl lg:text-4xl font-bold text-[#E0E0E0] mb-2 leading-tight">
          {data.title}
        </h3>
        
        <div className={`flex items-center gap-2 text-lg text-[#A0A0A0] font-medium mb-6 ${isLeft ? 'lg:justify-end' : 'lg:justify-start'}`}>
           <span className="text-[#CF9D7B]">{data.company}</span>
           <span className="w-1.5 h-1.5 bg-[#3A3534] rounded-full" />
           <span>{data.location}</span>
        </div>

        <div className={`flex flex-wrap gap-2 mb-8 ${isLeft ? 'lg:justify-end' : 'lg:justify-start'}`}>
            {data.tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 text-xs font-semibold text-[#0C1519] bg-[#CF9D7B] rounded-md shadow-lg shadow-[#CF9D7B]/10">
                {tag}
              </span>
            ))}
        </div>

        <p className={`text-gray-300 leading-relaxed mb-8 ${isLeft ? 'ml-auto' : ''} max-w-lg`}>
          {data.impactSummary}
        </p>

        {/* Outcomes Box */}
        <div className={`relative p-6 rounded-2xl bg-gradient-to-br from-[#162127]/50 to-transparent border border-[#3A3534] overflow-hidden hover:border-[#CF9D7B]/50 transition-colors group/box`}>
           <div className="absolute inset-0 bg-[#CF9D7B]/5 opacity-0 group-hover/box:opacity-100 transition-opacity duration-500" />
           <h4 className="flex items-center gap-2 text-sm font-bold text-[#CF9D7B] uppercase tracking-wider mb-4">
              <Sparkles size={16} /> Key Outcomes
           </h4>
           <div className="space-y-4">
              {data.keyOutcomes.map((item: any, i: number) => {
                 const Icon = item.icon;
                 return (
                   <div key={i} className={`flex items-start gap-4 ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
                      <div className="p-2 rounded-lg bg-[#CF9D7B]/10 text-[#CF9D7B]">
                         <Icon size={16} />
                      </div>
                      <span className="text-sm text-[#E0E0E0] font-medium pt-1.5">
                        {item.text}
                      </span>
                   </div>
                 )
              })}
           </div>
        </div>

      </motion.div>

      {/* Spacer for the other side */}
      <div className="hidden lg:block w-[calc(50%-60px)]" />
      
    </div>
  )
}
