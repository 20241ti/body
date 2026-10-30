import React from 'react';
import { CaseHeader } from '../components/case/CaseHeader';
import { LeftSidebar } from '../components/case/LeftSidebar';
import { RightAppRail } from '../components/case/RightAppRail';
import { EvidenceView } from '../components/case/EvidenceView';
import { BasicInfoView } from '../components/case/BasicInfoView';
import { PeopleInvolvedView } from '../components/case/PeopleInvolvedView';
import { NarrativeView } from '../components/case/NarrativeView';
import { FormsView } from '../components/case/FormsView';
import { TranscriptionModal } from '../components/case/TranscriptionModal';
import { AddEvidenceModal } from '../components/case/AddEvidenceModal';
import { useCaseContext } from '../context/CaseContext';

export const CaseReportPage: React.FC = () => {
  const { activeSection } = useCaseContext();

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'evidence':
        return <EvidenceView />;
      case 'basic_info':
        return <BasicInfoView />;
      case 'people':
        return <PeopleInvolvedView />;
      case 'narrative':
        return <NarrativeView />;
      case 'forms':
        return <FormsView />;
      default:
        return (
          <div className="py-12 text-center text-slate-500 bg-police-sidebar/40 rounded-xl border border-police-border">
            <p className="text-sm font-medium text-slate-300">Seção em Preparação</p>
            <p className="text-xs text-slate-500 mt-1">Os registros adicionais estão sincronizados no servidor seguro.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-police-bg text-slate-100 font-sans">
      {/* Top Header: Fixed, opaque, doesn't scroll */}
      <CaseHeader />

      {/* Main 3-Column Work Area: Fills remaining height strictly */}
      <div className="flex flex-1 min-h-0 w-full overflow-hidden">
        {/* Left Secondary Case Navigation: Scrollable only if items overflow */}
        <LeftSidebar />

        {/* Central Workspace: THE ONLY SCROLLABLE AREA */}
        <main className="flex-1 min-w-0 h-full overflow-y-auto p-6 bg-police-bg">
          <div className="max-w-5xl mx-auto pb-12">
            {renderSectionContent()}
          </div>
        </main>

        {/* Right Primary App Rail: Fixed height */}
        <RightAppRail />
      </div>

      {/* Overlay Modals */}
      <TranscriptionModal />
      <AddEvidenceModal />
    </div>
  );
};
