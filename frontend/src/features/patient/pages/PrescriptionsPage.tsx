import { useState } from 'react'

import PatientSidebar from '../components/PatientSidebar'
import PatientHeader from '../components/PatientHeader'
import PrescriptionCard from '../components/PrescriptionCard'

import type { Prescription } from '../types/prescription'

const prescriptions: Prescription[] = [
  {
    id: 1001,
    doctorName: 'Dr. Anjali Rao',
    specialization: 'General Physician',
    date: 'August 20, 2026',
    validUntil: 'September 20, 2026',
    diagnosis: 'Seasonal fever and mild infection',
    status: 'Active',
    medicines: [
      {
        name: 'Paracetamol',
        dosage: '500 mg',
        frequency: 'Twice daily',
        duration: '5 days',
      },
      {
        name: 'Azithromycin',
        dosage: '250 mg',
        frequency: 'Once daily',
        duration: '3 days',
      },
      {
        name: 'Vitamin C',
        dosage: '500 mg',
        frequency: 'Once daily',
        duration: '10 days',
      },
    ],
  },
  {
    id: 1002,
    doctorName: 'Dr. Rahul Sharma',
    specialization: 'Internal Medicine',
    date: 'July 28, 2026',
    validUntil: 'August 28, 2026',
    diagnosis: 'Vitamin deficiency',
    status: 'Active',
    medicines: [
      {
        name: 'Vitamin D',
        dosage: '1000 IU',
        frequency: 'Once daily',
        duration: '30 days',
      },
      {
        name: 'Calcium',
        dosage: '500 mg',
        frequency: 'Once daily',
        duration: '30 days',
      },
    ],
  },
  {
    id: 1003,
    doctorName: 'Dr. Priya Nair',
    specialization: 'Family Medicine',
    date: 'June 10, 2026',
    validUntil: 'July 10, 2026',
    diagnosis: 'Iron deficiency',
    status: 'Expired',
    medicines: [
      {
        name: 'Iron Supplement',
        dosage: '100 mg',
        frequency: 'Once daily',
        duration: '30 days',
      },
      {
        name: 'Folic Acid',
        dosage: '5 mg',
        frequency: 'Once daily',
        duration: '30 days',
      },
    ],
  },
]

function PrescriptionsPage() {
  const [selectedPrescription, setSelectedPrescription] =
    useState<Prescription | null>(null)

  const activePrescriptions = prescriptions.filter(
    (prescription) => prescription.status === 'Active',
  )

  const expiredPrescriptions = prescriptions.filter(
    (prescription) => prescription.status === 'Expired',
  )

  return (
    <div className="flex min-h-screen bg-slate-50">

      {/* Sidebar */}
      <PatientSidebar />

      {/* Main area */}
      <div className="flex min-w-0 flex-1 flex-col">

        {/* Header */}
        <PatientHeader />

        <main className="flex-1 p-6 lg:p-8">

          <div className="mx-auto max-w-7xl">

            {/* Heading */}
            <div>

              <p className="text-sm font-medium text-teal-700">
                Patient Portal
              </p>

              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Prescriptions
              </h1>

              <p className="mt-2 text-slate-600">
                View and manage your prescriptions from your healthcare providers.
              </p>

            </div>

            {/* Summary */}
            <div className="mt-8 grid gap-5 md:grid-cols-3">

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <p className="text-sm text-slate-500">
                  Active prescriptions
                </p>

                <p className="mt-3 text-3xl font-bold text-teal-700">
                  {activePrescriptions.length}
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Currently valid
                </p>

              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <p className="text-sm text-slate-500">
                  Total prescriptions
                </p>

                <p className="mt-3 text-3xl font-bold text-slate-900">
                  {prescriptions.length}
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  In your records
                </p>

              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <p className="text-sm text-slate-500">
                  Expired
                </p>

                <p className="mt-3 text-3xl font-bold text-slate-700">
                  {expiredPrescriptions.length}
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Past prescriptions
                </p>

              </div>

            </div>

            {/* Active prescriptions */}
            <section className="mt-10">

              <div className="mb-5">

                <h2 className="text-xl font-semibold text-slate-900">
                  Active Prescriptions
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Your currently valid prescriptions.
                </p>

              </div>

              <div className="space-y-5">

                {activePrescriptions.map((prescription) => (
                  <PrescriptionCard
                    key={prescription.id}
                    prescription={prescription}
                    onViewDetails={setSelectedPrescription}
                  />
                ))}

              </div>

            </section>

            {/* Expired */}
            <section className="mt-10">

              <div className="mb-5">

                <h2 className="text-xl font-semibold text-slate-900">
                  Prescription History
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Previously issued prescriptions.
                </p>

              </div>

              <div className="space-y-5">

                {expiredPrescriptions.map((prescription) => (
                  <PrescriptionCard
                    key={prescription.id}
                    prescription={prescription}
                    onViewDetails={setSelectedPrescription}
                  />
                ))}

              </div>

            </section>

            {/* Health record notice */}
            <section className="mt-10 rounded-2xl border border-teal-100 bg-teal-50 p-6">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
                  🔒
                </div>

                <div>

                  <h2 className="font-semibold text-teal-900">
                    Your prescriptions are private
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-teal-800">
                    VitoCare keeps your healthcare records organized
                    and accessible only to authorized users.
                  </p>

                </div>

              </div>

            </section>

          </div>

        </main>

      </div>

      {/* Details modal */}
      {selectedPrescription && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">

          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-xl">

            <div className="flex items-start justify-between gap-4">

              <div>

                <p className="text-sm font-medium text-teal-700">
                  Prescription #{selectedPrescription.id}
                </p>

                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  Prescription Details
                </h2>

              </div>

              <button
                type="button"
                onClick={() => setSelectedPrescription(null)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100"
              >
                ✕
              </button>

            </div>

            {/* Doctor */}
            <div className="mt-6 rounded-xl bg-slate-50 p-4">

              <p className="text-xs text-slate-500">
                Prescribed by
              </p>

              <p className="mt-1 font-semibold text-slate-900">
                {selectedPrescription.doctorName}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                {selectedPrescription.specialization}
              </p>

            </div>

            {/* Diagnosis */}
            <div className="mt-5">

              <p className="text-xs text-slate-500">
                Diagnosis
              </p>

              <p className="mt-1 text-sm font-medium text-slate-900">
                {selectedPrescription.diagnosis}
              </p>

            </div>

            {/* Dates */}
            <div className="mt-5 grid gap-4 sm:grid-cols-2">

              <div>

                <p className="text-xs text-slate-500">
                  Prescription date
                </p>

                <p className="mt-1 text-sm font-medium text-slate-900">
                  {selectedPrescription.date}
                </p>

              </div>

              <div>

                <p className="text-xs text-slate-500">
                  Valid until
                </p>

                <p className="mt-1 text-sm font-medium text-slate-900">
                  {selectedPrescription.validUntil}
                </p>

              </div>

            </div>

            {/* Medicines */}
            <div className="mt-6">

              <h3 className="font-semibold text-slate-900">
                Prescribed Medicines
              </h3>

              <div className="mt-3 space-y-3">

                {selectedPrescription.medicines.map((medicine) => (
                  <div
                    key={medicine.name}
                    className="rounded-xl border border-slate-200 p-4"
                  >

                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                      <div>

                        <p className="font-medium text-slate-900">
                          💊 {medicine.name}
                        </p>

                        <p className="mt-1 text-sm text-slate-500">
                          {medicine.dosage} · {medicine.frequency}
                        </p>

                      </div>

                      <span className="text-sm font-medium text-teal-700">
                        {medicine.duration}
                      </span>

                    </div>

                  </div>
                ))}

              </div>

            </div>

            {/* Close */}
            <div className="mt-6 flex justify-end">

              <button
                type="button"
                onClick={() => setSelectedPrescription(null)}
                className="rounded-xl bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700"
              >
                Close
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  )
}

export default PrescriptionsPage