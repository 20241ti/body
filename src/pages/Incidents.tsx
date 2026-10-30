import React from 'react';
import { useIncidents } from '../hooks/useIncidents';
import { IncidentCard } from '../components/bodycam/IncidentCard';
import { Search } from 'lucide-react';
import { IncidentSeverity } from '../types';

export const Incidents: React.FC = () => {
  const {
    incidents,
    filterSeverity,
    setFilterSeverity,
    searchQuery,
    setSearchQuery,
    updateStatus,
  } = useIncidents();

  const severities: (IncidentSeverity | 'all')[] = ['all', 'critical', 'high', 'medium', 'low'];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-white tracking-tight">Registro de Ocorrências & Análise Forense</h2>
        <p className="text-xs text-slate-400">
          Histórico detalhado de alertas classificados pela inteligência artificial com carimbo de tempo auditável.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filtrar por oficial, ID ou tipo de incidente..."
            className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500"
          />
        </div>

        {/* Severity filter buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
          {severities.map((sev) => (
            <button
              key={sev}
              onClick={() => setFilterSeverity(sev)}
              className={`px-3 py-1.5 rounded-lg text-xs capitalize transition-colors font-medium ${
                filterSeverity === sev
                  ? 'bg-sky-600 text-white'
                  : 'bg-slate-950 hover:bg-slate-800 text-slate-400'
              }`}
            >
              {sev === 'all' ? 'Todos os Níveis' : sev}
            </button>
          ))}
        </div>
      </div>

      {/* Incidents List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {incidents.length === 0 ? (
          <div className="col-span-full py-12 text-center text-slate-500 bg-slate-900/50 rounded-xl border border-slate-800">
            Nenhum incidente encontrado com os filtros atuais.
          </div>
        ) : (
          incidents.map((incident) => (
            <IncidentCard
              key={incident.id}
              incident={incident}
              onVerify={(id) => updateStatus(id, 'verified')}
              onDismiss={(id) => updateStatus(id, 'dismissed')}
            />
          ))
        )}
      </div>
    </div>
  );
};

