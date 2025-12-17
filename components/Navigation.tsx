'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail } from 'lucide-react';
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
      setIsScrolled(window.scrollY > 40);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
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
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white border-b border-[#E5E7EB] h-14'
            : 'bg-white h-16'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Brand Name with Micro-Accent Underline */}
            <a
              href="#about"
              className="flex flex-col group"
            >
              <span className="text-xl font-semibold text-[#111827] tracking-tight">
                Mohammed <span className="relative inline-block">
                  Arfan
                  {/* Micro-accent underline under last name */}
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#C9A24D] transform origin-left transition-transform duration-200 group-hover:scale-x-110" />
                </span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="relative py-2 text-sm transition-colors duration-150 group"
                  >
                    <span className={`${
                      isActive 
                        ? 'text-[#111827] font-semibold' 
                        : 'text-neutral-600 font-normal group-hover:text-[#111827]'
                    }`}>
                      {item.name}
                    </span>
                    
                    {/* Active State - Short Centered Underline (Instant) */}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[2px] bg-[#111827]" />
                    )}
                    
                    {/* Hover State - Fade In Underline */}
                    {!isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[2px] bg-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="border-2 border-[#111827] text-[#111827] hover:bg-[#111827] hover:text-white px-5 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Contact
              </Button>
            </div>

            {/* Mobile Menu Button - Animated */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#111827] relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                {/* Top line */}
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="w-full h-0.5 bg-[#111827] block origin-center"
                />
                {/* Middle line */}
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-0.5 bg-[#111827] block"
                />
                {/* Bottom line */}
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="w-full h-0.5 bg-[#111827] block origin-center"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Slide from Right */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/20 lg:hidden"
            />
            
            {/* Side Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm z-50 bg-white shadow-2xl lg:hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full">
                {/* Header Row */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-200">
                  <span className="text-lg font-semibold text-[#111827]">
                    Mohammed Arfan
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 -mr-2 text-neutral-600 hover:text-[#111827] transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Navigation Items - Text Only */}
                <nav className="flex-1 overflow-y-auto py-2">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.href.substring(1);
                    
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="relative flex items-center h-14 px-6 transition-colors group"
                      >
                        {/* Left Accent Dot for Active State */}
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute left-6 w-1.5 h-1.5 bg-[#C9A24D] rounded-full"
                          />
                        )}
                        
                        {/* Text */}
                        <span className={`${
                          isActive 
                            ? 'text-[#111827] font-semibold ml-4' 
                            : 'text-neutral-600 group-hover:text-[#111827]'
                        } text-base transition-colors`}>
                          {item.name}
                        </span>

                        {/* Light Divider */}
                        {index < navItems.length - 1 && (
                          <div className="absolute bottom-0 left-6 right-6 h-px bg-neutral-100" />
                        )}
                      </a>
                    );
                  })}
                </nav>

                {/* Contact CTA at Bottom */}
                <div className="px-6 py-4 border-t border-neutral-200 bg-white">
                  <Button
                    onClick={scrollToContact}
                    className="w-full bg-[#111827] hover:bg-[#1F2937] text-white py-3.5 rounded-lg text-base font-medium transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
