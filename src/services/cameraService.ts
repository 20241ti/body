import { CameraDevice, Incident } from '../types';
import { MOCK_CAMERAS, MOCK_INCIDENTS } from '../utils/constants';

// Service to manage cameras and incident streams with fallback to mock data
export const CameraService = {
  async getCameras(): Promise<CameraDevice[]> {
    // In production: return fetchClient<CameraDevice[]>('/cameras');
    return new Promise((resolve) => setTimeout(() => resolve(MOCK_CAMERAS), 300));
  },

  async getCameraById(id: string): Promise<CameraDevice | undefined> {
    return new Promise((resolve) => {
      const camera = MOCK_CAMERAS.find((c) => c.id === id);
      setTimeout(() => resolve(camera), 200);
    });
  },

  async getIncidents(): Promise<Incident[]> {
    // In production: return fetchClient<Incident[]>('/incidents');
    return new Promise((resolve) => setTimeout(() => resolve(MOCK_INCIDENTS), 300));
  },

  async updateIncidentStatus(id: string, status: Incident['status']): Promise<boolean> {
    return new Promise((resolve) => {
      const incident = MOCK_INCIDENTS.find((i) => i.id === id);
      if (incident) {
        incident.status = status;
        resolve(true);
      } else {
        resolve(false);
      }
    });
  },
};

