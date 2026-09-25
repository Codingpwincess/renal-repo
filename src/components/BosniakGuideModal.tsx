import React, { useEffect } from 'react';
import { BOSNIAK_CATEGORIES } from '../data/hospitalsData';
import { ContrastMode, TextSizeMode } from '../types/hospital';
import { X, Volume2, VolumeX, ShieldCheck, AlertCircle, Info, Stethoscope } from 'lucide-react';
import { speakText, stopSpeech } from '../utils/speech';

interface Props {
  onClose: () => void;
  contrastMode: ContrastMode;
  textSize: TextSizeMode;
  isSpeaking: boolean;
  setIsSpeaking: (speaking: boolean) => void;
}

export const BosniakGuideModal: React.FC<Props> = ({
  onClose,
  contrastMode,
  textSize,
  isSpeaking,
  setIsSpeaking,
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
        'Official Bosniak Renal Cyst Classification Guide for Elderly Patients. ' +
        BOSNIAK_CATEGORIES.map(
          (cat) => `${cat.category}: ${cat.title}. Cancer risk: ${cat.riskOfMalignancy}. ${cat.audioSummary}`
        ).join(' ');
      speakText(fullText, setIsSpeaking);
    }
  };

  const handleReadCategory = (cat: typeof BOSNIAK_CATEGORIES[0]) => {
    const text = `${cat.category}: ${cat.title}. Cancer risk: ${cat.riskOfMalignancy}. Imaging description: ${cat.imagingDescription}. Senior management recommendation: ${cat.seniorManagementAdvice}`;
    speakText(text, setIsSpeaking);
  };

  const getRiskBadgeColor = (category: string) => {
    if (category === 'Bosniak I') return isDark ? 'bg-emerald-950 text-emerald-300 border-emerald-500' : 'bg-emerald-100 text-emerald-900 border-emerald-300';
    if (category === 'Bosniak II') return isDark ? 'bg-emerald-950 text-emerald-300 border-emerald-500' : 'bg-emerald-100 text-emerald-900 border-emerald-300';
    if (category === 'Bosniak IIF') return isDark ? 'bg-amber-950 text-amber-300 border-amber-500' : 'bg-amber-100 text-amber-900 border-amber-300';
    if (category === 'Bosniak III') return isDark ? 'bg-orange-950 text-orange-300 border-orange-500' : 'bg-orange-100 text-orange-900 border-orange-300';
    return isDark ? 'bg-red-950 text-red-300 border-red-500' : 'bg-red-100 text-red-900 border-red-300';
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="bosniak-guide-title"
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
                  <span>Listen to Full Guide</span>
                </>
              )}
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

        {/* Content Body */}
        <div className="space-y-6 pt-6">
          <div>
            <div className="flex items-center gap-2.5 text-blue-700 dark:text-yellow-400 font-bold text-lg mb-1">
              <Stethoscope className="w-6 h-6" />
              <span>Diagnostic Reference Guide</span>
            </div>
            <h2 id="bosniak-guide-title" className={titleSize}>
              Bosniak Renal Cyst Classification (2019/2026 Edition)
            </h2>
            <p className={`text-lg sm:text-xl font-semibold mt-2 ${isDark ? 'text-yellow-200' : 'text-blue-900'}`}>
              The international gold standard used by uroradiologists and nephrologists to evaluate kidney cysts on CT and MRI scans.
            </p>
          </div>

          {/* Reassurance Banner for Seniors */}
          <div
            className={`p-5 rounded-2xl border-3 flex items-start gap-4 ${
              isDark
                ? 'bg-neutral-900 border-yellow-400 text-yellow-200'
                : 'bg-emerald-50 border-emerald-500 text-emerald-950'
            }`}
          >
            <ShieldCheck className="w-8 h-8 text-emerald-600 dark:text-yellow-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h3 className="font-extrabold text-lg sm:text-xl">
                Good News for Older Adults:
              </h3>
              <p className="text-base sm:text-lg font-medium leading-relaxed">
                Over 90% of renal cysts discovered in people over 60 are <strong>Bosniak Category I or II</strong>. They are completely benign, will not harm your kidneys, and do not require surgery.
              </p>
            </div>
          </div>

          {/* Categories List */}
          <div className="space-y-5">
            {BOSNIAK_CATEGORIES.map((cat) => (
              <div key={cat.category} className={`p-6 rounded-2xl ${itemBoxBg} space-y-4`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-3 border-slate-200 dark:border-neutral-700">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span className="font-black text-2xl sm:text-3xl text-blue-900 dark:text-yellow-400">
                      {cat.category}
                    </span>
                    <span className="font-extrabold text-xl sm:text-2xl">
                      {cat.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className={`px-3.5 py-1.5 rounded-full text-sm sm:text-base font-extrabold border-2 ${getRiskBadgeColor(cat.category)}`}>
                      Malignancy Risk: {cat.riskOfMalignancy}
                    </span>

                    <button
                      type="button"
                      onClick={() => handleReadCategory(cat)}
                      className="p-2 rounded-lg border hover:bg-slate-200 dark:hover:bg-neutral-800 text-blue-700 dark:text-yellow-400 cursor-pointer"
                      title="Read this category aloud"
                      aria-label={`Read ${cat.category} details aloud`}
                    >
                      <Volume2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <div>
                    <span className="font-extrabold text-base sm:text-lg block opacity-80 uppercase text-xs tracking-wider">
                      Imaging Findings (CT / MRI):
                    </span>
                    <p className={`${bodySize} font-medium`}>
                      {cat.imagingDescription}
                    </p>
                  </div>

                  <div className="pt-2">
                    <span className="font-extrabold text-base sm:text-lg block opacity-80 uppercase text-xs tracking-wider text-blue-800 dark:text-yellow-300">
                      Recommended Senior Patient Care Plan:
                    </span>
                    <p className={`${bodySize} font-semibold text-slate-800 dark:text-neutral-200`}>
                      {cat.seniorManagementAdvice}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl border border-slate-300 dark:border-neutral-700 text-sm sm:text-base font-medium opacity-85 text-center">
            Note: Ultrasound alone can sometimes suggest false septations due to sound artifact. If an ultrasound reports a complex cyst, request a dedicated Renal Protocol Contrast CT or MRI for definitive Bosniak verification.
          </div>
        </div>
      </div>
    </div>
  );
};
