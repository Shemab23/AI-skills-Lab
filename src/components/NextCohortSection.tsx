import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { COHORT_INFO } from '../data/bootcampData';

interface NextCohortSectionProps {
  onOpenModal: () => void;
}

export const NextCohortSection: React.FC<NextCohortSectionProps> = ({ onOpenModal }) => {
  return (
    <section id="cohort" className="py-20 sm:py-28 lg:py-36 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-16">
          <div className="text-xs font-mono-code uppercase tracking-widest text-blue-600 font-semibold mb-2">
            Cohort Details
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-slate-950 leading-tight mb-3">
            {COHORT_INFO.name} in Lefkoşa
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Four weeks of direct hands-on instruction, practical building sessions, and personalized mentorship.
          </p>
        </div>

        {/* Master Enrollment Card */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 lg:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Specs */}
            <div className="lg:col-span-7">
              <div className="mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-mono-code font-bold uppercase tracking-wider">
                  {COHORT_INFO.editionTag}
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-950 tracking-tight mb-6">
                4-Week In-Person Intensive
              </h3>

              {/* Data Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-y border-slate-100 text-xs font-mono-code mb-6">
                <div>
                  <span className="text-slate-400 block uppercase text-[10px] mb-0.5">Location</span>
                  <span className="font-bold text-slate-900 text-sm block">{COHORT_INFO.location}</span>
                  <span className="text-slate-500 text-[11px]">{COHORT_INFO.venue}</span>
                </div>

                <div>
                  <span className="text-slate-400 block uppercase text-[10px] mb-0.5">Dates</span>
                  <span className="font-bold text-slate-900 text-sm block">{COHORT_INFO.dates}</span>
                  <span className="text-slate-500 text-[11px]">4 Weeks, 40+ In-Person Hours</span>
                </div>

                <div>
                  <span className="text-slate-400 block uppercase text-[10px] mb-0.5">Schedule</span>
                  <span className="font-bold text-slate-900 text-sm block">Mon–Thu 18:00–21:00</span>
                  <span className="text-slate-500 text-[11px]">Weekend Studio Sessions</span>
                </div>

                <div>
                  <span className="text-slate-400 block uppercase text-[10px] mb-0.5">Credential</span>
                  <span className="font-bold text-slate-900 text-sm block">Certificate of Completion</span>
                  <span className="text-slate-500 text-[11px]">Live Portfolio of Shipped Work</span>
                </div>
              </div>

              {/* Inclusions checklist */}
              <div className="space-y-2">
                <span className="text-xs font-mono-code uppercase font-bold text-slate-900 block mb-2">
                  What is included:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>40+ hours in-person instruction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>1:1 dedicated code and project feedback</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>AI tool licenses and cloud credits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Alumni network and freelance opportunities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Pricing & Action Box */}
            <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between text-center">
              <div>
                <span className="text-xs font-mono-code uppercase tracking-wider text-slate-500 block mb-1 font-semibold">
                  Program Tuition
                </span>
                <div className="font-display font-bold text-5xl sm:text-6xl text-slate-950 tracking-tight mb-2">
                  {COHORT_INFO.price}
                </div>
                <p className="text-xs text-slate-500 mb-6">
                  Complete 4-week program with all materials included
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => onOpenModal()}
                  className="w-full py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold uppercase tracking-wider transition-colors shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Apply for Enrollment</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] font-mono-code text-slate-500">
                  Review and confirmation within 24 hours
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

