import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientInsightDto } from '../../interfaces/dtos/patient-insight.dto';
import { HttpClient } from '@angular/common/http';
import { PatientInsightType } from '../../interfaces/patient-insight-type';
import { MetricOverTime } from '../../interfaces/metric-over-time';
import { PatientAppointmentDto } from '../../interfaces/dtos/patient-appointment.dto';
import { reverseStringEnum } from '../../common/util/enums';

@Injectable({providedIn: 'root'})
export class PatientHttpService {

  constructor(private _httpClient: HttpClient) {
  }

  getPatientAppointments$(patientId: string): Observable<PatientAppointmentDto[]> {
    return this._httpClient.get<PatientAppointmentDto[]>(`/api/patient/${patientId}/appointments`);
  }

  getKeyPatientInsights$(patientId: string): Observable<PatientInsightDto[]> {
    return this._httpClient.get<PatientInsightDto[]>(`/api/patient/${patientId}/insights`);
  }

  getPatientInsightOverTime$(patientId: string, patientInsightType: PatientInsightType): Observable<MetricOverTime<PatientInsightDto>[]> {
    return this._httpClient.get<MetricOverTime<PatientInsightDto>[]>(`/api/patient/${patientId}/insight/${reverseStringEnum(PatientInsightType, patientInsightType)}`);
  }
}
