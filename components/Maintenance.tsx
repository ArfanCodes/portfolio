'use client';

import { motion } from 'framer-motion';
import { Hammer, Construction } from 'lucide-react';

export default function Maintenance() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#0A0B0D] overflow-hidden relative font-sans">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dynamic Glowing Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-900/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-900/20 rounded-full blur-[120px]" 
        />
      </div>

      {/* Glassmorphism Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-md w-full text-center relative z-10 p-12 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl"
      >
        {/* Animated Icon Container */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2 
          }}
          className="mb-10 inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-neutral-100 text-[#0A0B0D] shadow-2xl relative group"
        >
          <Hammer className="w-12 h-12 group-hover:rotate-12 transition-transform duration-300" />
          <motion.div 
            animate={{ 
              rotate: [0, 15, -15, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2.5,
              ease: "easeInOut"
            }}
            className="absolute -top-3 -right-3 bg-blue-500 rounded-full p-2.5 border-4 border-[#0A0B0D] shadow-lg"
          >
            <Construction className="w-5 h-5 text-white" />
          </motion.div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight"
        >
          Under <span className="text-blue-500">Maintenance</span>
        </motion.h1>

        {/* Minimal Progress Indicator */}
        <div className="relative pt-2 px-4">
          <div className="flex mb-4 items-center justify-between">
            <div>
              <span className="text-[10px] font-bold inline-block py-1 px-2 uppercase rounded-full text-blue-200 bg-blue-900/30 tracking-widest">
                Under Work
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-blue-400">
                85%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-1 mb-4 text-xs flex rounded-full bg-white/5">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "85%" }}
              transition={{ duration: 2, ease: "circOut", delay: 0.8 }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 relative"
            >
              <motion.div 
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
            </motion.div>
          </div>
        </div>

      </motion.div>
      
      {/* Decorative background grid */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />
    </div>
  );
}
