'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@developer.com',
    href: 'mailto:hello@developer.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'San Francisco, CA',
    href: '#',
  },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/ArfanCodes' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohammed-arfan-167452171' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/Arfaan.3/' },
];

export default function ContactSection() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');

  // Check if redirected back after form submission
  useEffect(() => {
    // Set the redirect URL dynamically based on current domain
    setRedirectUrl(`${window.location.origin}/?success=true#contact`);
    
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
      // Clean up URL
      window.history.replaceState({}, '', window.location.pathname + '#contact');
    }
  }, []);
  return (
    <section id="contact" className="min-h-screen py-20 px-6 lg:px-8 bg-gradient-to-b from-white via-neutral-50 to-neutral-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,120,120,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(100,100,100,0.08)_0%,transparent_50%)]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 border-neutral-200 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
              <form 
                action="https://formsubmit.co/arfaanmohammed56@gmail.com" 
                method="POST"
                className="space-y-6"
              >
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="New Portfolio Contact Message!" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value={redirectUrl} />
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-neutral-900 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent focus:bg-white transition-all duration-200 hover:border-neutral-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-neutral-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent focus:bg-white transition-all duration-200 hover:border-neutral-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-neutral-900 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent focus:bg-white transition-all duration-200 hover:border-neutral-300"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-neutral-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent focus:bg-white transition-all duration-200 resize-none hover:border-neutral-300"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.div 
                  whileHover={{ scale: 1.02, y: -2 }} 
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 hover:from-neutral-800 hover:via-neutral-700 hover:to-neutral-800 text-white rounded-full py-6 text-base font-medium shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Social Links */}
            <Card className="p-6 border-neutral-200 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.15, y: -4 }}
                    className="p-4 bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-xl hover:from-neutral-900 hover:to-neutral-800 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </Card>

            {/* Availability Card */}
            <Card className="p-6 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
                  <span className="font-semibold text-lg">Available for Projects</span>
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  I'm currently available for freelance work and new opportunities. 
                  Let's discuss how I can help bring your ideas to life.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 pt-4 border-t border-neutral-200 text-center"
        >
          <p className="text-sm text-neutral-600">
            © 2025 Arfan
          </p>
        </motion.div>
        </div>

        {/* Success Popup */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -50, x: '-50%' }}
              animate={{ opacity: 1, y: 0, x: '-50%' }}
              exit={{ opacity: 0, y: -50, x: '-50%' }}
              transition={{ duration: 0.5, type: 'spring' }}
              className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50"
            >
              <Card className="p-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 shadow-2xl">
                <div className="flex items-center space-x-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  >
                    <CheckCircle className="w-8 h-8" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-bold">Message Received!</h3>
                    <p className="text-sm text-green-50">Thank you for reaching out. I'll get back to you soon!</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
  );
}
