import React from 'react';
import { useCaseContext } from '../../context/CaseContext';
import { CaseNavSection } from '../../types/case';

interface NavItem {
  id: CaseNavSection;
  label: string;
  badge?: number;
  hasAlertDot?: boolean;
}

export const LeftSidebar: React.FC = () => {
  const { activeSection, setActiveSection, currentCase } = useCaseContext();

  const navItems: NavItem[] = [
    { id: 'basic_info', label: 'Basic Information' },
    { id: 'people', label: 'People Involved', badge: 2 },
    { id: 'narrative', label: 'Narrative', badge: 1 },
    { id: 'property', label: 'Property' },
    { id: 'vehicles', label: 'Vehicles' },
    { id: 'photos', label: 'Photos' },
    { id: 'follow_ups', label: 'Follow-Ups' },
    { id: 'complaints', label: 'Complaints' },
    { id: 'evidence', label: 'Evidence', badge: currentCase.articles.length + currentCase.videos.length },
    { id: 'forms', label: 'Forms', badge: currentCase.formsNeedingApproval, hasAlertDot: true },
    { id: 'cfs', label: 'CFS Information' },
    { id: 'nibrs', label: 'NIBRS' },
  ];

  return (
    <aside
      className="w-56 shrink-0 h-full overflow-y-auto bg-[#0c0e12] border-r border-[#262b36] flex flex-col py-3 select-none"
      aria-label="Navegação das seções do caso"
    >
      <nav className="space-y-0.5">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center justify-between px-4 py-2 text-xs font-medium transition-colors cursor-pointer text-left ${
                isActive
                  ? 'bg-police-gold text-slate-950 font-bold shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-[#181b23]'
              }`}
            >
              <div className="flex items-center gap-2 truncate">
                {item.hasAlertDot && (
                  <span
                    className="w-2 h-2 rounded-full bg-rose-500 shrink-0 inline-block ring-2 ring-[#0c0e12]"
                    title="Requer atenção imediata"
                  />
                )}
                <span className="truncate">{item.label}</span>
              </div>

              {item.badge !== undefined && (
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.2 rounded font-mono ml-2 shrink-0 ${
                    isActive
                      ? 'bg-slate-950/20 text-slate-950'
                      : 'bg-police-badgeGold/20 text-police-badgeGold border border-police-badgeGold/40'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </aside>
  );
};
