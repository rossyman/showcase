import { PatientInsightDto } from '../interfaces/dtos/patient-insight.dto';
import { PatientInsight } from '../interfaces/patient-insight';
import { PatientInsightType } from '../interfaces/patient-insight-type';

export const mockPatientInsightsDto = (): PatientInsightDto[] => [{
  patientInsightId: '912415b6-4e85-44a5-a03c-37ee861aa778',
  patientInsightType: 'BLOOD_PRESSURE',
  patientInsightValue: '110 / 78',
  delta: {
    patientInsightValue: '100/60',
    percentChange: 0.1
  }
}];

export const mockPatientInsights = (): PatientInsight[] => [{
  insightType: PatientInsightType.BLOOD_PRESSURE,
  insightValue: '110 / 78',
  delta: {
    insightValue: '100/60',
    percentChange: 0.1
  }
}];
