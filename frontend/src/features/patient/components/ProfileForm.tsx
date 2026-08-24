import { useState } from 'react'
import {
  useProfile,
  type PatientProfile,
} from '../store/ProfileContext'

interface ProfileFormProps {
  onCancel: () => void
  onSaved: () => void
}

function ProfileForm({
  onCancel,
  onSaved,
}: ProfileFormProps) {
  const { profile, updateProfile } = useProfile()

  const [form, setForm] =
    useState<PatientProfile>(profile)

  const handleChange = (
    field: keyof PatientProfile,
    value: string,
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }))
  }

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    updateProfile(form)

    onSaved()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >

      <div className="mb-7">

        <h2 className="text-xl font-bold text-slate-900">
          Edit your profile
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Keep your healthcare information up to date.
        </p>

      </div>

      <div className="grid gap-5 sm:grid-cols-2">

        <div>
          <label className="text-sm font-medium text-slate-700">
            Full name
          </label>

          <input
            type="text"
            value={form.name}
            onChange={(event) =>
              handleChange('name', event.target.value)
            }
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-500"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">
            Age
          </label>

          <input
            type="number"
            value={form.age}
            onChange={(event) =>
              handleChange('age', event.target.value)
            }
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-500"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">
            Gender
          </label>

          <select
            value={form.gender}
            onChange={(event) =>
              handleChange('gender', event.target.value)
            }
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-teal-500"
          >
            <option>Female</option>
            <option>Male</option>
            <option>Other</option>
            <option>Prefer not to say</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">
            Blood group
          </label>

          <select
            value={form.bloodGroup}
            onChange={(event) =>
              handleChange(
                'bloodGroup',
                event.target.value,
              )
            }
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-teal-500"
          >
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
            <option>Unknown</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">
            Phone number
          </label>

          <input
            type="tel"
            value={form.phone}
            onChange={(event) =>
              handleChange('phone', event.target.value)
            }
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-500"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">
            Email
          </label>

          <input
            type="email"
            value={form.email}
            onChange={(event) =>
              handleChange('email', event.target.value)
            }
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-500"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">
            Emergency contact
          </label>

          <input
            type="tel"
            value={form.emergencyContact}
            onChange={(event) =>
              handleChange(
                'emergencyContact',
                event.target.value,
              )
            }
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-500"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">
            Address
          </label>

          <input
            type="text"
            value={form.address}
            onChange={(event) =>
              handleChange('address', event.target.value)
            }
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-500"
          />
        </div>

        <div className="sm:col-span-2">

          <label className="text-sm font-medium text-slate-700">
            Health information
          </label>

          <textarea
            value={form.healthCondition}
            onChange={(event) =>
              handleChange(
                'healthCondition',
                event.target.value,
              )
            }
            rows={4}
            placeholder="Mention any important health information..."
            className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-500"
          />

        </div>

      </div>

      <div className="mt-7 flex flex-wrap gap-3 border-t border-slate-100 pt-6">

        <button
          type="submit"
          className="rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
        >
          ✓ Save changes
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
        >
          Cancel
        </button>

      </div>

    </form>
  )
}

export default ProfileForm