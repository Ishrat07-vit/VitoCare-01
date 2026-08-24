import PatientSidebar from '../components/PatientSidebar'
import PatientHeader from '../components/PatientHeader'
import MedicineCard from '../components/MedicineCard'
import { useMedicines } from '../store/MedicineContext'

function MedicinesPage() {
  const { medicines } = useMedicines()

  const morningMedicines = medicines.filter(
    (medicine) => medicine.period === 'Morning',
  )

  const afternoonMedicines = medicines.filter(
    (medicine) => medicine.period === 'Afternoon',
  )

  const nightMedicines = medicines.filter(
    (medicine) => medicine.period === 'Night',
  )

  const takenCount = medicines.filter(
    (medicine) => medicine.status === 'Taken',
  ).length

  const pendingCount = medicines.filter(
    (medicine) => medicine.status === 'Pending',
  ).length

  const renderSection = (
    title: string,
    icon: string,
    items: typeof medicines,
  ) => {
    if (items.length === 0) {
      return null
    }

    return (
      <section className="mt-8">

        <div className="mb-4 flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-xl">
            {icon}
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              {title}
            </h2>

            <p className="text-sm text-slate-500">
              {items.length}{' '}
              {items.length === 1 ? 'medicine' : 'medicines'}
            </p>
          </div>

        </div>

        <div className="grid gap-5">
          {items.map((medicine) => (
            <MedicineCard
              key={medicine.id}
              medicine={medicine}
            />
          ))}
        </div>

      </section>
    )
  }

  return (
    <div className="flex min-h-screen bg-slate-50">

      <PatientSidebar />

      <div className="flex min-w-0 flex-1 flex-col">

        <PatientHeader />

        <main className="flex-1 p-6 lg:p-8">

          <div className="mx-auto max-w-7xl">

            {/* Page heading */}

            <div>

              <p className="text-sm font-medium text-teal-700">
                Monday, August 24, 2026
              </p>

              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                My Medicines 💊
              </h1>

              <p className="mt-2 text-slate-600">
                Keep track of your medicines and daily medication schedule.
              </p>

            </div>

            {/* Summary */}

            <div className="mt-8 grid gap-5 sm:grid-cols-3">

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-sm text-slate-500">
                      Total medicines
                    </p>

                    <p className="mt-2 text-3xl font-bold text-slate-900">
                      {medicines.length}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 text-xl">
                    💊
                  </div>

                </div>

              </div>

              <div className="rounded-2xl border border-teal-100 bg-white p-5 shadow-sm">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-sm text-slate-500">
                      Taken today
                    </p>

                    <p className="mt-2 text-3xl font-bold text-teal-700">
                      {takenCount}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-xl">
                    ✓
                  </div>

                </div>

              </div>

              <div className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-sm text-slate-500">
                      Remaining
                    </p>

                    <p className="mt-2 text-3xl font-bold text-amber-600">
                      {pendingCount}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl">
                    ⏰
                  </div>

                </div>

              </div>

            </div>

            {/* Progress */}

            {medicines.length > 0 && (
              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm font-semibold text-slate-900">
                      Today's medication progress
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {takenCount} of {medicines.length} medicines taken
                    </p>

                  </div>

                  <p className="text-sm font-bold text-teal-700">
                    {Math.round(
                      (takenCount / medicines.length) * 100,
                    )}
                    %
                  </p>

                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">

                  <div
                    className="h-full rounded-full bg-teal-600 transition-all duration-500"
                    style={{
                      width: `${(takenCount / medicines.length) * 100}%`,
                    }}
                  />

                </div>

              </div>
            )}

            {/* Medicine sections */}

            {medicines.length === 0 ? (
              <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">

                <div className="text-4xl">
                  💊
                </div>

                <h2 className="mt-4 text-xl font-bold text-slate-900">
                  No medicines added
                </h2>

                <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
                  Your medicines will appear here once they are added to your
                  healthcare plan.
                </p>

              </div>
            ) : (
              <>
                {renderSection(
                  'Morning',
                  '🌅',
                  morningMedicines,
                )}

                {renderSection(
                  'Afternoon',
                  '☀️',
                  afternoonMedicines,
                )}

                {renderSection(
                  'Night',
                  '🌙',
                  nightMedicines,
                )}
              </>
            )}

          </div>

        </main>

      </div>

    </div>
  )
}

export default MedicinesPage