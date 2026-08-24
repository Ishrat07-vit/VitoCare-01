function PatientHeader() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-6 lg:px-8">

      <div>
        <p className="text-sm text-slate-500">
          Patient Dashboard
        </p>
      </div>

      <div className="flex items-center gap-4">

        {/* Notification */}
        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-lg transition hover:bg-slate-50"
        >
          🔔

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-teal-600" />
        </button>

        {/* Profile */}
        <button
          type="button"
          className="flex items-center gap-3 rounded-xl px-2 py-1.5 transition hover:bg-slate-50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 font-bold text-teal-700">
            I
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-sm font-semibold text-slate-900">
              Ishrat
            </p>

            <p className="text-xs text-slate-500">
              Patient
            </p>
          </div>

          <span className="text-xs text-slate-400">
            ▼
          </span>
        </button>

      </div>

    </header>
  )
}

export default PatientHeader