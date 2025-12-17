'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Smartphone, Code, Server, Database, Wrench, Eye, CheckCircle } from 'lucide-react';
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
import ViewResumeModal from '@/components/ViewResumeModal';

const skillCategories = [
  {
    title: 'Mobile Development',
    icon: Smartphone,
    accentColor: '#3B82F6', // soft blue
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
    accentColor: '#6366F1', // indigo
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
    accentColor: '#14B8A6', // teal
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
    accentColor: '#F59E0B', // amber
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
    accentColor: '#64748B', // slate
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
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  return (
    <section id="resume" className="min-h-screen py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-4">
            Skills & Resume
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            A comprehensive overview of my technical expertise and professional background
          </p>
          
          {/* Changed to "View Resume" */}
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              onClick={() => setIsViewModalOpen(true)}
              size="lg"
              className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 hover:from-neutral-800 hover:via-neutral-700 hover:to-neutral-800 text-white rounded-full px-8 py-6 text-base font-medium shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Eye className="w-5 h-5 mr-2" />
              View Resume
            </Button>
          </motion.div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon;
            const totalSkills = category.primarySkills.length + category.secondarySkills.length;
            const visibleSecondarySkills = category.secondarySkills.slice(0, 4);
            const hiddenCount = category.secondarySkills.length - visibleSecondarySkills.length;
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200 hover:border-neutral-400 transition-colors duration-300 group"
              >
                {/* Card Header with Icon */}
                <div className="flex items-center gap-3 mb-3">
                  <CategoryIcon 
                    className="w-5 h-5" 
                    style={{ color: category.accentColor, opacity: 0.7 }}
                  />
                  <h3 className="text-lg font-medium text-neutral-900">
                    {category.title}
                  </h3>
                </div>
                
                {/* Subtle divider under title */}
                <div 
                  className="h-[1px] mb-4" 
                  style={{ 
                    background: `linear-gradient(to right, ${category.accentColor}40, transparent)` 
                  }}
                />
                
                {/* Primary Skills - Filled Pills */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {category.primarySkills.map((skill) => {
                    const IconComponent = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full border shadow-sm"
                        style={{ 
                          backgroundColor: `${category.accentColor}15`,
                          borderColor: `${category.accentColor}40`
                        }}
                      >
                        <IconComponent 
                          className="w-3.5 h-3.5" 
                          style={{ color: skill.color }}
                        />
                        <span 
                          className="text-xs font-medium"
                          style={{ color: category.accentColor }}
                        >
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
                
                {/* Secondary Skills - Outlined Pills (Limited to 4) */}
                <div className="flex flex-wrap gap-2">
                  {visibleSecondarySkills.map((skill) => {
                    const IconComponent = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-neutral-200 hover:border-neutral-300 transition-colors shadow-sm"
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
                  
                  {/* +N more indicator if skills are hidden */}
                  {hiddenCount > 0 && (
                    <div className="flex items-center px-3 py-1.5">
                      <span className="text-xs text-neutral-500">
                        +{hiddenCount} more
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Refined Resume Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl p-8 border border-neutral-200"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left: Icon */}
            <div className="flex items-center gap-4 flex-1">
              <div className="p-4 bg-white rounded-xl shadow-sm">
                <FileText className="w-8 h-8 text-neutral-900" />
              </div>
              
              {/* Center: Title + Description + Credibility Signal */}
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-1">
                  Complete Resume
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-2">
                  Detailed PDF with full work history and references
                </p>
                {/* Credibility Signal */}
                <div className="flex items-center gap-1.5 text-sm text-neutral-500">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>ATS-friendly • Recruiter-ready format</span>
                </div>
              </div>
            </div>
            
            {/* Right: Download Button */}
            <div className="flex items-center gap-4">
              <div className="text-right hidden md:block">
                <div className="text-xs text-neutral-500">Last Updated</div>
                <div className="text-sm text-neutral-700 font-medium">December 2025</div>
              </div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  onClick={() => setIsDownloadModalOpen(true)}
                  className="bg-gradient-to-r from-neutral-900 to-neutral-800 hover:from-neutral-800 hover:to-neutral-700 text-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* View Resume Modal */}
      <ViewResumeModal 
        isOpen={isViewModalOpen} 
        onClose={() => setIsViewModalOpen(false)}
        resumeUrl="/resume.pdf"
      />

      {/* Resume Download Modal */}
      <ResumeDownloadModal 
        isOpen={isDownloadModalOpen} 
        onClose={() => setIsDownloadModalOpen(false)} 
      />
    </section>
  );
}
