import Button from '../../components/ui/Button'

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">

        {/* Left Content */}
        <div className="max-w-2xl">

          <div className="mb-6 inline-flex items-center rounded-full border border-teal-100 bg-teal-50 px-4 py-2">
            <span className="mr-2 h-2 w-2 rounded-full bg-teal-600" />

            <span className="text-sm font-medium text-teal-700">
              Healthcare support for every community
            </span>
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Better healthcare,
            <span className="block text-teal-700">
              closer to you.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            VitoCare connects patients, doctors, hospitals, and volunteers
            through a simple healthcare platform designed for rural and
            underserved communities.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button>
              Get Started
            </Button>

            <Button variant="outline">
              Learn How It Works
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm text-slate-500">
            <span>✓ Offline-first</span>
            <span>✓ Community-driven</span>
            <span>✓ Patient-focused</span>
          </div>

        </div>

        {/* Right Visual */}
        <div className="relative hidden lg:block">

          <div className="relative mx-auto h-[500px] max-w-md">

            {/* Main Card */}
            <div className="absolute left-10 top-10 w-80 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">
                    Today's Health
                  </p>

                  <h2 className="mt-1 text-2xl font-bold text-slate-900">
                    Good morning
                  </h2>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-xl">
                  ❤️
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-medium text-slate-500">
                  Medicine Reminder
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-900">
                      Morning Medicine
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      8:00 AM
                    </p>
                  </div>

                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Taken
                  </span>
                </div>
              </div>

              <div className="mt-4 rounded-2xl bg-teal-50 p-4">
                <p className="text-sm font-medium text-teal-700">
                  Next Appointment
                </p>

                <p className="mt-2 font-semibold text-slate-900">
                  Dr. Healthcare Specialist
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Tomorrow • 10:30 AM
                </p>
              </div>

            </div>

            {/* Floating Volunteer Card */}
            <div className="absolute -right-4 top-32 w-52 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg">

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100">
                  👩‍⚕️
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Volunteer Support
                  </p>

                  <p className="text-xs text-emerald-600">
                    Available
                  </p>
                </div>
              </div>

            </div>

            {/* Floating Offline Card */}
            <div className="absolute bottom-16 -left-4 w-56 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg">

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50">
                  📶
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Offline Ready
                  </p>

                  <p className="text-xs text-slate-500">
                    Data syncs when connected
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default HeroSection