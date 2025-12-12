'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, CheckCircle, Sparkles, Briefcase, Clock, MessageSquare, Zap, HelpCircle, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/ArfanCodes' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohammed-arfan-167452171' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/Arfaan.3/' },
  { icon: Mail, label: 'Email', href: 'mailto:arfaanmohammed56@gmail.com' },
];

const whyWorkWithMe = [
  {
    icon: Clock,
    title: 'Fast Response Time',
    description: '24-48 hour reply guarantee'
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description: 'Detailed planning & regular updates'
  },
  {
    icon: Zap,
    title: 'Technical Expertise',
    description: 'Mobile apps + cloud integration'
  }
];

const commonQuestions = [
  {
    question: 'What information should I include in my message?',
    answer: 'Please share your project goals, timeline, budget range, and any specific requirements. The more details you provide, the better I can assist you.'
  },
  {
    question: 'How soon do you reply?',
    answer: 'I typically respond within 24-48 hours. For urgent inquiries, feel free to reach out via email directly.'
  },
  {
    question: 'Do you take freelance or long-term projects?',
    answer: 'Yes! I\'m open to both freelance projects and long-term collaborations. Let\'s discuss what works best for your needs.'
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'I specialize in React Native for mobile development, Node.js for backend, and AWS for cloud infrastructure. I also work with modern web technologies like React and Next.js.'
  }
];

export default function ContactSection() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  // Check if redirected back after form submission
  useEffect(() => {
    setRedirectUrl(`${window.location.origin}/?success=true#contact`);
    
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
      window.history.replaceState({}, '', window.location.pathname + '#contact');
    }
  }, []);

  return (
    <section id="contact" className="pt-24 pb-16 px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Soft Section Background - Mesh Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-neutral-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(147,51,234,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.08),transparent_50%)]" />
      
      {/* Subtle background blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl pointer-events-none" />
      
      {/* Geometric pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Branded Signature Watermark - "MA" */}
      <div className="absolute top-1/4 right-10 text-[200px] font-bold text-neutral-900/[0.02] select-none pointer-events-none">
        MA
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Header with Radial Glow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-gradient-radial from-blue-100/30 via-purple-100/20 to-transparent blur-2xl pointer-events-none" />
          
          <div className="relative">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-blue-500" />
              <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900">
                Let's Work Together
              </h2>
              <Sparkles className="w-6 h-6 text-purple-500" />
            </div>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-2">
              Have a project in mind? I'd love to hear about it. Let's create something amazing together.
            </p>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-neutral-300 to-transparent mx-auto mb-6" />
            
            {/* Based In Location Element */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-neutral-200/60 rounded-full shadow-sm"
            >
              <div className="relative">
                <MapPin className="w-4 h-4 text-blue-500" />
                <div className="absolute inset-0 w-4 h-4 bg-blue-400 rounded-full animate-ping opacity-20" />
              </div>
              <span className="text-sm font-medium text-neutral-700">Based in Hyderabad, India</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Why Work With Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-neutral-900 text-center mb-6">Why Work With Me?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {whyWorkWithMe.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 border-neutral-200/60 shadow-sm hover:shadow-md transition-all duration-300 bg-white/80 backdrop-blur-sm rounded-xl text-center">
                  <div className="inline-flex p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl mb-3">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-neutral-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-neutral-600">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Horizontal Accent Stage for Cards */}
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-purple-100/30 to-blue-100/20 rounded-3xl blur-xl" />
          
          {/* Main Contact Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
            {/* Enhanced Form Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 border-neutral-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
                <div className="absolute top-8 left-6 w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                
                <form 
                  action="https://formsubmit.co/arfaanmohammed56@gmail.com" 
                  method="POST"
                  className="space-y-5 pl-4"
                >
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
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:bg-white transition-all duration-200 hover:border-neutral-300 ${
                        focusedField === 'name' ? 'shadow-[0_0_20px_rgba(59,130,246,0.15)]' : ''
                      }`}
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
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:bg-white transition-all duration-200 hover:border-neutral-300 ${
                        focusedField === 'email' ? 'shadow-[0_0_20px_rgba(59,130,246,0.15)]' : ''
                      }`}
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
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:bg-white transition-all duration-200 hover:border-neutral-300 ${
                        focusedField === 'subject' ? 'shadow-[0_0_20px_rgba(59,130,246,0.15)]' : ''
                      }`}
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
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:bg-white transition-all duration-200 resize-none hover:border-neutral-300 ${
                        focusedField === 'message' ? 'shadow-[0_0_20px_rgba(59,130,246,0.15)]' : ''
                      }`}
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <div>
                    <motion.div 
                      whileHover={{ scale: 1.02, y: -2 }} 
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 hover:from-neutral-800 hover:via-neutral-700 hover:to-neutral-800 text-white rounded-full py-7 text-base font-medium shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                    </motion.div>
                    
                    {/* Sub-CTAs */}
                    <div className="mt-4 space-y-2">
                      <p className="text-xs text-neutral-500 text-center italic">
                        You'll hear back within 24–48 hours
                      </p>
                      <div className="flex items-center justify-center gap-4 text-xs text-neutral-600">
                        <a href="mailto:arfaanmohammed56@gmail.com" className="hover:text-blue-600 transition-colors">
                          Prefer emailing directly?
                        </a>
                        <span className="text-neutral-300">•</span>
                        <a href="#common-questions" className="hover:text-blue-600 transition-colors">
                          Looking for pricing or timelines?
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </Card>
            </motion.div>

            {/* Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              {/* Ways to Contact Me Bar */}
              <Card className="p-6 border-neutral-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-xl">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4 text-center">
                  Ways to Contact Me
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
                      whileHover={{ scale: 1.05, rotate: 2, y: -3 }}
                      className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-xl hover:from-neutral-900 hover:to-neutral-800 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md group"
                    >
                      <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-medium">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </Card>

              {/* Enhanced Availability Card */}
              <Card className="p-8 bg-gradient-to-br from-neutral-900/95 via-neutral-800/95 to-neutral-900/95 text-white border-0 shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-all duration-300 relative overflow-hidden rounded-xl group">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative">
                      <motion.div 
                        className="w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75" />
                    </div>
                    <Briefcase className="w-5 h-5 text-green-400" />
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
        </div>

        {/* Decorative Wavy Divider */}
        <div className="my-16 relative">
          <svg className="w-full h-8 text-neutral-200" viewBox="0 0 1200 40" preserveAspectRatio="none">
            <path d="M0,20 Q300,0 600,20 T1200,20 L1200,40 L0,40 Z" fill="currentColor" opacity="0.3"/>
          </svg>
        </div>

        {/* FAQ Section */}
        <motion.div
          id="common-questions"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-neutral-900 mb-2">Common Questions</h3>
            <p className="text-neutral-600">Everything you need to know before reaching out</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {commonQuestions.map((question, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-neutral-200/60 shadow-sm hover:shadow-md transition-all duration-300 bg-white/80 backdrop-blur-sm overflow-hidden">
                  <button
                    onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-neutral-50/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <span className="font-semibold text-neutral-900">{question.question}</span>
                    </div>
                    <motion.div
                      animate={{ rotate: openQuestion === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-neutral-400" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openQuestion === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 text-neutral-600 leading-relaxed border-t border-neutral-100">
                          {question.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Closing Footer with Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-neutral-200/60 text-center space-y-4"
        >
          <p className="text-sm text-neutral-600 font-medium italic">
            "Let's build something impactful together."
          </p>
          {/* Handwritten-style signature */}
          <div className="font-serif italic text-2xl text-neutral-400">
            — Arfan
          </div>
          <p className="text-xs text-neutral-500">
            © 2025 Mohammed Arfan
          </p>
        </motion.div>
      </div>

      {/* Enhanced Success Popup */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
            className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 max-w-md w-full mx-4"
          >
            <Card className="p-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 shadow-2xl">
              <div className="flex items-start gap-4">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="flex-shrink-0"
                >
                  <CheckCircle className="w-10 h-10" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                  <p className="text-green-50 text-sm leading-relaxed">
                    Your message has been sent successfully. I'll respond within 24 hours with next steps.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
