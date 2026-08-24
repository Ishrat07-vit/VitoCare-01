import PatientSidebar from '../components/PatientSidebar'
import PatientHeader from '../components/PatientHeader'

import MedicineSummary from '../components/MedicineSummary'
import AppointmentSummary from '../components/AppointmentSummary'
import HealthSummary from '../components/HealthSummary'
import RecentActivity from '../components/RecentActivity'

function PatientDashboard() {
  return (
    <div className="flex min-h-screen bg-slate-50">

      <PatientSidebar />

      <div className="flex min-w-0 flex-1 flex-col">

        <PatientHeader />

        <main className="flex-1 p-6 lg:p-8">

          <div className="mx-auto max-w-7xl">

            {/* Welcome */}

            <div>

              <p className="text-sm font-medium text-teal-700">
                Monday, August 24, 2026
              </p>

              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Good afternoon, Ishrat 👋
              </h1>

              <p className="mt-2 text-slate-600">
                Here's your healthcare overview for today.
              </p>

            </div>

            {/* Summary */}

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

              <MedicineSummary />

              <AppointmentSummary />

              <HealthSummary />

            </div>

            {/* Recent Activity */}

            <div className="mt-8">

              <RecentActivity />

            </div>

          </div>

        </main>

      </div>

    </div>
  )
}

export default PatientDashboard