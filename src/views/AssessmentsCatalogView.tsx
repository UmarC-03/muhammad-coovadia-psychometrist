import React, { useState } from 'react';
import { Link } from '../context/NavigationContext';
import { ASSESSMENTS, JOURNEY_STEPS, PRACTICE_INFO } from '../data/practiceData';
import { 
  FileText, 
  MapPin, 
  Users, 
  Calendar, 
  ShieldCheck,
  CheckSquare
} from 'lucide-react';

export const AssessmentsCatalogView: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'grade-9' | 'tertiary'>('all');

  const filteredAssessments = ASSESSMENTS.filter((item) => {
    if (selectedFilter === 'grade-9') return item.id === 'grade-9-subject-choice';
    if (selectedFilter === 'tertiary') return item.id === 'tertiary-field-career-guidance';
    return true;
  });

  return (
    <div className="w-full py-10 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Catalog Header Banner (Asymmetrical Charcoal & Teal Accent) */}
        <section className="bg-[#2b2b2b] text-white panel-curved-lg p-6 sm:p-10 relative overflow-hidden border-2 border-[#0c5253] shadow-md">
          <div className="absolute inset-0 bg-dot-matrix-dark opacity-30 pointer-events-none"></div>

          <div className="relative max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0c5253] text-teal-100 text-xs font-mono font-bold uppercase tracking-wider chip-angled">
              <span>Standardized Battery Catalog</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Psychometric Assessment Batteries
            </h1>

            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
              Standardized, in-person paper batteries administered at 84 Frances Rd, Norwood, Johannesburg. Evaluates cognitive strengths, reasoning styles, and vocational affinities using normed psychometric instruments.
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-2 text-xs font-mono text-stone-300">
              <span className="flex items-center gap-1.5 bg-[#1e1e1e] border border-stone-700 px-2.5 py-1 panel-curved">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                Norwood Testing Room
              </span>
              <span className="flex items-center gap-1.5 bg-[#1e1e1e] border border-stone-700 px-2.5 py-1 panel-curved">
                <FileText className="w-3.5 h-3.5 text-teal-400" />
                Paper-Based Protocol
              </span>
              <span className="flex items-center gap-1.5 bg-[#1e1e1e] border border-stone-700 px-2.5 py-1 panel-curved">
                <Users className="w-3.5 h-3.5 text-teal-400" />
                In-Person Consultation Included
              </span>
            </div>
          </div>
        </section>

        {/* Filter Bar (Tactile Buttons) */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2b2b2b]/15 pb-4">
          <div className="flex items-center gap-2 flex-wrap">
            <button
              type="button"
              onClick={() => setSelectedFilter('all')}
              id="filter-tab-all"
              className={`px-3.5 py-2 text-xs font-bold uppercase tracking-wider panel-curved tap-target transition-all ${
                selectedFilter === 'all'
                  ? 'bg-[#0c5253] text-white border border-[#073536] shadow-xs'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-300'
              }`}
            >
              All Batteries ({ASSESSMENTS.length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('grade-9')}
              id="filter-tab-grade-9"
              className={`px-3.5 py-2 text-xs font-bold uppercase tracking-wider panel-curved tap-target transition-all ${
                selectedFilter === 'grade-9'
                  ? 'bg-[#0c5253] text-white border border-[#073536] shadow-xs'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-300'
              }`}
            >
              Grade 9 FET Subject Choice
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('tertiary')}
              id="filter-tab-tertiary"
              className={`px-3.5 py-2 text-xs font-bold uppercase tracking-wider panel-curved tap-target transition-all ${
                selectedFilter === 'tertiary'
                  ? 'bg-[#0c5253] text-white border border-[#073536] shadow-xs'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-300'
              }`}
            >
              Tertiary & Career Guidance
            </button>
          </div>

          <span className="text-xs font-mono text-stone-600">
            Showing {filteredAssessments.length} assessment {filteredAssessments.length === 1 ? 'track' : 'tracks'}
          </span>
        </div>

        {/* Assessment Batteries Cards */}
        <div className="space-y-10">
          {filteredAssessments.map((assessment) => (
            <div 
              key={assessment.id}
              id={`assessment-card-${assessment.id}`}
              className="card-tactile panel-curved p-6 sm:p-10 bg-white border-2 border-[#2b2b2b]/15 space-y-6"
            >
              {/* Card Header & Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#2b2b2b]/10 pb-5">
                <div className="space-y-1">
                  <span className="inline-block px-3 py-1 bg-[#0c5253] text-white text-[11px] font-mono font-bold uppercase tracking-wider panel-curved">
                    {assessment.badgeLabel}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#2b2b2b] tracking-tight">
                    {assessment.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#0c5253] font-medium">
                    {assessment.subtitle}
                  </p>
                </div>

                <div className="text-right sm:border-l sm:border-[#2b2b2b]/15 sm:pl-5 space-y-1 text-xs">
                  <div className="font-mono font-semibold text-[#2b2b2b]">Format: In-Person Paper Battery</div>
                  <div className="text-stone-500 font-mono text-[11px]">Duration Varies by Candidate</div>
                  <div className="text-teal-700 font-bold text-[11px]">Private Practice Rate (Itemised)</div>
                </div>
              </div>

              {/* Assessment Context */}
              <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
                <p>{assessment.detailedOverview}</p>
              </div>

              {/* Evaluated Dimensions Grid */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0c5253]">
                  Diagnostic Evaluation Dimensions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {assessment.evaluatedDimensions.map((dim, idx) => (
                    <div 
                      key={idx}
                      className="p-4 bg-[#ededed] panel-curved border border-[#2b2b2b]/10 space-y-1.5"
                    >
                      <h4 className="font-bold text-xs text-[#2b2b2b]">
                        {dim.title}
                      </h4>
                      <p className="text-[11px] text-stone-600 leading-relaxed">
                        {dim.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables & Clinical Policy */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4 border-t border-[#2b2b2b]/10 items-start">
                
                <div className="lg:col-span-7 space-y-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#2b2b2b]">
                    Deliverables & Consultation Scope
                  </h4>
                  <ul className="space-y-1.5 text-xs text-stone-700">
                    {assessment.deliverableItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckSquare className="w-3.5 h-3.5 text-[#0c5253] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-5 p-4 bg-[#fbfbfb] border border-stone-300 panel-curved space-y-2 text-xs">
                  <span className="font-mono text-teal-800 font-bold uppercase tracking-wide text-[11px] block">
                    Preparation Notice
                  </span>
                  <p className="text-stone-600 text-[11px] leading-relaxed">
                    {assessment.preparationNote} Testing is conducted in a structured, standardized environment to measure genuine baseline abilities.
                  </p>
                  <p className="text-stone-500 text-[10px] italic border-t border-stone-200 pt-1.5">
                    Itemised invoice issued post-session for medical aid claim submission.
                  </p>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#2b2b2b]/10 flex flex-wrap items-center justify-between gap-3">
                <Link
                  to={`/assessments/${assessment.id}`}
                  id={`view-full-spec-btn-${assessment.id}`}
                  className="btn-tactile-charcoal text-xs tap-target"
                >
                  <span>View Diagnostic Breakdown</span>
                </Link>

                <Link
                  to="/contact"
                  id={`book-assessment-btn-${assessment.id}`}
                  className="btn-tactile-teal text-xs tap-target"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book This Assessment</span>
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Administration FAQ & Logistics */}
        <section className="bg-white border border-[#2b2b2b]/15 panel-curved p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-[#2b2b2b]">
              Frequently Clarified Testing Procedures
            </h3>
            <p className="text-xs text-stone-600">
              Key operational parameters for candidates and guardians.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-stone-700">
            <div className="space-y-2 p-4 bg-[#ededed] panel-curved">
              <h4 className="font-bold text-[#2b2b2b] text-xs">
                How long does the assessment take?
              </h4>
              <p className="text-stone-600 leading-relaxed text-[11px]">
                Session duration varies based on the candidate&apos;s working pace and the specific battery administered. Adequate rest breaks are provided to maintain optimal cognitive endurance.
              </p>
            </div>

            <div className="space-y-2 p-4 bg-[#ededed] panel-curved">
              <h4 className="font-bold text-[#2b2b2b] text-xs">
                What must the candidate bring?
              </h4>
              <p className="text-stone-600 leading-relaxed text-[11px]">
                All testing materials, standardized booklets, and stationary are provided at the Norwood practice. Candidates should arrive well-rested and bring corrective spectacles if prescribed.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
