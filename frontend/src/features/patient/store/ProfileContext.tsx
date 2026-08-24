import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react'

export interface PatientProfile {
  name: string
  age: string
  gender: string
  phone: string
  email: string
  address: string
  bloodGroup: string
  emergencyContact: string
  healthCondition: string
}

interface ProfileContextType {
  profile: PatientProfile
  updateProfile: (profile: PatientProfile) => void
}

const ProfileContext =
  createContext<ProfileContextType | undefined>(undefined)

const initialProfile: PatientProfile = {
  name: 'Ishrat',
  age: '20',
  gender: 'Female',
  phone: '+91 98765 43210',
  email: 'ishrat@example.com',
  address: 'Andhra Pradesh, India',
  bloodGroup: 'B+',
  emergencyContact: '+91 91234 56789',
  healthCondition: 'No known major conditions',
}

export function ProfileProvider({
  children,
}: {
  children: ReactNode
}) {
  const [profile, setProfile] =
    useState<PatientProfile>(initialProfile)

  const updateProfile = (updatedProfile: PatientProfile) => {
    setProfile(updatedProfile)
  }

  return (
    <ProfileContext.Provider
      value={{
        profile,
        updateProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  )
}

export function useProfile() {
  const context = useContext(ProfileContext)

  if (!context) {
    throw new Error(
      'useProfile must be used inside ProfileProvider',
    )
  }

  return context
}