import { Check, Zap, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const plans = [
  {
    name: 'Starter',
    price: { monthly: 49, yearly: 39 },
    desc: 'Perfect for small brands getting started with AI marketing.',
    color: '#0ea5e9',
    features: [
      'Up to 3 campaigns/month',
      'Basic AI content generation',
      'Email marketing automation',
      'Standard analytics dashboard',
      '5,000 contacts',
      'Email support',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Growth',
    price: { monthly: 149, yearly: 119 },
    desc: 'For growing teams that need full AI-powered marketing power.',
    color: '#7c3aed',
    features: [
      'Unlimited campaigns',
      'Advanced AI content engine',
      'Multi-channel automation',
      'Predictive analytics',
      '50,000 contacts',
      'A/B testing suite',
      'Priority support',
      'Custom integrations',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: { monthly: null, yearly: null },
    desc: 'Custom solutions for large teams with advanced requirements.',
    color: '#10b981',
    features: [
      'Everything in Growth',
      'Dedicated AI model training',
      'Custom AI workflows',
      'White-label options',
      'Unlimited contacts',
      'SLA guarantee',
      'Dedicated account manager',
      'On-premise deployment option',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

const faqs = [
  { q: 'Is there a free trial?', a: 'Yes — Growth plan comes with a 14-day free trial. No credit card required.' },
  { q: 'Can I switch plans?', a: 'Anytime. Upgrades are instant; downgrades take effect at the next billing cycle.' },
  { q: 'What payment methods do you accept?', a: 'All major credit/debit cards, plus invoicing for Enterprise plans.' },
  { q: 'Do you offer refunds?', a: '30-day money-back guarantee on all paid plans, no questions asked.' },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Header */}
      <section className="grid-bg" style={{ padding: '80px 24px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 350, background: 'radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 680, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)', borderRadius: 100, padding: '6px 16px', marginBottom: 24 }}>
            <Zap size={13} color="#a78bfa" />
            <span style={{ color: '#a78bfa', fontSize: 13, fontWeight: 500 }}>Pricing</span>
          </div>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 58px)', fontWeight: 900, color: 'white', letterSpacing: '-1.5px', marginBottom: 16 }}>
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h1>
          <p style={{ color: '#64748b', fontSize: 17, lineHeight: 1.7, marginBottom: 32 }}>
            No hidden fees, no surprises. Start free, scale when you're ready.
          </p>

          {/* Toggle */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 100, padding: '6px 8px' }}>
            <button onClick={() => setYearly(false)} style={{ padding: '6px 16px', borderRadius: 100, border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 600, background: !yearly ? 'white' : 'transparent', color: !yearly ? '#0a0a0a' : '#64748b', transition: 'all 0.2s' }}>Monthly</button>
            <button onClick={() => setYearly(true)} style={{ padding: '6px 16px', borderRadius: 100, border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 600, background: yearly ? 'white' : 'transparent', color: yearly ? '#0a0a0a' : '#64748b', transition: 'all 0.2s' }}>
              Yearly <span style={{ color: '#10b981', fontSize: 11, marginLeft: 4 }}>-20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section style={{ padding: '40px 24px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, alignItems: 'start' }}>
          {plans.map(({ name, price, desc, color, features, cta, popular }) => (
            <div key={name} className="glass" style={{
              padding: 32, borderRadius: 20, position: 'relative',
              border: popular ? '1px solid rgba(124,58,237,0.5)' : '1px solid rgba(255,255,255,0.08)',
              background: popular ? 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(79,70,229,0.04))' : undefined,
              transform: popular ? 'scale(1.02)' : 'scale(1)'
            }}>
              {popular && (
                <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg,#7c3aed,#4f46e5)', color: 'white', fontSize: 11, fontWeight: 700, padding: '4px 14px', borderRadius: 100, whiteSpace: 'nowrap' }}>
                  MOST POPULAR
                </div>
              )}
              <div style={{ marginBottom: 20 }}>
                <div style={{ color: color, fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>{name}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 8 }}>
                  {price.monthly ? (
                    <>
                      <span style={{ fontSize: 48, fontWeight: 900, color: 'white', letterSpacing: '-2px' }}>${yearly ? price.yearly : price.monthly}</span>
                      <span style={{ color: '#64748b', fontSize: 14 }}>/mo</span>
                    </>
                  ) : (
                    <span style={{ fontSize: 36, fontWeight: 800, color: 'white' }}>Custom</span>
                  )}
                </div>
                <p style={{ color: '#64748b', fontSize: 13, lineHeight: 1.6 }}>{desc}</p>
              </div>

              <div style={{ marginBottom: 28 }}>
                {features.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
                    <Check size={14} color={color} style={{ marginTop: 2, flexShrink: 0 }} />
                    <span style={{ color: '#94a3b8', fontSize: 13 }}>{f}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact" style={{
                textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                padding: '12px', borderRadius: 10, fontSize: 14, fontWeight: 600, width: '100%',
                background: popular ? 'linear-gradient(135deg,#7c3aed,#4f46e5)' : 'rgba(255,255,255,0.06)',
                color: popular ? 'white' : '#e2e8f0',
                border: popular ? 'none' : '1px solid rgba(255,255,255,0.1)',
                boxShadow: popular ? '0 6px 20px rgba(124,58,237,0.35)' : 'none',
                transition: 'all 0.2s'
              }}>
                {cta} {popular && <ArrowRight size={14} />}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '40px 24px 100px', background: 'rgba(124,58,237,0.03)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: 'white', letterSpacing: '-0.5px', textAlign: 'center', marginBottom: 40 }}>Common Questions</h2>
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="glass" style={{ marginBottom: 12, borderRadius: 12, overflow: 'hidden' }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ width: '100%', padding: '18px 22px', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left' }}>
                <span style={{ color: 'white', fontSize: 15, fontWeight: 600 }}>{q}</span>
                <span style={{ color: '#7c3aed', fontSize: 20, fontWeight: 300, transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0, marginLeft: 16 }}>+</span>
              </button>
              {openFaq === i && (
                <div style={{ padding: '0 22px 18px', color: '#64748b', fontSize: 14, lineHeight: 1.7 }}>{a}</div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
