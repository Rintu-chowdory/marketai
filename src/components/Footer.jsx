import { Link } from 'react-router-dom'
import { Zap, Twitter, Linkedin, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: '#05050d', borderTop: '1px solid rgba(124,58,237,0.15)', padding: '60px 24px 30px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 50 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg,#7c3aed,#4f46e5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Zap size={16} color="white" fill="white" />
              </div>
              <span style={{ fontSize: 18, fontWeight: 800, color: 'white' }}>
                Market<span style={{ background: 'linear-gradient(135deg,#a78bfa,#4f46e5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI</span>
              </span>
            </div>
            <p style={{ color: '#64748b', fontSize: 13, lineHeight: 1.7, marginBottom: 20, maxWidth: 220 }}>
              Transforming brands through intelligent marketing strategies and cutting-edge AI solutions.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {[Twitter, Linkedin, Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" style={{ width: 34, height: 34, borderRadius: 8, background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7c3aed', textDecoration: 'none', transition: 'all 0.2s' }}>
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'white', fontSize: 13, fontWeight: 700, marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Quick Links</h4>
            {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map(l => (
              <Link key={l} to={'/' + (l === 'Home' ? '' : l.toLowerCase())} style={{ display: 'block', color: '#64748b', fontSize: 13, textDecoration: 'none', marginBottom: 10, transition: 'color 0.2s' }}>{l}</Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: 'white', fontSize: 13, fontWeight: 700, marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Services</h4>
            {['AI Marketing', 'Brand Strategy', 'Content Creation', 'SEO Optimization', 'Social Media', 'Data Analytics'].map(s => (
              <div key={s} style={{ color: '#64748b', fontSize: 13, marginBottom: 10 }}>{s}</div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: 'white', fontSize: 13, fontWeight: 700, marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Contact Us</h4>
            {[
              { icon: MapPin, text: '123 Innovation Street, Tech City' },
              { icon: Mail, text: 'hello@marketai.com' },
              { icon: Phone, text: '+1 (234) 567-890' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 12 }}>
                <Icon size={14} color="#7c3aed" style={{ marginTop: 2, flexShrink: 0 }} />
                <span style={{ color: '#64748b', fontSize: 13 }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: '#374151', fontSize: 12 }}>© 2024 MarketAI. All rights reserved.</p>
          <p style={{ color: '#374151', fontSize: 12 }}>Privacy Policy · Terms of Service</p>
        </div>
      </div>
    </footer>
  )
}
