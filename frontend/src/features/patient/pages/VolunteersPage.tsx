function VolunteersPage() {
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
              Community Support
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Volunteer Support
            </h1>

            <p className="mt-2 max-w-2xl text-slate-600">
              Connect with trusted VitoCare volunteers who can help you
              with healthcare access, appointments, medicines, and local
              support.
            </p>

          </div>

          {/* Summary Cards */}
          <div className="mt-8 grid gap-5 md:grid-cols-3">

            {/* Available Volunteers */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <p className="text-sm text-slate-500">
                Available volunteers
              </p>

              <p className="mt-3 text-3xl font-bold text-slate-900">
                8
              </p>

              <p className="mt-2 text-sm text-teal-700">
                Currently available
              </p>

            </div>

            {/* Active Requests */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <p className="text-sm text-slate-500">
                My support requests
              </p>

              <p className="mt-3 text-3xl font-bold text-slate-900">
                1
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Active request
              </p>

            </div>

            {/* Support Type */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <p className="text-sm text-slate-500">
                Local support
              </p>

              <p className="mt-3 text-3xl font-bold text-teal-700">
                Available
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Volunteers near you
              </p>

            </div>

          </div>

          {/* Request Help */}
          <section className="mt-8">

            <div className="rounded-2xl border border-teal-100 bg-teal-50 p-6">

              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                <div className="flex items-start gap-4">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white text-2xl">
                    🤝
                  </div>

                  <div>

                    <h2 className="text-lg font-semibold text-slate-900">
                      Need help?
                    </h2>

                    <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600">
                      Request assistance from a VitoCare volunteer for
                      appointments, medicine collection, hospital visits,
                      or other healthcare-related needs.
                    </p>

                  </div>

                </div>

                <button
                  type="button"
                  className="rounded-xl bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                >
                  Request support
                </button>

              </div>

            </div>

          </section>

          {/* Available Volunteers */}
          <section className="mt-8">

            <div className="flex items-center justify-between">

              <h2 className="text-xl font-bold text-slate-900">
                Available volunteers
              </h2>

              <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700">
                8 available
              </span>

            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">

              {/* Volunteer 1 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <div className="flex items-start justify-between">

                  <div className="flex items-start gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 font-bold text-teal-700">
                      RK
                    </div>

                    <div>

                      <h3 className="font-semibold text-slate-900">
                        Rahul Kumar
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        Healthcare Volunteer
                      </p>

                    </div>

                  </div>

                  <span className="h-3 w-3 rounded-full bg-green-500">
                  </span>

                </div>

                <div className="mt-5 border-t border-slate-100 pt-5">

                  <p className="text-sm text-slate-500">
                    Can help with
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                      Hospital visits
                    </span>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                      Appointments
                    </span>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                      Medicine pickup
                    </span>

                  </div>

                </div>

                <button
                  type="button"
                  className="mt-5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Contact volunteer
                </button>

              </div>

              {/* Volunteer 2 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <div className="flex items-start justify-between">

                  <div className="flex items-start gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                      AS
                    </div>

                    <div>

                      <h3 className="font-semibold text-slate-900">
                        Anjali Singh
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        Community Volunteer
                      </p>

                    </div>

                  </div>

                  <span className="h-3 w-3 rounded-full bg-green-500">
                  </span>

                </div>

                <div className="mt-5 border-t border-slate-100 pt-5">

                  <p className="text-sm text-slate-500">
                    Can help with
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                      Healthcare access
                    </span>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                      Local guidance
                    </span>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                      Medicine support
                    </span>

                  </div>

                </div>

                <button
                  type="button"
                  className="mt-5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Contact volunteer
                </button>

              </div>

            </div>

          </section>

          {/* Current Request */}
          <section className="mt-8">

            <h2 className="text-xl font-bold text-slate-900">
              My current request
            </h2>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-xl">
                    📦
                  </div>

                  <div>

                    <h3 className="font-semibold text-slate-900">
                      Medicine pickup assistance
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Requested on August 24, 2026
                    </p>

                    <p className="mt-3 text-sm text-slate-600">
                      Waiting for a volunteer to accept your request.
                    </p>

                  </div>

                </div>

                <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
                  Pending
                </span>

              </div>

            </div>

          </section>

          {/* Safety Information */}
          <section className="mt-8">

            <div className="rounded-2xl border border-slate-200 bg-white p-6">

              <div className="flex items-start gap-4">

                <div className="text-2xl">
                  🛡️
                </div>

                <div>

                  <h2 className="font-semibold text-slate-900">
                    Volunteer safety
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    VitoCare volunteers are intended to provide community
                    assistance and support. They do not replace doctors,
                    nurses, or emergency medical services.
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

export default VolunteersPage