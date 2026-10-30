import React, { createContext, useContext, useState, useEffect } from 'react';
import { CameraDevice, Incident } from '../types';
import { CameraService } from '../services/cameraService';

interface CameraContextType {
  cameras: CameraDevice[];
  incidents: Incident[];
  selectedCamera: CameraDevice | null;
  setSelectedCamera: (camera: CameraDevice | null) => void;
  updateIncidentStatus: (id: string, status: Incident['status']) => Promise<void>;
  isLoading: boolean;
  refreshData: () => Promise<void>;
}

const CameraContext = createContext<CameraContextType | undefined>(undefined);

export const CameraProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cameras, setCameras] = useState<CameraDevice[]>([]);
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [selectedCamera, setSelectedCamera] = useState<CameraDevice | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const refreshData = async () => {
    setIsLoading(true);
    try {
      const [fetchedCameras, fetchedIncidents] = await Promise.all([
        CameraService.getCameras(),
        CameraService.getIncidents(),
      ]);
      setCameras(fetchedCameras);
      setIncidents(fetchedIncidents);
      if (!selectedCamera && fetchedCameras.length > 0) {
        setSelectedCamera(fetchedCameras[0]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refreshData();
  }, []);

  const updateIncidentStatus = async (id: string, status: Incident['status']) => {
    await CameraService.updateIncidentStatus(id, status);
    setIncidents((prev) =>
      prev.map((inc) => (inc.id === id ? { ...inc, status } : inc))
    );
  };

  return (
    <CameraContext.Provider
      value={{
        cameras,
        incidents,
        selectedCamera,
        setSelectedCamera,
        updateIncidentStatus,
        isLoading,
        refreshData,
      }}
    >
      {children}
    </CameraContext.Provider>
  );
};

export function useCameraContext() {
  const context = useContext(CameraContext);
  if (!context) {
    throw new Error('useCameraContext must be used within a CameraProvider');
  }
  return context;
}

