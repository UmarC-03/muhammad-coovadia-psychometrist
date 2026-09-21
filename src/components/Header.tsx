import React, { useState } from 'react';
import { useNavigation, Link } from '../context/NavigationContext';
import { PRACTICE_INFO } from '../data/practiceData';
import { Menu, X, Calendar } from 'lucide-react';
import practiceLogo from '../assets/Logo (Transparant).png';

export const Header: React.FC = () => {
  const { currentRoute, navigate } = useNavigation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Practice Overview', path: '/', active: currentRoute === 'home' },
    { label: 'About Practitioner', path: '/about', active: currentRoute === 'about' },
    { 
      label: 'Assessment Batteries', 
      path: '/assessments', 
      active: currentRoute === 'assessments' || currentRoute === 'assessment-detail' 
    },
    { label: 'Intake & Scheduling', path: '/contact', active: currentRoute === 'contact' },
  ];

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#ededed]/98 border-b border-[#2b2b2b]/15 backdrop-blur-xs">
      {/* Main Practice Navigation Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between">
        {/* Brand Logo */}
        <Link 
          to="/" 
          id="header-brand-logo"
          aria-label="Muhammad Coovadia Registered Psychometrist - Home"
          className="flex items-center group focus:outline-hidden py-1"
        >
          {/* Practice Official Transparent Logo */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex-shrink-0 flex items-center justify-center">
            <img 
              src={practiceLogo} 
              alt="Muhammad Coovadia Psychometrist Logo" 
              className="w-full h-full object-contain filter group-hover:brightness-110 transition-transform duration-200 group-hover:scale-105 drop-shadow-xs"
              id="header-brand-logo-img"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Practice Navigation">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              id={`nav-link-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-150 rounded-xs tap-target flex items-center ${
                item.active
                  ? 'text-white bg-[#0c5253] border border-[#073536] shadow-xs'
                  : 'text-[#2b2b2b] hover:text-[#0c5253] hover:bg-[#2b2b2b]/5'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Action Callout & Mobile Drawer Toggle */}
        <div className="flex items-center gap-2.5">
          <Link
            to="/contact"
            id="nav-cta-book-button"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#2b2b2b] hover:bg-[#0c5253] transition-colors duration-150 panel-curved border border-[#1b1b1b] shadow-xs tap-target"
          >
            <Calendar className="w-3.5 h-3.5 text-teal-300" />
            <span>Schedule Assessment</span>
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle-btn"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            className="md:hidden p-2.5 rounded-sm border border-[#2b2b2b]/20 bg-white text-[#2b2b2b] hover:bg-[#2b2b2b]/10 transition-colors tap-target flex items-center justify-center"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Collapsible Navigation Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-navigation-drawer"
          className="md:hidden border-t border-[#2b2b2b]/15 bg-[#fbfbfb] px-4 pt-3 pb-6 space-y-3 shadow-md"
        >
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.path}
                type="button"
                onClick={() => handleNavClick(item.path)}
                id={`mobile-nav-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                className={`w-full text-left px-4 py-3 text-sm font-semibold flex items-center justify-between tap-target border ${
                  item.active
                    ? 'bg-[#0c5253] text-white border-[#073536]'
                    : 'text-[#2b2b2b] bg-white border-[#2b2b2b]/10 hover:bg-[#ededed]'
                }`}
              >
                <span>{item.label}</span>
                <span className={`w-2 h-2 transform rotate-45 ${item.active ? 'bg-white' : 'bg-[#0c5253]'}`}></span>
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-[#2b2b2b]/10 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => handleNavClick('/contact')}
              id="mobile-menu-cta-book"
              className="w-full py-3.5 px-4 bg-[#2b2b2b] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 tap-target panel-curved border border-black shadow-xs"
            >
              <Calendar className="w-4 h-4 text-teal-300" />
              <span>Schedule Assessment Session</span>
            </button>

            <a
              href={PRACTICE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="mobile-menu-whatsapp-btn"
              className="w-full py-3 px-4 bg-white border border-[#0c5253] text-[#0c5253] font-semibold text-xs tracking-wide flex items-center justify-center gap-2 tap-target hover:bg-teal-50"
            >
              <span>Direct WhatsApp Inquiry: 063 237 7926</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
