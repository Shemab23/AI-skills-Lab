import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { COHORT_INFO, TOPIC_MODULES } from '../data/bootcampData';
import { ApplicationFormData } from '../types';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  initialTopic,
}) => {
  const [formData, setFormData] = useState<ApplicationFormData>({
    fullName: '',
    email: '',
    phoneOrWhatsapp: '',
    topicOfInterest: initialTopic || TOPIC_MODULES[0].title,
    background: 'Beginner (No coding experience)',
    backgroundDetails: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (initialTopic) {
      setFormData((prev) => ({ ...prev, topicOfInterest: initialTopic }));
    }
  }, [initialTopic]);

  // Lock body scroll when modal is active
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

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.phoneOrWhatsapp.trim()) {
      setErrorMessage('Please enter your phone / WhatsApp number for cohort updates.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setFormData({
      fullName: '',
      email: '',
      phoneOrWhatsapp: '',
      topicOfInterest: TOPIC_MODULES[0].title,
      background: 'Beginner (No coding experience)',
      backgroundDetails: '',
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={handleResetAndClose}
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
          <div>
            <span className="text-[11px] font-mono-code uppercase tracking-wider text-blue-600 font-semibold block">
              {COHORT_INFO.name} • {COHORT_INFO.location}
            </span>
            <h3 className="font-display font-bold text-lg text-slate-900 leading-tight">
              Enrollment & Application
            </h3>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1.5 rounded-full hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-6 space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
                Application Received
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. We have received your application for the <span className="font-semibold text-slate-900">{COHORT_INFO.name}</span> in Lefkoşa.
              </p>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs font-mono-code space-y-2 text-slate-700">
                <div className="flex items-center justify-between font-bold text-slate-900 border-b border-slate-200 pb-2">
                  <span>Topic of Interest:</span>
                  <span className="text-blue-600">{formData.topicOfInterest}</span>
                </div>
                <div>Background: {formData.background}</div>
                <div>Venue: {COHORT_INFO.venue}</div>
                <div>Dates: {COHORT_INFO.dates}</div>
                <div>Tuition: {COHORT_INFO.price}</div>
              </div>

              <p className="text-xs text-slate-500">
                Our instructors will review your background and reach out via WhatsApp at <span className="font-semibold text-slate-900">{formData.phoneOrWhatsapp}</span> and email within 24 hours.
              </p>

              <button
                onClick={handleResetAndClose}
                className="w-full py-3.5 rounded-full bg-blue-600 text-white font-semibold text-xs uppercase tracking-wider hover:bg-blue-700 transition-colors cursor-pointer shadow-xs"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono-code">
                  {errorMessage}
                </div>
              )}

              {/* Full Name */}
              <div>
                <label className="block text-xs font-mono-code uppercase font-bold text-slate-900 mb-1">
                  Full Name <span className="text-blue-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Alex Morgan"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  required
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-mono-code uppercase font-bold text-slate-900 mb-1">
                  Email Address <span className="text-blue-600">*</span>
                </label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  required
                />
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-mono-code uppercase font-bold text-slate-900 mb-1">
                  Phone / WhatsApp Number <span className="text-blue-600">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="+90 533 ..."
                  value={formData.phoneOrWhatsapp}
                  onChange={(e) => setFormData({ ...formData, phoneOrWhatsapp: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  required
                />
              </div>

              {/* Topic of Interest */}
              <div>
                <label className="block text-xs font-mono-code uppercase font-bold text-slate-900 mb-1">
                  Topic of Interest
                </label>
                <select
                  value={formData.topicOfInterest}
                  onChange={(e) => setFormData({ ...formData, topicOfInterest: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                >
                  {TOPIC_MODULES.map((mod) => (
                    <option key={mod.id} value={mod.title}>
                      {mod.title}
                    </option>
                  ))}
                  <option value="All Topics (Comprehensive Program)">
                    All Topics (Comprehensive Program)
                  </option>
                </select>
              </div>

              {/* Background / Strength */}
              <div>
                <label className="block text-xs font-mono-code uppercase font-bold text-slate-900 mb-1">
                  Your Background & Experience Level
                </label>
                <select
                  value={formData.background}
                  onChange={(e) => setFormData({ ...formData, background: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600 mb-2"
                >
                  <option value="Beginner (No coding experience)">Beginner (Zero coding, learning AI)</option>
                  <option value="Intermediate (Familiar with tools & prompting)">Intermediate (Familiar with prompt tools)</option>
                  <option value="Technical (Developer or Designer)">Technical (Developer or Designer)</option>
                  <option value="Business / Agency Owner">Business or Agency Owner</option>
                </select>

                <textarea
                  rows={2}
                  placeholder="Tell us briefly about your current skills or what you want to achieve..."
                  value={formData.backgroundDetails}
                  onChange={(e) => setFormData({ ...formData, backgroundDetails: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-900 text-xs focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold uppercase tracking-wider transition-all duration-200 shadow-md shadow-blue-600/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Application...</span>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="text-[10px] font-mono-code text-slate-500 text-center mt-2">
                  Tuition: {COHORT_INFO.price} • We review applications within 24 hours.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

