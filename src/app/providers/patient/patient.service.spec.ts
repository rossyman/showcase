import { PatientService } from './patient.service';
import { PatientHttpService } from './patient-http.service';
import { PatientTransformer } from './patient.transformer';
import { PatientInsight } from '../../interfaces/patient-insight';
import { PatientInsightType } from '../../interfaces/patient-insight-type';
import { PatientInsightDto } from '../../interfaces/dtos/patient-insight.dto';
import { of } from 'rxjs';
import { PatientAppointmentDto } from '../../interfaces/dtos/patient-appointment.dto';
import { PatientAppointment } from '../../interfaces/patient-appointment';
import { MetricOverTime } from '../../interfaces/metric-over-time';
import { waitForAsync } from '@angular/core/testing';
import { mockPatientAppointments, mockPatientAppointmentsDto } from '../../mocks/mock-patient-appointments';
import { mockPatientInsights, mockPatientInsightsDto } from '../../mocks/mock-patient-insight';
import { mockPatientInsightsOverTime, mockPatientInsightsOverTimeDto } from '../../mocks/mock-patient-insights-over-time';
import SpyObj = jasmine.SpyObj;
import createSpyObj = jasmine.createSpyObj;

describe('PatientService', () => {

  const testPatientAppointmentsDto: PatientAppointmentDto[] = mockPatientAppointmentsDto();
  const testPatientAppointments: PatientAppointment[] = mockPatientAppointments();
  const testPatientInsightsDto: PatientInsightDto[] = mockPatientInsightsDto();
  const testPatientInsights: PatientInsight[] = mockPatientInsights();
  const testPatientInsightOverTimeDto: MetricOverTime<PatientInsightDto>[] = mockPatientInsightsOverTimeDto();
  const testPatientInsightOverTime: MetricOverTime<PatientInsight>[] = mockPatientInsightsOverTime();

  const testPatientId = '123456';
  const testPatientInsightType = PatientInsightType.BLOOD_PRESSURE;

  const mockThePatientHttpService = (): SpyObj<PatientHttpService> =>
    createSpyObj('PatientHttpService', [
      'getPatientAppointments$',
      'getKeyPatientInsights$',
      'getPatientInsightOverTime$'
    ]);

  const mockThePatientTransformer = (): SpyObj<PatientTransformer> =>
    createSpyObj('PatientTransformer', [
      'fromPatientAppointmentDtos',
      'fromPatientInsightDtos',
      'fromPatientInsightOverTimeDtos'
    ]);

  let mockPatientHttpService: SpyObj<PatientHttpService>;
  let mockPatientTransformer: SpyObj<PatientTransformer>;

  let patientService: PatientService;

  beforeEach(() => {
    mockPatientHttpService = mockThePatientHttpService();
    mockPatientTransformer = mockThePatientTransformer();

    mockPatientHttpService.getPatientAppointments$
      .withArgs(testPatientId).and
      .returnValue(of(testPatientAppointmentsDto));

    mockPatientTransformer.fromPatientAppointmentDtos
      .withArgs(testPatientAppointmentsDto).and
      .returnValue(testPatientAppointments);

    mockPatientHttpService.getKeyPatientInsights$
      .withArgs(testPatientId).and
      .returnValue(of(testPatientInsightsDto));

    mockPatientTransformer.fromPatientInsightDtos
      .withArgs(testPatientInsightsDto).and
      .returnValue(testPatientInsights);

    mockPatientHttpService.getPatientInsightOverTime$
      .withArgs(testPatientId, testPatientInsightType).and
      .returnValue(of(testPatientInsightOverTimeDto));

    mockPatientTransformer.fromPatientInsightOverTimeDtos
      .withArgs(testPatientInsightOverTimeDto).and
      .returnValue(testPatientInsightOverTime);

    patientService = new PatientService(mockPatientHttpService, mockPatientTransformer);
  });

  describe('getPatientAppointments$', () => {

    let result: PatientAppointment[] | undefined;

    beforeEach(waitForAsync(() => {
      patientService.getPatientAppointments$(testPatientId).subscribe(appointments => result = appointments);
    }));

    it('should make the appropriate call to the patient HTTP service', () =>
      expect(mockPatientHttpService.getPatientAppointments$).toHaveBeenCalledOnceWith(testPatientId));

    it('should make the appropriate call to the patient transformer', () =>
      expect(mockPatientTransformer.fromPatientAppointmentDtos).toHaveBeenCalledOnceWith(testPatientAppointmentsDto));

    it('should return the transformed appointment domain object', () =>
      expect(result).toEqual(testPatientAppointments));

  });

  describe('getKeyPatientInsights$', () => {

    let result: PatientInsight[] | undefined;

    beforeEach(waitForAsync(() => {
      patientService.getKeyPatientInsights$(testPatientId).subscribe(insights => result = insights);
    }));

    it('should make the appropriate call to the patient HTTP service', () =>
      expect(mockPatientHttpService.getKeyPatientInsights$).toHaveBeenCalledOnceWith(testPatientId));

    it('should make the appropriate call to the patient transformer', () =>
      expect(mockPatientTransformer.fromPatientInsightDtos).toHaveBeenCalledOnceWith(testPatientInsightsDto));

    it('should return the transformed patient insights domain object', () =>
      expect(result).toEqual(testPatientInsights));

  });

  describe('getPatientInsightOverTime$', () => {

    let result: MetricOverTime<PatientInsight>[] | undefined;

    beforeEach(waitForAsync(() => {
      patientService.getPatientInsightOverTime$(testPatientId, testPatientInsightType).subscribe(insights => result = insights);
    }));

    it('should make the appropriate call to the patient HTTP service', () =>
      expect(mockPatientHttpService.getPatientInsightOverTime$).toHaveBeenCalledOnceWith(testPatientId, testPatientInsightType));

    it('should make the appropriate call to the patient transformer', () =>
      expect(mockPatientTransformer.fromPatientInsightOverTimeDtos).toHaveBeenCalledOnceWith(testPatientInsightOverTimeDto));

    it('should return the transformed patient insights over time domain object', () =>
      expect(result).toEqual(testPatientInsightOverTime));

  });

});
