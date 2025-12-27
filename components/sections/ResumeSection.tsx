'use client';

import { motion } from 'framer-motion';
import { FileText, Smartphone, Code, Server, Database, Wrench, CheckCircle, Sparkles } from 'lucide-react';
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
      { name: 'Expo', icon: SiReact, color: '#000020' },
      { name: 'Appwrite', icon: FileText, color: '#F02E65' },
      { name: 'AsyncStorage', icon: FileText, color: '#61DAFB' },
      { name: 'Zustand', icon: SiReact, color: '#443E38' },
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
      { name: 'Express.js', icon: SiExpress, color: '#000000' },
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
      { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    primarySkills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#181717' },
    ],
    secondarySkills: [
      { name: 'React Query', icon: SiReact, color: '#FF4154' },
      { name: 'Axios', icon: FileText, color: '#5A29E4' },
    ],
  },
];

export default function ResumeSection() {
  const totalSkills = skillCategories.reduce(
    (acc, cat) => acc + cat.primarySkills.length + cat.secondarySkills.length,
    0
  );

  return (
    <section id="resume" className="min-h-screen py-24 px-6 lg:px-8 bg-gradient-to-br from-white via-[#FFF9EB] to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-10 w-96 h-96 bg-[#9FB2AC]/15 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-[#5D0D18]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
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
              Technical Expertise
            </span>
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 tracking-tight">
            Skills & Technologies
          </h2>
          
          <p className="text-lg text-[#555555] max-w-2xl mx-auto leading-relaxed mb-8">
            A comprehensive overview of my technical expertise across mobile, web, and cloud development
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#5D0D18] to-[#4A0A12] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-[#1A1A1A]">{totalSkills}+</div>
                <div className="text-sm text-neutral-600">Technologies</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#5D0D18] to-[#4A0A12] flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-[#1A1A1A]">{skillCategories.length}</div>
                <div className="text-sm text-neutral-600">Categories</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon;
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-xl border-2 border-[#9FB2AC]/30 hover:border-[#5D0D18] hover:shadow-2xl transition-all duration-500 h-full">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-50 border-2 border-[#9FB2AC]/30 flex items-center justify-center group-hover:border-[#5D0D18] transition-colors duration-300">
                      <CategoryIcon className="w-7 h-7 text-[#9FB2AC] group-hover:text-[#5D0D18] transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-6 group-hover:text-[#5D0D18] transition-colors duration-300">
                    {category.title}
                  </h3>

                  {/* Primary Skills */}
                  <div className="mb-5">
                    <h4 className="text-xs font-bold text-[#5D0D18] uppercase tracking-wider mb-3">
                      Core Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.primarySkills.map((skill) => {
                        const IconComponent = skill.icon;
                        return (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#5D0D18]/10 to-[#4A0A12]/10 border border-[#5D0D18]/30 shadow-sm"
                          >
                            <IconComponent 
                              className="w-4 h-4" 
                              style={{ color: skill.color }}
                            />
                            <span className="text-sm font-semibold text-[#1A1A1A]">
                              {skill.name}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Secondary Skills */}
                  <div>
                    <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">
                      Additional
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.secondarySkills.map((skill) => {
                        const IconComponent = skill.icon;
                        return (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg border border-neutral-300 hover:border-[#5D0D18] hover:bg-[#9FB2AC]/10 transition-all duration-200 shadow-sm"
                          >
                            <IconComponent 
                              className="w-3.5 h-3.5" 
                              style={{ color: skill.color }}
                            />
                            <span className="text-xs font-medium text-neutral-700">
                              {skill.name}
                            </span>
                          </motion.div>
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
