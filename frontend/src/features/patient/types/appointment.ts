export type AppointmentStatus =
  | 'Confirmed'
  | 'Pending'
  | 'Completed'
  | 'Cancelled'

export interface Appointment {
  id: number
  doctor: string
  specialty: string
  date: string
  time: string
  location: string
  reason: string
  status: AppointmentStatus
}