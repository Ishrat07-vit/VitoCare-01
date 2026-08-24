export type MedicineStatus = 'Taken' | 'Pending' | 'Missed'

export interface Medicine {
  id: number
  name: string
  dosage: string
  frequency: string
  time: string
  instruction: string
  prescribedBy: string
  status: MedicineStatus
}