import React, { useState } from 'react';
import { Play, Pause, FileText } from 'lucide-react';
import { BodyCameraVideo } from '../../types/case';
import { useCaseContext } from '../../context/CaseContext';

interface BodyCameraVideoCardProps {
  video: BodyCameraVideo;
}

export const BodyCameraVideoCard: React.FC<BodyCameraVideoCardProps> = ({ video }) => {
  const { setSelectedVideoForTranscription } = useCaseContext();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-start gap-6 py-4 border-b border-police-border/60 last:border-0">
      {/* Left Column: Metadata */}
      <div className="w-full md:w-52 space-y-3 shrink-0 text-xs">
        <h4 className="text-sm font-bold text-slate-100 tracking-tight">
          Camera {video.cameraNumber}
        </h4>

        <div className="space-y-2">
          <div>
            <span className="text-slate-500 block text-[11px]">Officer</span>
            <span className="text-slate-200 font-medium">{video.officerName}</span>
          </div>

          <div>
            <span className="text-slate-500 block text-[11px]">Date</span>
            <span className="text-slate-200 font-mono">{video.date}</span>
          </div>

          <div>
            <span className="text-slate-500 block text-[11px]">Pre-Record</span>
            <span className="text-slate-300 font-mono">{video.preRecord}</span>
          </div>

          <div>
            <span className="text-slate-500 block text-[11px]">Incident Clip</span>
            <span className="text-slate-300 font-mono font-medium text-amber-400">{video.incidentClip}</span>
          </div>

          <div>
            <span className="text-slate-500 block text-[11px]">Full Clip</span>
            <span className="text-slate-300 font-mono">{video.fullClip}</span>
          </div>
        </div>
      </div>

      {/* Right Column: Video Viewport & Transcription link */}
      <div className="w-full max-w-xl space-y-2">
        <div
          onClick={() => setIsPlaying(!isPlaying)}
          className="relative aspect-video rounded-xl overflow-hidden bg-black border border-police-border shadow-md cursor-pointer group select-none"
        >
          <img
            src={video.thumbnailUrl}
            alt={`Captura da câmera ${video.cameraNumber}`}
            className="w-full h-full object-cover group-hover:brightness-105 transition-all"
          />

          {/* Vignette effect */}
          <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />

          {/* Central Play/Pause Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white shadow-2xl group-hover:scale-105 transition-transform">
              {isPlaying ? (
                <Pause className="w-6 h-6 text-white" />
              ) : (
                <Play className="w-6 h-6 text-white fill-white ml-0.5" />
              )}
            </div>
          </div>

          {/* Duration overlay badge */}
          <div className="absolute bottom-2.5 right-2.5 bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded text-[11px] font-mono text-slate-200 border border-white/10">
            {video.videoDuration}
          </div>

          {/* Watermark timestamp simulation */}
          <div className="absolute top-2.5 left-2.5 bg-black/60 px-2 py-0.5 rounded text-[10px] font-mono text-slate-300">
            REC • {video.date} 14:22:08 UTC
          </div>
        </div>

        {/* View Transcription Action Link */}
        <div className="pt-1">
          <button
            type="button"
            onClick={() => setSelectedVideoForTranscription(video)}
            className="text-xs text-police-cyan hover:text-sky-300 font-medium transition-colors cursor-pointer flex items-center gap-1.5 focus:outline-none focus:underline"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>View Transcription</span>
          </button>
        </div>
      </div>
    </div>
  );
};
