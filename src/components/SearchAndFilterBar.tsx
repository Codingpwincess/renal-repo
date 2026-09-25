import React from 'react';
import { Search, X, Check, MapPin, Stethoscope, Activity, Sparkles } from 'lucide-react';
import { ContrastMode, TextSizeMode } from '../types/hospital';

interface Props {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
  selectedCystType: string;
  setSelectedCystType: (type: string) => void;
  totalCount: number;
  filteredCount: number;
  contrastMode: ContrastMode;
  textSize: TextSizeMode;
  onOpenBosniakGuide: () => void;
}

const REGIONS = ['All Regions', 'North America', 'Europe', 'Middle East', 'Africa', 'Asia-Pacific'];

const CYST_TYPES = [
  'All Cyst Conditions',
  'Simple Renal Cysts',
  'Bosniak Complex Masses',
  'Polycystic Kidney Disease (ADPKD)',
  'Cyst Sclerotherapy & Drainage',
  'Robotic Cyst Decortication',
  'Senior Nephron Preservation'
];

export const SearchAndFilterBar: React.FC<Props> = ({
  searchQuery,
  setSearchQuery,
  selectedRegion,
  setSelectedRegion,
  selectedCystType,
  setSelectedCystType,
  totalCount,
  filteredCount,
  contrastMode,
  textSize,
  onOpenBosniakGuide,
}) => {
  const isDark = contrastMode === 'high-contrast-dark';
  const isMono = contrastMode === 'high-contrast-light';

  const containerBg = isDark
    ? 'bg-neutral-950 border-neutral-800 text-white'
    : isMono
    ? 'bg-white border-black text-black'
    : 'bg-white border-slate-200 text-slate-900 shadow-sm';

  const inputStyle = isDark
    ? 'bg-neutral-900 border-2 border-yellow-400 text-yellow-300 placeholder-neutral-400 focus:border-yellow-300 focus:bg-black'
    : isMono
    ? 'bg-white border-3 border-black text-black placeholder-neutral-600 focus:bg-neutral-100'
    : 'bg-slate-50 border-2 border-slate-300 text-slate-900 placeholder-slate-500 focus:border-blue-600 focus:bg-white shadow-inner';

  const inputSize =
    textSize === 'extralarge' ? 'text-2xl py-4 pl-14 pr-12 min-h-[64px]' : 'text-xl py-3.5 pl-12 pr-12 min-h-[56px]';

  const filterBtnActive = isDark
    ? 'bg-yellow-400 text-black font-extrabold ring-2 ring-yellow-300 shadow'
    : isMono
    ? 'bg-black text-white font-extrabold ring-2 ring-black shadow'
    : 'bg-blue-700 text-white font-bold ring-2 ring-blue-500 shadow-sm';

  const filterBtnInactive = isDark
    ? 'bg-neutral-900 text-yellow-200 border-2 border-neutral-700 hover:border-yellow-400'
    : isMono
    ? 'bg-white text-black border-2 border-black hover:bg-neutral-100'
    : 'bg-white text-slate-700 border-2 border-slate-300 hover:border-slate-500 hover:bg-slate-50';

  return (
    <section
      role="search"
      aria-label="Filter and search renal cyst hospitals"
      className={`rounded-2xl border-3 p-5 sm:p-7 ${containerBg} no-print`}
    >
      <div className="flex flex-col gap-6">
        {/* Search Input Box */}
        <div className="relative">
          <label htmlFor="hospital-search" className="block font-bold text-lg sm:text-xl mb-2">
            Search Renal Cyst Specialists, Hospitals, or Cities:
          </label>
          <div className="relative flex items-center">
            <Search
              className={`absolute left-4 w-7 h-7 pointer-events-none ${
                isDark ? 'text-yellow-400' : isMono ? 'text-black' : 'text-slate-500'
              }`}
              aria-hidden="true"
            />
            <input
              id="hospital-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="e.g. Bosniak, Sclerotherapy, Polycystic, Mayo, London, Tokyo, Paris..."
              className={`w-full rounded-xl font-medium focus:outline-none focus:ring-4 transition-all ${inputSize} ${inputStyle}`}
              aria-describedby="search-summary"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 p-2 rounded-lg text-slate-500 hover:text-black dark:text-yellow-400 focus-visible:ring-2"
                aria-label="Clear search input"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        {/* Quick Explanatory Helper Banner */}
        <div className="p-3.5 rounded-xl bg-blue-50 dark:bg-neutral-900 border border-blue-200 dark:border-neutral-700 flex flex-wrap items-center justify-between gap-3 text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-700 dark:text-yellow-400 shrink-0" />
            <span className="font-semibold text-slate-800 dark:text-neutral-200">
              Not sure about your scan report? Check if your cyst is Bosniak I, II, IIF, III, or IV:
            </span>
          </div>
          <button
            type="button"
            onClick={onOpenBosniakGuide}
            className="font-bold underline text-blue-700 dark:text-yellow-400 hover:no-underline cursor-pointer"
          >
            Open Bosniak Classification Guide &rarr;
          </button>
        </div>

        {/* Region Filter */}
        <div>
          <div className="flex items-center gap-2 mb-2 font-bold text-base sm:text-lg">
            <MapPin className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span>Select Geographic Region:</span>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3" role="group" aria-label="Filter by geographic region">
            {REGIONS.map((region) => {
              const active = selectedRegion === region;
              return (
                <button
                  key={region}
                  type="button"
                  onClick={() => setSelectedRegion(region)}
                  aria-pressed={active}
                  className={`px-4 py-2.5 min-h-[48px] rounded-xl text-base sm:text-lg font-semibold flex items-center gap-2 transition-all focus-visible:ring-2 cursor-pointer ${
                    active ? filterBtnActive : filterBtnInactive
                  }`}
                >
                  {active && <Check className="w-5 h-5 shrink-0 stroke-[3]" aria-hidden="true" />}
                  <span>{region}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Cyst Specialty Filter */}
        <div>
          <div className="flex items-center gap-2 mb-2 font-bold text-base sm:text-lg">
            <Activity className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span>Filter by Renal Cyst Expertise:</span>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3" role="group" aria-label="Filter by renal cyst expertise">
            {CYST_TYPES.map((type) => {
              const active = selectedCystType === type;
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => setSelectedCystType(type)}
                  aria-pressed={active}
                  className={`px-4 py-2.5 min-h-[48px] rounded-xl text-base sm:text-lg font-semibold flex items-center gap-2 transition-all focus-visible:ring-2 cursor-pointer ${
                    active ? filterBtnActive : filterBtnInactive
                  }`}
                >
                  {active && <Check className="w-5 h-5 shrink-0 stroke-[3]" aria-hidden="true" />}
                  <span>{type}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter and Reset */}
        <div
          id="search-summary"
          className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t-2 border-dashed border-slate-300 dark:border-neutral-800"
        >
          <div className="font-extrabold text-lg sm:text-xl">
            Showing <span className="underline">{filteredCount}</span> of {totalCount} Verified Renal Cyst Centers
            {filteredCount === 0 && <span className="text-red-500 ml-2 font-bold">(No hospitals found matching your criteria)</span>}
          </div>

          {(searchQuery || selectedRegion !== 'All Regions' || selectedCystType !== 'All Cyst Conditions') && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedRegion('All Regions');
                setSelectedCystType('All Cyst Conditions');
              }}
              className="px-4 py-2 min-h-[44px] text-base font-bold underline hover:no-underline text-blue-700 dark:text-yellow-400 cursor-pointer"
            >
              Reset all filters
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
