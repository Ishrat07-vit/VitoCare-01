import PatientSidebar from '../components/PatientSidebar'
import PatientHeader from '../components/PatientHeader'
import ProfileCard from '../components/ProfileCard'
import { useProfile } from '../store/ProfileContext'

function ProfilePage() {
  const { profile } = useProfile()

  return (
    <div className="flex min-h-screen bg-slate-50">

      <PatientSidebar />

      <div className="flex min-w-0 flex-1 flex-col">

        <PatientHeader />

        <main className="flex-1 p-6 lg:p-8">

          <div className="mx-auto max-w-7xl">

            {/* Page Header */}
            <div>

              <p className="text-sm font-medium text-teal-700">
                Patient Portal
              </p>

              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                My Profile 👤
              </h1>

              <p className="mt-2 text-slate-600">
                Manage your personal and healthcare information.
              </p>

            </div>

            {/* Profile Summary */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {/* Name */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                <p className="text-sm text-slate-500">
                  Patient
                </p>

                <p className="mt-2 text-xl font-bold text-slate-900">
                  {profile.name}
                </p>

              </div>

              {/* Age */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                <p className="text-sm text-slate-500">
                  Age
                </p>

                <p className="mt-2 text-xl font-bold text-slate-900">
                  {profile.age} years
                </p>

              </div>

              {/* Blood Group */}
              <div className="rounded-2xl border border-teal-100 bg-white p-5 shadow-sm">

                <p className="text-sm text-slate-500">
                  Blood group
                </p>

                <p className="mt-2 text-xl font-bold text-teal-700">
                  O+
                </p>

              </div>

              {/* Email */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                <p className="text-sm text-slate-500">
                  Email
                </p>

                <p className="mt-2 break-all text-sm font-semibold text-slate-900">
                  ishratshaik007@gmail.com
                </p>

              </div>

            </div>

            {/* Detailed Profile */}
            <section className="mt-8">

              <ProfileCard />

            </section>

            {/* Privacy / Security Information */}
            <div className="mt-6 rounded-2xl border border-teal-100 bg-teal-50 p-5">

              <div className="flex items-start gap-4">

                <div className="text-2xl">
                  🔒
                </div>

                <div>

                  <h3 className="font-semibold text-slate-900">
                    Your information matters
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Keep your emergency contact and healthcare information
                    updated so VitoCare can provide better assistance when
                    you need it.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </main>

      </div>

    </div>
  )
}

export default ProfilePage