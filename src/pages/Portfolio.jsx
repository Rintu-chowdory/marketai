import { useState } from 'react'
import { ArrowUpRight, TrendingUp, Users, BarChart3 } from 'lucide-react'
import { Link } from 'react-router-dom'

const projects = [
  {
    name: 'TechStart Inc.',
    category: 'AI Marketing',
    desc: 'Full-funnel AI campaign strategy that tripled qualified leads in 90 days.',
    stats: [{ label: 'Lead Growth', value: '+312%' }, { label: 'CAC Reduction', value: '-48%' }],
    color: '#7c3aed', tag: 'Marketing & Sales'
  },
  {
    name: 'Nova Corp',
    category: 'Data & Analytics',
    desc: 'Built a predictive churn model that saved $2.4M in annual recurring revenue.',
    stats: [{ label: 'Churn Reduced', value: '-61%' }, { label: 'ARR Saved', value: '$2.4M' }],
    color: '#0ea5e9', tag: 'Data & Analytics'
  },
  {
    name: 'Bloom Studios',
    category: 'Content Creation',
    desc: 'AI content engine producing 200+ on-brand assets monthly at a fraction of agency cost.',
    stats: [{ label: 'Content Output', value: '200+/mo' }, { label: 'Cost Saving', value: '74%' }],
    color: '#10b981', tag: 'Content Creation'
  },
  {
    name: 'Apex Retail',
    category: 'AI Marketing',
    desc: 'Omnichannel personalization platform increasing average order value by 38%.',
    stats: [{ label: 'AOV Increase', value: '+38%' }, { label: 'ROAS', value: '6.2x' }],
    color: '#f59e0b', tag: 'Marketing & Sales'
  },
  {
    name: 'CloudBase SaaS',
    category: 'Data & Analytics',
    desc: 'Real-time analytics dashboard unifying 12 data sources into one growth command center.',
    stats: [{ label: 'Data Sources', value: '12 unified' }, { label: 'Time Saved', value: '20h/week' }],
    color: '#ec4899', tag: 'Data & Analytics'
  },
  {
    name: 'UrbanEdge Brand',
    category: 'Content Creation',
    desc: 'SEO content strategy that drove organic traffic from 8K to 95K monthly visits in 6 months.',
    stats: [{ label: 'Organic Traffic', value: '+1,087%' }, { label: 'Keywords', value: '340 #1 ranks' }],
    color: '#14b8a6', tag: 'Content Creation'
  },
]

const filters = ['All', 'Marketing & Sales', 'Data & Analytics', 'Content Creation']

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const shown = active === 'All' ? projects : projects.filter(p => p.tag === active)

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Header */}
      <section className="grid-bg" style={{ padding: '80px 24px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)', width: 500, height: 300, background: 'radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 700, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)', borderRadius: 100, padding: '6px 16px', marginBottom: 24 }}>
            <TrendingUp size={13} color="#a78bfa" />
            <span style={{ color: '#a78bfa', fontSize: 13, fontWeight: 500 }}>Our Work</span>
          </div>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 58px)', fontWeight: 900, color: 'white', letterSpacing: '-1.5px', marginBottom: 16 }}>
            Results That <span className="gradient-text">Speak for Themselves</span>
          </h1>
          <p style={{ color: '#64748b', fontSize: 17, lineHeight: 1.7 }}>
            Real clients, real numbers. No fluff, no stock photography growth charts.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section style={{ padding: '32px 24px 0', display: 'flex', justifyContent: 'center', gap: 8, flexWrap: 'wrap' }}>
        {filters.map(f => (
          <button key={f} onClick={() => setActive(f)}
            style={{
              padding: '8px 18px', borderRadius: 100, fontSize: 13, fontWeight: 500, cursor: 'pointer', border: 'none', transition: 'all 0.2s',
              background: active === f ? 'linear-gradient(135deg,#7c3aed,#4f46e5)' : 'rgba(255,255,255,0.04)',
              color: active === f ? 'white' : '#64748b',
              boxShadow: active === f ? '0 4px 15px rgba(124,58,237,0.3)' : 'none'
            }}>{f}</button>
        ))}
      </section>

      {/* Grid */}
      <section style={{ padding: '48px 24px 100px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {shown.map(({ name, category, desc, stats, color }) => (
            <div key={name} className="glass" style={{ padding: 28, borderRadius: 16, transition: 'all 0.3s', cursor: 'default' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = color + '44'; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(0)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                <div>
                  <div style={{ color: color, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>{category}</div>
                  <h3 style={{ color: 'white', fontSize: 18, fontWeight: 700 }}>{name}</h3>
                </div>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: color + '22', border: '1px solid ' + color + '33', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ArrowUpRight size={15} color={color} />
                </div>
              </div>
              <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{desc}</p>
              <div style={{ display: 'flex', gap: 12 }}>
                {stats.map(({ label, value }) => (
                  <div key={label} style={{ flex: 1, background: color + '11', border: '1px solid ' + color + '22', borderRadius: 10, padding: '10px 14px' }}>
                    <div style={{ color: color, fontSize: 18, fontWeight: 800 }}>{value}</div>
                    <div style={{ color: '#64748b', fontSize: 11, marginTop: 2 }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: 60 }}>
          <p style={{ color: '#64748b', fontSize: 15, marginBottom: 24 }}>Want results like these for your brand?</p>
          <Link to="/contact" style={{
            textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 32px', borderRadius: 10, fontSize: 15, fontWeight: 600,
            background: 'linear-gradient(135deg,#7c3aed,#4f46e5)', color: 'white',
            boxShadow: '0 8px 25px rgba(124,58,237,0.35)'
          }}>
            Start Your Growth Story
          </Link>
        </div>
      </section>
    </div>
  )
}
