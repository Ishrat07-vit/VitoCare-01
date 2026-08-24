import type { ReactNode } from 'react'

interface AuthLayoutProps {
  children: ReactNode
  title: string
  description: string
}

function AuthLayout({
  children,
  title,
  description,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Top brand */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center px-6 lg:px-8">
          <a
            href="/"
            className="text-2xl font-bold text-teal-700"
          >
            VitoCare
          </a>
        </div>
      </header>

      {/* Auth area */}
      <main className="flex min-h-[calc(100vh-5rem)] items-center justify-center px-6 py-12">

        <div className="w-full max-w-md">

          {/* Heading */}
          <div className="mb-8 text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-2xl">
              ❤️
            </div>

            <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900">
              {title}
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              {description}
            </p>

          </div>

          {/* Card */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            {children}
          </div>

          <p className="mt-6 text-center text-xs text-slate-500">
            Your healthcare information is handled with care.
          </p>

        </div>

      </main>

    </div>
  )
}

export default AuthLayout