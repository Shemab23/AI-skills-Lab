import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../data/bootcampData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 lg:py-36 border-b border-slate-200/80 bg-slate-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-16">
          <div className="text-xs font-mono-code uppercase tracking-widest text-blue-600 font-semibold mb-2">
            Frequently Asked Questions
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-slate-950 leading-tight mb-3">
            Common questions answered
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Key details about prerequisite requirements, schedule flexibility, and post-graduation mentorship.
          </p>
        </div>

        {/* Minimal Bordered Accordion List */}
        <div className="border-b border-slate-200 max-w-4xl">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.question}
                className="border-t border-slate-200 bg-white"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-6 px-6 sm:py-7 flex items-center justify-between text-left group cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <div className="pr-6">
                    <span className="text-[10px] font-mono-code uppercase tracking-wider text-blue-600 block mb-1">
                      {faq.category}
                    </span>
                    <h3 className="font-display font-semibold text-lg sm:text-xl text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                      {faq.question}
                    </h3>
                  </div>

                  <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 group-hover:border-blue-600 group-hover:text-blue-600 transition-colors shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="pb-6 px-6 pt-0 animate-in fade-in-50 duration-200">
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

