
export interface DiagnosticResult {
  archetype: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  actionPlan: string;
}

export enum DiagnosticStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
