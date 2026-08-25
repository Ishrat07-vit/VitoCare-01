export type PrescriptionStatus =
  | 'Active'
  | 'Completed'

export interface Prescription {
  id: number
  medicineName: string
  dosage: string
  frequency: string
  duration: string
  doctor: string
  date: string
  instructions: string
  status: PrescriptionStatus
}