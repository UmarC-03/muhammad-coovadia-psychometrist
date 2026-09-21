/**
 * Types for Muhammad Coovadia Psychometrist Practice App
 */

export interface Assessment {
  id: 'grade-9-subject-choice' | 'tertiary-field-career-guidance';
  title: string;
  shortTitle: string;
  subtitle: string;
  targetAudience: string;
  formatAndDuration: string;
  whatItMeasures: string;
  deliverables: string;
  detailedOverview: string;
  evaluatedDimensions: {
    title: string;
    description: string;
  }[];
  deliverableItems: string[];
  preparationNote: string;
  badgeLabel: string;
}

export interface JourneyStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  durationOrFormat?: string;
  note?: string;
}

export interface PracticeInfo {
  practitioner: string;
  qualifications: string;
  designation: string;
  hpcsaPMT: string;
  practicePR: string;
  address: {
    street: string;
    suburb: string;
    city: string;
    postalCode: string;
    full: string;
    note: string;
  };
  phone: string;
  phoneRaw: string;
  whatsappUrl: string;
  email: string;
  slogan: string;
  biography: string;
  practicePillar: string;
  pricingPolicy: string;
  medicalAidStatement: string;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  assessmentType: string;
  preferredDate?: string;
  notes: string;
}
