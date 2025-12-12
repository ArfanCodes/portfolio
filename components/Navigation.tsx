'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, FolderOpen, Briefcase, Trophy, FileText, Mail, Sparkles } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about', icon: User },
  { name: 'Projects', href: '#projects', icon: FolderOpen },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Achievements', href: '#achievements', icon: Trophy },
  { name: 'Resume', href: '#resume', icon: FileText },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [logoHovered, setLogoHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

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

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ 
          y: 0,
          height: isScrolled ? '64px' : '80px'
        }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)]'
            : 'bg-gradient-to-r from-white/95 via-white/90 to-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.03)]'
        }`}
      >
        {/* Subtle radial backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.03),transparent_50%)] pointer-events-none" />
        
        {/* Bottom glow line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200/60 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-16' : 'h-20'
          }`}>
            {/* Enhanced Logo with Monogram */}
            <motion.a
              href="#about"
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onHoverStart={() => setLogoHovered(true)}
              onHoverEnd={() => setLogoHovered(false)}
            >
              {/* MA Monogram */}
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-neutral-900 to-neutral-700 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                <span className="text-white text-sm font-bold tracking-tight">MA</span>
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className={`text-xl lg:text-2xl font-bold text-neutral-900 tracking-tight transition-all duration-300 ${
                    isScrolled ? 'text-xl' : 'text-2xl'
                  }`}>
                    Mohammed Arfan
                  </span>
                  <span className="text-neutral-400 text-sm">™</span>
                  <AnimatePresence>
                    {logoHovered && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Sparkles className="w-4 h-4 text-blue-500" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                {/* Accent underline */}
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300" />
              </div>
            </motion.a>

            {/* Desktop Navigation with Icons */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                const Icon = item.icon;
                
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative group"
                  >
                    {/* Glass card effect for active item */}
                    {isActive && (
                      <motion.div
                        layoutId="activeBackground"
                        className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    
                    {/* Hover background */}
                    <div className={`absolute inset-0 rounded-xl transition-all duration-200 ${
                      isActive 
                        ? 'bg-transparent' 
                        : 'bg-neutral-50/0 group-hover:bg-neutral-50/80'
                    }`} />
                    
                    <div className={`relative flex items-center gap-2 px-4 py-2.5 transition-all duration-200 ${
                      isActive
                        ? 'text-neutral-900'
                        : 'text-neutral-600 group-hover:text-neutral-900'
                    }`}>
                      <Icon className={`w-4 h-4 transition-all duration-200 ${
                        isScrolled ? 'w-3.5 h-3.5' : 'w-4 h-4'
                      }`} strokeWidth={2} />
                      <span className={`font-medium transition-all duration-200 ${
                        isScrolled ? 'text-sm' : 'text-[15px]'
                      }`} style={{ letterSpacing: '0.01em' }}>
                        {item.name}
                      </span>
                    </div>
                    
                    {/* Enhanced active underline with gradient */}
                    {isActive && (
                      <motion.div
                        layoutId="activeUnderline"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-[0_2px_8px_rgba(59,130,246,0.3)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      >
                        {/* Pulse animation */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.div>
                    )}
                    
                    {/* Hover underline slides in from center */}
                    {!isActive && (
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-8 h-0.5 bg-neutral-300 rounded-full transition-all duration-300" />
                    )}
                  </motion.a>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-white"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-3xl font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
                  >
                    <Icon className="w-8 h-8" strokeWidth={2} />
                    {item.name}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
