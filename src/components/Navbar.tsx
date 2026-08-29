import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { COHORT_INFO } from "../data/bootcampData";

interface NavbarProps {
  onOpenModal: (topic?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = [
        "about",
        "curriculum",
        "instructors",
        "projects",
        "cohort",
        "faq",
      ];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about", id: "about" },
    { label: "Curriculum", href: "#curriculum", id: "curriculum" },
    { label: "Instructors", href: "#instructors", id: "instructors" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Calendar", href: "#cohort", id: "cohort" },
    { label: "FAQ", href: "#faq", id: "faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80 py-3.5 shadow-xs"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-hidden"
            id="nav-brand-logo"
          >
            <img
              className="w-8 h-8 rounded-lg tracking-tight transition-transform group-hover:scale-105 shadow-sm shadow-blue-500/20"
              src="/icon.png"
            />
            <div className="flex flex-col">
              <span className="font-bold text-2xl leading-tight tracking-tight text-slate-900">
                Skills Lab
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/80 border border-slate-200/90 rounded-full px-3 py-1.5 shadow-xs backdrop-blur-xs">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-1 text-sm font-medium transition-colors rounded-full ${
                  activeSection === link.id
                    ? "text-blue-700 bg-blue-50/90 shadow-2xs font-semibold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => onOpenModal()}
              id="nav-register-cta"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 shadow-sm shadow-blue-600/20 active:scale-95 cursor-pointer"
            >
              <span>Apply Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-slate-800 hover:bg-slate-100 transition-colors focus:outline-hidden"
            aria-label="Toggle menu"
            id="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16.25 bg-white border-b border-slate-200 px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-mono-code text-slate-600">
              <span>
                {COHORT_INFO.name} • {COHORT_INFO.location}
              </span>
              <span className="text-blue-600 font-semibold">
                {COHORT_INFO.price}
              </span>
            </div>

            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 px-3 text-base font-medium rounded-lg transition-colors ${
                    activeSection === link.id
                      ? "bg-blue-50 text-blue-700 font-semibold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal();
              }}
              className="w-full mt-2 flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white font-medium uppercase tracking-wider text-sm shadow-md shadow-blue-600/20 active:scale-98 cursor-pointer"
            >
              <span>Apply for Enrollment</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
