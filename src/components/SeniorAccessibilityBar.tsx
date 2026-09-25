import React from 'react';
import { ContrastMode, TextSizeMode } from '../types/hospital';
import { VolumeX, Sun, Moon, Eye, ZoomIn } from 'lucide-react';

interface Props {
  textSize: TextSizeMode;
  setTextSize: (size: TextSizeMode) => void;
  contrastMode: ContrastMode;
  setContrastMode: (mode: ContrastMode) => void;
  isSpeaking: boolean;
  onStopSpeech: () => void;
}

export const SeniorAccessibilityBar: React.FC<Props> = ({
  textSize,
  setTextSize,
  contrastMode,
  setContrastMode,
  isSpeaking,
  onStopSpeech,
}) => {
  const isDark = contrastMode === 'high-contrast-dark';
  const isMono = contrastMode === 'high-contrast-light';

  // Dynamic styling based on theme
  const barBg = isDark
    ? 'bg-neutral-900 border-yellow-400 text-white'
    : isMono
    ? 'bg-black text-white border-black'
    : 'bg-white border-slate-300 text-slate-900 shadow-sm';

  const labelColor = isDark ? 'text-yellow-400' : isMono ? 'text-white' : 'text-slate-700';

  const activeBtn = isDark
    ? 'bg-yellow-400 text-black font-extrabold ring-2 ring-yellow-300'
    : isMono
    ? 'bg-white text-black font-extrabold ring-2 ring-white'
    : 'bg-blue-700 text-white font-bold ring-2 ring-blue-600 shadow';

  const inactiveBtn = isDark
    ? 'bg-neutral-800 text-yellow-300 border border-neutral-700 hover:bg-neutral-700'
    : isMono
    ? 'bg-neutral-900 text-white border border-neutral-700 hover:bg-neutral-800'
    : 'bg-slate-100 text-slate-800 border border-slate-300 hover:bg-slate-200';

  return (
    <div
      role="region"
      aria-label="Elderly Accessibility and Display Controls"
      className={`w-full border-b-2 py-3 px-4 sm:px-8 transition-colors ${barBg}`}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Left: Text Size Controls */}
        <div className="flex items-center flex-wrap gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5 mr-1 font-bold text-sm sm:text-base">
            <ZoomIn className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span className={labelColor}>Text Size:</span>
          </div>

          <div className="flex items-center gap-1.5" role="group" aria-label="Choose font size">
            <button
              type="button"
              onClick={() => setTextSize('normal')}
              aria-pressed={textSize === 'normal'}
              className={`px-3.5 py-2 min-h-[44px] rounded-lg text-sm sm:text-base font-semibold transition-all focus-visible:ring-2 ${
                textSize === 'normal' ? activeBtn : inactiveBtn
              }`}
              title="Standard Large Font"
            >
              Default Large
            </button>

            <button
              type="button"
              onClick={() => setTextSize('large')}
              aria-pressed={textSize === 'large'}
              className={`px-3.5 py-2 min-h-[44px] rounded-lg text-base sm:text-lg font-bold transition-all focus-visible:ring-2 ${
                textSize === 'large' ? activeBtn : inactiveBtn
              }`}
              title="Bigger Font for Easier Reading"
            >
              Larger A+
            </button>

            <button
              type="button"
              onClick={() => setTextSize('extralarge')}
              aria-pressed={textSize === 'extralarge'}
              className={`px-4 py-2 min-h-[44px] rounded-lg text-lg sm:text-xl font-extrabold transition-all focus-visible:ring-2 ${
                textSize === 'extralarge' ? activeBtn : inactiveBtn
              }`}
              title="Maximum Font Size for High Visibility"
            >
              Extra Large A++
            </button>
          </div>
        </div>

        {/* Center / Right: High Contrast Display Mode */}
        <div className="flex items-center flex-wrap gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5 font-bold text-sm sm:text-base">
            <Eye className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span className={labelColor}>Contrast:</span>
          </div>

          <div className="flex items-center gap-1.5" role="group" aria-label="Contrast options">
            <button
              type="button"
              onClick={() => setContrastMode('default')}
              aria-pressed={contrastMode === 'default'}
              className={`px-3 py-2 min-h-[44px] rounded-lg text-sm sm:text-base font-semibold flex items-center gap-1.5 transition-all ${
                contrastMode === 'default' ? activeBtn : inactiveBtn
              }`}
              title="Standard Clear Daylight Mode"
            >
              <Sun className="w-4 h-4" aria-hidden="true" />
              Daylight
            </button>

            <button
              type="button"
              onClick={() => setContrastMode('high-contrast-dark')}
              aria-pressed={contrastMode === 'high-contrast-dark'}
              className={`px-3 py-2 min-h-[44px] rounded-lg text-sm sm:text-base font-semibold flex items-center gap-1.5 transition-all ${
                contrastMode === 'high-contrast-dark' ? activeBtn : inactiveBtn
              }`}
              title="High Contrast Amber & Yellow on Black (Easy on Eyes)"
            >
              <Moon className="w-4 h-4" aria-hidden="true" />
              Yellow on Black
            </button>

            <button
              type="button"
              onClick={() => setContrastMode('high-contrast-light')}
              aria-pressed={contrastMode === 'high-contrast-light'}
              className={`px-3 py-2 min-h-[44px] rounded-lg text-sm sm:text-base font-semibold flex items-center gap-1.5 transition-all ${
                contrastMode === 'high-contrast-light' ? activeBtn : inactiveBtn
              }`}
              title="Monochrome High Contrast Black and White"
            >
              <Eye className="w-4 h-4" aria-hidden="true" />
              Pure B&amp;W
            </button>
          </div>

          {/* Stop Voice Assistant Button if reading */}
          {isSpeaking && (
            <button
              type="button"
              onClick={onStopSpeech}
              className="ml-2 px-4 py-2 min-h-[44px] bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg flex items-center gap-2 animate-pulse ring-2 ring-red-400"
              aria-label="Stop text-to-speech voice"
            >
              <VolumeX className="w-5 h-5" aria-hidden="true" />
              <span>Stop Voice</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
