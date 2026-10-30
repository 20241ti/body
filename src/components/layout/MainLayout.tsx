import React from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { NavigationTab } from '../../types';
import { useCameraContext } from '../../context/CameraContext';

interface MainLayoutProps {
  children: React.ReactNode;
  currentTab: NavigationTab;
  onTabChange: (tab: NavigationTab) => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  currentTab,
  onTabChange,
}) => {
  const { incidents } = useCameraContext();
  const criticalCount = incidents.filter((i) => i.severity === 'critical').length;

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          currentTab={currentTab}
          onTabChange={onTabChange}
          criticalIncidentsCount={criticalCount}
        />
        <main className="flex-1 overflow-y-auto p-6 bg-slate-950">
          <div className="max-w-7xl mx-auto space-y-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

