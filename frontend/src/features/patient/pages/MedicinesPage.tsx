import { useState } from 'react'

import PatientSidebar from '../components/PatientSidebar'
import PatientHeader from '../components/PatientHeader'
import MedicineCard from '../components/MedicineCard'

import type { Medicine } from '../types/medicine'

const initialMedicines: Medicine[] = [
  {
    id: 1,
    name: 'Paracetamol',
    dosage: '500 mg',
    frequency: 'Once daily',
    time: '9:00 AM',
    instruction: 'After breakfast',
    prescribedBy: 'Dr. Anjali Rao',
    status: 'Taken',
  },
  {
    id: 2,
    name: 'Vitamin D',
    dosage: '1000 IU',
    frequency: 'Once daily',
    time: '2:00 PM',
    instruction: 'After lunch',
    prescribedBy: 'Dr. Rahul Sharma',
    status: 'Pending',
  },
  {
    id: 3,
    name: 'Iron Supplement',
    dosage: '100 mg',
    frequency: 'Once daily',
    time: '8:00 PM',
    instruction: 'After dinner',
    prescribedBy: 'Dr. Priya Nair',
    status: 'Pending',
  },
]

function MedicinesPage() {
  const [medicines, setMedicines] =
    useState<Medicine[]>(initialMedicines)

  const takenCount = medicines.filter(
    (medicine) => medicine.status === 'Taken',
  ).length

  const progress =
    medicines.length === 0
      ? 0
      : Math.round((takenCount / medicines.length) * 100)

  const handleStatusChange = (id: number) => {
    setMedicines((currentMedicines) =>
      currentMedicines.map((medicine) =>
        medicine.id === id
          ? {
              ...medicine,
              status: 'Taken',
            }
          : medicine,
      ),
    )
  }

  return (
    <div className="flex min-h-screen bg-slate-50">

      {/* Sidebar */}
      <PatientSidebar />

      {/* Main content */}
      <div className="flex min-w-0 flex-1 flex-col">

        {/* Header */}
        <PatientHeader />

        <main className="flex-1 p-6 lg:p-8">

          <div className="mx-auto max-w-7xl">

            {/* Heading */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <div>

                <p className="text-sm font-medium text-teal-700">
                  Patient Portal
                </p>

                <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                  Medicines
                </h1>

                <p className="mt-2 text-slate-600">
                  Keep track of your daily medicines and reminders.
                </p>

              </div>

              <button
                type="button"
                className="w-fit rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700"
              >
                + Add Medicine
              </button>

            </div>

            {/* Today's progress */}
            <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                <div>

                  <p className="text-sm font-medium text-slate-500">
                    Today's Medicine Progress
                  </p>

                  <div className="mt-2 flex items-baseline gap-2">

                    <span className="text-3xl font-bold text-slate-900">
                      {takenCount}
                    </span>

                    <span className="text-sm text-slate-500">
                      of {medicines.length} medicines taken
                    </span>

                  </div>

                </div>

                <div className="text-right">

                  <p className="text-2xl font-bold text-teal-700">
                    {progress}%
                  </p>

                  <p className="text-xs text-slate-500">
                    completed today
                  </p>

                </div>

              </div>

              {/* Progress bar */}
              <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">

                <div
                  className="h-full rounded-full bg-teal-600 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />

              </div>

            </section>

            {/* Today's medicines */}
            <section className="mt-8">

              <div className="mb-5">

                <h2 className="text-xl font-semibold text-slate-900">
                  Today's Medicines
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Follow your prescribed schedule to stay on track.
                </p>

              </div>

              <div className="space-y-5">

                {medicines.map((medicine) => (
                  <MedicineCard
                    key={medicine.id}
                    medicine={medicine}
                    onStatusChange={handleStatusChange}
                  />
                ))}

              </div>

            </section>

            {/* Reminder information */}
            <section className="mt-10 rounded-2xl border border-teal-100 bg-teal-50 p-6">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
                  🔔
                </div>

                <div>

                  <h2 className="font-semibold text-teal-900">
                    Medicine reminders
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-teal-800">
                    VitoCare will help you remember your medicines
                    at their scheduled times. You can mark each
                    medicine as taken after completing the dose.
                  </p>

                </div>

              </div>

            </section>

            {/* Medicine history */}
            <section className="mt-10">

              <div className="mb-5">

                <h2 className="text-xl font-semibold text-slate-900">
                  Medicine History
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Your recent medication activity.
                </p>

              </div>

              <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">

                <div className="divide-y divide-slate-100">

                  <div className="flex items-center justify-between p-5">

                    <div>

                      <p className="font-medium text-slate-900">
                        Paracetamol
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        August 24, 2026 · 9:00 AM
                      </p>

                    </div>

                    <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
                      Taken
                    </span>

                  </div>

                  <div className="flex items-center justify-between p-5">

                    <div>

                      <p className="font-medium text-slate-900">
                        Vitamin D
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        August 23, 2026 · 2:00 PM
                      </p>

                    </div>

                    <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
                      Taken
                    </span>

                  </div>

                  <div className="flex items-center justify-between p-5">

                    <div>

                      <p className="font-medium text-slate-900">
                        Iron Supplement
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        August 23, 2026 · 8:00 PM
                      </p>

                    </div>

                    <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-600">
                      Missed
                    </span>

                  </div>

                </div>

              </div>

            </section>

          </div>

        </main>

      </div>

    </div>
  )
}

export default MedicinesPage