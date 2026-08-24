import { useState } from 'react'
import { useVolunteers } from '../store/VolunteerContext'

function VolunteerRequestForm() {
  const { addRequest } = useVolunteers()

  const [type, setType] = useState('Hospital Visit Assistance')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('')

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    if (
      !description.trim() ||
      !date ||
      !location.trim()
    ) {
      return
    }

    addRequest({
      type,
      description,
      date,
      location,
    })

    setDescription('')
    setDate('')
    setLocation('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >

      <div className="mb-6">

        <h2 className="text-xl font-bold text-slate-900">
          Request volunteer assistance
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Tell us what kind of help you need and a community volunteer
          can assist you.
        </p>

      </div>

      <div className="grid gap-5 sm:grid-cols-2">

        <div>

          <label className="text-sm font-medium text-slate-700">
            Assistance type
          </label>

          <select
            value={type}
            onChange={(event) =>
              setType(event.target.value)
            }
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-teal-500"
          >
            <option>
              Hospital Visit Assistance
            </option>

            <option>
              Medicine Pickup
            </option>

            <option>
              Appointment Assistance
            </option>

            <option>
              Transportation Help
            </option>

            <option>
              General Healthcare Support
            </option>
          </select>

        </div>

        <div>

          <label className="text-sm font-medium text-slate-700">
            Preferred date
          </label>

          <input
            type="date"
            value={date}
            onChange={(event) =>
              setDate(event.target.value)
            }
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-500"
          />

        </div>

        <div className="sm:col-span-2">

          <label className="text-sm font-medium text-slate-700">
            Location
          </label>

          <input
            type="text"
            value={location}
            onChange={(event) =>
              setLocation(event.target.value)
            }
            placeholder="Enter hospital, pharmacy or pickup location"
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-500"
          />

        </div>

        <div className="sm:col-span-2">

          <label className="text-sm font-medium text-slate-700">
            What do you need help with?
          </label>

          <textarea
            value={description}
            onChange={(event) =>
              setDescription(event.target.value)
            }
            rows={4}
            placeholder="Describe your healthcare assistance requirement..."
            className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-500"
          />

        </div>

      </div>

      <button
        type="submit"
        className="mt-6 rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
      >
        🤝 Submit volunteer request
      </button>

    </form>
  )
}

export default VolunteerRequestForm