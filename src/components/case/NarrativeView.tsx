import React from 'react';
import { Sparkles, CheckCircle } from 'lucide-react';

export const NarrativeView: React.FC = () => {
  return (
    <div className="space-y-5 text-xs">
      <div className="flex items-center justify-between pb-2 border-b border-police-border">
        <div>
          <h2 className="text-base font-semibold text-white">Relatório Narrativo do Oficial</h2>
          <p className="text-[11px] text-slate-400">Transcrito e complementado com auditoria de vídeo da BodyCam.</p>
        </div>
        <span className="flex items-center gap-1 text-[11px] text-police-cyan bg-police-cyanBg px-2 py-0.5 rounded border border-police-cyan/30">
          <Sparkles className="w-3 h-3" /> IA Copilot Auxiliado
        </span>
      </div>

      <div className="p-5 rounded-xl bg-police-sidebar border border-police-border space-y-4 text-slate-300 leading-relaxed">
        <p>
          No dia 12 de Abril de 2021, aproximadamente às 14:18 horas, a viatura 24 sob meu comando (Oficial Shane Kelly) foi despachada para o endereço 410 Elm Street após chamados de perturbação da ordem pública com possível menção a arma visível.
        </p>
        <p>
          Ao adentrar o pátio norte, avistei um indivíduo do sexo masculino (posteriormente identificado como David M. Walker) caminhando em direção a uma caminhonete prata. Foi dada ordem verbal clara de parada e afastamento do veículo, devidamente registrada no clipe de pré-gravação e clipe principal da BodyCam #5650A.
        </p>
        <p>
          Durante o procedimento de abordagem preventiva, foi constatado porte velado de arma de fogo no coldre à cintura direita. O indivíduo acatou as instruções de imobilização até a chegada da unidade de apoio (Oficial Vance). A arma foi desmuniciada, apreendida sob lacre P3247277282 e encaminhada ao armário de custódia (Locker 12).
        </p>

        <div className="pt-3 border-t border-police-border/60 flex items-center justify-between text-[11px] text-slate-400">
          <span>Assinado digitalmente por: <strong>Shane Kelly (ID: #4829)</strong></span>
          <span className="text-emerald-400 flex items-center gap-1">
            <CheckCircle className="w-3 h-3" /> Hash SHA-256 Validado
          </span>
        </div>
      </div>
    </div>
  );
};
