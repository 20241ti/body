import React from 'react';
import { 
  Shield, 
  ListOrdered, 
  FileSearch, 
  FileText, 
  Send, 
  ChevronDown
} from 'lucide-react';
import { useCaseContext } from '../../context/CaseContext';
import { GlobalRailTab } from '../../types/case';

export const RightAppRail: React.FC = () => {
  const { activeRailTab, setActiveRailTab } = useCaseContext();

  const railItems: { id: GlobalRailTab; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'units', label: 'Units', icon: Shield },
    { id: 'incidents', label: 'Incidents', icon: ListOrdered },
    { id: 'records', label: 'Records', icon: FileSearch },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'map', label: 'Map', icon: Send },
  ];

  return (
    <aside
      className="w-16 shrink-0 h-full bg-[#12151c] border-l border-[#262b36] flex flex-col items-center justify-between py-3.5 select-none"
      aria-label="Barra global do sistema"
    >
      <div className="flex flex-col items-center gap-5 w-full">
        {/* SOS Button */}
        <button
          type="button"
          onClick={() => alert('🚨 ALERTA SOS DISPARADO: Posição GPS transmitida para o despachador.')}
          className="w-10 h-10 rounded-full bg-slate-100 hover:bg-white text-slate-900 font-black text-xs flex items-center justify-center shadow-lg active:scale-95 transition-all cursor-pointer border border-slate-300"
          title="Botão de Pânico / SOS Operacional"
          aria-label="Disparar SOS"
        >
          SOS
        </button>

        {/* Global Navigation Icons */}
        <nav className="flex flex-col items-center gap-1 w-full">
          {railItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeRailTab === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveRailTab(item.id)}
                className={`relative w-full py-3 flex flex-col items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer group ${
                  isActive ? 'text-white' : ''
                }`}
                title={item.label}
              >
                {/* Active Indicator Bar on left edge */}
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-police-gold rounded-r" />
                )}
                <Icon className={`w-5 h-5 transition-colors ${isActive ? 'text-slate-100' : 'text-slate-400 group-hover:text-white'}`} />
                <span className="text-[10px] mt-1 font-medium tracking-tight text-slate-400 group-hover:text-slate-200">
                  {item.label}
                </span>
              </button>
            );
          })}

          <button
            type="button"
            className="w-full py-2 flex items-center justify-center text-slate-500 hover:text-slate-300 cursor-pointer"
            aria-label="Mais opções"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </nav>
      </div>

      {/* Bottom Red Cad System Logo */}
      <div className="w-10 h-10 rounded-lg bg-rose-600 hover:bg-rose-500 flex items-center justify-center text-white shadow-md cursor-pointer transition-colors" title="CAD Public Safety Engine">
        <div className="w-6 h-4 border-2 border-white rounded-full flex items-center justify-center">
          <div className="w-2.5 h-1.5 border border-white rounded-full" />
        </div>
      </div>
    </aside>
  );
};
