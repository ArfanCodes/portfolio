'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Smartphone, Rocket, Globe, Trophy } from 'lucide-react';

const stats = [
  { 
    icon: Smartphone, 
    value: '1 + year', 
    label: 'Experience in Mobile Dev', 
    gradient: 'from-blue-500 via-blue-600 to-cyan-500',
    iconBg: 'from-blue-100 to-cyan-50'
  },
  { 
    icon: Rocket, 
    value: '3+', 
    label: 'Projects Delivered End-to-End', 
    gradient: 'from-purple-500 via-purple-600 to-pink-500',
    iconBg: 'from-purple-100 to-pink-50'
  },
  { 
    icon: Globe, 
    value: '1', 
    label: 'Apps Published / Deployed', 
    gradient: 'from-green-500 via-emerald-600 to-teal-500',
    iconBg: 'from-green-100 to-teal-50'
  },
  { 
    icon: Trophy, 
    value: '2+', 
    label: 'Wins in Hackathons', 
    gradient: 'from-orange-500 via-red-500 to-pink-500',
    iconBg: 'from-orange-100 to-pink-50'
  },
];

export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20 relative overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,120,120,0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(100,100,100,0.05)_0%,transparent_50%)]" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* App Developer Title with Word Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <div className="text-5xl lg:text-7xl font-bold text-neutral-900 mb-2">
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
        </motion.div>

        {/* About Me Section with Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            About Me
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Circular Profile Image with Radiant Border */}
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, type: 'spring', stiffness: 100 }}
              className="flex justify-center"
            >
              <div className="relative">
                {/* Radiant border effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-200 rounded-full blur-sm opacity-75 animate-pulse" />
                <div className="absolute -inset-2 bg-gradient-to-r from-neutral-300 via-neutral-100 to-neutral-300 rounded-full blur-md opacity-50" />
                
                {/* Profile image container */}
                <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-full" />
                  <div className="absolute inset-0 flex items-center justify-center rounded-full border-4 border-white overflow-hidden bg-white shadow-2xl">
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

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-neutral-800 via-neutral-600 to-neutral-800 bg-clip-text text-transparent">
                  Hi, I'm Mohammed Arfan
                </h3>
                <motion.p 
                  className="text-base text-neutral-600 leading-relaxed mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  I'm Mohammed Arfan, a <span className="font-semibold text-neutral-900">React Native app developer</span> with a strong focus on building clean, scalable, and intuitive mobile applications. I enjoy turning real-world problems into functional, well-designed digital experiences—whether it's through smart state management, modern UI patterns, or seamless backend integrations.
                </motion.p>
                <motion.p 
                  className="text-base text-neutral-600 leading-relaxed mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  Alongside my technical work, I'm highly active in extracurricular and community-driven tech initiatives. As the <span className="font-semibold text-neutral-900">Technical Head of IEEE-CIS MJCET</span> and a <span className="font-semibold text-neutral-900">Cloud Core Member at GDSC</span>, I lead workshops, guide student developers, and help events that promote hands-on learning and innovation.
                </motion.p>
                <motion.p 
                  className="text-base text-neutral-600 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  I thrive in environments where I can build, collaborate, and contribute—both as a developer and as someone who uplifts the tech community around me.
                </motion.p>
              </motion.div>

              {/* Stats with Icons */}
              <div className="grid grid-cols-2 gap-4 pt-6">
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
                    className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.iconBg} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
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
                        <div className="text-2xl font-bold text-neutral-900">{stat.value}</div>
                        <div className="text-xs text-neutral-600">{stat.label}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

