import { Injectable } from '@angular/core';
import { PatientHttpService } from './patient-http.service';
import { Observable } from 'rxjs';
import { PatientInsight } from '../../interfaces/patient-insight';
import { PatientTransformer } from './patient.transformer';
import { map } from 'rxjs/operators';
import { PatientInsightType } from '../../interfaces/patient-insight-type';
import { MetricOverTime } from '../../interfaces/metric-over-time';
import { PatientAppointment } from '../../interfaces/patient-appointment';

@Injectable({providedIn: 'root'})
export class PatientService {

  constructor(private _patientHttpService: PatientHttpService,
              private _patientTransformer: PatientTransformer) {
  }

  getPatientAppointments$(patientId: string): Observable<PatientAppointment[]> {
    return this._patientHttpService
      .getPatientAppointments$(patientId)
      .pipe(map(appointments => this._patientTransformer.fromPatientAppointmentDtos(appointments)));
  }

  getKeyPatientInsights$(patientId: string): Observable<PatientInsight[]> {
    return this._patientHttpService
      .getKeyPatientInsights$(patientId)
      .pipe(map(insights => this._patientTransformer.fromPatientInsightDtos(insights)));
  }

  getPatientInsightOverTime$(patientId: string, patientInsightType: PatientInsightType): Observable<MetricOverTime<PatientInsight>[]> {
    return this._patientHttpService
      .getPatientInsightOverTime$(patientId, patientInsightType)
      .pipe(map(insightsOverTime => this._patientTransformer.fromPatientInsightOverTimeDtos(insightsOverTime)));
  }
}
