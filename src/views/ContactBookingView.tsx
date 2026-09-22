import React, { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { PRACTICE_INFO, ASSESSMENTS } from '../data/practiceData';
import { 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckSquare,
  Copy,
  Check
} from 'lucide-react';

export const ContactBookingView: React.FC = () => {
  const { queryParams } = useNavigation();

  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [candidateGrade, setCandidateGrade] = useState('Grade 9 (FET Subject Choice)');
  const [selectedAssessment, setSelectedAssessment] = useState<string>('grade-9-subject-choice');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Sync service from query param
  useEffect(() => {
    if (queryParams.service) {
      if (queryParams.service === 'grade-9-subject-choice' || queryParams.service === 'tertiary-field-career-guidance') {
        setSelectedAssessment(queryParams.service);
        if (queryParams.service === 'tertiary-field-career-guidance') {
          setCandidateGrade('Grade 11–12 / Tertiary Candidate');
        }
      }
    }
  }, [queryParams.service]);

  const currentAssessmentObj = ASSESSMENTS.find(a => a.id === selectedAssessment);
  const assessmentTitle = currentAssessmentObj ? currentAssessmentObj.title : 'General Psychometric Inquiry';

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PRACTICE_INFO.phoneRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const text = `Hello Muhammad, I would like to inquire about booking an assessment.
- Candidate/Parent: ${fullName || 'Inquiring Client'}
- Academic Stage: ${candidateGrade}
- Assessment Battery: ${assessmentTitle}
- Contact Phone: ${phone || 'Available on WhatsApp'}
- Notes: ${notes || 'Requesting appointment availability'}`;
    return `https://wa.me/27632377926?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="w-full py-10 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Contact Header Banner (Asymmetrical Charcoal & Teal Block) */}
        <section className="bg-[#2b2b2b] text-white panel-curved-lg p-6 sm:p-10 relative overflow-hidden border-2 border-[#0c5253] shadow-md">
          <div className="absolute inset-0 bg-dot-matrix-dark opacity-30 pointer-events-none"></div>

          <div className="relative max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0c5253] text-teal-100 text-xs font-mono font-bold uppercase tracking-wider chip-angled">
              <span>Direct Practice Intake</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Intake & Assessment Scheduling
            </h1>

            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
              Inquire regarding candidate testing appointments at 84 Frances Rd, Norwood. Paper batteries are scheduled individually to guarantee a quiet, standardized environment.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-stone-300">
              <span className="flex items-center gap-1.5 bg-[#1e1e1e] border border-stone-700 px-2.5 py-1 panel-curved">
                <Clock className="w-3.5 h-3.5 text-teal-400" />
                Intake Response: Within 24 Business Hours
              </span>
              <span className="flex items-center gap-1.5 bg-[#1e1e1e] border border-stone-700 px-2.5 py-1 panel-curved">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                Norwood Practice Room
              </span>
            </div>
          </div>
        </section>

        {/* Main Grid: Form & Practice Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Intake Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="card-tactile panel-curved p-6 sm:p-8 bg-white border-2 border-[#2b2b2b]/15 space-y-6">
              
              <div className="border-b border-[#2b2b2b]/10 pb-4">
                <h2 className="text-xl font-bold text-[#2b2b2b] tracking-tight">
                  Candidate Assessment Inquiry
                </h2>
                <p className="text-xs text-stone-600 mt-1">
                  Complete this assessment inquiry form or use direct WhatsApp messaging.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 bg-[#f7fdf9] border-2 border-[#0c5253] panel-curved space-y-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#0c5253] text-white mx-auto flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <h3 className="text-lg font-bold text-[#2b2b2b]">
                    Inquiry Received
                  </h3>
                  <p className="text-xs text-stone-700 leading-relaxed max-w-md mx-auto">
                    Thank you, <strong>{fullName || 'Client'}</strong>. Your intake request for the <strong>{assessmentTitle}</strong> has been logged. We will contact you via {phone || email || 'your provided details'} to confirm date availability at the Norwood practice.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generateWhatsAppMessage()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-tactile-teal text-xs tap-target"
                    >
                      <span>Send Summary on WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-bold text-stone-600 hover:underline py-2"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4" id="practice-intake-form">
                  
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label htmlFor="input-full-name" className="block text-xs font-bold uppercase tracking-wider text-[#2b2b2b] font-mono">
                      Parent / Candidate Full Name <span className="text-teal-700">*</span>
                    </label>
                    <input
                      type="text"
                      id="input-full-name"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Zaid Patel"
                      className="w-full px-3.5 py-2.5 bg-[#fbfbfb] border border-stone-300 rounded-xs text-xs sm:text-sm text-[#2b2b2b] focus:bg-white tap-target"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="input-email" className="block text-xs font-bold uppercase tracking-wider text-[#2b2b2b] font-mono">
                        Email Address <span className="text-teal-700">*</span>
                      </label>
                      <input
                        type="email"
                        id="input-email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="zaid@example.co.za"
                        className="w-full px-3.5 py-2.5 bg-[#fbfbfb] border border-stone-300 rounded-xs text-xs sm:text-sm text-[#2b2b2b] focus:bg-white tap-target"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="input-phone" className="block text-xs font-bold uppercase tracking-wider text-[#2b2b2b] font-mono">
                        Phone / WhatsApp <span className="text-teal-700">*</span>
                      </label>
                      <input
                        type="tel"
                        id="input-phone"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="082 123 4567"
                        className="w-full px-3.5 py-2.5 bg-[#fbfbfb] border border-stone-300 rounded-xs text-xs sm:text-sm text-[#2b2b2b] focus:bg-white tap-target"
                      />
                    </div>
                  </div>

                  {/* Assessment Selection */}
                  <div className="space-y-1">
                    <label htmlFor="select-assessment" className="block text-xs font-bold uppercase tracking-wider text-[#2b2b2b] font-mono">
                      Target Assessment Battery <span className="text-teal-700">*</span>
                    </label>
                    <select
                      id="select-assessment"
                      value={selectedAssessment}
                      onChange={(e) => setSelectedAssessment(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#fbfbfb] border border-stone-300 rounded-xs text-xs sm:text-sm text-[#2b2b2b] focus:bg-white tap-target"
                    >
                      <option value="grade-9-subject-choice">Grade 9 Subject Choice Assessment</option>
                      <option value="tertiary-field-career-guidance">Tertiary / University Field Selection & Career Guidance</option>
                      <option value="general-inquiry">General Psychometric Testing Inquiry</option>
                    </select>
                  </div>

                  {/* Candidate Academic Stage */}
                  <div className="space-y-1">
                    <label htmlFor="select-candidate-grade" className="block text-xs font-bold uppercase tracking-wider text-[#2b2b2b] font-mono">
                      Candidate Grade / Current Academic Level
                    </label>
                    <select
                      id="select-candidate-grade"
                      value={candidateGrade}
                      onChange={(e) => setCandidateGrade(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#fbfbfb] border border-stone-300 rounded-xs text-xs sm:text-sm text-[#2b2b2b] focus:bg-white tap-target"
                    >
                      <option value="Grade 9 (FET Subject Choice)">Grade 9 (FET Subject Choice Transition)</option>
                      <option value="Grade 10–11 (Stream Adjustment)">Grade 10–11 (Curriculum Stream Adjustment)</option>
                      <option value="Grade 12 / Matriculant">Grade 12 / Matriculant (Tertiary Guidance)</option>
                      <option value="Post-Matric / Tertiary Student">Post-Matric / Tertiary Student / Young Adult</option>
                    </select>
                  </div>

                  {/* Notes / Questions */}
                  <div className="space-y-1">
                    <label htmlFor="input-notes" className="block text-xs font-bold uppercase tracking-wider text-[#2b2b2b] font-mono">
                      Candidate Context or Inquiries (Optional)
                    </label>
                    <textarea
                      id="input-notes"
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Mention any specific subjects under consideration (e.g. Pure Maths vs Maths Literacy), university degrees of interest, or scheduling questions..."
                      className="w-full px-3.5 py-2.5 bg-[#fbfbfb] border border-stone-300 rounded-xs text-xs sm:text-sm text-[#2b2b2b] focus:bg-white"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <button
                      type="submit"
                      id="submit-intake-form-btn"
                      className="btn-tactile-teal text-xs tap-target"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Submit Intake Inquiry</span>
                    </button>

                    <a
                      href={generateWhatsAppMessage()}
                      target="_blank"
                      rel="noopener noreferrer"
                      id="direct-whatsapp-intake-btn"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#2b2b2b] text-white hover:bg-[#1a1a1a] panel-curved text-xs font-bold uppercase tracking-wider border border-black tap-target transition-colors"
                    >
                      <span>Direct WhatsApp</span>
                    </a>
                  </div>

                  <p className="text-[11px] text-stone-500 pt-1">
                    * No pre-assessment questionnaires or previous school reports required beforehand.
                  </p>
                </form>
              )}

            </div>
          </div>

          {/* Right Column: Direct Practice Details & Norwood Location */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="p-6 bg-[#2b2b2b] text-white panel-curved border-2 border-[#0c5253] space-y-5">
              <div className="flex items-center justify-between border-b border-stone-700 pb-3">
                <h3 className="text-sm font-bold text-white tracking-wide">Direct Practice Channels</h3>
                <span className="text-[10px] font-mono text-teal-300 uppercase">Johannesburg</span>
              </div>

              <div className="space-y-3.5 text-xs">
                
                {/* Phone & Copy utility */}
                <div className="flex items-center justify-between p-3 bg-[#1e1e1e] border border-stone-700 panel-curved">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                    <div>
                      <span className="text-[10px] text-stone-400 block font-mono uppercase">Call or WhatsApp</span>
                      <a href={`tel:${PRACTICE_INFO.phoneRaw}`} className="font-mono text-white font-bold hover:text-teal-300">
                        {PRACTICE_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    title="Copy Phone Number"
                    className="p-1.5 rounded-sm bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Email */}
                <div className="p-3 bg-[#1e1e1e] border border-stone-700 panel-curved flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-stone-400 block font-mono uppercase">Email Correspondence</span>
                    <a href={`mailto:${PRACTICE_INFO.email}`} className="text-white hover:text-teal-300 break-all font-mono text-[11px]">
                      {PRACTICE_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Physical Location */}
                <div className="p-3 bg-[#1e1e1e] border border-stone-700 panel-curved flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-stone-400 block font-mono uppercase">Testing Room Address</span>
                    <p className="text-white font-semibold">84 Frances Rd, Norwood</p>
                    <p className="text-stone-300 text-[11px]">Johannesburg, Gauteng, 2192</p>
                    <p className="text-teal-300 text-[10px] mt-0.5">Secure on-site parking available.</p>
                  </div>
                </div>

              </div>

              {/* Operating Hours */}
              <div className="pt-2 border-t border-stone-700 space-y-1.5 text-xs text-stone-300">
                <div className="flex items-center justify-between">
                  <span>Monday – Friday:</span>
                  <span className="font-mono text-white">08:30 – 17:00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Saturday Testing:</span>
                  <span className="font-mono text-teal-300">By Appointment</span>
                </div>
              </div>

            </div>

            {/* Medical Aid Invoicing Reassurance Card */}
            <div className="p-5 bg-white border border-[#2b2b2b]/15 panel-curved space-y-3 text-xs">
              <h4 className="font-bold text-[#2b2b2b] uppercase tracking-wider font-mono text-[11px]">
                Medical Aid Reimbursement Notice
              </h4>
              <p className="text-stone-700 leading-relaxed text-xs">
                Private practice fees apply for all assessment batteries. Upon completion of the feedback consultation, an itemised invoice reflecting HPCSA practice registration numbers (PMT 007523 / PR 0071253) is provided for medical aid reimbursement.
              </p>
              <div className="flex items-center gap-2 text-teal-800 font-semibold text-[11px] pt-1">
                <CheckSquare className="w-3.5 h-3.5 shrink-0" />
                <span>Zero pre-testing homework or questionnaires needed</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
