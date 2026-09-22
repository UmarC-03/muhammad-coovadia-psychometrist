import React from 'react';
import { Link } from '../context/NavigationContext';
import { PRACTICE_INFO, ASSESSMENTS } from '../data/practiceData';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import practiceLogo from '../assets/Logo (Transparant).png';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 bg-[#2b2b2b] text-white border-t-2 border-[#0c5253]">
      {/* Top Asymmetrical Teal Accent Band */}
      <div className="bg-[#0c5253] py-6 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-matrix-dark opacity-20 pointer-events-none"></div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 flex items-center justify-center">
              <img 
                src={practiceLogo} 
                alt="Muhammad Coovadia Registered Psychometrist Logo" 
                width={64} 
                height={64} 
                loading="lazy" 
                decoding="async" 
                className="w-full h-full object-contain drop-shadow-sm" 
              />
            </div>
            <div>
              <p className="font-bold tracking-tight text-white text-base sm:text-lg">
                Statutory Psychometric Assessment in Johannesburg
              </p>
              <p className="text-teal-100 text-xs sm:text-sm">
                In-person, standardized paper batteries administered in Norwood.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              id="footer-top-book-btn"
              className="px-5 py-2.5 bg-[#2b2b2b] hover:bg-[#1f1f1f] text-white text-xs font-bold uppercase tracking-wider tap-target flex items-center gap-2 panel-curved border border-black shadow-xs transition-colors"
            >
              <span>Schedule Assessment</span>
            </Link>

            <a
              href={PRACTICE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-top-whatsapp-btn"
              className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tap-target flex items-center gap-1.5 border border-white/20 transition-colors"
            >
              <span>WhatsApp Inquiries</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Column 1: Practitioner Credentials & Designation */}
          <div className="space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 flex items-center justify-center">
                <img 
                  src={practiceLogo} 
                  alt="Muhammad Coovadia Registered Psychometrist Logo" 
                  width={64} 
                  height={64} 
                  loading="lazy" 
                  decoding="async" 
                  className="w-full h-full object-contain drop-shadow-sm" 
                />
              </div>
              <div>
                <h3 className="font-bold text-base text-white">{PRACTICE_INFO.practitioner}</h3>
                <p className="text-xs text-teal-300 font-mono">{PRACTICE_INFO.designation}</p>
              </div>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed">
              {PRACTICE_INFO.qualifications}
            </p>

            <div className="space-y-1.5 text-[11px] font-mono py-1">
              <div className="flex items-center justify-between text-stone-300">
                <span className="text-stone-400">HPCSA Reg:</span>
                <span className="font-semibold text-teal-300">PMT {PRACTICE_INFO.hpcsaPMT}</span>
              </div>
              <div className="flex items-center justify-between text-stone-300">
                <span className="text-stone-400">Practice (PR):</span>
                <span className="font-semibold text-teal-300">{PRACTICE_INFO.practicePR}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono">
              Practice Navigation
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <Link to="/" id="footer-nav-home" className="hover:text-teal-300 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-400 transform rotate-45 inline-block"></span>
                  Practice Overview
                </Link>
              </li>
              <li>
                <Link to="/about" id="footer-nav-about" className="hover:text-teal-300 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-400 transform rotate-45 inline-block"></span>
                  About Muhammad Coovadia
                </Link>
              </li>
              <li>
                <Link to="/assessments" id="footer-nav-assessments" className="hover:text-teal-300 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-400 transform rotate-45 inline-block"></span>
                  Assessment Batteries Catalog
                </Link>
              </li>
              <li>
                <Link to="/contact" id="footer-nav-contact" className="hover:text-teal-300 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-400 transform rotate-45 inline-block"></span>
                  Intake & Appointment Scheduling
                </Link>
              </li>
            </ul>

            <div className="pt-3 border-t border-stone-700">
              <h5 className="text-[11px] font-semibold text-stone-300 uppercase tracking-wider font-mono mb-2">
                Assessment Batteries
              </h5>
              <ul className="space-y-1.5 text-xs text-stone-400">
                {ASSESSMENTS.map((item) => (
                  <li key={item.id}>
                    <Link 
                      to={`/assessments/${item.id}`}
                      id={`footer-assessment-link-${item.id}`}
                      className="hover:text-teal-300 transition-colors block text-[11px]"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Testing Room & Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono">
              Testing Room & Contact
            </h4>
            
            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <p className="font-semibold text-white">
                  {PRACTICE_INFO.address.street}, {PRACTICE_INFO.address.suburb}, {PRACTICE_INFO.address.city}, {PRACTICE_INFO.address.postalCode}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a
                  href={`tel:${PRACTICE_INFO.phoneRaw}`}
                  id="footer-call-link"
                  className="hover:text-teal-300 transition-colors font-mono"
                >
                  {PRACTICE_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a
                  href={`mailto:${PRACTICE_INFO.email}`}
                  id="footer-email-link"
                  className="hover:text-teal-300 transition-colors break-all"
                >
                  {PRACTICE_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="text-stone-300">Mon–Fri: 08:30–17:00 | Sat: By Appt</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Band */}
        <div className="mt-12 pt-6 border-t border-stone-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} {PRACTICE_INFO.practitioner}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>HPCSA PMT {PRACTICE_INFO.hpcsaPMT}</span>
            <span>•</span>
            <span>PR 0071253</span>
            <span>•</span>
            <span>Johannesburg, South Africa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
