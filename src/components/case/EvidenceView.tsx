import React from 'react';
import { Plus } from 'lucide-react';
import { useCaseContext } from '../../context/CaseContext';
import { ArticlesTable } from './ArticlesTable';
import { BodyCameraVideoCard } from './BodyCameraVideoCard';

export const EvidenceView: React.FC = () => {
  const { currentCase, setIsAddEvidenceModalOpen } = useCaseContext();
  const totalEvidence = currentCase.articles.length + currentCase.videos.length;

  return (
    <div className="space-y-8 animate-in fade-in duration-150">
      {/* Evidence Top Header Bar with subtle topography pattern */}
      <div className="relative overflow-hidden rounded-xl bg-[#14171e] border border-police-border p-5 flex items-center justify-between shadow-sm">
        {/* Subtle background guilloche contour lines SVG */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="contour" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M0 20 Q 20 40, 40 20 T 80 20" fill="none" stroke="#fff" strokeWidth="1" />
                <path d="M0 40 Q 20 60, 40 40 T 80 40" fill="none" stroke="#fff" strokeWidth="1" />
                <path d="M0 60 Q 20 80, 40 60 T 80 60" fill="none" stroke="#fff" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contour)" />
          </svg>
        </div>

        <div className="flex items-center gap-2.5 relative z-10">
          <h2 className="text-base font-semibold text-white tracking-tight">Evidence</h2>
          <span className="text-xs font-bold px-2 py-0.5 rounded bg-police-gold text-slate-950 font-mono shadow-sm">
            {totalEvidence}
          </span>
        </div>

        <button
          type="button"
          onClick={() => setIsAddEvidenceModalOpen(true)}
          className="relative z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-[#1e232d] hover:bg-[#282e3c] text-slate-200 border border-police-borderLight transition-colors cursor-pointer shadow-sm"
        >
          <Plus className="w-3.5 h-3.5 text-police-gold" />
          <span>Add Evidence</span>
        </button>
      </div>

      {/* Section 1: Articles */}
      <ArticlesTable />

      {/* Section 2: Body Camera Videos */}
      <div className="space-y-4 pt-2">
        <h3 className="text-sm font-semibold text-slate-200">
          Body Camera Videos ({currentCase.videos.length})
        </h3>

        <div className="divide-y divide-police-border/40">
          {currentCase.videos.map((vid) => (
            <BodyCameraVideoCard key={vid.id} video={vid} />
          ))}
        </div>
      </div>
    </div>
  );
};

