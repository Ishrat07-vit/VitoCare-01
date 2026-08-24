import PatientSidebar from '../components/PatientSidebar'
import PatientHeader from '../components/PatientHeader'
import PrescriptionCard from '../components/PrescriptionCard'
import { usePrescriptions } from '../store/PrescriptionContext'

function PrescriptionsPage() {
  const { prescriptions } = usePrescriptions()

  const activePrescriptions = prescriptions.filter(
    (prescription) => prescription.status === 'Active',
  )

  const completedPrescriptions = prescriptions.filter(
    (prescription) =>
      prescription.status === 'Completed',
  )

  return (
    <div className="flex min-h-screen bg-slate-50">

      <PatientSidebar />

      <div className="flex min-w-0 flex-1 flex-col">

        <PatientHeader />

        <main className="flex-1 p-6 lg:p-8">

          <div className="mx-auto max-w-7xl">

            {/* Heading */}

            <div>

              <p className="text-sm font-medium text-teal-700">
                Patient Portal
              </p>

              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Prescriptions 📋
              </h1>

              <p className="mt-2 text-slate-600">
                View and manage prescriptions provided by your doctors.
              </p>

            </div>

            {/* Summary */}

            <div className="mt-8 grid gap-5 sm:grid-cols-3">

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                <p className="text-sm text-slate-500">
                  Total prescriptions
                </p>

                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {prescriptions.length}
                </p>

              </div>

              <div className="rounded-2xl border border-teal-100 bg-white p-5 shadow-sm">

                <p className="text-sm text-slate-500">
                  Active
                </p>

                <p className="mt-2 text-3xl font-bold text-teal-700">
                  {activePrescriptions.length}
                </p>

              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                <p className="text-sm text-slate-500">
                  Completed
                </p>

                <p className="mt-2 text-3xl font-bold text-slate-700">
                  {completedPrescriptions.length}
                </p>

              </div>

            </div>

            {/* Active prescriptions */}

            {activePrescriptions.length > 0 && (
              <section className="mt-8">

                <div className="mb-4">

                  <h2 className="text-lg font-bold text-slate-900">
                    Active prescriptions
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Medicines currently prescribed to you.
                  </p>

                </div>

                <div className="grid gap-5">

                  {activePrescriptions.map(
                    (prescription) => (
                      <PrescriptionCard
                        key={prescription.id}
                        prescription={prescription}
                      />
                    ),
                  )}

                </div>

              </section>
            )}

            {/* Completed prescriptions */}

            {completedPrescriptions.length > 0 && (
              <section className="mt-10">

                <div className="mb-4">

                  <h2 className="text-lg font-bold text-slate-900">
                    Completed prescriptions
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Previous prescriptions and completed treatments.
                  </p>

                </div>

                <div className="grid gap-5">

                  {completedPrescriptions.map(
                    (prescription) => (
                      <PrescriptionCard
                        key={prescription.id}
                        prescription={prescription}
                      />
                    ),
                  )}

                </div>

              </section>
            )}

            {/* Empty state */}

            {prescriptions.length === 0 && (
              <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">

                <div className="text-4xl">
                  📋
                </div>

                <h2 className="mt-4 text-xl font-bold text-slate-900">
                  No prescriptions
                </h2>

                <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
                  Your prescriptions will appear here after they are added by
                  your healthcare provider.
                </p>

              </div>
            )}

          </div>

        </main>

      </div>

    </div>
  )
}

export default PrescriptionsPage