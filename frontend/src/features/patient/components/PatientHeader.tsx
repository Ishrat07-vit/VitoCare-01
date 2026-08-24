import { useLocation, useNavigate } from 'react-router-dom'

function PatientHeader() {
  const navigate = useNavigate()
  const location = useLocation()

  const isNotificationsPage =
    location.pathname === '/notifications'

  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-6 lg:px-8">

      {/* Page title */}
      <div>

        <p className="text-sm text-slate-500">
          Patient Dashboard
        </p>

      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">

        {/* Notification */}
        <button
          type="button"
          onClick={() => navigate('/notifications')}
          aria-label="Open notifications"
          className={`relative flex h-10 w-10 items-center justify-center rounded-xl border text-lg transition ${
            isNotificationsPage
              ? 'border-teal-200 bg-teal-50'
              : 'border-slate-200 hover:bg-slate-50'
          }`}
        >

          🔔

          {/* Notification badge */}
          {!isNotificationsPage && (
            <span className="absolute right-1.5 top-1.5 flex h-2.5 w-2.5 rounded-full bg-teal-600 ring-2 ring-white" />
          )}

        </button>

        {/* Profile */}
        <button
          type="button"
          onClick={() => navigate('/profile')}
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