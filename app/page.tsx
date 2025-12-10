'use client';

import { useEffect, useRef } from 'react';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import ResumeSection from '@/components/sections/ResumeSection';
import ContactSection from '@/components/sections/ContactSection';
import Navigation from '@/components/Navigation';

export default function Home() {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-reveal');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <div ref={addToRefs}>
        <AboutSection />
      </div>
      
      <div ref={addToRefs}>
        <ProjectsSection />
      </div>
      
      <div ref={addToRefs}>
        <ExperienceSection />
      </div>
      
      <div ref={addToRefs}>
        <AchievementsSection />
      </div>
      
      <div ref={addToRefs}>
        <ResumeSection />
      </div>
      
      <div ref={addToRefs}>
        <ContactSection />
      </div>
    </main>
  );
}
