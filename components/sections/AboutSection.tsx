'use client';

import { motion } from 'framer-motion';
import { FolderGit2, TrendingUp, Award, Code, ArrowRight, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageFrame } from '@/components/ui/ImageFrame';
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
    value: '12+',
    label: 'Technologies mastered',
    icon: FolderGit2,
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

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
      className="surface-warm relative min-h-screen flex items-center py-28 lg:py-36 overflow-hidden text-[#1A1614]"
    >

      <div className="container mx-auto px-6 lg:px-10 relative z-10">

        {/* Eyebrow chip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center lg:justify-start mb-10"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#E8E2D9] shadow-[0_2px_10px_-4px_rgba(60,40,20,0.08)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8895F] opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B8895F]"></span>
            </span>
            <span className="text-xs font-medium tracking-[0.14em] uppercase text-[#5A5550] font-sora">
              Mohammed Arfan
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT COLUMN — Editorial Portrait */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">

            <motion.div
              className="relative w-full max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Layered background shapes */}
              <div className="absolute -top-6 -left-6 w-28 h-28 rounded-3xl bg-gradient-to-br from-[#F0E4D4] to-[#E8D7BE] -z-10" />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-gradient-to-tr from-[#FFFFFF] to-[#F5EBDD] border border-[#EFE3D0] -z-10" />

              {/* Image frame */}
              <div className="group relative aspect-[4/5] rounded-[2.25rem] overflow-hidden bg-[#F5EFE6] shadow-[0_30px_80px_-30px_rgba(70,45,25,0.25),0_8px_24px_-12px_rgba(70,45,25,0.12)] ring-1 ring-white/80 border border-[#EFE3D0]/70">
                <ImageFrame
                  src="/images/profile.png"
                  alt="Mohammed Arfan"
                  fill
                  imageClassName="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                  priority
                  fallbackLabel="Portrait unavailable"
                />

                {/* Subtle warm wash at the bottom for badge legibility */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/45 via-white/10 to-transparent pointer-events-none" />

                {/* Badge — Open to Internships */}
                <div className="absolute bottom-5 left-5 right-5 flex justify-start">
                  <div className="inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-xl px-4 py-2 rounded-full shadow-[0_8px_24px_-8px_rgba(70,45,25,0.25)] border border-white/90">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5BA877] opacity-70"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#5BA877]"></span>
                    </span>
                    <span className="text-[13px] font-semibold text-[#1A1614] tracking-tight">
                      Open to Internships
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-3 mt-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {[
                { Icon: Github, href: "https://github.com/ArfanCodes", label: "GitHub" },
                { Icon: Linkedin, href: "https://linkedin.com/in/", label: "LinkedIn" },
                { Icon: XLogo, href: "https://x.com/iamArfaan", label: "X" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-11 h-11 flex items-center justify-center rounded-full bg-white border border-[#E8E2D9] hover:border-[#1A1614] hover:bg-[#1A1614] shadow-[0_2px_8px_-2px_rgba(70,45,25,0.08)] hover:shadow-[0_8px_20px_-6px_rgba(26,22,20,0.35)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <social.Icon size={17} className="text-[#5A5550] group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT COLUMN — Content */}
          <div className="lg:col-span-7 flex flex-col gap-10">

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-sora font-semibold tracking-[-0.025em] leading-[1.02] text-[#1A1614] text-[2.5rem] sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem]">
                Full Stack &amp; Mobile Developer
              </h1>
              <div className="mt-5 flex items-center gap-3">
                <span className="h-[2px] w-12 bg-[#B8895F] rounded-full" />
                <span className="h-[2px] w-3 bg-[#B8895F]/40 rounded-full" />
              </div>
            </motion.div>

            {/* Lead Text — editorial serif */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[#2A2420]"
            >
              <span className="font-cormorant font-light italic text-3xl lg:text-[2.4rem] tracking-tight leading-[1.25]">
                Building production-ready full stack &amp; mobile apps
              </span>{' '}
              <span className="relative inline-block">
                <span className="absolute inset-x-0 bottom-1 h-3 bg-[#F0E4D4] -z-0 rounded-sm" />
                <span className="relative font-cormorant font-medium italic text-3xl lg:text-[2.4rem] tracking-tight leading-[1.25] text-[#7A5A3F]">
                  from ideas
                </span>
              </span>
            </motion.p>

            {/* Bio Text */}
            <motion.div
              className="space-y-5 text-[1.0625rem] lg:text-[1.125rem] font-sans text-[#4A4540] leading-[1.75] max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                I am a third-year Information Technology student at{' '}
                <strong className="text-[#1A1614] font-semibold">Muffakham Jah College of Engineering and Technology</strong>,
                with a strong interest in building{' '}
                <strong className="text-[#1A1614] font-semibold">reliable and scalable full stack web and mobile applications</strong>{' '}
                focused on clarity and usability.
              </p>

              <p>
                Beyond academics, I remain actively involved in{' '}
                <strong className="text-[#1A1614] font-semibold">hands-on development and technology-focused initiatives</strong>,
                where I enjoy solving practical, real-world problems through well-structured digital solutions.
              </p>

              <div className="relative mt-2 p-5 lg:p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-[#EFE3D0] shadow-[0_4px_20px_-12px_rgba(70,45,25,0.15)]">
                <div className="absolute top-0 left-6 -translate-y-1/2 px-2.5 py-0.5 bg-[#1A1614] text-white text-[10px] tracking-[0.18em] uppercase rounded-full font-sora font-medium">
                  Roles
                </div>
                <p className="text-[#3A3530] text-[1rem] lg:text-[1.05rem] leading-[1.7]">
                  I currently serve as{' '}
                  <strong className="font-semibold text-[#1A1614]">Technical Head, IEEE Computational Intelligence Society (MJCET)</strong>{' '}
                  and as a{' '}
                  <strong className="font-semibold text-[#1A1614]">Cloud Core Member, Google Developer Groups on Campus.</strong>{' '}
                  In these roles, I lead technical initiatives, conduct workshops, mentor fellow students,
                  and contribute to events that encourage collaborative and applied learning.
                </p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-3 sm:gap-4 mt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                    className="group relative p-5 lg:p-6 rounded-2xl bg-white border border-[#EFE3D0] shadow-[0_2px_10px_-4px_rgba(70,45,25,0.08)] hover:shadow-[0_16px_36px_-18px_rgba(70,45,25,0.25)] hover:border-[#E0CFB5] transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#F5EFE6] flex items-center justify-center text-[#7A5A3F] group-hover:bg-[#1A1614] group-hover:text-[#F0E4D4] transition-colors duration-300">
                        <Icon size={18} strokeWidth={1.8} />
                      </div>
                      <span className="text-[10px] tracking-[0.18em] uppercase text-[#A39A8E] font-medium font-sora">
                        0{index + 1}
                      </span>
                    </div>
                    <div className="text-[2rem] lg:text-[2.25rem] font-semibold tracking-tight text-[#1A1614] font-sora leading-none mb-2">
                      {stat.value}
                    </div>
                    <p className="text-[13px] lg:text-sm text-[#6B655E] leading-snug font-medium">
                      {stat.label}
                    </p>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                onClick={scrollToProjects}
                className="group bg-[#1A1614] hover:bg-[#2A2420] text-white px-7 py-6 rounded-full text-[15px] font-semibold shadow-[0_10px_28px_-12px_rgba(26,22,20,0.55)] hover:shadow-[0_14px_36px_-12px_rgba(26,22,20,0.6)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="relative flex items-center gap-2.5 font-sora tracking-tight">
                  <FolderGit2 className="w-4 h-4" strokeWidth={2} />
                  View Projects
                </span>
              </Button>

              <Button
                onClick={scrollToContact}
                variant="outline"
                className="group bg-white hover:bg-[#FAF6EF] border border-[#E0D3BC] text-[#1A1614] px-7 py-6 rounded-full text-[15px] font-semibold shadow-[0_2px_10px_-4px_rgba(70,45,25,0.08)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="relative flex items-center gap-2.5 font-sora tracking-tight">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} />
                </span>
              </Button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
