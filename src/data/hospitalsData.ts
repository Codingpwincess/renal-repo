import { Hospital, BosniakCategory } from '../types/hospital';

export const BOSNIAK_CATEGORIES: BosniakCategory[] = [
  {
    category: 'Bosniak I',
    title: 'Simple Benign Renal Cyst',
    riskOfMalignancy: '< 1% (Benign, Harmless)',
    imagingDescription: 'Hairline thin cyst wall (< 2mm), filled with clear fluid, no septa, no calcifications, and no contrast enhancement on CT or MRI.',
    seniorManagementAdvice: 'Extremely common in seniors over age 60 (found in up to 50% of older adults). Requires no surgery, no biopsy, and no routine imaging unless causing localized pain or urinary obstruction.',
    audioSummary: 'Bosniak 1 is a simple, completely harmless benign fluid-filled cyst. It is very common in seniors and virtually never requires surgery or regular scans.'
  },
  {
    category: 'Bosniak II',
    title: 'Minimally Complex Benign Cyst',
    riskOfMalignancy: '< 3% (Benign)',
    imagingDescription: 'A few hairline-thin septa (< 1mm), fine or small hairline calcifications in wall or septa. High-attenuation simple cysts up to 3 cm.',
    seniorManagementAdvice: 'Considered benign. Routine surgery or invasive intervention is unnecessary for seniors. Periodic monitoring is generally not required unless symptoms develop.',
    audioSummary: 'Bosniak 2 represents a mildly complex benign cyst with fine hairline dividers or small calcium flecks. Risk of cancer is under 3 percent and routine surgery is not recommended.'
  },
  {
    category: 'Bosniak IIF',
    title: 'Minimally Complex Cyst Requiring Follow-Up',
    riskOfMalignancy: '~ 5% to 10%',
    imagingDescription: 'Increased number of hairline septa, minimal smooth thickening of wall or septa, thick or nodular calcifications, or non-enhancing high-attenuation cysts larger than 3 cm. "F" stands for Follow-up.',
    seniorManagementAdvice: 'Active ultrasound or contrast MRI surveillance at 6 months, 12 months, and then yearly for up to 5 years. In elderly patients, watchful waiting is typically far safer than surgery.',
    audioSummary: 'Bosniak 2F stands for follow-up. Risk of cancer is approximately 5 to 10 percent. For elderly individuals, watchful surveillance scans are recommended rather than rushing into surgery.'
  },
  {
    category: 'Bosniak III',
    title: 'Indeterminate Complex Cystic Mass',
    riskOfMalignancy: '~ 50% (Equivocal)',
    imagingDescription: 'Thickened, irregular, or measurable enhancing walls or septa. Multilocular cystic lesions with noticeable vascular enhancement on contrast scans.',
    seniorManagementAdvice: 'Requires expert multi-disciplinary review by a specialized Urologist and Uroradiologist. In senior adults, shared decision-making considers age, kidney function, and frailty—options range from active surveillance to kidney-sparing partial nephrectomy or radiofrequency ablation.',
    audioSummary: 'Bosniak 3 is an indeterminate complex cyst with thickened walls and enhancement. About half are benign and half are slow-growing tumors. In seniors, nephron-sparing treatments or close monitoring are prioritized.'
  },
  {
    category: 'Bosniak IV',
    title: 'Malignant Cystic Renal Mass',
    riskOfMalignancy: '> 90% (Cystic Renal Cell Carcinoma)',
    imagingDescription: 'Clearly visible enhancing soft-tissue solid nodules or components adjacent to or within the cyst wall or septa.',
    seniorManagementAdvice: 'Definitive intervention is evaluated. In older adults, minimally invasive nephron-sparing partial nephrectomy, robotic surgery, or percutaneous cryoablation/microwave ablation are favored to preserve baseline kidney filtration.',
    audioSummary: 'Bosniak 4 contains solid enhancing soft tissue nodules and is usually cystic renal cell carcinoma. Elderly patients are evaluated for kidney-preserving robotic surgery or needle ablation.'
  }
];

export const SENIOR_RENAL_CYST_GUIDELINES = [
  {
    step: '1',
    title: 'Simple Cysts vs Complex Cysts',
    description: 'Over 50% of people over age 60 have one or more simple benign renal cysts (Bosniak I). Simple cysts do not cause kidney failure and almost never require treatment unless they grow so large they compress adjacent organs or cause flank pain.',
    audioText: 'Simple cysts are very common in seniors and usually harmless. They do not cause kidney failure and rarely need treatment.'
  },
  {
    step: '2',
    title: 'Always Request the Official Bosniak Classification',
    description: 'If an ultrasound detects a complex or septated cyst, always ask for a dedicated Renal Protocol Contrast CT or MRI to assign a formal Bosniak category (I through IV). Ultrasound alone often over-estimates cyst complexity.',
    audioText: 'Always obtain a formal Bosniak category using contrast CT or MRI. Ultrasounds can sometimes make simple cysts look falsely complex.'
  },
  {
    step: '3',
    title: 'Polycystic Kidney Disease (ADPKD) in Older Adults',
    description: 'Adult Polycystic Kidney Disease is a genetic condition causing hundreds of growing fluid cysts in both kidneys. Expert centers offer genetic counseling, Tolvaptan (vasopressin V2-receptor antagonist) assessment, and pain/cyst volume management.',
    audioText: 'If you have polycystic kidney disease with cysts in both kidneys, specialized centers provide advanced medications and cyst drainage therapies.'
  },
  {
    step: '4',
    title: 'Kidney-Sparing Approaches for Seniors',
    description: 'Senior kidneys have reduced nephron reserves. International centers of excellence emphasize active surveillance, percutaneous cyst aspiration with sclerotherapy (ethanol/polidocanol), and image-guided cryoablation rather than removing an entire kidney.',
    audioText: 'Kidney preservation is vital for seniors. Top centers focus on gentle cyst drainage, sclerotherapy, or needle ablation rather than radical surgery.'
  },
  {
    step: '5',
    title: 'What to Pack for International Cyst Consultations',
    description: 'Bring a USB flash drive or CD containing DICOM image files (not just written paper reports) of all previous CT, MRI, and ultrasounds, plus recent serum creatinine, eGFR, and urine albumin tests.',
    audioText: 'Bring actual scan image files on a CD or USB flash drive, along with your latest kidney blood work, to your consultation.'
  }
];

export const HOSPITALS_DATA: Hospital[] = [
  {
    id: 'mayo-clinic',
    name: 'Mayo Clinic',
    department: 'Mayo Clinic PKD & Complex Renal Cyst Center (Gonda Vascular & Renal Center)',
    country: 'United States',
    city: 'Rochester, Minnesota',
    region: 'North America',
    flag: '🇺🇸',
    address: '200 First Street SW, Rochester, MN 55905, USA',
    primaryPhone: '+1 507-284-2511',
    internationalPhone: '+1 507-284-8884',
    emergencyPhone: '+1 507-255-5555',
    website: 'https://www.mayoclinic.org/departments-centers/nephrology-hypertension',
    internationalCareUrl: 'https://www.mayoclinic.org/departments-centers/international',
    rankingHighlight: 'World-leading pioneer in Mayo Imaging Classification for ADPKD and Bosniak cyst assessment; Ranked #1 in Nephrology by U.S. News',
    overview: 'Mayo Clinic houses the world-famous Robert M. and Billie Kelley Pirnie Translational Polycystic Kidney Disease Center. Their multidisciplinary team of nephrologists, uroradiologists, and urologic surgeons specializes in differential diagnosis of benign simple cysts, complex Bosniak cystic masses, and advanced ADPKD volume therapies in senior adults.',
    cystSpecialties: [
      'Mayo Imaging Classification for Polycystic Kidney Disease',
      'Bosniak Cyst Classification (I, II, IIF, III, IV)',
      'Large Symptomatic Simple Cyst Sclerotherapy',
      'Complex Cystic Renal Mass Multi-Disciplinary Board',
      'Geriatric Nephron-Sparing Cyst Management',
      'Genetic Testing & Familial Cystic Kidney Profiling'
    ],
    cystTreatmentsOffered: [
      'Ultrasound-guided percutaneous cyst aspiration and alcohol sclerotherapy',
      'Robotic nephron-sparing partial nephrectomy for Bosniak III/IV cystic lesions',
      'Percutaneous CT-guided cryoablation & microwave ablation',
      'Tolvaptan (Jynarque) initiation and monitoring protocol',
      'Conservative surveillance protocols tailored for senior renal preservation'
    ],
    languagesSpoken: ['English', 'Spanish', 'Mandarin', 'Arabic', 'Over 200 via certified on-site medical interpreters'],
    seniorAccessibility: [
      'Step-free interconnected climate-controlled subway and skyway system',
      'Dedicated international senior patient navigators and wheelchair escorts',
      'Low-floor campus shuttles and hearing loop technology in consultation rooms',
      'Large print appointment summaries and digital portal font magnification'
    ],
    renalCystCare: {
      specializedClinic: 'Mayo Clinic Translational PKD & Renal Cyst Consultation Center',
      bosniakEvaluationAvailable: true,
      geneticTestingPKD: true,
      minimallyInvasiveCystAblation: true,
      sclerotherapyAvailable: true,
      leadTimeWeeks: '2 to 4 weeks advance notice for international patients',
      requiredDocuments: [
        'Complete DICOM imaging discs (CT, MRI, or renal ultrasound) from past 12-24 months',
        'Official written radiology reports detailing cyst dimensions, septa, and enhancement',
        'Recent serum creatinine, eGFR, complete blood count, and urinalysis',
        'Summary letter from attending nephrologist or urologist'
      ],
      notes: 'Mayo Clinic International Center assigns a personal senior coordinator to assist with DICOM image transfer and multidisciplinary appointments.'
    },
    verification: {
      authority: 'U.S. News & World Report / Joint Commission (JCI) / NIH PKD Research Center',
      accreditationStatus: 'Designated Center of Excellence in Cystic Kidney Diseases',
      officialReference: 'Ranked #1 in Nephrology 2024-2025; World pioneer of Mayo Height-Adjusted Total Kidney Volume (HtTKV) model',
      lastVerifiedDate: '2026'
    }
  },
  {
    id: 'cleveland-clinic',
    name: 'Cleveland Clinic',
    department: 'Glickman Urological & Kidney Institute – Cystic Kidney Disease & Uroradiology Program',
    country: 'United States',
    city: 'Cleveland, Ohio',
    region: 'North America',
    flag: '🇺🇸',
    address: '9500 Euclid Avenue, Cleveland, OH 44195, USA',
    primaryPhone: '+1 216-444-2200',
    internationalPhone: '+1 216-444-6404',
    emergencyPhone: '+1 216-445-5000',
    website: 'https://my.clevelandclinic.org/departments/urology-kidney',
    internationalCareUrl: 'https://my.clevelandclinic.org/patients/international',
    rankingHighlight: 'Global referral center for kidney-preserving surgery and robotic management of complex renal cysts; Ranked #2 nationwide',
    overview: 'Cleveland Clinic’s Glickman Urological & Kidney Institute is celebrated for pioneered robotic and laparoscopic renal cyst decortication (unroofing) and organ-preserving partial nephrectomy for complex Bosniak cystic masses in elderly patients with pre-existing CKD.',
    cystSpecialties: [
      'Complex Bosniak IIF, III, and IV Cyst Evaluation',
      'Symptomatic Parapelvic & Cortical Simple Cysts',
      'Adult Polycystic Kidney Disease (ADPKD)',
      'Acquired Cystic Kidney Disease (ACKD) in Dialysis/Senior Patients',
      'Geriatric Urologic Oncology & Nephron Preservation'
    ],
    cystTreatmentsOffered: [
      'Laparoscopic & robotic cyst decortication (unroofing)',
      'Percutaneous cyst sclerotherapy (ethanol / doxycycline)',
      'Image-guided percutaneous radiofrequency ablation (RFA) & cryoablation',
      'Active surveillance imaging protocol for elderly patients with Bosniak IIF/III lesions',
      'Genetic panel analysis for PKD1, PKD2, PKHD1, and VHL'
    ],
    languagesSpoken: ['English', 'Spanish', 'Arabic', 'Russian', 'Mandarin', 'Interpreter service in 220+ languages'],
    seniorAccessibility: [
      'Dedicated "RedCoat" senior patient navigators stationed at all clinic entrances',
      'Curbside valet wheelchair dispatch and flat, step-free access',
      'Comfortable geriatric waiting lounges with ergonomic high-seat armchairs',
      'Comprehensive translation and large-print medication guides'
    ],
    renalCystCare: {
      specializedClinic: 'Cleveland Clinic Comprehensive Renal Cyst & Polycystic Kidney Program',
      bosniakEvaluationAvailable: true,
      geneticTestingPKD: true,
      minimallyInvasiveCystAblation: true,
      sclerotherapyAvailable: true,
      leadTimeWeeks: '3 to 4 weeks advance notice',
      requiredDocuments: [
        'CT or MRI DICOM scan files with contrast phase sequences',
        'Previous ultrasound reports demonstrating cyst growth trajectories',
        'Renal function tests (eGFR, Serum Creatinine, Electrolytes)',
        'Surgical history and current cardiovascular medication list'
      ],
      notes: 'Global Patient Services coordinates virtual pre-travel image reviews to confirm whether travel for in-person cyst intervention is warranted.'
    },
    verification: {
      authority: 'The Joint Commission (JCI) & U.S. News & World Report',
      accreditationStatus: 'Gold Seal of Approval Center of Excellence',
      officialReference: 'Ranked #2 Kidney Institute globally; International benchmark for robotic cyst unroofing',
      lastVerifiedDate: '2026'
    }
  },
  {
    id: 'toronto-general-hospital',
    name: 'Toronto General Hospital (UHN)',
    department: 'University Health Network Hereditary Kidney Disease & Renal Cyst Clinic',
    country: 'Canada',
    city: 'Toronto, Ontario',
    region: 'North America',
    flag: '🇨🇦',
    address: '200 Elizabeth Street, Toronto, ON M5G 2C4, Canada',
    primaryPhone: '+1 416-340-4800',
    internationalPhone: '+1 416-340-4800',
    emergencyPhone: '+1 416-340-3946',
    website: 'https://www.uhn.ca/Nephrology',
    internationalCareUrl: 'https://www.uhn.ca/Patients-Families/International-Patients',
    rankingHighlight: 'World-renowned center led by Dr. York Pei, international pioneer in polycystic kidney disease genetics; Top 3 World Hospital',
    overview: 'The UHN Center for Hereditary Kidney Disease at Toronto General Hospital is an international hub for cystic kidney disorders. Their team leads global clinical trials and offers specialized senior management for complex Bosniak cysts and severe polycystic kidney disease.',
    cystSpecialties: [
      'Adult Polycystic Kidney Disease (ADPKD) Comprehensive Care',
      'Bosniak Complex Cystic Mass Evaluation',
      'Medullary Cystic & Glomerulocystic Kidney Disease',
      'Senior Renal Supportive Care & Cyst Pain Management',
      'Advanced MRI Total Kidney Volume Volumetry'
    ],
    cystTreatmentsOffered: [
      'Precision genetic sequencing for atypical cystic presentations',
      'Percutaneous cyst aspiration with sclerosing agents',
      'Targeted cyst volume reduction and pain management protocols',
      'Nephron-sparing urologic procedures',
      'Multidisciplinary geriatric renal preservation clinics'
    ],
    languagesSpoken: ['English', 'French', 'Cantonese', 'Mandarin', 'Italian', 'Portuguese', 'Language Line service'],
    seniorAccessibility: [
      'Completely barrier-free hospital navigation with wide corridors and tactile wayfinding',
      'Volunteer senior escorts stationed at main entrance halls',
      'Rest areas with high-visibility signage spaced every 30 meters',
      'Direct indoor underground subway connection with elevator access'
    ],
    renalCystCare: {
      specializedClinic: 'UHN Hereditary Kidney Disease & Complex Cyst Clinic',
      bosniakEvaluationAvailable: true,
      geneticTestingPKD: true,
      minimallyInvasiveCystAblation: true,
      sclerotherapyAvailable: true,
      leadTimeWeeks: '4 to 6 weeks advance notice',
      requiredDocuments: [
        'All historical renal ultrasound, CT, or MRI reports and images',
        'Family history of renal cysts, stroke, or kidney failure',
        'Recent baseline blood panel (eGFR, Creatinine, Urea, Liver enzymes)',
        'Formal referral letter from patient’s primary physician'
      ],
      notes: 'Overseas patients can submit DICOM files for clinical triage via UHN International Healthcare Services.'
    },
    verification: {
      authority: 'Accreditation Canada & Newsweek World’s Best Hospitals',
      accreditationStatus: 'Exemplary Standing Accreditation',
      officialReference: 'Ranked top 3 hospital worldwide; Global leader in polycystic kidney disease gene discovery',
      lastVerifiedDate: '2026'
    }
  },
  {
    id: 'cambridge-addenbrookes',
    name: 'Addenbrooke’s Hospital (Cambridge University Hospitals NHS)',
    department: 'Department of Renal Medicine & East Anglian Cystic Kidney Disease Service',
    country: 'United Kingdom',
    city: 'Cambridge, Cambridgeshire',
    region: 'Europe',
    flag: '🇬🇧',
    address: 'Hills Road, Cambridge, CB2 0QQ, United Kingdom',
    primaryPhone: '+44 1223 245151',
    internationalPhone: '+44 1223 216000',
    emergencyPhone: '+44 1223 217118',
    website: 'https://www.cuh.nhs.uk/our-services/renal-medicine/',
    internationalCareUrl: 'https://www.cuh.nhs.uk/our-services/private-and-international-healthcare/',
    rankingHighlight: 'European Reference Network (ERKNet) Centre of Excellence for Cystic Kidney Diseases and Bosniak Evaluation',
    overview: 'Affiliated with the University of Cambridge, Addenbrooke’s Hospital provides expert diagnostic assessment for complex and atypical renal cysts, Bosniak classification review by specialist uroradiologists, and senior-focused conservative cyst management.',
    cystSpecialties: [
      'ERKNet Designated Specialist Center for Cystic Renal Diseases',
      'Complex Renal Cyst MDT (Multi-Disciplinary Team) Review',
      'Bosniak IIF / III Risk Stratification in Older Adults',
      'Autosomal Dominant Polycystic Kidney Disease (ADPKD)',
      'Tuberous Sclerosis Complex & Angiomyolipoma-Associated Cysts'
    ],
    cystTreatmentsOffered: [
      'Multi-parametric Renal MRI for cystic classification',
      'Image-guided cyst aspiration and sclerotherapy',
      'Conservative watchful waiting protocols to protect residual senior kidney function',
      'Robotic assisted nephron-sparing partial nephrectomy',
      'Comprehensive renal vascular and cyst volume surveillance'
    ],
    languagesSpoken: ['English', 'Comprehensive NHS multilingual translation in all major languages'],
    seniorAccessibility: [
      'Step-free level access throughout all hospital concourses',
      'Internal mobility buggies to transport senior patients between clinic zones',
      'Large high-contrast signage in bold navy and white',
      'Quiet, comfortable waiting lounges for elderly patients'
    ],
    renalCystCare: {
      specializedClinic: 'East Anglian Renal Genetics & Cystic Kidney Service',
      bosniakEvaluationAvailable: true,
      geneticTestingPKD: true,
      minimallyInvasiveCystAblation: true,
      sclerotherapyAvailable: true,
      leadTimeWeeks: '4 to 6 weeks advance coordination',
      requiredDocuments: [
        'High-resolution Contrast CT or Multi-parametric MRI DICOM series',
        'Formal radiological reports specifying wall thickness and septation',
        'Recent biochemical profile (eGFR, Creatinine, Electrolytes)',
        'Clinical history detailing flank pain, hematuria, or hypertension'
      ],
      notes: 'Overseas private patients can book specialist consultant cyst clinics through Cambridge University Hospitals International Healthcare.'
    },
    verification: {
      authority: 'Care Quality Commission (CQC) UK & ERKNet European Reference Network',
      accreditationStatus: 'ERKNet Certified Center of Excellence for Rare & Cystic Kidney Diseases',
      officialReference: 'NHS England designated specialized renal genetics center; Full member of European Reference Network',
      lastVerifiedDate: '2026'
    }
  },
  {
    id: 'guys-and-st-thomas',
    name: 'Guy’s and St Thomas’ NHS Foundation Trust',
    department: 'Department of Urology and Nephrology – Complex Renal Cyst & Stone Service',
    country: 'United Kingdom',
    city: 'London',
    region: 'Europe',
    flag: '🇬🇧',
    address: 'Great Maze Pond, London SE1 9RT, United Kingdom',
    primaryPhone: '+44 20 7188 7188',
    internationalPhone: '+44 20 7188 5197',
    emergencyPhone: '+44 20 7188 7188',
    website: 'https://www.guysandstthomas.nhs.uk/our-services/kidney-care',
    internationalCareUrl: 'https://www.guysandstthomasprivatehealthcare.co.uk/',
    rankingHighlight: 'UK leader in robotic partial nephrectomy and minimally invasive complex cyst management; Largest renal center in South East England',
    overview: 'Guy’s and St Thomas’ in central London is world-renowned for its specialized urology and nephrology units. Their joint Complex Cyst and Renal Mass clinic brings together internationally distinguished urologists and nephrologists to offer individualized treatment plans for elderly patients.',
    cystSpecialties: [
      'Complex Bosniak III & IV Cystic Mass Management',
      'Symptomatic Simple Renal Cysts in Elderly Patients',
      'Contrast-Enhanced Ultrasound (CEUS) Cyst Characterization',
      'Autosomal Dominant Polycystic Kidney Disease',
      'Frailty-Adapted Active Surveillance of Cystic Renal Masses'
    ],
    cystTreatmentsOffered: [
      'Da Vinci Robotic Partial Nephrectomy for complex cystic tumors',
      'Percutaneous ultrasound-guided ethanol sclerotherapy',
      'Percutaneous cryoablation for senior patients unfit for open surgery',
      'CEUS (Contrast-Enhanced Ultrasound) without kidney-toxic iodinated contrast',
      'Holistic pain and geriatric renal supportive care'
    ],
    languagesSpoken: ['English', 'Professional in-person and telephone interpreter service in 100+ languages'],
    seniorAccessibility: [
      'Direct step-free connection with London Bridge train and underground station',
      'Hospital volunteer "Navigators" assisting seniors from entrance to clinic',
      'Hearing induction loops and low-counter reception areas',
      'Ergonomic seating with supportive armrests throughout waiting areas'
    ],
    renalCystCare: {
      specializedClinic: 'Guy’s Specialized Joint Renal Cyst & Mass Clinic',
      bosniakEvaluationAvailable: true,
      geneticTestingPKD: true,
      minimallyInvasiveCystAblation: true,
      sclerotherapyAvailable: true,
      leadTimeWeeks: '3 to 5 weeks advance notice',
      requiredDocuments: [
        'Imaging disc with CT, MRI, or Contrast Ultrasound studies',
        'Written reports from attending radiologist',
        'Recent renal panel and urinalysis results',
        'Current medication list and allergy profile'
      ],
      notes: 'Guy’s and St Thomas’ Private Healthcare assists overseas elderly patients with fast-track specialist cyst appointments.'
    },
    verification: {
      authority: 'Care Quality Commission (CQC) UK',
      accreditationStatus: 'Rated Outstanding by Care Quality Commission',
      officialReference: 'Pioneer of robotic cyst surgery in the UK; National referral center for complex renal masses',
      lastVerifiedDate: '2026'
    }
  },
  {
    id: 'charite-berlin',
    name: 'Charité – Universitätsmedizin Berlin',
    department: 'Department of Nephrology and Medical Intensive Care (Charité Campus Mitte)',
    country: 'Germany',
    city: 'Berlin',
    region: 'Europe',
    flag: '🇩🇪',
    address: 'Charitéplatz 1, 10117 Berlin, Germany',
    primaryPhone: '+49 30 450 50',
    internationalPhone: '+49 30 450 578 000',
    emergencyPhone: '+49 30 450 551 000',
    website: 'https://nephrologie-intensivmedizin.charite.de',
    internationalCareUrl: 'https://international.charite.de',
    rankingHighlight: 'Designated European Reference Network (ERKNet) Center for Cystic Kidney Diseases; Ranked #1 in Germany',
    overview: 'Charité is Germany’s leading university hospital. Its specialized Center for Cystic Kidney Diseases offers state-of-the-art diagnostic imaging, genetic sequencing, and interventional sclerotherapy, emphasizing kidney preservation for elderly patients.',
    cystSpecialties: [
      'Autosomal Dominant & Recessive Polycystic Kidney Disease (ERKNet)',
      'Bosniak Classification 2019 MRI-Based Evaluation',
      'Medullary Sponge Kidney & Glomerulocystic Syndromes',
      'Infected Renal Cysts & Complex Cyst Complications',
      'Geriatric Cardiorenal & Cyst Volume Optimization'
    ],
    cystTreatmentsOffered: [
      'Multi-parametric 3-Tesla Renal MRI with diffusion-weighted sequences',
      'Interventional radiology percutaneous cyst evacuation and sclerotherapy',
      'Minimally invasive laparoscopic cyst marsupialization',
      'Disease-modifying therapies and blood pressure control for ADPKD',
      'Percutaneous drainage for infected or hemorrhagic cysts'
    ],
    languagesSpoken: ['German', 'English', 'Russian', 'Arabic', 'Multilingual international coordination team'],
    seniorAccessibility: [
      'Fully certified barrier-free campus with spacious elevators',
      'Dedicated Charité International liaison escort for senior foreign patients',
      'High-contrast directional signs in German and English',
      'Immediate access to taxi stands and accessible transit'
    ],
    renalCystCare: {
      specializedClinic: 'Charité Specialist Outpatient Clinic for Polycystic & Cystic Kidney Diseases',
      bosniakEvaluationAvailable: true,
      geneticTestingPKD: true,
      minimallyInvasiveCystAblation: true,
      sclerotherapyAvailable: true,
      leadTimeWeeks: '3 to 5 weeks advance booking',
      requiredDocuments: [
        'Imaging reports and DICOM files (CT, MRI, Ultrasound)',
        'Medical history translated into German or English',
        'Recent blood laboratory results (eGFR, Creatinine, Electrolytes)',
        'Documentation of previous cyst punctures or infections if applicable'
      ],
      notes: 'Charité International coordinates pre-arrival case evaluations by Charité nephrologists and uroradiologists.'
    },
    verification: {
      authority: 'European Reference Network (ERKNet) / German Hospital Quality Registry',
      accreditationStatus: 'ERKNet Certified Center of Excellence',
      officialReference: 'Ranked #1 Hospital in Germany 2024-2025; Official German reference center for cystic kidney diseases',
      lastVerifiedDate: '2026'
    }
  },
  {
    id: 'hopital-necker-paris',
    name: 'Hôpital Necker-Enfants Malades (AP-HP)',
    department: 'Service de Néphrologie Adulte et Centre de Référence Maladies Rénales Rares (MARHEA)',
    country: 'France',
    city: 'Paris',
    region: 'Europe',
    flag: '🇫🇷',
    address: '149 Rue de Sèvres, 75015 Paris, France',
    primaryPhone: '+33 1 44 49 40 00',
    internationalPhone: '+33 1 44 49 57 00',
    emergencyPhone: '+33 1 44 49 52 52',
    website: 'https://hopital-necker.aphp.fr',
    internationalCareUrl: 'https://international.aphp.fr',
    rankingHighlight: 'French National Reference Center for Rare Cystic & Hereditary Kidney Diseases (MARHEA/ERKNet)',
    overview: 'As the historic birthplace of French nephrology, Hôpital Necker houses MARHEA, the national referral center for cystic kidney diseases. Their senior nephrology specialists deliver comprehensive diagnosis, surveillance, and interventions for both simple and complex renal cysts.',
    cystSpecialties: [
      'National Referral Center for Polycystic Kidney Disease (PKD)',
      'Bosniak Cyst Complex Mass Expert Evaluation',
      'Cystic Dysplasias & Acquired Cystic Disease',
      'Management of Cyst Infection and Intracystic Hemorrhage',
      'Geriatric Nephron-Sparing Conservative Protocols'
    ],
    cystTreatmentsOffered: [
      'Percutaneous alcohol sclerotherapy for large compression cysts',
      'Advanced 3D MRI volumetry for cystic kidneys',
      'Laparoscopic cyst unroofing (fenestration)',
      'Robotic partial nephrectomy for Bosniak IV lesions',
      'Medical therapy and targeted pain management for elderly patients'
    ],
    languagesSpoken: ['French', 'English', 'Spanish', 'Arabic', 'AP-HP interpreter service in 140+ languages'],
    seniorAccessibility: [
      'Modern Laennec building with step-free elevators, level thresholds, and wide ramps',
      'Dedicated reception staff for elderly patients needing mobility assistance',
      'Clear oversized high-contrast signage in French and English',
      'Rest seating with firm armrests outside all consultation rooms'
    ],
    renalCystCare: {
      specializedClinic: 'Centre de Référence des Maladies Rénales Rares (MARHEA)',
      bosniakEvaluationAvailable: true,
      geneticTestingPKD: true,
      minimallyInvasiveCystAblation: true,
      sclerotherapyAvailable: true,
      leadTimeWeeks: '4 to 6 weeks advance coordination',
      requiredDocuments: [
        'Complete medical file from attending nephrologist (in English or French)',
        'DICOM disc with all previous kidney scans',
        'Recent kidney function panel (eGFR, Creatinine, Proteinuria)',
        'History of flank pain, hematuria, or cyst infections'
      ],
      notes: 'AP-HP International Patient Service facilitates international transfers and bilingual medical summaries.'
    },
    verification: {
      authority: 'Haute Autorité de Santé (HAS) / MARHEA French Ministry of Health',
      accreditationStatus: 'National Certified Center of Reference',
      officialReference: 'Designated French National Reference Center for Cystic Kidney Diseases; Member of ERKNet',
      lastVerifiedDate: '2026'
    }
  },
  {
    id: 'karolinska-university-hospital',
    name: 'Karolinska University Hospital',
    department: 'Department of Nephrology – Theme Inflammation and Aging & Cystic Kidney Program',
    country: 'Sweden',
    city: 'Stockholm',
    region: 'Europe',
    flag: '🇸🇪',
    address: 'Eugeniavägen 3, 171 76 Solna, Stockholm, Sweden',
    primaryPhone: '+46 8 123 700 00',
    internationalPhone: '+46 8 123 740 00',
    emergencyPhone: '+46 8 123 760 00',
    website: 'https://www.karolinska.se',
    internationalCareUrl: 'https://www.karolinska.se/en/karolinska-university-hospital/care-at-karolinska/international-patients/',
    rankingHighlight: 'Leader in geriatric nephrology and precision cystic imaging; Affiliated with Nobel Assembly',
    overview: 'Karolinska University Hospital’s Theme Inflammation and Aging combines world-class uroradiology with geriatric nephrology. Their cystic kidney specialists are pioneers in conservative management, protecting kidney function in elderly individuals with complex or numerous cysts.',
    cystSpecialties: [
      'Geriatric Cystic Kidney Disease & Aging Nephron Care',
      'High-Resolution MRI Bosniak Cyst Stratification',
      'Polycystic Kidney Disease (ADPKD)',
      'Symptomatic Parapelvic Cysts Causing Hydronephrosis',
      'Genetic Profiling of Atypical Cystic Syndromes'
    ],
    cystTreatmentsOffered: [
      'Image-guided minimally invasive cyst aspiration and sclerotherapy',
      'Active surveillance protocols specifically designed for senior adults',
      'Contrast-enhanced ultrasound (CEUS) for patients with renal impairment',
      'Robotic nephron-sparing surgery',
      'Non-invasive pain and blood pressure optimization'
    ],
    languagesSpoken: ['Swedish', 'English (fluent across medical staff)', 'Authorized medical interpreters in other languages'],
    seniorAccessibility: [
      'State-of-the-art Nordic universal accessibility standards throughout building',
      'Automated sliding doors, step-free wide corridors, and tactile guide lines',
      'Acoustically dampened waiting areas to assist seniors with hearing aids',
      'Personal multilingual patient navigators for international visitors'
    ],
    renalCystCare: {
      specializedClinic: 'Karolinska Specialized Renal Genetics & Cyst Clinic',
      bosniakEvaluationAvailable: true,
      geneticTestingPKD: true,
      minimallyInvasiveCystAblation: true,
      sclerotherapyAvailable: true,
      leadTimeWeeks: '4 to 6 weeks advance notice',
      requiredDocuments: [
        'Referral summary from attending kidney doctor',
        'DICOM disc containing all abdominal CT, MRI, and ultrasound imaging',
        'Recent blood laboratory results (eGFR, Creatinine, Electrolytes)',
        'Current prescription medications and dosages'
      ],
      notes: 'Karolinska International Patient Office coordinates appointments with senior nephrologists and uroradiologists.'
    },
    verification: {
      authority: 'National Board of Health and Welfare Sweden & ERKNet',
      accreditationStatus: 'Top Scandinavian University Medical Center',
      officialReference: 'Ranked top 10 hospital worldwide; Member of European Reference Network (ERKNet) for Cystic Diseases',
      lastVerifiedDate: '2026'
    }
  },
  {
    id: 'singapore-general-hospital',
    name: 'Singapore General Hospital (SGH)',
    department: 'Department of Renal Medicine & SGH Polycystic Kidney Disease (PKD) Clinic',
    country: 'Singapore',
    city: 'Singapore',
    region: 'Asia-Pacific',
    flag: '🇸🇬',
    address: 'Outram Road, Singapore 169608',
    primaryPhone: '+65 6222 3322',
    internationalPhone: '+65 6321 4377',
    emergencyPhone: '+65 6321 4311',
    website: 'https://www.sgh.com.sg/clinical-departments-centers/renal-medicine',
    internationalCareUrl: 'https://www.sgh.com.sg/patient-care/international-patients',
    rankingHighlight: 'Flagship cystic kidney center in Southeast Asia; Ranked top 10 worldwide by Newsweek',
    overview: 'Singapore General Hospital’s Department of Renal Medicine operates a dedicated Polycystic Kidney Disease (PKD) and Complex Cyst Clinic. SGH is renowned for advanced multi-parametric MRI cyst characterization, sclerotherapy, and comprehensive geriatric renal preservation.',
    cystSpecialties: [
      'Comprehensive Polycystic Kidney Disease (PKD) Care',
      'Bosniak Cyst Classification & Complex Mass Review',
      'Large Symptomatic Simple Cyst Sclerotherapy',
      'Geriatric Renal Function Preservation',
      'Cardiorenal Management in Cystic Patients'
    ],
    cystTreatmentsOffered: [
      'Ultrasound and CT-guided cyst aspiration and alcohol sclerotherapy',
      'Laparoscopic and robotic cyst decortication',
      'Multiparametric MRI renal volumetry and cyst tracking',
      'Percutaneous ablation for elderly patients with small cystic tumors',
      'Personalized pharmacological management and dietary counseling'
    ],
    languagesSpoken: ['English', 'Mandarin', 'Malay', 'Tamil', 'Hokkien/Cantonese', 'SGH International interpreter service'],
    seniorAccessibility: [
      'Seamless flat campus walkways with wheelchair loan stations at every main entrance',
      'Clear, high-contrast directional signage in four official languages',
      'Complimentary campus shuttle buggies connecting MRT directly to clinic lobbies',
      'Dedicated SGH International Patient Centre lounge with personalized coordinator'
    ],
    renalCystCare: {
      specializedClinic: 'SGH Specialized Polycystic Kidney Disease & Cystic Renal Clinic',
      bosniakEvaluationAvailable: true,
      geneticTestingPKD: true,
      minimallyInvasiveCystAblation: true,
      sclerotherapyAvailable: true,
      leadTimeWeeks: '2 to 4 weeks advance notice',
      requiredDocuments: [
        'Detailed medical report from patient’s primary physician',
        'Recent abdominal CT, MRI, or renal ultrasound scans on CD or USB',
        'Latest blood tests: serum creatinine, eGFR, complete blood count',
        'Passport copy and travel itinerary'
      ],
      notes: 'SGH International Patient Centre facilitates rapid appointment scheduling and multi-specialty consultations.'
    },
    verification: {
      authority: 'Joint Commission International (JCI) & Ministry of Health Singapore',
      accreditationStatus: 'JCI Enterprise Accredited Center of Excellence',
      officialReference: 'Ranked top 10 hospital globally by Newsweek; Premier renal cyst center in Southeast Asia',
      lastVerifiedDate: '2026'
    }
  },
  {
    id: 'snuh-seoul',
    name: 'Seoul National University Hospital (SNUH)',
    department: 'Division of Nephrology & SNUH Polycystic Kidney Disease Specialized Center',
    country: 'South Korea',
    city: 'Seoul',
    region: 'Asia-Pacific',
    flag: '🇰🇷',
    address: '101 Daehak-ro, Jongno-gu, Seoul 03080, Republic of Korea',
    primaryPhone: '+82 2 2072 2114',
    internationalPhone: '+82 2 2072 0505',
    emergencyPhone: '+82 2 2072 2474',
    website: 'https://www.snuh.org/global/en/main.do',
    internationalCareUrl: 'https://www.snuh.org/global/en/ihc/ihc01.do',
    rankingHighlight: 'Leader in robotic cyst unroofing and Asian ADPKD genetic epidemiology; Top-ranked medical center in South Korea',
    overview: 'Seoul National University Hospital operates one of Asia’s premier specialized clinics for polycystic kidney disease and complex cystic masses. SNUH is renowned for robotic single-port cyst decortication and advanced non-contrast MRI for elderly patients with borderline kidney function.',
    cystSpecialties: [
      'Adult Polycystic Kidney Disease (ADPKD) Specialized Clinic',
      'Bosniak Complex Cystic Mass Stratification',
      'Single-Port Robotic Cyst Decortication',
      'Simple & Parapelvic Renal Cyst Sclerotherapy',
      'Geriatric Nephron-Sparing Urologic Oncology'
    ],
    cystTreatmentsOffered: [
      'Robotic single-port cyst unroofing (minimal incisions & rapid senior recovery)',
      'Percutaneous ethanol / polidocanol sclerotherapy',
      'Non-contrast arterial spin labeling MRI for cyst characterization',
      'Targeted genetic screening for cystic renal disorders',
      'Comprehensive geriatric supportive renal care'
    ],
    languagesSpoken: ['Korean', 'English (American board-certified doctors in IHC)', 'Russian', 'Mongolian', 'Arabic', 'Chinese'],
    seniorAccessibility: [
      'Dedicated International Healthcare Center with 1-on-1 bilingual senior coordinators',
      'Wheelchair escorts available from main driveway to clinic examination room',
      'Step-free pathways, wide doors, and clear digital queuing screens',
      'Direct pharmacy consultation counter with medication schedule printouts in English'
    ],
    renalCystCare: {
      specializedClinic: 'SNUH Polycystic Kidney Disease & Cystic Renal Disease Center',
      bosniakEvaluationAvailable: true,
      geneticTestingPKD: true,
      minimallyInvasiveCystAblation: true,
      sclerotherapyAvailable: true,
      leadTimeWeeks: '2 to 3 weeks advance notice',
      requiredDocuments: [
        'Official medical referral and treatment summary in English',
        'DICOM disc containing all abdominal CT, MRI, and ultrasound imaging',
        'Recent blood laboratory results (eGFR, Creatinine, Electrolytes)',
        'List of regular medications and allergy profile'
      ],
      notes: 'SNUH International Healthcare Center facilitates rapid pre-arrival review and in-depth specialist consultations.'
    },
    verification: {
      authority: 'Ministry of Health and Welfare (South Korea) & KOIHA Accreditation',
      accreditationStatus: 'National Certified Leading Medical Center',
      officialReference: 'Ranked #1 medical institution in South Korea; Asian leader in ADPKD clinical trials',
      lastVerifiedDate: '2026'
    }
  },
  {
    id: 'st-lukes-tokyo',
    name: 'St. Luke’s International Hospital',
    department: 'Department of Nephrology & Center for Kidney Diseases',
    country: 'Japan',
    city: 'Tokyo',
    region: 'Asia-Pacific',
    flag: '🇯🇵',
    address: '9-1 Akashi-cho, Chuo-ku, Tokyo 104-8560, Japan',
    primaryPhone: '+81 3 3541 5151',
    internationalPhone: '+81 3 5550 7120',
    emergencyPhone: '+81 3 3541 5151',
    website: 'https://hospital.luke.ac.jp/eng/',
    internationalCareUrl: 'https://hospital.luke.ac.jp/eng/international/index.html',
    rankingHighlight: 'First hospital in Japan to achieve JCI accreditation; Renowned for English-speaking senior kidney care',
    overview: 'Founded in 1900, St. Luke’s International Hospital is celebrated for its patient-centered philosophy and international patient care. Their Department of Nephrology provides careful differential diagnosis of asymptomatic simple cysts vs. complex Bosniak lesions in elderly patients.',
    cystSpecialties: [
      'Simple Renal Cysts & Age-Related Cyst Growth Monitoring',
      'Bosniak Classification & Second Opinion Consultations',
      'Polycystic Kidney Disease (ADPKD) Comprehensive Care',
      'Geriatric Renal Function Preservation',
      'Cyst-Induced Flank Pain & Hematuria Management'
    ],
    cystTreatmentsOffered: [
      'High-resolution non-radiation ultrasound and multi-slice contrast CT',
      'Percutaneous cyst puncture and absolute alcohol sclerotherapy',
      'Laparoscopic cyst decortication with urologic surgery team',
      'Conservative watchful waiting and blood pressure optimization',
      'Patient educational counseling on renal cyst progression'
    ],
    languagesSpoken: ['Japanese', 'English (fluent across medical staff)', 'Certified medical interpreters in other languages'],
    seniorAccessibility: [
      'Pioneer of senior-friendly hospital architecture in Japan with wide, warm-lit hallways',
      'Dedicated international reception desk with bilingual senior patient navigators',
      'Rest alcoves and ergonomic seating spaced throughout outpatient corridors',
      'Wheelchair escorts available from main entrance to all clinic rooms'
    ],
    renalCystCare: {
      specializedClinic: 'St. Luke’s International Kidney Disease Center',
      bosniakEvaluationAvailable: true,
      geneticTestingPKD: true,
      minimallyInvasiveCystAblation: true,
      sclerotherapyAvailable: true,
      leadTimeWeeks: '3 to 4 weeks advance notice',
      requiredDocuments: [
        'Medical history summary and recent laboratory test report in English',
        'DICOM disc containing all abdominal CT, MRI, and ultrasound imaging',
        'Recent serum creatinine, eGFR, and urinalysis records',
        'Copy of passport and emergency contact information'
      ],
      notes: 'St. Luke’s International Care Center provides fluent English consultation notes and direct liaison with overseas doctors.'
    },
    verification: {
      authority: 'Joint Commission International (JCI) & Japan Council for Quality Health Care',
      accreditationStatus: 'JCI Accredited Hospital since 2012',
      officialReference: 'First hospital in Japan accredited by JCI; Recognized leader in international patient safety',
      lastVerifiedDate: '2026'
    }
  },
  {
    id: 'kyoto-university-hospital',
    name: 'Kyoto University Hospital',
    department: 'Department of Nephrology & Department of Urology (Cystic Kidney Group)',
    country: 'Japan',
    city: 'Kyoto',
    region: 'Asia-Pacific',
    flag: '🇯🇵',
    address: '54 Shogoin Kawahara-cho, Sakyo-ku, Kyoto 606-8507, Japan',
    primaryPhone: '+81 75 751 3111',
    internationalPhone: '+81 75 751 4983',
    emergencyPhone: '+81 75 751 3111',
    website: 'https://www.kuhp.kyoto-u.ac.jp/english/',
    internationalCareUrl: 'https://www.kuhp.kyoto-u.ac.jp/english/patients/international.html',
    rankingHighlight: 'Designated National University Hospital; Global pioneer in kidney disease mechanisms & cyst biology',
    overview: 'Kyoto University Hospital is renowned worldwide for medical innovation. Its joint Nephrology-Urology cystic kidney team delivers advanced diagnostic differentiation between benign aging cysts and complex cystic neoplasms, utilizing cutting-edge MRI and minimally invasive intervention.',
    cystSpecialties: [
      'Advanced Bosniak Classification 2019 MRI Assessment',
      'Polycystic Kidney Disease (ADPKD) Pathogenesis & Therapy',
      'Symptomatic Giant Renal Cysts in Elderly Individuals',
      'Contrast-Enhanced Ultrasound (CEUS) for Renal Cysts',
      'Robotic Nephron-Sparing Surgery for Cystic Masses'
    ],
    cystTreatmentsOffered: [
      'Ultrasound-guided percutaneous cyst aspiration & minocycline/ethanol sclerotherapy',
      'Da Vinci robotic partial nephrectomy for complex Bosniak III/IV cystic masses',
      'CEUS (Contrast-Enhanced Ultrasound) eliminating nephrotoxic contrast risk in elderly kidneys',
      'Novel genetic sequencing for hereditary cystic renal syndromes',
      'Personalized conservative surveillance programs'
    ],
    languagesSpoken: ['Japanese', 'English', 'Chinese', 'Medical translation coordinators available via International Healthcare Center'],
    seniorAccessibility: [
      'Universal design campus with smooth ramp transitions and wide automated doors',
      'Assistance service for seniors needing transport within the hospital campus',
      'High-contrast visual wayfinding signs with pictorial guides',
      'Direct bus and taxi accessibility at hospital main entrance'
    ],
    renalCystCare: {
      specializedClinic: 'Kyoto University Cystic Kidney & Renal Mass Group',
      bosniakEvaluationAvailable: true,
      geneticTestingPKD: true,
      minimallyInvasiveCystAblation: true,
      sclerotherapyAvailable: true,
      leadTimeWeeks: '4 to 6 weeks advance notice',
      requiredDocuments: [
        'Physician referral letter with clinical summary translated into English or Japanese',
        'DICOM disc containing all abdominal CT, MRI, and ultrasound imaging',
        'Recent serum creatinine, eGFR, and urinalysis records',
        'Summary of any previous cyst aspiration or pain treatments'
      ],
      notes: 'Appointments are coordinated through the Kyoto University Hospital International Healthcare Center.'
    },
    verification: {
      authority: 'Ministry of Health, Labour and Welfare Japan (MHLW)',
      accreditationStatus: 'Special Function Hospital Certification',
      officialReference: 'Designated National Center for Advanced Medical Care; World-class academic nephrology center',
      lastVerifiedDate: '2026'
    }
  },
  {
    id: 'royal-melbourne-hospital',
    name: 'The Royal Melbourne Hospital',
    department: 'Department of Nephrology & Victorian Renal Genetics and Cystic Disease Service',
    country: 'Australia',
    city: 'Melbourne, Victoria',
    region: 'Asia-Pacific',
    flag: '🇦🇺',
    address: '300 Grattan Street, Parkville VIC 3050, Australia',
    primaryPhone: '+61 3 9342 7000',
    internationalPhone: '+61 3 9342 7175',
    emergencyPhone: '+61 3 9342 7000',
    website: 'https://www.thermh.org.au/health-professionals/clinical-services/nephrology',
    internationalCareUrl: 'https://www.thermh.org.au/patients-visitors/coming-to-hospital/overseas-patients',
    rankingHighlight: 'Flagship tertiary renal service in Australia; National pioneer in senior supportive kidney care and cystic disease genetics',
    overview: 'The Royal Melbourne Hospital hosts the Victorian Renal Genetics and Cystic Disease Service. Their multidisciplinary team specializes in evaluating complex renal cysts, differentiating benign age-related cysts from early cystic neoplasms, and senior supportive care.',
    cystSpecialties: [
      'Victorian Specialist Cystic Kidney Disease Clinic',
      'Bosniak IIF and III Multidisciplinary Surveillance Clinic',
      'Autosomal Dominant Polycystic Kidney Disease (ADPKD)',
      'Geriatric Supportive Nephrology & Kidney Preservation',
      'Management of Cyst Pain, Bleeding, and Infection'
    ],
    cystTreatmentsOffered: [
      'Multi-parametric MRI and Contrast-Enhanced Ultrasound',
      'Percutaneous cyst drainage and sclerotherapy',
      'Kidney-sparing robotic partial nephrectomy',
      'Conservative watchful waiting protocols to protect residual senior kidney function',
      'Comprehensive pain and renal supportive management'
    ],
    languagesSpoken: ['English', 'Accredited healthcare interpreters in Greek, Italian, Cantonese, Mandarin, Vietnamese, Arabic'],
    seniorAccessibility: [
      'Accessible Grattan Street main entrance with wheelchair hire and volunteer greeters',
      'Level access throughout all clinical wings with high-contrast floor guide lines',
      'Large print appointment letters and accessible electronic check-in kiosks with large text',
      'Spacious waiting lounges with high-backed orthopedic chairs for senior comfort'
    ],
    renalCystCare: {
      specializedClinic: 'Victorian Renal Genetics & Cystic Kidney Service',
      bosniakEvaluationAvailable: true,
      geneticTestingPKD: true,
      minimallyInvasiveCystAblation: true,
      sclerotherapyAvailable: true,
      leadTimeWeeks: '4 to 6 weeks advance notice',
      requiredDocuments: [
        'Home renal physician referral and clinical background',
        'DICOM disc containing all abdominal CT, MRI, and ultrasound imaging',
        'Recent serum creatinine, eGFR, and urinalysis records',
        'Travel insurance and billing authorization documents'
      ],
      notes: 'Overseas patient appointments are coordinated by the RMH Overseas Patient Liaison Office.'
    },
    verification: {
      authority: 'Australian Council on Healthcare Standards (ACHS)',
      accreditationStatus: 'ACHS Fully Accredited Public Teaching Hospital',
      officialReference: 'Australia’s premier renal network; National pioneer of geriatric renal supportive care and cystic disease services',
      lastVerifiedDate: '2026'
    }
  },
  {
    id: 'sheba-medical-center',
    name: 'Sheba Medical Center (Tel HaShomer)',
    department: 'Institute of Nephrology and Hypertension & Department of Urology – Cystic Kidney Unit',
    country: 'Israel',
    city: 'Ramat Gan / Tel Aviv',
    region: 'Middle East',
    flag: '🇮🇱',
    address: 'Derech Sheba 2, Ramat Gan, 52621 Israel',
    primaryPhone: '+972 3 530 3030',
    internationalPhone: '+972 3 530 5000',
    emergencyPhone: '+972 3 530 2000',
    website: 'https://www.shebaonline.org/department/nephrology/',
    internationalCareUrl: 'https://www.shebaonline.org/',
    rankingHighlight: 'Ranked in Newsweek’s Top 10 World’s Best Hospitals; Global concierge for international cystic kidney patients',
    overview: 'Sheba Medical Center is the largest medical center in Israel and the Middle East. Its joint Institute of Nephrology and Department of Urology provides advanced diagnostic clarification for complex Bosniak cysts, image-guided sclerotherapy, and robotic nephron-sparing surgery for international seniors.',
    cystSpecialties: [
      'Complex Bosniak Cyst Classification & Surgical Evaluation',
      'Polycystic Kidney Disease (ADPKD) Comprehensive Management',
      'Minimally Invasive Sclerotherapy for Large Painful Cysts',
      'Geriatric Nephron Preservation & Second Opinions',
      'Atypical Renal Cysts with Mural Nodules or Calcification'
    ],
    cystTreatmentsOffered: [
      'Ultrasound and CT-guided percutaneous cyst sclerotherapy',
      'Da Vinci robotic partial nephrectomy for complex Bosniak III/IV cystic masses',
      'Percutaneous cryoablation for cystic tumors in high-risk seniors',
      '3T Multiparametric MRI cyst evaluation',
      'Advanced medical protocols for polycystic kidney disease'
    ],
    languagesSpoken: ['Hebrew', 'English', 'Russian', 'Arabic', 'French', 'Full Sheba Global medical interpretation service'],
    seniorAccessibility: [
      'Dedicated personal Sheba Global coordinator assigned to senior international patients',
      'Electric mobility shuttles traversing the entire hospital campus',
      'Wheelchair accessible suites, examination rooms, and restrooms',
      'On-campus hotel accommodations directly linked to clinical pavilions'
    ],
    renalCystCare: {
      specializedClinic: 'Sheba Specialized Cystic Kidney & Urologic Oncology Unit',
      bosniakEvaluationAvailable: true,
      geneticTestingPKD: true,
      minimallyInvasiveCystAblation: true,
      sclerotherapyAvailable: true,
      leadTimeWeeks: '2 to 3 weeks advance notice',
      requiredDocuments: [
        'Detailed medical records from referring physician in English',
        'DICOM disc containing all abdominal CT, MRI, and ultrasound imaging',
        'Recent serum creatinine, eGFR, and urinalysis records',
        'Current medications and cardiology clearance if applicable'
      ],
      notes: 'Sheba Global provides seamless appointment coordination, including private transfers and English documentation.'
    },
    verification: {
      authority: 'Joint Commission International (JCI) & Ministry of Health Israel',
      accreditationStatus: 'JCI Accredited Academic Medical Center',
      officialReference: 'Ranked in top 10 hospitals worldwide by Newsweek since 2019; Largest medical center in the Middle East',
      lastVerifiedDate: '2026'
    }
  },
  {
    id: 'koc-university-hospital',
    name: 'Koç University Hospital (Koç Üniversitesi Hastanesi)',
    department: 'Department of Urology & Nephrology – Center for Advanced Renal & Cystic Diseases',
    country: 'Turkey',
    city: 'Istanbul',
    region: 'Europe',
    flag: '🇹🇷',
    address: 'Maltepe Mahallesi, Davutpaşa Caddesi No: 4, 34010 Zeytinburnu / Istanbul, Turkey',
    primaryPhone: '+90 850 250 8250',
    internationalPhone: '+90 212 311 3434',
    emergencyPhone: '+90 212 311 3111',
    website: 'https://kuh.ku.edu.tr/en/',
    internationalCareUrl: 'https://kuh.ku.edu.tr/en/international-patients/',
    rankingHighlight: 'Flagship academic medical center in Turkey; Renowned for robotic kidney-preserving surgery and JCI accreditation',
    overview: 'Affiliated with Koç University School of Medicine, this leading hospital in Istanbul features a joint urology-nephrology board providing advanced MRI characterization for complex Bosniak cystic masses, percutaneous cyst sclerotherapy, and single-port robotic partial nephrectomy designed for older international patients.',
    cystSpecialties: [
      'Complex Bosniak IIF, III, and IV Cyst Evaluation',
      'Minimally Invasive Sclerotherapy for Large Symptomatic Cysts',
      'Robotic Nephron-Sparing Surgery for Cystic Masses',
      'Autosomal Dominant Polycystic Kidney Disease (ADPKD)',
      'Geriatric Kidney Preservation & Second Opinions'
    ],
    cystTreatmentsOffered: [
      'Ultrasound and CT-guided percutaneous cyst aspiration and alcohol sclerotherapy',
      'Da Vinci Xi robotic partial nephrectomy for complex Bosniak cystic masses',
      'Multi-parametric 3T MRI renal cyst imaging with diffusion-weighted sequences',
      'Laparoscopic cyst decortication (unroofing)',
      'Conservative active surveillance for elderly patients with small cystic lesions'
    ],
    languagesSpoken: ['Turkish', 'English (fluent medical staff)', 'Arabic', 'Russian', 'French', 'Certified international interpreters'],
    seniorAccessibility: [
      'Dedicated International Patients VIP Lounge with personal senior patient liaison',
      'Complimentary airport-to-hospital transfer in wheelchair-accessible vehicles',
      'Step-free entrance ramps, wide elevators, and tactile wayfinding corridors',
      'Geriatric rooms with adjustable electronic beds and nurse call buttons'
    ],
    renalCystCare: {
      specializedClinic: 'Koç University Specialized Renal Cyst & Urologic Oncology Clinic',
      bosniakEvaluationAvailable: true,
      geneticTestingPKD: true,
      minimallyInvasiveCystAblation: true,
      sclerotherapyAvailable: true,
      leadTimeWeeks: '1 to 2 weeks advance notice (fast-track overseas triage)',
      requiredDocuments: [
        'Abdominal CT, MRI, or renal ultrasound DICOM files on CD or online transfer',
        'Recent serum creatinine, eGFR, and urinalysis lab reports',
        'Summary letter from referring doctor (in English or Turkish)',
        'Passport copy and travel itinerary'
      ],
      notes: 'Koç Healthcare International Office provides 24/7 dedicated support including pre-arrival imaging review by a senior professor of urology.'
    },
    verification: {
      authority: 'Joint Commission International (JCI) & Turkish Ministry of Health',
      accreditationStatus: 'JCI Accredited Academic Medical Center',
      officialReference: 'Ranked top academic hospital in Turkey; International referral hub for complex urologic oncology and kidney surgery',
      lastVerifiedDate: '2026'
    }
  },
  {
    id: 'anadolu-medical-center',
    name: 'Anadolu Medical Center (in affiliation with Johns Hopkins Medicine)',
    department: 'Department of Urology & Nephrology – Cystic Kidney & Urologic Oncology Service',
    country: 'Turkey',
    city: 'Istanbul / Kocaeli',
    region: 'Europe',
    flag: '🇹🇷',
    address: 'Cumhuriyet Mahallesi, 2255 Sokak No: 3, 41400 Gebze / Kocaeli, Istanbul, Turkey',
    primaryPhone: '+90 262 678 5000',
    internationalPhone: '+90 262 678 5555',
    emergencyPhone: '+90 262 678 5444',
    website: 'https://www.anadolumedicalcenter.com/en/',
    internationalCareUrl: 'https://www.anadolumedicalcenter.com/en/international-services',
    rankingHighlight: 'Affiliated with Johns Hopkins Medicine USA; JCI & Planetree Gold certified patient-centered care',
    overview: 'Anadolu Medical Center operates in strategic partnership with Johns Hopkins Medicine, applying American clinical protocols to cystic kidney disease. Their specialized cyst clinic offers rapid multi-disciplinary review of indeterminate Bosniak lesions and gentle outpatient sclerotherapy for elderly travelers.',
    cystSpecialties: [
      'Johns Hopkins Clinical Protocol Bosniak Cyst Evaluation',
      'Percutaneous Simple Cyst Drainage & Sclerotherapy',
      'Polycystic Kidney Disease (ADPKD) Comprehensive Management',
      'Nephron-Sparing Cryoablation & Robotic Decortication',
      'Geriatric Renal Supportive Care'
    ],
    cystTreatmentsOffered: [
      'Percutaneous alcohol sclerotherapy under continuous ultrasound guidance',
      'Robotic partial nephrectomy preserving healthy senior kidney tissue',
      'High-resolution multi-phase CT urography & contrast MRI',
      'Percutaneous radiofrequency ablation (RFA) for high-risk surgical seniors',
      'Personalized blood pressure and volume optimization for polycystic kidneys'
    ],
    languagesSpoken: ['Turkish', 'English (fluent across medical specialists)', 'Arabic', 'Russian', 'German', 'Romanian'],
    seniorAccessibility: [
      'Planetree Gold Certified Patient-Centered Hospital with quiet, healing campus atmosphere',
      'Wheelchair and electric buggy transport throughout all hospital pavilions',
      'Personalized international senior patient coordinator escorting from arrival to consultation',
      'On-site hotel suites directly connected to the clinical building'
    ],
    renalCystCare: {
      specializedClinic: 'Anadolu Comprehensive Renal Cyst & Urologic Center',
      bosniakEvaluationAvailable: true,
      geneticTestingPKD: true,
      minimallyInvasiveCystAblation: true,
      sclerotherapyAvailable: true,
      leadTimeWeeks: '1 to 2 weeks advance notice',
      requiredDocuments: [
        'CT or MRI DICOM discs with contrast phase images',
        'Written radiology report detailing cyst size, wall thickness, and calcifications',
        'Renal function tests (eGFR, Serum Creatinine, Urea)',
        'List of current medications and allergies'
      ],
      notes: 'Anadolu International Services organizes complimentary second opinion reviews with Johns Hopkins affiliated faculty prior to departure.'
    },
    verification: {
      authority: 'Joint Commission International (JCI) & Johns Hopkins Medicine International',
      accreditationStatus: 'JCI Accredited & Planetree Gold Certified',
      officialReference: 'Strategic partner of Johns Hopkins Medicine; Recognized center of excellence for overseas patient safety and clinical outcomes',
      lastVerifiedDate: '2026'
    }
  },
  {
    id: 'groote-schuur-hospital',
    name: 'Groote Schuur Hospital (University of Cape Town)',
    department: 'Division of Nephrology and Hypertension & Department of Urology',
    country: 'South Africa',
    city: 'Cape Town, Western Cape',
    region: 'Africa',
    flag: '🇿🇦',
    address: 'Main Road, Observatory, Cape Town, 7925, South Africa',
    primaryPhone: '+27 21 404 9111',
    internationalPhone: '+27 21 404 3318',
    emergencyPhone: '+27 21 404 4111',
    website: 'https://www.westerncape.gov.za/dept/health',
    internationalCareUrl: 'https://www.uctprivateacademic.co.za/',
    rankingHighlight: 'Historic teaching hospital of University of Cape Town; Premier tertiary referral center for renal diseases in Sub-Saharan Africa',
    overview: 'Affiliated with the University of Cape Town Faculty of Health Sciences, Groote Schuur Hospital and the adjacent UCT Private Academic Hospital deliver world-class nephrology and urology expertise. Their specialized team manages complex Bosniak cystic renal masses, large symptomatic simple cysts, and hereditary polycystic kidney disease (ADPKD) in senior adults.',
    cystSpecialties: [
      'Sub-Saharan Africa Referral Center for Complex Renal Cysts',
      'Bosniak Multidisciplinary Review & Radiological Stratification',
      'Autosomal Dominant Polycystic Kidney Disease (ADPKD)',
      'Ultrasound-Guided Simple Cyst Aspiration & Sclerotherapy',
      'Senior Supportive Renal Care & Nephron Sparing'
    ],
    cystTreatmentsOffered: [
      'Ultrasound-guided percutaneous cyst aspiration with sclerosing agents',
      'Multi-parametric 3T MRI & Contrast CT renal cyst assessment',
      'Laparoscopic and open nephron-sparing partial nephrectomy',
      'Conservative surveillance protocols tailored for elderly patients',
      'Genetic profiling and family counseling for polycystic kidney disease'
    ],
    languagesSpoken: ['English (primary working language)', 'Afrikaans', 'isiXhosa', 'Hospital translation service'],
    seniorAccessibility: [
      'Dedicated drop-off zones with wheelchair loan stations at main entrances',
      'Level access pathways with handrails and elevator facilities throughout all clinic towers',
      'Clear, large high-contrast visual signposts across outpatient zones',
      'Comfortable seating lounges with orthopedic supportive chairs for senior patients'
    ],
    renalCystCare: {
      specializedClinic: 'UCT / Groote Schuur Specialized Renal & Cystic Disease Clinic',
      bosniakEvaluationAvailable: true,
      geneticTestingPKD: true,
      minimallyInvasiveCystAblation: true,
      sclerotherapyAvailable: true,
      leadTimeWeeks: '3 to 4 weeks advance notice',
      requiredDocuments: [
        'DICOM image files on CD or flash drive (abdominal CT, MRI, or renal ultrasound)',
        'Official written radiology reports detailing cyst dimensions and septa',
        'Recent serum creatinine, eGFR, and full blood count',
        'Referral summary from primary nephrologist or family doctor'
      ],
      notes: 'Overseas private patients can book specialist consultant reviews via the UCT Private Academic Hospital international desk.'
    },
    verification: {
      authority: 'Office of Health Standards Compliance (OHSC) South Africa / HPCSA',
      accreditationStatus: 'Accredited Premier University Academic Hospital',
      officialReference: 'Ranked top academic nephrology department in Africa; Global pioneer of organ transplantation and specialized kidney care',
      lastVerifiedDate: '2026'
    }
  },
  {
    id: 'netcare-milpark-hospital',
    name: 'Netcare Milpark Hospital & Wits University Renal Institute',
    department: 'Department of Nephrology and Urology – Milpark Kidney Center',
    country: 'South Africa',
    city: 'Johannesburg, Gauteng',
    region: 'Africa',
    flag: '🇿🇦',
    address: '9 Guild Road, Parktown West, Johannesburg, 2193, South Africa',
    primaryPhone: '+27 11 480 5600',
    internationalPhone: '+27 11 480 5600',
    emergencyPhone: '+27 11 480 5777',
    website: 'https://www.netcare.co.za/netcare-hospitals/netcare-milpark-hospital',
    internationalCareUrl: 'https://www.netcare.co.za/international-patients',
    rankingHighlight: 'Premier private tertiary medical center in Johannesburg; Leading robotic kidney surgery and renal interventional radiology center in Africa',
    overview: 'Netcare Milpark Hospital in Johannesburg is renowned for its advanced diagnostic and surgical capabilities. Tightly associated with the University of the Witwatersrand (Wits), its multidisciplinary kidney team provides state-of-the-art Bosniak cyst classification, robotic cyst decortication, and image-guided sclerotherapy for domestic and international senior patients.',
    cystSpecialties: [
      'Da Vinci Robotic Surgery for Complex Renal Cysts',
      'Bosniak IIF, III, and IV Indeterminate Cyst Evaluation',
      'Large Painful Simple Cyst Aspiration & Alcohol Sclerotherapy',
      'Polycystic Kidney Disease (ADPKD) Comprehensive Care',
      'Geriatric Cardiorenal & Nephron-Sparing Therapies'
    ],
    cystTreatmentsOffered: [
      'Da Vinci robotic partial nephrectomy and cyst decortication (unroofing)',
      'Percutaneous ultrasound/CT-guided cyst drainage and chemical sclerotherapy',
      'Advanced 3T Multiparametric MRI with contrast clearance protocols',
      'Image-guided radiofrequency ablation (RFA) for small cystic lesions',
      'Targeted pain management and renal supportive regimens'
    ],
    languagesSpoken: ['English (fluent across medical staff)', 'Afrikaans', 'isiZulu', 'Sesotho', 'Netcare International patient translation assistance'],
    seniorAccessibility: [
      'Dedicated Netcare International Patient Concierge providing end-to-end senior travel assistance',
      'Step-free flat entrance corridors, wide automated double doors, and private valet parking',
      'Comfortable private waiting lounges with ergonomic armchairs for senior mobility',
      'Direct on-campus pharmacy consultation with large print prescription instructions'
    ],
    renalCystCare: {
      specializedClinic: 'Milpark Specialized Kidney Cyst & Robotic Urology Center',
      bosniakEvaluationAvailable: true,
      geneticTestingPKD: true,
      minimallyInvasiveCystAblation: true,
      sclerotherapyAvailable: true,
      leadTimeWeeks: '2 to 3 weeks advance notice',
      requiredDocuments: [
        'CT or MRI DICOM scan discs with contrast phase studies',
        'Historical ultrasound reports showing cyst growth rate over time',
        'Recent renal panel (eGFR, Creatinine, Electrolytes)',
        'Cardiovascular clearance and list of current medications'
      ],
      notes: 'Netcare International organizes complete medical travel packages, airport meet-and-greets, and direct coordinator accompaniment.'
    },
    verification: {
      authority: 'Department of Health South Africa & Netcare Healthcare Group',
      accreditationStatus: 'Top Tier Accredited Private Teaching Hospital',
      officialReference: 'Pioneer of robotic urologic and renal surgery in Southern Africa; Flagship private tertiary hospital for overseas travelers',
      lastVerifiedDate: '2026'
    }
  },
  {
    id: 'memorial-sisli-hospital',
    name: 'Memorial Şişli Hospital (Memorial Sağlık Grubu)',
    department: 'Department of Urology & Nephrology – Memorial Kidney Care & Cyst Clinic',
    country: 'Turkey',
    city: 'Istanbul',
    region: 'Europe',
    flag: '🇹🇷',
    address: 'Piyalepaşa Bulvarı, 34385 Şişli / Istanbul, Turkey',
    primaryPhone: '+90 212 444 7 888',
    internationalPhone: '+90 212 314 6666',
    emergencyPhone: '+90 212 314 6600',
    website: 'https://www.memorial.com.tr/en',
    internationalCareUrl: 'https://www.memorial.com.tr/en/international-patients',
    rankingHighlight: 'First hospital in Turkey to be accredited by Joint Commission International (JCI); Flagship campus of Memorial Health Group',
    overview: 'Memorial Şişli is the flagship hospital of the renowned Memorial Healthcare Group. Featuring internationally trained urologists and nephrologists, Memorial Şişli operates a dedicated renal cyst and kidney tumor program specializing in contrast-enhanced ultrasound (CEUS), percutaneous cyst sclerotherapy, and robotic nephron-sparing surgery with multilingual support for overseas elderly patients.',
    cystSpecialties: [
      'Bosniak IIF, III, and IV Indeterminate Cyst Evaluation',
      'Ultrasound-Guided Percutaneous Cyst Sclerotherapy',
      'Minimally Invasive Robotic Partial Nephrectomy (Da Vinci Xi)',
      'Polycystic Kidney Disease (ADPKD) Multidisciplinary Care',
      'Symptomatic Parapelvic & Giant Cortical Cysts',
      'Geriatric Nephron Preservation & Second Opinions'
    ],
    cystTreatmentsOffered: [
      'Percutaneous cyst aspiration and absolute alcohol sclerotherapy',
      'Da Vinci Xi robotic partial nephrectomy & laparoscopic cyst decortication',
      'High-resolution multi-parametric 3T MRI & contrast CT urography',
      'Contrast-Enhanced Ultrasound (CEUS) for seniors with borderline kidney function',
      'Gentle active surveillance protocols for elderly patients with small cystic lesions'
    ],
    languagesSpoken: ['Turkish', 'English (fluent across medical staff)', 'Arabic', 'Russian', 'French', 'Memorial 24/7 International patient interpreters'],
    seniorAccessibility: [
      'Dedicated Memorial International Patients Center with 1-on-1 bilingual senior navigators',
      'Complimentary VIP airport transfer with wheelchair-accessible private vehicles',
      'Step-free entrance ramps, wide elevators, and smooth non-slip floors throughout',
      'Specialized senior hospital rooms with electric beds and direct caregiver accommodations'
    ],
    renalCystCare: {
      specializedClinic: 'Memorial Specialized Kidney Cyst & Robotic Urology Center',
      bosniakEvaluationAvailable: true,
      geneticTestingPKD: true,
      minimallyInvasiveCystAblation: true,
      sclerotherapyAvailable: true,
      leadTimeWeeks: '1 to 2 weeks advance notice (fast-track overseas triage)',
      requiredDocuments: [
        'CT, MRI, or renal ultrasound DICOM image files on CD or secure digital upload',
        'Official radiology reports detailing cyst septa, wall thickness, and calcifications',
        'Recent renal function tests (Serum Creatinine, eGFR, Urinalysis)',
        'Summary letter from attending physician in English or Turkish'
      ],
      notes: 'Memorial International Patient Center provides comprehensive coordination including free preliminary medical opinions from senior urology professors before flight travel.'
    },
    verification: {
      authority: 'Joint Commission International (JCI) & Turkish Ministry of Health',
      accreditationStatus: 'JCI Accredited since 2002 (First in Turkey)',
      officialReference: 'First JCI-accredited hospital in Turkey; Global referral destination treating patients from over 90 countries annually',
      lastVerifiedDate: '2026'
    }
  },
  {
    id: 'memorial-bahcelievler-hospital',
    name: 'Memorial Bahçelievler Hospital',
    department: 'Department of Urology, Advanced Robotic Surgery & Nephrology Institute',
    country: 'Turkey',
    city: 'Istanbul',
    region: 'Europe',
    flag: '🇹🇷',
    address: 'Bahçelievler Merkez Mahallesi, Eski Londra Asfaltı Caddesi No: 89, 34180 Bahçelievler / Istanbul, Turkey',
    primaryPhone: '+90 212 444 7 888',
    internationalPhone: '+90 212 314 6666',
    emergencyPhone: '+90 212 314 6600',
    website: 'https://www.memorial.com.tr/en/hospitals/memorial-bahcelievler-hospital',
    internationalCareUrl: 'https://www.memorial.com.tr/en/international-patients',
    rankingHighlight: 'One of the world’s most advanced green, eco-friendly hospital complexes (LEED Platinum certified) with cutting-edge robotic kidney surgery',
    overview: 'Memorial Bahçelievler is one of the most technologically advanced hospital complexes in the Mediterranean region. Designed with universal accessibility and healing architecture, its urology and renal institute offers state-of-the-art diagnostic imaging for complex Bosniak cystic masses, single-incision robotic cyst unroofing, and outpatient chemical sclerotherapy tailored to the comfort of elderly international travelers.',
    cystSpecialties: [
      'Advanced 3T MRI & Dual-Source CT Bosniak Cyst Classification',
      'Robotic Single-Port & Multi-Port Cyst Unroofing (Decortication)',
      'Ultrasound & Fluoroscopy-Guided Cyst Sclerotherapy',
      'Autosomal Dominant Polycystic Kidney Disease (ADPKD)',
      'Elderly Renal Function Preservation & Pain Management'
    ],
    cystTreatmentsOffered: [
      'Da Vinci Xi robotic partial nephrectomy for complex Bosniak III/IV cystic masses',
      'Outpatient percutaneous cyst puncture, aspiration, and alcohol sclerotherapy',
      'Ultra-low-dose dual-energy spectral CT for precise cyst wall evaluation',
      'Image-guided percutaneous cryoablation for senior patients unfit for general anesthesia',
      'Comprehensive cardiorenal and blood pressure management for polycystic kidneys'
    ],
    languagesSpoken: ['Turkish', 'English (fluent medical staff)', 'Arabic', 'Russian', 'German', 'Memorial International translation desk'],
    seniorAccessibility: [
      'LEED Platinum certified healing campus with acoustic dampening, natural daylight, and wide barrier-free halls',
      'Complimentary electric mobility buggies and wheelchair escorts throughout the complex',
      'Low-threshold examination suites with automated hoist capabilities',
      'Adjacent on-site guest apartments for family members accompanying senior patients'
    ],
    renalCystCare: {
      specializedClinic: 'Memorial Bahçelievler Advanced Cystic Kidney & Robotic Surgery Center',
      bosniakEvaluationAvailable: true,
      geneticTestingPKD: true,
      minimallyInvasiveCystAblation: true,
      sclerotherapyAvailable: true,
      leadTimeWeeks: '1 to 2 weeks advance notice',
      requiredDocuments: [
        'Abdominal CT or MRI DICOM discs with multi-phase contrast studies',
        'Written reports detailing cyst dimensions and vascular enhancement',
        'Latest blood tests: serum creatinine, eGFR, urea, and electrolyte panel',
        'List of current prescriptions and cardiology clearance if available'
      ],
      notes: 'Memorial International Services coordinates rapid airport pickup, bilingual accompaniment, and fast-track appointment scheduling.'
    },
    verification: {
      authority: 'Joint Commission International (JCI) & USGBC (LEED Platinum Certified)',
      accreditationStatus: 'JCI Accredited & First LEED Platinum Hospital in the World',
      officialReference: 'Benchmark medical facility for international patient safety, advanced robotic surgery, and elderly accessibility',
      lastVerifiedDate: '2026'
    }
  }
];
