import React, { createContext, useContext, useState } from 'react';
import { CaseReport, CaseNavSection, GlobalRailTab, CaseArticle, BodyCameraVideo } from '../types/case';

const INITIAL_CASE: CaseReport = {
  id: '#P21_0001234',
  badgeType: 'Criminal',
  officerName: 'Officer Shane Kelly',
  approvalStatus: 'Not yet submitted',
  formsNeedingApproval: 4,
  nibrsErrors: 0,
  lastUpdated: 'April 12, 21:25',
  articles: [
    {
      id: 'art-1',
      thumbnail: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=200&q=80',
      itemNumber: 'P3247277282',
      category: 'Evidence',
      status: 'Collected',
      type: 'Firearm',
      location: 'Locker 12',
    },
  ],
  videos: [
    {
      id: 'vid-1',
      cameraNumber: '#5650A',
      officerName: 'Shane Kelly',
      date: '04/12/2021',
      preRecord: '4:15',
      incidentClip: '14:12',
      fullClip: '19:27',
      videoDuration: '19:27',
      thumbnailUrl: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80',
      transcription: [
        {
          timestamp: '00:04:15',
          speaker: 'Officer Shane Kelly',
          text: 'Dispatch, Unit 24 arriving at 410 Elm Street. Approaching grey truck with suspect in lot.',
        },
        {
          timestamp: '00:04:32',
          speaker: 'Officer Shane Kelly',
          text: 'Sir, keep your hands where I can see them. Step away from the vehicle.',
        },
        {
          timestamp: '00:04:48',
          speaker: 'Suspect',
          text: 'I didn\'t do anything man, I\'m just heading to my apartment.',
        },
        {
          timestamp: '00:05:02',
          speaker: 'Officer Shane Kelly',
          text: 'Understood. Please keep your hands on the hood for officer safety.',
          isAiFlagged: true,
        },
        {
          timestamp: '00:05:18',
          speaker: 'Officer Shane Kelly',
          text: 'Subject has a visible holster in right waistband. 10-33 Code Red, weapon identified.',
          isAiFlagged: true,
        },
      ],
    },
    {
      id: 'vid-2',
      cameraNumber: '#5650B',
      officerName: 'Marcus Vance',
      date: '04/12/2021',
      preRecord: '3:50',
      incidentClip: '13:40',
      fullClip: '18:10',
      videoDuration: '18:10',
      thumbnailUrl: 'https://images.unsplash.com/photo-1508873696983-2df5293cb325?auto=format&fit=crop&w=800&q=80',
      transcription: [
        {
          timestamp: '00:03:52',
          speaker: 'Officer Marcus Vance',
          text: 'Backing up Kelly on perimeter east side.',
        },
        {
          timestamp: '00:04:20',
          speaker: 'Officer Marcus Vance',
          text: 'Perimeter secure, weapon secured in evidence lockbox.',
        },
      ],
    },
  ],
};

interface CaseContextType {
  currentCase: CaseReport;
  activeSection: CaseNavSection;
  setActiveSection: (section: CaseNavSection) => void;
  activeRailTab: GlobalRailTab;
  setActiveRailTab: (tab: GlobalRailTab) => void;
  selectedVideoForTranscription: BodyCameraVideo | null;
  setSelectedVideoForTranscription: (video: BodyCameraVideo | null) => void;
  isAddEvidenceModalOpen: boolean;
  setIsAddEvidenceModalOpen: (open: boolean) => void;
  addArticle: (article: Omit<CaseArticle, 'id'>) => void;
  submitForApproval: () => void;
}

const CaseContext = createContext<CaseContextType | undefined>(undefined);

export const CaseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentCase, setCurrentCase] = useState<CaseReport>(INITIAL_CASE);
  const [activeSection, setActiveSection] = useState<CaseNavSection>('evidence');
  const [activeRailTab, setActiveRailTab] = useState<GlobalRailTab>('reports');
  const [selectedVideoForTranscription, setSelectedVideoForTranscription] = useState<BodyCameraVideo | null>(null);
  const [isAddEvidenceModalOpen, setIsAddEvidenceModalOpen] = useState(false);

  const addArticle = (article: Omit<CaseArticle, 'id'>) => {
    const newArticle: CaseArticle = {
      ...article,
      id: `art-${Date.now()}`,
    };
    setCurrentCase((prev) => ({
      ...prev,
      articles: [newArticle, ...prev.articles],
    }));
  };

  const submitForApproval = () => {
    setCurrentCase((prev) => ({
      ...prev,
      approvalStatus: 'Pending Supervisor Review',
    }));
  };

  return (
    <CaseContext.Provider
      value={{
        currentCase,
        activeSection,
        setActiveSection,
        activeRailTab,
        setActiveRailTab,
        selectedVideoForTranscription,
        setSelectedVideoForTranscription,
        isAddEvidenceModalOpen,
        setIsAddEvidenceModalOpen,
        addArticle,
        submitForApproval,
      }}
    >
      {children}
    </CaseContext.Provider>
  );
};

export function useCaseContext() {
  const context = useContext(CaseContext);
  if (!context) {
    throw new Error('useCaseContext must be used within a CaseProvider');
  }
  return context;
}

