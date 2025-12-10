'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Technical Head',
    company: 'IEEE Computational Intelligence Society, MJCET',
    period: 'Oct 2025 – Present',
    description: 'As the Technical Head of IEEE-CIS MJCET, I oversee all technical initiatives within the chapter. I lead the student tech team, design hands-on learning experiences, and help foster a strong developer community on campus.',
    achievements: [
      'Directed technical strategy for club events, workshops, and community programs',
      'Led and mentored student workshop in app development and project-building',
      'Collaborated with faculty and student committees to grow chapter reach and engagement',
    ],
  },
  {
    title: 'Cloud Core Member',
    company: 'Google Developer Groups on Campus (GDSC MJCET)',
    period: 'Nov 2025 – Present',
    description: 'Part of the core Cloud team responsible for driving cloud-focused learning on campus, with emphasis on practical demos and beginner-friendly sessions.',
    achievements: [
      'Organized cloud-focused workshops and hands-on sessions',
      'Created beginner-friendly learning materials and demos',
      'Contributed to building a collaborative tech community on campus',
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            My professional journey and the impact I've made along the way
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-neutral-200 transform lg:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 lg:left-1/2 w-4 h-4 bg-neutral-900 rounded-full transform lg:-translate-x-1/2 mt-2" />

                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} pl-8 lg:pl-0`}>
                  <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200 hover:border-neutral-300 transition-all duration-300 hover:shadow-md">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-2 text-sm text-neutral-600">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <Briefcase className="w-5 h-5 text-neutral-400" />
                    </div>

                    <h3 className="text-xl font-semibold text-neutral-900 mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-neutral-600 font-medium mb-3">
                      {exp.company}
                    </p>
                    <p className="text-neutral-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-sm text-neutral-600">
                          <span className="inline-block w-1.5 h-1.5 bg-neutral-400 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
