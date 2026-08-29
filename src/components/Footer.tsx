import React from "react";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { COHORT_INFO } from "../data/bootcampData";

interface FooterProps {
  onOpenModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 sm:pt-24 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800/80">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-md  flex items-center shadow-xs"
                src="../public/icon.png"
                alt="Logo"
              />
              <span className="font-bold text-2xl tracking-tight text-white">
                SKILLS LAB
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              A joint program by{" "}
              <span className="text-white font-medium">Laranova</span> and{" "}
              <span className="text-white font-medium">Hexa Media</span> —
              teaching people to build software, create studio-grade media, and
              automate business workflows with artificial intelligence.
            </p>

            <div className="pt-2 text-xs font-mono-code text-slate-500">
              {COHORT_INFO.name} • {COHORT_INFO.location}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono-code uppercase tracking-wider text-slate-200 font-semibold">
              Program Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="#about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About Bootcamp
                </a>
              </li>
              <li>
                <a
                  href="#curriculum"
                  className="hover:text-blue-400 transition-colors"
                >
                  Curriculum & Topics
                </a>
              </li>
              <li>
                <a
                  href="#instructors"
                  className="hover:text-blue-400 transition-colors"
                >
                  Instructors & Mentors
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-blue-400 transition-colors"
                >
                  Student Projects
                </a>
              </li>
              <li>
                <a
                  href="#cohort"
                  className="hover:text-blue-400 transition-colors"
                >
                  Cohort Details
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-blue-400 transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono-code uppercase tracking-wider text-slate-200 font-semibold">
              Location & Contact
            </h4>
            <div className="space-y-2.5 text-xs font-mono-code text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{COHORT_INFO.venue}, Lefkoşa</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href="mailto:admissions@laranova.ai"
                  className="hover:text-blue-400 transition-colors"
                >
                  admissions@laranova.ai
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>+90 533 800 2400</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenModal}
                className="inline-flex items-center gap-2 text-xs font-mono-code uppercase font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
              >
                <span>Apply for Cohort</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-slate-500">
          <div>© {new Date().getFullYear()} Laranova & Hexa Media</div>
          <div className="flex items-center gap-4">
            <span>{COHORT_INFO.location}</span>
            <span>•</span>
            <span className="text-blue-400">{COHORT_INFO.price} Tuition</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
