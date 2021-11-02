export interface PatientInsightDto {
  patientInsightId: string;
  patientInsightType: string;
  patientInsightValue: string;
  delta?: {
    patientInsightValue: string;
    percentChange: number;
  };
}
