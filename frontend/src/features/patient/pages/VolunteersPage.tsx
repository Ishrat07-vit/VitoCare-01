import PatientSidebar from '../components/PatientSidebar'
import PatientHeader from '../components/PatientHeader'
import VolunteerCard from '../components/VolunteerCard'
import VolunteerRequestForm from '../components/VolunteerRequestForm'
import { useVolunteers } from '../store/VolunteerContext'

function VolunteersPage() {
  const { requests } = useVolunteers()

  const pending = requests.filter(
    (request) => request.status === 'Pending',
  )

  const accepted = requests.filter(
    (request) => request.status === 'Accepted',
  )

  const completed = requests.filter(
    (request) => request.status === 'Completed',
  )

  return (
    <div className="flex min-h-screen bg-slate-50">

      <PatientSidebar />

      <div className="flex min-w-0 flex-1 flex-col">

        <PatientHeader />

        <main className="flex-1 p-6 lg:p-8">

          <div className="mx-auto max-w-7xl">

            <div>

              <p className="text-sm font-medium text-teal-700">
                Community Healthcare
              </p>

              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Volunteer Support 🤝
              </h1>

              <p className="mt-2 max-w-2xl text-slate-600">
                Get assistance from trusted community volunteers for
                hospital visits, medicines, appointments and other
                healthcare needs.
              </p>

            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-4">

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                <p className="text-sm text-slate-500">
                  Total requests
                </p>

                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {requests.length}
                </p>

              </div>

              <div className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">

                <p className="text-sm text-slate-500">
                  Pending
                </p>

                <p className="mt-2 text-3xl font-bold text-amber-600">
                  {pending.length}
                </p>

              </div>

              <div className="rounded-2xl border border-teal-100 bg-white p-5 shadow-sm">

                <p className="text-sm text-slate-500">
                  Accepted
                </p>

                <p className="mt-2 text-3xl font-bold text-teal-700">
                  {accepted.length}
                </p>

              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                <p className="text-sm text-slate-500">
                  Completed
                </p>

                <p className="mt-2 text-3xl font-bold text-slate-700">
                  {completed.length}
                </p>

              </div>

            </div>

            <section className="mt-8">
              <VolunteerRequestForm />
            </section>

            <section className="mt-10">

              <div className="mb-5">

                <h2 className="text-xl font-bold text-slate-900">
                  Your volunteer requests
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Track the progress of your community assistance requests.
                </p>

              </div>

              {requests.length > 0 ? (
                <div className="grid gap-5">

                  {requests.map((request) => (
                    <VolunteerCard
                      key={request.id}
                      request={request}
                    />
                  ))}

                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">

                  <div className="text-4xl">
                    🤝
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    No volunteer requests
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Submit a request above whenever you need community
                    healthcare assistance.
                  </p>

                </div>
              )}

            </section>

          </div>

        </main>

      </div>

    </div>
  )
}

export default VolunteersPage