'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Smartphone, Rocket, Globe, Trophy, Code, Zap } from 'lucide-react';
import { SiReact, SiNodedotjs, SiAmazon } from 'react-icons/si';

const stats = [
  { 
    icon: Smartphone, 
    value: '1+', 
    label: 'Year in Mobile Dev', 
    gradient: 'from-blue-500 via-blue-600 to-cyan-500',
    iconBg: 'from-blue-100 to-cyan-50'
  },
  { 
    icon: Rocket, 
    value: '3+', 
    label: 'Projects Delivered', 
    gradient: 'from-purple-500 via-purple-600 to-pink-500',
    iconBg: 'from-purple-100 to-pink-50'
  },
  { 
    icon: Globe, 
    value: '1', 
    label: 'Apps Published', 
    gradient: 'from-green-500 via-emerald-600 to-teal-500',
    iconBg: 'from-green-100 to-teal-50'
  },
  { 
    icon: Trophy, 
    value: '2+', 
    label: 'Hackathon Wins', 
    gradient: 'from-orange-500 via-red-500 to-pink-500',
    iconBg: 'from-orange-100 to-pink-50'
  },
];

const coreSkills = [
  { name: 'React Native', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
];

export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20 pb-16 relative overflow-hidden"
    >
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white to-purple-50/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.08)_0%,transparent_50%)]" />
      
      {/* Branded "MA" watermark */}
      <div className="absolute top-1/4 left-10 text-[180px] font-bold text-neutral-900/[0.015] select-none pointer-events-none">
        MA
      </div>
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Enhanced Title with Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <div className="text-5xl lg:text-7xl font-bold text-neutral-900 mb-4">
            {['App', 'Developer'].map((word, wordIndex) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.3 + wordIndex * 0.2,
                  type: 'spring',
                  stiffness: 100
                }}
                className="inline-block mr-4"
              >
                {word.split('').map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.4 + wordIndex * 0.2 + charIndex * 0.05,
                      type: 'spring',
                      stiffness: 120
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            ))}
          </div>
          
          {/* Personal Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-lg text-neutral-600 max-w-2xl mx-auto italic"
          >
            "Turning ideas into thoughtful digital products."
          </motion.p>

          {/* Core Skills Snapshot */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex items-center justify-center gap-3 mt-6"
          >
            {coreSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                className="flex items-center gap-2 px-3 py-1.5 bg-white/60 backdrop-blur-sm border border-neutral-200/60 rounded-full shadow-sm"
              >
                <skill.icon className="w-4 h-4" style={{ color: skill.color }} />
                <span className="text-sm font-medium text-neutral-700">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* About Me Section with Enhanced Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold mb-3 text-center bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            About Me
          </motion.h2>

          {/* Micro Profile Summary */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center text-sm text-neutral-600 mb-10 max-w-2xl mx-auto"
          >
            Mobile app developer with a strong foundation in React Native and cloud-backed systems.
          </motion.p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Enhanced Profile Image with Spotlight */}
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, type: 'spring', stiffness: 100 }}
              className="flex justify-center items-center relative"
            >
              {/* Spotlight glow behind image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 bg-gradient-radial from-blue-200/30 via-purple-200/20 to-transparent blur-3xl" />
              </div>

              {/* Geometric rings */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-[420px] h-[420px] border border-neutral-200/30 rounded-full" />
              </motion.div>
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-[450px] h-[450px] border border-neutral-200/20 rounded-full" />
              </motion.div>

              <div className="relative z-10">
                {/* Radiant border effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 rounded-full blur-sm opacity-60 animate-pulse" />
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 rounded-full blur-md opacity-40" />
                
                {/* Profile image container - Larger size */}
                <motion.div 
                  className="relative w-72 h-72 lg:w-96 lg:h-96"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full" />
                  <div className="absolute inset-0 flex items-center justify-center rounded-full border-4 border-white overflow-hidden bg-white shadow-2xl">
                    <Image
                      src="/images/profile.png"
                      alt="Mohammed Arfan"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Vertical Divider */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-200 to-transparent" />

            {/* Enhanced Text Content with Card Frame */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="space-y-6"
            >
              <div className="bg-white/40 backdrop-blur-sm border border-neutral-200/60 rounded-2xl p-8 shadow-sm">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  {/* Enhanced Introduction */}
                  <h3 className="text-2xl lg:text-3xl font-bold mb-6 bg-gradient-to-r from-neutral-800 via-neutral-600 to-neutral-800 bg-clip-text text-transparent">
                    Hi, I'm Mohammed Arfan
                  </h3>
                  
                  {/* Reformatted paragraphs with better spacing */}
                  <motion.p 
                    className="text-base text-neutral-700 leading-relaxed mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    I'm <span className="font-bold text-neutral-900">Mohammed Arfan</span>, a <span className="font-bold text-neutral-900">3rd year engineering student</span> at <span className="font-bold text-neutral-900">Muffakham Jah College of Engineering & Technology (MJCET)</span> and a <span className="font-bold text-neutral-900">React Native app developer</span> who enjoys building <span className="font-semibold text-neutral-900">clean, scalable and intuitive mobile applications</span>. I focus on turning real-world problems into functional and thoughtfully designed digital experiences, whether that involves <span className="font-semibold text-neutral-900">efficient state management, modern UI patterns or seamless backend integrations</span>.
                  </motion.p>
                  <motion.p 
                    className="text-base text-neutral-700 leading-relaxed mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    Beyond academics and development work, I stay deeply involved in <span className="font-semibold text-neutral-900">community-driven tech initiatives</span>. As the <span className="font-bold text-neutral-900">Technical Head of IEEE CIS MJCET</span> and a <span className="font-bold text-neutral-900">Cloud Core Member at GDG</span>, I lead workshops, mentor student developers and contribute to events that encourage <span className="font-semibold text-neutral-900">practical learning and innovation</span>.
                  </motion.p>

                </motion.div>
              </div>

              {/* Enhanced Stats Section */}
              <div>
                <h4 className="text-sm font-semibold text-neutral-600 mb-4 text-center">Quick Highlights</h4>
                <div className="grid grid-cols-2 gap-3">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 1.1 + index * 0.1,
                        type: 'spring',
                        stiffness: 200
                      }}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                      className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-neutral-200/60 shadow-sm hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-lg bg-gradient-to-br ${stat.iconBg} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                          <stat.icon 
                            className="w-5 h-5"
                            strokeWidth={2.5}
                            style={{
                              stroke: index === 0 ? '#3b82f6' : 
                                     index === 1 ? '#a855f7' : 
                                     index === 2 ? '#10b981' : 
                                     '#f97316'
                            }}
                          />
                        </div>
                        <div>
                          <div className="text-xl font-bold text-neutral-900">{stat.value}</div>
                          <div className="text-[10px] text-neutral-600 leading-tight">{stat.label}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Currently Learning Section */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 border border-neutral-200/60 rounded-xl p-4"
              >
                <h4 className="text-sm font-semibold text-neutral-700 mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-blue-500" />
                  Currently Learning
                </h4>
                <p className="text-xs text-neutral-600">
                  Advanced AWS architectures, GraphQL, and AI/ML integration in mobile apps
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Accent Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-16"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
          <div className="flex justify-center mt-6">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
