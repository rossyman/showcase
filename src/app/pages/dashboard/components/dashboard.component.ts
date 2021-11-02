import { Component, OnInit } from '@angular/core';
import { PrincipalAwareComponent } from '../../../auth/components/principal-aware.component';
import { PrincipalUserService } from '../../../auth/providers/principal-user.service';
import { PatientService } from '../../../providers/patient/patient.service';
import { PatientInsight } from '../../../interfaces/patient-insight';
import { EChartsOption } from 'echarts';
import { PatientInsightType } from '../../../interfaces/patient-insight-type';
import { createPatientBloodCountInsightOverTimeGraph } from '../graphs/patient-blood-count-insight-over-time.graph';
import { PatientAppointment } from '../../../interfaces/patient-appointment';

@Component({
  selector: 'emed-dashboard',
  styleUrls: ['dashboard.component.scss'],
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent extends PrincipalAwareComponent implements OnInit {

  keyPatientInsights: PatientInsight[] = [];
  patientAppointments: PatientAppointment[] = [];
  patientBloodCountInsightOverTimeGraph!: EChartsOption;

  constructor(protected _principalUserService: PrincipalUserService,
              private _patientService: PatientService) {
    super(_principalUserService);
  }

  ngOnInit() {
    super.ngOnInit();
    this.retrieveKeyPatientInsights();
    this.retrievePatientAppointments();
    this.retrieveBloodCountInsightOverTime();
  }

  private retrieveKeyPatientInsights(): void {
    if (this.user) {
      this._patientService
        .getKeyPatientInsights$(this.user.id)
        .subscribe(insights => this.keyPatientInsights = insights);
    }
  }

  private retrievePatientAppointments(): void {
    if (this.user) {
      this._patientService
        .getPatientAppointments$(this.user.id)
        .subscribe(appointments => this.patientAppointments = appointments);
    }
  }

  private retrieveBloodCountInsightOverTime(): void {
    if (this.user) {
      this._patientService
        .getPatientInsightOverTime$(this.user.id, PatientInsightType.BLOOD_COUNT)
        .subscribe(insights => this.patientBloodCountInsightOverTimeGraph = createPatientBloodCountInsightOverTimeGraph(insights));
    }
  }
}
