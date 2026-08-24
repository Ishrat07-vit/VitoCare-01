import { useState } from 'react'

import PatientSidebar from '../components/PatientSidebar'
import PatientHeader from '../components/PatientHeader'

import AppointmentCard from '../components/AppointmentCard'
import AppointmentBooking from '../components/AppointmentBooking'
import AppointmentHistory from '../components/AppointmentHistory'

function AppointmentsPage() {
  const [showBooking, setShowBooking] = useState(false)

  return (
    <div className="flex min-h-screen bg-slate-50">

      <PatientSidebar />

      <div className="flex min-w-0 flex-1 flex-col">

        <PatientHeader />

        <main className="flex-1 p-6 lg:p-8">

          <div className="mx-auto max-w-6xl">

            {/* Heading */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

              <div>

                <p className="text-sm font-medium text-teal-700">
                  Healthcare visits
                </p>

                <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                  Appointments
                </h1>

                <p className="mt-2 text-slate-600">
                  Manage your upcoming and previous healthcare appointments.
                </p>

              </div>

              <button
                type="button"
                onClick={() => setShowBooking(!showBooking)}
                className="rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
              >
                {showBooking
                  ? 'Close booking'
                  : '+ Book appointment'}
              </button>

            </div>

            {/* Booking */}
            {showBooking && (
              <div className="mt-8">

                <AppointmentBooking />

              </div>
            )}

            {/* Upcoming */}
            <section className="mt-8">

              <div className="mb-5">

                <p className="text-sm font-medium text-teal-700">
                  Upcoming
                </p>

                <h2 className="mt-1 text-xl font-bold text-slate-900">
                  Your next appointment
                </h2>

              </div>

              <AppointmentCard
                doctor="Dr. Rajesh Kumar"
                specialty="General Physician"
                date="August 25, 2026"
                time="10:30 AM"
                location="VitoCare Community Clinic"
                status="Confirmed"
                upcoming
              />

            </section>

            {/* Empty divider / info */}
            <div className="my-10 border-t border-slate-200" />

            {/* History */}
            <AppointmentHistory />

          </div>

        </main>

      </div>

    </div>
  )
}

export default AppointmentsPage