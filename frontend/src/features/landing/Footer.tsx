function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">

      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">

            <h2 className="text-2xl font-bold text-teal-700">
              VitoCare
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
              A community-driven healthcare platform connecting
              patients, doctors, hospitals, and volunteers to make
              healthcare more accessible and reliable.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">

              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                Offline-first
              </span>

              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                Community-driven
              </span>

              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                Patient-focused
              </span>

            </div>

          </div>

          {/* Platform */}
          <div>

            <h3 className="text-sm font-semibold text-slate-900">
              Platform
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-600">

              <li>
                <a
                  href="#features"
                  className="transition-colors hover:text-teal-700"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="#how-it-works"
                  className="transition-colors hover:text-teal-700"
                >
                  How It Works
                </a>
              </li>

              <li>
                <a
                  href="#roles"
                  className="transition-colors hover:text-teal-700"
                >
                  Who We Help
                </a>
              </li>

            </ul>

          </div>

          {/* Access */}
          <div>

            <h3 className="text-sm font-semibold text-slate-900">
              Get Started
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-600">

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-teal-700"
                >
                  Login
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-teal-700"
                >
                  Create Account
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-teal-700"
                >
                  Contact Support
                </a>
              </li>

            </ul>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 VitoCare. Built for better healthcare access.
          </p>

          <p>
            Designed with care ❤️
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer