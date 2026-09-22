import { Assessment, JourneyStep, PracticeInfo } from '../types';

export const PRACTICE_INFO: PracticeInfo = {
  practitioner: "Muhammad Coovadia",
  qualifications: "BA (UJ); BA HONS PSYCH (UJ); PSYCHOMETRY (UJ)",
  designation: "Registered Psychometrist",
  hpcsaPMT: "007523",
  practicePR: "0071253",
  address: {
    street: "84 Frances Rd",
    suburb: "Norwood",
    city: "Johannesburg",
    postalCode: "2192",
    full: "84 Frances Rd, Norwood, Johannesburg, 2192",
    note: "In-person & paper-based testing",
  },
  phone: "063 237 7926",
  phoneRaw: "0632377926",
  whatsappUrl: "https://wa.me/27632377926?text=Hello%20Muhammad,%20I%20would%20like%20to%20inquire%20about%20a%20psychometric%20assessment.",
  email: "muhammadcoovadia88@gmail.com",
  slogan: "Clarity Starts Here",
  biography:
    "Muhammad Coovadia is an HPCSA-registered Psychometrist based in Johannesburg, holding qualifications from the University of Johannesburg (UJ). His professional experience spans private practice, corporate wellness counseling, and student support roles. He utilizes an evidence-based approach to evaluations, integrating cultural and individual frameworks to empower personal, educational, and professional growth.",
  practicePillar: "Personalised Guidance",
  pricingPolicy: "Rates available upon inquiry.",
  medicalAidStatement:
    "Private rates apply. A full itemised invoice is provided post-session, which clients can submit to their medical aid scheme for reimbursement (dependent on individual plan coverage for psychometric testing).",
};

export const ASSESSMENTS: Assessment[] = [
  {
    id: "grade-9-subject-choice",
    title: "Grade 9 Subject Choice Assessment",
    shortTitle: "Grade 9 Subject Choice",
    subtitle: "Informed FET phase subject stream selection for high school success",
    targetAudience: "Grade 9 learners preparing for FET phase subject selection.",
    formatAndDuration: "Paper-based, in-person assessment at the Norwood practice. Session duration varies.",
    whatItMeasures: "Aptitude, interest, and reasoning profiles to ensure informed FET subject stream decisions.",
    deliverables: "Comprehensive written assessment report + 1-on-1 feedback consultation session.",
    detailedOverview:
      "The transition into the Further Education and Training (FET) phase (Grades 10–12) requires learners to choose specific subjects that shape their future matric pass and university admission point scores (APS). This assessment battery evaluates cognitive aptitudes, intrinsic academic interests, and problem-solving reasoning to ensure subject selections align with the learner's genuine strengths and long-term potential.",
    evaluatedDimensions: [
      {
        title: "Cognitive Aptitude & Intellectual Strengths",
        description: "Standardized objective measures assessing verbal, numerical, and abstract reasoning capacities.",
      },
      {
        title: "Academic & Vocational Interests",
        description: "Indicative profiling of occupational preferences, scientific vs. commercial inclinations, and creative orientations.",
      },
      {
        title: "Reasoning & Problem-Solving Profiles",
        description: "Evaluation of inductive and deductive thinking styles applicable across Mathematics, Sciences, and Humanities.",
      },
    ],
    deliverableItems: [
      "Standardized paper-based testing battery administered in a quiet, structured environment",
      "Objective statistical scoring and psychometric norm comparison",
      "Detailed written evaluation report with concrete subject stream recommendations",
      "Dedicated 1-on-1 in-person feedback consultation with the learner and parents / guardians",
    ],
    preparationNote: "No pre-assessment questionnaires or school reports are required beforehand.",
    badgeLabel: "FET Phase Stream Alignment",
  },
  {
    id: "tertiary-field-career-guidance",
    title: "Tertiary / University Field Selection & Career Guidance",
    shortTitle: "Tertiary & Career Guidance",
    subtitle: "Strategic post-school qualification direction and career pathway alignment",
    targetAudience: "Young adults, matriculants, and students seeking post-school qualification direction and career pathway alignment.",
    formatAndDuration: "Paper-based, in-person assessment at the Norwood practice. Session duration varies based on testing battery.",
    whatItMeasures: "Vocational interests, cognitive strengths, and career suitability profiles.",
    deliverables: "Comprehensive written assessment report + 1-on-1 feedback consultation session.",
    detailedOverview:
      "Navigating university degree choices, diploma options, and vocational routes requires a rigorous understanding of one's core cognitive profile and vocational affinity. This assessment provides structured, objective guidance to help matriculants and tertiary candidates choose university faculties, degrees, and career pathways with confidence.",
    evaluatedDimensions: [
      {
        title: "Vocational & Career Affinity",
        description: "Multi-dimensional profiling across field categories, professional duties, and workplace environments.",
      },
      {
        title: "Cognitive Profile & Analytical Abilities",
        description: "In-depth testing of abstract thinking, critical reasoning, and academic competencies demanded by tertiary curricula.",
      },
      {
        title: "Career Suitability & Pathway Fit",
        description: "Direct synthesis of interests and aptitudes matched to South African university qualifications and professional fields.",
      },
    ],
    deliverableItems: [
      "Comprehensive paper-based psychometric testing battery",
      "Formal norm-referenced scoring and occupational profile mapping",
      "In-depth written career assessment report outlining viable fields of study and degree options",
      "1-on-1 in-person consultation reviewing results, strategic applications, and actionable next steps",
    ],
    preparationNote: "No pre-assessment questionnaires or school reports are required beforehand.",
    badgeLabel: "Matric & Post-School Direction",
  },
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    step: 1,
    title: "Initial Intake",
    subtitle: "Inquiry & Assessment Scope",
    description: "Initial inquiry and assessment scope determination to identify the candidate's specific academic or career transition questions.",
    durationOrFormat: "Email / Phone Consultation",
  },
  {
    step: 2,
    title: "Booking Confirmation",
    subtitle: "Scheduling & Preparation",
    description: "Finalizing the appointment schedule at the Norwood practice, along with administrative confirmation and session guidelines.",
    durationOrFormat: "Administrative Finalization",
  },
  {
    step: 3,
    title: "Testing",
    subtitle: "In-Person Paper Assessment",
    description: "In-person, paper-based psychometric test administration conducted in a dedicated, distraction-free environment in Norwood.",
    durationOrFormat: "Norwood Practice (Duration Varies)",
    note: "No pre-assessment questionnaires or school reports are required beforehand.",
  },
  {
    step: 4,
    title: "Report Generation",
    subtitle: "Scoring & Analysis",
    description: "Objective psychometric scoring against standardized norms, cross-dimensional analysis, and comprehensive report compilation.",
    durationOrFormat: "Objective Psychometric Analysis",
  },
  {
    step: 5,
    title: "1-on-1 Feedback Session",
    subtitle: "Personalised Consultation",
    description: "In-person consultation discussing evaluation results, practical academic or vocational implications, and strategic next steps.",
    durationOrFormat: "In-Person Discussion & Recommendations",
  },
];
