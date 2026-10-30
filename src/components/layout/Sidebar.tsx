import React from 'react';
import { 
  LayoutDashboard, 
  Video, 
  AlertTriangle, 
  BarChart3, 
  Settings, 
  HelpCircle,
  Radio
} from 'lucide-react';
import { NavigationTab } from '../../types';
import { cn } from '../../utils/helpers';

interface SidebarProps {
  currentTab: NavigationTab;
  onTabChange: (tab: NavigationTab) => void;
  criticalIncidentsCount?: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentTab,
  onTabChange,
  criticalIncidentsCount = 0,
}) => {
  const menuItems = [
    { id: 'dashboard' as NavigationTab, label: 'Painel Geral', icon: LayoutDashboard },
    { id: 'cameras' as NavigationTab, label: 'Transmissões Ao Vivo', icon: Video },
    { 
      id: 'incidents' as NavigationTab, 
      label: 'Incidentes Detectados', 
      icon: AlertTriangle,
      badge: criticalIncidentsCount > 0 ? criticalIncidentsCount : undefined,
    },
    { id: 'analytics' as NavigationTab, label: 'Métricas & IA', icon: BarChart3 },
    { id: 'settings' as NavigationTab, label: 'Configurações', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between p-4 shrink-0">
      <div className="space-y-6">
        {/* Live system pill */}
        <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4 text-rose-500 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">Patrulha Ativa</span>
          </div>
          <span className="text-xs px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 font-mono font-medium">
            4 Conectadas
          </span>
        </div>

        {/* Navigation list */}
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={cn(
                  'w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-medium transition-all duration-150',
                  isActive
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-rose-500 text-white font-bold animate-pulse">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Footer Support section */}
      <div className="pt-4 border-t border-slate-800 text-slate-400 space-y-2">
        <button className="flex items-center gap-2 text-xs hover:text-white transition-colors w-full px-2 py-1.5">
          <HelpCircle className="w-4 h-4" />
          <span>Manual de Operação</span>
        </button>
        <div className="px-2 text-[10px] text-slate-500">
          BodyCam AI Sistema v1.0.0
        </div>
      </div>
    </aside>
  );
};

