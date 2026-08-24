function UserRolesSection() {
  const roles = [
    {
      icon: '🧑‍🦽',
      title: 'Patients',
      description:
        'Manage healthcare information, medicines, prescriptions, appointments, and stay connected with your care team.',
      points: [
        'Health profile',
        'Medicine reminders',
        'Appointments',
      ],
    },
    {
      icon: '👨‍⚕️',
      title: 'Doctors',
      description:
        'Access relevant patient information, manage appointments, create diagnoses, and provide prescriptions.',
      points: [
        'Patient management',
        'Clinical information',
        'Prescriptions',
      ],
    },
    {
      icon: '🏥',
      title: 'Hospital Assistants',
      description:
        'Support hospital operations by registering patients, managing records, prescriptions, and appointments.',
      points: [
        'Patient registration',
        'Record management',
        'Appointment support',
      ],
    },
    {
      icon: '🤝',
      title: 'Volunteers',
      description:
        'Support assigned patients through home visits, follow-ups, healthcare assistance, and emergency reporting.',
      points: [
        'Home visits',
        'Patient follow-ups',
        'Emergency reporting',
      ],
    },
  ]

  return (
    <section
      id="roles"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700">
            One Platform. Everyone Connected.
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Healthcare works better
            <span className="block text-teal-700">
              when everyone is connected.
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            VitoCare creates a connected healthcare ecosystem where
            every person has a clear role in supporting better care.
          </p>

        </div>

        {/* Role cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {roles.map((role) => (
            <div
              key={role.title}
              className="group rounded-3xl border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-teal-200 hover:bg-white hover:shadow-xl"
            >

              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-3xl transition-transform duration-300 group-hover:scale-110">
                {role.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {role.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {role.description}
              </p>

              {/* Points */}
              <div className="mt-6 space-y-3">

                {role.points.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-2 text-sm text-slate-700"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-700">
                      ✓
                    </span>

                    {point}
                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

        {/* Bottom statement */}
        <div className="mt-16 text-center">

          <p className="text-sm font-medium text-slate-500">
            Patients • Doctors • Hospitals • Volunteers
          </p>

          <p className="mt-2 text-xl font-semibold text-slate-900">
            One connected healthcare ecosystem.
          </p>

        </div>

      </div>
    </section>
  )
}

export default UserRolesSection