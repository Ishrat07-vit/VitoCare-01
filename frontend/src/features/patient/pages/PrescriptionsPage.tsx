function PrescriptionsPage() {
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
              My Prescriptions
            </h1>

            <p className="mt-2 text-slate-600">
              View your prescriptions and keep your medical records organized.
            </p>

          </div>

          {/* Summary Cards */}
          <div className="mt-8 grid gap-5 md:grid-cols-3">

            {/* Active */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <p className="text-sm text-slate-500">
                Active prescriptions
              </p>

              <p className="mt-3 text-3xl font-bold text-slate-900">
                2
              </p>

              <p className="mt-2 text-sm text-teal-700">
                Currently active
              </p>

            </div>

            {/* Recent */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <p className="text-sm text-slate-500">
                Recent prescription
              </p>

              <p className="mt-3 text-3xl font-bold text-slate-900">
                Aug 24
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Issued today
              </p>

            </div>

            {/* Doctors */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <p className="text-sm text-slate-500">
                Prescribing doctors
              </p>

              <p className="mt-3 text-3xl font-bold text-teal-700">
                2
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Healthcare providers
              </p>

            </div>

          </div>

          {/* Active Prescriptions */}
          <section className="mt-8">

            <div className="flex items-center justify-between">

              <h2 className="text-xl font-bold text-slate-900">
                Active prescriptions
              </h2>

              <span className="rounded-full bg-teal-50 px-3 py-1 text-sm font-medium text-teal-700">
                2 active
              </span>

            </div>

            <div className="mt-5 space-y-5">

              {/* Prescription 1 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                  <div className="flex items-start gap-4">

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-2xl">
                      📄
                    </div>

                    <div>

                      <div className="flex flex-wrap items-center gap-3">

                        <h3 className="text-lg font-semibold text-slate-900">
                          General Health Prescription
                        </h3>

                        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                          Active
                        </span>

                      </div>

                      <p className="mt-1 text-sm text-slate-500">
                        Dr. Ananya Sharma
                      </p>

                      <div className="mt-4 flex flex-wrap gap-6">

                        <div>
                          <p className="text-xs text-slate-400">
                            Issued
                          </p>

                          <p className="mt-1 text-sm font-semibold text-slate-900">
                            August 24, 2026
                          </p>
                        </div>

                        <div>
                          <p className="text-xs text-slate-400">
                            Medicines
                          </p>

                          <p className="mt-1 text-sm font-semibold text-slate-900">
                            2 medicines
                          </p>
                        </div>

                        <div>
                          <p className="text-xs text-slate-400">
                            Valid until
                          </p>

                          <p className="mt-1 text-sm font-semibold text-slate-900">
                            September 24, 2026
                          </p>
                        </div>

                      </div>

                    </div>

                  </div>

                  <button
                    type="button"
                    className="rounded-xl bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                  >
                    View prescription
                  </button>

                </div>

              </div>

              {/* Prescription 2 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                  <div className="flex items-start gap-4">

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                      📄
                    </div>

                    <div>

                      <div className="flex flex-wrap items-center gap-3">

                        <h3 className="text-lg font-semibold text-slate-900">
                          Follow-up Prescription
                        </h3>

                        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                          Active
                        </span>

                      </div>

                      <p className="mt-1 text-sm text-slate-500">
                        Dr. Rahul Kumar
                      </p>

                      <div className="mt-4 flex flex-wrap gap-6">

                        <div>
                          <p className="text-xs text-slate-400">
                            Issued
                          </p>

                          <p className="mt-1 text-sm font-semibold text-slate-900">
                            August 10, 2026
                          </p>
                        </div>

                        <div>
                          <p className="text-xs text-slate-400">
                            Medicines
                          </p>

                          <p className="mt-1 text-sm font-semibold text-slate-900">
                            1 medicine
                          </p>
                        </div>

                        <div>
                          <p className="text-xs text-slate-400">
                            Valid until
                          </p>

                          <p className="mt-1 text-sm font-semibold text-slate-900">
                            September 10, 2026
                          </p>
                        </div>

                      </div>

                    </div>

                  </div>

                  <button
                    type="button"
                    className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    View prescription
                  </button>

                </div>

              </div>

            </div>

          </section>

          {/* Prescription Details */}
          <section className="mt-8">

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-xl">
                  📋
                </div>

                <div>

                  <h2 className="font-semibold text-slate-900">
                    Keep your prescriptions updated
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Your prescriptions contain important information about
                    your medicines and treatment. Always follow the
                    instructions provided by your healthcare provider.
                  </p>

                </div>

              </div>

            </div>

          </section>

          {/* Medical Record Notice */}
          <section className="mt-8">

            <div className="rounded-2xl border border-teal-100 bg-teal-50 p-6">

              <div className="flex items-start gap-4">

                <div className="text-2xl">
                  🩺
                </div>

                <div>

                  <h2 className="font-semibold text-slate-900">
                    Your medical records
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Prescriptions are part of your healthcare record.
                    Keep them available when visiting your doctor or
                    healthcare provider.
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

export default PrescriptionsPage