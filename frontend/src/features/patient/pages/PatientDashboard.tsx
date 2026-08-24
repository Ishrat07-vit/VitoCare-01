import PatientSidebar from '../components/PatientSidebar'
import PatientHeader from '../components/PatientHeader'

function PatientDashboard() {
  return (
    <div className="flex min-h-screen bg-slate-50">

      <PatientSidebar />

      <div className="flex min-w-0 flex-1 flex-col">

        <PatientHeader />

        <main className="flex-1 p-6 lg:p-8">

          <div className="mx-auto max-w-7xl">

            <div>
              <p className="text-sm font-medium text-teal-700">
                Monday, August 24, 2026
              </p>

              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Good afternoon, Ishrat 👋
              </h1>

              <p className="mt-2 text-slate-600">
                Here's your healthcare overview for today.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-500">
                  Medicines today
                </p>

                <p className="mt-3 text-3xl font-bold text-slate-900">
                  2
                </p>

                <p className="mt-2 text-sm text-teal-700">
                  On schedule
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-500">
                  Next appointment
                </p>

                <p className="mt-3 text-3xl font-bold text-slate-900">
                  Tomorrow
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  10:30 AM
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-500">
                  Health status
                </p>

                <p className="mt-3 text-3xl font-bold text-teal-700">
                  Good
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  No alerts today
                </p>
              </div>

            </div>

          </div>

        </main>

      </div>

    </div>
  )
}

export default PatientDashboard