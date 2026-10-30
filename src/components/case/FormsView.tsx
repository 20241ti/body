import React from 'react';
import { Clock } from 'lucide-react';
import { useCaseContext } from '../../context/CaseContext';

export const FormsView: React.FC = () => {
  const { currentCase } = useCaseContext();

  const formsList = [
    { title: 'Formulário de Apreensão de Armamento (A-102)', status: 'Pendente', urgent: true },
    { title: 'Registro de Cadeia de Custódia Digital (CCD-04)', status: 'Pendente', urgent: true },
    { title: 'Checklist de Uso da Força / Desescalada', status: 'Pendente', urgent: true },
    { title: 'Termo de Notificação de Direitos (Miranda Warning)', status: 'Pendente', urgent: false },
  ];

  return (
    <div className="space-y-4 text-xs">
      <div className="flex items-center justify-between pb-2 border-b border-police-border">
        <div>
          <h2 className="text-base font-semibold text-white">Formulários & Aprovações ({currentCase.formsNeedingApproval})</h2>
          <p className="text-[11px] text-slate-400">Documentos obrigatórios para homologação NIBRS do caso criminal.</p>
        </div>
      </div>

      <div className="space-y-2.5">
        {formsList.map((form, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-lg bg-police-sidebar border border-police-border flex items-center justify-between hover:bg-police-card/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-amber-400" />
              <div>
                <h4 className="text-sm font-medium text-slate-200">{form.title}</h4>
                <span className="text-[11px] text-slate-500">Aguardando preenchimento do supervisor de plantão</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-950/70 text-amber-400 border border-amber-800/80">
                {form.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
