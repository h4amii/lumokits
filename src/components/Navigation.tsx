import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'

const navLinks = [
  { label: 'About', path: '/about' },
  { label: 'Manufacturing', path: '/manufacturing' },
  { label: 'Why Lumo', path: '/why-lumo' },
  { label: 'Contact', path: '/contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-350 ${
          scrolled
            ? 'bg-[rgba(10,10,10,0.92)] backdrop-blur-[12px]'
            : 'bg-transparent'
        }`}
      >
        <div className="container-lumo w-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/assets/lumo-logo.png"
              alt="LumoKits"
              className="h-8 w-auto rounded-md"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-nav text-white relative group py-1 ${
                  isActive(link.path) ? 'text-brand-yellow' : ''
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-brand-yellow transition-all duration-350 ${
                    isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 bg-brand-violet text-white font-display font-semibold text-sm rounded-full px-7 py-3 hover:bg-[#9B5CFF] hover:shadow-[0_0_24px_rgba(123,47,247,0.35)] transition-all duration-300"
          >
            Get a Quote
            <ArrowRight size={16} />
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-near-black flex flex-col items-center justify-center gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              className="font-display text-white text-[40px] font-medium hover:text-brand-violet transition-colors"
              style={{
                animation: `fadeInUp 0.4s ease ${i * 0.08}s both`,
              }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-4 inline-flex items-center gap-2 bg-brand-violet text-white font-display font-semibold text-lg rounded-full px-8 py-4"
            style={{ animation: 'fadeInUp 0.4s ease 0.4s both' }}
          >
            Get a Quote
            <ArrowRight size={18} />
          </Link>
          <style>{`
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </div>
      )}
    </>
  )
}
