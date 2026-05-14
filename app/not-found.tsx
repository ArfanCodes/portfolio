'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1614] flex items-center justify-center px-6 relative overflow-hidden">

      {/* Soft warm ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[8%] right-[-12%] w-[640px] h-[640px] rounded-full bg-[#F2E5D2] blur-[150px] opacity-60 animate-soft-float" />
        <div className="absolute bottom-[8%] left-[-12%] w-[640px] h-[640px] rounded-full bg-[#EFE4D4] blur-[160px] opacity-50 animate-soft-float" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #1A1614 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-2xl relative z-10"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#E8E2D9] shadow-[0_2px_10px_-4px_rgba(60,40,20,0.08)] mb-8"
        >
          <Compass size={12} strokeWidth={2.2} className="text-[#C77F45]" />
          <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#5A5550] font-sora">
            Off the map
          </span>
        </motion.div>

        {/* 404 Number */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 180, damping: 18 }}
          className="mb-2 relative"
        >
          <h1 className="text-[120px] md:text-[180px] font-bold font-sora text-[#1A1614] leading-none tracking-[-0.04em] relative inline-block">
            <span className="text-[#1A1614]">4</span>
            <span className="text-[#C77F45]">0</span>
            <span className="text-[#1A1614]">4</span>
          </h1>
          {/* Glow behind */}
          <div className="absolute inset-0 -z-10 blur-3xl bg-gradient-to-br from-[#F5E7D2] to-transparent rounded-full opacity-70" />
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-[2.5rem] font-semibold font-sora text-[#1A1614] mb-4 tracking-[-0.02em] leading-[1.1]">
            Page Not Found
          </h2>
          <p className="text-lg text-[#5A5550] leading-relaxed font-sans max-w-md mx-auto">
            Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#1A1614] hover:bg-[#2A2420] text-white rounded-full text-[14.5px] font-semibold font-sora tracking-tight shadow-[0_12px_28px_-12px_rgba(26,22,20,0.55)] hover:shadow-[0_16px_36px_-12px_rgba(26,22,20,0.6)] hover:-translate-y-[1px] transition-all duration-300"
          >
            <Home className="w-4 h-4" strokeWidth={2} />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-[#FAF6EF] border border-[#E0D3BC] text-[#1A1614] rounded-full text-[14.5px] font-semibold font-sora tracking-tight shadow-[0_2px_10px_-4px_rgba(70,45,25,0.08)] hover:-translate-y-[1px] transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" strokeWidth={2} />
            Go Back
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
