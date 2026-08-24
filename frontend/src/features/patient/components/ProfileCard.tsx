import { useState } from 'react'
import { useProfile } from '../store/ProfileContext'
import ProfileForm from './ProfileForm'

function ProfileCard() {
  const { profile } = useProfile()

  const [editing, setEditing] = useState(false)

  if (editing) {
    return (
      <ProfileForm
        onCancel={() => setEditing(false)}
        onSaved={() => setEditing(false)}
      />
    )
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex items-center gap-5">

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-teal-100 text-2xl font-bold text-teal-700">
            {profile.name.charAt(0).toUpperCase()}
          </div>

          <div>

            <h2 className="text-2xl font-bold text-slate-900">
              {profile.name}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Patient
            </p>

            <p className="mt-2 text-sm text-teal-700">
              {profile.email}
            </p>

          </div>

        </div>

        <button
          type="button"
          onClick={() => setEditing(true)}
          className="rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
        >
          ✏️ Edit profile
        </button>

      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

        <div className="rounded-xl bg-slate-50 p-4">

          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
            Age
          </p>

          <p className="mt-1 font-semibold text-slate-800">
            {profile.age} years
          </p>

        </div>

        <div className="rounded-xl bg-slate-50 p-4">

          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
            Gender
          </p>

          <p className="mt-1 font-semibold text-slate-800">
            {profile.gender}
          </p>

        </div>

        <div className="rounded-xl bg-slate-50 p-4">

          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
            Blood group
          </p>

          <p className="mt-1 font-semibold text-slate-800">
            {profile.bloodGroup}
          </p>

        </div>

        <div className="rounded-xl bg-slate-50 p-4">

          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
            Phone
          </p>

          <p className="mt-1 font-semibold text-slate-800">
            {profile.phone}
          </p>

        </div>

        <div className="rounded-xl bg-slate-50 p-4">

          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
            Emergency contact
          </p>

          <p className="mt-1 font-semibold text-slate-800">
            {profile.emergencyContact}
          </p>

        </div>

        <div className="rounded-xl bg-slate-50 p-4">

          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
            Address
          </p>

          <p className="mt-1 font-semibold text-slate-800">
            {profile.address}
          </p>

        </div>

      </div>

      <div className="mt-5 rounded-xl bg-teal-50 p-5">

        <p className="text-xs font-medium uppercase tracking-wide text-teal-600">
          Health information
        </p>

        <p className="mt-2 text-sm text-slate-700">
          {profile.healthCondition}
        </p>

      </div>

    </div>
  )
}

export default ProfileCard