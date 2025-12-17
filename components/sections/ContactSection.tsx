'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Github, Linkedin, Instagram, CheckCircle, FileText, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ViewResumeModal from '@/components/ViewResumeModal';

const socialLinks = [
  { 
    icon: Github, 
    label: 'GitHub', 
    subtitle: 'Code & Projects',
    href: 'https://github.com/ArfanCodes' 
  },
  { 
    icon: Linkedin, 
    label: 'LinkedIn', 
    subtitle: 'Professional Profile',
    href: 'https://www.linkedin.com/in/mohammed-arfan-167452171' 
  },
  { 
    icon: Instagram, 
    label: 'Instagram', 
    subtitle: 'Personal Updates',
    href: 'https://www.instagram.com/Arfaan.3/' 
  },
];

const trustSignals = [
  '3+ years building production apps',
  'IEEE-CIS Technical Head',
  'Clean, scalable React Native builds',
];

export default function ContactSection() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isViewResumeOpen, setIsViewResumeOpen] = useState(false);

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    // Form will submit naturally, this just updates UI state
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    formElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const openResumeModal = () => {
    setIsViewResumeOpen(true);
  };

  return (
    <section id="contact" className="min-h-screen py-20 pb-12 px-4 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-3">
            Let's Work Together
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>

          {/* Primary & Secondary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            {/* Primary CTA */}
            <Button
              onClick={scrollToForm}
              className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-3 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Send className="w-5 h-5 mr-2" />
              Start a Project
            </Button>

            {/* Secondary CTA */}
            <Button
              onClick={openResumeModal}
              variant="outline"
              className="w-full sm:w-auto border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105"
            >
              <FileText className="w-5 h-5 mr-2" />
              View Resume
            </Button>
          </motion.div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <Card id="contact-form" className="p-6 lg:p-8 border-neutral-200 shadow-md bg-neutral-50/50 backdrop-blur-sm">
              <form 
                action="https://formsubmit.co/arfaanmohammed56@gmail.com" 
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="New Portfolio Contact Message!" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value={redirectUrl} />
                
                {/* Name + Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-neutral-700 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2.5 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200 text-sm"
                      placeholder="e.g., Founder at XYZ / Student Developer"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-neutral-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2.5 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200 text-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Subject Field with Helper Text */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-neutral-700 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2.5 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200 text-sm"
                    placeholder="e.g., Mobile App Development / Collaboration"
                  />
                  <p className="text-xs text-neutral-500 mt-1.5">
                    Briefly tell me what you're building or looking for.
                  </p>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-neutral-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-2.5 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200 resize-none text-sm"
                    placeholder="What problem are you trying to solve? Timeline?"
                  />
                </div>

                {/* Submit Button with Post-Submit State */}
                <div className="space-y-3">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-neutral-900 hover:bg-neutral-800 disabled:bg-neutral-600 text-white rounded-lg py-3 text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300 disabled:cursor-not-allowed"
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
                  
                  {/* Post-Submit Hint */}
                  <p className="text-xs text-neutral-500 text-center">
                    You'll receive a confirmation once your message is sent.
                  </p>
                </div>

                {/* Trust Signals */}
                <div className="pt-4 border-t border-neutral-200">
                  <div className="space-y-2">
                    {trustSignals.map((signal, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center gap-2 text-xs text-neutral-600"
                      >
                        <div className="w-1.5 h-1.5 bg-neutral-900 rounded-full" />
                        {signal}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </form>
            </Card>
          </motion.div>

          {/* Right Column - Contact Alternatives */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6 order-1 lg:order-2"
          >
            {/* Availability Card - Now Clickable */}
            <motion.div
              whileHover={{ y: -2, boxShadow: '0 10px 25px rgba(0,0,0,0.15)' }}
              transition={{ duration: 0.15 }}
              onClick={scrollToForm}
              className="cursor-pointer"
            >
              <Card className="p-6 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white border-0 shadow-md transition-all duration-200">
                <div className="flex items-start gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-1.5 animate-pulse" />
                  <span className="font-semibold text-base">Available for Projects</span>
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed mb-3">
                  I'm currently available for freelance work and new opportunities.
                </p>
                <p className="text-neutral-400 text-xs flex items-center gap-1">
                  Typically replies within 24 hours →
                </p>
              </Card>
            </motion.div>

            {/* Social Links with Labels */}
            <div className="bg-white lg:bg-transparent p-4 lg:p-0 rounded-xl lg:rounded-none border lg:border-0 border-neutral-200">
              <p className="text-sm font-medium text-neutral-700 mb-4">
                Connect on Social
              </p>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center gap-3 p-3 bg-neutral-50 hover:bg-neutral-900 hover:text-white rounded-lg transition-all duration-200 shadow-sm group"
                  >
                    <social.icon className="w-5 h-5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{social.label}</p>
                      <p className="text-xs text-neutral-500 group-hover:text-neutral-300 transition-colors">
                        {social.subtitle}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Direct Email Contact */}
            <div className="pt-4 border-t border-neutral-200 px-4 lg:px-0">
              <p className="text-sm font-medium text-neutral-700 mb-3">
                Prefer Email?
              </p>
              <a
                href="mailto:arfaanmohammed56@gmail.com"
                className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors group"
              >
                <Mail className="w-4 h-4" />
                <span className="group-hover:underline">arfaanmohammed56@gmail.com</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-6 border-t border-neutral-200 text-center"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50"
          >
            <Card className="p-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 shadow-xl">
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-8 h-8" />
                <div>
                  <h3 className="text-lg font-bold">Message Received!</h3>
                  <p className="text-sm text-green-50">Thank you for reaching out. I'll get back to you soon!</p>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* View Resume Modal */}
      <ViewResumeModal 
        isOpen={isViewResumeOpen} 
        onClose={() => setIsViewResumeOpen(false)}
        resumeUrl="/resume.pdf"
      />
    </section>
  );
}
