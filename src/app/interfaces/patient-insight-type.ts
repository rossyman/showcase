export enum PatientInsightType {
  BLOOD_PRESSURE = 'Blood Pressure',
  HEART_RATE = 'Heart Rate',
  GLUCOSE_LEVEL = 'Glucose Level',
  BLOOD_COUNT = 'Blood Count'
}

/**
 * A utility function that parses strings and turns them into their associated PatientInsightType
 * @param patientInsightType The string we wish to convert into a valid PatientInsightType
 */
export const toPatientInsightType = (patientInsightType: string): PatientInsightType => {

  const parsed: PatientInsightType | undefined = PatientInsightType[
    patientInsightType as keyof typeof PatientInsightType
  ];

  if (!parsed) {
    throw new Error(`Could not convert string: ${patientInsightType} into a PatientInsightType`);
  }

  return parsed;
};
