'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ResumeDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeDownloadModal({ isOpen, onClose }: ResumeDownloadModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
  });

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      reason: '',
    };

    // Name validation (at least 2 words, 3+ characters each)
    const nameParts = formData.name.trim().split(' ').filter(part => part.length > 0);
    if (nameParts.length < 2 || nameParts.some(part => part.length < 2)) {
      newErrors.name = 'Please enter your full name (first and last name)';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation (10 digits)
    const phoneRegex = /^\d{10}$/;
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    // Reason validation (minimum 10 characters)
    if (formData.reason.trim().length < 10) {
      newErrors.reason = 'Please provide a reason (at least 10 characters)';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Log the data (you can send this to a backend/database later)
      console.log('Resume Download Request:', {
        ...formData,
        timestamp: new Date().toISOString(),
      });

      // Download the resume
      const link = document.createElement('a');
      link.href = '/doc/arfan-3rdyear-appdev-resume-updated.docx';
      link.download = 'Mohammed_Arfan_Resume.docx';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Reset form and close modal
      setFormData({ name: '', email: '', phone: '', reason: '' });
      setErrors({ name: '', email: '', phone: '', reason: '' });
      onClose();
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-neutral-200">
                <div>
                  <h2 className="text-2xl font-bold text-neutral-900">Download Resume</h2>
                  <p className="text-sm text-neutral-600 mt-1">Please provide your details to continue</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-neutral-600" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name ? 'border-red-500' : 'border-neutral-300'
                    } focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="john.doe@example.com"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email ? 'border-red-500' : 'border-neutral-300'
                    } focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      // Only allow numbers
                      const numericValue = e.target.value.replace(/\D/g, '');
                      handleChange('phone', numericValue);
                    }}
                    placeholder="9876543210"
                    maxLength={10}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.phone ? 'border-red-500' : 'border-neutral-300'
                    } focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Reason */}
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">
                    Reason for Download *
                  </label>
                  <textarea
                    value={formData.reason}
                    onChange={(e) => handleChange('reason', e.target.value)}
                    placeholder="e.g., Job opportunity, collaboration, etc."
                    rows={3}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.reason ? 'border-red-500' : 'border-neutral-300'
                    } focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all resize-none`}
                  />
                  {errors.reason && (
                    <p className="text-red-500 text-xs mt-1">{errors.reason}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 hover:from-neutral-800 hover:via-neutral-700 hover:to-neutral-800 text-white rounded-full py-6 text-base font-medium shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
