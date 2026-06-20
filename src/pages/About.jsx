import { Users, Award, Globe, Zap, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const team = [
  { name: 'Alexandra Reed', role: 'CEO & Founder', avatar: 'AR', color: '#7c3aed' },
  { name: 'James Park', role: 'Head of AI Strategy', avatar: 'JP', color: '#0ea5e9' },
  { name: 'Sofia Martinez', role: 'Creative Director', avatar: 'SM', color: '#10b981' },
  { name: 'David Okafor', role: 'Data Science Lead', avatar: 'DO', color: '#f59e0b' },
]

const values = [
  { title: 'AI-First Thinking', desc: 'Every strategy we build starts with data and machine intelligence — not gut feelings.' },
  { title: 'Radical Transparency', desc: 'We share exactly what\'s working, what\'s not, and why — no vanity metrics, no spin.' },
  { title: 'Relentless Iteration', desc: 'Markets shift fast. We test, learn, and adapt continuously so you\'re always ahead.' },
  { title: 'Client Partnership', desc: 'We don\'t run campaigns at you. We build growth engines with you, for the long term.' },
]

const milestones = [
  { year: '2018', event: 'MarketAI founded with a mission to democratize AI-driven marketing.' },
  { year: '2020', event: 'Launched proprietary AI engine — reached 100+ clients in 18 months.' },
  { year: '2022', event: 'Expanded to 3 continents, named Top 50 AI Startups by TechCrunch.' },
  { year: '2024', event: '500+ clients, $10M+ revenue generated, 24/7 AI support platform live.' },
]

export default function About() {
  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section className="grid-bg" style={{ padding: '80px 24px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 350, background: 'radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 700, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)', borderRadius: 100, padding: '6px 16px', marginBottom: 24 }}>
            <Users size={13} color="#a78bfa" />
            <span style={{ color: '#a78bfa', fontSize: 13, fontWeight: 500 }}>About Us</span>
          </div>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 58px)', fontWeight: 900, color: 'white', letterSpacing: '-1.5px', marginBottom: 20 }}>
            Built by Marketers,<br /><span className="gradient-text">Powered by AI</span>
          </h1>
          <p style={{ color: '#64748b', fontSize: 17, lineHeight: 1.7, maxWidth: 580, margin: '0 auto' }}>
            We started MarketAI because we were tired of marketing that guesses. Today we combine world-class creative talent with genuine AI capability to build growth machines for ambitious brands.
          </p>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: 'white', letterSpacing: '-0.5px', marginBottom: 40, textAlign: 'center' }}>What We Stand For</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            {values.map(({ title, desc }) => (
              <div key={title} className="glass" style={{ padding: 24, borderRadius: 14 }}>
                <CheckCircle size={18} color="#7c3aed" style={{ marginBottom: 14 }} />
                <h3 style={{ color: 'white', fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{title}</h3>
                <p style={{ color: '#64748b', fontSize: 13, lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '60px 24px', background: 'rgba(124,58,237,0.03)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: 'white', letterSpacing: '-0.5px', marginBottom: 48, textAlign: 'center' }}>Our Journey</h2>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: 59, top: 0, bottom: 0, width: 1, background: 'linear-gradient(to bottom, #7c3aed, rgba(124,58,237,0.1))' }} />
            {milestones.map(({ year, event }, i) => (
              <div key={year} style={{ display: 'flex', gap: 24, marginBottom: 36, position: 'relative' }}>
                <div style={{ flexShrink: 0, width: 80, textAlign: 'right' }}>
                  <span style={{ color: '#7c3aed', fontSize: 13, fontWeight: 700 }}>{year}</span>
                </div>
                <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'linear-gradient(135deg,#7c3aed,#4f46e5)', flexShrink: 0, marginTop: 1, zIndex: 1 }} />
                <div className="glass" style={{ flex: 1, padding: '14px 20px', borderRadius: 10 }}>
                  <p style={{ color: '#94a3b8', fontSize: 14, lineHeight: 1.6 }}>{event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: 'white', letterSpacing: '-0.5px', marginBottom: 12, textAlign: 'center' }}>Meet the Team</h2>
          <p style={{ color: '#64748b', fontSize: 15, textAlign: 'center', marginBottom: 48 }}>The humans (and models) behind the magic.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, maxWidth: 900, margin: '0 auto' }}>
            {team.map(({ name, role, avatar, color }) => (
              <div key={name} className="glass" style={{ padding: '28px 20px', borderRadius: 16, textAlign: 'center' }}>
                <div style={{ width: 60, height: 60, borderRadius: '50%', background: color + '22', border: '2px solid ' + color + '44', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: 16, fontWeight: 700, color: color }}>
                  {avatar}
                </div>
                <div style={{ color: 'white', fontSize: 15, fontWeight: 600, marginBottom: 4 }}>{name}</div>
                <div style={{ color: color, fontSize: 12 }}>{role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '60px 24px 100px', textAlign: 'center' }}>
        <Link to="/contact" style={{
          textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '14px 32px', borderRadius: 10, fontSize: 15, fontWeight: 600,
          background: 'linear-gradient(135deg,#7c3aed,#4f46e5)', color: 'white',
          boxShadow: '0 8px 25px rgba(124,58,237,0.35)'
        }}>
          Work With Us
        </Link>
      </section>
    </div>
  )
}
