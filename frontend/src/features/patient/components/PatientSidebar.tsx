import {
  CalendarDays,
  FileText,
  LayoutDashboard,
  LogOut,
  Pill,
  Settings,
  User,
  Users,
} from 'lucide-react'

import { NavLink } from 'react-router-dom'

const navigation = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: LayoutDashboard,
    end: true,
  },
  {
    name: 'Appointments',
    path: '/appointments',
    icon: CalendarDays,
  },
  {
    name: 'Medicines',
    path: '/medicines',
    icon: Pill,
  },
  {
    name: 'Prescriptions',
    path: '/prescriptions',
    icon: FileText,
  },
  {
    name: 'Volunteers',
    path: '/volunteers',
    icon: Users,
  },
  {
    name: 'Profile',
    path: '/profile',
    icon: User,
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: Settings,
  },
]

function PatientSidebar() {
  return (
    <aside className="flex min-h-[calc(100vh-4rem)] w-64 flex-col border-r bg-white">
      
      <nav className="flex-1 space-y-1 p-4">
        {navigation.map((item) => {
          const Icon = item.icon

          return (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`
              }
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          )
        })}
      </nav>

      <div className="border-t p-4">
        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>

    </aside>
  )
}

export default PatientSidebar