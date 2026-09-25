import React, { useState } from 'react';
import { Hospital, ContrastMode, TextSizeMode } from '../types/hospital';
import {
  Phone,
  Globe,
  MapPin,
  Volume2,
  VolumeX,
  Bookmark,
  BookmarkCheck,
  ShieldCheck,
  ChevronRight,
  Copy,
  Check,
  ExternalLink,
  Activity,
  CalendarCheck,
  Stethoscope,
  Sparkles
} from 'lucide-react';

interface Props {
  hospital: Hospital;
  isSaved: boolean;
  onToggleSave: (hospital: Hospital) => void;
  onViewDetails: (hospital: Hospital) => void;
  contrastMode: ContrastMode;
  textSize: TextSizeMode;
  isSpeakingThis: boolean;
  onStartSpeaking: (id: string, text: string) => void;
  onStopSpeaking: () => void;
}

export const HospitalCard: React.FC<Props> = ({
  hospital,
  isSaved,
  onToggleSave,
  onViewDetails,
  contrastMode,
  textSize,
  isSpeakingThis,
  onStartSpeaking,
  onStopSpeaking,
}) => {
  const [copiedPhone, setCopiedPhone] = useState(false);

  const isDark = contrastMode === 'high-contrast-dark';
  const isMono = contrastMode === 'high-contrast-light';

  const cardBg = isDark
    ? 'bg-neutral-950 border-2 border-yellow-400 text-white'
    : isMono
    ? 'bg-white border-3 border-black text-black'
    : 'bg-white border-2 border-slate-300 text-slate-900 shadow-md hover:border-blue-500';

  const titleSize =
    textSize === 'extralarge'
      ? 'text-3xl sm:text-4xl font-black'
      : textSize === 'large'
      ? 'text-2xl sm:text-3xl font-extrabold'
      : 'text-2xl sm:text-2xl font-bold';

  const bodySize =
    textSize === 'extralarge'
      ? 'text-xl sm:text-2xl leading-relaxed'
      : textSize === 'large'
      ? 'text-lg sm:text-xl leading-relaxed'
      : 'text-base sm:text-lg leading-normal';

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(hospital.internationalPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSpeakingThis) {
      onStopSpeaking();
    } else {
      const speech = `${hospital.name}, located in ${hospital.city}, ${hospital.country}. Specialized Clinic: ${hospital.renalCystCare.specializedClinic}. International patient phone: ${hospital.internationalPhone}. ${hospital.overview}. Verification status: ${hospital.verification.officialReference}. Cyst treatments offered include: ${hospital.cystTreatmentsOffered.slice(0, 3).join(', ')}.`;
      onStartSpeaking(hospital.id, speech);
    }
  };

  const bannerBg = isDark
    ? 'bg-neutral-900 border-l-4 border-yellow-400 text-yellow-300'
    : isMono
    ? 'bg-neutral-100 border-l-4 border-black text-black'
    : 'bg-blue-50 border-l-4 border-blue-700 text-blue-950';

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

  return (
    <article
      className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all ${cardBg}`}
      aria-labelledby={`hospital-title-${hospital.id}`}
    >
      <div className="space-y-5">
        {/* Top Header Row: Flag, Name, Save Button */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="text-3xl sm:text-4xl" role="img" aria-label={`Flag of ${hospital.country}`}>
                {hospital.flag}
              </span>
              <span className="font-extrabold text-base sm:text-lg tracking-wide uppercase opacity-80">
                {hospital.country} · {hospital.region}
              </span>
            </div>

            <h2 id={`hospital-title-${hospital.id}`} className={`${titleSize} pt-1`}>
              {hospital.name}
            </h2>

            <p className={`font-semibold text-base sm:text-xl ${isDark ? 'text-yellow-200' : isMono ? 'text-black' : 'text-blue-800'}`}>
              {hospital.department}
            </p>
          </div>

          {/* Bookmark Button */}
          <button
            type="button"
            onClick={() => onToggleSave(hospital)}
            className={`p-3.5 min-w-[50px] min-h-[50px] rounded-xl flex items-center justify-center transition-all cursor-pointer focus-visible:ring-4 ${
              isSaved
                ? isDark
                  ? 'bg-yellow-400 text-black font-bold ring-yellow-300'
                  : isMono
                  ? 'bg-black text-white font-bold ring-black'
                  : 'bg-emerald-600 text-white font-bold shadow'
                : secondaryBtn
            }`}
            aria-label={isSaved ? `Remove ${hospital.name} from saved list` : `Save ${hospital.name} to care list`}
            title={isSaved ? 'Saved in Care List' : 'Save to Care List'}
          >
            {isSaved ? (
              <BookmarkCheck className="w-7 h-7 stroke-[2.5]" aria-hidden="true" />
            ) : (
              <Bookmark className="w-7 h-7" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Location & Address */}
        <div className="flex items-start gap-2.5 font-medium text-base sm:text-lg">
          <MapPin
            className={`w-6 h-6 shrink-0 mt-0.5 ${isDark ? 'text-yellow-400' : isMono ? 'text-black' : 'text-red-600'}`}
            aria-hidden="true"
          />
          <div>
            <span className="font-bold">{hospital.city}, {hospital.country}</span>
            <p className="opacity-90 text-sm sm:text-base mt-0.5">{hospital.address}</p>
          </div>
        </div>

        {/* Verified Credential & Ranking Highlight Banner */}
        <div className={`p-4 rounded-xl ${bannerBg}`}>
          <div className="flex items-start gap-2.5">
            <ShieldCheck
              className={`w-6 h-6 shrink-0 mt-0.5 ${isDark ? 'text-yellow-400' : isMono ? 'text-black' : 'text-blue-700'}`}
              aria-hidden="true"
            />
            <div>
              <p className="font-extrabold text-base sm:text-lg">
                Verified Authority: {hospital.verification.authority}
              </p>
              <p className="text-sm sm:text-base mt-1 font-medium">
                {hospital.rankingHighlight}
              </p>
            </div>
          </div>
        </div>

        {/* Renal Cyst Capability Tags */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs sm:text-sm font-bold">
          <div className={`p-2.5 rounded-lg border flex items-center gap-1.5 ${isDark ? 'bg-neutral-900 border-neutral-700 text-yellow-300' : 'bg-slate-50 border-slate-200 text-slate-800'}`}>
            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Bosniak CT/MRI Board</span>
          </div>

          <div className={`p-2.5 rounded-lg border flex items-center gap-1.5 ${isDark ? 'bg-neutral-900 border-neutral-700 text-yellow-300' : 'bg-slate-50 border-slate-200 text-slate-800'}`}>
            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Cyst Sclerotherapy</span>
          </div>

          <div className={`p-2.5 rounded-lg border flex items-center gap-1.5 ${isDark ? 'bg-neutral-900 border-neutral-700 text-yellow-300' : 'bg-slate-50 border-slate-200 text-slate-800'}`}>
            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Nephron Preservation</span>
          </div>
        </div>

        {/* Direct International Phone Numbers */}
        <div
          className={`p-4 sm:p-5 rounded-xl border-2 ${
            isDark
              ? 'border-yellow-400/60 bg-neutral-900'
              : isMono
              ? 'border-black bg-neutral-50'
              : 'border-blue-200 bg-slate-50'
          }`}
        >
          <div className="text-sm font-bold uppercase tracking-wider mb-1 opacity-80">
            Overseas Patient Clinic Telephone line:
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-1">
            <div className="font-black text-2xl sm:text-3xl tracking-tight text-blue-900 dark:text-yellow-400">
              {hospital.internationalPhone}
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`tel:${hospital.internationalPhone.replace(/\s+/g, '')}`}
                className={`px-4 py-2.5 min-h-[46px] rounded-lg font-bold text-base flex items-center justify-center gap-2 transition-all ${primaryBtn}`}
                aria-label={`Call ${hospital.name} international office at ${hospital.internationalPhone}`}
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span>Call Desk</span>
              </a>

              <button
                type="button"
                onClick={handleCopyPhone}
                className={`px-3 py-2.5 min-h-[46px] rounded-lg font-semibold text-sm flex items-center justify-center gap-1.5 transition-all ${secondaryBtn}`}
                aria-label="Copy phone number"
                title="Copy phone number to clipboard"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                    <span className="text-emerald-700 font-bold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" aria-hidden="true" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Specialized Cyst Program Information */}
        <div className="flex items-start gap-2 text-base sm:text-lg">
          <Stethoscope
            className={`w-6 h-6 shrink-0 mt-0.5 ${isDark ? 'text-yellow-400' : isMono ? 'text-black' : 'text-blue-700'}`}
            aria-hidden="true"
          />
          <div>
            <span className="font-extrabold">Dedicated Program: </span>
            <span className="font-medium">
              {hospital.renalCystCare.specializedClinic} ({hospital.renalCystCare.leadTimeWeeks})
            </span>
          </div>
        </div>

        {/* Overview snippet */}
        <p className={`${bodySize} opacity-95 pt-1`}>
          {hospital.overview}
        </p>

        {/* Key Treatments Preview */}
        <div>
          <div className="text-sm font-bold uppercase tracking-wider mb-2 opacity-80 flex items-center gap-1.5">
            <Activity className="w-4 h-4" aria-hidden="true" />
            <span>Cyst Therapies &amp; Diagnostic Technologies:</span>
          </div>
          <div className="flex flex-wrap gap-2 text-sm sm:text-base font-semibold">
            {hospital.cystTreatmentsOffered.slice(0, 3).map((spec, i) => (
              <span
                key={i}
                className={`px-3 py-1.5 rounded-lg border ${
                  isDark
                    ? 'border-neutral-700 bg-neutral-900 text-yellow-200'
                    : isMono
                    ? 'border-black bg-white text-black'
                    : 'border-slate-300 bg-white text-slate-800'
                }`}
              >
                {spec}
              </span>
            ))}
            {hospital.cystTreatmentsOffered.length > 3 && (
              <span className="px-2 py-1.5 text-sm font-medium self-center opacity-75">
                +{hospital.cystTreatmentsOffered.length - 3} more treatments
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="pt-6 mt-6 border-t-2 border-slate-200 dark:border-neutral-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Listen Aloud Button */}
        <button
          type="button"
          onClick={handleSpeak}
          className={`px-4 py-3 min-h-[48px] rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all cursor-pointer focus-visible:ring-4 ${
            isSpeakingThis
              ? 'bg-amber-600 text-white ring-amber-400 animate-pulse'
              : secondaryBtn
          }`}
          aria-label={isSpeakingThis ? `Stop reading ${hospital.name}` : `Listen to ${hospital.name} details read aloud`}
        >
          {isSpeakingThis ? (
            <>
              <VolumeX className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>Stop Reading</span>
            </>
          ) : (
            <>
              <Volume2 className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>Read Aloud</span>
            </>
          )}
        </button>

        <div className="flex items-center gap-2.5">
          {/* Official Website Link */}
          <a
            href={hospital.website}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 min-h-[48px] min-w-[48px] rounded-xl flex items-center justify-center transition-all ${secondaryBtn}`}
            title={`Open official ${hospital.name} website in new tab`}
            aria-label={`Open official ${hospital.name} website`}
          >
            <Globe className="w-5 h-5" aria-hidden="true" />
            <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" aria-hidden="true" />
          </a>

          {/* View Full Hospital Details Modal Trigger */}
          <button
            type="button"
            onClick={() => onViewDetails(hospital)}
            className={`flex-1 sm:flex-none px-5 py-3 min-h-[48px] rounded-xl font-extrabold text-base sm:text-lg flex items-center justify-center gap-2 transition-all cursor-pointer focus-visible:ring-4 ${primaryBtn}`}
          >
            <span>Full Cyst Details &amp; Scans</span>
            <ChevronRight className="w-5 h-5 shrink-0" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
};
