import React from 'react';
import { 
  ShieldAlert, 
  Radio, 
  CheckCircle, 
  Activity, 
  RefreshCw 
} from 'lucide-react';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { VideoPlayer } from '../components/bodycam/VideoPlayer';
import { DetectionList } from '../components/bodycam/DetectionList';
import { useCameraContext } from '../context/CameraContext';

export const Dashboard: React.FC = () => {
  const { cameras, incidents, selectedCamera, setSelectedCamera, updateIncidentStatus, refreshData, isLoading } =
    useCameraContext();

  const totalCameras = cameras.length;
  const activeAlerts = incidents.filter((i) => i.severity === 'critical' && i.status === 'pending_review').length;
  const onlineCameras = cameras.filter((c) => c.status !== 'offline').length;
  const verifiedToday = incidents.filter((i) => i.status === 'verified').length;

  return (
    <div className="space-y-6">
      {/* Top Banner & Quick Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">Visão Geral Operacional</h2>
          <p className="text-xs text-slate-400">
            Monitoramento em tempo real com triagem neural de ameaças e detecção de incidentes.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            icon={<RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />}
            onClick={() => refreshData()}
          >
            Atualizar Feeds
          </Button>
          <Button variant="danger" size="sm" icon={<ShieldAlert className="w-3.5 h-3.5" />}>
            Emitir Alerta Geral
          </Button>
        </div>
      </div>

      {/* KPI Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Câmeras Conectadas</p>
            <p className="text-2xl font-bold text-white mt-1">{onlineCameras} <span className="text-xs text-slate-500 font-normal">/ {totalCameras}</span></p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
            <Radio className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Alertas Críticos Pendentes</p>
            <p className="text-2xl font-bold text-rose-400 mt-1">{activeAlerts}</p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 animate-pulse">
            <ShieldAlert className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Precisão Média IA</p>
            <p className="text-2xl font-bold text-emerald-400 mt-1">94.8%</p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <Activity className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Ocorrências Verificadas</p>
            <p className="text-2xl font-bold text-slate-200 mt-1">{verifiedToday}</p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
            <CheckCircle className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Main Grid: Live Focus Stream + Detection Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Focused Video Stream & Camera Selector */}
        <div className="lg:col-span-2 space-y-4">
          <Card
            title={`Transmissão Principal: ${selectedCamera?.name || 'Selecione uma câmera'}`}
            subtitle="Análise contínua com detecção de padrões de risco e OCR de viaturas"
          >
            <VideoPlayer camera={selectedCamera} />

            {/* Camera switch bar */}
            <div className="mt-4 pt-3 border-t border-slate-800">
              <p className="text-xs font-semibold text-slate-400 mb-2">Alternar Câmera em Foco:</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {cameras.map((cam) => {
                  const isCurrent = cam.id === selectedCamera?.id;
                  return (
                    <button
                      key={cam.id}
                      onClick={() => setSelectedCamera(cam)}
                      className={`text-left p-2 rounded-lg border text-xs transition-all ${
                        isCurrent
                          ? 'border-sky-500 bg-sky-950/40 text-white'
                          : 'border-slate-800 bg-slate-950 hover:border-slate-700 text-slate-400'
                      }`}
                    >
                      <div className="font-semibold truncate">{cam.name}</div>
                      <div className="text-[10px] text-slate-500 truncate">{cam.officerName}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column: Real-time Detections */}
        <div className="space-y-4">
          <Card
            title="Detecções & Alertas de IA"
            subtitle="Triagem em tempo real gerada por visão computacional"
          >
            <DetectionList
              incidents={incidents}
              onVerify={(id) => updateIncidentStatus(id, 'verified')}
              onDismiss={(id) => updateIncidentStatus(id, 'dismissed')}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

