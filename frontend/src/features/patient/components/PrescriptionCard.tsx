import type { Prescription } from '../types/prescription'

interface PrescriptionCardProps {
  prescription: Prescription
  onViewDetails: (prescription: Prescription) => void
}

function PrescriptionCard({
  prescription,
  onViewDetails,
}: PrescriptionCardProps) {
  const isActive = prescription.status === 'Active'

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

        <div className="flex items-start gap-4">

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-2xl">
            📋
          </div>

          <div>

            <h3 className="text-lg font-semibold text-slate-900">
              Prescription #{prescription.id}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {prescription.diagnosis}
            </p>

          </div>

        </div>

        <span
          className={`w-fit rounded-full px-3 py-1 text-xs font-medium ${
            isActive
              ? 'bg-teal-50 text-teal-700'
              : 'bg-slate-100 text-slate-500'
          }`}
        >
          {prescription.status}
        </span>

      </div>

      {/* Doctor */}
      <div className="mt-6 rounded-xl bg-slate-50 p-4">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 font-semibold text-teal-700">
            DR
          </div>

          <div>

            <p className="text-sm font-semibold text-slate-900">
              {prescription.doctorName}
            </p>

            <p className="text-xs text-slate-500">
              {prescription.specialization}
            </p>

          </div>

        </div>

      </div>

      {/* Dates */}
      <div className="mt-5 grid gap-4 sm:grid-cols-2">

        <div>
          <p className="text-xs text-slate-500">
            Prescribed on
          </p>

          <p className="mt-1 text-sm font-medium text-slate-900">
            📅 {prescription.date}
          </p>
        </div>

        <div>
          <p className="text-xs text-slate-500">
            Valid until
          </p>

          <p className="mt-1 text-sm font-medium text-slate-900">
            📅 {prescription.validUntil}
          </p>
        </div>

      </div>

      {/* Medicine preview */}
      <div className="mt-6">

        <p className="text-sm font-semibold text-slate-900">
          Medicines
        </p>

        <div className="mt-3 space-y-2">

          {prescription.medicines.slice(0, 3).map((medicine) => (
            <div
              key={medicine.name}
              className="flex items-center justify-between rounded-xl border border-slate-100 px-4 py-3"
            >

              <div>

                <p className="text-sm font-medium text-slate-900">
                  {medicine.name}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {medicine.dosage} · {medicine.frequency}
                </p>

              </div>

              <span className="text-xs text-slate-500">
                {medicine.duration}
              </span>

            </div>
          ))}

        </div>

      </div>

      {/* Actions */}
      <div className="mt-6 flex flex-wrap gap-3">

        <button
          type="button"
          onClick={() => onViewDetails(prescription)}
          className="rounded-xl bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700"
        >
          View Details
        </button>

        <button
          type="button"
          className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          ↓ Download
        </button>

      </div>

    </div>
  )
}

export default PrescriptionCard