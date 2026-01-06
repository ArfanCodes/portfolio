'use client';

import { motion } from 'framer-motion';
import { Award, Trophy, Medal, Star, Calendar, Users, Sparkles as SparklesIcon } from 'lucide-react';

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
    color: 'from-emerald-500 to-teal-600'
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
    color: 'from-blue-500 to-indigo-600'
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 lg:py-32 bg-[#0C1519] relative overflow-hidden">
      
      {/* Background Decor: Confetti/Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#CF9D7B 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#CF9D7B]/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#724B39]/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-24"
        >
           <span className="inline-block py-1 px-3 rounded-full bg-[#162127] border border-[#3A3534] text-[#CF9D7B] text-sm font-semibold tracking-wide mb-4">
             HALL OF FAME
           </span>
           <h2 className="text-5xl lg:text-7xl font-bold text-[#E0E0E0] mb-6 tracking-tight">
             Recognition & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CF9D7B] to-[#E6B99D]">Awards</span>
           </h2>
           <p className="text-lg font-medium text-[#A0A0A0] max-w-2xl mx-auto leading-relaxed">
             Milestones marking technical excellence and competitive programming success.
           </p>
        </motion.div>

        {/* Awards Shelf */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-24">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* The Card */}
                <div className="relative bg-[#162127] rounded-3xl p-8 lg:p-12 shadow-2xl border border-[#3A3534] overflow-hidden h-full flex flex-col">
                   
                   {/* Top Ribbon Badge */}
                   <div className="absolute top-0 right-10">
                      <div className="relative bg-[#724B39] text-[#E0E0E0] w-16 h-20 flex flex-col items-center justify-end pb-4 shadow-lg before:content-[''] before:absolute before:bottom-[-10px] before:left-0 before:w-full before:h-[20px] before:bg-[#724B39] before:[clip-path:polygon(0_0,50%_100%,100%_0)]">
                         <Award size={24} className="mb-1" />
                         <span className="text-[10px] font-bold uppercase tracking-wider">Rank</span>
                         <span className="text-lg font-bold leading-none">2</span>
                      </div>
                   </div>

                   {/* Giant Watermark Icon */}
                   <div className="absolute -bottom-10 -right-10 opacity-[0.03] transform rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-transform duration-700">
                      <Icon size={300} textAnchor="middle" />
                   </div>

                   {/* Content */}
                   <div className="relative z-10">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CF9D7B]/10 text-[#CF9D7B] text-xs font-bold uppercase tracking-wider mb-6">
                         <Star size={12} fill="currentColor" />
                         {achievement.eventType}
                      </div>

                      <h3 className="text-3xl lg:text-4xl font-bold text-[#E0E0E0] mb-2 group-hover:text-[#CF9D7B] transition-colors">
                        {achievement.project}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-[#A0A0A0] mb-8">
                         <span className="flex items-center gap-1.5">
                            <Users size={16} className="text-[#CF9D7B]" />
                            {achievement.organization}
                         </span>
                         <span className="w-1 h-1 rounded-full bg-[#3A3534]" />
                         <span className="flex items-center gap-1.5">
                            <Calendar size={16} className="text-[#CF9D7B]" />
                            {achievement.date}
                         </span>
                      </div>

                      <p className="text-lg text-[#E0E0E0] leading-relaxed mb-8">
                         {achievement.description}
                      </p>

                      <div className="mt-auto">
                        <div className="flex flex-wrap gap-2">
                           {achievement.techStack.map((tech) => (
                              <span key={tech} className="px-3 py-1.5 bg-[#0C1519]/50 border border-[#3A3534] rounded-lg text-xs font-bold text-[#A0A0A0] group-hover:border-[#CF9D7B]/30 transition-colors">
                                 {tech}
                              </span>
                           ))}
                        </div>
                      </div>
                   </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Floating Medallion Stats */}
        <div className="flex justify-center">
           <div className="inline-flex flex-wrap justify-center gap-8 lg:gap-16 bg-[#162127]/50 backdrop-blur-md border border-[#3A3534]/50 p-8 rounded-[3rem] shadow-xl">
              <StatMedallion value="2" label="Total Awards" icon={Trophy} delay={0.4} />
              <div className="w-px h-16 bg-[#3A3534] hidden md:block self-center" />
              <StatMedallion value="2nd" label="Place Rankings" icon={Medal} delay={0.5} />
              <div className="w-px h-16 bg-[#3A3534] hidden md:block self-center" />
              <StatMedallion value="2025" label="Excellence Year" icon={SparklesIcon} delay={0.6} />
           </div>
        </div>

      </div>
    </section>
  );
}

function StatMedallion({ value, label, icon: Icon, delay }: { value: string, label: string, icon: any, delay: number }) {
   return (
      <motion.div 
         initial={{ scale: 0, opacity: 0 }}
         whileInView={{ scale: 1, opacity: 1 }}
         viewport={{ once: true }}
         transition={{ type: "spring", stiffness: 200, delay }}
         className="flex flex-col items-center text-center group cursor-default"
      >
         <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#CF9D7B] via-[#E6B99D] to-[#CF9D7B] flex items-center justify-center shadow-lg shadow-[#CF9D7B]/20 border-4 border-[#162127] mb-3 group-hover:-translate-y-2 transition-transform duration-300">
            <Icon size={28} className="text-[#0C1519]" />
         </div>
         <span className="text-3xl font-extrabold text-[#E0E0E0]">{value}</span>
         <span className="text-xs font-bold text-[#A0A0A0] uppercase tracking-wider">{label}</span>
      </motion.div>
   )
}
