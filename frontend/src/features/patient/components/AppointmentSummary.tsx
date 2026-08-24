function AppointmentSummary() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm font-medium text-teal-700">
            Next appointment
          </p>

          <h2 className="mt-1 text-xl font-bold text-slate-900">
            Tomorrow
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            10:30 AM · 24 August 2026
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-xl">
          📅
        </div>

      </div>

      <div className="mt-6 rounded-xl bg-slate-50 p-4">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-xl">
            👨‍⚕️
          </div>

          <div>
            <p className="font-semibold text-slate-900">
              Dr. Rajesh Kumar
            </p>

            <p className="mt-1 text-sm text-slate-500">
              General Physician
            </p>
          </div>

        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">

          <div className="rounded-lg bg-white p-3">
            <p className="text-xs text-slate-400">
              Type
            </p>

            <p className="mt-1 text-sm font-semibold text-slate-700">
              Consultation
            </p>
          </div>

          <div className="rounded-lg bg-white p-3">
            <p className="text-xs text-slate-400">
              Location
            </p>

            <p className="mt-1 text-sm font-semibold text-slate-700">
              Community Clinic
            </p>
          </div>

        </div>

      </div>

      <button
        type="button"
        className="mt-5 w-full rounded-xl bg-teal-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
      >
        View appointment
      </button>

    </section>
  )
}

export default AppointmentSummary