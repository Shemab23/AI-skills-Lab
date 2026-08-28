import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { STUDENT_PROJECTS } from '../data/bootcampData';
import { StudentProject } from '../types';

interface StudentProjectsCarouselProps {
  onSelectProject: (project: StudentProject) => void;
  onOpenModal: () => void;
}

export const StudentProjectsCarousel: React.FC<StudentProjectsCarouselProps> = ({
  onSelectProject,
  onOpenModal,
}) => {
  // Mobile page size is 2 (so max 2 rows of 1 item = 2 items)
  // Desktop page size is 6 (so max 2 rows of 3 items = 6 items)
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const pageSize = isMobile ? 2 : 6;
  const totalPages = Math.ceil(STUDENT_PROJECTS.length / pageSize);

  const displayedProjects = STUDENT_PROJECTS.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects" className="py-20 sm:py-28 lg:py-36 border-b border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Pagination Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono-code uppercase tracking-widest text-blue-600 font-semibold mb-2">
              Student Work & Proof
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-slate-950 leading-tight">
              Real projects shipped by <span className="text-blue-600 font-semibold">past students.</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
              All projects are built from scratch, deployed live to the cloud, and monetized during the 4-week program.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono-code text-slate-500 font-medium">
              Page {currentPage + 1} of {totalPages}
            </span>
            <button
              onClick={prevPage}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-blue-600 hover:text-white text-slate-700 flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
              aria-label="Previous projects page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextPage}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-blue-600 hover:text-white text-slate-700 flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
              aria-label="Next projects page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2-Row Maximum Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((proj) => (
            <div
              key={proj.id}
              className="rounded-3xl border border-slate-200/90 bg-white shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group"
            >
              {/* Cover Image Container with Metric Overlay */}
              <div
                onClick={() => onSelectProject(proj)}
                className="relative aspect-16/10 bg-slate-100 overflow-hidden cursor-pointer"
              >
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-white text-[11px] font-mono-code px-3 py-1 rounded-lg font-semibold uppercase tracking-wider">
                  {proj.category}
                </div>

                {/* Revenue or Key Metric */}
                {proj.revenueOrMetric && (
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs text-emerald-800 text-[11px] font-mono-code px-2.5 py-1 rounded-md border border-slate-200/80 font-bold shadow-xs">
                    {proj.revenueOrMetric}
                  </div>
                )}

                {/* Hover Inspect CTA */}
                <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="px-4 py-2 rounded-full bg-white text-slate-900 text-xs font-semibold shadow-md flex items-center gap-1">
                    <span>Inspect Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    onClick={() => onSelectProject(proj)}
                    className="font-display font-bold text-xl text-slate-950 tracking-tight mb-2 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    {proj.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {proj.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {proj.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono-code px-2 py-0.5 rounded-md bg-slate-50 text-slate-700 border border-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer: Student attribution and Links */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono-code uppercase text-slate-400 block font-semibold">
                      Built by
                    </span>
                    <span className="text-xs font-bold text-slate-900 block">
                      {proj.student}
                    </span>
                    <span className="text-[11px] text-slate-500">
                      {proj.studentRole}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors cursor-pointer"
                        title="Live Link"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <button
                      onClick={() => onSelectProject(proj)}
                      className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Details
                    </button>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Mobile Page Indicator Dots */}
        <div className="flex justify-center items-center gap-1.5 mt-8 md:hidden">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                currentPage === idx ? 'bg-blue-600 w-6' : 'bg-slate-300'
              }`}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

