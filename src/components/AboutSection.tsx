import React from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Cpu,
} from "lucide-react";
import { STATS, VALUE_PILLARS, ASSETS } from "../data/bootcampData";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 lg:py-36 border-b border-slate-200/80 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-20 sm:mb-24">
          <div className="lg:col-span-4">
            <div className="text-xs font-mono-code uppercase tracking-widest text-blue-600 font-semibold mb-2">
              The Bootcamp Philosophy
            </div>
            <h3 className="text-xl font-display font-semibold text-slate-900">
              Pragmatic AI Engineering
            </h3>
            <img
              src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Zs6aQV60j48BgiVshm9upA.png"
              alt="Pragmatic AI Engineering"
              className="w-75 h-75  object-cover"
            />
          </div>

          <div className="lg:col-span-8">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-slate-950 leading-[1.08] mb-6 text-balance">
              Most people learn to prompt. We teach you to{" "}
              <span className="text-blue-600 font-semibold">
                ship and get paid.
              </span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 text-slate-600 text-base leading-relaxed">
              <p>
                Clients and businesses do not pay for prompts or superficial AI
                concepts. They pay for functioning software applications,
                automated operations, and commercial visual campaigns that drive
                measurable value.
              </p>
              <p>
                In our Lefkoşa studio, you build real software with experienced
                founders and engineers. In 4 focused weeks, you go from
                conceptual ideas to production apps with live URLs, databases,
                and payment capabilities.
              </p>
            </div>
          </div>
        </div>

        {/* 4-Stat Metrics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20 sm:mb-28">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs flex flex-col justify-between"
            >
              <div className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-950 tracking-tight mb-2">
                {stat.number}
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-slate-900 tracking-tight mb-1">
                  {stat.label}
                </h4>
                <p className="text-xs text-slate-500 leading-snug">
                  {stat.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced 3 Pillars: Create, Automate, Monetize with Realistic Imagery */}
        <div>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="text-xs font-mono-code uppercase tracking-widest text-blue-600 font-semibold mb-2">
              Core Pillars
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-semibold text-slate-950 tracking-tight">
              Create. Automate. Monetize.
            </h3>
            <p className="text-slate-600 text-base mt-2">
              Three interconnected disciplines engineered to give you complete
              leverage with AI.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {VALUE_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.id}
                className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-md transition-shadow"
              >
                {/* Pillar Cover Image */}
                <div className="relative aspect-16/10 bg-slate-100 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-lg text-white font-mono-code text-xs font-bold uppercase tracking-wider">
                    0{idx + 1} {pillar.title}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-display font-bold text-xl text-slate-950 mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-xs font-mono-code uppercase text-blue-600 font-semibold mb-3">
                      {pillar.tagline}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Concrete Outcomes */}
                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    <span className="text-[11px] font-mono-code uppercase text-slate-400 font-semibold block">
                      Tangible Deliverables
                    </span>
                    {pillar.outcomes.map((outcome, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-xs text-slate-700"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
