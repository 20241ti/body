import React from 'react';
import { Shield, Bell, Wifi, Search, User } from 'lucide-react';
import { APP_CONFIG } from '../../utils/constants';

interface HeaderProps {
  onSearch?: (term: string) => void;
}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="h-16 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40 px-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
          <Shield className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-base font-bold tracking-tight text-white flex items-center gap-2">
            {APP_CONFIG.name}
            <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">
              v{APP_CONFIG.version}
            </span>
          </h1>
          <p className="text-xs text-slate-400 hidden sm:block">Centro Integrado de Operações & Visão IA</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative hidden md:block w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Pesquisar câmeras, viaturas..."
            className="w-full bg-slate-950/60 border border-slate-800 text-xs rounded-lg pl-9 pr-3 py-2 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
          />
        </div>

        {/* Status indicator */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-800/40 text-emerald-400 text-xs font-mono">
          <Wifi className="w-3.5 h-3.5 animate-pulse" />
          <span className="hidden sm:inline">IA Engine:</span> ONLINE
        </div>

        {/* Notifications */}
        <button
          className="relative p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          aria-label="Notificações"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-slate-900 animate-ping" />
        </button>

        {/* User profile */}
        <div className="flex items-center gap-3 pl-2 border-l border-slate-800">
          <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
            <User className="w-4 h-4" />
          </div>
          <div className="text-left hidden lg:block">
            <p className="text-xs font-medium text-slate-200">Operador Central</p>
            <p className="text-[10px] text-slate-400">Sala de Comando</p>
          </div>
        </div>
      </div>
    </header>
  );
};

