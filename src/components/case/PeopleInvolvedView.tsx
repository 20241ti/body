import React from 'react';
import { User } from 'lucide-react';

export const PeopleInvolvedView: React.FC = () => {
  return (
    <div className="space-y-4 text-xs">
      <div className="flex items-center justify-between pb-2 border-b border-police-border">
        <h2 className="text-base font-semibold text-white">Pessoas Envolvidas (2)</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Suspect Card */}
        <div className="p-4 rounded-xl bg-police-sidebar border border-police-border space-y-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-rose-950/60 border border-rose-800/80 text-rose-400 flex items-center justify-center font-bold">
                <User className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-100">David M. Walker</h3>
                <span className="text-[10px] text-rose-400 font-semibold uppercase">Suspeito Detido</span>
              </div>
            </div>
            <span className="text-[11px] font-mono text-slate-400">DOB: 14/08/1988</span>
          </div>

          <div className="space-y-1.5 text-slate-300">
            <p><strong className="text-slate-400">Condição:</strong> Detido no local sem resistência armada direta.</p>
            <p><strong className="text-slate-400">Itens Apreendidos:</strong> Pistola Glock 9mm registrada no coldre lateral.</p>
          </div>
        </div>

        {/* Witness Card */}
        <div className="p-4 rounded-xl bg-police-sidebar border border-police-border space-y-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-sky-950/60 border border-sky-800/80 text-sky-400 flex items-center justify-center font-bold">
                <User className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-100">Clara Jenkins</h3>
                <span className="text-[10px] text-sky-400 font-semibold uppercase">Testemunha Presencial</span>
              </div>
            </div>
            <span className="text-[11px] font-mono text-slate-400">DOB: 02/11/1994</span>
          </div>

          <div className="space-y-1.5 text-slate-300">
            <p><strong className="text-slate-400">Depoimento:</strong> Ligou para o 911 informando indivíduo alterado próximo ao estacionamento do condomínio.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
