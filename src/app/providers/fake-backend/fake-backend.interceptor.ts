import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PatientInsightDto } from '../../interfaces/dtos/patient-insight.dto';
import { MetricOverTime } from '../../interfaces/metric-over-time';
import { PatientAppointmentDto } from '../../interfaces/dtos/patient-appointment.dto';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (this.isGetPatientInsightOverTimeRequest(req)) {
      return this.createSuccessResponse(this.getMockPatientInsightOverTimeResponse());
    }

    if (this.isGetKeyPatientInsightsRequest(req)) {
      return this.createSuccessResponse(this.getMockKeyPatientInsightsResponse());
    }

    if (this.isGetPatientAppointmentsRequest(req)) {
      return this.createSuccessResponse(this.getMockPatientAppointmentsResponse());
    }

    return next.handle(req);
  }

  private createSuccessResponse(response: unknown): Observable<HttpResponse<unknown>> {
    return of(new HttpResponse({body: response, status: 200}));
  }

  private isGetRequest(req: HttpRequest<unknown>): boolean {
    return req.method === 'GET';
  }

  private urlMatches(req: HttpRequest<unknown>, regExp: RegExp): boolean {
    return regExp.test(req.url);
  }

  private isGetPatientInsightOverTimeRequest(req: HttpRequest<unknown>): boolean {
    return this.isGetRequest(req) && this.urlMatches(req, new RegExp('api/patient/.*/insight/.*'));
  }

  private isGetKeyPatientInsightsRequest(req: HttpRequest<unknown>): boolean {
    return this.isGetRequest(req) && this.urlMatches(req, new RegExp('api/patient/.*/insights'));
  }

  private isGetPatientAppointmentsRequest(req: HttpRequest<unknown>): boolean {
    return this.isGetRequest(req) && this.urlMatches(req, new RegExp('api/patient/.*/appointments'));
  }

  private getMockPatientInsightOverTimeResponse(): MetricOverTime<PatientInsightDto>[] {
    return [{
      patientInsightId: '93c04ced-a106-4c65-9ce1-5cb5f10bcf53',
      patientInsightType: 'BLOOD_COUNT',
      patientInsightValue: '9456 / ml',
      period: 'May'
    }, {
      patientInsightId: '93c04ced-a106-4c65-9ce1-5cb5f10bcf53',
      patientInsightType: 'BLOOD_COUNT',
      patientInsightValue: '9126 / ml',
      period: 'Jun'
    }, {
      patientInsightId: '93c04ced-a106-4c65-9ce1-5cb5f10bcf53',
      patientInsightType: 'BLOOD_COUNT',
      patientInsightValue: '9556 / ml',
      period: 'Jul'
    }, {
      patientInsightId: '93c04ced-a106-4c65-9ce1-5cb5f10bcf53',
      patientInsightType: 'BLOOD_COUNT',
      patientInsightValue: '9156 / ml',
      period: 'Aug'
    }, {
      patientInsightId: '93c04ced-a106-4c65-9ce1-5cb5f10bcf53',
      patientInsightType: 'BLOOD_COUNT',
      patientInsightValue: '9256 / ml',
      period: 'Sep'
    }, {
      patientInsightId: '93c04ced-a106-4c65-9ce1-5cb5f10bcf53',
      patientInsightType: 'BLOOD_COUNT',
      patientInsightValue: '9456 / ml',
      period: 'Oct'
    }, {
      patientInsightId: '93c04ced-a106-4c65-9ce1-5cb5f10bcf53',
      patientInsightType: 'BLOOD_COUNT',
      patientInsightValue: '9267 / ml',
      period: 'Nov'
    }];
  }

  private getMockKeyPatientInsightsResponse(): PatientInsightDto[] {
    return [{
      patientInsightId: '912415b6-4e85-44a5-a03c-37ee861aa778',
      patientInsightType: 'BLOOD_PRESSURE',
      patientInsightValue: '110 / 78',
      delta: {
        patientInsightValue: '100/60',
        percentChange: 0.1
      }
    }, {
      patientInsightId: 'a209c613-1a82-402f-bba8-0439f6d28ee2',
      patientInsightType: 'HEART_RATE',
      patientInsightValue: '82 bpm',
      delta: {
        patientInsightValue: '87 bpm',
        percentChange: -0.05
      }
    }, {
      patientInsightId: 'cf7e2071-f8f8-4ca7-904e-29af6f840c9c',
      patientInsightType: 'GLUCOSE_LEVEL',
      patientInsightValue: '75 - 85',
      delta: {
        patientInsightValue: '70-80',
        percentChange: .05
      }
    }, {
      patientInsightId: '93c04ced-a106-4c65-9ce1-5cb5f10bcf53',
      patientInsightType: 'BLOOD_COUNT',
      patientInsightValue: '9267 / ml',
      delta: {
        patientInsightValue: '9456 / ml',
        percentChange: -0.02
      }
    }];
  }

  private getMockPatientAppointmentsResponse(): PatientAppointmentDto[] {
    return [{
      appointmentId: 'f1919c98-24c6-4bba-8d01-a5e39d8215f3',
      appointmentName: 'Heart Health Checkup',
      appointmentLocation: 'University Hospital Glasgow',
      appointmentDateTime: '2021-11-03T15:22:00Z',
      appointmentAttending: 'Dr Jane Doe'
    }, {
      appointmentId: '40456b1e-56cd-4dd8-ab9b-0c6fe8addf75',
      appointmentName: 'Heart Health Checkup',
      appointmentLocation: 'University Hospital Glasgow',
      appointmentDateTime: '2021-10-03T16:22:00Z',
      appointmentAttending: 'Dr Osamu Dazai'
    }, {
      appointmentId: '6d77f1c7-25ce-4522-ba6f-40347b5c73fd',
      appointmentName: 'Mental Health Checkup',
      appointmentLocation: 'University Hospital Glasgow',
      appointmentDateTime: '2021-09-03T12:15:00Z',
      appointmentAttending: 'Dr Jane Doe'
    }, {
      appointmentId: 'f2300c8a-ab0c-49e8-b54a-a1866bdbbd8c',
      appointmentName: 'Optical Checkup',
      appointmentLocation: 'University Hospital Glasgow',
      appointmentDateTime: '2021-08-03T17:45:00Z',
      appointmentAttending: 'Dr Isabella Johnson'
    }];
  }
}
