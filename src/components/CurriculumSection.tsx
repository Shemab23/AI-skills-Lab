import React, { useState } from 'react';
import { ChevronDown, CheckCircle, Calendar, Sparkles, BookOpen, Layers } from 'lucide-react';
import { CURRICULUM, TOPIC_MODULES, COHORT_INFO } from '../data/bootcampData';
import { CurriculumWeek, TopicModule } from '../types';

export const CurriculumSection: React.FC = () => {
  const [openWeek, setOpenWeek] = useState<string>('01');
  const [selectedTopicId, setSelectedTopicId] = useState<string>(TOPIC_MODULES[0].id);

  const activeTopic = TOPIC_MODULES.find(t => t.id === selectedTopicId) || TOPIC_MODULES[0];

  const toggleWeek = (num: string) => {
    setOpenWeek(openWeek === num ? '' : num);
  };

  return (
    <section id="curriculum" className="py-20 sm:py-28 lg:py-36 border-b border-slate-200/80 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 sm:mb-20">
          <div className="lg:col-span-6">
            <div className="text-xs font-mono-code uppercase tracking-widest text-blue-600 font-semibold mb-2">
              Curriculum & Topics
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-slate-950 leading-tight">
              A curriculum designed for <span className="text-blue-600 font-semibold">shipping</span>, not studying.
            </h2>
          </div>
          <div className="lg:col-span-6 flex flex-col justify-end">
            <p className="text-base text-slate-600 leading-relaxed">
              Every week produces a tangible, live-deployed asset. By Demo Day on Week 4, you present your complete working software product or media campaign to invited founders and tech leaders in Lefkoşa.
            </p>
            <div className="mt-4 flex items-center gap-3 text-xs font-mono-code text-slate-600">
              <Calendar className="w-3.5 h-3.5 text-blue-600" />
              <span>{COHORT_INFO.schedule} ({COHORT_INFO.dates})</span>
            </div>
          </div>
        </div>

        {/* 4-Week Sequential Accordion */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 mb-16">
          <div className="text-xs font-mono-code uppercase tracking-wider text-slate-400 font-semibold mb-4">
            Weekly Progression
          </div>
          <div className="divide-y divide-slate-100">
            {CURRICULUM.map((week: CurriculumWeek) => {
              const isOpen = openWeek === week.number;

              return (
                <div key={week.number} className="py-5 first:pt-0 last:pb-0 transition-colors">
                  <button
                    onClick={() => toggleWeek(week.number)}
                    className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-hidden"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                      <span className="font-mono-code font-bold text-lg sm:text-xl text-blue-600 w-7">
                        {week.number}
                      </span>
                      <div>
                        <h3 className="font-display font-semibold text-lg sm:text-xl text-slate-900 group-hover:text-blue-600 transition-colors">
                          Week {parseInt(week.number, 10)} — {week.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                          {week.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className={`w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 transition-transform duration-200 shrink-0 ml-4 ${isOpen ? 'rotate-180 bg-blue-50 text-blue-600 border-blue-200' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="mt-4 pt-4 pl-11 sm:pl-13 pr-2 animate-in fade-in-50 duration-200">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200">
                        <div className="md:col-span-8">
                          <span className="text-[11px] font-mono-code uppercase tracking-wider text-blue-600 font-semibold block mb-2">
                            Key Session Topics
                          </span>
                          <ul className="space-y-2">
                            {week.topics.map((topic, tIdx) => (
                              <li key={tIdx} className="flex items-start gap-2.5 text-sm text-slate-700">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="md:col-span-4 flex flex-col justify-between p-4 rounded-xl bg-white border border-slate-200">
                          <div>
                            <span className="text-[10px] font-mono-code uppercase tracking-wider text-slate-400 block mb-1 font-semibold">
                              Week Milestone
                            </span>
                            <p className="text-xs font-semibold text-slate-900 leading-snug">
                              {week.deliverable}
                            </p>
                          </div>
                          <div className="mt-3 pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono-code text-blue-700 font-medium">
                            <CheckCircle className="w-3.5 h-3.5" />
                            <span>1:1 Mentor Review</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Topic Modules with Realistic Imagery & Subtopics */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-mono-code uppercase tracking-widest text-blue-600 font-semibold mb-1">
                Deep Dive Breakdown
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-slate-950">
                Core Topic Modules
              </h3>
            </div>
            <p className="text-xs font-mono-code text-slate-500">
              Select a module to view sub-topics and latest tools
            </p>
          </div>

          {/* Module Selector Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {TOPIC_MODULES.map((module) => (
              <button
                key={module.id}
                onClick={() => setSelectedTopicId(module.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedTopicId === module.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {module.title}
              </button>
            ))}
          </div>

          {/* Active Topic Card with Imagery and Dropdown Sub-topics */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Column: Image & Overview */}
              <div className="lg:col-span-5 relative bg-slate-100 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200">
                <div className="relative aspect-16/10 lg:aspect-auto lg:h-64 overflow-hidden">
                  <img
                    src={activeTopic.image}
                    alt={activeTopic.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-lg text-white font-mono-code text-xs font-bold uppercase tracking-wider">
                    {activeTopic.category}
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="font-display font-bold text-xl text-slate-950 mb-2">
                    {activeTopic.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {activeTopic.summary}
                  </p>
                  
                  {activeTopic.newBadgeText && (
                    <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200/80 text-xs text-blue-900">
                      <span className="font-bold font-mono-code uppercase block text-[10px] text-blue-700 mb-0.5">
                        New Update:
                      </span>
                      {activeTopic.newBadgeText}
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Sub-topic Detailed List */}
              <div className="lg:col-span-7 p-6 sm:p-8">
                <span className="text-xs font-mono-code uppercase tracking-wider text-slate-400 font-semibold block mb-4">
                  Sub-topics & Practical Breakdown
                </span>

                <div className="space-y-4">
                  {activeTopic.subtopics.map((sub, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-3 mb-1.5">
                        <span className="font-semibold text-sm sm:text-base text-slate-900">
                          {sub.name}
                        </span>
                        {sub.isNew && (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono-code font-bold uppercase tracking-wider">
                            New Update
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {sub.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

