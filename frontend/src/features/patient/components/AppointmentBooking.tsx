import { useState } from 'react'
import { useAppointments } from '../store/AppointmentContext'

function AppointmentBooking() {
  const { addAppointment } = useAppointments()

  const [doctor, setDoctor] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [reason, setReason] = useState('')

  const [success, setSuccess] = useState(false)

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    const selectedDoctor =
      doctor === 'Dr. Rajesh Kumar'
        ? {
            specialty: 'General Physician',
            location: 'VitoCare Community Clinic',
          }
        : doctor === 'Dr. Priya Sharma'
          ? {
              specialty: 'Family Medicine',
              location: 'VitoCare Community Clinic',
            }
          : {
              specialty: 'Internal Medicine',
              location: 'Rural Health Centre',
            }

    const formattedDate = new Date(date).toLocaleDateString(
      'en-US',
      {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }
    )

    addAppointment({
      doctor,
      specialty: selectedDoctor.specialty,
      date: formattedDate,
      time,
      location: selectedDoctor.location,
      reason,
    })

    setDoctor('')
    setDate('')
    setTime('')
    setReason('')
    setSuccess(true)

    setTimeout(() => {
      setSuccess(false)
    }, 4000)
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6">

        <p className="text-sm font-medium text-teal-700">
          New appointment
        </p>

        <h2 className="mt-1 text-xl font-bold text-slate-900">
          Book an appointment
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Choose a doctor and a convenient time for your consultation.
        </p>

      </div>

      {success && (
        <div className="mb-6 rounded-xl border border-teal-200 bg-teal-50 p-4">

          <p className="font-semibold text-teal-800">
            Appointment booked successfully! 🎉
          </p>

          <p className="mt-1 text-sm text-teal-700">
            Your appointment has been added to your upcoming appointments.
          </p>

        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        {/* Doctor */}

        <div>

          <label
            htmlFor="doctor"
            className="text-sm font-medium text-slate-700"
          >
            Select doctor
          </label>

          <select
            id="doctor"
            value={doctor}
            onChange={(event) =>
              setDoctor(event.target.value)
            }
            required
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
          >

            <option value="">
              Choose a doctor
            </option>

            <option value="Dr. Rajesh Kumar">
              Dr. Rajesh Kumar · General Physician
            </option>

            <option value="Dr. Priya Sharma">
              Dr. Priya Sharma · Family Medicine
            </option>

            <option value="Dr. Ahmed Khan">
              Dr. Ahmed Khan · Internal Medicine
            </option>

          </select>

        </div>

        {/* Date */}

        <div>

          <label
            htmlFor="appointment-date"
            className="text-sm font-medium text-slate-700"
          >
            Date
          </label>

          <input
            id="appointment-date"
            type="date"
            value={date}
            onChange={(event) =>
              setDate(event.target.value)
            }
            required
            min="2026-08-24"
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
          />

        </div>

        {/* Time */}

        <div>

          <label
            htmlFor="appointment-time"
            className="text-sm font-medium text-slate-700"
          >
            Preferred time
          </label>

          <select
            id="appointment-time"
            value={time}
            onChange={(event) =>
              setTime(event.target.value)
            }
            required
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
          >

            <option value="">
              Choose a time
            </option>

            <option value="09:00 AM">
              09:00 AM
            </option>

            <option value="10:30 AM">
              10:30 AM
            </option>

            <option value="12:00 PM">
              12:00 PM
            </option>

            <option value="02:30 PM">
              02:30 PM
            </option>

            <option value="04:00 PM">
              04:00 PM
            </option>

          </select>

        </div>

        {/* Reason */}

        <div>

          <label
            htmlFor="reason"
            className="text-sm font-medium text-slate-700"
          >
            Reason for visit
          </label>

          <textarea
            id="reason"
            value={reason}
            onChange={(event) =>
              setReason(event.target.value)
            }
            rows={4}
            placeholder="Briefly describe your reason for consultation..."
            className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
          />

        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-teal-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
        >
          Confirm appointment
        </button>

      </form>

    </section>
  )
}

export default AppointmentBooking