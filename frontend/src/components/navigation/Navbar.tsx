import Logo from '../common/Logo'
import Button from '../ui/Button'

function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Logo size="md" />

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-teal-700"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-teal-700"
          >
            How It Works
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-teal-700"
          >
            About
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button variant="outline">
            Login
          </Button>

          <Button>
            Get Started
          </Button>
        </div>

      </nav>
    </header>
  )
}

export default Navbar