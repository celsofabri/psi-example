import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import './Header.css'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/atendimento', label: 'Atendimento' },
    { path: '/metodologia', label: 'Metodologia' },
    { path: '/contato', label: 'Contato' },
  ]

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo">
          <span className="logo-name">Dra. Maria Silva</span>
          <span className="logo-title">Psicóloga | CRP 00/00000</span>
        </Link>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/contato" className="btn btn-primary nav-cta">
            Agendar Consulta
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
