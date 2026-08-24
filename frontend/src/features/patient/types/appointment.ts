export type AppointmentStatus =
  | 'Confirmed'
  | 'Pending'
  | 'Completed'
  | 'Cancelled'

export interface Appointment {
  id: number
  doctorName: string
  specialty: string
  hospital: string
  date: string
  time: string
  type: string
  status: AppointmentStatus
}