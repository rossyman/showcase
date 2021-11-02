import { PatientTransformer } from './patient.transformer';
import { PatientAppointmentDto } from '../../interfaces/dtos/patient-appointment.dto';
import { mockPatientAppointments, mockPatientAppointmentsDto } from '../../mocks/mock-patient-appointments';
import { PatientAppointment } from '../../interfaces/patient-appointment';
import { PatientInsightDto } from '../../interfaces/dtos/patient-insight.dto';
import { mockPatientInsights, mockPatientInsightsDto } from '../../mocks/mock-patient-insight';
import { PatientInsight } from '../../interfaces/patient-insight';
import { MetricOverTime } from '../../interfaces/metric-over-time';
import { mockPatientInsightsOverTime, mockPatientInsightsOverTimeDto } from '../../mocks/mock-patient-insights-over-time';

describe('PatientTransformer', () => {

  const testPatientAppointmentsDto: PatientAppointmentDto[] = mockPatientAppointmentsDto();
  const testPatientAppointments: PatientAppointment[] = mockPatientAppointments();
  const testPatientInsightsDto: PatientInsightDto[] = mockPatientInsightsDto();
  const testPatientInsights: PatientInsight[] = mockPatientInsights();
  const testPatientInsightOverTimeDto: MetricOverTime<PatientInsightDto>[] = mockPatientInsightsOverTimeDto();
  const testPatientInsightOverTime: MetricOverTime<PatientInsight>[] = mockPatientInsightsOverTime();

  const patientTransformer: PatientTransformer = new PatientTransformer();

  describe('fromPatientAppointmentDtos', () => {

    it('should transform the patient appointments dto into their equivalent domain object', () =>
      expect(patientTransformer.fromPatientAppointmentDtos(testPatientAppointmentsDto)).toEqual(testPatientAppointments));

  });

  describe('fromPatientInsightDtos', () => {

    it('should transform the patient insights dto into their equivalent domain object', () =>
      expect(patientTransformer.fromPatientInsightDtos(testPatientInsightsDto)).toEqual(testPatientInsights));

  });

  describe('fromPatientInsightOverTimeDtos', () => {

    it('should transform the patient insights over time dto into their equivalent domain object', () =>
      expect(patientTransformer.fromPatientInsightOverTimeDtos(testPatientInsightOverTimeDto)).toEqual(testPatientInsightOverTime));

  });

});
