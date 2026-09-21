import React from 'react';
import { useNavigation, Link } from '../context/NavigationContext';
import { ASSESSMENTS, PRACTICE_INFO } from '../data/practiceData';
import { 
  FileText, 
  MapPin, 
  Users, 
  Calendar, 
  Clock, 
  CheckSquare,
  AlertCircle 
} from 'lucide-react';

export const AssessmentDetailView: React.FC = () => {
  const { assessmentId } = useNavigation();

  const assessment = ASSESSMENTS.find((item) => item.id === assessmentId);

  if (!assessment) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full text-center space-y-4 bg-white p-8 panel-curved border border-[#2b2b2b]/20 shadow-xs">
          <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-800 mx-auto flex items-center justify-center">
            <AlertCircle className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-[#2b2b2b]">Assessment Track Not Found</h2>
          <p className="text-xs text-stone-600">
            The requested psychometric battery is not registered in our current practice catalog.
          </p>
          <Link
            to="/assessments"
            id="detail-back-catalog-fallback"
            className="btn-tactile-teal text-xs tap-target"
          >
            <span>Return to Assessment Catalog</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-10 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Clinical Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-stone-600 font-mono">
          <Link to="/" className="hover:text-[#0c5253] hover:underline">Practice</Link>
          <span>/</span>
          <Link to="/assessments" className="hover:text-[#0c5253] hover:underline">Batteries</Link>
          <span>/</span>
          <span className="text-[#0c5253] font-bold">{assessment.shortTitle}</span>
        </div>

        {/* Hero Header for Assessment */}
        <section className="bg-[#2b2b2b] text-white panel-curved-lg p-6 sm:p-10 relative overflow-hidden border-2 border-[#0c5253] shadow-md">
          <div className="absolute inset-0 bg-dot-matrix-dark opacity-30 pointer-events-none"></div>

          <div className="relative space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-[#0c5253] text-white text-xs font-mono font-bold uppercase tracking-wider chip-angled">
                {assessment.badgeLabel}
              </span>
              <span className="text-xs font-mono text-teal-300">
                Norwood Practice • Paper Battery
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              {assessment.title}
            </h1>

            <p className="text-sm sm:text-base text-stone-200 max-w-3xl leading-relaxed">
              {assessment.subtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 text-xs">
              <div className="p-3 bg-[#1e1e1e] border border-stone-700 panel-curved">
                <span className="text-[10px] font-mono text-stone-400 block uppercase">Candidate Scope</span>
                <span className="font-semibold text-white">{assessment.targetAudience}</span>
              </div>
              <div className="p-3 bg-[#1e1e1e] border border-stone-700 panel-curved">
                <span className="text-[10px] font-mono text-stone-400 block uppercase">Format & Venue</span>
                <span className="font-semibold text-white">{assessment.formatAndDuration}</span>
              </div>
              <div className="p-3 bg-[#1e1e1e] border border-stone-700 panel-curved">
                <span className="text-[10px] font-mono text-stone-400 block uppercase">Consultation Deliverable</span>
                <span className="font-semibold text-teal-300">{assessment.deliverables}</span>
              </div>
            </div>
          </div>
        </section>

        {/* In-Depth Clinical Evaluation Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Assessment Body */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Detailed Clinical Overview */}
            <div className="card-tactile panel-curved p-6 sm:p-8 bg-white border border-[#2b2b2b]/15 space-y-4">
              <h2 className="text-xl font-bold text-[#2b2b2b] tracking-tight">
                Assessment Overview & Diagnostic Objective
              </h2>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {assessment.detailedOverview}
              </p>
              <div className="p-4 bg-[#ededed] panel-curved border border-[#2b2b2b]/10 text-xs text-stone-700">
                <strong className="text-[#0c5253] block mb-1 font-mono uppercase text-[11px]">Norm-Referenced Benchmark:</strong>
                Scored using validated South African population statistics to provide unbiased, empirical percentiles for scholastic and vocational decision-making.
              </div>
            </div>

            {/* Evaluated Dimensions */}
            <div className="card-tactile panel-curved p-6 sm:p-8 bg-white border border-[#2b2b2b]/15 space-y-5">
              <h2 className="text-xl font-bold text-[#2b2b2b] tracking-tight">
                Evaluated Cognitive & Vocational Dimensions
              </h2>
              
              <div className="space-y-4">
                {assessment.evaluatedDimensions.map((dim, idx) => (
                  <div key={idx} className="p-4 bg-[#ededed] panel-curved border border-[#2b2b2b]/10 space-y-1.5">
                    <h3 className="font-bold text-sm text-[#2b2b2b] flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#0c5253] transform rotate-45 inline-block"></span>
                      {dim.title}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed pl-4">
                      {dim.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables & Deliverable Items */}
            <div className="card-tactile panel-curved p-6 sm:p-8 bg-white border border-[#2b2b2b]/15 space-y-4">
              <h2 className="text-xl font-bold text-[#2b2b2b] tracking-tight">
                Written Deliverables & Post-Assessment Consultation
              </h2>
              
              <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700">
                {assessment.deliverableItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckSquare className="w-4 h-4 text-[#0c5253] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Sidebar: Logistics & Intake Booking */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Booking Card */}
            <div className="p-6 bg-[#2b2b2b] text-white panel-curved border-2 border-[#0c5253] space-y-4">
              <h3 className="text-sm font-bold text-white tracking-wide border-b border-stone-700 pb-3">
                Schedule This Assessment
              </h3>

              <div className="space-y-2 text-xs text-stone-300">
                <div className="flex items-center justify-between text-stone-300">
                  <span>Battery:</span>
                  <span className="font-mono text-teal-300 font-semibold">{assessment.shortTitle}</span>
                </div>
                <div className="flex items-center justify-between text-stone-300">
                  <span>Administration:</span>
                  <span>In-Person (Norwood)</span>
                </div>
                <div className="flex items-center justify-between text-stone-300">
                  <span>Billing:</span>
                  <span>Private Rate (Itemised)</span>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-700 space-y-2.5">
                <Link
                  to="/contact"
                  id="detail-schedule-primary-btn"
                  className="w-full py-3 bg-[#0c5253] hover:bg-[#126d6f] text-white font-bold text-xs uppercase tracking-wider text-center panel-curved tap-target flex items-center justify-center gap-2 transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Initiate Intake Inquiry</span>
                </Link>

                <a
                  href={`https://wa.me/27632377926?text=Hello%20Muhammad,%20I%20would%20like%20to%20inquire%20about%20booking%20the%20${encodeURIComponent(assessment.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="detail-whatsapp-btn"
                  className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs text-center panel-curved tap-target flex items-center justify-center gap-2 border border-white/20 transition-colors"
                >
                  <span>Inquire via WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Preparation Note Card */}
            <div className="p-5 bg-white border border-[#2b2b2b]/15 panel-curved space-y-3 text-xs">
              <h4 className="font-bold text-[#2b2b2b] uppercase tracking-wider font-mono text-[11px]">
                Preparation & Requirements
              </h4>
              <p className="text-stone-700 leading-relaxed text-xs">
                {assessment.preparationNote}
              </p>
              <div className="p-3 bg-[#ededed] panel-curved text-[11px] text-stone-600">
                Candidates should get a regular night&apos;s sleep and have a light meal before arriving at the Norwood practice.
              </div>
            </div>

            {/* Testing Location Card */}
            <div className="p-5 bg-[#ededed] border border-[#2b2b2b]/15 panel-curved space-y-2 text-xs text-stone-700">
              <div className="flex items-center gap-2 text-[#0c5253] font-bold">
                <MapPin className="w-4 h-4" />
                <span>Testing Room Address</span>
              </div>
              <p className="text-[11px]">
                84 Frances Rd, Norwood, Johannesburg, 2192.
              </p>
              <p className="text-[10px] text-stone-500 font-mono">
                Phone: {PRACTICE_INFO.phone}
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
