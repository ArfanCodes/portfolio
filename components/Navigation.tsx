'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Skills', href: '#skills' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.href.substring(1));
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      
      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }
      
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="pointer-events-auto bg-[#0C1519]/70 backdrop-blur-md border border-[#CF9D7B]/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] rounded-full px-4 py-3 md:px-6 md:py-3 flex items-center gap-4 md:gap-8 max-w-5xl w-full justify-between"
        >
          {/* Logo */}
          <a
            href="#about"
            className="group relative"
          >
            <span className="font-playfair font-bold text-2xl md:text-3xl text-[#CF9D7B] tracking-tight group-hover:text-white transition-colors duration-300">
              MA
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#CF9D7B] group-hover:w-full transition-all duration-300" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300"
                >
                  <span className={`relative z-10 font-playfair tracking-wide transition-colors duration-300 ${isActive ? 'text-[#0C1519] font-bold' : 'text-[#A0A0A0] hover:text-[#CF9D7B]'}`}>
                    {item.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-[#CF9D7B] rounded-full shadow-sm"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3 pr-1 md:pr-0">
            <Button
              onClick={scrollToContact}
              className="relative overflow-hidden group bg-gradient-to-r from-[#CF9D7B] to-[#724B39] text-[#0C1519] rounded-full px-5 md:px-6 py-2 md:py-2.5 text-xs md:text-sm font-bold shadow-[0_4px_14px_0_rgba(207,157,123,0.39)] hover:shadow-[0_6px_20px_rgba(207,157,123,0.23)] hover:scale-[1.02] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
              <div className="relative flex items-center gap-2">
                <span className="font-playfair tracking-wide font-bold">Get in Touch</span>
                <ArrowRight size={14} className="hidden lg:block group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Button>
            
            {/* Mobile Hamburger - Premium Style */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-[#162127]/50 hover:bg-[#CF9D7B]/10 border border-[#CF9D7B]/20 text-[#CF9D7B] transition-all duration-300 active:scale-95 backdrop-blur-sm"
            >
              <Menu size={20} />
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay - Performance Optimized */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-0 z-[60] bg-[#0C1519]/95 backdrop-blur-sm"
          >
            <div className="flex flex-col h-full p-6 relative overflow-hidden">
              
              {/* Header */}
              <div className="flex justify-between items-center mb-12 relative z-10">
                <span className="font-playfair font-bold text-3xl text-[#CF9D7B]">MA</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-12 h-12 rounded-full border border-[#CF9D7B]/20 flex items-center justify-center text-[#CF9D7B] hover:bg-[#CF9D7B]/10 transition-colors active:scale-95"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Links - Optimized Animations */}
              <nav className="flex-1 flex flex-col justify-center items-center gap-8 relative z-10">
                {navItems.map((item, i) => {
                   const isActive = activeSection === item.href.substring(1);
                   return (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => {
                           e.preventDefault();
                           setIsMobileMenuOpen(false);
                           // Immediate scroll, no delay
                           const element = document.querySelector(item.href);
                           if (element) {
                             element.scrollIntoView({ behavior: 'smooth' });
                           }
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          delay: i * 0.05,
                          duration: 0.3,
                          ease: 'easeOut'
                        }}
                        className={`text-4xl font-bold tracking-tight transition-colors duration-200 font-playfair will-change-transform ${
                          isActive ? 'text-[#CF9D7B]' : 'text-[#CF9D7B]/40 active:text-[#CF9D7B]'
                        }`}
                      >
                         {item.name}
                      </motion.a>
                   )
                })}
              </nav>

              {/* Footer CTA - Simplified */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="mt-auto pt-8 border-t border-[#CF9D7B]/10 relative z-10 pb-8"
              >
                 <Button 
                    onClick={scrollToContact}
                    className="w-full bg-gradient-to-r from-[#CF9D7B] to-[#724B39] text-[#0C1519] py-6 rounded-2xl text-lg font-bold shadow-xl font-playfair active:scale-95 transition-transform"
                 >
                    Get in Touch
                 </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
