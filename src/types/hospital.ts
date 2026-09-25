export interface VerifiedSource {
  authority: string;
  accreditationStatus: string;
  officialReference: string;
  lastVerifiedDate: string;
}

export interface RenalCystCareInfo {
  specializedClinic: string;
  bosniakEvaluationAvailable: boolean;
  geneticTestingPKD: boolean;
  minimallyInvasiveCystAblation: boolean;
  sclerotherapyAvailable: boolean;
  leadTimeWeeks: string;
  requiredDocuments: string[];
  notes: string;
}

export interface Hospital {
  id: string;
  name: string;
  department: string;
  country: string;
  city: string;
  region: 'North America' | 'Europe' | 'Asia-Pacific' | 'Middle East' | 'Africa';
  flag: string;
  address: string;
  primaryPhone: string;
  internationalPhone: string;
  emergencyPhone?: string;
  website: string;
  internationalCareUrl?: string;
  overview: string;
  cystSpecialties: string[];
  cystTreatmentsOffered: string[];
  languagesSpoken: string[];
  seniorAccessibility: string[];
  renalCystCare: RenalCystCareInfo;
  verification: VerifiedSource;
  rankingHighlight: string;
}

export interface BosniakCategory {
  category: string;
  title: string;
  riskOfMalignancy: string;
  imagingDescription: string;
  seniorManagementAdvice: string;
  audioSummary: string;
}

export type TextSizeMode = 'normal' | 'large' | 'extralarge';
export type ContrastMode = 'default' | 'high-contrast-dark' | 'high-contrast-light';
