import React from 'react';
import { ChevronLeft, Printer, Send } from 'lucide-react';
import { useCaseContext } from '../../context/CaseContext';

export const CaseHeader: React.FC = () => {
  const { currentCase, submitForApproval } = useCaseContext();

  return (
    <header className="w-full shrink-0 bg-[#12151c] border-b border-[#262b36] px-6 py-3.5 z-20 select-none shadow-md">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
        {/* Left: Back button + Title */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="p-1.5 -ml-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-police-border/60 transition-colors cursor-pointer"
            aria-label="Voltar para lista de casos"
          >
            <ChevronLeft className="w-5 h-5 text-slate-300" />
          </button>
          <div>
            <h1 className="text-xl font-serif tracking-tight text-white font-medium flex items-center gap-2">
              Reporting Case <span className="font-sans font-semibold text-slate-100">{currentCase.id}</span>
            </h1>
          </div>
        </div>

        {/* Right: Actions and Timestamp */}
        <div className="flex items-center gap-4 self-end lg:self-center">
          <button
            type="button"
            onClick={() => window.print()}
            className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors cursor-pointer px-2.5 py-1.5 rounded hover:bg-police-border/50"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print</span>
          </button>

          <button
            type="button"
            onClick={submitForApproval}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-medium bg-[#2a2e39] hover:bg-[#343a47] text-slate-200 border border-police-borderLight transition-colors cursor-pointer shadow-sm"
          >
            <Send className="w-3 h-3 text-slate-400" />
            <span>Send for Approval</span>
          </button>

          <span className="text-[11px] text-slate-500 font-mono hidden sm:inline">
            Last updated on {currentCase.lastUpdated}
          </span>
        </div>
      </div>

      {/* Sub-bar: Metadata badges */}
      <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-400 mt-2.5 pt-2 border-t border-[#262b36]/70">
        <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-police-cyan text-slate-950 tracking-wide">
          {currentCase.badgeType}
        </span>

        <span className="flex items-center gap-1">
          <span className="text-slate-500">Reported by:</span>
          <strong className="text-slate-200 font-medium">{currentCase.officerName}</strong>
        </span>

        <span className="flex items-center gap-1">
          <span className="text-slate-500">Approval Status:</span>
          <span className="text-slate-300">{currentCase.approvalStatus}</span>
        </span>

        <span className="flex items-center gap-1">
          <span className="text-slate-500">Forms needing approval:</span>
          <span className="text-slate-300 font-mono font-medium">{currentCase.formsNeedingApproval}</span>
        </span>

        <span className="flex items-center gap-1">
          <span className="text-slate-500">NIBRS Errors:</span>
          <span className="text-emerald-400 font-mono font-medium">{currentCase.nibrsErrors}</span>
        </span>
      </div>
    </header>
  );
};
