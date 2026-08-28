import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/bootcampData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-36 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-16">
          <div className="text-xs font-mono-code uppercase tracking-widest text-blue-600 font-semibold mb-2">
            Student Outcomes
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-slate-950 leading-tight mb-3">
            Alumni feedback
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Builders who turned four weeks of intensive learning into production apps, agency client work, and high-impact workflows.
          </p>
        </div>

        {/* Minimalist High-Contrast Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="p-8 rounded-3xl border border-slate-200/90 bg-white shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 text-blue-600 mb-6">
                  {[...Array(5)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="ml-2 font-mono-code text-xs font-bold text-slate-900">
                    5.0
                  </span>
                </div>

                {/* Quote */}
                <p className="font-display text-lg text-slate-900 font-normal leading-snug mb-8 tracking-tight">
                  “{t.quote}”
                </p>
              </div>

              {/* Identity & Highlight */}
              <div className="pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-xs font-mono-code flex items-center justify-center shadow-xs">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">
                      {t.name}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {t.role}
                    </p>
                  </div>
                </div>
                <div className="text-[11px] font-mono-code text-blue-600 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{t.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

