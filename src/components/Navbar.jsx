import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Zap } from 'lucide-react'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const loc = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(8,8,16,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(124,58,237,0.15)' : '1px solid transparent',
      transition: 'all 0.3s ease'
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 70, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg,#7c3aed,#4f46e5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Zap size={16} color="white" fill="white" />
          </div>
          <span style={{ fontSize: 20, fontWeight: 800, color: 'white', letterSpacing: '-0.5px' }}>
            Market<span style={{ background: 'linear-gradient(135deg,#a78bfa,#4f46e5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: 4 }} className="hidden md:flex">
          {nav.map(n => (
            <Link key={n.to} to={n.to} style={{
              textDecoration: 'none', padding: '8px 16px', borderRadius: 8, fontSize: 14, fontWeight: 500,
              color: loc.pathname === n.to ? '#a78bfa' : '#94a3b8',
              background: loc.pathname === n.to ? 'rgba(124,58,237,0.1)' : 'transparent',
              transition: 'all 0.2s'
            }}>{n.label}</Link>
          ))}
        </nav>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link to="/contact" style={{
            textDecoration: 'none', padding: '10px 22px', borderRadius: 8, fontSize: 14, fontWeight: 600,
            background: 'linear-gradient(135deg,#7c3aed,#4f46e5)', color: 'white',
            boxShadow: '0 4px 15px rgba(124,58,237,0.35)', transition: 'all 0.2s'
          }}>Get Started</Link>
          <button onClick={() => setOpen(!open)} style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', display: 'flex' }} className="md:hidden">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: 'rgba(8,8,16,0.98)', borderTop: '1px solid rgba(124,58,237,0.15)', padding: '16px 24px' }}>
          {nav.map(n => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} style={{
              display: 'block', textDecoration: 'none', padding: '12px 0',
              color: loc.pathname === n.to ? '#a78bfa' : '#94a3b8',
              fontSize: 15, fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.05)'
            }}>{n.label}</Link>
          ))}
        </div>
      )}
    </header>
  )
}
