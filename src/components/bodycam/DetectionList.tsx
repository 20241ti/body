import React from 'react';
import { Incident } from '../../types';
import { IncidentCard } from './IncidentCard';
import { AlertCircle } from 'lucide-react';

interface DetectionListProps {
  incidents: Incident[];
  onVerify: (id: string) => void;
  onDismiss: (id: string) => void;
}

export const DetectionList: React.FC<DetectionListProps> = ({
  incidents,
  onVerify,
  onDismiss,
}) => {
  if (incidents.length === 0) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center">
        <AlertCircle className="w-8 h-8 text-slate-600 mx-auto mb-2" />
        <p className="text-sm font-medium text-slate-300">Nenhuma detecção registrada</p>
        <p className="text-xs text-slate-500 mt-1">
          A inteligência artificial está monitorando as transmissões em tempo real.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {incidents.map((incident) => (
        <IncidentCard
          key={incident.id}
          incident={incident}
          onVerify={onVerify}
          onDismiss={onDismiss}
        />
      ))}
    </div>
  );
};

