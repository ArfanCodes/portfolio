'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Instagram, CheckCircle, ArrowRight, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/ArfanCodes',
    color: '#181717'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohammed-arfan-167452171',
    color: '#0A66C2'
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/Arfaan.3/',
    color: '#E4405F'
  },
];

export default function ContactSection() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 6000);
      window.history.replaceState({}, '', window.location.pathname + '#contact');
    }
  }, []);

  const handleSubmit = () => {
    setIsSubmitting(true);
  };

  return (
    <section
      id="contact"
      className="relative pt-20 lg:pt-28 pb-4 bg-[#FAF8F5] text-[#1A1614] overflow-hidden"
    >
      {/* Soft warm ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[5%] right-[-15%] w-[620px] h-[620px] rounded-full bg-[#F2E5D2] blur-[150px] opacity-60" />
        <div className="absolute bottom-[5%] left-[-15%] w-[620px] h-[620px] rounded-full bg-[#EFE4D4] blur-[150px] opacity-50" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #1A1614 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-10 relative z-10 max-w-6xl">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

          {/* LEFT — Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#E8E2D9] shadow-[0_2px_10px_-4px_rgba(60,40,20,0.08)] mb-6 w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C77F45]" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#5A5550] font-sora">
                Contact
              </span>
            </div>

            <h2 className="font-sora font-semibold tracking-[-0.025em] leading-[1.02] text-[#1A1614] text-4xl sm:text-5xl lg:text-[3.25rem]">
              Let&apos;s start a <br className="hidden sm:block" />
              <span className="text-[#C77F45]">project together</span>
            </h2>

            <div className="flex items-center gap-3 mt-7 mb-10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5BA877] opacity-70"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#5BA877]"></span>
              </span>
              <p className="text-[15px] font-medium text-[#5A5550]">
                Available for new opportunities
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-[2px] w-3.5 rounded-full bg-[#C77F45]" />
                <h3 className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-[#7A5A3F] font-sora">
                  Connect
                </h3>
              </div>
              <div className="flex flex-col gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-3.5 rounded-2xl bg-white border border-[#EFE3D0] shadow-[0_2px_10px_-4px_rgba(70,45,25,0.06)] hover:shadow-[0_12px_28px_-14px_rgba(70,45,25,0.2)] hover:border-[#E0CFB5] hover:-translate-y-[1px] transition-all duration-300"
                  >
                    <div className="w-11 h-11 shrink-0 rounded-xl bg-[#F5EFE6] flex items-center justify-center text-[#7A5A3F] group-hover:bg-[#1A1614] group-hover:text-[#E8B97E] transition-colors duration-300">
                      <social.icon size={19} strokeWidth={1.8} />
                    </div>
                    <span className="text-[15px] font-semibold text-[#1A1614] tracking-tight">
                      {social.label}
                    </span>
                    <ArrowRight
                      className="ml-auto text-[#A39A8E] group-hover:text-[#1A1614] group-hover:translate-x-1 transition-all duration-300"
                      size={17}
                      strokeWidth={2}
                    />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-3xl bg-white border border-[#EFE3D0] shadow-[0_8px_32px_-16px_rgba(70,45,25,0.18)] p-6 sm:p-8 lg:p-10 overflow-hidden">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C77F45] via-[#E8B97E] to-transparent" />

              <form
                action={`https://formsubmit.co/${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Hidden Fields */}
                <input type="hidden" name="_subject" value="Portfolio Contact" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://arfaan.me/?success=true#contact" />

                <div>
                  <label
                    htmlFor="name"
                    className="block text-[10.5px] font-semibold tracking-[0.18em] uppercase text-[#7A5A3F] mb-2 font-sora"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#FAF6EF] border border-[#EFE3D0] focus:bg-white focus:border-[#C77F45] focus:ring-4 focus:ring-[#C77F45]/12 outline-none text-[15px] font-medium text-[#1A1614] placeholder:text-[#B3ACA1] transition-all duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[10.5px] font-semibold tracking-[0.18em] uppercase text-[#7A5A3F] mb-2 font-sora"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#FAF6EF] border border-[#EFE3D0] focus:bg-white focus:border-[#C77F45] focus:ring-4 focus:ring-[#C77F45]/12 outline-none text-[15px] font-medium text-[#1A1614] placeholder:text-[#B3ACA1] transition-all duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[10.5px] font-semibold tracking-[0.18em] uppercase text-[#7A5A3F] mb-2 font-sora"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3.5 rounded-xl bg-[#FAF6EF] border border-[#EFE3D0] focus:bg-white focus:border-[#C77F45] focus:ring-4 focus:ring-[#C77F45]/12 outline-none text-[15px] font-medium text-[#1A1614] placeholder:text-[#B3ACA1] resize-none transition-all duration-200"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full bg-[#1A1614] hover:bg-[#2A2420] text-white rounded-full py-6 text-[15px] font-semibold shadow-[0_12px_28px_-12px_rgba(26,22,20,0.55)] hover:shadow-[0_16px_36px_-12px_rgba(26,22,20,0.6)] hover:-translate-y-[1px] transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2 font-sora">Sending...</span>
                  ) : (
                    <span className="flex items-center gap-2.5 font-sora tracking-tight">
                      <Send size={15} strokeWidth={2.2} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      Send Message
                      <ArrowRight size={15} strokeWidth={2.2} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mt-12 lg:mt-16"
      >
        {/* Hairline gradient divider */}
        <div className="container mx-auto px-6 lg:px-10 max-w-6xl">
          <div className="h-px bg-gradient-to-r from-transparent via-[#E0D3BC] to-transparent" />
        </div>

        <div className="container mx-auto px-6 lg:px-10 max-w-6xl">
          <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-4">

            {/* Brand */}
            <div className="flex items-center gap-2.5 select-none">
              <span className="font-mono text-[14px] font-semibold tracking-tight text-[#C77F45] leading-none">
                {'</>'}
              </span>
              <span className="font-sora font-semibold text-[15px] tracking-tight text-[#1A1614] leading-none">
                ArfanCodes
              </span>
            </div>

            {/* Copyright */}
            <p className="text-[12.5px] text-[#8B8680] font-medium tracking-tight font-sora">
              © 2026 Mohammed Arfan
            </p>

            {/* Back to top */}
            <a
              href="#about"
              className="group inline-flex items-center gap-2 text-[12.5px] font-medium text-[#5A5550] hover:text-[#1A1614] transition-colors duration-300 font-sora tracking-tight"
            >
              Back to top
              <span className="inline-flex w-6 h-6 items-center justify-center rounded-full bg-white border border-[#EFE3D0] shadow-[0_2px_6px_-2px_rgba(70,45,25,0.1)] group-hover:border-[#D9CFBE] group-hover:-translate-y-0.5 transition-all duration-300">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M5 8V2M5 2L2 5M5 2L8 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </motion.footer>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1614]/40 backdrop-blur-md"
            onClick={() => setShowSuccess(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, type: 'spring', bounce: 0.3 }}
              className="relative bg-white rounded-3xl p-10 md:p-12 shadow-[0_30px_80px_-20px_rgba(70,45,25,0.4)] max-w-md w-full text-center border border-[#EFE3D0] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#C77F45] via-[#E8B97E] to-[#C77F45]" />

              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="w-20 h-20 mx-auto mb-7 rounded-full bg-gradient-to-br from-[#F8E2BB] via-[#E8B97E] to-[#C77F45] p-[3px] shadow-[0_14px_30px_-12px_rgba(199,127,69,0.5)]"
              >
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <CheckCircle className="w-9 h-9 text-[#1A1614]" strokeWidth={2.2} />
                </div>
              </motion.div>

              <h3 className="font-sora text-2xl sm:text-[1.75rem] font-semibold text-[#1A1614] mb-3 tracking-tight">
                Message Received
              </h3>

              <p className="text-[#5A5550] mb-7 leading-relaxed text-[14.5px]">
                Thanks for reaching out! I&apos;ve received your inquiry and will check my inbox shortly.
              </p>

              <div className="space-y-3">
                <Button
                  onClick={() => setShowSuccess(false)}
                  className="w-full bg-[#1A1614] hover:bg-[#2A2420] text-white rounded-full py-6 font-semibold shadow-[0_10px_24px_-10px_rgba(26,22,20,0.5)] hover:-translate-y-[1px] transition-all duration-300 font-sora tracking-tight"
                >
                  Back to Portfolio
                </Button>
                <p className="text-[11.5px] text-[#A39A8E] font-medium pt-1">
                  Auto-closing in a few seconds...
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
