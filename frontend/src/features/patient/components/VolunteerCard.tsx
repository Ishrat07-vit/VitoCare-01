import type { Volunteer } from '../types/volunteer'

interface VolunteerCardProps {
  volunteer: Volunteer
  onRequest: (volunteer: Volunteer) => void
}

function VolunteerCard({
  volunteer,
  onRequest,
}: VolunteerCardProps) {
  const isAvailable = volunteer.availability === 'Available'

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">

      {/* Volunteer header */}
      <div className="flex items-start justify-between gap-4">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-teal-100 text-lg font-bold text-teal-700">
            {volunteer.name
              .split(' ')
              .map((name) => name[0])
              .join('')
              .slice(0, 2)}
          </div>

          <div>

            <h3 className="font-semibold text-slate-900">
              {volunteer.name}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              📍 {volunteer.area}
            </p>

          </div>

        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            isAvailable
              ? 'bg-teal-50 text-teal-700'
              : 'bg-yellow-50 text-yellow-700'
          }`}
        >
          {volunteer.availability}
        </span>

      </div>

      {/* Volunteer details */}
      <div className="mt-6 grid grid-cols-2 gap-4">

        <div className="rounded-xl bg-slate-50 p-4">

          <p className="text-xs text-slate-500">
            Distance
          </p>

          <p className="mt-1 text-sm font-semibold text-slate-900">
            📍 {volunteer.distance}
          </p>

        </div>

        <div className="rounded-xl bg-slate-50 p-4">

          <p className="text-xs text-slate-500">
            Rating
          </p>

          <p className="mt-1 text-sm font-semibold text-slate-900">
            ⭐ {volunteer.rating.toFixed(1)}
          </p>

        </div>

      </div>

      {/* Skills */}
      <div className="mt-5">

        <p className="text-xs font-medium text-slate-500">
          Helps with
        </p>

        <div className="mt-2 flex flex-wrap gap-2">

          {volunteer.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg bg-teal-50 px-3 py-1.5 text-xs font-medium text-teal-700"
            >
              {skill}
            </span>
          ))}

        </div>

      </div>

      {/* Completed requests */}
      <div className="mt-5">

        <p className="text-xs text-slate-500">
          Completed assistance requests
        </p>

        <p className="mt-1 text-sm font-semibold text-slate-900">
          {volunteer.completedRequests} requests
        </p>

      </div>

      {/* Request button */}
      <div className="mt-6">

        <button
          type="button"
          disabled={!isAvailable}
          onClick={() => onRequest(volunteer)}
          className={`w-full rounded-xl px-5 py-3 text-sm font-semibold transition ${
            isAvailable
              ? 'bg-teal-600 text-white hover:bg-teal-700'
              : 'cursor-not-allowed bg-slate-100 text-slate-400'
          }`}
        >
          {isAvailable
            ? 'Request Assistance'
            : 'Currently Unavailable'}
        </button>

      </div>

    </div>
  )
}

export default VolunteerCard