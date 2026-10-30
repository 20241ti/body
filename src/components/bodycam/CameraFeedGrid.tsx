import React from 'react';
import { CameraDevice } from '../../types';
import { Badge } from '../common/Badge';
import { Battery, MapPin, User, ShieldAlert } from 'lucide-react';
import { cn } from '../../utils/helpers';

interface CameraFeedGridProps {
  cameras: CameraDevice[];
  selectedCameraId?: string;
  onSelectCamera: (camera: CameraDevice) => void;
}

export const CameraFeedGrid: React.FC<CameraFeedGridProps> = ({
  cameras,
  selectedCameraId,
  onSelectCamera,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
      {cameras.map((cam) => {
        const isSelected = cam.id === selectedCameraId;
        const isAlert = cam.status === 'alert';

        return (
          <div
            key={cam.id}
            onClick={() => onSelectCamera(cam)}
            className={cn(
              'group relative rounded-xl overflow-hidden cursor-pointer border bg-slate-900 transition-all duration-200',
              isSelected
                ? 'ring-2 ring-sky-500 border-sky-500 shadow-lg shadow-sky-500/10'
                : 'border-slate-800 hover:border-slate-700',
              isAlert && 'border-rose-500/60 ring-1 ring-rose-500/40'
            )}
          >
            {/* Camera feed preview thumbnail */}
            <div className="aspect-video relative bg-slate-950 overflow-hidden">
              <img
                src={cam.feedUrl}
                alt={cam.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/50" />

              {/* Status Badge */}
              <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                <Badge
                  variant={
                    cam.status === 'alert'
                      ? 'danger'
                      : cam.status === 'recording'
                      ? 'warning'
                      : cam.status === 'online'
                      ? 'success'
                      : 'default'
                  }
                >
                  {cam.status}
                </Badge>
              </div>

              {/* Battery level */}
              <div className="absolute top-2.5 right-2.5 bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded text-[11px] font-mono text-slate-300 flex items-center gap-1">
                <Battery className="w-3 h-3 text-emerald-400" />
                {cam.batteryLevel}%
              </div>

              {/* Info overlay on bottom of preview */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5">
                <p className="text-sm font-semibold text-white truncate flex items-center justify-between">
                  <span>{cam.name}</span>
                  <span className="text-[10px] font-mono text-slate-400">{cam.badgeNumber}</span>
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-300 mt-1">
                  <span className="flex items-center gap-1 text-[11px] text-slate-400">
                    <User className="w-3 h-3 text-sky-400" /> {cam.officerName}
                  </span>
                </div>
              </div>
            </div>

            {/* Sub-bar with address */}
            <div className="p-2.5 bg-slate-900 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span className="flex items-center gap-1 truncate max-w-[200px]">
                <MapPin className="w-3 h-3 text-slate-500 shrink-0" />
                <span className="truncate">{cam.gpsLocation.address}</span>
              </span>
              {isAlert && (
                <span className="text-rose-400 flex items-center gap-1 font-semibold shrink-0">
                  <ShieldAlert className="w-3 h-3" /> IA Alerta
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

