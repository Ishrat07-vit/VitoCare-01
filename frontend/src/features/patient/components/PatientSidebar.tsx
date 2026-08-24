import { useLocation, useNavigate } from 'react-router-dom'

function PatientSidebar() {
  const navigate = useNavigate()
  const location = useLocation()

  const menuItems = [
    {
      icon: '⌂',
      label: 'Dashboard',
      path: '/dashboard',
    },
    {
      icon: '📅',
      label: 'Appointments',
      path: '/appointments',
    },
    {
      icon: '💊',
      label: 'Medicines',
      path: '/medicines',
    },
    {
      icon: '📋',
      label: 'Prescriptions',
      path: '/prescriptions',
    },
    {
      icon: '🤝',
      label: 'Volunteers',
      path: '/volunteers',
    },
    {
      icon: '👤',
      label: 'My Profile',
      path: '/profile',
    },
  ]

  return (
    <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white lg:flex lg:flex-col">

      {/* Logo */}
      <div className="flex h-20 items-center border-b border-slate-100 px-6">

        <button
          type="button"
          onClick={() => navigate('/dashboard')}
          className="text-left"
        >

          <h1 className="text-2xl font-bold text-teal-700">
            VitoCare
          </h1>

          <p className="text-xs text-slate-400">
            Patient Portal
          </p>

        </button>

      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4">

        {menuItems.map((item) => {

          const active = location.pathname === item.path

          return (
            <button
              key={item.path}
              type="button"
              onClick={() => navigate(item.path)}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                active
                  ? 'bg-teal-50 text-teal-700'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >

              <span
                className={`flex h-8 w-8 items-center justify-center rounded-lg text-base shadow-sm ${
                  active
                    ? 'bg-white'
                    : 'bg-white'
                }`}
              >
                {item.icon}
              </span>

              {item.label}

            </button>
          )
        })}

      </nav>

      {/* Bottom */}
      <div className="border-t border-slate-100 p-4">

        {/* Notifications */}
        <button
          type="button"
          onClick={() => navigate('/notifications')}
          className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
            location.pathname === '/notifications'
              ? 'bg-teal-50 text-teal-700'
              : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          <span>🔔</span>
          Notifications
        </button>

        {/* Settings */}
        <button
          type="button"
          onClick={() => navigate('/settings')}
          className={`mt-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
            location.pathname === '/settings'
              ? 'bg-teal-50 text-teal-700'
              : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          <span>⚙️</span>
          Settings
        </button>

        {/* Sign out */}
        <button
          type="button"
          className="mt-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-500 transition hover:bg-red-50"
        >
          <span>↪</span>
          Sign out
        </button>

      </div>

    </aside>
  )
}

export default PatientSidebar