import type { Appointment } from '../types/appointment'

interface AppointmentCardProps {
  appointment: Appointment
  upcoming?: boolean
}

function AppointmentCard({
  appointment,
  upcoming = false,
}: AppointmentCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">

      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

        {/* Doctor information */}
        <div className="flex items-start gap-4">

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-2xl">
            🩺
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              {appointment.doctorName}
            </h3>

            <p className="mt-1 text-sm text-teal-700">
              {appointment.specialty}
            </p>

            <p className="mt-2 text-sm text-slate-500">
              {appointment.hospital}
            </p>
          </div>

        </div>

        {/* Status */}
        <span
          className={`w-fit rounded-full px-3 py-1 text-xs font-medium ${
            appointment.status === 'Confirmed'
              ? 'bg-teal-50 text-teal-700'
              : appointment.status === 'Pending'
                ? 'bg-yellow-50 text-yellow-700'
                : appointment.status === 'Completed'
                  ? 'bg-green-50 text-green-700'
                  : 'bg-red-50 text-red-700'
          }`}
        >
          {appointment.status}
        </span>

      </div>

      {/* Appointment details */}
      <div className="mt-6 grid gap-4 rounded-xl bg-slate-50 p-4 sm:grid-cols-3">

        <div>
          <p className="text-xs text-slate-500">
            Date
          </p>

          <p className="mt-1 text-sm font-medium text-slate-900">
            📅 {appointment.date}
          </p>
        </div>

        <div>
          <p className="text-xs text-slate-500">
            Time
          </p>

          <p className="mt-1 text-sm font-medium text-slate-900">
            🕐 {appointment.time}
          </p>
        </div>

        <div>
          <p className="text-xs text-slate-500">
            Visit type
          </p>

          <p className="mt-1 text-sm font-medium text-slate-900">
            {appointment.type}
          </p>
        </div>

      </div>

      {/* Actions */}
      <div className="mt-5 flex flex-wrap gap-3">

        {upcoming && appointment.status !== 'Cancelled' && (
          <>
            <button
              type="button"
              className="rounded-xl bg-teal-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-teal-700"
            >
              View Details
            </button>

            <button
              type="button"
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
            >
              Reschedule
            </button>

            <button
              type="button"
              className="rounded-xl border border-red-200 px-4 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50"
            >
              Cancel
            </button>
          </>
        )}

        {!upcoming && (
          <button
            type="button"
            className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
          >
            View Details
          </button>
        )}

      </div>

    </div>
  )
}

export default AppointmentCard