export type UserRole =
  | 'patient'
  | 'doctor'
  | 'hospital-assistant'
  | 'volunteer'
  | 'admin'

export interface User {
  id: string
  name: string
  email: string
  phone?: string
  role: UserRole
}