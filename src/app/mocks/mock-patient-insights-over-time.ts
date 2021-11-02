import { MetricOverTime } from '../interfaces/metric-over-time';
import { PatientInsightDto } from '../interfaces/dtos/patient-insight.dto';
import { PatientInsight } from '../interfaces/patient-insight';
import { PatientInsightType } from '../interfaces/patient-insight-type';

export const mockPatientInsightsOverTimeDto = (): MetricOverTime<PatientInsightDto>[] => [{
  patientInsightId: '912415b6-4e85-44a5-a03c-37ee861aa778',
  patientInsightType: 'BLOOD_PRESSURE',
  patientInsightValue: '110 / 78',
  period: 'Nov'
}];

export const mockPatientInsightsOverTime = (): MetricOverTime<PatientInsight>[] => [{
  insightType: PatientInsightType.BLOOD_PRESSURE,
  insightValue: '110 / 78',
  period: 'Nov'
}];
