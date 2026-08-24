import Card from '../../components/ui/Card'

function FeaturesSection() {
  const features = [
    {
      icon: '💊',
      title: 'Medicine Reminders',
      description:
        'Help patients remember their medicines with simple reminders that continue working even when internet connectivity is limited.',
    },
    {
      icon: '📅',
      title: 'Appointment Tracking',
      description:
        'Keep healthcare appointments organized and help patients stay connected with doctors and hospitals.',
    },
    {
      icon: '👩‍⚕️',
      title: 'Volunteer Support',
      description:
        'Connect patients with community volunteers who can provide follow-ups and home-visit assistance.',
    },
    {
      icon: '🏥',
      title: 'Hospital Connectivity',
      description:
        'Connect patients, doctors, hospital assistants, and healthcare services through one platform.',
    },
    {
      icon: '📱',
      title: 'Offline-First',
      description:
        'Essential healthcare information remains accessible even when the user temporarily loses internet connectivity.',
    },
    {
      icon: '🤖',
      title: 'AI-Powered Assistance',
      description:
        'Use AI-powered features to help organize healthcare information and provide intelligent assistance.',
    },
  ]

  return (
    <section
      id="features"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">

          <span className="inline-flex rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700">
            VitoCare Features
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Healthcare support,
            <span className="block text-teal-700">
              designed around people.
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            VitoCare brings essential healthcare tools together in one
            simple platform for patients, healthcare professionals,
            hospitals, and communities.
          </p>

        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group border-slate-200 p-7 hover:-translate-y-1"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-2xl transition-transform duration-200 group-hover:scale-110">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {feature.description}
              </p>

              <div className="mt-5 text-sm font-semibold text-teal-700">
                Learn more →
              </div>

            </Card>
          ))}

        </div>

      </div>
    </section>
  )
}

export default FeaturesSection