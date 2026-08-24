import PatientSidebar from '../components/PatientSidebar'
import PatientHeader from '../components/PatientHeader'

import MedicineSummary from '../components/MedicineSummary'
import AppointmentSummary from '../components/AppointmentSummary'
import HealthSummary from '../components/HealthSummary'
import RecentActivity from '../components/RecentActivity'

function PatientDashboard() {
  return (
    <div className="flex min-h-screen bg-slate-50">

      {/* Sidebar */}
      <PatientSidebar />

      {/* Main area */}
      <div className="flex min-w-0 flex-1 flex-col">

        <PatientHeader />

        <main className="flex-1 p-6 lg:p-8">

          <div className="mx-auto max-w-7xl">

            {/* Welcome */}
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

            {/* Quick summary */}
            <div className="mt-8 grid gap-5 md:grid-cols-3">

              {/* Medicines */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <div className="flex items-center justify-between">

                  <p className="text-sm text-slate-500">
                    Medicines today
                  </p>

                  <span className="text-xl">
                    💊
                  </span>

                </div>

                <p className="mt-3 text-3xl font-bold text-slate-900">
                  3
                </p>

                <p className="mt-2 text-sm text-teal-700">
                  1 taken · 2 remaining
                </p>

              </div>

              {/* Appointment */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <div className="flex items-center justify-between">

                  <p className="text-sm text-slate-500">
                    Next appointment
                  </p>

                  <span className="text-xl">
                    📅
                  </span>

                </div>

                <p className="mt-3 text-2xl font-bold text-slate-900">
                  Tomorrow
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  10:30 AM
                </p>

              </div>

              {/* Health */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <div className="flex items-center justify-between">

                  <p className="text-sm text-slate-500">
                    Health status
                  </p>

                  <span className="text-xl">
                    ❤️
                  </span>

                </div>

                <p className="mt-3 text-3xl font-bold text-teal-700">
                  Good
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  No alerts today
                </p>

              </div>

            </div>

            {/* Main dashboard */}
            <div className="mt-8 grid gap-6 xl:grid-cols-2">

              <MedicineSummary />

              <AppointmentSummary />

              <HealthSummary />

              <RecentActivity />

            </div>

            {/* Quick actions */}
            <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <div>

                <p className="text-sm font-medium text-teal-700">
                  Quick actions
                </p>

                <h2 className="mt-1 text-xl font-bold text-slate-900">
                  What would you like to do?
                </h2>

              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

                <button
                  type="button"
                  className="rounded-xl border border-slate-200 p-4 text-left transition hover:border-teal-200 hover:bg-teal-50"
                >
                  <span className="text-xl">
                    📅
                  </span>

                  <p className="mt-3 text-sm font-semibold text-slate-900">
                    Book appointment
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Find available doctors
                  </p>
                </button>

                <button
                  type="button"
                  className="rounded-xl border border-slate-200 p-4 text-left transition hover:border-teal-200 hover:bg-teal-50"
                >
                  <span className="text-xl">
                    💊
                  </span>

                  <p className="mt-3 text-sm font-semibold text-slate-900">
                    Medicines
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Check today's schedule
                  </p>
                </button>

                <button
                  type="button"
                  className="rounded-xl border border-slate-200 p-4 text-left transition hover:border-teal-200 hover:bg-teal-50"
                >
                  <span className="text-xl">
                    📋
                  </span>

                  <p className="mt-3 text-sm font-semibold text-slate-900">
                    Prescriptions
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    View medical records
                  </p>
                </button>

                <button
                  type="button"
                  className="rounded-xl border border-slate-200 p-4 text-left transition hover:border-teal-200 hover:bg-teal-50"
                >
                  <span className="text-xl">
                    🤝
                  </span>

                  <p className="mt-3 text-sm font-semibold text-slate-900">
                    Get assistance
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Connect with volunteers
                  </p>
                </button>

              </div>

            </section>

          </div>

        </main>

      </div>

    </div>
  )
}

export default PatientDashboard