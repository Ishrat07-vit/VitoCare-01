export type MedicineStatus =
  | 'Pending'
  | 'Taken'
  | 'Missed'

export interface Medicine {
  id: number
  name: string
  dosage: string
  time: string
  period: 'Morning' | 'Afternoon' | 'Night'
  instructions: string
  status: MedicineStatus
}