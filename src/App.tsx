import React, { useState, useEffect, useMemo } from 'react';
import { HOSPITALS_DATA } from './data/hospitalsData';
import { Hospital, ContrastMode, TextSizeMode } from './types/hospital';
import { SeniorAccessibilityBar } from './components/SeniorAccessibilityBar';
import { Header } from './components/Header';
import { SearchAndFilterBar } from './components/SearchAndFilterBar';
import { HospitalCard } from './components/HospitalCard';
import { HospitalDetailModal } from './components/HospitalDetailModal';
import { RenalCystChecklistModal } from './components/RenalCystChecklistModal';
import { BosniakGuideModal } from './components/BosniakGuideModal';
import { SavedHospitalsModal } from './components/SavedHospitalsModal';
import { PrintableView } from './components/PrintableView';
import { speakText, stopSpeech } from './utils/speech';
import { ShieldCheck, Stethoscope, HelpCircle, BookOpen, AlertCircle } from 'lucide-react';

export default function App() {
  // Accessibility state with localStorage persistence
  const [textSize, setTextSize] = useState<TextSizeMode>(() => {
    return (localStorage.getItem('renal_text_size') as TextSizeMode) || 'large';
  });

  const [contrastMode, setContrastMode] = useState<ContrastMode>(() => {
    return (localStorage.getItem('renal_contrast_mode') as ContrastMode) || 'default';
  });

  // Saved hospitals state with localStorage persistence
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('renal_saved_cysts_hospitals');
      return saved ? JSON.parse(saved) : ['mayo-clinic', 'cambridge-addenbrookes'];
    } catch {
      return ['mayo-clinic', 'cambridge-addenbrookes'];
    }
  });

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [selectedCystType, setSelectedCystType] = useState('All Cyst Conditions');

  // Modals
  const [activeHospitalModal, setActiveHospitalModal] = useState<Hospital | null>(null);
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);
  const [isBosniakGuideOpen, setIsBosniakGuideOpen] = useState(false);
  const [isSavedModalOpen, setIsSavedModalOpen] = useState(false);

  // Audio speech synthesis state
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speakingHospitalId, setSpeakingHospitalId] = useState<string | null>(null);

  // Save preferences
  useEffect(() => {
    localStorage.setItem('renal_text_size', textSize);
  }, [textSize]);

  useEffect(() => {
    localStorage.setItem('renal_contrast_mode', contrastMode);
  }, [contrastMode]);

  useEffect(() => {
    localStorage.setItem('renal_saved_cysts_hospitals', JSON.stringify(savedIds));
  }, [savedIds]);

  // Handle Speech Stop
  const handleStopSpeech = () => {
    stopSpeech();
    setIsSpeaking(false);
    setSpeakingHospitalId(null);
  };

  const handleStartSpeaking = (id: string, text: string) => {
    setSpeakingHospitalId(id);
    speakText(text, (speaking) => {
      setIsSpeaking(speaking);
      if (!speaking) {
        setSpeakingHospitalId(null);
      }
    });
  };

  // Toggle Hospital Saved
  const handleToggleSave = (hospital: Hospital) => {
    setSavedIds((prev) => {
      if (prev.includes(hospital.id)) {
        return prev.filter((id) => id !== hospital.id);
      } else {
        return [...prev, hospital.id];
      }
    });
  };

  const handleRemoveSaved = (hospitalId: string) => {
    setSavedIds((prev) => prev.filter((id) => id !== hospitalId));
  };

  const handleClearAllSaved = () => {
    setSavedIds([]);
  };

  // Filtered hospitals
  const filteredHospitals = useMemo(() => {
    return HOSPITALS_DATA.filter((h) => {
      // Region check
      if (selectedRegion !== 'All Regions' && h.region !== selectedRegion) {
        return false;
      }

      // Cyst Condition / Treatment filter
      if (selectedCystType !== 'All Cyst Conditions') {
        const queryTerm = selectedCystType.toLowerCase();
        let matchesType = false;

        if (queryTerm.includes('bosniak')) {
          matchesType =
            h.renalCystCare.bosniakEvaluationAvailable ||
            h.cystSpecialties.some((s) => s.toLowerCase().includes('bosniak'));
        } else if (queryTerm.includes('polycystic') || queryTerm.includes('adpkd')) {
          matchesType =
            h.renalCystCare.geneticTestingPKD ||
            h.cystSpecialties.some((s) => s.toLowerCase().includes('polycystic') || s.toLowerCase().includes('pkd'));
        } else if (queryTerm.includes('sclerotherapy')) {
          matchesType =
            h.renalCystCare.sclerotherapyAvailable ||
            h.cystTreatmentsOffered.some((t) => t.toLowerCase().includes('sclero') || t.toLowerCase().includes('aspiration'));
        } else if (queryTerm.includes('robotic') || queryTerm.includes('decortication')) {
          matchesType =
            h.cystTreatmentsOffered.some((t) => t.toLowerCase().includes('decortication') || t.toLowerCase().includes('robotic') || t.toLowerCase().includes('unroofing'));
        } else if (queryTerm.includes('simple')) {
          matchesType =
            h.cystSpecialties.some((s) => s.toLowerCase().includes('simple')) ||
            h.overview.toLowerCase().includes('simple');
        } else if (queryTerm.includes('preservation')) {
          matchesType =
            h.seniorAccessibility.length > 0 ||
            h.cystSpecialties.some((s) => s.toLowerCase().includes('preservation') || s.toLowerCase().includes('geriatric'));
        } else {
          matchesType = true;
        }

        if (!matchesType) return false;
      }

      // Search query check (Country, City, Name, Department, Overview, Specialties)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matches =
          h.name.toLowerCase().includes(q) ||
          h.country.toLowerCase().includes(q) ||
          h.city.toLowerCase().includes(q) ||
          h.department.toLowerCase().includes(q) ||
          h.renalCystCare.specializedClinic.toLowerCase().includes(q) ||
          h.cystSpecialties.some((s) => s.toLowerCase().includes(q)) ||
          h.cystTreatmentsOffered.some((t) => t.toLowerCase().includes(q)) ||
          h.overview.toLowerCase().includes(q);

        if (!matches) return false;
      }

      return true;
    });
  }, [searchQuery, selectedRegion, selectedCystType]);

  const savedHospitalsList = useMemo(() => {
    return HOSPITALS_DATA.filter((h) => savedIds.includes(h.id));
  }, [savedIds]);

  const handlePrint = () => {
    window.print();
  };

  // Theme-specific wrapper classes
  const isDark = contrastMode === 'high-contrast-dark';
  const isMono = contrastMode === 'high-contrast-light';

  const appBg = isDark
    ? 'bg-black text-white'
    : isMono
    ? 'bg-white text-black'
    : 'bg-slate-100 text-slate-900';

  const footerBg = isDark
    ? 'bg-neutral-950 border-t-2 border-yellow-400 text-yellow-200'
    : isMono
    ? 'bg-black text-white border-t-4 border-black'
    : 'bg-slate-900 text-slate-100 border-t-4 border-blue-900';

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors ${appBg}`}>
      {/* 1. Top Senior Accessibility Toolbar (Always visible) */}
      <SeniorAccessibilityBar
        textSize={textSize}
        setTextSize={setTextSize}
        contrastMode={contrastMode}
        setContrastMode={setContrastMode}
        isSpeaking={isSpeaking}
        onStopSpeech={handleStopSpeech}
      />

      {/* 2. Main Header */}
      <Header
        savedCount={savedIds.length}
        onOpenSaved={() => setIsSavedModalOpen(true)}
        onOpenChecklist={() => setIsChecklistOpen(true)}
        onOpenBosniakGuide={() => setIsBosniakGuideOpen(true)}
        onPrint={handlePrint}
        contrastMode={contrastMode}
        textSize={textSize}
        isSpeaking={isSpeaking}
        setIsSpeaking={setIsSpeaking}
      />

      {/* 3. Main Content Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-8 space-y-8 no-print">
        {/* Search and Filters */}
        <SearchAndFilterBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          selectedCystType={selectedCystType}
          setSelectedCystType={setSelectedCystType}
          totalCount={HOSPITALS_DATA.length}
          filteredCount={filteredHospitals.length}
          contrastMode={contrastMode}
          textSize={textSize}
          onOpenBosniakGuide={() => setIsBosniakGuideOpen(true)}
        />

        {/* Directory Grid */}
        <section aria-label="International Renal Cyst Hospitals Directory">
          {filteredHospitals.length === 0 ? (
            <div
              className={`text-center py-16 px-6 rounded-3xl border-3 ${
                isDark
                  ? 'bg-neutral-950 border-neutral-800 text-white'
                  : 'bg-white border-slate-300 text-slate-800'
              }`}
            >
              <HelpCircle className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h2 className="text-2xl sm:text-3xl font-black">
                No hospitals matched your cyst search
              </h2>
              <p className="text-lg sm:text-xl font-medium mt-2 max-w-xl mx-auto opacity-80">
                Try resetting your filters or selecting &quot;All Regions&quot; to browse all {HOSPITALS_DATA.length} verified international renal cyst institutions.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedRegion('All Regions');
                  setSelectedCystType('All Cyst Conditions');
                }}
                className="mt-6 px-6 py-3 min-h-[48px] rounded-xl font-extrabold text-lg bg-blue-700 text-white hover:bg-blue-800 dark:bg-yellow-400 dark:text-black cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {filteredHospitals.map((hospital) => (
                <HospitalCard
                  key={hospital.id}
                  hospital={hospital}
                  isSaved={savedIds.includes(hospital.id)}
                  onToggleSave={handleToggleSave}
                  onViewDetails={setActiveHospitalModal}
                  contrastMode={contrastMode}
                  textSize={textSize}
                  isSpeakingThis={speakingHospitalId === hospital.id}
                  onStartSpeaking={handleStartSpeaking}
                  onStopSpeaking={handleStopSpeech}
                />
              ))}
            </div>
          )}
        </section>

        {/* Informative Guidance Banner for Seniors & Family */}
        <section
          aria-label="Senior Renal Cyst Guidance"
          className={`p-6 sm:p-8 rounded-3xl border-3 ${
            isDark
              ? 'bg-neutral-900 border-yellow-400 text-white'
              : isMono
              ? 'bg-neutral-50 border-black text-black'
              : 'bg-blue-50 border-blue-400 text-blue-950'
          }`}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Stethoscope className="w-8 h-8 text-blue-700 dark:text-yellow-400 shrink-0" />
                <h2 className="text-2xl sm:text-3xl font-black">
                  Understanding Your Kidney Cyst Diagnosis
                </h2>
              </div>
              <p className="text-lg sm:text-xl font-medium max-w-3xl leading-relaxed">
                Simple renal cysts are very common with age and typically cause no symptoms. However, if your doctor mentioned &quot;septations&quot;, &quot;wall thickening&quot;, or &quot;Bosniak category&quot;, consulting a specialized uroradiology and nephrology center can help confirm whether gentle surveillance or minimally invasive sclerotherapy is best.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setIsBosniakGuideOpen(true)}
                className="px-6 py-3.5 min-h-[50px] rounded-xl font-extrabold text-lg bg-indigo-700 hover:bg-indigo-800 text-white shadow-md dark:bg-yellow-400 dark:text-black cursor-pointer"
              >
                Bosniak Classification
              </button>
              <button
                type="button"
                onClick={() => setIsChecklistOpen(true)}
                className="px-6 py-3.5 min-h-[50px] rounded-xl font-extrabold text-lg bg-blue-700 hover:bg-blue-800 text-white shadow-md dark:bg-neutral-800 dark:text-yellow-300 dark:border-2 dark:border-yellow-400 cursor-pointer"
              >
                Senior Consultation Guide
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* 4. Accessible Footer */}
      <footer className={`py-12 px-4 sm:px-8 mt-12 no-print ${footerBg}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2 font-black text-xl sm:text-2xl">
              <ShieldCheck className="w-7 h-7 text-emerald-400 dark:text-yellow-400" />
              <span>Renal Cyst Global Directory</span>
            </div>
            <p className="text-base sm:text-lg font-medium opacity-90 max-w-2xl">
              Dedicated to helping elderly patients and their families locate genuine, accredited international renal cyst and kidney tumor centers with verified contact lines and accessible facilities.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 text-sm sm:text-base font-semibold">
            <span>© 2026 Renal Cyst Global Directory</span>
            <span className="opacity-75">All medical records and DICOM scan interpretations must be reviewed by your attending nephrologist or urologist.</span>
          </div>
        </div>
      </footer>

      {/* 5. Modals */}
      {/* Detailed Hospital Profile Modal */}
      {activeHospitalModal && (
        <HospitalDetailModal
          hospital={activeHospitalModal}
          onClose={() => setActiveHospitalModal(null)}
          isSaved={savedIds.includes(activeHospitalModal.id)}
          onToggleSave={handleToggleSave}
          contrastMode={contrastMode}
          textSize={textSize}
          isSpeaking={isSpeaking}
          setIsSpeaking={setIsSpeaking}
        />
      )}

      {/* Bosniak Classification Guide Modal */}
      {isBosniakGuideOpen && (
        <BosniakGuideModal
          onClose={() => setIsBosniakGuideOpen(false)}
          contrastMode={contrastMode}
          textSize={textSize}
          isSpeaking={isSpeaking}
          setIsSpeaking={setIsSpeaking}
        />
      )}

      {/* Renal Cyst Consultation Checklist Modal */}
      {isChecklistOpen && (
        <RenalCystChecklistModal
          onClose={() => setIsChecklistOpen(false)}
          contrastMode={contrastMode}
          textSize={textSize}
          isSpeaking={isSpeaking}
          setIsSpeaking={setIsSpeaking}
          onPrint={handlePrint}
        />
      )}

      {/* Saved Care List Modal */}
      {isSavedModalOpen && (
        <SavedHospitalsModal
          savedHospitals={savedHospitalsList}
          onClose={() => setIsSavedModalOpen(false)}
          onRemove={handleRemoveSaved}
          onClearAll={handleClearAllSaved}
          onViewDetails={(h) => {
            setIsSavedModalOpen(false);
            setActiveHospitalModal(h);
          }}
          onPrint={handlePrint}
          contrastMode={contrastMode}
          textSize={textSize}
        />
      )}

      {/* 6. Printable View (Visible only during window.print) */}
      <PrintableView
        hospitals={savedHospitalsList.length > 0 ? savedHospitalsList : filteredHospitals}
        isSavedOnly={savedHospitalsList.length > 0}
      />
    </div>
  );
}
