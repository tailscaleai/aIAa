export interface VideoFile {
  file: File;
  name: string;
  duration: number;
  size: number;
  type: string;
  uploadedAt: Date;
}

export interface ClipSegment {
  id: string;
  startTime: number;
  endTime: number;
  title: string;
  description: string;
  thumbnail?: string;
}

export interface ExportSettings {
  format: 'mp4' | 'webm' | 'mov' | 'mkv';
  quality: '360p' | '720p' | '1080p';
  resolution: string;
  codec: string;
}

export type WorkflowStep = 'upload' | 'detect' | 'edit' | 'export';
