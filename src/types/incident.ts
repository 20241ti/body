export type IncidentSeverity = 'low' | 'medium' | 'high' | 'critical';

export interface Incident {
  id: string;
  cameraId: string;
  officerName: string;
  timestamp: string;
  title: string;
  description: string;
  severity: IncidentSeverity;
  status: 'pending_review' | 'verified' | 'dismissed';
  aiConfidence: number;
  tags: string[];
}

