interface ProfileInfoCardProps {
  label: string
  value: string
  icon: string
}

function ProfileInfoCard({
  label,
  value,
  icon,
}: ProfileInfoCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-4">

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-lg">
          {icon}
        </div>

        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
            {label}
          </p>

          <p className="mt-1 break-words text-sm font-semibold text-slate-900">
            {value || 'Not provided'}
          </p>
        </div>

      </div>
    </div>
  )
}

export default ProfileInfoCard