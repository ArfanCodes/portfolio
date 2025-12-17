'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Eye, FolderGit2, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import ViewResumeModal from '@/components/ViewResumeModal';

const stats = [
  { 
    value: '1+', 
    label: 'Years building production apps'
  },
  { 
    value: '3+', 
    label: 'Production projects delivered'
  },
  { 
    value: '2', 
    label: 'Hackathon awards'
  },
  { 
    value: '5+', 
    label: 'Technologies mastered'
  },
];

export default function AboutSection() {
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20 pb-12 relative overflow-hidden bg-white"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,120,120,0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(100,100,100,0.05)_0%,transparent_50%)]" />
      
      {/* Content with exit transition */}
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="max-w-6xl mx-auto w-full relative z-10"
      >
        {/* Revamped Headline System */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 lg:mb-12"
        >
          {/* Primary Headline - Strong, Specific */}
          <motion.h1 
            className="text-5xl lg:text-7xl font-bold text-[#1F2937] mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            React Native App Developer
          </motion.h1>
          
          {/* Sub-headline - Value-Based */}
          <motion.p 
            className="text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
          >
            Building production-ready mobile apps with clean architecture and real-world impact
          </motion.p>

          {/* Name as Credibility Element */}
          <motion.p 
            className="text-sm text-neutral-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.26 }}
          >
            Mohammed Arfan · App Developer
          </motion.p>
        </motion.div>

        {/* Profile Image - Centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.34 }}
          className="flex justify-center mb-8 lg:mb-12"
        >
          <div className="relative group">
            {/* Neutral radial gradient glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-neutral-200 via-transparent to-neutral-200 rounded-full blur-md opacity-30" />
            
            {/* Profile image container */}
            <div className="relative w-48 h-48 lg:w-56 lg:h-56">
              {/* Subtle shadow under image */}
              <div className="absolute inset-0 bg-neutral-900 rounded-full blur-xl opacity-10 translate-y-2" />
              
              {/* Image with hover ring */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-white shadow-lg border-2 border-transparent group-hover:border-neutral-300 transition-all duration-300">
                <Image
                  src="/images/profile.png"
                  alt="Mohammed Arfan"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Description + Bullets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="max-w-3xl mx-auto mb-8 text-center"
        >
          <p className="text-base text-neutral-700 leading-relaxed mb-4">
            I'm a 3rd year engineering student at <strong className="text-neutral-900">MJCET</strong> who enjoys building clean, scalable and intuitive mobile applications. I focus on turning real-world problems into functional and thoughtfully designed digital experiences.
          </p>
          
          <p className="text-base text-neutral-700 leading-relaxed">
            As <strong className="text-neutral-900">Technical Head, IEEE CIS MJCET</strong> and <strong className="text-neutral-900">Cloud Core Member, GDG</strong>, I lead workshops, mentor student developers and contribute to events that encourage practical learning and innovation.
          </p>
        </motion.div>

        {/* CTAs - Primary, Secondary, Tertiary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          {/* Primary CTA - Filled */}
          <Button
            onClick={() => setIsViewModalOpen(true)}
            className="w-full sm:w-auto bg-[#1F2937] hover:bg-[#111827] text-white px-8 py-3 rounded-full text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Eye className="w-4 h-4 mr-2" />
            View Resume
          </Button>

          {/* Secondary CTA - Outline */}
          <Button
            onClick={scrollToProjects}
            variant="outline"
            className="w-full sm:w-auto border-2 border-[#1F2937] text-[#1F2937] hover:bg-[#1F2937] hover:text-white px-8 py-3 rounded-full text-base font-semibold transition-all duration-300"
          >
            <FolderGit2 className="w-4 h-4 mr-2" />
            View Projects
          </Button>

          {/* Tertiary CTA - Text Only */}
          <button
            onClick={scrollToContact}
            className="text-sm font-medium text-neutral-600 hover:text-[#1F2937] transition-colors duration-200 underline-offset-4 hover:underline"
          >
            Contact
          </button>
        </motion.div>

        {/* Stats - Neutral, Earned Feel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.58 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: 0.66 + index * 0.08
              }}
              className="bg-white rounded-xl p-5 border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 text-center"
            >
              {/* Bold Number Only */}
              <div className="text-3xl lg:text-4xl font-bold text-[#1F2937] mb-2">
                {stat.value}
              </div>
              {/* Small Descriptor */}
              <div className="text-xs text-neutral-600 leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* View Resume Modal */}
      <ViewResumeModal 
        isOpen={isViewModalOpen} 
        onClose={() => setIsViewModalOpen(false)}
        resumeUrl="/doc/arfan-3rdyear-appdev-resume.docx"
      />
    </section>
  );
}
