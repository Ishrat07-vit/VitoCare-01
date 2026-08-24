function MedicinesPage() {
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
              My Medicines
            </h1>

            <p className="mt-2 text-slate-600">
              View your medicines and keep track of your daily doses.
            </p>

          </div>

          {/* Today's Summary */}
          <div className="mt-8 grid gap-5 md:grid-cols-3">

            {/* Total Medicines */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <p className="text-sm text-slate-500">
                Today's medicines
              </p>

              <p className="mt-3 text-3xl font-bold text-slate-900">
                2
              </p>

              <p className="mt-2 text-sm text-teal-700">
                Scheduled today
              </p>

            </div>

            {/* Taken */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <p className="text-sm text-slate-500">
                Medicines taken
              </p>

              <p className="mt-3 text-3xl font-bold text-slate-900">
                0
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Keep your schedule updated
              </p>

            </div>

            {/* Next Dose */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <p className="text-sm text-slate-500">
                Next dose
              </p>

              <p className="mt-3 text-3xl font-bold text-teal-700">
                9:00 AM
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Paracetamol
              </p>

            </div>

          </div>

          {/* Today's Medicines */}
          <section className="mt-8">

            <div className="flex items-center justify-between">

              <h2 className="text-xl font-bold text-slate-900">
                Today's schedule
              </h2>

              <span className="rounded-full bg-teal-50 px-3 py-1 text-sm font-medium text-teal-700">
                2 medicines
              </span>

            </div>

            <div className="mt-5 space-y-5">

              {/* Medicine 1 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                  <div className="flex items-start gap-4">

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-2xl">
                      💊
                    </div>

                    <div>

                      <div className="flex flex-wrap items-center gap-3">

                        <h3 className="text-lg font-semibold text-slate-900">
                          Paracetamol
                        </h3>

                        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                          Scheduled
                        </span>

                      </div>

                      <p className="mt-1 text-sm text-slate-500">
                        500 mg tablet
                      </p>

                      <div className="mt-4 flex flex-wrap gap-6">

                        <div>
                          <p className="text-xs text-slate-400">
                            Time
                          </p>

                          <p className="mt-1 text-sm font-semibold text-slate-900">
                            9:00 AM
                          </p>
                        </div>

                        <div>
                          <p className="text-xs text-slate-400">
                            Dosage
                          </p>

                          <p className="mt-1 text-sm font-semibold text-slate-900">
                            1 tablet
                          </p>
                        </div>

                        <div>
                          <p className="text-xs text-slate-400">
                            Frequency
                          </p>

                          <p className="mt-1 text-sm font-semibold text-slate-900">
                            Once daily
                          </p>
                        </div>

                      </div>

                    </div>

                  </div>

                  <button
                    type="button"
                    className="rounded-xl bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                  >
                    Mark as taken
                  </button>

                </div>

              </div>

              {/* Medicine 2 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                  <div className="flex items-start gap-4">

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                      💊
                    </div>

                    <div>

                      <div className="flex flex-wrap items-center gap-3">

                        <h3 className="text-lg font-semibold text-slate-900">
                          Amoxicillin
                        </h3>

                        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                          Scheduled
                        </span>

                      </div>

                      <p className="mt-1 text-sm text-slate-500">
                        250 mg capsule
                      </p>

                      <div className="mt-4 flex flex-wrap gap-6">

                        <div>
                          <p className="text-xs text-slate-400">
                            Time
                          </p>

                          <p className="mt-1 text-sm font-semibold text-slate-900">
                            8:00 PM
                          </p>
                        </div>

                        <div>
                          <p className="text-xs text-slate-400">
                            Dosage
                          </p>

                          <p className="mt-1 text-sm font-semibold text-slate-900">
                            1 capsule
                          </p>
                        </div>

                        <div>
                          <p className="text-xs text-slate-400">
                            Frequency
                          </p>

                          <p className="mt-1 text-sm font-semibold text-slate-900">
                            Once daily
                          </p>
                        </div>

                      </div>

                    </div>

                  </div>

                  <button
                    type="button"
                    className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    Mark as taken
                  </button>

                </div>

              </div>

            </div>

          </section>

          {/* Reminder */}
          <section className="mt-8">

            <div className="rounded-2xl border border-teal-100 bg-teal-50 p-6">

              <div className="flex items-start gap-4">

                <div className="text-2xl">
                  💡
                </div>

                <div>

                  <h2 className="font-semibold text-slate-900">
                    Medicine reminder
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Take your medicines at the scheduled time. If you
                    miss a dose, follow your doctor's instructions and
                    keep your medicine information updated.
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

export default MedicinesPage