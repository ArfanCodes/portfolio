'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download, FileText, Smartphone, Code, Server, Database, Wrench, Star, Zap } from 'lucide-react';
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
import { Button } from '@/components/ui/button';
import ResumeDownloadModal from '@/components/ResumeDownloadModal';

const skillCategories = [
  {
    title: 'Mobile Development',
    icon: Smartphone,
    description: 'Building scalable, performant mobile apps with modern tooling',
    isPrimary: true,
    domain: 'mobile',
    domainColor: 'bg-blue-500/5',
    accentColor: 'bg-blue-500',
    skills: [
      { name: 'React Native', icon: SiReact, color: '#61DAFB' },
      { name: 'Expo', icon: SiReact, color: '#000020' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Appwrite', icon: FileText, color: '#F02E65' },
      { name: 'AsyncStorage', icon: FileText, color: '#61DAFB' },
      { name: 'Zustand', icon: SiReact, color: '#443E38' },
    ],
  },
  {
    title: 'Backend Development',
    icon: Server,
    description: 'Designing fast APIs and robust server-side systems',
    isPrimary: false,
    domain: 'backend',
    domainColor: 'bg-green-500/5',
    accentColor: 'bg-green-500',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#000000' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'REST APIs', icon: FileText, color: '#FF6C37' },
    ],
  },
  {
    title: 'Frontend Development',
    icon: Code,
    description: 'Crafting responsive, accessible user interfaces with cutting-edge frameworks',
    isPrimary: false,
    domain: 'frontend',
    domainColor: 'bg-cyan-500/5',
    accentColor: 'bg-cyan-500',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    title: 'Database & Cloud',
    icon: Database,
    description: 'Managing data infrastructure and cloud deployments at scale',
    domain: 'cloud',
    domainColor: 'bg-purple-500/5',
    accentColor: 'bg-purple-500',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'SQLite', icon: SiSqlite, color: '#003B57' },
      { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
      { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
      { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    description: 'Leveraging modern development tools for efficient workflows',
    domain: 'tools',
    domainColor: 'bg-orange-500/5',
    accentColor: 'bg-orange-500',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#181717' },
      { name: 'React Query', icon: SiReact, color: '#FF4154' },
      { name: 'Axios', icon: FileText, color: '#5A29E4' },
    ],
  },
];

// Domain-based color coding for skill tags
const domainColors = {
  mobile: 'bg-blue-50 border-blue-200 hover:border-blue-300 hover:bg-blue-100',
  frontend: 'bg-cyan-50 border-cyan-200 hover:border-cyan-300 hover:bg-cyan-100',
  backend: 'bg-green-50 border-green-200 hover:border-green-300 hover:bg-green-100',
  cloud: 'bg-purple-50 border-purple-200 hover:border-purple-300 hover:bg-purple-100',
  tools: 'bg-orange-50 border-orange-200 hover:border-orange-300 hover:bg-orange-100',
};

export default function ResumeSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: false, margin: '-100px' });

  return (
    <section id="resume" className="py-20 px-6 lg:px-8 bg-neutral-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
      
      {/* Gradient blobs for visual grounding */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Skills & Resume
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto mb-6 leading-relaxed" style={{ letterSpacing: '0.02em' }}>
            A comprehensive overview of my technical expertise and professional background
          </p>
          
          {/* Core Expertise Highlight - Framed */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border border-neutral-200/60 rounded-full shadow-sm"
          >
            <span className="text-xs font-semibold text-neutral-600 tracking-wider">CORE STACK</span>
            <div className="h-4 w-px bg-neutral-300" />
            <div className="flex items-center gap-4 text-sm text-neutral-700">
              <div className="flex items-center gap-2">
                <SiReact className="w-4 h-4 text-cyan-500" />
                <span className="font-medium">React Native</span>
              </div>
              <span className="text-neutral-300">•</span>
              <div className="flex items-center gap-2">
                <SiNodedotjs className="w-4 h-4 text-green-600" />
                <span className="font-medium">Node.js</span>
              </div>
              <span className="text-neutral-300">•</span>
              <div className="flex items-center gap-2">
                <SiAmazon className="w-4 h-4 text-orange-500" />
                <span className="font-medium">AWS</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Grid - Tighter, Unified Module */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={category.title} 
              category={category} 
              index={index}
            />
          ))}
        </div>

        {/* Light Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent mb-8" />

        {/* Enhanced Resume Download Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-neutral-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] transition-all duration-300 relative overflow-hidden"
        >
          {/* Highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="p-5 bg-gradient-to-br from-neutral-100 to-neutral-50 rounded-xl shadow-md border border-neutral-200/50">
                <FileText className="w-9 h-9 text-neutral-900" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                  Complete Resume
                </h3>
                <p className="text-neutral-600 text-sm mb-1">
                  Detailed PDF with full work history and references
                </p>
                <p className="text-xs text-neutral-500 italic">
                  Looking for a detailed overview? Download my full résumé.
                </p>
              </div>
            </div>
            
            {/* Thin divider */}
            <div className="hidden md:block h-20 w-px bg-gradient-to-b from-transparent via-neutral-200 to-transparent" />
            
            <div className="flex flex-col items-end gap-4">
              <div className="text-right">
                <div className="text-xs text-neutral-500 mb-1 font-medium">Last Updated</div>
                <div className="text-neutral-900 font-bold text-lg">December 2025</div>
              </div>
              <div className="flex gap-3">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    onClick={() => window.open('/resume', '_blank')}
                    variant="outline"
                    className="border-2 border-neutral-300 hover:bg-neutral-100 text-neutral-900 rounded-xl px-6 py-6 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    View Resume
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-gradient-to-r from-neutral-900 to-neutral-800 hover:from-neutral-800 hover:to-neutral-700 text-white rounded-xl px-6 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Resume Download Modal */}
      <ResumeDownloadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}

// Enhanced SkillCategory component
function SkillCategory({ 
  category, 
  index 
}: { 
  category: typeof skillCategories[0]; 
  index: number;
}) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, margin: '-100px' });
  const CategoryIcon = category.icon;
  
  // Staggered animation direction
  const isFirstRow = index < 3;
  const animationX = isFirstRow ? -30 : 30;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: animationX, y: 20 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: animationX, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-neutral-200/60 hover:border-neutral-300 transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden h-full flex flex-col ${
        category.domainColor
      }`}
    >
      {/* Vertical accent strip */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${category.accentColor}`} />
      
      {/* Refined Primary Badge */}
      {category.isPrimary && (
        <div className="absolute top-3 right-3 z-10">
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-neutral-900 text-white rounded-full text-[10px] font-bold border border-neutral-700 shadow-md">
            <Zap className="w-3 h-3 fill-white" />
            <span>PRIMARY</span>
          </div>
        </div>
      )}

      {/* Category Header with Icon - Improved Hierarchy */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 bg-neutral-100 rounded-xl border border-neutral-200/50">
          <CategoryIcon className="w-5 h-5 text-neutral-700" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-neutral-900 mb-1">
            {category.title}
          </h3>
          {/* Accent underline */}
          <div className={`h-0.5 ${category.accentColor} rounded-full`} style={{ width: '50%' }} />
        </div>
      </div>

      {/* Description with more spacing */}
      <p className="text-xs text-neutral-500 mb-5 leading-relaxed">
        {category.description}
      </p>
      
      {/* Skills Tags - Consistent height */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {category.skills.map((skill, skillIndex) => {
          const IconComponent = skill.icon;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ duration: 0.3, delay: 0.3 + skillIndex * 0.06 }}
              whileHover={{ scale: 1.05, y: -3 }}
              className={`flex items-center gap-1.5 px-2.5 py-2 rounded-lg border transition-all duration-200 shadow-sm hover:shadow-md ${
                domainColors[category.domain as keyof typeof domainColors]
              }`}
            >
              <IconComponent 
                className="w-3.5 h-3.5" 
                style={{ color: skill.color }}
              />
              <span className="text-xs font-medium text-neutral-900">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
