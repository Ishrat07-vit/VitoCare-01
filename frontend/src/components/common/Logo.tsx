interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
}

function Logo({ size = 'md' }: LogoProps) {
  const sizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl',
  }

  return (
    <div
      className={`font-bold tracking-tight text-teal-700 ${sizes[size]}`}
    >
      VitoCare
    </div>
  )
}

export default Logo