export type NotificationType =
  | 'appointment'
  | 'medicine'
  | 'prescription'
  | 'volunteer'
  | 'health'

export interface Notification {
  id: number
  type: NotificationType
  title: string
  message: string
  time: string
  read: boolean
}