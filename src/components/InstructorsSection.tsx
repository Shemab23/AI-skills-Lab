import React from 'react';
import { INSTRUCTORS } from '../data/bootcampData';

export const InstructorsSection: React.FC = () => {
  return (
    <section id="instructors" className="py-20 sm:py-28 lg:py-36 border-b border-slate-200/80 bg-slate-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-16">
          <div className="text-xs font-mono-code uppercase tracking-widest text-blue-600 font-semibold mb-2">
            Mentorship & Instruction
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-slate-950 leading-tight mb-3">
            Active builders. Dedicated mentorship.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Direct 1:1 guidance from experienced software founders and media specialists in Lefkoşa.
          </p>
        </div>

        {/* 2-Column Instructor Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {INSTRUCTORS.map((instructor) => (
            <div
              key={instructor.name}
              className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* Photo */}
                <div className="relative rounded-2xl overflow-hidden aspect-4/3 mb-6 bg-slate-100">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-xs text-white text-[10px] font-mono-code uppercase tracking-wider px-3 py-1 rounded-md">
                    {instructor.tag}
                  </div>
                </div>

                {/* Info */}
                <h3 className="font-display font-bold text-2xl text-slate-950 tracking-tight">
                  {instructor.name}
                </h3>
                <p className="text-xs font-mono-code text-blue-600 uppercase tracking-wider font-semibold mb-3">
                  {instructor.role}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {instructor.bio}
                </p>
              </div>

              {/* Focus tags */}
              <div className="pt-4 border-t border-slate-100">
                <div className="flex flex-wrap gap-1.5">
                  {instructor.specialty.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-mono-code px-2.5 py-1 rounded-md bg-slate-50 text-slate-700 border border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

