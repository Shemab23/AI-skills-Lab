import React from 'react';
import { ArrowUpRight, Users, Sparkles, Compass, CheckCircle2 } from 'lucide-react';
import { COHORT_INFO, ASSETS } from '../data/bootcampData';

interface HeroProps {
  onOpenModal: (topic?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-blue-50/40 via-white to-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono-code uppercase tracking-wider text-blue-700 font-semibold shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>{COHORT_INFO.partner}</span>
          </div>
          <span className="text-xs font-mono-code text-slate-500 font-medium">
            4-Week In-Person AI Intensive in Lefkoşa
          </span>
        </div>

        {/* Main Headline & Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Actions (7 cols) */}
          <div className="lg:col-span-7">
            <h1
              id="hero-main-title"
              className="font-display font-medium text-4xl sm:text-6xl lg:text-[4.5rem] xl:text-[5rem] tracking-tight leading-[1.02] text-slate-950 text-balance mb-6"
            >
              Master AI building, automation, and real revenue.
            </h1>

            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-slate-600 max-w-2xl font-normal mb-8 text-pretty">
              An immersive 4-week in-person bootcamp in Lefkoşa. Learn to build production software with AI agents, create commercial visual media, and deploy autonomous client workflows with dedicated 1:1 instructor mentorship.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <button
                onClick={() => onOpenModal()}
                id="hero-primary-cta"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-blue-600 text-white text-sm font-semibold tracking-wide hover:bg-blue-700 transition-all duration-200 shadow-md shadow-blue-600/25 hover:shadow-lg active:scale-98 cursor-pointer"
              >
                <span>Enroll in {COHORT_INFO.name}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="#curriculum"
                id="hero-secondary-cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-sm font-medium transition-colors shadow-2xs cursor-pointer"
              >
                <span>View 4-Week Plan</span>
              </a>
            </div>

            {/* Quick Cohort Summary Line (Seats Removed) */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm font-mono-code text-slate-600 pt-2 border-t border-slate-200/70">
              <span className="font-semibold text-slate-900">{COHORT_INFO.name}</span>
              <span>•</span>
              <span>{COHORT_INFO.location}</span>
              <span>•</span>
              <span>{COHORT_INFO.dates}</span>
              <span>•</span>
              <span className="text-blue-700 font-semibold">{COHORT_INFO.price} Tuition</span>
            </div>
          </div>

          {/* Right Column: One-on-One Teaching Hero Image (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white p-2.5 shadow-xl shadow-blue-600/5 group">
              <div className="relative aspect-4/3 sm:aspect-16/10 rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src={ASSETS.heroTeaching}
                  alt="Instructor teaching student one-on-one at AI Bootcamp"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating Badge on Image */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-200 shadow-lg flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                      1:1
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Direct Mentorship</div>
                      <div className="text-[11px] text-slate-500">Zero fluff, hands-on code reviews</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono-code px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 font-semibold border border-blue-100">
                    In-Person
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

