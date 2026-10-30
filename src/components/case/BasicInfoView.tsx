import React from 'react';
import { useCaseContext } from '../../context/CaseContext';
import { MapPin } from 'lucide-react';

export const BasicInfoView: React.FC = () => {
  const { currentCase } = useCaseContext();

  return (
    <div className="space-y-6 text-xs text-slate-300">
      <div className="rounded-xl bg-police-sidebar border border-police-border p-5">
        <h2 className="text-base font-semibold text-white mb-4">Informações Básicas da Ocorrência</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="space-y-1">
            <span className="text-slate-500 text-[11px] uppercase tracking-wider block">ID do Caso / Incidente</span>
            <span className="text-sm font-mono font-bold text-police-gold">{currentCase.id}</span>
          </div>

          <div className="space-y-1">
            <span className="text-slate-500 text-[11px] uppercase tracking-wider block">Classificação Penal</span>
            <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-police-cyan text-slate-950">
              {currentCase.badgeType}
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-slate-500 text-[11px] uppercase tracking-wider block">Oficial Relator</span>
            <span className="text-sm font-medium text-slate-200">{currentCase.officerName}</span>
          </div>

          <div className="space-y-1">
            <span className="text-slate-500 text-[11px] uppercase tracking-wider block">Data e Hora do Despacho</span>
            <span className="text-slate-200 font-mono">12/04/2021 às 14:18:22 EST</span>
          </div>

          <div className="space-y-1">
            <span className="text-slate-500 text-[11px] uppercase tracking-wider block">Local do Fato</span>
            <span className="text-slate-200 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-police-cyan" /> 410 Elm Street, Apt 3B
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-slate-500 text-[11px] uppercase tracking-wider block">Código de Resposta</span>
            <span className="text-rose-400 font-bold font-mono">10-33 (Oficial em Risco - Armamento)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
