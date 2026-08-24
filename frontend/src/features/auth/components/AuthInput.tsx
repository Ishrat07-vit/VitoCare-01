interface AuthInputProps {
  label: string
  type?: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
}

function AuthInput({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
}: AuthInputProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-slate-800">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
      />
    </div>
  )
}

export default AuthInput