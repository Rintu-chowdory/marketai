import { Brain, BarChart3, Zap, Target, Globe, Megaphone, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: Brain,
    category: 'Marketing & Sales',
    color: '#7c3aed',
    items: [
      { name: 'AI Marketing Automation', desc: 'Automate campaigns with intelligent triggers, personalization engines, and predictive send-time optimization.' },
      { name: 'Lead Generation & Scoring', desc: 'AI-powered lead qualification that identifies your highest-value prospects before your team even picks up the phone.' },
      { name: 'Conversion Rate Optimization', desc: 'Data-driven A/B testing and user journey mapping to turn visitors into customers.' },
    ]
  },
  {
    icon: BarChart3,
    category: 'Data & Analytics',
    color: '#0ea5e9',
    items: [
      { name: 'Predictive Analytics', desc: 'Machine learning models that forecast trends, churn risk, and revenue opportunities weeks in advance.' },
      { name: 'Customer Intelligence', desc: 'Deep behavioral profiling and segmentation that reveals what your audience actually wants.' },
      { name: 'Performance Dashboards', desc: 'Real-time dashboards connecting all your marketing channels into one unified source of truth.' },
    ]
  },
  {
    icon: Zap,
    category: 'Content Creation',
    color: '#10b981',
    items: [
      { name: 'AI Content Generation', desc: 'On-brand copy, blog posts, ad creatives, and social content — produced at scale with your voice.' },
      { name: 'SEO Optimization', desc: 'AI-driven keyword research, content gap analysis, and technical SEO that drives organic visibility.' },
      { name: 'Social Media Strategy', desc: 'Data-backed posting calendars, engagement automation, and community management workflows.' },
    ]
  },
]

const extras = [
  { icon: Target, label: 'Audience Targeting' },
  { icon: Globe, label: 'Global Campaigns' },
  { icon: Megaphone, label: 'Brand Strategy' },
]

export default function Services() {
  return (
    <div style={{ paddingTop: 70 }}>
      {/* Header */}
      <section className="grid-bg" style={{ padding: '80px 24px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%,-50%)', width: 500, height: 300, background: 'radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 700, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)', borderRadius: 100, padding: '6px 16px', marginBottom: 24 }}>
            <Zap size={13} color="#a78bfa" />
            <span style={{ color: '#a78bfa', fontSize: 13, fontWeight: 500 }}>Our Services</span>
          </div>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 900, color: 'white', letterSpacing: '-1.5px', marginBottom: 16 }}>
            Everything You Need to <span className="gradient-text">Dominate</span> Your Market
          </h1>
          <p style={{ color: '#64748b', fontSize: 17, lineHeight: 1.7 }}>
            From AI-powered campaigns to deep analytics — we cover the full growth stack for modern brands.
          </p>
        </div>
      </section>

      {/* Service categories */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 60 }}>
          {services.map(({ icon: Icon, category, color, items }) => (
            <div key={category}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: color + '22', border: '1px solid ' + color + '44', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={18} color={color} />
                </div>
                <h2 style={{ color: 'white', fontSize: 22, fontWeight: 700 }}>{category}</h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
                {items.map(({ name, desc }) => (
                  <div key={name} className="glass" style={{ padding: 24, borderRadius: 14, transition: 'all 0.3s', cursor: 'default' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = color + '44'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: color, marginBottom: 16 }} />
                    <h3 style={{ color: 'white', fontSize: 16, fontWeight: 600, marginBottom: 10 }}>{name}</h3>
                    <p style={{ color: '#64748b', fontSize: 13, lineHeight: 1.7 }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Extra chips */}
      <section style={{ padding: '40px 24px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
            {extras.map(({ icon: Icon, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 100 }}>
                <Icon size={14} color="#7c3aed" />
                <span style={{ color: '#94a3b8', fontSize: 13 }}>{label}</span>
              </div>
            ))}
          </div>
          <Link to="/contact" style={{
            textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 32px', borderRadius: 10, fontSize: 15, fontWeight: 600,
            background: 'linear-gradient(135deg,#7c3aed,#4f46e5)', color: 'white',
            boxShadow: '0 8px 25px rgba(124,58,237,0.35)'
          }}>
            Get a Free Strategy Call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
