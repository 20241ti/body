export interface CaseArticle {
  id: string;
  thumbnail: string;
  itemNumber: string;
  category: string;
  status: 'Collected' | 'Processing' | 'In Lab' | 'Archived';
  type: string;
  location: string;
}

export interface TranscriptionEntry {
  timestamp: string;
  speaker: string;
  text: string;
  isAiFlagged?: boolean;
}

export interface BodyCameraVideo {
  id: string;
  cameraNumber: string;
  officerName: string;
  date: string;
  preRecord: string;
  incidentClip: string;
  fullClip: string;
  thumbnailUrl: string;
  videoDuration: string;
  transcription: TranscriptionEntry[];
}

export type CaseNavSection =
  | 'basic_info'
  | 'people'
  | 'narrative'
  | 'property'
  | 'vehicles'
  | 'photos'
  | 'follow_ups'
  | 'complaints'
  | 'evidence'
  | 'forms'
  | 'cfs'
  | 'nibrs';

export type GlobalRailTab =
  | 'sos'
  | 'units'
  | 'incidents'
  | 'records'
  | 'reports'
  | 'map';

export interface CaseReport {
  id: string;
  badgeType: string;
  officerName: string;
  approvalStatus: string;
  formsNeedingApproval: number;
  nibrsErrors: number;
  lastUpdated: string;
  articles: CaseArticle[];
  videos: BodyCameraVideo[];
}

