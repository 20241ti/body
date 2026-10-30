import React from 'react';
import { CaseProvider } from './context/CaseContext';
import { CameraProvider } from './context/CameraContext';
import { CaseReportPage } from './pages/CaseReportPage';

export const App: React.FC = () => {
  return (
    <CaseProvider>
      <CameraProvider>
        <CaseReportPage />
      </CameraProvider>
    </CaseProvider>
  );
};

export default App;
