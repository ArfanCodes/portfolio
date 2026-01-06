'use client';

import { motion } from 'framer-motion';
import { FileText, Smartphone, Code, Server, Database, Wrench, CheckCircle, Zap } from 'lucide-react';
import { 
  SiReact, 
  SiTypescript, 
  SiJavascript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiPostgresql, 
  SiSupabase, 
  SiAmazon, 
  SiGit, 
  SiGithub,
  SiPrisma,
  SiFastapi,
  SiSqlite
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Mobile Development',
    icon: Smartphone,
    primarySkills: [
      { name: 'React Native', icon: SiReact, color: '#61DAFB' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    ],
    secondarySkills: [
      { name: 'Expo', icon: SiReact, color: '#ffffff' },
      { name: 'Appwrite', icon: FileText, color: '#F02E65' },
      { name: 'AsyncStorage', icon: FileText, color: '#61DAFB' },
      { name: 'Zustand', icon: SiReact, color: '#ffffff' },
    ],
  },
  {
    title: 'Frontend Development',
    icon: Code,
    primarySkills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    ],
    secondarySkills: [
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    title: 'Backend Development',
    icon: Server,
    primarySkills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
    ],
    secondarySkills: [
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'REST APIs', icon: FileText, color: '#FF6C37' },
    ],
  },
  {
    title: 'Database & Cloud',
    icon: Database,
    primarySkills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
    ],
    secondarySkills: [
      { name: 'SQLite', icon: SiSqlite, color: '#003B57' },
      { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
      { name: 'Prisma', icon: SiPrisma, color: '#ffffff' },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    primarySkills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
    ],
    secondarySkills: [
      { name: 'React Query', icon: SiReact, color: '#FF4154' },
      { name: 'Axios', icon: FileText, color: '#5A29E4' },
    ],
  },
];

export default function SkillsSection() {
  const totalSkills = skillCategories.reduce(
    (acc, cat) => acc + cat.primarySkills.length + cat.secondarySkills.length,
    0
  );

  return (
    <section id="skills" className="py-24 lg:py-32 relative bg-[#0C1519] overflow-hidden text-[#E0E0E0]">
      
      {/* Background Decor: Matrix Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="1" fill="#CF9D7B" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
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
            <span className="px-4 py-2 bg-[#CF9D7B]/10 border border-[#CF9D7B]/20 text-[#CF9D7B] rounded-full text-sm font-bold tracking-wide shadow-lg">
              TECHNICAL EXPERTISE
            </span>
          </motion.div>
          
          <h2 className="text-5xl lg:text-7xl font-bold text-[#E0E0E0] mb-6 tracking-tight">
            Skills & <span className="text-[#CF9D7B]">Technologies</span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
            A comprehensive arsenal of tools for building scalable, high-performance applications.
          </p>

          {/* Stats Bar */}
          <div className="inline-flex items-center gap-8 lg:gap-12 px-8 py-4 bg-[#162127]/50 rounded-2xl border border-[#3A3534] backdrop-blur-sm">
             <div className="flex items-center gap-3">
                <div className="p-2 bg-[#CF9D7B] rounded-lg text-[#0C1519]"><Zap size={20} /></div>
                <div className="text-left leading-tight">
                   <div className="text-xl font-bold text-[#E0E0E0]">{totalSkills}+</div>
                   <div className="text-xs text-[#CF9D7B]/70 font-medium uppercase tracking-wide">Technologies</div>
                </div>
             </div>
             <div className="w-px h-10 bg-[#3A3534]" />
             <div className="flex items-center gap-3">
                <div className="p-2 bg-[#CF9D7B] rounded-lg text-[#0C1519]"><CheckCircle size={20} /></div>
                <div className="text-left leading-tight">
                   <div className="text-xl font-bold text-[#E0E0E0]">{skillCategories.length}</div>
                   <div className="text-xs text-[#CF9D7B]/70 font-medium uppercase tracking-wide">Domains</div>
                </div>
             </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon;
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group h-full"
              >
                <div className="relative bg-[#162127] backdrop-blur-md rounded-3xl p-8 border border-[#3A3534] hover:border-[#CF9D7B]/50 hover:bg-[#162127]/80 transition-all duration-300 h-full flex flex-col shadow-xl">
                  
                  {/* Category Header */}
                  <div className="flex items-start justify-between mb-8">
                     <div className="p-3 rounded-xl bg-gradient-to-br from-[#724B39] to-[#5C3A2A] text-[#E0E0E0] shadow-lg shadow-[#724B39]/20 group-hover:scale-110 transition-transform duration-300">
                        <CategoryIcon size={24} />
                     </div>
                     <div className="text-right">
                        <h3 className="text-lg font-bold text-[#E0E0E0] leading-tight mb-1">{category.title}</h3>
                        <span className="text-xs font-medium text-[#CF9D7B]/60 uppercase tracking-wider">Module {index + 1}</span>
                     </div>
                  </div>

                  {/* Primary Skills (Core) */}
                  <div className="mb-8">
                    <h4 className="flex items-center gap-2 text-xs font-bold text-[#CF9D7B] uppercase tracking-wider mb-4 opacity-80">
                       <span className="w-1.5 h-1.5 rounded-full bg-[#CF9D7B]" /> Core Stack
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {category.primarySkills.map((skill) => {
                        const IconComponent = skill.icon;
                        return (
                          <div
                            key={skill.name}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#0C1519]/60 border border-[#3A3534] group-hover:border-[#CF9D7B]/40 transition-colors"
                          >
                            <IconComponent 
                              className="w-5 h-5 flex-shrink-0" 
                              style={{ color: skill.color === '#ffffff' ? '#CF9D7B' : skill.color }}
                            />
                            <span className="text-base font-bold text-[#E0E0E0]">
                              {skill.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Secondary Skills (Toolkit) */}
                  <div className="mt-auto">
                    <h4 className="text-xs font-bold text-[#A0A0A0] uppercase tracking-wider mb-3 pl-1">
                       Additional Toolkit
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.secondarySkills.map((skill) => {
                        const IconComponent = skill.icon;
                        return (
                          <div
                            key={skill.name}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0C1519]/40 rounded-lg border border-[#3A3534] hover:bg-[#0C1519] hover:border-[#CF9D7B]/30 transition-colors cursor-default"
                          >
                            <IconComponent 
                              className="w-3.5 h-3.5 opacity-70" 
                              style={{ color: skill.color === '#ffffff' ? '#A0A0A0' : skill.color }}
                            />
                            <span className="text-xs font-medium text-[#A0A0A0]">
                              {skill.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
