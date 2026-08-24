import { useState } from 'react'
import AuthInput from '../components/AuthInput'
import AuthLayout from '../components/AuthLayout'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    console.log('Login:', {
      email,
      password,
    })
  }

  return (
    <AuthLayout
      title="Welcome back"
      description="Sign in to continue managing your healthcare."
    >

      <form
        onSubmit={handleLogin}
        className="space-y-5"
      >

        <AuthInput
          label="Email address"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={setEmail}
        />

        <AuthInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={setPassword}
        />

        <div className="flex items-center justify-between text-sm">

          <label className="flex items-center gap-2 text-slate-600">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-slate-300 text-teal-700"
            />
            Remember me
          </label>

          <a
            href="#"
            className="font-semibold text-teal-700 hover:text-teal-800"
          >
            Forgot password?
          </a>

        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-teal-700 px-5 py-3.5 font-semibold text-white transition-all duration-200 hover:bg-teal-800 hover:shadow-lg"
        >
          Sign In
        </button>

      </form>

      <div className="my-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-slate-200" />
        <span className="text-xs text-slate-400">
          OR
        </span>
        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <p className="text-center text-sm text-slate-600">
        Don't have an account?{' '}

        <a
          href="/register"
          className="font-semibold text-teal-700 hover:text-teal-800"
        >
          Create one
        </a>
      </p>

    </AuthLayout>
  )
}

export default LoginPage