import { ArrowRight, TrendingUp, Users, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const caseStudies = [
  {
    company: 'TechVenture',
    initials: 'TV',
    industry: 'SaaS',
    challenge: 'Low conversion rates despite high traffic to their demo pages',
    solution: 'Deployed predictive analytics and AI-powered CRO testing across their funnel',
    results: [
      { metric: '247%', label: 'Increase in conversions' },
      { metric: '3x', label: 'ROI improvement' },
      { metric: '6 weeks', label: 'To full deployment' }
    ]
  },
  {
    company: 'GrowthCo',
    initials: 'GC',
    industry: 'E-commerce',
    challenge: 'Unable to segment audiences effectively, resulting in poor email performance',
    solution: 'Implemented AI-powered customer intelligence platform with real-time segmentation',
    results: [
      { metric: '$2M', label: 'Additional revenue generated' },
      { metric: '45%', label: 'Email open rate increase' },
      { metric: '4.2x', label: 'Customer LTV improvement' }
    ]
  },
  {
    company: 'ScaleUp Media',
    initials: 'SM',
    industry: 'Digital Marketing Agency',
    challenge: 'Manual content creation bottleneck limiting client deliverables',
    solution: 'Rolled out AI content generation with brand voice training for 12+ client accounts',
    results: [
      { metric: '10x', label: 'Content output speed' },
      { metric: '68%', label: 'Cost savings on production' },
      { metric: '92%', label: 'Client satisfaction score' }
    ]
  }
]

export default function CaseStudies() {
  return (
    <div style={{ minHeight: '100vh', background: '#080810', paddingTop: 70 }}>
      {/* Hero */}
      <section style={{ padding: '80px 24px 60px', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="animate-on-scroll" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.35)', borderRadius: 100, padding: '6px 18px', marginBottom: 24 }}>
            <TrendingUp size={13} color="#a78bfa" />
            <span style={{ color: '#a78bfa', fontSize: 13, fontWeight: 600 }}>PROVEN RESULTS</span>
          </div>
          <h1 className="animate-on-scroll" style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 900, color: 'white', letterSpacing: '-1.5px', marginBottom: 16 }}>
            Real growth from <span className="gradient-text">real companies</span>
          </h1>
          <p className="animate-on-scroll" style={{ color: '#64748b', fontSize: 17, lineHeight: 1.7 }}>
            See how teams like yours are using MarketAI to scale faster.
          </p>
        </div>
      </section>

      {/* Case studies */}
      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 40 }}>
          {caseStudies.map((study, idx) => (
            <div
              key={study.company}
              className="animate-on-scroll glass"
              style={{
                padding: 40,
                borderRadius: 20,
                border: '1px solid rgba(124,58,237,0.2)',
                background: 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(79,70,229,0.04))',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 40,
                alignItems: 'center'
              }}
            >
              {/* Left: Company info */}
              <div>
                <div style={{
                  width: 80,
                  height: 80,
                  borderRadius: 16,
                  background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 24,
                  boxShadow: '0 8px 24px rgba(124,58,237,0.3)'
                }}>
                  <span style={{ fontSize: 28, fontWeight: 900, color: 'white' }}>{study.initials}</span>
                </div>

                <h3 style={{ fontSize: 24, fontWeight: 800, color: 'white', marginBottom: 6 }}>
                  {study.company}
                </h3>
                <p style={{ color: '#a78bfa', fontSize: 13, fontWeight: 600, marginBottom: 24 }}>
                  {study.industry}
                </p>

                <div style={{ marginBottom: 28 }}>
                  <p style={{ color: '#94a3b8', fontSize: 13, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    The Challenge
                  </p>
                  <p style={{ color: '#cbd5e1', fontSize: 15, lineHeight: 1.7 }}>
                    {study.challenge}
                  </p>
                </div>

                <div>
                  <p style={{ color: '#94a3b8', fontSize: 13, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    The Solution
                  </p>
                  <p style={{ color: '#cbd5e1', fontSize: 15, lineHeight: 1.7 }}>
                    {study.solution}
                  </p>
                </div>
              </div>

              {/* Right: Results */}
              <div>
                <p style={{ color: '#94a3b8', fontSize: 13, fontWeight: 700, marginBottom: 20, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  The Results
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                  {study.results.map((r) => (
                    <div key={r.metric} style={{ borderLeft: '3px solid #7c3aed', paddingLeft: 20 }}>
                      <div style={{ fontSize: 32, fontWeight: 900, color: '#10b981', marginBottom: 4 }}>
                        {r.metric}
                      </div>
                      <div style={{ color: '#64748b', fontSize: 14 }}>
                        {r.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px 100px' }}>
        <div className="animate-on-scroll" style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', padding: '64px 40px', borderRadius: 28, background: 'linear-gradient(135deg,rgba(124,58,237,0.1),rgba(79,70,229,0.06))', border: '1px solid rgba(124,58,237,0.25)' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, color: 'white', marginBottom: 16 }}>
            Your growth story <span className="gradient-text">starts here</span>
          </h2>
          <p style={{ color: '#64748b', fontSize: 17, marginBottom: 32 }}>
            Join companies that are already winning with MarketAI.
          </p>
          <Link to="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 32px', borderRadius: 12,
            background: 'linear-gradient(135deg,#7c3aed,#4f46e5)',
            color: 'white', textDecoration: 'none', fontWeight: 700, fontSize: 15,
            boxShadow: '0 8px 30px rgba(124,58,237,0.4)'
          }}>
            Get your free strategy call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
