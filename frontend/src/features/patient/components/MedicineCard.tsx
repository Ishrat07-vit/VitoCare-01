import type { Medicine } from '../types/medicine'

interface MedicineCardProps {
  medicine: Medicine
  onStatusChange: (id: number) => void
}

function MedicineCard({
  medicine,
  onStatusChange,
}: MedicineCardProps) {
  const statusStyles = {
    Taken: 'bg-teal-50 text-teal-700',
    Pending: 'bg-yellow-50 text-yellow-700',
    Missed: 'bg-red-50 text-red-600',
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">

      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

        {/* Medicine information */}
        <div className="flex items-start gap-4">

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-2xl">
            💊
          </div>

          <div>

            <h3 className="font-semibold text-slate-900">
              {medicine.name}
            </h3>

            <p className="mt-1 text-sm font-medium text-teal-700">
              {medicine.dosage}
            </p>

            <p className="mt-2 text-sm text-slate-500">
              {medicine.frequency}
            </p>

          </div>

        </div>

        {/* Status */}
        <span
          className={`w-fit rounded-full px-3 py-1 text-xs font-medium ${statusStyles[medicine.status]}`}
        >
          {medicine.status}
        </span>

      </div>

      {/* Details */}
      <div className="mt-6 grid gap-4 rounded-xl bg-slate-50 p-4 sm:grid-cols-3">

        <div>
          <p className="text-xs text-slate-500">
            Time
          </p>

          <p className="mt-1 text-sm font-medium text-slate-900">
            🕐 {medicine.time}
          </p>
        </div>

        <div>
          <p className="text-xs text-slate-500">
            Instructions
          </p>

          <p className="mt-1 text-sm font-medium text-slate-900">
            {medicine.instruction}
          </p>
        </div>

        <div>
          <p className="text-xs text-slate-500">
            Prescribed by
          </p>

          <p className="mt-1 text-sm font-medium text-slate-900">
            {medicine.prescribedBy}
          </p>
        </div>

      </div>

      {/* Action */}
      {medicine.status === 'Pending' && (
        <div className="mt-5">

          <button
            type="button"
            onClick={() => onStatusChange(medicine.id)}
            className="rounded-xl bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700"
          >
            ✓ Mark as Taken
          </button>

        </div>
      )}

      {medicine.status === 'Taken' && (
        <div className="mt-5">

          <p className="text-sm font-medium text-teal-700">
            ✓ Medicine taken
          </p>

        </div>
      )}

      {medicine.status === 'Missed' && (
        <div className="mt-5">

          <p className="text-sm font-medium text-red-600">
            ⚠ This medicine was missed
          </p>

        </div>
      )}

    </div>
  )
}

export default MedicineCard