import React, { useState } from 'react';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { Bell, Cpu, Shield, Activity, Save } from 'lucide-react';

export const Settings: React.FC = () => {
  const [aiConfidenceThreshold, setAiConfidenceThreshold] = useState(85);
  const [facialRecognition, setFacialRecognition] = useState(true);
  const [weaponDetection, setWeaponDetection] = useState(true);
  const [motionAlerts, setMotionAlerts] = useState(false);
  const [audioAnalysis, setAudioAnalysis] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h2 className="text-xl font-bold text-white tracking-tight">Configurações do Sistema</h2>
        <p className="text-xs text-slate-400">
          Ajuste os parâmetros de visão computacional, limiares de alarme e integração com dispositivos.
        </p>
      </div>

      <div className="space-y-4">
        {/* AI Vision Thresholds */}
        <Card
          title="Parâmetros de Inteligência Artificial"
          subtitle="Controle a sensibilidade dos modelos de detecção de objetos e ameaças"
        >
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold text-slate-300">
                  Limiar Mínimo de Confiança para Alertas
                </label>
                <span className="text-xs font-mono font-bold text-sky-400">
                  {aiConfidenceThreshold}%
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="99"
                value={aiConfidenceThreshold}
                onChange={(e) => setAiConfidenceThreshold(Number(e.target.value))}
                className="w-full accent-sky-500 bg-slate-800 rounded-lg h-2 cursor-pointer"
              />
              <p className="text-[11px] text-slate-500 mt-1">
                Alertas com pontuação inferior a {aiConfidenceThreshold}% serão descartados automaticamente como falso-positivo.
              </p>
            </div>

            <div className="border-t border-slate-800 pt-4 space-y-3">
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Módulos de Detecção Ativos
              </h4>

              <div className="flex items-center justify-between p-3 bg-slate-950 rounded-lg border border-slate-800/80">
                <div className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-rose-400" />
                  <div>
                    <p className="text-xs font-medium text-slate-200">Detecção de Armamento (YOLOv10)</p>
                    <p className="text-[11px] text-slate-500">Identificação em tempo real de armas de fogo e armas brancas</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={weaponDetection}
                  onChange={(e) => setWeaponDetection(e.target.checked)}
                  className="w-4 h-4 accent-sky-500 rounded"
                />
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-950 rounded-lg border border-slate-800/80">
                <div className="flex items-center gap-3">
                  <Cpu className="w-4 h-4 text-sky-400" />
                  <div>
                    <p className="text-xs font-medium text-slate-200">Reconhecimento Facial de Procurados</p>
                    <p className="text-[11px] text-slate-500">Cruzamento biométrico com banco central de mandados</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={facialRecognition}
                  onChange={(e) => setFacialRecognition(e.target.checked)}
                  className="w-4 h-4 accent-sky-500 rounded"
                />
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-950 rounded-lg border border-slate-800/80">
                <div className="flex items-center gap-3">
                  <Bell className="w-4 h-4 text-amber-400" />
                  <div>
                    <p className="text-xs font-medium text-slate-200">Detecção de Pânico por Áudio / Estresse Vocal</p>
                    <p className="text-[11px] text-slate-500">Classificação acústica de disparos, gritos e agressão</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={audioAnalysis}
                  onChange={(e) => setAudioAnalysis(e.target.checked)}
                  className="w-4 h-4 accent-sky-500 rounded"
                />
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-950 rounded-lg border border-slate-800/80">
                <div className="flex items-center gap-3">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  <div>
                    <p className="text-xs font-medium text-slate-200">Alertas de Movimento Brusco / Queda</p>
                    <p className="text-[11px] text-slate-500">Detecção de impacto e aceleração súbita no giroscópio</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={motionAlerts}
                  onChange={(e) => setMotionAlerts(e.target.checked)}
                  className="w-4 h-4 accent-sky-500 rounded"
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Save button */}
        <div className="flex items-center justify-end gap-3 pt-2">
          {saved && (
            <span className="text-xs text-emerald-400 font-medium animate-pulse">
              ✓ Configurações salvas com sucesso!
            </span>
          )}
          <Button
            variant="primary"
            icon={<Save className="w-4 h-4" />}
            onClick={handleSave}
          >
            Salvar Alterações
          </Button>
        </div>
      </div>
    </div>
  );
};
