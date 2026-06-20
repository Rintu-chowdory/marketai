import { Link } from 'react-router-dom'
import { Zap, Twitter, Linkedin, Github } from 'lucide-react'

const footerLinks = {
  Product: [
    { label: 'Features', to: '/' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'Blog', to: '/blog' },
    { label: 'Case Studies', to: '/case-studies' },
  ],
  Company: [
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
    { label: 'Careers', to: '/careers' },
    { label: 'Press', to: '/press' },
  ],
  Legal: [
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms of Service', to: '/terms' },
    { label: 'Cookie Policy', to: '/cookies' },
    { label: 'Security', to: '/security' },
  ],
}

export default function Footer() {
  return (
    <footer style={{ background: '#050508', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 32, marginBottom: 48 }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 2', maxWidth: 280 }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16, textDecoration: 'none' }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg,#7c3aed,#4f46e5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Zap size={16} color="white" fill="white" />
              </div>
              <span style={{ fontSize: 18, fontWeight: 800, color: 'white' }}>
                Market<span style={{ background: 'linear-gradient(135deg,#a78bfa,#4f46e5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI</span>
              </span>
            </Link>
            <p style={{ color: '#94a3b8', fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>
              AI-powered marketing for the modern team. Grow faster, smarter.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <button key={i} style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', cursor: 'pointer', transition: 'all 0.2s' }}>
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 style={{ color: 'white', fontSize: 12, fontWeight: 700, marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{title}</h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {links.map(link => (
                  <li key={link.label} style={{ marginBottom: 12 }}>
                    <Link to={link.to} style={{ color: '#94a3b8', fontSize: 13, textDecoration: 'none', transition: 'color 0.2s' }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <p style={{ color: '#64748b', fontSize: 12 }}>© 2026 MarketAI. All rights reserved.</p>
          <p style={{ color: '#64748b', fontSize: 12 }}>Built with ❤️ and AI</p>
        </div>
      </div>
    </footer>
  )
}
