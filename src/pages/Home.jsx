import { Link } from 'react-router-dom'
import { ArrowRight, Zap, TrendingUp, BarChart3, Brain, Target, Users, Star, CheckCircle } from 'lucide-react'

const stats = [
  { value: '500+', label: 'Clients worldwide' },
  { value: '98%', label: 'Satisfaction rate' },
  { value: '$10M+', label: 'Revenue generated' },
  { value: '24/7', label: 'AI support' },
]

const features = [
  { icon: Brain, title: 'AI-Powered Campaigns', desc: 'Machine learning models that predict winning creatives before you spend a dollar.', color: '#7c3aed' },
  { icon: BarChart3, title: 'Predictive Analytics', desc: 'Turn raw data into revenue forecasts, churn signals, and upsell opportunities.', color: '#0ea5e9' },
  { icon: Target, title: 'Precision Targeting', desc: 'Behavioral clusters and intent signals far beyond basic demographics.', color: '#10b981' },
  { icon: TrendingUp, title: 'Growth Automation', desc: 'End-to-end workflows that run your funnel while you focus on strategy.', color: '#f59e0b' },
  { icon: Zap, title: 'Content at Scale', desc: 'Generate thousands of on-brand assets in days, not weeks.', color: '#ec4899' },
  { icon: Users, title: 'Audience Intelligence', desc: 'Unified customer profiles that update in real time across every channel.', color: '#14b8a6' },
]

const testimonials = [
  { name: 'Sarah Chen', role: 'CMO at Vortex', text: 'MarketAI tripled our lead quality in 60 days. The predictive scoring alone saved us 40% of wasted ad spend.', rating: 5 },
  { name: 'Marcus Osei', role: 'Growth Lead at Luminary', text: 'The AI-generated content outperformed our hand-written copy. Completely changed how our team thinks about scale.', rating: 5 },
  { name: 'Priya Nair', role: 'Founder at ShiftBase', text: "We went from 200 to 2,000 monthly qualified leads in one quarter. I wish we'd found this sooner.", rating: 5 },
]

export default function Home() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="hero-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '120px 24px 100px' }}>
        {/* Floating orbs */}
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
          <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center', animation: 'fadeUp 0.9s ease both' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.35)', borderRadius: 100, padding: '6px 18px', marginBottom: 32 }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#7c3aed', animation: 'pulse-glow 2s infinite' }} />
              <span style={{ color: '#a78bfa', fontSize: 13, fontWeight: 600, letterSpacing: '0.05em' }}>AI-POWERED GROWTH PLATFORM</span>
            </div>

            <h1 style={{ fontSize: 'clamp(40px, 7vw, 76px)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-2px', marginBottom: 28, color: 'white' }}>
              Marketing that<br />
              <span className="gradient-text">thinks for itself</span>
            </h1>

            <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: '#94a3b8', lineHeight: 1.75, maxWidth: 580, margin: '0 auto 44px' }}>
              Predictive campaigns, AI-generated content, and real-time audience intelligence — all in one platform built for modern growth teams.
            </p>

            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', borderRadius: 12, background: 'linear-gradient(135deg,#7c3aed,#4f46e5)', color: 'white', textDecoration: 'none', fontWeight: 700, fontSize: 15, boxShadow: '0 8px 30px rgba(124,58,237,0.45)', transition: 'transform 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.transform='translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}>
                Start free trial <ArrowRight size={16} />
              </Link>
              <Link to="/dashboard" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 12, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'white', textDecoration: 'none', fontWeight: 600, fontSize: 15, transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background='rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor='rgba(124,58,237,0.4)' }}
                onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.12)' }}>
                <Zap size={15} /> Live demo
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="stagger-children" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: 20, maxWidth: 700, margin: '80px auto 0' }}>
            {stats.map(s => (
              <div key={s.label} className="glass" style={{ padding: '22px 16px', borderRadius: 16, textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(26px,4vw,34px)', fontWeight: 900, color: 'white', letterSpacing: '-1px', marginBottom: 6 }}
                  className="gradient-text">{s.value}</div>
                <div style={{ color: '#64748b', fontSize: 13 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="grid-bg" style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.25)', borderRadius: 100, padding: '5px 16px', marginBottom: 20 }}>
              <Zap size={13} color="#a78bfa" />
              <span style={{ color: '#a78bfa', fontSize: 13, fontWeight: 500 }}>Platform capabilities</span>
            </div>
            <h2 style={{ fontSize: 'clamp(28px,4vw,46px)', fontWeight: 900, color: 'white', letterSpacing: '-1.2px', marginBottom: 16 }}>
              Everything your growth team needs
            </h2>
            <p style={{ color: '#64748b', fontSize: 17, maxWidth: 520, margin: '0 auto' }}>
              Six core capabilities. One AI layer that connects them all.
            </p>
          </div>

          <div className="stagger-children" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 24 }}>
            {features.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="glass" style={{ padding: '28px', borderRadius: 18, cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = color+'55'; e.currentTarget.style.transform='translateY(-4px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.08)'; e.currentTarget.style.transform='translateY(0)' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: color+'18', border: '1px solid '+color+'33', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                  <Icon size={20} color={color} />
                </div>
                <h3 style={{ color: 'white', fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{title}</h3>
                <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Social proof ── */}
      <section style={{ padding: '100px 24px', background: '#080810' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 style={{ fontSize: 'clamp(28px,4vw,46px)', fontWeight: 900, color: 'white', letterSpacing: '-1.2px', marginBottom: 16 }}>
              Trusted by growth teams at scale
            </h2>
            <p style={{ color: '#64748b', fontSize: 17 }}>Real results from real companies.</p>
          </div>

          <div className="stagger-children" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 24 }}>
            {testimonials.map(({ name, role, text, rating }) => (
              <div key={name} className="glass" style={{ padding: '28px', borderRadius: 18 }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(124,58,237,0.35)'; e.currentTarget.style.transform='translateY(-4px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.08)'; e.currentTarget.style.transform='translateY(0)' }}>
                <div style={{ display: 'flex', gap: 2, marginBottom: 16 }}>
                  {Array(rating).fill(0).map((_, i) => <Star key={i} size={14} color="#f59e0b" fill="#f59e0b" />)}
                </div>
                <p style={{ color: '#94a3b8', fontSize: 15, lineHeight: 1.75, marginBottom: 22 }}>"{text}"</p>
                <div>
                  <div style={{ color: 'white', fontWeight: 700, fontSize: 14 }}>{name}</div>
                  <div style={{ color: '#64748b', fontSize: 13 }}>{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '100px 24px', background: '#080810' }}>
        <div className="animate-on-scroll" style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', padding: '64px 40px', borderRadius: 28, background: 'linear-gradient(135deg,rgba(124,58,237,0.1),rgba(79,70,229,0.06))', border: '1px solid rgba(124,58,237,0.25)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(124,58,237,0.15)', borderRadius: 100, padding: '5px 14px', marginBottom: 24 }}>
            <CheckCircle size={13} color="#10b981" />
            <span style={{ color: '#a78bfa', fontSize: 13, fontWeight: 500 }}>No credit card required</span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 900, color: 'white', letterSpacing: '-1px', marginBottom: 16 }}>
            Ready to grow faster?
          </h2>
          <p style={{ color: '#64748b', fontSize: 17, marginBottom: 36 }}>
            Join 500+ companies using AI to outgrow their competition.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', borderRadius: 12, background: 'linear-gradient(135deg,#7c3aed,#4f46e5)', color: 'white', textDecoration: 'none', fontWeight: 700, fontSize: 15, boxShadow: '0 8px 30px rgba(124,58,237,0.4)' }}>
              Get started free <ArrowRight size={16} />
            </Link>
            <Link to="/pricing" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 12, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8', textDecoration: 'none', fontWeight: 600, fontSize: 15 }}>
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
