import { useAppointments } from '../store/AppointmentContext'

function AppointmentSummary() {
  const { appointments } = useAppointments()

  const nextAppointment = appointments.find(
    (appointment) => appointment.status === 'Confirmed'
  )

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm text-slate-500">
            Next appointment
          </p>

          {nextAppointment ? (
            <>
              <h3 className="mt-3 text-xl font-bold text-slate-900">
                {nextAppointment.date}
              </h3>

              <p className="mt-1 text-sm font-medium text-teal-700">
                {nextAppointment.time}
              </p>

              <p className="mt-3 text-sm font-semibold text-slate-800">
                {nextAppointment.doctor}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                {nextAppointment.specialty}
              </p>
            </>
          ) : (
            <>
              <h3 className="mt-3 text-xl font-bold text-slate-900">
                No appointment
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                You have no upcoming appointments.
              </p>
            </>
          )}

        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-2xl">
          📅
        </div>

      </div>

      {nextAppointment && (
        <div className="mt-5 border-t border-slate-100 pt-4">

          <p className="text-xs text-slate-400">
            Location
          </p>

          <p className="mt-1 text-sm text-slate-600">
            📍 {nextAppointment.location}
          </p>

        </div>
      )}

    </div>
  )
}

export default AppointmentSummary