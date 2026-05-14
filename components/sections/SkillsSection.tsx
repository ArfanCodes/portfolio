'use client';

import { motion } from 'framer-motion';
import { FileText, Smartphone, Code, Server, Database, CheckCircle, Zap, Layout, Cloud } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { IconType } from 'react-icons';
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
  SiSqlite,
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiNextdotjs,
  SiVite,
  SiFramer,
  SiMongodb,
  SiFirebase
} from 'react-icons/si';

interface Skill {
  name: string;
  icon: IconType | LucideIcon;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  primarySkills: Skill[];
  secondarySkills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: Code,
    primarySkills: [
      { name: 'JavaScript (ES6+)', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    ],
    secondarySkills: [
      { name: 'Java', icon: FileText, color: '#ffffff' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
    ],
  },
  {
    title: 'Frontend',
    icon: Layout,
    primarySkills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
    ],
    secondarySkills: [
      { name: 'HTML & CSS', icon: SiHtml5, color: '#E34F26' },
      { name: 'Vite', icon: SiVite, color: '#646CFF' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Framer Motion', icon: SiFramer, color: '#0055FF' },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    primarySkills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
    ],
    secondarySkills: [
      { name: 'REST APIs', icon: FileText, color: '#FF6C37' },
      { name: 'JWT Auth', icon: FileText, color: '#ffffff' },
    ],
  },
  {
    title: 'Mobile / App',
    icon: Smartphone,
    primarySkills: [
      { name: 'React Native', icon: SiReact, color: '#61DAFB' },
      { name: 'Zustand', icon: FileText, color: '#ffffff' },
    ],
    secondarySkills: [
      { name: 'Expo', icon: FileText, color: '#ffffff' },
      { name: 'React Navigation', icon: FileText, color: '#ffffff' },
      { name: 'React Query', icon: SiReact, color: '#FF4154' },
      { name: 'AsyncStorage', icon: FileText, color: '#61DAFB' },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    primarySkills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ],
    secondarySkills: [
      { name: 'SQLite', icon: SiSqlite, color: '#003B57' },
      { name: 'Firestore', icon: SiFirebase, color: '#FFCA28' },
      { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
    ],
  },
  {
    title: 'Cloud / DevOps',
    icon: Cloud,
    primarySkills: [
      { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
      { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
    ],
    secondarySkills: [
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
    ],
  },
];

// Map "#ffffff" brand-default to a tasteful dark warm tone for light theme
const resolveIconColor = (color: string) => (color === '#ffffff' ? '#1A1614' : color);

export default function SkillsSection() {
  const totalSkills = skillCategories.reduce(
    (acc, cat) => acc + cat.primarySkills.length + cat.secondarySkills.length,
    0
  );

  return (
    <section
      id="skills"
      className="relative py-20 lg:py-28 bg-[#FAF8F5] text-[#1A1614] overflow-hidden"
    >
      {/* Soft warm ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[-10%] w-[560px] h-[560px] rounded-full bg-[#F2E5D2] blur-[150px] opacity-55" />
        <div className="absolute bottom-[10%] left-[-10%] w-[560px] h-[560px] rounded-full bg-[#EFE4D4] blur-[150px] opacity-50" />
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
          className="mb-12 lg:mb-16"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#E8E2D9] shadow-[0_2px_10px_-4px_rgba(60,40,20,0.08)] mb-6">
                <Zap size={12} strokeWidth={2.2} className="text-[#C77F45]" />
                <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#5A5550] font-sora">
                  TECHNICAL EXPERTISE
                </span>
              </div>

              <h2 className="font-sora font-semibold tracking-[-0.025em] leading-[1.02] text-[#1A1614] text-4xl sm:text-5xl lg:text-[3.5rem]">
                Skills <span className="text-[#C77F45]">&amp; Technologies</span>
              </h2>

              <p className="mt-5 text-lg text-[#5A5550] max-w-2xl leading-relaxed">
                A comprehensive arsenal of tools for building scalable, high-performance applications.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 gap-3 sm:gap-4 mb-12 lg:mb-16"
        >
          <StatCard value={`${totalSkills}+`} label="Technologies" icon={Zap} />
          <StatCard value={String(skillCategories.length)} label="Domains" icon={CheckCircle} />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon;

            return (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3 }}
                className="group relative rounded-3xl bg-white border border-[#EFE3D0] shadow-[0_4px_20px_-10px_rgba(70,45,25,0.10)] hover:shadow-[0_18px_40px_-18px_rgba(70,45,25,0.22)] hover:border-[#E0CFB5] transition-all duration-400 overflow-hidden flex flex-col"
              >
                {/* Top hairline accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C77F45] via-[#E8B97E] to-transparent opacity-70" />

                <div className="p-6 lg:p-7 flex flex-col h-full">

                  {/* Category Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-[#F5EFE6] flex items-center justify-center text-[#7A5A3F] group-hover:bg-[#1A1614] group-hover:text-[#E8B97E] transition-colors duration-300">
                      <CategoryIcon size={20} strokeWidth={1.8} />
                    </div>
                    <div className="text-right">
                      <span className="block text-[10px] font-semibold tracking-[0.18em] uppercase text-[#A39A8E] mb-1 font-sora">
                        Module {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-sora text-[17px] lg:text-[18px] font-semibold tracking-tight text-[#1A1614] leading-tight">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  {/* Core Stack */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3.5">
                      <span className="h-[2px] w-3.5 rounded-full bg-[#C77F45]" />
                      <h4 className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-[#7A5A3F] font-sora">
                        Core Stack
                      </h4>
                    </div>

                    <div className="flex flex-col gap-2">
                      {category.primarySkills.map((skill) => {
                        const IconComponent = skill.icon;
                        return (
                          <div
                            key={skill.name}
                            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[#FAF6EF] border border-[#EFE3D0] group-hover:border-[#E0CFB5] transition-colors"
                          >
                            <IconComponent
                              className="w-[18px] h-[18px] flex-shrink-0"
                              style={{ color: resolveIconColor(skill.color) }}
                            />
                            <span className="text-[14px] font-semibold text-[#1A1614]">
                              {skill.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Additional Toolkit */}
                  <div className="mt-auto pt-1">
                    <h4 className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-[#8B8680] mb-3 font-sora">
                      Additional Toolkit
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {category.secondarySkills.map((skill) => {
                        const IconComponent = skill.icon;
                        return (
                          <div
                            key={skill.name}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-[#E8E2D9] hover:bg-[#FAF6EF] hover:border-[#D9CFBE] transition-colors duration-200"
                          >
                            <IconComponent
                              className="w-3 h-3 flex-shrink-0 opacity-90"
                              style={{ color: resolveIconColor(skill.color) }}
                            />
                            <span className="text-[11.5px] font-medium text-[#5A5550]">
                              {skill.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
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
