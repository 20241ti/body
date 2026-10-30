import React from 'react';
import { Clock, CheckCircle2, ShieldAlert } from 'lucide-react';
import { Incident } from '../../types';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { formatTimeAgo } from '../../utils/formatDate';

interface IncidentCardProps {
  incident: Incident;
  onVerify?: (id: string) => void;
  onDismiss?: (id: string) => void;
}

export const IncidentCard: React.FC<IncidentCardProps> = ({
  incident,
  onVerify,
  onDismiss,
}) => {
  const getSeverityBadge = (severity: Incident['severity']) => {
    switch (severity) {
      case 'critical':
        return <Badge variant="danger">Crítico</Badge>;
      case 'high':
        return <Badge variant="warning">Alto</Badge>;
      case 'medium':
        return <Badge variant="info">Médio</Badge>;
      default:
        return <Badge variant="default">Baixo</Badge>;
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 hover:border-slate-700/80 rounded-xl p-4 transition-all duration-200">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center gap-2">
          <ShieldAlert className={`w-5 h-5 ${incident.severity === 'critical' ? 'text-rose-500' : 'text-amber-500'}`} />
          <h4 className="text-sm font-semibold text-slate-100">{incident.title}</h4>
        </div>
        {getSeverityBadge(incident.severity)}
      </div>

      <p className="text-xs text-slate-400 mb-3 leading-relaxed">
        {incident.description}
      </p>

      {/* Meta tags and officer info */}
      <div className="flex flex-wrap items-center gap-2 mb-3">
        {incident.tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono"
          >
            #{tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs text-slate-400">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 font-mono">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            {formatTimeAgo(incident.timestamp)}
          </span>
          <span>•</span>
          <span className="text-sky-400 font-mono">
            IA: {Math.round(incident.aiConfidence * 100)}%
          </span>
        </div>

        {incident.status === 'pending_review' ? (
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onDismiss?.(incident.id)}
            >
              Descartar
            </Button>
            <Button
              variant="primary"
              size="sm"
              icon={<CheckCircle2 className="w-3.5 h-3.5" />}
              onClick={() => onVerify?.(incident.id)}
            >
              Validar
            </Button>
          </div>
        ) : (
          <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> Verificado
          </span>
        )}
      </div>
    </div>
  );
};

