import React from 'react';
import { Link } from '../context/NavigationContext';
import { PRACTICE_INFO, ASSESSMENTS, JOURNEY_STEPS } from '../data/practiceData';
import { 
  MapPin, 
  Phone, 
  ShieldCheck, 
  FileText, 
  Users, 
  GraduationCap, 
  Compass, 
  Clock, 
  Calendar,
  CheckSquare
} from 'lucide-react';
import practiceLogo from '../assets/Logo (Transparant).png';
import portraitImg from '../assets/portrait.jpg';

export const HomeView: React.FC = () => {
  return (
    <div className="w-full">
      {/* 1. HERO SECTION: Asymmetrical Dark Charcoal & Teal Editorial Header */}
      <section className="relative overflow-hidden bg-[#2b2b2b] text-white pt-8 pb-16 lg:py-20 border-b-4 border-[#0c5253]">
        {/* Halftone dot matrix pattern */}
        <div className="absolute inset-0 bg-dot-matrix-dark opacity-35 pointer-events-none"></div>

        {/* Asymmetrical angled corner accent chip */}
        <div 
          className="absolute -top-12 -right-12 w-64 h-64 bg-[#0c5253]/50 transform rotate-12 pointer-events-none panel-curved"
          aria-hidden="true"
        ></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Hero Left: Value Proposition & Statutory Verification */}
            <div className="lg:col-span-6 space-y-6">

              {/* Practice Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Clarity Starts Here.
                  <span className="block text-lg sm:text-xl lg:text-2xl font-semibold text-teal-300 mt-2">
                    In-Person Psychometric Assessments in Norwood, Johannesburg
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-stone-200 font-normal max-w-xl leading-relaxed">
                  Clarity starts here through objective, standardized in-person psychometric assessments in Norwood, Johannesburg. We guide high school FET subject choices and tertiary career pathways through normative, paper-based evaluation batteries.
                </p>
              </div>

              {/* Clinical Practice Attributes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs">
                <div className="flex items-center gap-2.5 p-2.5 bg-[#202020] border border-stone-700 text-stone-200 panel-curved">
                  <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Norwood, Johannesburg (In-Person Testing)</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 bg-[#202020] border border-stone-700 text-stone-200 panel-curved">
                  <FileText className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Standardized Paper-Based Batteries</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 bg-[#202020] border border-stone-700 text-stone-200 panel-curved">
                  <Users className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>In-Person Feedback Consultation Included</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 bg-[#202020] border border-stone-700 text-stone-200 panel-curved">
                  <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Medical Aid Claimable (Itemised Invoice)</span>
                </div>
              </div>

              {/* Tactile Call To Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
                <Link
                  to="/contact"
                  id="hero-primary-book-btn"
                  className="btn-tactile-teal tap-target"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Assessment Session</span>
                </Link>

                <Link
                  to="/assessments"
                  id="hero-secondary-explore-btn"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/15 border border-white/30 panel-curved tap-target transition-colors"
                >
                  <span>Review Assessment Batteries</span>
                </Link>
              </div>

            </div>

            {/* Hero Right: Architectural Practice Panel with Left/Right Column Divide */}
            <div className="lg:col-span-6">
              <div className="p-5 sm:p-6 bg-[#232323] border-2 border-[#0c5253] text-white panel-curved shadow-md relative">
                {/* Left/Right Column Divide */}
                <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
                  
                  {/* Left Column: Portrait */}
                  <div className="shrink-0 flex items-center justify-center">
                    <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-lg overflow-hidden border-2 border-[#0c5253] shadow-md bg-stone-900">
                      <img 
                        src={portraitImg} 
                        alt="Muhammad Coovadia - Registered Psychometrist in Norwood, Johannesburg" 
                        width={176}
                        height={176}
                        loading="eager"
                        decoding="async"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>

                  {/* Right Column: Information */}
                  <div className="flex-1 space-y-3.5 flex flex-col justify-between w-full">
                    <div className="flex items-start justify-between border-b border-stone-700 pb-3 gap-2">
                      <div>
                        <h2 className="text-base font-bold !text-white text-white tracking-wide leading-tight">
                          {PRACTICE_INFO.practitioner}
                        </h2>
                        <p className="text-xs text-teal-300 font-mono">{PRACTICE_INFO.designation}</p>
                      </div>
                      <span className="text-[11px] font-mono text-[#ffffff] shrink-0">
                        PR {PRACTICE_INFO.practicePR} • PMT {PRACTICE_INFO.hpcsaPMT}
                      </span>
                    </div>

                    <div className="space-y-2.5 text-xs text-stone-300 leading-relaxed">
                      <p>
                        <strong className="text-white">Professional Foundation:</strong> {PRACTICE_INFO.qualifications}.
                      </p>
                      <p>
                        Specialised practice offering normative cognitive and interest profiling to support students and families at pivotal decision points.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE TWO SPECIALIZED ASSESSMENT BATTERIES (Editorial Asymmetric Layout) */}
      <section className="py-16 lg:py-20 bg-[#ededed]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0c5253]">
              <span className="w-2 h-2 bg-[#0c5253] transform rotate-45 inline-block"></span>
              Specialized Practice Focus
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#2b2b2b]">
              Indicative Assessment Batteries
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              Standardized, norm-referenced evaluations tailored for Grade 9 subject selection and post-school career direction.
            </p>
          </div>

          {/* Asymmetric Assessment Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Card 1: Grade 9 Subject Choice */}
            <div className="card-tactile panel-curved p-6 sm:p-8 flex flex-col justify-between relative bg-white border-2 border-[#2b2b2b]/15">
              <div className="space-y-5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#0c5253] text-white text-[11px] font-mono font-semibold uppercase tracking-wider panel-curved">
                    Grade 9 FET Phase
                  </span>
                  <span className="text-xs font-mono text-stone-500">In-Person • Paper Battery</span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#2b2b2b] mb-2">
                    Grade 9 Subject Choice Assessment
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Evaluates cognitive aptitudes, reasoning styles, and vocational interests to determine the optimal FET subject stream (Grades 10–12), directly impacting matric performance and university eligibility.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-[#2b2b2b]/10">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0c5253] font-mono">
                    Evaluation Dimensions
                  </h4>
                  <ul className="space-y-2 text-xs text-[#2b2b2b]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#0c5253] mt-1.5 shrink-0 transform rotate-45"></span>
                      <span><strong>Cognitive Aptitude:</strong> Verbal, numerical, and abstract intellectual capacities.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#0c5253] mt-1.5 shrink-0 transform rotate-45"></span>
                      <span><strong>Academic & Career Interests:</strong> Scientific, commercial, technical, and humanities inclinations.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#0c5253] mt-1.5 shrink-0 transform rotate-45"></span>
                      <span><strong>Curriculum Alignment:</strong> Objective guidance on Mathematics vs Mathematical Literacy.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-3 bg-[#ededed] border border-[#2b2b2b]/10 text-xs space-y-1">
                  <span className="font-bold text-[#2b2b2b]">Deliverables:</span>
                  <p className="text-stone-600 text-[11px] m-0">
                    Comprehensive written psychometric report + 1-on-1 in-person feedback consultation with candidate and parents.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#2b2b2b]/10 flex flex-wrap items-center justify-between gap-3">
                <Link
                  to="/assessments/grade-9-subject-choice"
                  id="home-grade-9-details-btn"
                  className="btn-tactile-charcoal text-xs tap-target"
                >
                  <span>View Assessment Specifications</span>
                </Link>

                <Link
                  to="/contact?service=grade-9-subject-choice"
                  id="home-grade-9-book-btn"
                  className="text-xs font-bold text-[#0c5253] hover:underline flex items-center gap-1.5"
                >
                  <span>Book for Grade 9</span>
                </Link>
              </div>
            </div>

            {/* Card 2: Tertiary / University Guidance */}
            <div className="card-tactile panel-curved p-6 sm:p-8 flex flex-col justify-between relative bg-white border-2 border-[#2b2b2b]/15">
              <div className="space-y-5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#2b2b2b] text-white text-[11px] font-mono font-semibold uppercase tracking-wider panel-curved">
                    Matric & Tertiary
                  </span>
                  <span className="text-xs font-mono text-stone-500">In-Person • Paper Battery</span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#2b2b2b] mb-2">
                    Tertiary Field Selection & Career Guidance
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Designed for young adults and matriculants seeking empirical direction across university faculties, degree qualifications, diploma options, and sustainable vocational pathways.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-[#2b2b2b]/10">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0c5253] font-mono">
                    Evaluation Dimensions
                  </h4>
                  <ul className="space-y-2 text-xs text-[#2b2b2b]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#0c5253] mt-1.5 shrink-0 transform rotate-45"></span>
                      <span><strong>Vocational Affinity:</strong> Detailed profiling of occupational preferences and work environments.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#0c5253] mt-1.5 shrink-0 transform rotate-45"></span>
                      <span><strong>Analytical Strengths:</strong> Abstract problem-solving and higher-order academic competencies.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#0c5253] mt-1.5 shrink-0 transform rotate-45"></span>
                      <span><strong>Strategic Qualification Fit:</strong> Alignment with South African tertiary admissions (APS requirements).</span>
                    </li>
                  </ul>
                </div>

                <div className="p-3 bg-[#ededed] border border-[#2b2b2b]/10 text-xs space-y-1">
                  <span className="font-bold text-[#2b2b2b]">Deliverables:</span>
                  <p className="text-stone-600 text-[11px] m-0">
                    Comprehensive written evaluation report + dedicated 1-on-1 career consultation outlining concrete tertiary options.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#2b2b2b]/10 flex flex-wrap items-center justify-between gap-3">
                <Link
                  to="/assessments/tertiary-field-career-guidance"
                  id="home-tertiary-details-btn"
                  className="btn-tactile-teal text-xs tap-target"
                >
                  <span>View Assessment Specifications</span>
                </Link>

                <Link
                  to="/contact?service=tertiary-field-career-guidance"
                  id="home-tertiary-book-btn"
                  className="text-xs font-bold text-[#2b2b2b] hover:underline flex items-center gap-1.5"
                >
                  <span>Book for Tertiary Guidance</span>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. CLINICAL RIGOUR: Why Paper-Based Assessment in Norwood */}
      <section className="py-16 bg-[#2b2b2b] text-white border-t border-b border-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-teal-300">
                <span className="w-2 h-2 bg-teal-300 transform rotate-45 inline-block"></span>
                Standardized Methodology
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                The Clinical Integrity of Paper-Based Testing
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                In an era dominated by automated online surveys, standardized paper-based batteries administered by a registered psychometrist provide essential indicative reliability.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-5 bg-[#202020] border border-stone-700 panel-curved space-y-2">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-400 transform rotate-45 inline-block"></span>
                  Distraction-Free Environment
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Testing takes place in a quiet, dedicated testing room at 84 Frances Rd, Norwood, eliminating screen fatigue and digital interruptions.
                </p>
              </div>

              <div className="p-5 bg-[#202020] border border-stone-700 panel-curved space-y-2">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-400 transform rotate-45 inline-block"></span>
                  South African Standardized Norms
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  All tests are benchmarked against statistically validated South African population norms, ensuring fair and accurate measurement.
                </p>
              </div>

              <div className="p-5 bg-[#202020] border border-stone-700 panel-curved space-y-2">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-400 transform rotate-45 inline-block"></span>
                  Direct Behavioral Observation
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  In-person administration allows qualitative assessment of test endurance, task engagement, and problem-solving composure.
                </p>
              </div>

              <div className="p-5 bg-[#202020] border border-stone-700 panel-curved space-y-2">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-400 transform rotate-45 inline-block"></span>
                  No Pre-Test Surveys Required
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Candidates need not complete preparatory homework or submit prior school marks. Testing begins cleanly on the scheduled day.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. THE 5-STEP EVALUATION JOURNEY */}
      <section className="py-16 lg:py-20 bg-[#ededed]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="max-w-3xl mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0c5253]">
              <span className="w-2 h-2 bg-[#0c5253] transform rotate-45 inline-block"></span>
              Step-by-Step Assessment Sequence
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#2b2b2b]">
              The Client Assessment Journey
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              A transparent, structured five-phase protocol from first inquiry to dedicated feedback.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {JOURNEY_STEPS.map((step) => (
              <div 
                key={step.step}
                className="card-tactile p-5 bg-white border border-[#2b2b2b]/15 panel-curved flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-full bg-[#0c5253] text-white flex items-center justify-center font-mono font-bold text-xs">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono text-stone-500 uppercase">
                      Stage {step.step}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-sm text-[#2b2b2b] leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-[11px] font-mono text-[#0c5253] mt-0.5">
                      {step.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#2b2b2b]/10 text-[10px] font-mono text-stone-500">
                  {step.durationOrFormat}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. STATUTORY REASSURANCE & PRACTICE LOGISTICS */}
      <section className="py-16 bg-[#f7f7f7] border-t border-[#2b2b2b]/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#2b2b2b]">
                Practice Billing & Medical Aid Policy
              </h2>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                Muhammad Coovadia Psychometrist operates as a private billing practice. Clients receive a comprehensive, itemised tax invoice following the completion of the feedback consultation. This invoice contains all relevant tariff and practice codes (HPCSA PMT {PRACTICE_INFO.hpcsaPMT} / Practice PR {PRACTICE_INFO.practicePR}) to submit directly to your medical aid scheme for reimbursement.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-stone-600 pt-2">
                <span className="inline-flex items-center gap-1.5">
                  <CheckSquare className="w-3.5 h-3.5 text-[#0c5253]" />
                  Itemised Practice Codes
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckSquare className="w-3.5 h-3.5 text-[#0c5253]" />
                  Statutory HPCSA Compliance
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckSquare className="w-3.5 h-3.5 text-[#0c5253]" />
                  Direct WhatsApp Intake
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 p-5 bg-[#2b2b2b] text-white panel-curved space-y-3">
              <h3 className="text-sm font-bold text-white">Norwood Testing Location</h3>
              <p className="text-xs text-stone-300">
                84 Frances Rd, Norwood, Johannesburg, 2192. Dedicated parking and secure assessment facilities.
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <Link
                  to="/contact"
                  id="home-logistics-contact-btn"
                  className="w-full py-2.5 text-center bg-[#0c5253] hover:bg-[#126d6f] text-white font-bold text-xs uppercase tracking-wider panel-curved tap-target transition-colors"
                >
                  Contact Practice
                </Link>
                <a
                  href={`tel:${PRACTICE_INFO.phoneRaw}`}
                  className="text-center text-xs font-mono text-teal-300 hover:underline py-1"
                >
                  Direct Call: {PRACTICE_INFO.phone}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
