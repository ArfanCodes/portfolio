'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { FolderGit2, TrendingUp, Award, Code, ArrowRight, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';

// Custom X Logo Component
const XLogo = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    aria-hidden="true"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

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
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

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
      ref={sectionRef}
      id="about" 
      className="relative min-h-screen flex items-center py-20 lg:py-32 overflow-hidden bg-[#0C1519]"
    >
      {/* Background Decor - Dynamic Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CF9D7B]/10 blur-[120px] rounded-full opacity-50 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#724B39]/10 blur-[120px] rounded-full opacity-50" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* LEFT COLUMN - Image Only (Sticky) */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-16 lg:self-start">
            
            {/* Title Block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-[#CF9D7B] mb-2 font-playfair">
                App Developer
              </h1>
              <div className="h-2 w-20 bg-[#724B39] rounded-full mx-auto mb-6" />
            </motion.div>

            <motion.div 
              className="relative group w-full max-w-md mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-[#CF9D7B]/20 bg-[#162127] shadow-2xl">
                <Image
                  src="/images/profile.png"
                  alt="Mohammed Arfan"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1519]/80 via-transparent to-transparent opacity-80" />

                {/* Badge */}
                <div className="absolute bottom-6 left-6 bg-[#162127]/90 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg border border-[#CF9D7B]/30 flex items-center gap-2.5">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CF9D7B] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#CF9D7B]"></span>
                  </span>
                  <span className="text-sm font-bold text-[#E0E0E0]">Open to Internships</span>
                </div>
              </div>

              {/* Decorative Elements behind image */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-[2rem] border-2 border-[#724B39]/50 opacity-60" />
            </motion.div>

            {/* Social Links - Blending Naturally */}
            <motion.div 
              className="flex items-center justify-center gap-6 mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {[
                { Icon: Github, href: "https://github.com/ArfanCodes" },
                { Icon: Linkedin, href: "https://linkedin.com/in/" },
                { Icon: XLogo, href: "https://x.com/iamArfaan" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-xl bg-[#162127]/50 border border-[#3A3534]/50 hover:border-[#CF9D7B]/50 hover:bg-[#CF9D7B]/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <social.Icon size={20} className="text-[#A0A0A0] group-hover:text-[#CF9D7B] transition-colors" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT COLUMN - Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8 lg:text-left">

            {/* Lead Text */}
            <motion.p 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl lg:text-3xl font-medium leading-relaxed text-[#E0E0E0]"
            >
              <span className="font-cormorant font-light text-3xl lg:text-4xl tracking-wide leading-relaxed">Building production-ready mobile apps</span> <span className="relative inline-block px-3 ml-1"><span className="absolute inset-0 bg-[#724B39]/30 -skew-x-3 -z-10 rounded-sm" /><span className="font-cormorant font-light text-3xl lg:text-4xl tracking-wide">from ideas</span></span>
            </motion.p>

            {/* Bio Text */}
            <motion.div 
              className="space-y-6 text-lg font-sans text-white/95 leading-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p>
                I am a third-year Information Technology student at <strong className="text-[#CF9D7B] font-medium">Muffakham Jah College of Engineering and Technology</strong>, with a strong interest in building <strong className="text-[#CF9D7B] font-medium">reliable and scalable mobile applications</strong> focused on clarity and usability.
              </p>
              
              <p>
                Beyond academics, I remain actively involved in <strong className="text-[#CF9D7B] font-medium">hands-on development and technology-focused initiatives</strong>, where I enjoy solving practical, real-world problems through well-structured digital solutions.
              </p>

              <div className="pl-6 border-l-2 border-[#724B39] text-[#E0E0E0]">
                <p>
                  I currently serve as <strong className="font-medium text-white">Technical Head, IEEE Computational Intelligence Society (MJCET)</strong> and as a <strong className="font-medium text-white">Cloud Core Member, Google Developer Groups on Campus.</strong> In these roles, I lead technical initiatives, conduct workshops, mentor fellow students, and contribute to events that encourage collaborative and applied learning.
                </p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-2xl bg-[#162127] border border-[#3A3534]/50 shadow-sm hover:shadow-lg hover:border-[#724B39] transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="p-2.5 rounded-lg bg-[#724B39]/20 text-[#CF9D7B] group-hover:bg-[#CF9D7B] group-hover:text-[#0C1519] transition-colors duration-300">
                        <Icon size={24} />
                      </div>
                      <span className="text-3xl font-bold text-[#E0E0E0]">{stat.value}</span>
                    </div>
                    <p className="text-sm font-medium text-[#A0A0A0]">{stat.label}</p>
                  </motion.div>
                )
              })}
            </motion.div>

          </div>
        </div>

        {/* Action Buttons - Absolutely Centered Below Layout */}
        <motion.div 
          className="w-full flex flex-wrap justify-center gap-6 pt-12 relative z-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            onClick={scrollToProjects}
            className="group relative overflow-hidden bg-gradient-to-r from-[#CF9D7B] to-[#724B39] text-[#0C1519] px-10 py-7 rounded-full text-base font-bold shadow-[0_4px_20px_-4px_rgba(207,157,123,0.4)] hover:shadow-[0_8px_30px_-4px_rgba(207,157,123,0.5)] transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative flex items-center gap-3 font-playfair tracking-wide text-lg">
              <FolderGit2 className="w-5 h-5" />
              View Projects
            </span>
          </Button>

          <Button
            onClick={scrollToContact}
            variant="outline"
            className="group bg-white/10 backdrop-blur-sm border border-[#CF9D7B]/50 hover:bg-[#CF9D7B]/20 text-[#E0E0E0] px-10 py-7 rounded-full text-base font-bold transition-all duration-300 hover:scale-[1.02]"
          >
            <span className="relative flex items-center gap-3 font-playfair tracking-wide text-lg">
              Get in Touch
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
