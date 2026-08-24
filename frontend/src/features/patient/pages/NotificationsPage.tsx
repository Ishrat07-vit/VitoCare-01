import PatientSidebar from '../components/PatientSidebar'
import PatientHeader from '../components/PatientHeader'

function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      icon: '💊',
      title: 'Medicine reminder',
      message: 'It is time to take your prescribed medicine.',
      time: '10 minutes ago',
      unread: true,
    },
    {
      id: 2,
      icon: '📅',
      title: 'Upcoming appointment',
      message: 'You have an appointment scheduled for tomorrow at 10:30 AM.',
      time: '1 hour ago',
      unread: true,
    },
    {
      id: 3,
      icon: '🩺',
      title: 'Health check reminder',
      message: 'Remember to keep your health information updated.',
      time: 'Yesterday',
      unread: false,
    },
    {
      id: 4,
      icon: '🤝',
      title: 'Volunteer assistance',
      message: 'A volunteer is available to assist you if needed.',
      time: 'Yesterday',
      unread: false,
    },
  ]

  return (
    <div className="flex min-h-screen bg-slate-50">

      <PatientSidebar />

      <div className="flex min-w-0 flex-1 flex-col">

        <PatientHeader />

        <main className="flex-1 p-6 lg:p-8">

          <div className="mx-auto max-w-5xl">

            {/* Page Header */}
            <div>

              <p className="text-sm font-medium text-teal-700">
                Patient Portal
              </p>

              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Notifications 🔔
              </h1>

              <p className="mt-2 text-slate-600">
                Stay updated with your medicines, appointments, and healthcare activities.
              </p>

            </div>

            {/* Notification Summary */}
            <div className="mt-8 grid gap-5 sm:grid-cols-3">

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                <p className="text-sm text-slate-500">
                  Total notifications
                </p>

                <p className="mt-2 text-2xl font-bold text-slate-900">
                  {notifications.length}
                </p>

              </div>

              <div className="rounded-2xl border border-teal-100 bg-white p-5 shadow-sm">

                <p className="text-sm text-slate-500">
                  Unread
                </p>

                <p className="mt-2 text-2xl font-bold text-teal-700">
                  {notifications.filter(
                    (notification) => notification.unread
                  ).length}
                </p>

              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                <p className="text-sm text-slate-500">
                  Status
                </p>

                <p className="mt-2 text-2xl font-bold text-slate-900">
                  Up to date
                </p>

              </div>

            </div>

            {/* Notifications */}
            <section className="mt-8">

              <div className="flex items-center justify-between">

                <div>

                  <h2 className="text-xl font-bold text-slate-900">
                    Recent notifications
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Your latest healthcare updates.
                  </p>

                </div>

                <button
                  type="button"
                  className="rounded-xl px-4 py-2 text-sm font-medium text-teal-700 transition hover:bg-teal-50"
                >
                  Mark all as read
                </button>

              </div>

              <div className="mt-5 space-y-4">

                {notifications.map((notification) => (

                  <div
                    key={notification.id}
                    className={`flex items-start gap-4 rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md ${
                      notification.unread
                        ? 'border-teal-100'
                        : 'border-slate-200'
                    }`}
                  >

                    {/* Icon */}
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xl ${
                        notification.unread
                          ? 'bg-teal-50'
                          : 'bg-slate-50'
                      }`}
                    >
                      {notification.icon}
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">

                      <div className="flex flex-wrap items-center gap-2">

                        <h3 className="font-semibold text-slate-900">
                          {notification.title}
                        </h3>

                        {notification.unread && (
                          <span className="h-2 w-2 rounded-full bg-teal-600" />
                        )}

                      </div>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {notification.message}
                      </p>

                      <p className="mt-2 text-xs text-slate-400">
                        {notification.time}
                      </p>

                    </div>

                    {/* Action */}
                    <button
                      type="button"
                      className="shrink-0 rounded-lg px-3 py-2 text-xs font-medium text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
                    >
                      View
                    </button>

                  </div>

                ))}

              </div>

            </section>

            {/* Information Card */}
            <div className="mt-8 rounded-2xl border border-teal-100 bg-teal-50 p-5">

              <div className="flex items-start gap-4">

                <div className="text-2xl">
                  🔔
                </div>

                <div>

                  <h3 className="font-semibold text-slate-900">
                    Never miss an important update
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    VitoCare keeps you informed about medicine reminders,
                    appointments, health updates, and volunteer assistance.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </main>

      </div>

    </div>
  )
}

export default NotificationsPage