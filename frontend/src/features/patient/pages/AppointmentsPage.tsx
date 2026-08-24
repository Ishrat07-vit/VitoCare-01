function AppointmentsPage() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-6 lg:px-8">

        <div>
          <h1 className="text-2xl font-bold text-teal-700">
            VitoCare
          </h1>

          <p className="text-xs text-slate-400">
            Patient Portal
          </p>
        </div>

        <div className="flex items-center gap-3">

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white"
          >
            🔔
          </button>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 font-bold text-teal-700">
            I
          </div>

        </div>

      </header>

      {/* Main */}
      <main className="p-6 lg:p-8">

        <div className="mx-auto max-w-7xl">

          {/* Page Heading */}
          <div>

            <p className="text-sm font-medium text-teal-700">
              Patient Portal
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              My Appointments
            </h1>

            <p className="mt-2 text-slate-600">
              View and manage your upcoming healthcare appointments.
            </p>

          </div>

          {/* Summary */}
          <div className="mt-8 grid gap-5 md:grid-cols-3">

            {/* Upcoming */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <p className="text-sm text-slate-500">
                Upcoming appointments
              </p>

              <p className="mt-3 text-3xl font-bold text-slate-900">
                1
              </p>

              <p className="mt-2 text-sm text-teal-700">
                Scheduled
              </p>

            </div>

            {/* Next Appointment */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <p className="text-sm text-slate-500">
                Next appointment
              </p>

              <p className="mt-3 text-3xl font-bold text-teal-700">
                Tomorrow
              </p>

              <p className="mt-2 text-sm text-slate-500">
                10:30 AM
              </p>

            </div>

            {/* Completed */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <p className="text-sm text-slate-500">
                Completed
              </p>

              <p className="mt-3 text-3xl font-bold text-slate-900">
                3
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Previous appointments
              </p>

            </div>

          </div>

          {/* Upcoming Appointment */}
          <section className="mt-8">

            <h2 className="text-xl font-bold text-slate-900">
              Upcoming appointment
            </h2>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                <div className="flex items-start gap-4">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                    📅
                  </div>

                  <div>

                    <div className="flex flex-wrap items-center gap-3">

                      <h3 className="text-lg font-semibold text-slate-900">
                        General Consultation
                      </h3>

                      <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                        Confirmed
                      </span>

                    </div>

                    <p className="mt-1 text-sm text-slate-500">
                      Dr. Ananya Sharma
                    </p>

                    <div className="mt-4 flex flex-wrap gap-6">

                      <div>
                        <p className="text-xs text-slate-400">
                          Date
                        </p>

                        <p className="mt-1 text-sm font-semibold text-slate-900">
                          August 25, 2026
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-slate-400">
                          Time
                        </p>

                        <p className="mt-1 text-sm font-semibold text-slate-900">
                          10:30 AM
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-slate-400">
                          Type
                        </p>

                        <p className="mt-1 text-sm font-semibold text-slate-900">
                          In-person
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

                <div className="flex gap-3">

                  <button
                    type="button"
                    className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    View details
                  </button>

                  <button
                    type="button"
                    className="rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                  >
                    Reschedule
                  </button>

                </div>

              </div>

            </div>

          </section>

          {/* Previous Appointments */}
          <section className="mt-8">

            <h2 className="text-xl font-bold text-slate-900">
              Previous appointments
            </h2>

            <div className="mt-5 space-y-4">

              {/* Previous Appointment 1 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-xl">
                      🩺
                    </div>

                    <div>

                      <h3 className="font-semibold text-slate-900">
                        Routine Check-up
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        Dr. Rahul Kumar • August 10, 2026
                      </p>

                    </div>

                  </div>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    Completed
                  </span>

                </div>

              </div>

              {/* Previous Appointment 2 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-xl">
                      🩺
                    </div>

                    <div>

                      <h3 className="font-semibold text-slate-900">
                        General Consultation
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        Dr. Ananya Sharma • July 28, 2026
                      </p>

                    </div>

                  </div>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    Completed
                  </span>

                </div>

              </div>

            </div>

          </section>

          {/* Booking Information */}
          <section className="mt-8">

            <div className="rounded-2xl border border-teal-100 bg-teal-50 p-6">

              <div className="flex items-start gap-4">

                <div className="text-2xl">
                  🏥
                </div>

                <div>

                  <h2 className="font-semibold text-slate-900">
                    Need a new appointment?
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Contact your healthcare provider or VitoCare support
                    to schedule a new appointment.
                  </p>

                </div>

              </div>

            </div>

          </section>

        </div>

      </main>

    </div>
  )
}

export default AppointmentsPage