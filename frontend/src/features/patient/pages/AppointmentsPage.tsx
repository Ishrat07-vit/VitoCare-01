import { useState } from 'react'

import PatientSidebar from '../components/PatientSidebar'
import PatientHeader from '../components/PatientHeader'
import AppointmentCard from '../components/AppointmentCard'

import type { Appointment } from '../types/appointment'

const appointments: Appointment[] = [
  {
    id: 1,
    doctorName: 'Dr. Anjali Rao',
    specialty: 'General Physician',
    hospital: 'Community Health Centre',
    date: 'August 25, 2026',
    time: '10:30 AM',
    type: 'General Consultation',
    status: 'Confirmed',
  },
  {
    id: 2,
    doctorName: 'Dr. Rahul Sharma',
    specialty: 'Cardiologist',
    hospital: 'VitoCare Partner Hospital',
    date: 'September 2, 2026',
    time: '11:00 AM',
    type: 'Follow-up',
    status: 'Pending',
  },
  {
    id: 3,
    doctorName: 'Dr. Priya Nair',
    specialty: 'General Physician',
    hospital: 'Rural Health Centre',
    date: 'July 18, 2026',
    time: '09:30 AM',
    type: 'General Consultation',
    status: 'Completed',
  },
]

function AppointmentsPage() {
  const [showBooking, setShowBooking] = useState(false)

  const upcomingAppointments = appointments.filter(
    (appointment) =>
      appointment.status === 'Confirmed' ||
      appointment.status === 'Pending',
  )

  const pastAppointments = appointments.filter(
    (appointment) =>
      appointment.status === 'Completed' ||
      appointment.status === 'Cancelled',
  )

  return (
    <div className="flex min-h-screen bg-slate-50">

      {/* Sidebar */}
      <PatientSidebar />

      {/* Main area */}
      <div className="flex min-w-0 flex-1 flex-col">

        {/* Header */}
        <PatientHeader />

        <main className="flex-1 p-6 lg:p-8">

          <div className="mx-auto max-w-7xl">

            {/* Page heading */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <p className="text-sm font-medium text-teal-700">
                  Patient Portal
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
                className="w-fit rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700"
              >
                + Book Appointment
              </button>

            </div>

            {/* Booking section */}
            {showBooking && (
              <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <div>
                  <h2 className="text-xl font-semibold text-slate-900">
                    Book an Appointment
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Choose a healthcare provider and preferred time.
                  </p>
                </div>

                <div className="mt-6 grid gap-5 md:grid-cols-2">

                  {/* Hospital */}
                  <div>
                    <label
                      htmlFor="hospital"
                      className="text-sm font-medium text-slate-700"
                    >
                      Hospital / Health Centre
                    </label>

                    <select
                      id="hospital"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-teal-500"
                    >
                      <option>
                        Select healthcare centre
                      </option>

                      <option>
                        Community Health Centre
                      </option>

                      <option>
                        Rural Health Centre
                      </option>

                      <option>
                        VitoCare Partner Hospital
                      </option>
                    </select>
                  </div>

                  {/* Doctor */}
                  <div>
                    <label
                      htmlFor="doctor"
                      className="text-sm font-medium text-slate-700"
                    >
                      Doctor
                    </label>

                    <select
                      id="doctor"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-teal-500"
                    >
                      <option>
                        Select doctor
                      </option>

                      <option>
                        Dr. Anjali Rao
                      </option>

                      <option>
                        Dr. Rahul Sharma
                      </option>

                      <option>
                        Dr. Priya Nair
                      </option>
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label
                      htmlFor="date"
                      className="text-sm font-medium text-slate-700"
                    >
                      Preferred Date
                    </label>

                    <input
                      id="date"
                      type="date"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-teal-500"
                    />
                  </div>

                  {/* Time */}
                  <div>
                    <label
                      htmlFor="time"
                      className="text-sm font-medium text-slate-700"
                    >
                      Preferred Time
                    </label>

                    <select
                      id="time"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-teal-500"
                    >
                      <option>
                        Select time
                      </option>

                      <option>
                        09:00 AM
                      </option>

                      <option>
                        10:30 AM
                      </option>

                      <option>
                        12:00 PM
                      </option>

                      <option>
                        02:30 PM
                      </option>

                      <option>
                        04:00 PM
                      </option>
                    </select>
                  </div>

                </div>

                {/* Reason */}
                <div className="mt-5">

                  <label
                    htmlFor="reason"
                    className="text-sm font-medium text-slate-700"
                  >
                    Reason for Visit
                  </label>

                  <textarea
                    id="reason"
                    rows={3}
                    placeholder="Briefly describe why you need an appointment..."
                    className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-teal-500"
                  />

                </div>

                {/* Booking buttons */}
                <div className="mt-6 flex flex-wrap gap-3">

                  <button
                    type="button"
                    className="rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
                  >
                    Confirm Booking
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowBooking(false)}
                    className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
                  >
                    Cancel
                  </button>

                </div>

              </section>
            )}

            {/* Upcoming */}
            <section className="mt-8">

              <div className="mb-5">
                <h2 className="text-xl font-semibold text-slate-900">
                  Upcoming Appointments
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Your scheduled healthcare visits.
                </p>
              </div>

              <div className="space-y-5">

                {upcomingAppointments.map((appointment) => (
                  <AppointmentCard
                    key={appointment.id}
                    appointment={appointment}
                    upcoming
                  />
                ))}

              </div>

            </section>

            {/* Past */}
            <section className="mt-10">

              <div className="mb-5">
                <h2 className="text-xl font-semibold text-slate-900">
                  Past Appointments
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Your previous healthcare visits.
                </p>
              </div>

              <div className="space-y-5">

                {pastAppointments.map((appointment) => (
                  <AppointmentCard
                    key={appointment.id}
                    appointment={appointment}
                  />
                ))}

              </div>

            </section>

          </div>

        </main>

      </div>

    </div>
  )
}

export default AppointmentsPage