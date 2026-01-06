'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Github, Linkedin, Instagram, CheckCircle, Mail, MessageSquare, User, ArrowRight } from 'lucide-react';
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 px-6 bg-[#0C1519] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CF9D7B]/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#724B39]/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-[2px] bg-[#CF9D7B]" />
                <span className="text-[#CF9D7B] font-bold tracking-widest uppercase text-sm">Contact</span>
             </div>
             
             <h2 className="text-5xl lg:text-7xl font-bold text-[#E0E0E0] mb-8 leading-[0.9] tracking-tight">
               Let's start a <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CF9D7B] to-[#724B39]">project together</span>
             </h2>

             <div className="flex items-center gap-4 mb-12">
                <div className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CF9D7B] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#CF9D7B]"></span>
                </div>
                <p className="text-lg font-medium text-[#A0A0A0]">
                  Available for new opportunities
                </p>
             </div>

             <div className="space-y-6">
                <div>
                   <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-4">Connect</h3>
                   <div className="flex flex-col gap-3">
                      {socialLinks.map((social) => (
                        <a 
                          key={social.label}
                          href={social.href} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-4 p-4 rounded-xl border-2 border-[#3A3534]/50 hover:border-[#CF9D7B] hover:bg-[#162127] hover:scale-[1.02] transition-all duration-300 group"
                        >
                           <div className="w-12 h-12 rounded-full bg-[#0C1519]/50 flex items-center justify-center text-[#CF9D7B] group-hover:bg-[#CF9D7B] group-hover:text-[#0C1519] transition-colors">
                              <social.icon size={24} />
                           </div>
                           <span className="text-lg font-bold text-[#E0E0E0] group-hover:text-[#CF9D7B]">{social.label}</span>
                           <ArrowRight className="ml-auto text-[#A0A0A0] group-hover:text-[#CF9D7B] group-hover:translate-x-1 transition-all" size={20} />
                        </a>
                      ))}
                   </div>
                </div>
             </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#162127] rounded-[2.5rem] p-8 lg:p-12 shadow-2xl border border-[#3A3534]"
          >
             <form 
                action={`https://formsubmit.co/${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                method="POST"
                onSubmit={handleSubmit} 
                className="space-y-8"
              >
                {/* Hidden Fields */}
                <input type="hidden" name="_subject" value="Portfolio Contact" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://arfaan.me/?success=true#contact" />

                <div className="relative group">
                   <label htmlFor="name" className="block text-xs font-bold text-[#A0A0A0] uppercase tracking-wider mb-2">Name</label>
                   <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full pb-4 bg-transparent border-b-2 border-[#3A3534] focus:border-[#CF9D7B] outline-none text-xl font-medium text-[#E0E0E0] placeholder:text-[#A0A0A0]/30 transition-colors pt-2"
                   />
                </div>

                <div className="relative group">
                   <label htmlFor="email" className="block text-xs font-bold text-[#A0A0A0] uppercase tracking-wider mb-2">Email</label>
                   <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full pb-4 bg-transparent border-b-2 border-[#3A3534] focus:border-[#CF9D7B] outline-none text-xl font-medium text-[#E0E0E0] placeholder:text-[#A0A0A0]/30 transition-colors pt-2"
                   />
                </div>

                <div className="relative group">
                   <label htmlFor="message" className="block text-xs font-bold text-[#A0A0A0] uppercase tracking-wider mb-2">Message</label>
                   <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell me about your project..."
                      className="w-full pb-4 bg-transparent border-b-2 border-[#3A3534] focus:border-[#CF9D7B] outline-none text-xl font-medium text-[#E0E0E0] placeholder:text-[#A0A0A0]/30 resize-none transition-colors pt-2"
                   />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#724B39] hover:bg-[#5C3A2A] text-[#E0E0E0] rounded-xl py-8 text-lg font-bold shadow-xl transition-all duration-300 group"
                >
                  {isSubmitting ? 'Sending...' : (
                    <span className="flex items-center gap-2">
                      Send Message <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </Button>
             </form>
          </motion.div>
        </div>

        {/* Footer Text */}
        <div className="mt-12 pt-6 border-t border-[#3A3534]/30 text-center text-sm text-[#A0A0A0] font-medium">
           <p>© 2025 Mohammed Arfan</p>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0C1519]/80 backdrop-blur-md"
            onClick={() => setShowSuccess(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
              className="relative bg-[#162127] rounded-3xl p-10 md:p-14 shadow-2xl max-w-md w-full text-center border border-[#CF9D7B]/20 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#724B39] via-[#CF9D7B] to-[#724B39]" />
              
              <motion.div 
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-[#724B39] to-[#5C3A2A] rounded-full flex items-center justify-center shadow-xl border-4 border-[#CF9D7B]"
              >
                <CheckCircle className="w-10 h-10 text-[#E0E0E0]" strokeWidth={3} />
              </motion.div>

              <h3 className="text-3xl font-bold text-[#E0E0E0] mb-3 tracking-tight">
                Message Received
              </h3>
              
              <p className="text-[#A0A0A0] mb-8 leading-relaxed font-medium">
                Thanks for reaching out! I've received your inquiry and will check my inbox shortly.
              </p>

              <div className="space-y-3">
                 <Button 
                   onClick={() => setShowSuccess(false)} 
                   className="w-full bg-[#724B39] hover:bg-[#5C3A2A] text-[#E0E0E0] rounded-xl py-6 font-bold tracking-wide shadow-lg transition-all hover:scale-[1.02]"
                 >
                   Back to Portfolio
                 </Button>
                 <p className="text-xs text-neutral-400 font-medium pt-2">
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
