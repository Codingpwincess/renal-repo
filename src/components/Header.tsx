import React from 'react';
import { Bookmark, Printer, FileText, Volume2, ShieldCheck, Stethoscope, BookOpen } from 'lucide-react';
import { ContrastMode, TextSizeMode } from '../types/hospital';
import { speakText } from '../utils/speech';

interface HeaderProps {
  savedCount: number;
  onOpenSaved: () => void;
  onOpenChecklist: () => void;
  onOpenBosniakGuide: () => void;
  onPrint: () => void;
  contrastMode: ContrastMode;
  textSize: TextSizeMode;
  isSpeaking: boolean;
  setIsSpeaking: (speaking: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  savedCount,
  onOpenSaved,
  onOpenChecklist,
  onOpenBosniakGuide,
  onPrint,
  contrastMode,
  textSize,
  isSpeaking,
  setIsSpeaking,
}) => {
  const isDark = contrastMode === 'high-contrast-dark';
  const isMono = contrastMode === 'high-contrast-light';

  const headerBg = isDark
    ? 'bg-black border-yellow-400 text-white'
    : isMono
    ? 'bg-black text-white border-black'
    : 'bg-blue-950 text-white border-blue-900';

  const titleSizeClass =
    textSize === 'extralarge'
      ? 'text-3xl sm:text-5xl font-black tracking-tight'
      : textSize === 'large'
      ? 'text-2xl sm:text-4xl font-extrabold tracking-tight'
      : 'text-2xl sm:text-3xl font-extrabold tracking-tight';

  const handleReadGuide = () => {
    const guide =
      'Welcome to the Renal Cyst Global Directory. This verified directory contains leading international hospitals specialized in kidney cysts, complex Bosniak cystic masses, and polycystic kidney disease for elderly patients. In seniors over sixty, simple cysts are found in up to half the population and are almost always harmless. Use the directory below to find specialized cyst clinics, direct international phone numbers, and Bosniak evaluation services. You can tap Read Aloud on any card or open the Bosniak Classification Guide.';
    speakText(guide, setIsSpeaking);
  };

  const navButtonBase =
    'flex items-center justify-center gap-2.5 px-4 py-2.5 min-h-[48px] rounded-xl font-bold transition-all text-base focus-visible:ring-4 cursor-pointer';

  const primaryBtnStyle = isDark
    ? 'bg-yellow-400 hover:bg-yellow-300 text-black ring-yellow-400'
    : isMono
    ? 'bg-white hover:bg-neutral-200 text-black ring-white'
    : 'bg-emerald-600 hover:bg-emerald-500 text-white ring-emerald-300 shadow';

  const secondaryBtnStyle = isDark
    ? 'bg-neutral-900 hover:bg-neutral-800 text-yellow-300 border-2 border-yellow-400 ring-yellow-400'
    : isMono
    ? 'bg-neutral-900 hover:bg-neutral-800 text-white border-2 border-white ring-white'
    : 'bg-blue-900 hover:bg-blue-800 text-white border-2 border-blue-700 ring-blue-400 shadow-sm';

  const accentBtnStyle = isDark
    ? 'bg-amber-400 hover:bg-amber-300 text-black font-extrabold ring-amber-300'
    : isMono
    ? 'bg-neutral-800 hover:bg-neutral-700 text-white border-2 border-white'
    : 'bg-indigo-600 hover:bg-indigo-500 text-white font-bold ring-indigo-300 shadow';

  return (
    <header className={`border-b-4 ${headerBg} py-6 sm:py-8 px-4 sm:px-8 no-print`}>
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        {/* Top Header Row: Branding and Key Trust Badges */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div
                className={`p-2.5 rounded-xl ${
                  isDark ? 'bg-yellow-400 text-black' : isMono ? 'bg-white text-black' : 'bg-blue-600 text-white'
                }`}
              >
                <Stethoscope className="w-8 h-8 sm:w-10 sm:h-10" aria-hidden="true" />
              </div>
              <div>
                <h1 className={titleSizeClass}>
                  Renal Cyst Global Directory
                </h1>
                <p
                  className={`text-base sm:text-xl font-medium mt-1 ${
                    isDark ? 'text-yellow-200' : isMono ? 'text-neutral-200' : 'text-blue-100'
                  }`}
                >
                  Verified International Hospitals for Simple Cysts, Complex Bosniak Masses &amp; Polycystic Kidney Disease (ADPKD)
                </p>
              </div>
            </div>

            {/* Verification Guarantee */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-1 text-sm sm:text-base font-semibold">
              <span className={`inline-flex items-center gap-1.5 ${isDark ? 'text-yellow-400' : isMono ? 'text-white' : 'text-emerald-300'}`}>
                <ShieldCheck className="w-5 h-5 shrink-0" aria-hidden="true" />
                100% Real Accredited Renal Cyst Centers
              </span>
              <span aria-hidden="true" className="opacity-50">·</span>
              <span className={isDark ? 'text-yellow-100' : isMono ? 'text-neutral-200' : 'text-blue-200'}>
                Bosniak Classification CT/MRI Specialists
              </span>
              <span aria-hidden="true" className="opacity-50">·</span>
              <span className={isDark ? 'text-yellow-100' : isMono ? 'text-neutral-200' : 'text-blue-200'}>
                Minimally Invasive Sclerotherapy &amp; Sparing Care
              </span>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {/* Bosniak Classification Guide */}
            <button
              type="button"
              onClick={onOpenBosniakGuide}
              className={`${navButtonBase} ${accentBtnStyle}`}
              aria-label="Open Bosniak Renal Cyst Classification Guide"
            >
              <BookOpen className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>Bosniak Guide</span>
            </button>

            {/* Audio Introduction */}
            <button
              type="button"
              onClick={handleReadGuide}
              className={`${navButtonBase} ${secondaryBtnStyle}`}
              aria-label="Listen to directory guide audio"
            >
              <Volume2 className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>{isSpeaking ? 'Listening...' : 'Listen to Guide'}</span>
            </button>

            {/* Senior Cyst Checklist */}
            <button
              type="button"
              onClick={onOpenChecklist}
              className={`${navButtonBase} ${secondaryBtnStyle}`}
              aria-label="Open renal cyst consultation and travel checklist"
            >
              <FileText className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>Cyst Guide</span>
            </button>

            {/* Saved Hospitals */}
            <button
              type="button"
              onClick={onOpenSaved}
              className={`${navButtonBase} ${primaryBtnStyle} relative`}
              aria-label={`View your saved hospitals, ${savedCount} saved`}
            >
              <Bookmark className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>My Cyst Centers</span>
              <span
                className={`ml-1 px-2.5 py-0.5 rounded-full text-sm font-extrabold ${
                  isDark ? 'bg-black text-yellow-400' : isMono ? 'bg-black text-white' : 'bg-white text-emerald-800'
                }`}
              >
                {savedCount}
              </span>
            </button>

            {/* Print Care Sheet */}
            <button
              type="button"
              onClick={onPrint}
              className={`${navButtonBase} ${secondaryBtnStyle}`}
              title="Print a high-contrast care sheet for doctor visits"
              aria-label="Print high contrast hospital care sheet"
            >
              <Printer className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>Print Sheet</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
