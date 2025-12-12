'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Phone, MapPin, Linkedin, Github, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ResumeDownloadModal from '@/components/ResumeDownloadModal';

export default function ResumePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header with Download Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-8"
        >
          <h1 className="text-3xl font-bold text-neutral-900">Resume Preview</h1>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-neutral-900 to-neutral-800 hover:from-neutral-800 hover:to-neutral-700 text-white rounded-xl px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </motion.div>

        {/* Resume Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] overflow-hidden"
        >
          {/* Header Section */}
          <div className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 text-white p-10">
            <h1 className="text-4xl font-bold mb-2">Mohammed Arfan</h1>
            <p className="text-xl text-neutral-300 mb-6">Full Stack Developer | Mobile App Developer</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>arfaanmohammed56@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 XXXXXXXXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                <a href="https://www.linkedin.com/in/mohammed-arfan-167452171" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                  linkedin.com/in/mohammed-arfan-167452171
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                <a href="https://github.com/ArfanCodes" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                  github.com/ArfanCodes
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4" />
                <a href="https://www.instagram.com/Arfaan.3/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                  instagram.com/Arfaan.3
                </a>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-10 space-y-8">
            {/* Education */}
            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-orange-500 rounded-full" />
                Education
              </h2>
              
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900">Bachelor of Engineering in Computer Science</h3>
                    <p className="text-neutral-600">Muffakham Jah College of Engineering and Technology (MJCET)</p>
                  </div>
                  <span className="text-sm text-neutral-500">Expected 2026</span>
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-cyan-500 rounded-full" />
                Technical Skills
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Mobile Development</h3>
                  <p className="text-neutral-700 text-sm">React Native, Expo, TypeScript, Appwrite, AsyncStorage, Zustand</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Frontend Development</h3>
                  <p className="text-neutral-700 text-sm">React, JavaScript, TypeScript, Tailwind CSS</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Backend Development</h3>
                  <p className="text-neutral-700 text-sm">Node.js, Express.js, FastAPI, REST APIs</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Database & Cloud</h3>
                  <p className="text-neutral-700 text-sm">PostgreSQL, SQLite, Supabase, AWS, Prisma</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Tools & Technologies</h3>
                  <p className="text-neutral-700 text-sm">Git, GitHub, React Query, Axios</p>
                </div>
              </div>
            </section>

            {/* Work Experience */}
            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-green-500 rounded-full" />
                Work Experience
              </h2>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900">Technical Head</h3>
                      <p className="text-neutral-600">IEEE Computational Intelligence Society, MJCET</p>
                    </div>
                    <span className="text-sm text-neutral-500">Oct 2025 – Present</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-neutral-700 ml-4">
                    <li>Directed technical strategy for club events, workshops, and community programs</li>
                    <li>Led and mentored student workshop in app development and project-building</li>
                    <li>Collaborated with faculty and student committees to grow chapter reach and engagement</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900">Cloud Core Member</h3>
                      <p className="text-neutral-600">Google Developer Groups on Campus (GDSC MJCET)</p>
                    </div>
                    <span className="text-sm text-neutral-500">Nov 2025 – Present</span>
                  </div>
                  <p className="text-neutral-700 ml-4">Part of the core Cloud team</p>
                </div>
              </div>
            </section>

            {/* Featured Projects */}
            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-purple-500 rounded-full" />
                Featured Projects
              </h2>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-neutral-900">DataNyx (Peso)</h3>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold">2nd Place - FinTech Track</span>
                  </div>
                  <p className="text-neutral-700 mb-2">AI-powered financial stability app with machine learning insights</p>
                  <p className="text-sm text-neutral-600">Tech: React Native, Supabase, Machine Learning</p>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-neutral-900">SwiftBytes</h3>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold">2nd Place - Project Exhibition</span>
                  </div>
                  <p className="text-neutral-700 mb-2">Smart canteen management platform deployed using AWS</p>
                  <p className="text-sm text-neutral-600">Tech: React Native, AWS, Node.js</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">CropLytics</h3>
                  <p className="text-neutral-700 mb-2">Agricultural analytics platform for crop management</p>
                  <p className="text-sm text-neutral-600">Tech: React Native, FastAPI, PostgreSQL</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">Habit Tracker App</h3>
                  <p className="text-neutral-700 mb-2">Personal productivity app with goal tracking</p>
                  <p className="text-sm text-neutral-600">Tech: React Native, Expo, AsyncStorage</p>
                </div>
              </div>
            </section>

            {/* Professional Summary - Last */}
            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-blue-500 rounded-full" />
                Professional Summary
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                Passionate Full Stack Developer with expertise in mobile and web application development. 
                Experienced in building scalable applications using React Native, Node.js, and modern cloud technologies. 
                Strong problem-solver with a track record of delivering high-quality projects and leading technical initiatives.
              </p>
            </section>
          </div>

          {/* Footer */}
          <div className="bg-neutral-50 p-6 text-center text-sm text-neutral-600 border-t border-neutral-200">
            <p>Last Updated: December 2025</p>
          </div>
        </motion.div>
      </div>

      {/* Resume Download Modal */}
      <ResumeDownloadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
