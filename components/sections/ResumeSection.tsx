'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
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
    title: 'Frontend Development',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#000000' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'REST APIs', icon: FileText, color: '#FF6C37' },
    ],
  },
  {
    title: 'Database & Cloud',
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
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#181717' },
      { name: 'React Query', icon: SiReact, color: '#FF4154' },
      { name: 'Axios', icon: FileText, color: '#5A29E4' },
    ],
  },
];

export default function ResumeSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              onClick={() => setIsModalOpen(true)}
              size="lg"
              className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 hover:from-neutral-800 hover:via-neutral-700 hover:to-neutral-800 text-white rounded-full px-8 py-6 text-base font-medium shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200 hover:border-neutral-300 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-neutral-200 hover:border-neutral-300 transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                      <IconComponent 
                        className="w-4 h-4" 
                        style={{ color: skill.color }}
                      />
                      <span className="text-sm font-medium text-neutral-900">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Resume Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl p-8 border border-neutral-200"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-white rounded-xl shadow-sm">
                <FileText className="w-8 h-8 text-neutral-900" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-1">
                  Complete Resume
                </h3>
                <p className="text-neutral-600">
                  Detailed PDF with full work history and references
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm text-neutral-600">Last Updated</div>
                <div className="text-neutral-900 font-medium">December 2025</div>
              </div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  onClick={() => setIsModalOpen(true)}
                  variant="outline"
                  className="rounded-full border-2 border-neutral-300 hover:bg-gradient-to-r hover:from-neutral-900 hover:to-neutral-800 hover:text-white hover:border-transparent shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </motion.div>
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
