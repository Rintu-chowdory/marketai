import { Brain, BarChart3, Zap, Target, Globe, Megaphone, ArrowRight, Smartphone, Laptop } from 'lucide-react'
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

      {/* Device mockup section */}
      <section style={{ padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-1" style={{ top: '10%', right: '-10%' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, color: 'white', letterSpacing: '-1.2px', marginBottom: 16 }}>
              See it in action
            </h2>
            <p style={{ color: '#64748b', fontSize: 17, maxWidth: 520, margin: '0 auto' }}>
              Our platform works seamlessly across all devices.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 32, maxWidth: 900, margin: '0 auto' }}>
            {/* Desktop mockup */}
            <div className="animate-on-scroll" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '100%', maxWidth: 320, marginBottom: 24 }}>
                <div style={{ position: 'relative', width: '100%', background: '#0d0d1a', border: '2px solid rgba(124,58,237,0.3)', borderRadius: '16px 16px 0 0', padding: '12px', boxShadow: '0 -4px 40px rgba(124,58,237,0.15)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80"
                    alt="Dashboard"
                    style={{ width: '100%', borderRadius: '8px', display: 'block', aspectRatio: '16/10', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ height: 8, background: 'linear-gradient(to bottom, #1a1a2e, #0d0d1a)', borderLeft: '2px solid rgba(124,58,237,0.25)', borderRight: '2px solid rgba(124,58,237,0.25)' }} />
                <div style={{ height: 22, background: 'linear-gradient(to bottom, #1c1c2e, #141422)', borderRadius: '0 0 12px 12px', border: '2px solid rgba(124,58,237,0.2)', borderTop: 'none' }} />
              </div>
              <h3 style={{ color: 'white', fontSize: 16, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Laptop size={18} color="#7c3aed" />
                Desktop
              </h3>
              <p style={{ color: '#64748b', fontSize: 13, textAlign: 'center', marginTop: 8 }}>Full-featured dashboard</p>
            </div>

            {/* Mobile mockup */}
            <div className="animate-on-scroll" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '100%', maxWidth: 180, marginBottom: 24 }}>
                <div style={{ position: 'relative', width: '100%', background: '#0d0d1a', border: '8px solid #1a1a2e', borderRadius: 40, padding: '0', overflow: 'hidden', boxShadow: '0 -4px 40px rgba(124,58,237,0.15), inset 0 0 0 1px rgba(124,58,237,0.2)' }}>
                  <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 120, height: 26, background: '#1a1a2e', borderRadius: '0 0 24px 24px', zIndex: 10, border: '1px solid rgba(124,58,237,0.2)' }} />
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop&q=80"
                    alt="Mobile Dashboard"
                    style={{ width: '100%', display: 'block', aspectRatio: '9/16', objectFit: 'cover', marginTop: 12 }}
                  />
                </div>
              </div>
              <h3 style={{ color: 'white', fontSize: 16, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Smartphone size={18} color="#10b981" />
                Mobile
              </h3>
              <p style={{ color: '#64748b', fontSize: 13, textAlign: 'center', marginTop: 8 }}>Responsive on the go</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service categories */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 60 }}>
          {services.map(({ icon: Icon, category, color, items }) => (
            <div key={category} className="animate-on-scroll">
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
          <div className="stagger-children" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
            {extras.map(({ icon: Icon, label }) => (
              <div key={label} className="animate-on-scroll" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 100 }}>
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
