import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react'

export type MedicineStatus = 'Pending' | 'Taken'

export interface Medicine {
  id: number
  name: string
  dosage: string
  time: string
  period: 'Morning' | 'Afternoon' | 'Night'
  instructions: string
  status: MedicineStatus
}

interface MedicineContextType {
  medicines: Medicine[]
  markAsTaken: (id: number) => void
  markAsPending: (id: number) => void
  addMedicine: (medicine: Omit<Medicine, 'id' | 'status'>) => void
  removeMedicine: (id: number) => void
}

const MedicineContext = createContext<MedicineContextType | undefined>(
  undefined,
)

const initialMedicines: Medicine[] = [
  {
    id: 1,
    name: 'Paracetamol',
    dosage: '500 mg',
    time: '8:00 AM',
    period: 'Morning',
    instructions: 'After breakfast',
    status: 'Taken',
  },
  {
    id: 2,
    name: 'Vitamin D3',
    dosage: '1000 IU',
    time: '1:00 PM',
    period: 'Afternoon',
    instructions: 'After lunch',
    status: 'Pending',
  },
  {
    id: 3,
    name: 'Cetirizine',
    dosage: '10 mg',
    time: '9:00 PM',
    period: 'Night',
    instructions: 'After dinner',
    status: 'Pending',
  },
]

export function MedicineProvider({
  children,
}: {
  children: ReactNode
}) {
  const [medicines, setMedicines] =
    useState<Medicine[]>(initialMedicines)

  const markAsTaken = (id: number) => {
    setMedicines((current) =>
      current.map((medicine) =>
        medicine.id === id
          ? { ...medicine, status: 'Taken' }
          : medicine,
      ),
    )
  }

  const markAsPending = (id: number) => {
    setMedicines((current) =>
      current.map((medicine) =>
        medicine.id === id
          ? { ...medicine, status: 'Pending' }
          : medicine,
      ),
    )
  }

  const addMedicine = (
    medicine: Omit<Medicine, 'id' | 'status'>,
  ) => {
    setMedicines((current) => [
      ...current,
      {
        ...medicine,
        id: Date.now(),
        status: 'Pending',
      },
    ])
  }

  const removeMedicine = (id: number) => {
    setMedicines((current) =>
      current.filter((medicine) => medicine.id !== id),
    )
  }

  return (
    <MedicineContext.Provider
      value={{
        medicines,
        markAsTaken,
        markAsPending,
        addMedicine,
        removeMedicine,
      }}
    >
      {children}
    </MedicineContext.Provider>
  )
}

export function useMedicines() {
  const context = useContext(MedicineContext)

  if (!context) {
    throw new Error(
      'useMedicines must be used inside MedicineProvider',
    )
  }

  return context
}