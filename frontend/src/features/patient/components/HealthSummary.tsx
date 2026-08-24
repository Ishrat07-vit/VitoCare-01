function HealthSummary() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm font-medium text-teal-700">
            Health overview
          </p>

          <h2 className="mt-1 text-xl font-bold text-slate-900">
            You're doing well
          </h2>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-xl">
          ❤️
        </div>

      </div>

      <div className="mt-6 flex items-center gap-4 rounded-xl bg-teal-50 p-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl shadow-sm">
          ✓
        </div>

        <div>
          <p className="font-semibold text-teal-900">
            Good health status
          </p>

          <p className="mt-1 text-sm text-teal-700">
            No active health alerts today.
          </p>
        </div>

      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">

        <div className="rounded-xl border border-slate-100 p-4">
          <p className="text-xs text-slate-400">
            Wellness
          </p>

          <p className="mt-1 text-lg font-bold text-slate-900">
            Good
          </p>
        </div>

        <div className="rounded-xl border border-slate-100 p-4">
          <p className="text-xs text-slate-400">
            Alerts
          </p>

          <p className="mt-1 text-lg font-bold text-teal-700">
            0
          </p>
        </div>

      </div>

      <button
        type="button"
        className="mt-5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
      >
        View health information →
      </button>

    </section>
  )
}

export default HealthSummary