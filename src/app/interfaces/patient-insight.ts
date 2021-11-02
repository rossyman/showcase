import { PatientInsightType } from './patient-insight-type';

export interface PatientInsight {
  insightType: PatientInsightType;
  insightValue: string;
  delta?: {
    insightValue: string;
    percentChange: number;
  };
}
