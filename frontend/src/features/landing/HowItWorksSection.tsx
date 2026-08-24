function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Create your profile',
      description:
        'Patients can create a healthcare profile containing essential information such as contact details, health information, emergency contacts, and assigned healthcare providers.',
      icon: '👤',
    },
    {
      number: '02',
      title: 'Connect with healthcare',
      description:
        'Doctors, hospitals, and healthcare assistants can manage patient information, prescriptions, appointments, and healthcare activities.',
      icon: '🏥',
    },
    {
      number: '03',
      title: 'Stay on track',
      description:
        'Patients receive medicine reminders, appointment updates, and ongoing healthcare support even when connectivity is limited.',
      icon: '💊',
    },
    {
      number: '04',
      title: 'Get community support',
      description:
        'Volunteers can assist assigned patients, perform follow-ups, record home visits, and report emergencies when necessary.',
      icon: '🤝',
    },
  ]

  return (
    <section
      id="how-it-works"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">

          <span className="inline-flex rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700">
            How It Works
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Healthcare support,
            <span className="block text-teal-700">
              from connection to care.
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            VitoCare brings patients, healthcare professionals, hospitals,
            and volunteers together through one connected ecosystem.
          </p>

        </div>

        {/* Steps */}
        <div className="relative mt-20">

          {/* Connecting line */}
          <div className="absolute left-1/2 top-16 hidden h-px w-3/4 -translate-x-1/2 bg-slate-200 lg:block" />

          <div className="relative grid gap-12 md:grid-cols-2 lg:grid-cols-4">

            {steps.map((step) => (
              <div
                key={step.number}
                className="relative text-center"
              >

                {/* Icon */}
                <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-slate-200 bg-white text-3xl shadow-sm">
                  {step.icon}

                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-teal-700 text-xs font-bold text-white">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-semibold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* Bottom message */}
        <div className="mt-20 rounded-3xl border border-teal-100 bg-white p-8 text-center shadow-sm md:p-12">

          <div className="mx-auto max-w-3xl">

            <p className="text-2xl font-semibold leading-relaxed text-slate-900 md:text-3xl">
              Healthcare shouldn't stop because
              <span className="text-teal-700">
                {' '}the internet does.
              </span>
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              VitoCare is designed with an offline-first approach so
              essential healthcare information can remain available
              when connectivity is unreliable.
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}

export default HowItWorksSection