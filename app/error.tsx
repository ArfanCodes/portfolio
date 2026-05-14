'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { RotateCw, Home, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1614] flex items-center justify-center px-6 relative overflow-hidden">

      {/* Soft warm ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[8%] right-[-12%] w-[620px] h-[620px] rounded-full bg-[#F2E5D2] blur-[150px] opacity-55 animate-soft-float" />
        <div className="absolute bottom-[8%] left-[-12%] w-[620px] h-[620px] rounded-full bg-[#EFE4D4] blur-[160px] opacity-50 animate-soft-float" />
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
        className="relative z-10 w-full max-w-lg"
      >
        <div className="relative rounded-3xl bg-white border border-[#EFE3D0] shadow-[0_20px_50px_-20px_rgba(70,45,25,0.25)] p-8 sm:p-10 text-center overflow-hidden">

          {/* Top accent */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C77F45] via-[#E8B97E] to-transparent" />

          {/* Icon medallion */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
            className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#F8E2BB] via-[#E8B97E] to-[#C77F45] p-[3px] shadow-[0_14px_30px_-12px_rgba(199,127,69,0.5)]"
          >
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <AlertCircle className="w-7 h-7 text-[#1A1614]" strokeWidth={2.2} />
            </div>
          </motion.div>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5EFE6] border border-[#EFE3D0] mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C77F45]" />
            <span className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-[#7A5A3F] font-sora">
              Something went wrong
            </span>
          </div>

          <h2 className="font-sora text-[1.75rem] sm:text-[2rem] font-semibold tracking-[-0.02em] leading-[1.1] text-[#1A1614] mb-3">
            We hit a small bump
          </h2>

          <p className="text-[15px] text-[#5A5550] leading-relaxed mb-7 max-w-sm mx-auto">
            An unexpected error occurred while loading this page. You can try again, or head back home.
          </p>

          {error?.digest && (
            <div className="mb-7 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAF6EF] border border-[#EFE3D0]">
              <span className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-[#8B8680] font-sora">Ref</span>
              <span className="text-[11px] font-mono text-[#5A5550]">{error.digest}</span>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => reset()}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1A1614] hover:bg-[#2A2420] text-white rounded-full text-[14px] font-semibold font-sora tracking-tight shadow-[0_12px_28px_-12px_rgba(26,22,20,0.55)] hover:shadow-[0_16px_36px_-12px_rgba(26,22,20,0.6)] hover:-translate-y-[1px] transition-all duration-300"
            >
              <RotateCw className="w-4 h-4 transition-transform duration-500 group-hover:rotate-180" strokeWidth={2} />
              Try Again
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-[#FAF6EF] border border-[#E0D3BC] text-[#1A1614] rounded-full text-[14px] font-semibold font-sora tracking-tight shadow-[0_2px_10px_-4px_rgba(70,45,25,0.08)] hover:-translate-y-[1px] transition-all duration-300"
            >
              <Home className="w-4 h-4" strokeWidth={2} />
              Go Home
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
