import { PatientHttpService } from './patient-http.service';
import { HttpClient } from '@angular/common/http';
import { PatientAppointmentDto } from '../../interfaces/dtos/patient-appointment.dto';
import { mockPatientAppointmentsDto } from '../../mocks/mock-patient-appointments';
import { PatientInsightDto } from '../../interfaces/dtos/patient-insight.dto';
import { mockPatientInsightsDto } from '../../mocks/mock-patient-insight';
import { MetricOverTime } from '../../interfaces/metric-over-time';
import { mockPatientInsightsOverTimeDto } from '../../mocks/mock-patient-insights-over-time';
import { of } from 'rxjs';
import { PatientInsightType } from '../../interfaces/patient-insight-type';
import { waitForAsync } from '@angular/core/testing';
import SpyObj = jasmine.SpyObj;
import createSpyObj = jasmine.createSpyObj;

describe('PatientHttpService', () => {

  const testPatientAppointmentsDto: PatientAppointmentDto[] = mockPatientAppointmentsDto();
  const testPatientInsightsDto: PatientInsightDto[] = mockPatientInsightsDto();
  const testPatientInsightOverTimeDto: MetricOverTime<PatientInsightDto>[] = mockPatientInsightsOverTimeDto();

  const testPatientId = '123456';
  const testPatientInsightType = PatientInsightType.BLOOD_PRESSURE;

  const mockTheHttpClient = (): SpyObj<HttpClient> =>
    createSpyObj('HttpClient', ['get']);

  let mockHttpClient: SpyObj<HttpClient>;

  let patientHttpService: PatientHttpService;

  beforeEach(() => {
    mockHttpClient = mockTheHttpClient();

    mockHttpClient.get
      .withArgs(`/api/patient/${testPatientId}/appointments`).and
      .returnValue(of(testPatientAppointmentsDto));

    mockHttpClient.get
      .withArgs(`/api/patient/${testPatientId}/insights`).and
      .returnValue(of(testPatientInsightsDto));

    mockHttpClient.get
      .withArgs(`/api/patient/${testPatientId}/insight/${testPatientInsightType}`).and
      .returnValue(of(testPatientInsightOverTimeDto));

    patientHttpService = new PatientHttpService(mockHttpClient);
  });

  describe('getPatientAppointments$', () => {

    let result: PatientAppointmentDto[] | undefined;

    beforeEach(waitForAsync(() => {
      patientHttpService.getPatientAppointments$(testPatientId).subscribe(appointments => result = appointments);
    }));

    it('should make the appropriate HTTP call', () =>
      expect(mockHttpClient.get).toHaveBeenCalledOnceWith('/api/patient/123456/appointments'));

    it('should return the response provided by the API', () =>
      expect(result).toEqual(testPatientAppointmentsDto));

  });

  describe('getKeyPatientInsights$', () => {

    let result: PatientInsightDto[] | undefined;

    beforeEach(waitForAsync(() => {
      patientHttpService.getKeyPatientInsights$(testPatientId).subscribe(insights => result = insights);
    }));

    it('should make the appropriate HTTP call', () =>
      expect(mockHttpClient.get).toHaveBeenCalledOnceWith('/api/patient/123456/insights'));

    it('should return the response provided by the API', () =>
      expect(result).toEqual(testPatientInsightsDto));

  });

  describe('getPatientInsightOverTime$', () => {

    let result: MetricOverTime<PatientInsightDto>[] | undefined;

    beforeEach(waitForAsync(() => {
      patientHttpService.getPatientInsightOverTime$(testPatientId, testPatientInsightType).subscribe(insights => result = insights);
    }));

    it('should make the appropriate HTTP call', () =>
      expect(mockHttpClient.get).toHaveBeenCalledOnceWith('/api/patient/123456/insight/BLOOD_PRESSURE'));

    it('should return the response provided by the API', () =>
      expect(result).toEqual(testPatientInsightOverTimeDto));

  });

});
