import { useState } from 'react'
import AuthInput from '../components/AuthInput'
import AuthLayout from '../components/AuthLayout'

function RegisterPage() {
  const [role, setRole] = useState('patient')

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()

    console.log('Selected role:', role)
  }

  return (
    <AuthLayout
      title="Create your account"
      description="Join VitoCare and become part of a connected healthcare community."
    >

      <form
        onSubmit={handleRegister}
        className="space-y-5"
      >

        <AuthInput
          label="Full name"
          placeholder="Enter your full name"
        />

        <AuthInput
          label="Email address"
          type="email"
          placeholder="you@example.com"
        />

        <AuthInput
          label="Phone number"
          type="tel"
          placeholder="+91 XXXXX XXXXX"
        />

        {/* Role */}
        <div className="space-y-2">

          <label className="text-sm font-semibold text-slate-800">
            I am a
          </label>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition-all focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
          >
            <option value="patient">
              Patient
            </option>

            <option value="doctor">
              Doctor
            </option>

            <option value="hospital-assistant">
              Hospital Assistant
            </option>

            <option value="volunteer">
              Volunteer
            </option>
          </select>

        </div>

        <AuthInput
          label="Password"
          type="password"
          placeholder="Create a strong password"
        />

        <AuthInput
          label="Confirm password"
          type="password"
          placeholder="Confirm your password"
        />

        <label className="flex gap-3 text-sm text-slate-600">

          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-700"
          />

          <span>
            I agree to VitoCare's terms and privacy policy.
          </span>

        </label>

        <button
          type="submit"
          className="w-full rounded-xl bg-teal-700 px-5 py-3.5 font-semibold text-white transition-all duration-200 hover:bg-teal-800 hover:shadow-lg"
        >
          Create Account
        </button>

      </form>

      <p className="mt-6 text-center text-sm text-slate-600">
        Already have an account?{' '}

        <a
          href="/login"
          className="font-semibold text-teal-700 hover:text-teal-800"
        >
          Sign in
        </a>
      </p>

    </AuthLayout>
  )
}

export default RegisterPage