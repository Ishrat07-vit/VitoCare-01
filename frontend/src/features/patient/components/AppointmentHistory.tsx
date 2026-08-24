import AppointmentCard from './AppointmentCard'

function AppointmentHistory() {
  return (
    <section>

      <div className="mb-5">

        <p className="text-sm font-medium text-slate-500">
          Your records
        </p>

        <h2 className="mt-1 text-xl font-bold text-slate-900">
          Past appointments
        </h2>

      </div>

      <div className="space-y-4">

        <AppointmentCard
          doctor="Dr. Priya Sharma"
          specialty="Family Medicine"
          date="August 18, 2026"
          time="11:00 AM"
          location="VitoCare Community Clinic"
          status="Completed"
        />

        <AppointmentCard
          doctor="Dr. Ahmed Khan"
          specialty="Internal Medicine"
          date="August 05, 2026"
          time="02:30 PM"
          location="Rural Health Centre"
          status="Completed"
        />

      </div>

    </section>
  )
}

export default AppointmentHistory