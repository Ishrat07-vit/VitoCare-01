import { useState } from 'react'

function SettingsPage() {
  const [appointmentReminders, setAppointmentReminders] = useState(true)
  const [medicineReminders, setMedicineReminders] = useState(true)
  const [healthAlerts, setHealthAlerts] = useState(true)
  const [emailNotifications, setEmailNotifications] = useState(false)

  const [language, setLanguage] = useState('English')

  return (
    <div className="min-h-full bg-slate-50">

      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div>
          <p className="text-sm font-medium text-teal-700">
            Account Preferences
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Settings
          </h1>

          <p className="mt-2 text-slate-600">
            Manage your VitoCare account and healthcare preferences.
          </p>
        </div>

        {/* Notifications */}
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white shadow-sm">

          <div className="border-b border-slate-100 p-6">
            <h2 className="text-lg font-semibold text-slate-900">
              Notifications
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Choose which healthcare updates you want to receive.
            </p>
          </div>

          <div className="divide-y divide-slate-100">

            {/* Appointment reminders */}
            <div className="flex items-center justify-between gap-6 p-6">

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-xl">
                  📅
                </div>

                <div>
                  <h3 className="font-medium text-slate-900">
                    Appointment reminders
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Get notified before your upcoming appointments.
                  </p>
                </div>

              </div>

              <button
                type="button"
                onClick={() =>
                  setAppointmentReminders(!appointmentReminders)
                }
                className={`relative h-7 w-12 shrink-0 rounded-full transition ${
                  appointmentReminders
                    ? 'bg-teal-600'
                    : 'bg-slate-300'
                }`}
              >
                <span
                  className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ${
                    appointmentReminders
                      ? 'left-6'
                      : 'left-1'
                  }`}
                />
              </button>

            </div>

            {/* Medicine reminders */}
            <div className="flex items-center justify-between gap-6 p-6">

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-xl">
                  💊
                </div>

                <div>
                  <h3 className="font-medium text-slate-900">
                    Medicine reminders
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Receive reminders when it is time to take your medicines.
                  </p>
                </div>

              </div>

              <button
                type="button"
                onClick={() =>
                  setMedicineReminders(!medicineReminders)
                }
                className={`relative h-7 w-12 shrink-0 rounded-full transition ${
                  medicineReminders
                    ? 'bg-teal-600'
                    : 'bg-slate-300'
                }`}
              >
                <span
                  className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ${
                    medicineReminders
                      ? 'left-6'
                      : 'left-1'
                  }`}
                />
              </button>

            </div>

            {/* Health alerts */}
            <div className="flex items-center justify-between gap-6 p-6">

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-xl">
                  🏥
                </div>

                <div>
                  <h3 className="font-medium text-slate-900">
                    Healthcare alerts
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Receive important healthcare and service updates.
                  </p>
                </div>

              </div>

              <button
                type="button"
                onClick={() =>
                  setHealthAlerts(!healthAlerts)
                }
                className={`relative h-7 w-12 shrink-0 rounded-full transition ${
                  healthAlerts
                    ? 'bg-teal-600'
                    : 'bg-slate-300'
                }`}
              >
                <span
                  className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ${
                    healthAlerts
                      ? 'left-6'
                      : 'left-1'
                  }`}
                />
              </button>

            </div>

            {/* Email */}
            <div className="flex items-center justify-between gap-6 p-6">

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-xl">
                  ✉️
                </div>

                <div>
                  <h3 className="font-medium text-slate-900">
                    Email notifications
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Receive selected VitoCare updates by email.
                  </p>
                </div>

              </div>

              <button
                type="button"
                onClick={() =>
                  setEmailNotifications(!emailNotifications)
                }
                className={`relative h-7 w-12 shrink-0 rounded-full transition ${
                  emailNotifications
                    ? 'bg-teal-600'
                    : 'bg-slate-300'
                }`}
              >
                <span
                  className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ${
                    emailNotifications
                      ? 'left-6'
                      : 'left-1'
                  }`}
                />
              </button>

            </div>

          </div>

        </section>

        {/* Language */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm">

          <div className="p-6">

            <h2 className="text-lg font-semibold text-slate-900">
              Language
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Select the language you prefer for VitoCare.
            </p>

            <div className="mt-5 max-w-sm">

              <label
                htmlFor="language"
                className="text-sm font-medium text-slate-700"
              >
                Preferred language
              </label>

              <select
                id="language"
                value={language}
                onChange={(event) =>
                  setLanguage(event.target.value)
                }
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
              >
                <option>English</option>
                <option>Hindi</option>
                <option>Telugu</option>
                <option>Urdu</option>
              </select>

            </div>

          </div>

        </section>

        {/* Privacy */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm">

          <div className="p-6">

            <div className="flex items-start gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xl">
                🔒
              </div>

              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Privacy & Security
                </h2>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Your healthcare information is private and should
                  only be accessible to authorized users.
                </p>
              </div>

            </div>

            <div className="mt-6 space-y-3">

              <button
                type="button"
                className="flex w-full items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                <span>Change password</span>
                <span className="text-slate-400">→</span>
              </button>

              <button
                type="button"
                className="flex w-full items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                <span>Manage account privacy</span>
                <span className="text-slate-400">→</span>
              </button>

            </div>

          </div>

        </section>

        {/* Account */}
        <section className="mt-6 rounded-2xl border border-red-100 bg-white shadow-sm">

          <div className="p-6">

            <h2 className="text-lg font-semibold text-slate-900">
              Account
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Manage your VitoCare account.
            </p>

            <button
              type="button"
              className="mt-5 rounded-xl border border-red-200 px-5 py-3 text-sm font-semibold text-red-500 transition hover:bg-red-50"
            >
              Sign out
            </button>

          </div>

        </section>

        {/* Bottom message */}
        <div className="mt-8 rounded-2xl border border-teal-100 bg-teal-50 p-6">

          <div className="flex items-start gap-4">

            <div className="text-2xl">
              💚
            </div>

            <div>

              <h3 className="font-semibold text-teal-900">
                VitoCare is here for you
              </h3>

              <p className="mt-1 text-sm leading-6 text-teal-800">
                Keep your preferences updated so we can provide
                a better healthcare experience.
              </p>

            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default SettingsPage