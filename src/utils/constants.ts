import { CameraDevice, Incident } from '../types';

export const APP_CONFIG = {
  name: 'BodyCam AI',
  description: 'Plataforma Inteligente de Monitoramento e Análise de Câmeras Corporais',
  version: '1.0.0',
};

export const MOCK_CAMERAS: CameraDevice[] = [
  {
    id: 'CAM-01',
    name: 'BodyCam Alpha 01',
    officerName: 'Sgt. Silva',
    badgeNumber: 'PM-4829',
    batteryLevel: 92,
    gpsLocation: {
      lat: -23.5505,
      lng: -46.6333,
      address: 'Av. Paulista, 1000 - Bela Vista, SP',
    },
    status: 'alert',
    feedUrl: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80',
    lastSync: new Date(Date.now() - 1000 * 30).toISOString(),
  },
  {
    id: 'CAM-02',
    name: 'BodyCam Alpha 02',
    officerName: 'Cb. Oliveira',
    badgeNumber: 'PM-7104',
    batteryLevel: 68,
    gpsLocation: {
      lat: -23.5587,
      lng: -46.6599,
      address: 'R. Augusta, 1500 - Consolação, SP',
    },
    status: 'recording',
    feedUrl: 'https://images.unsplash.com/photo-1508873696983-2df5293cb325?auto=format&fit=crop&w=800&q=80',
    lastSync: new Date(Date.now() - 1000 * 60 * 2).toISOString(),
  },
  {
    id: 'CAM-03',
    name: 'BodyCam Alpha 03',
    officerName: 'Sd. Santos',
    badgeNumber: 'PM-9021',
    batteryLevel: 85,
    gpsLocation: {
      lat: -23.5431,
      lng: -46.6291,
      address: 'Praça da Sé - Centro, SP',
    },
    status: 'online',
    feedUrl: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
    lastSync: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
  },
  {
    id: 'CAM-04',
    name: 'BodyCam Alpha 04',
    officerName: 'Ten. Almeida',
    badgeNumber: 'PM-3312',
    batteryLevel: 14,
    gpsLocation: {
      lat: -23.5678,
      lng: -46.6488,
      address: 'R. Vergueiro, 800 - Liberdade, SP',
    },
    status: 'offline',
    feedUrl: 'https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?auto=format&fit=crop&w=800&q=80',
    lastSync: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
  },
];

export const MOCK_INCIDENTS: Incident[] = [
  {
    id: 'INC-2026-081',
    cameraId: 'CAM-01',
    officerName: 'Sgt. Silva',
    timestamp: new Date(Date.now() - 1000 * 60 * 12).toISOString(),
    title: 'Detecção de Objeto Suspeito (Arma de Fogo)',
    description: 'Algoritmo de visão computacional identificou porte ostensivo com alta probabilidade.',
    severity: 'critical',
    status: 'pending_review',
    aiConfidence: 0.94,
    tags: ['Visão Computacional', 'Armamento', 'Prioridade Alta'],
  },
  {
    id: 'INC-2026-080',
    cameraId: 'CAM-02',
    officerName: 'Cb. Oliveira',
    timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    title: 'Comportamento Agressivo Detectado',
    description: 'Análise de movimento e modulação de voz indicam alteração de padrão em abordagem.',
    severity: 'medium',
    status: 'verified',
    aiConfidence: 0.82,
    tags: ['Análise Comportamental', 'Áudio/Voz'],
  },
  {
    id: 'INC-2026-079',
    cameraId: 'CAM-03',
    officerName: 'Sd. Santos',
    timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
    title: 'Reconhecimento Facial Positivo',
    description: 'Compatibilidade com registro do banco de dados estadual de mandados em aberto.',
    severity: 'high',
    status: 'verified',
    aiConfidence: 0.89,
    tags: ['Facial AI', 'Banco de Mandados'],
  },
];

