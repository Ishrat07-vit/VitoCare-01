export type VolunteerAvailability = 'Available' | 'Busy'

export type AssistanceStatus =
  | 'None'
  | 'Pending'
  | 'Accepted'
  | 'In Progress'
  | 'Completed'

export interface Volunteer {
  id: number
  name: string
  area: string
  distance: string
  availability: VolunteerAvailability
  rating: number
  completedRequests: number
  skills: string[]
}

export interface AssistanceRequest {
  volunteerId: number
  volunteerName: string
  requestType: string
  requestedAt: string
  status: AssistanceStatus
}