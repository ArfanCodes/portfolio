// Shared animation configuration for consistent section transitions
export const sectionTransition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1] as const, // easeOut cubic-bezier
};

// Staggered entry animations for section content
export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  show: { 
    opacity: 1, 
    y: 0,
    transition: sectionTransition,
  },
};

// Section-to-section handoff configuration
export const sectionHandoff = {
  // About section - exits as Projects enters
  about: {
    viewport: { once: true, amount: 0.3, margin: '0px 0px -10% 0px' },
    initial: { opacity: 1, y: 0 },
    whileInView: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -16 },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
  
  // Projects section - enters as About exits
  projects: {
    viewport: { once: true, amount: 0.15, margin: '0px 0px -15% 0px' },
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const, delay: 0.1 },
  },
  
  // Experience section - smooth entry
  experience: {
    viewport: { once: true, amount: 0.15, margin: '0px 0px -15% 0px' },
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const, delay: 0.1 },
  },
  
  // Achievements section - smooth entry
  achievements: {
    viewport: { once: true, amount: 0.15, margin: '0px 0px -15% 0px' },
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const, delay: 0.1 },
  },
  
  // Contact section - final entry
  contact: {
    viewport: { once: true, amount: 0.15, margin: '0px 0px -10% 0px' },
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const, delay: 0.1 },
  },
};

// Card animations with stagger
export const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: index * 0.1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

// Shared viewport configuration for consistent triggering
export const defaultViewport = {
  once: true,
  amount: 0.2,
  margin: '0px 0px -10% 0px',
};
