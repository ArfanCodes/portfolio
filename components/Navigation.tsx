'use client';

import { useState, useEffect, useRef } from 'react';
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
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;

      setIsScrolled(currentScrollY > 20);

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
          animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className={`pointer-events-auto rounded-full pl-5 pr-2 py-2 md:pl-7 md:pr-2.5 md:py-2.5 grid grid-cols-[auto_1fr_auto] items-center gap-4 md:gap-8 max-w-5xl w-full transition-all duration-500
            ${isScrolled
              ? 'bg-white/85 backdrop-blur-xl border border-[#ECE5DA] shadow-[0_10px_36px_-16px_rgba(60,40,20,0.18)]'
              : 'bg-white/70 backdrop-blur-lg border border-white/70 shadow-[0_6px_28px_-14px_rgba(60,40,20,0.12)]'
            }`}
        >
          {/* Logo — </> ArfanCodes */}
          <a href="#about" className="group relative flex items-center gap-2 md:gap-2.5">
            <span className="font-mono text-[15px] md:text-[17px] font-semibold tracking-tight text-[#C77F45] group-hover:text-[#A8632F] transition-colors duration-300 leading-none">
              {'</>'}
            </span>
            <span className="font-sora font-bold text-[17px] md:text-xl tracking-tight text-[#1A1614] group-hover:text-[#2A2420] transition-colors duration-300 leading-none">
              ArfanCodes
            </span>
          </a>

          {/* Desktop Nav — centered, underline active */}
          <div className="hidden lg:flex items-center justify-center gap-2 xl:gap-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-3 py-2 text-[14px] font-medium transition-colors duration-300 group"
                >
                  <span className={`relative z-10 font-sora tracking-tight transition-colors duration-300 ${isActive ? 'text-[#1A1614] font-semibold' : 'text-[#6B655E] group-hover:text-[#1A1614]'}`}>
                    {item.name}
                  </span>
                  {isActive ? (
                    <motion.span
                      layoutId="activeUnderline"
                      className="absolute left-3 right-3 -bottom-0.5 h-[2.5px] rounded-full bg-[#C77F45]"
                      transition={{ type: "spring", bounce: 0.18, duration: 0.55 }}
                    />
                  ) : (
                    <span className="absolute left-3 right-3 -bottom-0.5 h-[2.5px] rounded-full bg-[#C77F45]/0 group-hover:bg-[#C77F45]/30 transition-colors duration-300" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Empty spacer so grid centers the nav when CTA width differs */}
          <div className="lg:hidden" />

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-2 justify-self-end">
            <Button
              onClick={scrollToContact}
              className="relative overflow-hidden group bg-[#1A1614] hover:bg-[#2A2420] text-white rounded-full px-4 md:px-5 py-2 md:py-2.5 text-[12px] md:text-[13.5px] font-semibold shadow-[0_6px_18px_-6px_rgba(26,22,20,0.5)] hover:shadow-[0_10px_24px_-6px_rgba(26,22,20,0.55)] hover:-translate-y-[1px] transition-all duration-300"
            >
              <div className="relative flex items-center gap-2">
                <span className="font-sora tracking-tight">Get in Touch</span>
                <ArrowRight size={14} className="hidden md:block group-hover:translate-x-0.5 transition-transform duration-300" />
              </div>
            </Button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              className="lg:hidden w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white hover:bg-[#F5F1EB] border border-[#ECE5DA] text-[#1A1614] transition-all duration-300 active:scale-95 shadow-sm"
            >
              <Menu className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-[#FAF8F5]/95 backdrop-blur-2xl"
          >
            {/* Soft background warmth */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-[-10%] right-[-20%] w-[480px] h-[480px] bg-[#F0E4D4] blur-[140px] rounded-full opacity-80" />
              <div className="absolute bottom-[-10%] left-[-20%] w-[480px] h-[480px] bg-[#EADFCE] blur-[140px] rounded-full opacity-70" />
            </div>

            <div className="flex flex-col h-full p-6 lg:p-8 relative overflow-hidden">

              {/* Header */}
              <div className="flex justify-between items-center mb-12 relative z-10">
                <span className="flex items-center gap-2.5">
                  <span className="font-mono text-[16px] font-semibold tracking-tight text-[#C77F45] leading-none">
                    {'</>'}
                  </span>
                  <span className="font-sora font-bold text-xl tracking-tight text-[#1A1614] leading-none">
                    ArfanCodes
                  </span>
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="w-11 h-11 rounded-full bg-white border border-[#E8E2D9] flex items-center justify-center text-[#1A1614] hover:bg-[#F5F1EB] transition-colors active:scale-95 shadow-sm"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 flex flex-col justify-center gap-8 relative z-10 px-2 mt-4">
                {navItems.map((item, i) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMobileMenuOpen(false);
                        const element = document.querySelector(item.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: isActive ? 14 : 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{
                        delay: i * 0.07,
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      whileHover={{ x: 14 }}
                      className={`relative text-4xl sm:text-5xl font-bold tracking-tight font-sora flex items-center w-max transition-colors duration-300 ${
                        isActive ? 'text-[#1A1614]' : 'text-[#C8BFB3] hover:text-[#7A5A3F]'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="mobileActiveDot"
                          className="absolute -left-5 w-2 h-2 rounded-full bg-[#B8895F]"
                        />
                      )}
                      {item.name}
                    </motion.a>
                  )
                })}
              </nav>

              {/* Footer CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.35 }}
                className="mt-auto pt-8 border-t border-[#E8E2D9] relative z-10 pb-6"
              >
                <Button
                  onClick={scrollToContact}
                  className="w-full bg-[#1A1614] hover:bg-[#2A2420] text-white py-6 rounded-2xl text-lg font-semibold shadow-[0_8px_24px_-8px_rgba(26,22,20,0.45)] font-sora active:scale-[0.99] transition-all"
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
