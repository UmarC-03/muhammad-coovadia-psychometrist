/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { AssessmentsCatalogView } from './views/AssessmentsCatalogView';
import { AssessmentDetailView } from './views/AssessmentDetailView';
import { ContactBookingView } from './views/ContactBookingView';
import { NotFoundView } from './views/NotFoundView';
import { SEOHead } from './components/SEOHead';
import { MessageSquare, Phone } from 'lucide-react';
import { PRACTICE_INFO } from './data/practiceData';

const MainRouter: React.FC = () => {
  const { currentRoute } = useNavigation();

  return (
    <div className="min-h-screen flex flex-col bg-[#ededed] text-[#2b2b2b]">
      {/* Dynamic Framework-Native SEO Head & Schema.org Management */}
      <SEOHead />

      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0c5253] focus:text-white focus:rounded-md focus:shadow-lg focus:outline-hidden"
      >
        Skip to main content
      </a>

      {/* Global Header */}
      <Header />

      {/* Main Content Area */}
      <main id="main-content" className="grow">
        {currentRoute === 'home' && <HomeView />}
        {currentRoute === 'about' && <AboutView />}
        {currentRoute === 'assessments' && <AssessmentsCatalogView />}
        {currentRoute === 'assessment-detail' && <AssessmentDetailView />}
        {currentRoute === 'contact' && <ContactBookingView />}
        {currentRoute === 'not-found' && <NotFoundView />}
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
    <NavigationProvider>
      <MainRouter />
    </NavigationProvider>
  );
}
