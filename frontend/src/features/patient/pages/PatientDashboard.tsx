import PatientSidebar from '../components/PatientSidebar'
import PatientHeader from '../components/PatientHeader'

function PatientDashboard() {
  return (
    <div className="flex min-h-screen bg-slate-50">

      {/* Sidebar */}
      <PatientSidebar />

      {/* Main area */}
      <div className="flex min-w-0 flex-1 flex-col">

        {/* Header */}
        <PatientHeader />

        {/* Dashboard content */}
        <main className="flex-1 p-6 lg:p-8">

          <div className="mx-auto max-w-7xl">

            {/* Greeting */}
            <section>
              <p className="text-sm font-medium text-teal-700">
                Monday, August 24, 2026
              </p>

              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Good afternoon, Ishrat 👋
              </h1>

              <p className="mt-2 text-slate-600">
                Here's your healthcare overview for today.
              </p>
            </section>

            {/* Summary Cards */}
            <section className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {/* Medicines */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">

                <div className="flex items-start justify-between">

                  <div>
                    <p className="text-sm text-slate-500">
                      Medicines today
                    </p>

                    <p className="mt-3 text-3xl font-bold text-slate-900">
                      2
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-xl">
                    💊
                  </div>

                </div>

                <p className="mt-3 text-sm font-medium text-teal-700">
                  On schedule
                </p>

              </div>

              {/* Appointment */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">

                <div className="flex items-start justify-between">

                  <div>
                    <p className="text-sm text-slate-500">
                      Next appointment
                    </p>

                    <p className="mt-3 text-3xl font-bold text-slate-900">
                      Tomorrow
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl">
                    📅
                  </div>

                </div>

                <p className="mt-3 text-sm text-slate-500">
                  10:30 AM
                </p>

              </div>

              {/* Health */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">

                <div className="flex items-start justify-between">

                  <div>
                    <p className="text-sm text-slate-500">
                      Health status
                    </p>

                    <p className="mt-3 text-3xl font-bold text-teal-700">
                      Good
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-xl">
                    ❤️
                  </div>

                </div>

                <p className="mt-3 text-sm text-slate-500">
                  No alerts today
                </p>

              </div>

            </section>

            {/* Main Grid */}
            <section className="mt-8 grid gap-6 lg:grid-cols-3">

              {/* Upcoming Appointment */}
              <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <div className="flex items-center justify-between">

                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">
                      Upcoming Appointment
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Your next scheduled healthcare visit
                    </p>
                  </div>

                  <button
                    type="button"
                    className="text-sm font-medium text-teal-700 hover:text-teal-800"
                  >
                    View all
                  </button>

                </div>

                <div className="mt-6 rounded-2xl bg-slate-50 p-5">

                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex items-center gap-4">

                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-100 text-2xl">
                        🩺
                      </div>

                      <div>
                        <p className="font-semibold text-slate-900">
                          General Consultation
                        </p>

                        <p className="mt-1 text-sm text-slate-500">
                          Dr. Anjali Rao
                        </p>

                        <p className="mt-1 text-sm text-slate-500">
                          Community Health Centre
                        </p>
                      </div>

                    </div>

                    <div className="sm:text-right">

                      <p className="font-semibold text-slate-900">
                        Tomorrow
                      </p>

                      <p className="mt-1 text-sm text-teal-700">
                        10:30 AM
                      </p>

                      <span className="mt-2 inline-block rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
                        Confirmed
                      </span>

                    </div>

                  </div>

                </div>

              </div>

              {/* Quick Actions */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <h2 className="text-lg font-semibold text-slate-900">
                  Quick Actions
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Common healthcare actions
                </p>

                <div className="mt-5 space-y-3">

                  <button
                    type="button"
                    className="flex w-full items-center gap-3 rounded-xl border border-slate-200 p-3 text-left transition hover:bg-slate-50"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-50">
                      📅
                    </span>

                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        Book Appointment
                      </p>

                      <p className="text-xs text-slate-500">
                        Find nearby healthcare
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    className="flex w-full items-center gap-3 rounded-xl border border-slate-200 p-3 text-left transition hover:bg-slate-50"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
                      💊
                    </span>

                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        View Medicines
                      </p>

                      <p className="text-xs text-slate-500">
                        Check today's schedule
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    className="flex w-full items-center gap-3 rounded-xl border border-slate-200 p-3 text-left transition hover:bg-slate-50"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50">
                      🤝
                    </span>

                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        Request Volunteer
                      </p>

                      <p className="text-xs text-slate-500">
                        Get community assistance
                      </p>
                    </div>
                  </button>

                </div>

              </div>

            </section>

            {/* Bottom Grid */}
            <section className="mt-6 grid gap-6 lg:grid-cols-2">

              {/* Today's Medicines */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <div className="flex items-center justify-between">

                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">
                      Today's Medicines
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Keep track of your medication
                    </p>
                  </div>

                  <button
                    type="button"
                    className="text-sm font-medium text-teal-700 hover:text-teal-800"
                  >
                    View all
                  </button>

                </div>

                <div className="mt-5 space-y-3">

                  {/* Medicine 1 */}
                  <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                        💊
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          Paracetamol
                        </p>

                        <p className="text-xs text-slate-500">
                          500 mg · After breakfast
                        </p>
                      </div>

                    </div>

                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                      Taken
                    </span>

                  </div>

                  {/* Medicine 2 */}
                  <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                        💊
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          Vitamin D
                        </p>

                        <p className="text-xs text-slate-500">
                          1000 IU · After dinner
                        </p>
                      </div>

                    </div>

                    <span className="rounded-full bg-yellow-50 px-3 py-1 text-xs font-medium text-yellow-700">
                      Upcoming
                    </span>

                  </div>

                </div>

              </div>

              {/* Health Alerts */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    Health Alerts
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Important updates about your health
                  </p>
                </div>

                <div className="mt-5 rounded-xl border border-teal-100 bg-teal-50 p-4">

                  <div className="flex gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white">
                      ✓
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-teal-900">
                        Everything looks good
                      </p>

                      <p className="mt-1 text-sm leading-6 text-teal-700">
                        You have no urgent health alerts at the moment.
                        Keep following your prescribed medication schedule.
                      </p>
                    </div>

                  </div>

                </div>

                <div className="mt-4 rounded-xl border border-slate-200 p-4">

                  <div className="flex gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50">
                      🏥
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Nearby healthcare available
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        Community healthcare services are available
                        in your area.
                      </p>
                    </div>

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

export default PatientDashboard