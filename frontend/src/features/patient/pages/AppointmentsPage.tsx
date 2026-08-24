import { useState } from 'react'

import PatientSidebar from '../components/PatientSidebar'
import PatientHeader from '../components/PatientHeader'

import AppointmentCard from '../components/AppointmentCard'
import AppointmentBooking from '../components/AppointmentBooking'

import { useAppointments } from '../store/AppointmentContext'

function AppointmentsPage() {

  const [showBooking, setShowBooking] = useState(false)

  const { appointments } = useAppointments()

  const upcomingAppointments = appointments.filter(
    (appointment) =>
      appointment.status === 'Confirmed'
  )

  const pastAppointments = appointments.filter(
    (appointment) =>
      appointment.status !== 'Confirmed'
  )

  return (
    <div className="flex min-h-screen bg-slate-50">

      <PatientSidebar />

      <div className="flex min-w-0 flex-1 flex-col">

        <PatientHeader />

        <main className="flex-1 p-6 lg:p-8">

          <div className="mx-auto max-w-6xl">

            {/* Header */}

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
                onClick={() =>
                  setShowBooking(!showBooking)
                }
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
                  Your appointments
                </h2>

              </div>

              {upcomingAppointments.length > 0 ? (

                <div className="space-y-4">

                  {upcomingAppointments.map(
                    (appointment) => (

                      <AppointmentCard
                        key={appointment.id}
                        id={appointment.id}
                        doctor={appointment.doctor}
                        specialty={appointment.specialty}
                        date={appointment.date}
                        time={appointment.time}
                        location={appointment.location}
                        status={appointment.status}
                        upcoming
                      />

                    )
                  )}

                </div>

              ) : (

                <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">

                  <div className="text-4xl">
                    📅
                  </div>

                  <h3 className="mt-4 font-semibold text-slate-900">
                    No upcoming appointments
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Book an appointment when you need medical care.
                  </p>

                </div>

              )}

            </section>

            {/* Divider */}

            <div className="my-10 border-t border-slate-200" />

            {/* History */}

            <section>

              <div className="mb-5">

                <p className="text-sm font-medium text-slate-500">
                  Your records
                </p>

                <h2 className="mt-1 text-xl font-bold text-slate-900">
                  Appointment history
                </h2>

              </div>

              {pastAppointments.length > 0 ? (

                <div className="space-y-4">

                  {pastAppointments.map(
                    (appointment) => (

                      <AppointmentCard
                        key={appointment.id}
                        id={appointment.id}
                        doctor={appointment.doctor}
                        specialty={appointment.specialty}
                        date={appointment.date}
                        time={appointment.time}
                        location={appointment.location}
                        status={appointment.status}
                      />

                    )
                  )}

                </div>

              ) : (

                <div className="rounded-2xl bg-white p-8 text-center text-sm text-slate-500">
                  No previous appointments.
                </div>

              )}

            </section>

          </div>

        </main>

      </div>

    </div>
  )
}

export default AppointmentsPage