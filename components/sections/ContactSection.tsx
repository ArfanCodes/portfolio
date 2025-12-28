'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Github, Linkedin, Instagram, CheckCircle, Mail, MessageSquare, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { 
    icon: Github, 
    label: 'GitHub', 
    subtitle: 'Code & Projects',
    href: 'https://github.com/ArfanCodes',
    color: '#181717'
  },
  { 
    icon: Linkedin, 
    label: 'LinkedIn', 
    subtitle: 'Professional Profile',
    href: 'https://www.linkedin.com/in/mohammed-arfan-167452171',
    color: '#0A66C2'
  },
  { 
    icon: Instagram, 
    label: 'Instagram', 
    subtitle: 'Personal Updates',
    href: 'https://www.instagram.com/Arfaan.3/',
    color: '#E4405F'
  },
];

const trustSignals = [
  '1+ years building production apps',
  'IEEE-CIS Technical Head',
  'Clean, scalable React Native builds',
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
    // FormSubmit will handle the actual submission
    // The form will redirect to ?success=true after submission
  };

  return (
    <section id="contact" className="min-h-screen py-24 px-6 lg:px-8 bg-gradient-to-br from-[#FFF9EB] via-white to-[#FFF9EB] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#9FB2AC]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#5D0D18]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-[#5D0D18] to-[#4A0A12] text-white rounded-full text-sm font-semibold shadow-lg">
              Get In Touch
            </span>
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 tracking-tight">
            Let's Work Together
          </h2>
          
          <p className="text-lg text-[#555555] max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Contact Form (2 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border-2 border-[#9FB2AC]/30">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">Send a Message</h3>
                <p className="text-sm text-neutral-600">Fill out the form below and I'll get back to you within 24 hours</p>
              </div>

              <form 
                action="https://formsubmit.co/arfaanmohammed56@gmail.com" 
                method="POST"
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                {/* FormSubmit Configuration - Hidden Fields */}
                <input type="hidden" name="_subject" value="New Contact Form Submission - Portfolio" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <input type="hidden" name="_next" value={typeof window !== 'undefined' ? `${window.location.origin}${window.location.pathname}?success=true#contact` : ''} />

                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full pl-12 pr-4 py-4 bg-neutral-50 border-2 border-[#9FB2AC]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5D0D18] focus:border-transparent transition-all duration-200 text-base"
                      placeholder="e.g., John Doe"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                    Your Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full pl-12 pr-4 py-4 bg-neutral-50 border-2 border-[#9FB2AC]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5D0D18] focus:border-transparent transition-all duration-200 text-base"
                      placeholder="e.g., john@example.com"
                    />
                  </div>
                  <p className="text-xs text-neutral-500 mt-2">
                    I'll use this to reply to your message
                  </p>
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                    Subject *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full pl-12 pr-4 py-4 bg-neutral-50 border-2 border-[#9FB2AC]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5D0D18] focus:border-transparent transition-all duration-200 text-base"
                      placeholder="e.g., Mobile App Development"
                    />
                  </div>
                  <p className="text-xs text-neutral-500 mt-2">
                    Briefly tell me what you're building or looking for
                  </p>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-neutral-400" />
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-neutral-50 border-2 border-[#9FB2AC]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5D0D18] focus:border-transparent transition-all duration-200 resize-none text-base"
                      placeholder="Tell me about your project, timeline, and goals..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#5D0D18] to-[#4A0A12] hover:from-[#4A0A12] hover:to-[#3A0810] disabled:from-neutral-400 disabled:to-neutral-500 text-white rounded-xl py-6 text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                {/* Trust Signals */}
                <div className="pt-6 border-t-2 border-neutral-100">
                  <div className="space-y-3">
                    {trustSignals.map((signal, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center gap-3 text-sm text-neutral-600"
                      >
                        <div className="w-2 h-2 bg-[#5D0D18] rounded-full" />
                        <span className="font-medium">{signal}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Right - Info Cards (1 column) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Availability Card */}
            <div className="bg-gradient-to-br from-[#5D0D18] to-[#4A0A12] rounded-2xl p-8 shadow-xl text-white">
              <div className="flex items-start gap-3 mb-4">
                <div className="relative flex h-3 w-3 mt-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Available for Projects</h3>
                  <p className="text-sm text-white/90 leading-relaxed">
                    I'm currently available for freelance work and new opportunities.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-white/20">
                <p className="text-sm text-white/80">
                  ⚡ Typically replies within 24 hours
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#9FB2AC]/30">
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-6">Connect on Social</h3>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-4 p-4 bg-neutral-50 hover:bg-[#5D0D18] hover:text-white rounded-xl transition-all duration-300 shadow-sm group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-[#4A0A12] border-2 border-[#9FB2AC]/30 group-hover:border-[#5D0D18] flex items-center justify-center transition-all duration-300">
                      <social.icon className="w-6 h-6" style={{ color: social.color }} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold">{social.label}</p>
                      <p className="text-xs text-neutral-500 group-hover:text-neutral-300 transition-colors">
                        {social.subtitle}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 pt-8 border-t-2 border-[#9FB2AC]/30 text-center"
        >
          <p className="text-sm text-neutral-600 font-medium">
            © 2025 Mohammed Arfan · Built with Next.js & Tailwind CSS
          </p>
        </motion.div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowSuccess(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl max-w-md w-full relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 opacity-50" />
              
              {/* Animated Success Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 0.5, type: "spring", bounce: 0.5 }}
                className="relative z-10 w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg"
              >
                <CheckCircle className="w-12 h-12 text-white" strokeWidth={2.5} />
              </motion.div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="text-3xl font-bold text-[#1A1A1A] mb-3"
                >
                  Message Sent! 🎉
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="text-base text-neutral-600 mb-2 leading-relaxed"
                >
                  Thank you for reaching out! I've received your message and will get back to you within 24 hours.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="text-sm text-neutral-500 mb-8"
                >
                  Check your email for a confirmation copy.
                </motion.p>

                {/* Close Button */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  onClick={() => setShowSuccess(false)}
                  className="w-full bg-gradient-to-r from-[#5D0D18] to-[#4A0A12] hover:from-[#4A0A12] hover:to-[#3A0810] text-white rounded-xl py-4 px-8 font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Got it, thanks!
                </motion.button>
              </div>

              {/* Confetti Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute inset-0 pointer-events-none overflow-hidden"
              >
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: -20, x: Math.random() * 100 + '%', opacity: 1 }}
                    animate={{ 
                      y: '100vh', 
                      rotate: Math.random() * 360,
                      opacity: 0 
                    }}
                    transition={{ 
                      duration: Math.random() * 2 + 2,
                      delay: Math.random() * 0.5,
                      ease: "easeOut"
                    }}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: ['#10b981', '#059669', '#34d399', '#6ee7b7', '#a7f3d0'][Math.floor(Math.random() * 5)],
                      left: `${Math.random() * 100}%`
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS for blob animation */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
