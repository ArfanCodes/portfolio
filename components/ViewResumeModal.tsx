'use client';

import { useEffect } from 'react';
import { X, Download, FileText, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface ViewResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl?: string;
}

export default function ViewResumeModal({ 
  isOpen, 
  onClose,
  resumeUrl = '/doc/arfan-3rdyear-appdev-resume.docx'
}: ViewResumeModalProps) {
  
  // Disable background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  // Handle download
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Mohammed_Arfan_Resume.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Open in Google Docs Viewer
  const handleViewOnline = () => {
    const viewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(window.location.origin + resumeUrl)}&embedded=true`;
    window.open(viewerUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop overlay with animation */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
          />
          
          {/* Modal container with animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-200">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#FAF8F3] rounded-lg border border-[#E6DCC8]">
                  <FileText className="w-5 h-5 text-[#C9A24D]" />
                </div>
                <div>
                  <h2 id="modal-title" className="text-lg font-semibold text-[#111827]">
                    Resume
                  </h2>
                  <p className="text-xs text-neutral-500">Mohammed Arfan • App Developer</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-neutral-600" />
              </button>
            </div>

            {/* Content */}
            <div className="px-6 py-8">
              <div className="text-center space-y-6">
                {/* Icon */}
                <div className="flex justify-center">
                  <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-200">
                    <FileText className="w-12 h-12 text-[#C9A24D]" />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-[#111827]">
                    Ready to View My Resume?
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Download to view in Microsoft Word, or open it in your browser using Google Docs Viewer.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                  <Button
                    onClick={handleDownload}
                    className="bg-[#111827] hover:bg-[#1F2937] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button
                    onClick={handleViewOnline}
                    variant="outline"
                    className="border-2 border-[#111827] text-[#111827] hover:bg-neutral-50 px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Online
                  </Button>
                </div>

                {/* File Info */}
                <div className="pt-4 border-t border-neutral-100">
                  <p className="text-xs text-neutral-500">
                    Microsoft Word (.docx) • Updated 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-neutral-50 rounded-b-2xl border-t border-neutral-200">
              <p className="text-xs text-neutral-500 text-center">
                Press <kbd className="px-2 py-0.5 bg-white border border-neutral-300 rounded text-neutral-700 font-mono">ESC</kbd> to close
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
