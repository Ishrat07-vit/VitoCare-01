function RecentActivity() {
  const activities = [
    {
      icon: '💊',
      title: 'Medicine taken',
      description: 'Paracetamol 500 mg was marked as taken.',
      time: 'Today · 09:05 AM',
    },
    {
      icon: '📅',
      title: 'Appointment scheduled',
      description: 'Appointment with Dr. Rajesh Kumar confirmed.',
      time: 'Yesterday · 04:20 PM',
    },
    {
      icon: '📋',
      title: 'Prescription updated',
      description: 'A new prescription was added to your records.',
      time: 'Yesterday · 02:15 PM',
    },
  ]

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm font-medium text-teal-700">
            Activity
          </p>

          <h2 className="mt-1 text-xl font-bold text-slate-900">
            Recent activity
          </h2>
        </div>

        <span className="text-sm text-slate-400">
          Latest
        </span>

      </div>

      <div className="mt-6 space-y-5">

        {activities.map((activity, index) => (

          <div
            key={`${activity.title}-${index}`}
            className="flex gap-4"
          >

            <div className="relative">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 text-lg">
                {activity.icon}
              </div>

              {index !== activities.length - 1 && (
                <div className="absolute left-1/2 top-12 h-8 w-px -translate-x-1/2 bg-slate-200" />
              )}

            </div>

            <div className="min-w-0">

              <p className="text-sm font-semibold text-slate-900">
                {activity.title}
              </p>

              <p className="mt-1 text-sm leading-5 text-slate-500">
                {activity.description}
              </p>

              <p className="mt-1 text-xs text-slate-400">
                {activity.time}
              </p>

            </div>

          </div>

        ))}

      </div>

      <button
        type="button"
        className="mt-6 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
      >
        View all activity →
      </button>

    </section>
  )
}

export default RecentActivity