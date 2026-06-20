import { ArrowRight, Check, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const tiers = [
  {
    name: 'Starter',
    price: 49,
    description: 'Perfect for small teams testing AI marketing',
    features: [
      'Up to 10,000 contacts',
      'AI-powered email campaigns',
      'Basic analytics dashboard',
      'Email support',
      'AI content generation (100/month)',
      'Standard integrations'
    ],
    cta: 'Start free trial',
    highlighted: false
  },
  {
    name: 'Professional',
    price: 149,
    description: 'For growing teams scaling their reach',
    features: [
      'Unlimited contacts',
      'Advanced AI campaigns',
      'Predictive analytics & scoring',
      'Priority support (24/7)',
      'AI content generation (1000/month)',
      'All integrations',
      'Custom audiences',
      'Lead generation automation',
      'A/B testing suite'
    ],
    cta: 'Start free trial',
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: null,
    description: 'Custom solutions for large organizations',
    features: [
      'Custom infrastructure',
      'Dedicated account manager',
      'Custom AI models',
      'Unlimited everything',
      'White-label options',
      'Advanced security & compliance',
      'API access & webhooks',
      'Custom integrations',
      'SLA guarantees'
    ],
    cta: 'Contact sales',
    highlighted: false
  }
]

const faqs = [
  { q: 'Can I change plans?', a: 'Yes, upgrade or downgrade anytime at no penalty. Changes take effect at your next billing cycle.' },
  { q: 'Is there a setup fee?', a: 'No setup fees. Start free for 14 days and upgrade when ready.' },
  { q: 'What payment methods?', a: 'We accept all major credit cards, bank transfers, and offer custom billing for Enterprise.' },
  { q: 'Do you offer annual discounts?', a: 'Yes - save 20% when you pay annually on any plan.' },
  { q: 'What about my data?', a: 'Your data is yours. Export it anytime, and we keep it available for 30 days after cancellation.' },
  { q: 'How does the trial work?', a: '14 days of full access to all features. No credit card required. Includes $100 in platform credit.' },
]

export default function Pricing() {
  return (
    <div style={{ minHeight: '100vh', background: '#080810', paddingTop: 70 }}>
      <section style={{ padding: '80px 24px 60px', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="animate-on-scroll" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.35)', borderRadius: 100, padding: '6px 18px', marginBottom: 24 }}>
            <Zap size={13} color="#a78bfa" />
            <span style={{ color: '#a78bfa', fontSize: 13, fontWeight: 600 }}>TRANSPARENT PRICING</span>
          </div>
          <h1 className="animate-on-scroll" style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 900, color: 'white', letterSpacing: '-1.5px', marginBottom: 16 }}>
            Plans for every <span className="gradient-text">growth stage</span>
          </h1>
          <p className="animate-on-scroll" style={{ color: '#64748b', fontSize: 17, lineHeight: 1.7, marginBottom: 32 }}>
            Start free for 14 days. Scale as you grow. No credit card required.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="stagger-children" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="animate-on-scroll glass"
                style={{
                  padding: 32,
                  borderRadius: 20,
                  position: 'relative',
                  border: tier.highlighted ? '2px solid #7c3aed' : '1px solid rgba(255,255,255,0.08)',
                  background: tier.highlighted ? 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(79,70,229,0.08))' : 'rgba(255,255,255,0.02)',
                  transform: tier.highlighted ? 'scale(1.05)' : 'scale(1)',
                  transition: 'all 0.3s',
                  cursor: 'default'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#7c3aed'
                  if (!tier.highlighted) e.currentTarget.style.transform = 'translateY(-8px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = tier.highlighted ? '#7c3aed' : 'rgba(255,255,255,0.08)'
                  if (!tier.highlighted) e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                {tier.highlighted && (
                  <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg,#7c3aed,#4f46e5)', color: 'white', padding: '4px 12px', borderRadius: 20, fontSize: 11, fontWeight: 700 }}>
                    MOST POPULAR
                  </div>
                )}
                
                <h3 style={{ fontSize: 24, fontWeight: 800, color: 'white', marginBottom: 8 }}>{tier.name}</h3>
                <p style={{ color: '#64748b', fontSize: 13, marginBottom: 24 }}>{tier.description}</p>
                
                <div style={{ marginBottom: 24 }}>
                  {tier.price !== null ? (
                    <>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 8 }}>
                        <span style={{ fontSize: 42, fontWeight: 900, color: 'white' }}>${tier.price}</span>
                        <span style={{ color: '#64748b', fontSize: 16 }}>/month</span>
                      </div>
                      <p style={{ color: '#475569', fontSize: 12 }}>Billed monthly. Save 20% annually.</p>
                    </>
                  ) : (
                    <div style={{ fontSize: 24, fontWeight: 800, color: '#a78bfa', marginBottom: 8 }}>Custom pricing</div>
                  )}
                </div>

                <Link to="/contact" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  width: '100%', padding: '12px 24px', borderRadius: 12, marginBottom: 24,
                  background: tier.highlighted ? 'linear-gradient(135deg,#7c3aed,#4f46e5)' : 'rgba(255,255,255,0.05)',
                  color: tier.highlighted ? 'white' : '#a78bfa',
                  textDecoration: 'none', fontWeight: 700, fontSize: 14,
                  border: tier.highlighted ? 'none' : '1px solid rgba(255,255,255,0.08)',
                  boxShadow: tier.highlighted ? '0 8px 24px rgba(124,58,237,0.3)' : 'none',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  {tier.cta}
                  {tier.cta === 'Start free trial' && <ArrowRight size={14} />}
                </Link>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24 }}>
                  {tier.features.map(feature => (
                    <div key={feature} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 12 }}>
                      <Check size={16} color="#10b981" style={{ flexShrink: 0, marginTop: 2 }} />
                      <span style={{ color: '#cbd5e1', fontSize: 13 }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, color: 'white', marginBottom: 16 }}>
              Frequently asked <span className="gradient-text">questions</span>
            </h2>
          </div>

          <div className="stagger-children" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {faqs.map(({ q, a }) => (
              <details key={q} style={{ padding: 20, borderRadius: 14, border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)', transition: 'all 0.2s' }}>
                <summary style={{ cursor: 'pointer', fontSize: 15, fontWeight: 600, color: 'white', outline: 'none', userSelect: 'none' }}>
                  {q}
                </summary>
                <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.7, marginTop: 12 }}>
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px 100px' }}>
        <div className="animate-on-scroll" style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', padding: '64px 40px', borderRadius: 28, background: 'linear-gradient(135deg,rgba(124,58,237,0.1),rgba(79,70,229,0.06))', border: '1px solid rgba(124,58,237,0.25)' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, color: 'white', marginBottom: 16 }}>
            Ready to get started?
          </h2>
          <p style={{ color: '#64748b', fontSize: 17, marginBottom: 32 }}>
            14-day free trial. No credit card. Full access to all features.
          </p>
          <Link to="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 32px', borderRadius: 12,
            background: 'linear-gradient(135deg,#7c3aed,#4f46e5)',
            color: 'white', textDecoration: 'none', fontWeight: 700, fontSize: 15,
            boxShadow: '0 8px 30px rgba(124,58,237,0.4)'
          }}>
            Start your free trial <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
