function PatientDashboard() {
  return (
    <div className="min-h-full bg-slate-50">

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

      {/* Summary Cards */}
      <div className="mt-8 grid gap-5 md:grid-cols-3">

        {/* Medicines */}
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

        {/* Appointment */}
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

        {/* Health */}
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

      {/* Today's Overview */}
      <section className="mt-8">

        <h2 className="text-xl font-bold text-slate-900">
          Today's overview
        </h2>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">

          {/* Medicine Reminder */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-xl">
                💊
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Medicine reminder
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  You have 2 medicines scheduled for today.
                </p>

                <button
                  type="button"
                  className="mt-4 rounded-xl bg-teal-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-teal-700"
                >
                  View medicines
                </button>
              </div>

            </div>

          </div>

          {/* Appointment */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl">
                📅
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Upcoming appointment
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Tomorrow at 10:30 AM.
                </p>

                <button
                  type="button"
                  className="mt-4 rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  View appointment
                </button>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Health Status */}
      <section className="mt-8">

        <div className="rounded-2xl border border-teal-100 bg-teal-50 p-6">

          <div className="flex items-start gap-4">

            <div className="text-2xl">
              🩺
            </div>

            <div>
              <h2 className="font-semibold text-slate-900">
                Your health status looks good
              </h2>

              <p className="mt-1 text-sm leading-6 text-slate-600">
                You have no health alerts today. Keep your medicines
                and appointments up to date.
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

export default PatientDashboard