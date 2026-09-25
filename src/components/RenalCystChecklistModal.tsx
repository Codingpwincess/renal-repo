import React, { useEffect } from 'react';
import { SENIOR_RENAL_CYST_GUIDELINES } from '../data/hospitalsData';
import { ContrastMode, TextSizeMode } from '../types/hospital';
import { X, Volume2, VolumeX, Printer, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { speakText, stopSpeech } from '../utils/speech';

interface Props {
  onClose: () => void;
  contrastMode: ContrastMode;
  textSize: TextSizeMode;
  isSpeaking: boolean;
  setIsSpeaking: (speaking: boolean) => void;
  onPrint: () => void;
}

export const RenalCystChecklistModal: React.FC<Props> = ({
  onClose,
  contrastMode,
  textSize,
  isSpeaking,
  setIsSpeaking,
  onPrint,
}) => {
  const isDark = contrastMode === 'high-contrast-dark';
  const isMono = contrastMode === 'high-contrast-light';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        stopSpeech();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const modalBg = isDark
    ? 'bg-neutral-950 border-2 border-yellow-400 text-white'
    : isMono
    ? 'bg-white border-4 border-black text-black'
    : 'bg-white border-2 border-slate-300 text-slate-900 shadow-2xl';

  const titleSize =
    textSize === 'extralarge'
      ? 'text-3xl sm:text-5xl font-black'
      : textSize === 'large'
      ? 'text-2xl sm:text-4xl font-extrabold'
      : 'text-2xl sm:text-3xl font-extrabold';

  const bodySize =
    textSize === 'extralarge'
      ? 'text-xl sm:text-2xl leading-relaxed'
      : textSize === 'large'
      ? 'text-lg sm:text-xl leading-relaxed'
      : 'text-base sm:text-lg leading-relaxed';

  const itemBoxBg = isDark
    ? 'bg-neutral-900 border-2 border-neutral-700'
    : isMono
    ? 'bg-neutral-50 border-2 border-black'
    : 'bg-slate-50 border-2 border-slate-200';

  const handleReadAll = () => {
    if (isSpeaking) {
      stopSpeech();
    } else {
      const fullText =
        'Senior Renal Cyst Consultation Checklist and Guidelines. ' +
        SENIOR_RENAL_CYST_GUIDELINES.map((item) => `${item.step}: ${item.title}. ${item.audioText}`).join(' ');
      speakText(fullText, setIsSpeaking);
    }
  };

  const handleReadStep = (stepText: string) => {
    speakText(stepText, setIsSpeaking);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="checklist-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
    >
      <div className={`w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl p-6 sm:p-10 my-auto transition-all ${modalBg}`}>
        {/* Top Header */}
        <div className="flex items-center justify-between gap-4 pb-6 border-b-2 border-slate-200 dark:border-neutral-800 sticky top-0 bg-inherit z-10">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleReadAll}
              className={`px-4 py-2.5 min-h-[46px] rounded-xl font-bold text-base flex items-center gap-2 cursor-pointer ${
                isSpeaking
                  ? 'bg-amber-600 text-white animate-pulse'
                  : isDark
                  ? 'bg-neutral-800 text-yellow-300 border-2 border-yellow-400'
                  : 'bg-blue-100 hover:bg-blue-200 text-blue-900 border-2 border-blue-300'
              }`}
            >
              {isSpeaking ? (
                <>
                  <VolumeX className="w-5 h-5 shrink-0" />
                  <span>Stop Voice</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-5 h-5 shrink-0" />
                  <span>Listen to Checklist</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onPrint}
              className={`px-4 py-2.5 min-h-[46px] rounded-xl font-bold text-base flex items-center gap-2 cursor-pointer ${
                isDark
                  ? 'bg-neutral-800 text-yellow-300 border-2 border-yellow-400'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-2 border-slate-300'
              }`}
            >
              <Printer className="w-5 h-5 shrink-0" />
              <span>Print Checklist</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              stopSpeech();
              onClose();
            }}
            className={`px-4 py-2.5 min-h-[46px] rounded-xl font-extrabold text-base sm:text-lg flex items-center gap-2 cursor-pointer ${
              isDark
                ? 'bg-neutral-800 text-yellow-300 hover:bg-neutral-700'
                : isMono
                ? 'bg-black text-white hover:bg-neutral-800'
                : 'bg-slate-200 hover:bg-slate-300 text-slate-900'
            }`}
          >
            <span>Close</span>
            <X className="w-6 h-6 shrink-0" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="space-y-6 pt-6">
          <div>
            <h2 id="checklist-title" className={titleSize}>
              Senior Renal Cyst Consultation &amp; Travel Guide
            </h2>
            <p className={`text-lg sm:text-xl font-semibold mt-2 ${isDark ? 'text-yellow-200' : 'text-blue-900'}`}>
              Essential advice for elderly patients consulting international experts for simple kidney cysts, complex Bosniak lesions, or polycystic kidney disease (ADPKD).
            </p>
          </div>

          {/* Safety Rule */}
          <div
            className={`p-5 rounded-2xl border-3 flex items-start gap-4 ${
              isDark
                ? 'bg-neutral-900 border-yellow-400 text-yellow-200'
                : 'bg-blue-50 border-blue-500 text-blue-950'
            }`}
          >
            <ShieldAlert className="w-8 h-8 text-blue-600 dark:text-yellow-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h3 className="font-extrabold text-lg sm:text-xl">
                Geriatric Nephron Preservation Principle:
              </h3>
              <p className="text-base sm:text-lg font-medium leading-relaxed">
                In older adults, preserving baseline kidney filtration rate (eGFR) is a top clinical priority. International renal cyst centers favor watchful image surveillance, percutaneous sclerotherapy, or robotic partial unroofing over radical kidney removal.
              </p>
            </div>
          </div>

          {/* Checklist Items */}
          <div className="space-y-4">
            {SENIOR_RENAL_CYST_GUIDELINES.map((item) => (
              <div key={item.step} className={`p-6 rounded-2xl ${itemBoxBg} space-y-3`}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-black text-lg ${
                        isDark ? 'bg-yellow-400 text-black' : 'bg-blue-700 text-white'
                      }`}
                    >
                      {item.step}
                    </span>
                    <h3 className="font-extrabold text-xl sm:text-2xl">
                      {item.title}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleReadStep(item.audioText)}
                    className="p-2.5 rounded-lg border hover:bg-slate-200 dark:hover:bg-neutral-800 text-blue-700 dark:text-yellow-400 cursor-pointer"
                    aria-label={`Listen to step ${item.step}: ${item.title}`}
                    title="Read this guideline aloud"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>

                <p className={`${bodySize} font-medium`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4 text-center font-bold text-base sm:text-lg opacity-80">
            Always review your full imaging discs (DICOM files) with your primary nephrologist or urologist before undergoing any invasive procedure.
          </div>
        </div>
      </div>
    </div>
  );
};
