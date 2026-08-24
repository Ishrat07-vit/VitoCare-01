import { useAppointments } from '../store/AppointmentContext'

interface AppointmentCardProps {
  id?: number
  doctor: string
  specialty: string
  date: string
  time: string
  location: string
  status: 'Confirmed' | 'Completed' | 'Cancelled'
  upcoming?: boolean
}

function AppointmentCard({
  id,
  doctor,
  specialty,
  date,
  time,
  location,
  status,
  upcoming = false,
}: AppointmentCardProps) {

  const { cancelAppointment } = useAppointments()

  const handleCancel = () => {
    if (!id) return

    const confirmed = window.confirm(
      'Are you sure you want to cancel this appointment?'
    )

    if (confirmed) {
      cancelAppointment(id)
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

        <div className="flex items-start gap-4">

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-teal-100 text-2xl">
            👨‍⚕️
          </div>

          <div>

            <h3 className="font-semibold text-slate-900">
              {doctor}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {specialty}
            </p>

            <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-600">

              <span>
                📅 {date}
              </span>

              <span>
                🕐 {time}
              </span>

            </div>

            <p className="mt-2 text-sm text-slate-500">
              📍 {location}
            </p>

          </div>

        </div>

        <span
          className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${
            status === 'Confirmed'
              ? 'bg-teal-50 text-teal-700'
              : status === 'Completed'
                ? 'bg-slate-100 text-slate-600'
                : 'bg-red-50 text-red-600'
          }`}
        >
          {status}
        </span>

      </div>

      {upcoming && status === 'Confirmed' && (
        <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row">

          <button
            type="button"
            className="rounded-xl bg-teal-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
          >
            View appointment
          </button>

          <button
            type="button"
            onClick={handleCancel}
            className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Cancel appointment
          </button>

        </div>
      )}

    </div>
  )
}

export default AppointmentCard