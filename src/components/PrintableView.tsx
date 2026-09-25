import React from 'react';
import { Hospital } from '../types/hospital';
import { SENIOR_RENAL_CYST_GUIDELINES, BOSNIAK_CATEGORIES } from '../data/hospitalsData';

interface Props {
  hospitals: Hospital[];
  isSavedOnly: boolean;
}

export const PrintableView: React.FC<Props> = ({ hospitals, isSavedOnly }) => {
  return (
    <div className="hidden print:block text-black bg-white p-6">
      {/* Print Document Header */}
      <div className="border-b-4 border-black pb-4 mb-6">
        <h1 className="text-3xl font-black uppercase tracking-tight">
          Renal Cyst Global Directory
        </h1>
        <p className="text-xl font-bold mt-1">
          {isSavedOnly
            ? 'Personal Senior Care Sheet — Selected International Renal Cyst Centers'
            : 'Comprehensive Directory of Verified International Kidney Cyst Specialists & Bosniak Evaluation Centers'}
        </p>
        <p className="text-sm mt-1">
          Printed for senior patient &amp; family reference · Includes direct international contact phone lines, physical addresses, and specialized cyst procedures.
        </p>
      </div>

      {/* Bosniak Classification Reference Summary */}
      <div className="mb-6 border-2 border-black p-4">
        <h2 className="text-lg font-black uppercase mb-2">
          Bosniak Renal Cyst Classification Quick Guide:
        </h2>
        <div className="space-y-1 text-sm">
          {BOSNIAK_CATEGORIES.map((b) => (
            <p key={b.category}>
              <strong>{b.category} ({b.title}):</strong> Malignancy risk: {b.riskOfMalignancy}. {b.seniorManagementAdvice}
            </p>
          ))}
        </div>
      </div>

      {/* Senior Guidelines */}
      <div className="mb-8 border-2 border-black p-4">
        <h2 className="text-xl font-black uppercase mb-2">
          Key Senior Renal Cyst Consultation Advice:
        </h2>
        <ol className="list-decimal pl-5 space-y-1 text-base font-semibold">
          {SENIOR_RENAL_CYST_GUIDELINES.map((item) => (
            <li key={item.step}>
              <strong>{item.title}:</strong> {item.description}
            </li>
          ))}
        </ol>
      </div>

      {/* Hospitals List */}
      <h2 className="text-2xl font-black uppercase mb-4 border-b-2 border-black pb-2">
        Verified Renal Cyst Hospital Profiles ({hospitals.length} Centers)
      </h2>

      <div className="space-y-6">
        {hospitals.map((h, index) => (
          <div key={h.id} className="print-page-break border-2 border-black p-5">
            <div className="flex justify-between items-baseline">
              <h3 className="text-2xl font-black">
                {index + 1}. {h.name} ({h.country})
              </h3>
              <span className="text-lg font-bold">{h.city}</span>
            </div>

            <p className="text-lg font-bold mt-1">
              Program: {h.renalCystCare.specializedClinic}
            </p>

            <div className="mt-3 grid grid-cols-2 gap-4 text-base">
              <div>
                <p className="font-bold">
                  International Patient Phone: <span className="text-xl font-black">{h.internationalPhone}</span>
                </p>
                <p className="font-semibold mt-1">
                  Hospital Switchboard: {h.primaryPhone}
                </p>
                {h.emergencyPhone && (
                  <p className="font-semibold text-red-700">
                    Emergency Phone: {h.emergencyPhone}
                  </p>
                )}
                <p className="text-sm mt-1">
                  Website: {h.website}
                </p>
              </div>

              <div>
                <p className="font-bold">Physical Address:</p>
                <p className="font-medium">{h.address}</p>
                <p className="font-bold mt-2">Specialized Treatments Offered:</p>
                <p className="text-sm font-medium">
                  {h.cystTreatmentsOffered.join('; ')}
                </p>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-black text-sm">
              <p>
                <strong>Accreditation / Authority:</strong> {h.verification.authority} — {h.rankingHighlight}
              </p>
              <p className="mt-1">
                <strong>Required Scan Documents:</strong> {h.renalCystCare.requiredDocuments.join('; ')}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-4 border-t-2 border-black text-xs text-center font-bold">
        Renal Cyst Global Directory — Always review DICOM image files directly with an accredited nephrologist or urologist.
      </div>
    </div>
  );
};
