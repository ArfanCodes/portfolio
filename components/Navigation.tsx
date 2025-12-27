'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Resume', href: '#resume' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      
      // Check if we're at the bottom of the page (for Contact section)
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      
      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }
      
      // Find current section in viewport
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

  // ESC key support and background scroll prevention
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl border-b border-[#9FB2AC]/30 shadow-lg'
            : 'bg-white/60 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo/Brand - Full Name with Accent */}
            <a
              href="#about"
              className="group flex items-center gap-2"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5D0D18] to-[#4A0A12] flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                <span className="text-white font-bold text-lg">MA</span>
              </div>
              <span className="text-lg font-bold text-[#1A1A1A] tracking-tight transition-colors duration-200 group-hover:text-[#5D0D18]">
                Mohammed Arfan
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="relative px-5 py-2.5 group"
                  >
                    <span className={`text-sm font-semibold transition-all duration-200 ${
                      isActive 
                        ? 'text-white' 
                        : 'text-[#1A1A1A] group-hover:text-[#5D0D18]'
                    }`}>
                      {item.name}
                    </span>
                    
                    {/* Active indicator - Bloodstone background */}
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-gradient-to-r from-[#5D0D18] to-[#4A0A12] rounded-xl -z-10 shadow-lg"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    
                    {/* Hover indicator */}
                    {!isActive && (
                      <div className="absolute inset-0 bg-[#9FB2AC]/10 rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <Button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-[#5D0D18] to-[#4A0A12] hover:from-[#4A0A12] hover:to-[#3A0810] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </div>

            {/* Mobile Menu Button - Animated Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 text-[#1A1A1A] hover:bg-[#9FB2AC]/10 rounded-xl transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                {/* Top line */}
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="w-full h-0.5 bg-[#5D0D18] block origin-center rounded-full will-change-transform"
                />
                {/* Middle line */}
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                  transition={{ duration: 0.15 }}
                  className="w-full h-0.5 bg-[#5D0D18] block rounded-full will-change-transform"
                />
                {/* Bottom line */}
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="w-full h-0.5 bg-[#5D0D18] block origin-center rounded-full will-change-transform"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Side Drawer from Right */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 lg:hidden"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            />
            
            {/* Side Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm z-50 bg-gradient-to-br from-[#FFF9EB] to-white shadow-2xl lg:hidden flex flex-col will-change-transform"
              onClick={(e) => e.stopPropagation()}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              {/* Header */}
              <div className="px-6 py-6 border-b-2 border-[#9FB2AC]/20 bg-white/80">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5D0D18] to-[#4A0A12] flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-base">MA</span>
                    </div>
                    <span className="text-base font-bold text-[#1A1A1A]">Navigation</span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 hover:bg-[#9FB2AC]/10 rounded-xl transition-colors duration-200"
                    aria-label="Close menu"
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    <X size={22} className="text-[#5D0D18]" />
                  </button>
                </div>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 overflow-y-auto p-6">
                <nav className="space-y-3">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.href.substring(1);
                    
                    return (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.2,
                          delay: index * 0.05,
                          ease: 'easeOut'
                        }}
                        className={`flex items-center justify-between px-6 py-4 rounded-2xl transition-colors duration-150 will-change-transform ${
                          isActive 
                            ? 'bg-gradient-to-r from-[#5D0D18] to-[#4A0A12] text-white shadow-xl' 
                            : 'bg-white text-[#1A1A1A] hover:bg-[#9FB2AC]/10 border-2 border-[#9FB2AC]/20'
                        }`}
                        style={{ WebkitTapHighlightColor: 'transparent' }}
                      >
                        <span className={`text-base ${isActive ? 'font-bold' : 'font-semibold'}`}>
                          {item.name}
                        </span>
                        {isActive && (
                          <div className="w-2.5 h-2.5 bg-white rounded-full shadow-lg" />
                        )}
                      </motion.a>
                    );
                  })}
                </nav>
              </div>

              {/* Contact CTA - Fixed at Bottom */}
              <div className="p-6 border-t-2 border-[#9FB2AC]/20 bg-white/80">
                <Button
                  onClick={scrollToContact}
                  className="w-full bg-gradient-to-r from-[#5D0D18] to-[#4A0A12] hover:from-[#4A0A12] hover:to-[#3A0810] text-white py-5 rounded-2xl text-base font-bold shadow-xl transition-all duration-200 group"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
