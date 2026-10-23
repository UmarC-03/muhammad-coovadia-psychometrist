/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { NavigationProvider } from './context/NavigationContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SEOHead } from './components/SEOHead';
import { MessageSquare, Phone } from 'lucide-react';
import { PRACTICE_INFO } from './data/practiceData';

// Code-split route components via React.lazy to eliminate main thread blocking & slash initial bundle size
const HomeView = lazy(() => import('./views/HomeView').then((m) => ({ default: m.HomeView })));
const AboutView = lazy(() => import('./views/AboutView').then((m) => ({ default: m.AboutView })));
const AssessmentsCatalogView = lazy(() =>
  import('./views/AssessmentsCatalogView').then((m) => ({ default: m.AssessmentsCatalogView }))
);
const AssessmentDetailView = lazy(() =>
  import('./views/AssessmentDetailView').then((m) => ({ default: m.AssessmentDetailView }))
);
const ContactBookingView = lazy(() =>
  import('./views/ContactBookingView').then((m) => ({ default: m.ContactBookingView }))
);
const NotFoundView = lazy(() =>
  import('./views/NotFoundView').then((m) => ({ default: m.NotFoundView }))
);

const ViewSuspenseFallback: React.FC = () => (
  <div className="w-full min-h-[40vh] flex items-center justify-center py-12" aria-busy="true" aria-label="Loading content">
    <div className="flex flex-col items-center gap-3">
      <div className="w-7 h-7 border-2 border-[#0c5253] border-t-transparent rounded-full animate-spin"></div>
      <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Loading Practice Information...</span>
    </div>
  </div>
);

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

const MainRouter: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#ededed] text-[#2b2b2b]">
      {/* Dynamic Framework-Native SEO Head & Schema.org Management */}
      <SEOHead />
      <ScrollToTop />

      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0c5253] focus:text-white focus:rounded-md focus:shadow-lg focus:outline-hidden"
      >
        Skip to main content
      </a>

      {/* Global Header */}
      <Header />

      {/* Main Content Area with Code-Split Suspense Boundary */}
      <main id="main-content" className="grow">
        <Suspense fallback={<ViewSuspenseFallback />}>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/about" element={<AboutView />} />
            <Route path="/assessments" element={<AssessmentsCatalogView />} />
            <Route path="/assessments/:id" element={<AssessmentDetailView />} />
            <Route path="/contact" element={<ContactBookingView />} />
            <Route path="*" element={<NotFoundView />} />
          </Routes>
        </Suspense>
      </main>

      {/* Mobile Floating Quick Contact Bar (Mobile-Only for fast touch access) */}
      <div className="md:hidden fixed bottom-3 left-4 right-4 z-40 bg-[#2b2b2b]/95 backdrop-blur-md text-white p-2 rounded-xl shadow-xl border border-stone-700 flex items-center justify-between gap-2">
        <a
          href={`tel:${PRACTICE_INFO.phoneRaw}`}
          id="mobile-float-call-btn"
          className="flex-1 py-2 px-3 rounded-lg bg-stone-800 hover:bg-stone-700 text-xs font-semibold flex items-center justify-center gap-1.5 tap-target text-stone-200"
        >
          <Phone className="w-3.5 h-3.5 text-teal-400" />
          <span>Call Practice</span>
        </a>
        <a
          href={PRACTICE_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-float-whatsapp-btn"
          className="flex-1 py-2 px-3 rounded-lg bg-[#0c5253] hover:bg-[#126d6f] text-xs font-semibold flex items-center justify-center gap-1.5 tap-target text-white"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
      </div>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <NavigationProvider>
        <MainRouter />
      </NavigationProvider>
    </BrowserRouter>
  );
}
