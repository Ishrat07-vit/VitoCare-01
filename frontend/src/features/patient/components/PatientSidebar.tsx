function PatientSidebar() {
  const menuItems = [
    { icon: '⌂', label: 'Dashboard', active: true },
    { icon: '📅', label: 'Appointments' },
    { icon: '💊', label: 'Medicines' },
    { icon: '📋', label: 'Prescriptions' },
    { icon: '🤝', label: 'Volunteers' },
    { icon: '👤', label: 'My Profile' },
  ]

  return (
    <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white lg:flex lg:flex-col">

      {/* Logo */}
      <div className="flex h-20 items-center border-b border-slate-100 px-6">
        <div>
          <h1 className="text-2xl font-bold text-teal-700">
            VitoCare
          </h1>

          <p className="text-xs text-slate-400">
            Patient Portal
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4">

        {menuItems.map((item) => (
          <button
            key={item.label}
            type="button"
            className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
              item.active
                ? 'bg-teal-50 text-teal-700'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-base shadow-sm">
              {item.icon}
            </span>

            {item.label}
          </button>
        ))}

      </nav>

      {/* Bottom */}
      <div className="border-t border-slate-100 p-4">

        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
        >
          <span>⚙️</span>
          Settings
        </button>

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