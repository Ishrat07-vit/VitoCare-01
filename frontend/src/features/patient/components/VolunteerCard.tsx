import {
  useVolunteers,
  type VolunteerRequest,
} from '../store/VolunteerContext'

interface VolunteerCardProps {
  request: VolunteerRequest
}

function VolunteerCard({
  request,
}: VolunteerCardProps) {
  const {
    acceptRequest,
    completeRequest,
    cancelRequest,
  } = useVolunteers()

  const statusStyles = {
    Pending: 'bg-amber-50 text-amber-700',
    Accepted: 'bg-teal-50 text-teal-700',
    Completed: 'bg-slate-100 text-slate-600',
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex items-start justify-between gap-4">

        <div className="flex items-start gap-4">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-2xl">
            🤝
          </div>

          <div>

            <h3 className="text-lg font-bold text-slate-900">
              {request.type}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Requested on {request.date}
            </p>

          </div>

        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[request.status]}`}
        >
          {request.status}
        </span>

      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">

        <div>

          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
            Location
          </p>

          <p className="mt-1 text-sm font-semibold text-slate-800">
            {request.location}
          </p>

        </div>

        <div>

          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
            Volunteer
          </p>

          <p className="mt-1 text-sm font-semibold text-slate-800">
            {request.volunteerName || 'Waiting for volunteer'}
          </p>

        </div>

      </div>

      <div className="mt-5 rounded-xl bg-slate-50 p-4">

        <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
          Request details
        </p>

        <p className="mt-1 text-sm leading-6 text-slate-600">
          {request.description}
        </p>

      </div>

      <div className="mt-5 flex flex-wrap gap-3 border-t border-slate-100 pt-5">

        {request.status === 'Pending' && (
          <button
            type="button"
            onClick={() => acceptRequest(request.id)}
            className="rounded-xl bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-700"
          >
            Accept volunteer
          </button>
        )}

        {request.status === 'Accepted' && (
          <button
            type="button"
            onClick={() => completeRequest(request.id)}
            className="rounded-xl bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-700"
          >
            ✓ Mark completed
          </button>
        )}

        {request.status !== 'Completed' && (
          <button
            type="button"
            onClick={() => cancelRequest(request.id)}
            className="rounded-xl px-4 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-50"
          >
            Cancel request
          </button>
        )}

      </div>

    </div>
  )
}

export default VolunteerCard