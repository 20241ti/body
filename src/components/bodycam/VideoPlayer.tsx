import React, { useState } from 'react';
import { 
  Play, 
  Pause, 
  Maximize2, 
  Volume2, 
  VolumeX, 
  Eye, 
  EyeOff, 
  Battery, 
  MapPin, 
  UserCheck, 
  Scan
} from 'lucide-react';
import { CameraDevice } from '../../types';
import { Badge } from '../common/Badge';

interface VideoPlayerProps {
  camera: CameraDevice | null;
  onFullScreen?: () => void;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ camera }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showAiBoxes, setShowAiBoxes] = useState(true);

  if (!camera) {
    return (
      <div className="h-96 w-full bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-500">
        Nenhuma câmera selecionada
      </div>
    );
  }

  const getStatusBadgeVariant = (status: CameraDevice['status']) => {
    switch (status) {
      case 'alert':
        return 'danger';
      case 'recording':
        return 'warning';
      case 'online':
        return 'success';
      default:
        return 'default';
    }
  };

  return (
    <div className="relative bg-black rounded-xl overflow-hidden border border-slate-800 shadow-2xl group">
      {/* Video stream container (Simulated stream via styled image + HUD) */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-950 flex items-center justify-center">
        <img
          src={camera.feedUrl}
          alt={`Feed da ${camera.name}`}
          className="w-full h-full object-cover opacity-85 select-none"
        />

        {/* Scanline / Camera Lens Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

        {/* AI Detection Overlay Bounding Box */}
        {showAiBoxes && camera.status === 'alert' && (
          <div className="absolute top-[32%] left-[42%] w-[26%] h-[45%] border-2 border-rose-500 bg-rose-500/10 rounded-sm animate-pulse pointer-events-none flex flex-col justify-between p-1.5">
            <div className="flex items-center justify-between text-[10px] bg-rose-600 text-white font-mono px-1 py-0.5 rounded shadow">
              <span className="flex items-center gap-1 font-bold">
                <Scan className="w-3 h-3" /> ARMA DETECTADA
              </span>
              <span>94%</span>
            </div>
            <div className="text-[9px] text-rose-300 font-mono tracking-tighter self-end bg-black/60 px-1 rounded">
              ID: OBJ_ARM_092
            </div>
          </div>
        )}

        {/* Top HUD Overlay */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-2">
            <Badge variant={getStatusBadgeVariant(camera.status)}>
              {camera.status === 'alert' ? 'ALERTA IA CRÍTICO' : camera.status}
            </Badge>
            <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-xs font-mono text-slate-200 border border-white/10">
              {camera.name} • {camera.badgeNumber}
            </span>
          </div>

          <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-slate-300 border border-white/10">
            <span className="flex items-center gap-1">
              <Battery className="w-3.5 h-3.5 text-emerald-400" />
              {camera.batteryLevel}%
            </span>
            <span>•</span>
            <span className="text-rose-400 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping inline-block" />
              REC LIVE
            </span>
          </div>
        </div>

        {/* Bottom HUD Location & Officer */}
        <div className="absolute bottom-16 left-4 right-4 flex items-center justify-between text-xs text-slate-300 pointer-events-none font-mono">
          <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded border border-white/5">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            <span>{camera.gpsLocation.address}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded border border-white/5">
            <UserCheck className="w-3.5 h-3.5 text-slate-400" />
            <span>{camera.officerName}</span>
          </div>
        </div>
      </div>

      {/* Control Bar */}
      <div className="bg-slate-900/95 backdrop-blur-md border-t border-slate-800 px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
            title={isPlaying ? 'Pausar transmissão' : 'Reproduzir transmissão'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
            title={isMuted ? 'Desmutar áudio' : 'Mutar áudio'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          <span className="text-xs text-slate-400 font-mono">
            {new Date().toLocaleTimeString('pt-BR')} (Tempo Real)
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Toggle AI Vision Overlays */}
          <button
            onClick={() => setShowAiBoxes(!showAiBoxes)}
            className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md border transition-all ${
              showAiBoxes
                ? 'bg-sky-950/60 text-sky-400 border-sky-800/80 shadow'
                : 'bg-slate-800 text-slate-400 border-slate-700'
            }`}
          >
            {showAiBoxes ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
            <span>Overlay IA</span>
          </button>

          <button
            className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
            title="Tela cheia"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

