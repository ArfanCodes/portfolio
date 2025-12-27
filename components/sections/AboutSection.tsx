'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FolderGit2, TrendingUp, Award, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stats = [
  { 
    value: '1+', 
    label: 'Years building production apps',
    icon: TrendingUp,
  },
  { 
    value: '3+', 
    label: 'Production projects delivered',
    icon: Code,
  },
  { 
    value: '2', 
    label: 'Hackathon awards',
    icon: Award,
  },
  { 
    value: '5+', 
    label: 'Technologies mastered',
    icon: FolderGit2,
  },
];

export default function AboutSection() {

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
      className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-24 pb-16 relative overflow-hidden bg-gradient-to-br from-[#FFF9EB] via-white to-[#FFF9EB]"
    >
      {/* Content */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Centered Headings at Top */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[#1A1A1A]"
          >
            App Developer
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto text-[#555555]"
          >
            Building production-ready mobile apps <span className="text-[#5D0D18] font-semibold">from ideas</span>
          </motion.p>
        </div>

        {/* Main Content Grid - Equal Height */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          {/* Left Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group w-full max-w-md">
              {/* Profile image container */}
              <div className="relative w-full aspect-square">
                {/* Image */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src="/images/profile.png"
                    alt="Mohammed Arfan"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                  className="absolute -bottom-4 -right-4 bg-[#5D0D18] text-white px-6 py-3 rounded-full shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    <span className="text-sm font-semibold">Open to Internships</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
            className="space-y-6 flex flex-col justify-center"
          >
            {/* Description - 3 Paragraphs, Strategic Bold, Editorial Typography */}
            <div className="space-y-6 max-w-[65ch]">
              <p className="text-lg leading-[1.7] text-[#1A1A1A] font-medium">
                I am a third-year Information Technology student at <span className="font-semibold">Muffakham Jah College of Engineering and Technology</span>, with a strong interest in building <span className="font-semibold">reliable and scalable mobile applications</span> focused on clarity and usability.
              </p>
              
              <p className="text-lg leading-[1.7] text-[#1A1A1A] font-medium">
                Beyond academics, I remain actively involved in <span className="font-semibold">hands-on development and technology-focused initiatives</span>, where I enjoy solving practical, real-world problems through well-structured digital solutions.
              </p>

              <p className="text-lg leading-[1.7] text-[#1A1A1A] font-medium">
                I currently serve as <span className="font-bold">Technical Head, IEEE Computational Intelligence Society (MJCET)</span> and as a <span className="font-bold">Cloud Core Member, Google Developer Groups on Campus.</span> In these roles, I lead technical initiatives, conduct workshops, mentor fellow students, and contribute to events that encourage collaborative and applied learning.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button
                onClick={scrollToProjects}
                className="bg-[#5D0D18] hover:bg-[#4A0A12] text-white px-8 py-6 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FolderGit2 className="w-5 h-5 mr-2" />
                View Projects
              </Button>

              <button
                onClick={scrollToContact}
                className="px-8 py-6 text-base font-semibold text-[#5D0D18] hover:text-[#4A0A12] transition-colors duration-200 underline-offset-4 hover:underline"
              >
                Get in Touch →
              </button>
            </div>
          </motion.div>
        </div>

        {/* Stats Cards - Maroon Accent */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.7 + index * 0.1
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-6 border-2 border-[#9FB2AC]/30 hover:border-[#5D0D18] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Subtle background on hover */}
                <div className="absolute inset-0 bg-[#5D0D18] opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                
                {/* Icon */}
                <div className="relative mb-4">
                  <div className="inline-flex p-3 rounded-xl bg-neutral-100">
                    <Icon className="w-6 h-6 text-[#9FB2AC]" strokeWidth={2} />
                  </div>
                </div>

                {/* Value */}
                <div className="relative text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="relative text-sm text-[#555555] leading-tight font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
