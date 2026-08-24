import { useMedicines, type Medicine } from '../store/MedicineContext'

interface MedicineCardProps {
  medicine: Medicine
}

function MedicineCard({ medicine }: MedicineCardProps) {
  const { markAsTaken, markAsPending, removeMedicine } = useMedicines()

  const isTaken = medicine.status === 'Taken'

  return (
    <div
      className={`rounded-2xl border bg-white p-6 shadow-sm transition ${
        isTaken
          ? 'border-teal-200'
          : 'border-slate-200'
      }`}
    >

      {/* Top section */}

      <div className="flex items-start justify-between gap-4">

        <div className="flex items-start gap-4">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-2xl">
            💊
          </div>

          <div>

            <h3 className="text-lg font-bold text-slate-900">
              {medicine.name}
            </h3>

            <p className="mt-1 text-sm font-medium text-teal-700">
              {medicine.dosage}
            </p>

          </div>

        </div>

        {/* Status */}

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            isTaken
              ? 'bg-teal-50 text-teal-700'
              : 'bg-amber-50 text-amber-700'
          }`}
        >
          {medicine.status}
        </span>

      </div>

      {/* Details */}

      <div className="mt-6 grid gap-4 sm:grid-cols-3">

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
            Time
          </p>

          <p className="mt-1 text-sm font-semibold text-slate-800">
            {medicine.time}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
            Period
          </p>

          <p className="mt-1 text-sm font-semibold text-slate-800">
            {medicine.period}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
            Instructions
          </p>

          <p className="mt-1 text-sm text-slate-600">
            {medicine.instructions}
          </p>
        </div>

      </div>

      {/* Actions */}

      <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-5">

        {isTaken ? (
          <button
            type="button"
            onClick={() => markAsPending(medicine.id)}
            className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            Mark as pending
          </button>
        ) : (
          <button
            type="button"
            onClick={() => markAsTaken(medicine.id)}
            className="rounded-xl bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-700"
          >
            ✓ Mark as taken
          </button>
        )}

        <button
          type="button"
          onClick={() => removeMedicine(medicine.id)}
          className="rounded-xl px-4 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-50"
        >
          Remove
        </button>

      </div>

    </div>
  )
}

export default MedicineCard