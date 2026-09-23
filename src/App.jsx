import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { ReadinessAssessmentModal } from './components/interactive/ReadinessAssessmentModal';

// Dedicated Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { FrameworkPage } from './pages/FrameworkPage';
import { ServicesPage } from './pages/ServicesPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);

  return (
    <HashRouter>
      <div className="pycs-app">
        {/* Reset Scroll on Page Transition */}
        <ScrollToTop />

        {/* Global Navigation */}
        <Navbar onOpenAssessment={() => setIsAssessmentOpen(true)} />

        {/* Multi-Page Routes */}
        <main id="main-content">
          <Routes>
            <Route path="/" element={<HomePage onOpenAssessment={() => setIsAssessmentOpen(true)} />} />
            <Route path="/about" element={<AboutPage onOpenAssessment={() => setIsAssessmentOpen(true)} />} />
            <Route path="/framework" element={<FrameworkPage onOpenAssessment={() => setIsAssessmentOpen(true)} />} />
            <Route path="/services" element={<ServicesPage onOpenAssessment={() => setIsAssessmentOpen(true)} />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Interactive Readiness Assessment Modal */}
        <ReadinessAssessmentModal
          isOpen={isAssessmentOpen}
          onClose={() => setIsAssessmentOpen(false)}
        />
      </div>
    </HashRouter>
  );
}

export default App;
