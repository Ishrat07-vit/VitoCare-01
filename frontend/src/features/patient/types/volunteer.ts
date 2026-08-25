export type VolunteerRequestStatus =
  | 'Pending'
  | 'Accepted'
  | 'Completed'

export interface VolunteerRequest {
  id: number
  type: string
  description: string
  date: string
  location: string
  status: VolunteerRequestStatus
  volunteerName?: string
}