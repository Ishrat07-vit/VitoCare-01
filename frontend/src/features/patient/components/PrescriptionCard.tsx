import {
  usePrescriptions,
  type Prescription,
} from '../store/PrescriptionContext'

interface PrescriptionCardProps {
  prescription: Prescription
}

function PrescriptionCard({
  prescription,
}: PrescriptionCardProps) {
  const {
    completePrescription,
    reactivatePrescription,
    removePrescription,
  } = usePrescriptions()

  const isActive = prescription.status === 'Active'

  return (
    <div
      className={`rounded-2xl border bg-white p-6 shadow-sm transition ${
        isActive
          ? 'border-teal-200'
          : 'border-slate-200'
      }`}
    >
      <div className="flex items-start justify-between gap-4">

        <div className="flex items-start gap-4">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-2xl">
            📋
          </div>

          <div>

            <h3 className="text-lg font-bold text-slate-900">
              {prescription.medicineName}
            </h3>

            <p className="mt-1 text-sm font-medium text-teal-700">
              {prescription.dosage}
            </p>

          </div>

        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            isActive
              ? 'bg-teal-50 text-teal-700'
              : 'bg-slate-100 text-slate-600'
          }`}
        >
          {prescription.status}
        </span>

      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
            Frequency
          </p>

          <p className="mt-1 text-sm font-semibold text-slate-800">
            {prescription.frequency}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
            Duration
          </p>

          <p className="mt-1 text-sm font-semibold text-slate-800">
            {prescription.duration}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
            Doctor
          </p>

          <p className="mt-1 text-sm font-semibold text-slate-800">
            {prescription.doctor}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
            Prescribed
          </p>

          <p className="mt-1 text-sm font-semibold text-slate-800">
            {prescription.date}
          </p>
        </div>

      </div>

      <div className="mt-5 rounded-xl bg-slate-50 p-4">

        <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
          Instructions
        </p>

        <p className="mt-1 text-sm text-slate-600">
          {prescription.instructions}
        </p>

      </div>

      <div className="mt-5 flex flex-wrap gap-3 border-t border-slate-100 pt-5">

        {isActive ? (
          <button
            type="button"
            onClick={() =>
              completePrescription(prescription.id)
            }
            className="rounded-xl bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-700"
          >
            ✓ Mark completed
          </button>
        ) : (
          <button
            type="button"
            onClick={() =>
              reactivatePrescription(prescription.id)
            }
            className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            Reactivate
          </button>
        )}

        <button
          type="button"
          onClick={() =>
            removePrescription(prescription.id)
          }
          className="rounded-xl px-4 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-50"
        >
          Remove
        </button>

      </div>

    </div>
  )
}

export default PrescriptionCard