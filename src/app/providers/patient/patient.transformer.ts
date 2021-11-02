import { Injectable } from '@angular/core';
import { PatientInsight } from '../../interfaces/patient-insight';
import { PatientInsightDto } from '../../interfaces/dtos/patient-insight.dto';
import { toPatientInsightType } from '../../interfaces/patient-insight-type';
import { MetricOverTime } from '../../interfaces/metric-over-time';
import { PatientAppointmentDto } from '../../interfaces/dtos/patient-appointment.dto';
import { PatientAppointment } from '../../interfaces/patient-appointment';

@Injectable({providedIn: 'root'})
export class PatientTransformer {

  fromPatientAppointmentDtos(appointmentDtos: PatientAppointmentDto[]): PatientAppointment[] {
    return appointmentDtos.map(appointment => this.mapAppointmentDtoToDomain(appointment));
  }

  fromPatientInsightDtos(insightDtos: PatientInsightDto[]): PatientInsight[] {
    return insightDtos.map(insight => this.mapInsightDtoToDomain(insight));
  }

  fromPatientInsightOverTimeDtos(insightDtos: MetricOverTime<PatientInsightDto>[]): MetricOverTime<PatientInsight>[] {
    return insightDtos.map(insight => this.mapInsightOverTimeDtoToDomain(insight));
  }

  private mapAppointmentDtoToDomain(appointmentDto: PatientAppointmentDto): PatientAppointment {
    return {
      name: appointmentDto.appointmentName,
      location: appointmentDto.appointmentLocation,
      dateTime: appointmentDto.appointmentDateTime,
      attending: appointmentDto.appointmentAttending
    };
  }

  private mapInsightDtoToDomain(patientInsightDto: PatientInsightDto): PatientInsight {
    return {

      insightType: toPatientInsightType(patientInsightDto.patientInsightType),
      insightValue: patientInsightDto.patientInsightValue,

      ...(patientInsightDto.delta ? {
        delta: {
          insightValue: patientInsightDto.delta.patientInsightValue,
          percentChange: patientInsightDto.delta.percentChange
        }
      } : {})
    };
  }

  private mapInsightOverTimeDtoToDomain(patientInsightDto: MetricOverTime<PatientInsightDto>): MetricOverTime<PatientInsight> {
    return {
      insightType: toPatientInsightType(patientInsightDto.patientInsightType),
      insightValue: patientInsightDto.patientInsightValue,
      period: patientInsightDto.period
    };
  }
}
