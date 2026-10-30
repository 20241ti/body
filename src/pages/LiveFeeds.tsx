import React, { useState } from 'react';
import { CameraFeedGrid } from '../components/bodycam/CameraFeedGrid';
import { useCameraContext } from '../context/CameraContext';
import { Button } from '../components/common/Button';
import { Plus } from 'lucide-react';
import { CameraStatus } from '../types';

export const LiveFeeds: React.FC = () => {
  const { cameras, selectedCamera, setSelectedCamera } = useCameraContext();
  const [filterStatus, setFilterStatus] = useState<CameraStatus | 'all'>('all');

  const filteredCameras = cameras.filter((cam) => {
    if (filterStatus === 'all') return true;
    return cam.status === filterStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">Transmissões ao Vivo (Mural de Câmeras)</h2>
          <p className="text-xs text-slate-400">
            Acompanhamento simultâneo de viaturas e agentes em campo.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Status filters */}
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-1 text-xs">
            <button
              onClick={() => setFilterStatus('all')}
              className={`px-3 py-1 rounded-md transition-colors ${
                filterStatus === 'all' ? 'bg-sky-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Todas ({cameras.length})
            </button>
            <button
              onClick={() => setFilterStatus('alert')}
              className={`px-3 py-1 rounded-md transition-colors ${
                filterStatus === 'alert' ? 'bg-rose-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Em Alerta
            </button>
            <button
              onClick={() => setFilterStatus('recording')}
              className={`px-3 py-1 rounded-md transition-colors ${
                filterStatus === 'recording' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Gravando
            </button>
          </div>

          <Button variant="primary" size="sm" icon={<Plus className="w-3.5 h-3.5" />}>
            Conectar Câmera
          </Button>
        </div>
      </div>

      {/* Grid of live cameras */}
      <CameraFeedGrid
        cameras={filteredCameras}
        selectedCameraId={selectedCamera?.id}
        onSelectCamera={(camera) => setSelectedCamera(camera)}
      />
    </div>
  );
};

