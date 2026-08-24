function CTASection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-[2rem] bg-teal-700 px-8 py-16 text-center shadow-xl sm:px-12 md:py-20">

          {/* Decorative circles */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />

          <div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-white/10" />

          <div className="relative">

            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">
              Healthcare, made simpler
            </span>

            <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Better care starts with
              <span className="block">
                better connection.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-teal-50">
              Connect patients, doctors, hospitals, and volunteers
              through one healthcare platform designed for communities
              that need it most.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

              <button
                type="button"
                className="rounded-xl bg-white px-7 py-3.5 font-semibold text-teal-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Get Started
              </button>

              <button
                type="button"
                className="rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 font-semibold text-white transition-all duration-200 hover:bg-white/20"
              >
                Learn More
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default CTASection