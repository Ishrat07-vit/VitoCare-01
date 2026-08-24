import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react'

export type PrescriptionStatus = 'Active' | 'Completed'

export interface Prescription {
  id: number
  medicineName: string
  dosage: string
  frequency: string
  duration: string
  doctor: string
  date: string
  instructions: string
  status: PrescriptionStatus
}

interface PrescriptionContextType {
  prescriptions: Prescription[]
  addPrescription: (
    prescription: Omit<Prescription, 'id' | 'status'>,
  ) => void
  completePrescription: (id: number) => void
  reactivatePrescription: (id: number) => void
  removePrescription: (id: number) => void
}

const PrescriptionContext =
  createContext<PrescriptionContextType | undefined>(undefined)

const initialPrescriptions: Prescription[] = [
  {
    id: 1,
    medicineName: 'Paracetamol',
    dosage: '500 mg',
    frequency: 'Twice a day',
    duration: '5 days',
    doctor: 'Dr. Priya Sharma',
    date: 'August 24, 2026',
    instructions: 'Take after food with water.',
    status: 'Active',
  },
  {
    id: 2,
    medicineName: 'Vitamin D3',
    dosage: '1000 IU',
    frequency: 'Once a day',
    duration: '30 days',
    doctor: 'Dr. Rahul Verma',
    date: 'August 20, 2026',
    instructions: 'Take after lunch.',
    status: 'Active',
  },
  {
    id: 3,
    medicineName: 'Cetirizine',
    dosage: '10 mg',
    frequency: 'Once at night',
    duration: '7 days',
    doctor: 'Dr. Priya Sharma',
    date: 'August 15, 2026',
    instructions: 'Take after dinner. May cause drowsiness.',
    status: 'Completed',
  },
]

export function PrescriptionProvider({
  children,
}: {
  children: ReactNode
}) {
  const [prescriptions, setPrescriptions] =
    useState<Prescription[]>(initialPrescriptions)

  const addPrescription = (
    prescription: Omit<Prescription, 'id' | 'status'>,
  ) => {
    setPrescriptions((current) => [
      ...current,
      {
        ...prescription,
        id: Date.now(),
        status: 'Active',
      },
    ])
  }

  const completePrescription = (id: number) => {
    setPrescriptions((current) =>
      current.map((prescription) =>
        prescription.id === id
          ? {
              ...prescription,
              status: 'Completed',
            }
          : prescription,
      ),
    )
  }

  const reactivatePrescription = (id: number) => {
    setPrescriptions((current) =>
      current.map((prescription) =>
        prescription.id === id
          ? {
              ...prescription,
              status: 'Active',
            }
          : prescription,
      ),
    )
  }

  const removePrescription = (id: number) => {
    setPrescriptions((current) =>
      current.filter(
        (prescription) => prescription.id !== id,
      ),
    )
  }

  return (
    <PrescriptionContext.Provider
      value={{
        prescriptions,
        addPrescription,
        completePrescription,
        reactivatePrescription,
        removePrescription,
      }}
    >
      {children}
    </PrescriptionContext.Provider>
  )
}

export function usePrescriptions() {
  const context = useContext(PrescriptionContext)

  if (!context) {
    throw new Error(
      'usePrescriptions must be used inside PrescriptionProvider',
    )
  }

  return context
}