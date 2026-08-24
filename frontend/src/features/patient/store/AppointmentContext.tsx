import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react'

export interface Appointment {
  id: number
  doctor: string
  specialty: string
  date: string
  time: string
  location: string
  reason: string
  status: 'Confirmed' | 'Completed' | 'Cancelled'
}

interface AppointmentContextType {
  appointments: Appointment[]
  addAppointment: (
    appointment: Omit<Appointment, 'id' | 'status'>
  ) => void
  cancelAppointment: (id: number) => void
}

const AppointmentContext =
  createContext<AppointmentContextType | undefined>(undefined)

const initialAppointments: Appointment[] = [
  {
    id: 1,
    doctor: 'Dr. Rajesh Kumar',
    specialty: 'General Physician',
    date: 'August 25, 2026',
    time: '10:30 AM',
    location: 'VitoCare Community Clinic',
    reason: 'Regular health consultation',
    status: 'Confirmed',
  },
  {
    id: 2,
    doctor: 'Dr. Priya Sharma',
    specialty: 'Family Medicine',
    date: 'August 18, 2026',
    time: '11:00 AM',
    location: 'VitoCare Community Clinic',
    reason: 'General consultation',
    status: 'Completed',
  },
  {
    id: 3,
    doctor: 'Dr. Ahmed Khan',
    specialty: 'Internal Medicine',
    date: 'August 05, 2026',
    time: '02:30 PM',
    location: 'Rural Health Centre',
    reason: 'Follow-up consultation',
    status: 'Completed',
  },
]

export function AppointmentProvider({
  children,
}: {
  children: ReactNode
}) {
  const [appointments, setAppointments] =
    useState<Appointment[]>(initialAppointments)

  const addAppointment = (
    appointment: Omit<Appointment, 'id' | 'status'>
  ) => {
    const newAppointment: Appointment = {
      ...appointment,
      id: Date.now(),
      status: 'Confirmed',
    }

    setAppointments((current) => [
      ...current,
      newAppointment,
    ])
  }

  const cancelAppointment = (id: number) => {
    setAppointments((current) =>
      current.map((appointment) =>
        appointment.id === id
          ? {
              ...appointment,
              status: 'Cancelled',
            }
          : appointment
      )
    )
  }

  return (
    <AppointmentContext.Provider
      value={{
        appointments,
        addAppointment,
        cancelAppointment,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  )
}

export function useAppointments() {
  const context = useContext(AppointmentContext)

  if (!context) {
    throw new Error(
      'useAppointments must be used inside AppointmentProvider'
    )
  }

  return context
}