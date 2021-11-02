import { PatientAppointment } from '../interfaces/patient-appointment';
import { PatientAppointmentDto } from '../interfaces/dtos/patient-appointment.dto';

export const mockPatientAppointmentsDto = (): PatientAppointmentDto[] => [{
  appointmentId: 'f1919c98-24c6-4bba-8d01-a5e39d8215f3',
  appointmentName: 'Heart Health Checkup',
  appointmentLocation: 'University Hospital Glasgow',
  appointmentDateTime: '2021-11-03T15:22:00Z',
  appointmentAttending: 'Dr Jane Doe'
}];

export const mockPatientAppointments = (): PatientAppointment[] => [{
  name: 'Heart Health Checkup',
  location: 'University Hospital Glasgow',
  dateTime: '2021-11-03T15:22:00Z',
  attending: 'Dr Jane Doe'
}];
