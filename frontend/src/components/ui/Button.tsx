interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  onClick?: () => void
}

function Button({
  children,
  variant = 'primary',
  onClick,
}: ButtonProps) {
  const baseStyles =
    'rounded-xl px-6 py-3 font-semibold transition-all duration-200'

  const variants = {
    primary:
      'bg-teal-700 text-white hover:bg-teal-800 hover:shadow-lg',
    secondary:
      'bg-slate-100 text-slate-900 hover:bg-slate-200',
    outline:
      'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50',
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </button>
  )
}

export default Button