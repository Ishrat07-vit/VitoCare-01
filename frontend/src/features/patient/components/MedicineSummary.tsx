function MedicineSummary() {
  const medicines = [
    {
      name: 'Paracetamol',
      dose: '500 mg',
      time: '09:00 AM',
      status: 'Taken',
    },
    {
      name: 'Vitamin D',
      dose: '1000 IU',
      time: '02:00 PM',
      status: 'Upcoming',
    },
    {
      name: 'Calcium',
      dose: '500 mg',
      time: '08:00 PM',
      status: 'Upcoming',
    },
  ]

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm font-medium text-teal-700">
            Medicines
          </p>

          <h2 className="mt-1 text-xl font-bold text-slate-900">
            Today's schedule
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Keep track of your medicines for today.
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-xl">
          💊
        </div>

      </div>

      <div className="mt-6 space-y-3">

        {medicines.map((medicine) => (

          <div
            key={`${medicine.name}-${medicine.time}`}
            className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-4"
          >

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-lg shadow-sm">
                💊
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {medicine.name}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {medicine.dose} · {medicine.time}
                </p>
              </div>

            </div>

            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                medicine.status === 'Taken'
                  ? 'bg-teal-50 text-teal-700'
                  : 'bg-amber-50 text-amber-700'
              }`}
            >
              {medicine.status}
            </span>

          </div>

        ))}

      </div>

      <button
        type="button"
        className="mt-5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
      >
        View all medicines →
      </button>

    </section>
  )
}

export default MedicineSummary