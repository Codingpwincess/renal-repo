import React, { useEffect } from 'react';
import { Hospital, ContrastMode, TextSizeMode } from '../types/hospital';
import {
  X,
  Phone,
  MapPin,
  Globe,
  ExternalLink,
  ShieldCheck,
  CalendarCheck,
  FileText,
  Languages,
  Accessibility,
  Bookmark,
  BookmarkCheck,
  Volume2,
  VolumeX,
  Copy,
  Check,
  AlertTriangle,
  Stethoscope,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { speakText, stopSpeech } from '../utils/speech';

interface Props {
  hospital: Hospital;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (hospital: Hospital) => void;
  contrastMode: ContrastMode;
  textSize: TextSizeMode;
  isSpeaking: boolean;
  setIsSpeaking: (speaking: boolean) => void;
}

export const HospitalDetailModal: React.FC<Props> = ({
  hospital,
  onClose,
  isSaved,
  onToggleSave,
  contrastMode,
  textSize,
  isSpeaking,
  setIsSpeaking,
}) => {
  const [copiedAddress, setCopiedAddress] = React.useState(false);
  const [copiedPhone, setCopiedPhone] = React.useState(false);

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

  const sectionHeaderSize =
    textSize === 'extralarge'
      ? 'text-2xl sm:text-3xl font-black'
      : textSize === 'large'
      ? 'text-xl sm:text-2xl font-extrabold'
      : 'text-lg sm:text-xl font-bold';

  const bodySize =
    textSize === 'extralarge'
      ? 'text-xl sm:text-2xl leading-relaxed'
      : textSize === 'large'
      ? 'text-lg sm:text-xl leading-relaxed'
      : 'text-base sm:text-lg leading-relaxed';

  const sectionBoxBg = isDark
    ? 'bg-neutral-900 border-2 border-neutral-700'
    : isMono
    ? 'bg-neutral-50 border-2 border-black'
    : 'bg-slate-50 border-2 border-slate-200';

  const primaryBtn = isDark
    ? 'bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold ring-yellow-400'
    : isMono
    ? 'bg-black hover:bg-neutral-800 text-white font-extrabold ring-black'
    : 'bg-blue-700 hover:bg-blue-800 text-white font-bold ring-blue-500 shadow';

  const secondaryBtn = isDark
    ? 'bg-neutral-900 hover:bg-neutral-800 text-yellow-300 border-2 border-yellow-400'
    : isMono
    ? 'bg-white hover:bg-neutral-100 text-black border-2 border-black'
    : 'bg-white hover:bg-slate-100 text-slate-800 border-2 border-slate-300';

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(hospital.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(hospital.internationalPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleReadFullDetails = () => {
    if (isSpeaking) {
      stopSpeech();
    } else {
      const fullSpeech = `Complete renal cyst profile for ${hospital.name}, located at ${hospital.address}. Department: ${hospital.department}. Dedicated clinic: ${hospital.renalCystCare.specializedClinic}. International patient telephone: ${hospital.internationalPhone}. Hospital switchboard: ${hospital.primaryPhone}. Overview: ${hospital.overview}. Treatments offered: ${hospital.cystTreatmentsOffered.join(', ')}. Required documents: ${hospital.renalCystCare.requiredDocuments.join(', ')}. Accreditation: ${hospital.verification.authority}, verified status: ${hospital.verification.officialReference}. Senior accessibility features include: ${hospital.seniorAccessibility.join(', ')}.`;
      speakText(fullSpeech, setIsSpeaking);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-hospital-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
    >
      <div
        className={`w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl p-6 sm:p-10 my-auto transition-all ${modalBg}`}
      >
        {/* Top Bar with Close and Audio Controls */}
        <div className="flex items-center justify-between gap-4 pb-6 border-b-2 border-slate-200 dark:border-neutral-800 sticky top-0 bg-inherit z-10">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleReadFullDetails}
              className={`px-4 py-2.5 min-h-[46px] rounded-xl font-bold text-base flex items-center gap-2 transition-all cursor-pointer ${
                isSpeaking ? 'bg-amber-600 text-white animate-pulse' : secondaryBtn
              }`}
              aria-label={isSpeaking ? 'Stop reading' : 'Listen to entire hospital profile'}
            >
              {isSpeaking ? (
                <>
                  <VolumeX className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>Stop Voice</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>Read Profile Aloud</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => onToggleSave(hospital)}
              className={`px-4 py-2.5 min-h-[46px] rounded-xl font-bold text-base flex items-center gap-2 transition-all cursor-pointer ${
                isSaved
                  ? isDark
                    ? 'bg-yellow-400 text-black'
                    : isMono
                    ? 'bg-black text-white'
                    : 'bg-emerald-600 text-white'
                  : secondaryBtn
              }`}
            >
              {isSaved ? <BookmarkCheck className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
              <span>{isSaved ? 'In Care List' : 'Save to List'}</span>
            </button>
          </div>

          {/* Big Close Button */}
          <button
            type="button"
            onClick={() => {
              stopSpeech();
              onClose();
            }}
            className={`px-4 py-2.5 min-h-[46px] rounded-xl font-extrabold text-base sm:text-lg flex items-center gap-2 transition-all cursor-pointer focus-visible:ring-4 ${
              isDark
                ? 'bg-neutral-800 text-yellow-300 hover:bg-neutral-700'
                : isMono
                ? 'bg-black text-white hover:bg-neutral-800'
                : 'bg-slate-200 hover:bg-slate-300 text-slate-900'
            }`}
            aria-label="Close hospital details dialog"
          >
            <span>Close</span>
            <X className="w-6 h-6 shrink-0" aria-hidden="true" />
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-8 pt-6">
          {/* Header Title */}
          <div>
            <div className="flex items-center gap-3">
              <span className="text-4xl" role="img" aria-label={`Flag of ${hospital.country}`}>
                {hospital.flag}
              </span>
              <span className="font-extrabold text-lg sm:text-xl uppercase opacity-80">
                {hospital.country} · {hospital.city}
              </span>
            </div>
            <h2 id="modal-hospital-title" className={`${titleSize} mt-2`}>
              {hospital.name}
            </h2>
            <p className={`font-bold text-xl sm:text-2xl mt-1 ${isDark ? 'text-yellow-300' : isMono ? 'text-black' : 'text-blue-800'}`}>
              {hospital.department}
            </p>
          </div>

          {/* Official Verification Banner */}
          <div
            className={`p-5 rounded-2xl border-3 flex items-start gap-4 ${
              isDark
                ? 'bg-neutral-900 border-yellow-400 text-yellow-200'
                : isMono
                ? 'bg-neutral-100 border-black text-black'
                : 'bg-emerald-50 border-emerald-600 text-emerald-950'
            }`}
          >
            <ShieldCheck className="w-8 h-8 shrink-0 mt-0.5 text-emerald-700 dark:text-yellow-400" aria-hidden="true" />
            <div className="space-y-1">
              <h3 className="font-black text-lg sm:text-xl">
                Official Verification: {hospital.verification.authority}
              </h3>
              <p className="text-base sm:text-lg font-semibold">
                Status: {hospital.verification.accreditationStatus} ({hospital.verification.officialReference})
              </p>
              <p className="text-sm opacity-90">
                Data re-verified for renal cyst clinical accuracy: {hospital.verification.lastVerifiedDate}
              </p>
            </div>
          </div>

          {/* Renal Cyst Diagnostic & Interventional Capabilities */}
          <div className={`p-6 rounded-2xl border-3 ${isDark ? 'border-yellow-400 bg-neutral-900' : 'border-blue-400 bg-blue-50/50'}`}>
            <div className="flex items-center gap-3 mb-4">
              <Stethoscope className="w-8 h-8 text-blue-700 dark:text-yellow-400 shrink-0" />
              <h3 className={sectionHeaderSize}>
                Renal Cyst Specialization &amp; Clinical Program
              </h3>
            </div>

            <div className="space-y-4">
              <p className={bodySize}>
                <strong>Program / Clinic:</strong> {hospital.renalCystCare.specializedClinic}
              </p>
              <p className={bodySize}>
                <strong>International Patient Lead Time:</strong> {hospital.renalCystCare.leadTimeWeeks}
              </p>
              <p className={bodySize}>
                {hospital.renalCystCare.notes}
              </p>

              {/* Badges of key capabilities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-bold text-base">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Bosniak Multidisciplinary Board Evaluation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Percutaneous Cyst Sclerotherapy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>ADPKD Genetic Testing &amp; Tolvaptan Protocols</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Nephron-Sparing Robotic Cyst Unroofing / Ablation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Treatments Offered */}
          <div className={`p-6 rounded-2xl ${sectionBoxBg}`}>
            <h3 className={`${sectionHeaderSize} mb-3 flex items-center gap-2`}>
              <Sparkles className="w-6 h-6 text-blue-600 dark:text-yellow-400" />
              <span>Available Cyst Treatments &amp; Diagnostic Technologies:</span>
            </h3>
            <ul className="space-y-2.5 font-semibold text-base sm:text-lg">
              {hospital.cystTreatmentsOffered.map((treat, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 dark:text-yellow-400 shrink-0 mt-1" />
                  <span>{treat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Contact Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* International Patient Center Phone */}
            <div className={`p-5 rounded-2xl ${sectionBoxBg}`}>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider mb-2 opacity-80">
                <Phone className="w-4 h-4 text-blue-600 dark:text-yellow-400" />
                <span>International Patient Office Phone</span>
              </div>
              <div className="font-black text-2xl sm:text-3xl text-blue-900 dark:text-yellow-400 mb-3">
                {hospital.internationalPhone}
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`tel:${hospital.internationalPhone.replace(/\s+/g, '')}`}
                  className={`px-4 py-2.5 min-h-[44px] rounded-lg font-bold text-base flex items-center gap-2 ${primaryBtn}`}
                >
                  <Phone className="w-4 h-4" />
                  <span>Call International Line</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className={`px-3 py-2.5 min-h-[44px] rounded-lg font-semibold text-sm flex items-center gap-1.5 ${secondaryBtn}`}
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* General Switchboard & Emergency Phone */}
            <div className={`p-5 rounded-2xl ${sectionBoxBg}`}>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider mb-2 opacity-80">
                <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-yellow-400" />
                <span>General Switchboard &amp; Hospital Emergency</span>
              </div>
              <div className="space-y-2 text-lg sm:text-xl font-bold">
                <div>
                  <span className="opacity-75 text-sm uppercase block font-semibold">General Operator:</span>
                  <a href={`tel:${hospital.primaryPhone.replace(/\s+/g, '')}`} className="underline hover:no-underline">
                    {hospital.primaryPhone}
                  </a>
                </div>
                {hospital.emergencyPhone && (
                  <div>
                    <span className="opacity-75 text-sm uppercase block font-semibold text-red-600 dark:text-yellow-300">
                      Emergency Room / Acute Kidney Care:
                    </span>
                    <a href={`tel:${hospital.emergencyPhone.replace(/\s+/g, '')}`} className="underline text-red-600 dark:text-yellow-400">
                      {hospital.emergencyPhone}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Exact Hospital Physical Address */}
          <div className={`p-5 rounded-2xl ${sectionBoxBg}`}>
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider mb-1 opacity-80">
              <MapPin className="w-4 h-4 text-red-600 dark:text-yellow-400" />
              <span>Exact Physical Address</span>
            </div>
            <div className="font-extrabold text-xl sm:text-2xl mt-1 mb-3">
              {hospital.address}
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleCopyAddress}
                className={`px-4 py-2.5 min-h-[44px] rounded-lg font-semibold text-base flex items-center gap-2 ${secondaryBtn}`}
              >
                {copiedAddress ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copiedAddress ? 'Address Copied!' : 'Copy Full Address'}</span>
              </button>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  hospital.name + ' ' + hospital.address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2.5 min-h-[44px] rounded-lg font-bold text-base flex items-center gap-2 ${primaryBtn}`}
              >
                <MapPin className="w-4 h-4" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Required Scan Files & Documents */}
          <div className={`p-6 rounded-2xl ${sectionBoxBg}`}>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-7 h-7 text-blue-700 dark:text-yellow-400 shrink-0" />
              <h3 className={sectionHeaderSize}>
                Required Scan Discs &amp; Medical Records Before Consultation
              </h3>
            </div>
            <ul className="list-disc pl-6 space-y-2 font-medium text-base sm:text-lg">
              {hospital.renalCystCare.requiredDocuments.map((doc, idx) => (
                <li key={idx} className="leading-snug">{doc}</li>
              ))}
            </ul>
          </div>

          {/* Senior Accessibility and Mobility on Campus */}
          <div className={`p-6 rounded-2xl ${sectionBoxBg}`}>
            <div className="flex items-center gap-3 mb-4">
              <Accessibility className="w-7 h-7 text-emerald-600 dark:text-yellow-400 shrink-0" />
              <h3 className={sectionHeaderSize}>
                Elderly Accessibility &amp; Campus Mobility
              </h3>
            </div>
            <ul className="space-y-3 font-semibold text-base sm:text-lg">
              {hospital.seniorAccessibility.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-emerald-600 dark:text-yellow-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages Spoken */}
          <div className={`p-6 rounded-2xl ${sectionBoxBg}`}>
            <div className="flex items-center gap-3 mb-3">
              <Languages className="w-7 h-7 text-blue-600 dark:text-yellow-400 shrink-0" />
              <h3 className={sectionHeaderSize}>
                Languages Spoken &amp; Medical Translation
              </h3>
            </div>
            <p className={bodySize}>
              {hospital.languagesSpoken.join(', ')}
            </p>
          </div>

          {/* Official Online Portals & Website Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-slate-200 dark:border-neutral-800">
            <a
              href={hospital.website}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-3 min-h-[48px] rounded-xl font-bold text-base sm:text-lg flex items-center gap-2 ${primaryBtn}`}
            >
              <Globe className="w-5 h-5" />
              <span>Visit Official Hospital Department</span>
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>

            {hospital.internationalCareUrl && (
              <a
                href={hospital.internationalCareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-5 py-3 min-h-[48px] rounded-xl font-bold text-base sm:text-lg flex items-center gap-2 ${secondaryBtn}`}
              >
                <span>International Patient Portal</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
