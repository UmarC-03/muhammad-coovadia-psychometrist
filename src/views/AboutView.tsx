import React from 'react';
import { Link } from '../context/NavigationContext';
import { PRACTICE_INFO } from '../data/practiceData';
import { 
  ShieldCheck, 
  GraduationCap, 
  Award, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar,
  CheckSquare
} from 'lucide-react';
import practiceLogo from '../assets/Logo (Transparant).png';
import portraitImg from '../assets/portrait.jpg';

export const AboutView: React.FC = () => {
  return (
    <div className="w-full py-10 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Top Header & Practitioner Intro (Asymmetrical Charcoal & Teal Block) */}
        <section className="bg-[#2b2b2b] text-white panel-curved-lg p-6 sm:p-10 relative overflow-hidden border-2 border-[#0c5253] shadow-md">
          <div className="absolute inset-0 bg-dot-matrix-dark opacity-30 pointer-events-none"></div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Practitioner Portrait & Practice Info */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left space-y-3">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-xl overflow-hidden border-2 border-[#0c5253] shadow-lg bg-stone-900 group">
                <img 
                  src={portraitImg} 
                  alt="Muhammad Coovadia - Registered Psychometrist in Norwood, Johannesburg" 
                  width={176}
                  height={176}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-teal-300 pt-1">
                HPCSA Registered Psychometrist
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {PRACTICE_INFO.practitioner}
                <span className="block text-sm sm:text-base font-medium text-stone-200 mt-1">
                  HPCSA Registered Psychometrist | Norwood Practice
                </span>
              </h1>
              <p className="text-xs text-stone-300 font-mono">
                PMT {PRACTICE_INFO.hpcsaPMT} • PR {PRACTICE_INFO.practicePR}
              </p>
            </div>

            {/* Qualifications */}
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                Academic Qualifications & Statutory Mandate
              </h2>

              <div className="p-4 bg-[#1f1f1f] border border-stone-700 panel-curved space-y-1.5 text-xs">
                <p className="font-mono text-teal-300 uppercase tracking-wide text-[11px]">
                  Degrees & Professional Credentials
                </p>
                <p className="text-sm font-semibold text-white">
                  {PRACTICE_INFO.qualifications}
                </p>
                <p className="text-stone-300 leading-relaxed">
                  Conferred by the University of Johannesburg (UJ). Muhammad Coovadia is an HPCSA registered psychometrist operating a dedicated private practice in Norwood, Johannesburg, adhering to rigorous statutory ethical standards.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Detailed Professional Profile */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Clinical Biography & Methodological Pillar */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Biography Container */}
            <div className="card-tactile panel-curved p-6 sm:p-8 bg-white border border-[#2b2b2b]/15 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0c5253]">
                <span className="w-2 h-2 bg-[#0c5253] transform rotate-45 inline-block"></span>
                Practitioner Profile
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-[#2b2b2b]">
                Clinical Practice Approach
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
                <p>
                  Muhammad Coovadia is an HPCSA-registered Psychometrist based in Norwood, Johannesburg. His academic trajectory at the University of Johannesburg encompassed comprehensive training in psychological assessment theory, psychometric test construction, and normative population statistics.
                </p>
                <p>
                  His clinical and vocational exposure spans private practice assessment, corporate wellness counseling, and secondary/tertiary student academic support. This cross-sector experience provides a balanced perspective on how high school subject streams and matric APS scores translate into real-world tertiary qualifications and long-term career viability.
                </p>
                <p>
                  Central to Muhammad&apos;s evaluation philosophy is the integration of empirical psychometric data with individual cultural and academic contexts. Psychometric testing is not treated as an automated sorting exercise, but as a deliberate indicative evaluation that empowers students and parents to make informed, high-stakes academic decisions.
                </p>
              </div>

              <div className="pt-4 border-t border-[#2b2b2b]/10">
                <div className="p-4 bg-[#ededed] panel-curved border border-[#2b2b2b]/10 space-y-2">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0c5253]">
                    The Practice Pillar: Personalised Guidance
                  </h3>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    Standardized test batteries generate objective percentile norms, but data alone does not make decisions. Every assessment concludes with an in-depth, 1-on-1 feedback consultation where results are translated into actionable academic roadmaps tailored to the candidate&apos;s genuine aptitudes and aspirations.
                  </p>
                </div>
              </div>
            </div>

            {/* Scope of Practice & Statutory Distinction */}
            <div className="card-tactile panel-curved p-6 sm:p-8 bg-white border border-[#2b2b2b]/15 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0c5253]">
                <span className="w-2 h-2 bg-[#0c5253] transform rotate-45 inline-block"></span>
                HPCSA Scope of Practice
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-[#2b2b2b]">
                Psychometric Evaluation vs. Clinical Psychotherapy
              </h2>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                Psychometry is a legally defined discipline under the Health Professions Act. While clinical psychologists evaluate and treat psychological conditions, registered psychometrists specialize in the objective measurement of cognitive faculties, scholastic aptitudes, and vocational interests using scientifically validated psychometric instruments.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-[#f7f7f7] border border-stone-300 panel-curved text-xs">
                  <span className="font-bold text-[#2b2b2b] block mb-1">Standardized Batteries</span>
                  <span className="text-stone-600 text-[11px]">Strict adherence to normed assessment protocols.</span>
                </div>
                <div className="p-3 bg-[#f7f7f7] border border-stone-300 panel-curved text-xs">
                  <span className="font-bold text-[#2b2b2b] block mb-1">Empirical Scoring</span>
                  <span className="text-stone-600 text-[11px]">Statistical comparison against South African population norms.</span>
                </div>
                <div className="p-3 bg-[#f7f7f7] border border-stone-300 panel-curved text-xs">
                  <span className="font-bold text-[#2b2b2b] block mb-1">Actionable Reports</span>
                  <span className="text-stone-600 text-[11px]">Formal written indicative evaluation provided post-session.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Practice Location & Credentials Card */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Norwood Testing Room Card */}
            <div className="p-6 bg-[#2b2b2b] text-white panel-curved border-2 border-[#0c5253] space-y-4">
              <div className="flex items-center justify-between border-b border-stone-700 pb-3">
                <h3 className="text-sm font-bold text-white tracking-wide">Testing Practice Location</h3>
                <MapPin className="w-4 h-4 text-teal-400" />
              </div>

              <div className="space-y-2 text-xs text-stone-300">
                <p className="font-semibold text-white text-sm">84 Frances Rd, Norwood</p>
                <p>Johannesburg, Gauteng, 2192</p>
                <p className="text-[11px] text-teal-300 pt-1">
                  Dedicated in-person testing room equipped for distraction-free paper battery administration.
                </p>
              </div>

              <div className="pt-2 border-t border-stone-700 space-y-2 text-xs">
                <div className="flex items-center justify-between text-stone-300">
                  <span>Operating Hours:</span>
                  <span className="font-mono text-white">Mon–Fri 08:30–17:00</span>
                </div>
                <div className="flex items-center justify-between text-stone-300">
                  <span>Saturday Testing:</span>
                  <span className="font-mono text-teal-300">By Appointment</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <Link
                  to="/contact"
                  id="about-schedule-btn"
                  className="w-full py-2.5 bg-[#0c5253] hover:bg-[#126d6f] text-white font-bold text-xs uppercase tracking-wider text-center panel-curved tap-target transition-colors"
                >
                  Schedule Assessment
                </Link>
                <a
                  href={`tel:${PRACTICE_INFO.phoneRaw}`}
                  className="text-center text-xs font-mono text-teal-300 hover:underline py-1"
                >
                  Practice Line: {PRACTICE_INFO.phone}
                </a>
              </div>
            </div>

            {/* Statutory Compliance Checklist */}
            <div className="p-5 bg-white border border-[#2b2b2b]/15 panel-curved space-y-3 text-xs">
              <h4 className="font-bold text-[#2b2b2b] uppercase tracking-wider font-mono text-[11px]">
                Statutory Compliance
              </h4>
              <ul className="space-y-2 text-stone-700">
                <li className="flex items-center gap-2">
                  <CheckSquare className="w-3.5 h-3.5 text-[#0c5253] shrink-0" />
                  <span>HPCSA Registered Psychometrist</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckSquare className="w-3.5 h-3.5 text-[#0c5253] shrink-0" />
                  <span>Practice PR 0071253 Registered</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckSquare className="w-3.5 h-3.5 text-[#0c5253] shrink-0" />
                  <span>Medical Aid Itemised Invoicing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckSquare className="w-3.5 h-3.5 text-[#0c5253] shrink-0" />
                  <span>In-Person Paper-Based Testing</span>
                </li>
              </ul>
            </div>

          </div>

        </section>

      </div>
    </div>
  );
};
