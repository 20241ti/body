export type CameraStatus = 'online' | 'offline' | 'recording' | 'alert';

export interface CameraDevice {
  id: string;
  name: string;
  officerName: string;
  badgeNumber: string;
  batteryLevel: number;
  gpsLocation: {
    lat: number;
    lng: number;
    address: string;
  };
  status: CameraStatus;
  feedUrl: string;
  lastSync: string;
}

export interface AIDetection {
  id: string;
  timestamp: string;
  type: 'weapon' | 'person_down' | 'face_match' | 'aggressive_behavior' | 'vehicle';
  confidence: number;
  boundingBox?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  description: string;
}

