import React, { useEffect } from 'react';
import { Hospital, ContrastMode, TextSizeMode } from '../types/hospital';
import { X, Printer, Phone, Trash2, ChevronRight, BookmarkCheck, ExternalLink, Stethoscope } from 'lucide-react';
import { stopSpeech } from '../utils/speech';

interface Props {
  savedHospitals: Hospital[];
  onClose: () => void;
  onRemove: (hospitalId: string) => void;
  onClearAll: () => void;
  onViewDetails: (hospital: Hospital) => void;
  onPrint: () => void;
  contrastMode: ContrastMode;
  textSize: TextSizeMode;
}

export const SavedHospitalsModal: React.FC<Props> = ({
  savedHospitals,
  onClose,
  onRemove,
  onClearAll,
  onViewDetails,
  onPrint,
  contrastMode,
  textSize,
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

  const cardBg = isDark
    ? 'bg-neutral-900 border-2 border-neutral-700'
    : isMono
    ? 'bg-neutral-50 border-2 border-black'
    : 'bg-slate-50 border-2 border-slate-200';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="saved-list-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
    >
      <div className={`w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl p-6 sm:p-10 my-auto transition-all ${modalBg}`}>
        {/* Header */}
        <div className="flex items-center justify-between gap-4 pb-6 border-b-2 border-slate-200 dark:border-neutral-800 sticky top-0 bg-inherit z-10">
          <div className="flex items-center gap-3">
            <BookmarkCheck className="w-8 h-8 text-emerald-600 dark:text-yellow-400" />
            <h2 id="saved-list-title" className={titleSize}>
              My Saved Renal Cyst Centers ({savedHospitals.length})
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
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

        {/* Content */}
        <div className="space-y-6 pt-6">
          {savedHospitals.length === 0 ? (
            <div className="text-center py-12 space-y-4">
              <p className="text-xl sm:text-2xl font-bold opacity-80">
                You have not saved any renal cyst centers to your care list yet.
              </p>
              <p className="text-base sm:text-lg opacity-70">
                Tap the bookmark icon on any hospital card in the directory to save it here for easy review and printing.
              </p>
            </div>
          ) : (
            <>
              {/* Quick Actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-2">
                <button
                  type="button"
                  onClick={onPrint}
                  className="px-5 py-3 min-h-[48px] rounded-xl font-extrabold text-base sm:text-lg flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white shadow cursor-pointer dark:bg-yellow-400 dark:text-black"
                >
                  <Printer className="w-5 h-5" />
                  <span>Print My Saved Hospital Sheet</span>
                </button>

                <button
                  type="button"
                  onClick={onClearAll}
                  className="px-4 py-2 min-h-[44px] text-base font-bold text-red-600 dark:text-red-400 hover:underline flex items-center gap-1.5 cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Clear all saved</span>
                </button>
              </div>

              {/* Saved Hospital List */}
              <div className="space-y-4">
                {savedHospitals.map((hospital) => (
                  <div key={hospital.id} className={`p-6 rounded-2xl ${cardBg} space-y-4`}>
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{hospital.flag}</span>
                          <span className="font-extrabold text-base uppercase opacity-80">
                            {hospital.country} · {hospital.city}
                          </span>
                        </div>
                        <h3 className="text-2xl font-black mt-1">
                          {hospital.name}
                        </h3>
                        <p className="font-semibold text-base sm:text-lg text-blue-800 dark:text-yellow-300">
                          {hospital.renalCystCare.specializedClinic}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => onRemove(hospital.id)}
                        className="self-start sm:self-auto px-3 py-2 text-sm font-bold text-red-600 hover:bg-red-50 dark:hover:bg-neutral-800 rounded-lg flex items-center gap-1.5"
                        aria-label={`Remove ${hospital.name} from list`}
                      >
                        <Trash2 className="w-4 h-4" />
                        <span>Remove</span>
                      </button>
                    </div>

                    {/* Direct Phone & Address */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-base font-medium">
                      <div>
                        <span className="font-bold block opacity-75 text-sm uppercase">International Phone:</span>
                        <a href={`tel:${hospital.internationalPhone.replace(/\s+/g, '')}`} className="font-black text-xl text-blue-700 dark:text-yellow-400">
                          {hospital.internationalPhone}
                        </a>
                      </div>
                      <div>
                        <span className="font-bold block opacity-75 text-sm uppercase">Address:</span>
                        <span>{hospital.address}</span>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-300 dark:border-neutral-700">
                      <button
                        type="button"
                        onClick={() => {
                          onClose();
                          onViewDetails(hospital);
                        }}
                        className="px-4 py-2.5 min-h-[44px] rounded-lg font-bold text-base flex items-center gap-2 bg-slate-200 dark:bg-neutral-800 hover:bg-slate-300 dark:hover:bg-neutral-700 cursor-pointer"
                      >
                        <span>View Full Details &amp; Scans</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      <a
                        href={hospital.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 min-h-[44px] text-base font-bold underline flex items-center gap-1.5"
                      >
                        <span>Official Website</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
