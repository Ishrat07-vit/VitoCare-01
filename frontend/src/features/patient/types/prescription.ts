export interface PrescriptionMedicine {
  name: string
  dosage: string
  frequency: string
  duration: string
}

export interface Prescription {
  id: number
  doctorName: string
  specialization: string
  date: string
  validUntil: string
  diagnosis: string
  medicines: PrescriptionMedicine[]
  status: 'Active' | 'Expired'
}