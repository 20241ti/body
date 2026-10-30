import React, { useState } from 'react';
import { X, Package } from 'lucide-react';
import { useCaseContext } from '../../context/CaseContext';

export const AddEvidenceModal: React.FC = () => {
  const { isAddEvidenceModalOpen, setIsAddEvidenceModalOpen, addArticle } = useCaseContext();
  const [itemNumber, setItemNumber] = useState('');
  const category = 'Evidence';
  const [type, setType] = useState('Firearm');
  const [location, setLocation] = useState('Locker 12');
  const thumbnail = 'https://images.unsplash.com/photo-1584447128309-b66b7a4d1b63?auto=format&fit=crop&w=200&q=80';

  if (!isAddEvidenceModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!itemNumber.trim()) return;

    addArticle({
      itemNumber,
      category,
      status: 'Collected',
      type,
      location,
      thumbnail,
    });

    setIsAddEvidenceModalOpen(false);
    setItemNumber('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-md bg-police-sidebar border border-police-border rounded-xl shadow-2xl p-5 overflow-hidden">
        <div className="flex items-center justify-between pb-3 border-b border-police-border">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Package className="w-4 h-4 text-police-gold" />
            <span>Adicionar Novo Item de Evidência</span>
          </h3>
          <button
            type="button"
            onClick={() => setIsAddEvidenceModalOpen(false)}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-police-border/50 transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-3.5 text-xs">
          <div>
            <label className="block text-slate-300 font-medium mb-1">Número do Item (Item #)</label>
            <input
              type="text"
              required
              placeholder="ex: P3247277299"
              value={itemNumber}
              onChange={(e) => setItemNumber(e.target.value)}
              className="w-full bg-police-bg border border-police-border rounded px-3 py-2 text-slate-200 focus:outline-none focus:border-police-gold font-mono"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 font-medium mb-1">Tipo de Evidência</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full bg-police-bg border border-police-border rounded px-2.5 py-2 text-slate-200 focus:outline-none focus:border-police-gold"
              >
                <option value="Firearm">Arma de Fogo (Firearm)</option>
                <option value="Bladed Weapon">Arma Branca (Knife)</option>
                <option value="Narcotics">Substância Ilícita</option>
                <option value="Electronics">Eletrônico / Celular</option>
                <option value="Documents">Documento / Identidade</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">Local de Armazenamento</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="ex: Locker 12"
                className="w-full bg-police-bg border border-police-border rounded px-3 py-2 text-slate-200 focus:outline-none focus:border-police-gold"
              />
            </div>
          </div>

          <div className="pt-3 border-t border-police-border flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsAddEvidenceModalOpen(false)}
              className="px-3 py-1.5 rounded bg-police-border/40 hover:bg-police-border text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 rounded bg-police-gold hover:bg-police-goldHover text-slate-950 font-bold transition-colors cursor-pointer"
            >
              Salvar Evidência
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
