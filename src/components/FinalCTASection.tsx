import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { COHORT_INFO } from '../data/bootcampData';

interface FinalCTASectionProps {
  onOpenModal: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenModal }) => {
  return (
    <section className="py-24 sm:py-32 lg:py-36 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="text-xs font-mono-code uppercase tracking-wider text-blue-400 font-semibold mb-6">
            {COHORT_INFO.name} • {COHORT_INFO.location}
          </div>

          {/* Headline */}
          <h2 className="font-display font-medium text-4xl sm:text-6xl md:text-7xl tracking-tight leading-tight text-white mb-6">
            Four weeks from now,{' '}
            <span className="text-blue-400 font-semibold">
              you could have shipped it.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-light leading-relaxed mb-10">
            Join the cohort in Lefkoşa to build functional applications, generate production media, and build automated workflows with AI.
          </p>

          {/* Action CTA */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenModal}
              id="final-cta-btn"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white text-sm font-semibold uppercase tracking-wider hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30 cursor-pointer"
            >
              <span>Apply for Cohort — {COHORT_INFO.price}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <span className="text-xs font-mono-code text-slate-400 sm:ml-2">
              Cohort starts {COHORT_INFO.dates.split('→')[0].trim()}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

