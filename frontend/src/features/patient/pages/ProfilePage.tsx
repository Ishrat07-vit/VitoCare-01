function ProfilePage() {
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
              My Profile
            </h1>

            <p className="mt-2 text-slate-600">
              View and manage your personal and healthcare information.
            </p>

          </div>

          {/* Profile Header */}
          <section className="mt-8">

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex items-center gap-5">

                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-teal-100 text-2xl font-bold text-teal-700">
                    I
                  </div>

                  <div>

                    <h2 className="text-2xl font-bold text-slate-900">
                      Ishrat
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Patient
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      VitoCare Patient ID: VC-1024
                    </p>

                  </div>

                </div>

                <button
                  type="button"
                  className="rounded-xl bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                >
                  Edit profile
                </button>

              </div>

            </div>

          </section>

          {/* Personal Information */}
          <section className="mt-8">

            <h2 className="text-xl font-bold text-slate-900">
              Personal information
            </h2>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <div className="grid gap-6 md:grid-cols-2">

                {/* Full Name */}
                <div>

                  <p className="text-sm text-slate-400">
                    Full name
                  </p>

                  <p className="mt-2 font-medium text-slate-900">
                    Ishrat
                  </p>

                </div>

                {/* Age */}
                <div>

                  <p className="text-sm text-slate-400">
                    Age
                  </p>

                  <p className="mt-2 font-medium text-slate-900">
                    20 years
                  </p>

                </div>

                {/* Phone */}
                <div>

                  <p className="text-sm text-slate-400">
                    Phone number
                  </p>

                  <p className="mt-2 font-medium text-slate-900">
                    +91 XXXXX XXXXX
                  </p>

                </div>

                {/* Email */}
                <div>

                  <p className="text-sm text-slate-400">
                    Email address
                  </p>

                  <p className="mt-2 font-medium text-slate-900">
                    ishrat@example.com
                  </p>

                </div>

                {/* Address */}
                <div className="md:col-span-2">

                  <p className="text-sm text-slate-400">
                    Address
                  </p>

                  <p className="mt-2 font-medium text-slate-900">
                    Your registered address
                  </p>

                </div>

              </div>

            </div>

          </section>

          {/* Healthcare Information */}
          <section className="mt-8">

            <h2 className="text-xl font-bold text-slate-900">
              Healthcare information
            </h2>

            <div className="mt-5 grid gap-5 md:grid-cols-2">

              {/* Health Issue */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-xl">
                    🩺
                  </div>

                  <div>

                    <p className="text-sm text-slate-400">
                      Current health issue
                    </p>

                    <p className="mt-2 font-semibold text-slate-900">
                      No active issue recorded
                    </p>

                  </div>

                </div>

              </div>

              {/* Blood Group */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-xl">
                    🩸
                  </div>

                  <div>

                    <p className="text-sm text-slate-400">
                      Blood group
                    </p>

                    <p className="mt-2 font-semibold text-slate-900">
                      Not provided
                    </p>

                  </div>

                </div>

              </div>

              {/* Emergency Contact */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-xl">
                    📞
                  </div>

                  <div>

                    <p className="text-sm text-slate-400">
                      Emergency contact
                    </p>

                    <p className="mt-2 font-semibold text-slate-900">
                      Not provided
                    </p>

                  </div>

                </div>

              </div>

              {/* Allergies */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl">
                    ⚕️
                  </div>

                  <div>

                    <p className="text-sm text-slate-400">
                      Allergies
                    </p>

                    <p className="mt-2 font-semibold text-slate-900">
                      No allergies recorded
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* Account Information */}
          <section className="mt-8">

            <h2 className="text-xl font-bold text-slate-900">
              Account information
            </h2>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <div className="grid gap-6 md:grid-cols-2">

                <div>

                  <p className="text-sm text-slate-400">
                    Account status
                  </p>

                  <div className="mt-2 flex items-center gap-2">

                    <span className="h-2.5 w-2.5 rounded-full bg-green-500">
                    </span>

                    <p className="font-medium text-slate-900">
                      Active
                    </p>

                  </div>

                </div>

                <div>

                  <p className="text-sm text-slate-400">
                    Member since
                  </p>

                  <p className="mt-2 font-medium text-slate-900">
                    August 2026
                  </p>

                </div>

              </div>

            </div>

          </section>

          {/* Privacy Notice */}
          <section className="mt-8">

            <div className="rounded-2xl border border-teal-100 bg-teal-50 p-6">

              <div className="flex items-start gap-4">

                <div className="text-2xl">
                  🔒
                </div>

                <div>

                  <h2 className="font-semibold text-slate-900">
                    Your information is private
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Your personal and healthcare information is intended
                    to be accessible only to you and authorized healthcare
                    providers.
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

export default ProfilePage