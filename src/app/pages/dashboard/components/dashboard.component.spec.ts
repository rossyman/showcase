import { User } from '../../../interfaces/user';
import { mockUser } from '../../../mocks/mock-user';
import { PrincipalUserService } from '../../../auth/providers/principal-user.service';
import { waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { DashboardComponent } from './dashboard.component';
import { PatientService } from '../../../providers/patient/patient.service';
import { mockPatientInsights } from '../../../mocks/mock-patient-insight';
import { mockPatientAppointments } from '../../../mocks/mock-patient-appointments';
import { PatientInsightType } from '../../../interfaces/patient-insight-type';
import { mockPatientInsightsOverTime } from '../../../mocks/mock-patient-insights-over-time';
import { createPatientBloodCountInsightOverTimeGraph } from '../graphs/patient-blood-count-insight-over-time.graph';
import SpyObj = jasmine.SpyObj;
import createSpyObj = jasmine.createSpyObj;

describe('DashboardComponent', () => {

  const testPatientInsights = mockPatientInsights();
  const testPatientAppointments = mockPatientAppointments();
  const testPatientInsightsOverTime = mockPatientInsightsOverTime();

  const testUser: User = mockUser();

  const mockThePrincipalUserService = (): SpyObj<PrincipalUserService> =>
    createSpyObj('PrincipalUserService', ['getPrincipalUser$']);

  const mockThePatientService = (): SpyObj<PatientService> =>
    createSpyObj('PatientService', ['getKeyPatientInsights$', 'getPatientAppointments$', 'getPatientInsightOverTime$']);

  let mockPrincipalUserService: SpyObj<PrincipalUserService>;
  let mockPatientService: SpyObj<PatientService>;

  let dashboardComponent: DashboardComponent;

  beforeEach(waitForAsync(() => {
    mockPrincipalUserService = mockThePrincipalUserService();
    mockPatientService = mockThePatientService();

    mockPrincipalUserService.getPrincipalUser$.and.returnValue(of(testUser));

    mockPatientService.getKeyPatientInsights$
      .withArgs(testUser!.id).and
      .returnValue(of(testPatientInsights));

    mockPatientService.getPatientAppointments$
      .withArgs(testUser!.id).and
      .returnValue(of(testPatientAppointments));

    mockPatientService.getPatientInsightOverTime$
      .withArgs(testUser!.id, PatientInsightType.BLOOD_COUNT).and
      .returnValue(of(testPatientInsightsOverTime));

    dashboardComponent = new DashboardComponent(mockPrincipalUserService, mockPatientService);
    dashboardComponent.ngOnInit();
  }));

  describe('after initialisation', () => {

    it('should have assigned the principal user', () =>
      expect(dashboardComponent.user).toEqual(testUser));

    it('should have assigned the key patient insights', () =>
      expect(dashboardComponent.keyPatientInsights).toEqual(testPatientInsights));

    it('should have assigned the patient appointments', () =>
      expect(dashboardComponent.patientAppointments).toEqual(testPatientAppointments));

    it('should have assigned the patient blood count over time graph', () =>
      expect(dashboardComponent.patientBloodCountInsightOverTimeGraph).toEqual(createPatientBloodCountInsightOverTimeGraph(testPatientInsightsOverTime)));

  });

});
