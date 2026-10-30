import React, { useState } from 'react';
import { X, ShieldAlert, Search, Copy, Check } from 'lucide-react';
import { useCaseContext } from '../../context/CaseContext';

export const TranscriptionModal: React.FC = () => {
  const { selectedVideoForTranscription, setSelectedVideoForTranscription } = useCaseContext();
  const [copied, setCopied] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');

  if (!selectedVideoForTranscription) return null;

  const handleCopy = () => {
    const text = selectedVideoForTranscription.transcription
      .map((t) => `[${t.timestamp}] ${t.speaker}: ${t.text}`)
      .join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredLines = selectedVideoForTranscription.transcription.filter((t) =>
    t.text.toLowerCase().includes(searchFilter.toLowerCase()) ||
    t.speaker.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-police-sidebar border border-police-border rounded-xl shadow-2xl flex flex-col max-h-[85vh] overflow-hidden">
        {/* Header */}
        <div className="px-5 py-3.5 border-b border-police-border flex items-center justify-between bg-police-bg/50">
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span>Transcrição de Áudio com IA</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-police-cyan/20 text-police-cyan font-mono font-normal">
                Camera {selectedVideoForTranscription.cameraNumber}
              </span>
            </h3>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Reconhecimento de fala e diarização de interlocutores (Oficial / Suspeito)
            </p>
          </div>

          <button
            type="button"
            onClick={() => setSelectedVideoForTranscription(null)}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-police-border/50 transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toolbar */}
        <div className="px-5 py-2.5 bg-police-card/40 border-b border-police-border/80 flex items-center justify-between gap-3 text-xs">
          <div className="relative flex-1 max-w-xs">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Buscar fala ou palavra-chave..."
              className="w-full bg-police-bg border border-police-border rounded pl-8 pr-2.5 py-1 text-slate-200 text-xs focus:outline-none focus:border-police-cyan"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1 px-2.5 py-1 rounded bg-police-border/40 hover:bg-police-border text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copiado!' : 'Copiar Texto'}</span>
            </button>
          </div>
        </div>

        {/* Transcript Dialogue List */}
        <div className="p-5 overflow-y-auto space-y-3.5 text-xs">
          {filteredLines.length === 0 ? (
            <p className="text-center py-8 text-slate-500">Nenhum trecho encontrado com os filtros.</p>
          ) : (
            filteredLines.map((entry, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-lg border transition-colors ${
                  entry.isAiFlagged
                    ? 'bg-amber-950/20 border-amber-800/60'
                    : 'bg-police-card/30 border-police-border/40'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5 font-mono text-[11px]">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-200 font-sans">{entry.speaker}</span>
                    {entry.isAiFlagged && (
                      <span className="flex items-center gap-1 text-[10px] text-amber-400 bg-amber-900/40 px-1.5 py-0.2 rounded border border-amber-700/50">
                        <ShieldAlert className="w-3 h-3" /> Ponto Crítico de Risco
                      </span>
                    )}
                  </div>
                  <span className="text-slate-500">{entry.timestamp}</span>
                </div>
                <p className="text-slate-300 leading-relaxed font-sans">{entry.text}</p>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-police-border bg-police-bg flex justify-between items-center text-[11px] text-slate-500">
          <span>Áudio criptografado • Certificado de Cadeia de Custódia Digital</span>
          <button
            type="button"
            onClick={() => setSelectedVideoForTranscription(null)}
            className="px-3 py-1 rounded bg-police-border/50 hover:bg-police-border text-slate-200 transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
