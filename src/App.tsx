/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CurriculumSection } from './components/CurriculumSection';
import { InstructorsSection } from './components/InstructorsSection';
import { StudentProjectsCarousel } from './components/StudentProjectsCarousel';
import { NextCohortSection } from './components/NextCohortSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { ApplicationModal } from './components/ApplicationModal';
import { ProjectPreviewModal } from './components/ProjectPreviewModal';
import { StudentProject } from './types';

export default function App() {
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [selectedTopicForModal, setSelectedTopicForModal] = useState<string | undefined>(undefined);
  const [inspectedProject, setInspectedProject] = useState<StudentProject | null>(null);

  const handleOpenApplicationModal = (topicTitle?: string) => {
    setSelectedTopicForModal(topicTitle);
    setIsApplicationModalOpen(true);
  };

  const handleCloseApplicationModal = () => {
    setIsApplicationModalOpen(false);
  };

  const handleSelectProject = (project: StudentProject) => {
    setInspectedProject(project);
  };

  const handleCloseProjectModal = () => {
    setInspectedProject(null);
  };

  return (
    <div className="min-h-screen bg-transparent text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar onOpenModal={handleOpenApplicationModal} />

      {/* Main Page Narrative Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenModal={handleOpenApplicationModal} />

        {/* 2. About: Create, Automate, Monetize */}
        <AboutSection />

        {/* 3. Curriculum & Topics */}
        <CurriculumSection />

        {/* 4. Instructors & Mentors */}
        <InstructorsSection />

        {/* 5. Student Projects Grid */}
        <StudentProjectsCarousel
          onSelectProject={handleSelectProject}
          onOpenModal={() => handleOpenApplicationModal()}
        />

        {/* 6. Next Cohort Inclusions & Tuition */}
        <NextCohortSection onOpenModal={() => handleOpenApplicationModal()} />

        {/* 7. Alumni Testimonials */}
        <TestimonialsSection />

        {/* 8. FAQ Accordion */}
        <FAQSection />

        {/* 9. Final CTA */}
        <FinalCTASection onOpenModal={() => handleOpenApplicationModal()} />
      </main>

      {/* Footer */}
      <Footer onOpenModal={() => handleOpenApplicationModal()} />

      {/* Application / Registration Modal */}
      <ApplicationModal
        isOpen={isApplicationModalOpen}
        onClose={handleCloseApplicationModal}
        initialTopic={selectedTopicForModal}
      />

      {/* Student Project Inspection Modal */}
      <ProjectPreviewModal
        project={inspectedProject}
        onClose={handleCloseProjectModal}
        onApply={() => handleOpenApplicationModal()}
      />
    </div>
  );
}

