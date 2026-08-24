import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react'

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

interface VolunteerContextType {
  requests: VolunteerRequest[]
  addRequest: (
    request: Omit<VolunteerRequest, 'id' | 'status'>,
  ) => void
  acceptRequest: (id: number) => void
  completeRequest: (id: number) => void
  cancelRequest: (id: number) => void
}

const VolunteerContext =
  createContext<VolunteerContextType | undefined>(undefined)

const initialRequests: VolunteerRequest[] = [
  {
    id: 1,
    type: 'Hospital Visit Assistance',
    description:
      'Need help reaching the hospital for my upcoming appointment.',
    date: 'August 25, 2026',
    location: 'VitoCare Community Hospital',
    status: 'Accepted',
    volunteerName: 'Ayesha Khan',
  },
  {
    id: 2,
    type: 'Medicine Pickup',
    description:
      'Need assistance collecting prescribed medicines from the pharmacy.',
    date: 'August 26, 2026',
    location: 'Apollo Pharmacy',
    status: 'Pending',
  },
]

export function VolunteerProvider({
  children,
}: {
  children: ReactNode
}) {
  const [requests, setRequests] =
    useState<VolunteerRequest[]>(initialRequests)

  const addRequest = (
    request: Omit<VolunteerRequest, 'id' | 'status'>,
  ) => {
    setRequests((current) => [
      ...current,
      {
        ...request,
        id: Date.now(),
        status: 'Pending',
      },
    ])
  }

  const acceptRequest = (id: number) => {
    setRequests((current) =>
      current.map((request) =>
        request.id === id
          ? {
              ...request,
              status: 'Accepted',
              volunteerName: 'Community Volunteer',
            }
          : request,
      ),
    )
  }

  const completeRequest = (id: number) => {
    setRequests((current) =>
      current.map((request) =>
        request.id === id
          ? {
              ...request,
              status: 'Completed',
            }
          : request,
      ),
    )
  }

  const cancelRequest = (id: number) => {
    setRequests((current) =>
      current.filter(
        (request) => request.id !== id,
      ),
    )
  }

  return (
    <VolunteerContext.Provider
      value={{
        requests,
        addRequest,
        acceptRequest,
        completeRequest,
        cancelRequest,
      }}
    >
      {children}
    </VolunteerContext.Provider>
  )
}

export function useVolunteers() {
  const context = useContext(VolunteerContext)

  if (!context) {
    throw new Error(
      'useVolunteers must be used inside VolunteerProvider',
    )
  }

  return context
}