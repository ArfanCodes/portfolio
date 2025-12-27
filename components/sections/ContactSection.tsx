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
      setTimeout(() => setShowSuccess(false), 5000);
      window.history.replaceState({}, '', window.location.pathname + '#contact');
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
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

              <form onSubmit={handleSubmit} className="space-y-6">
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

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                    Subject *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
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
                      Message Sent ✓
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

      {/* Success Popup */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-4">
                <CheckCircle className="w-8 h-8" />
                <div>
                  <h3 className="text-lg font-bold">Message Received!</h3>
                  <p className="text-sm text-green-50">Thank you for reaching out. I'll get back to you soon!</p>
                </div>
              </div>
            </div>
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
