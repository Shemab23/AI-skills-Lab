import React from 'react';
import { X, ExternalLink, CheckCircle, Sparkles, Layers, Cpu } from 'lucide-react';
import { StudentProject } from '../types';

interface ProjectPreviewModalProps {
  project: StudentProject | null;
  onClose: () => void;
  onApply: () => void;
}

export const ProjectPreviewModal: React.FC<ProjectPreviewModalProps> = ({
  project,
  onClose,
  onApply,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-2 text-xs font-mono-code text-slate-500">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span className="font-semibold text-slate-900">Student Capstone Showcase</span>
            <span>·</span>
            <span className="text-blue-600 font-medium">{project.category}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Main Visual */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 aspect-16/9 bg-slate-950 shadow-sm">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {project.revenueOrMetric && (
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 text-emerald-700 font-mono-code text-xs font-semibold shadow-xs">
                ✓ {project.revenueOrMetric}
              </div>
            )}
          </div>

          <div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-950 tracking-tight mb-2">
              {project.name}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
              {project.description}
            </p>
            {project.summaryDetails && (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-normal font-mono-code">
                {project.summaryDetails}
              </div>
            )}
          </div>

          {/* Student Info & Tech */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
            <div>
              <span className="text-[10px] font-mono-code uppercase text-slate-400 block font-semibold">
                Creator
              </span>
              <span className="text-sm font-bold text-slate-900 block">
                {project.student}
              </span>
              <span className="text-xs text-slate-500">
                {project.studentRole}
              </span>
            </div>

            <div>
              <span className="text-[10px] font-mono-code uppercase text-slate-400 block font-semibold mb-1">
                Technologies Utilized
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono-code px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200/70 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-slate-50/80 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs font-mono-code text-slate-500">
            Shipped during the 4-week AI Bootcamp
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 rounded-full border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onApply();
              }}
              className="w-full sm:w-auto px-5 py-2 rounded-full bg-blue-600 text-white text-xs font-semibold uppercase tracking-wider hover:bg-blue-700 transition-colors shadow-xs cursor-pointer"
            >
              Build Your Own Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
