import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Users, Brain, BarChart3, Target, Zap, Star, ChevronRight } from 'lucide-react'

const stats = [
  { value: '500+', label: 'Clients Worldwide' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '10M+', label: 'Revenue Generated' },
  { value: '24/7', label: 'AI-Powered Support' },
]

const features = [
  { icon: Brain, title: 'AI-Driven Insights', desc: 'Leverage machine learning to understand your audience like never before and predict market trends.' },
  { icon: TrendingUp, title: 'Growth Optimization', desc: 'Data-backed strategies that consistently deliver measurable results and accelerate your growth.' },
  { icon: Target, title: 'Audience Targeting', desc: 'Precision targeting that connects your brand with the right customers at the right moment.' },
  { icon: BarChart3, title: 'Real-Time Analytics', desc: 'Monitor and adapt your campaigns with instant performance data and actionable dashboards.' },
]

const testimonials = [
  { quote: 'MarketAI transformed our digital presence completely. The results exceeded all expectations.', name: 'Sarah Chen', role: 'CEO, TechStart Inc.' },
  { quote: 'The AI-powered insights gave us an edge over competitors we never thought possible.', name: 'Michael Torres', role: 'Marketing Director, Nova Corp' },
  { quote: 'Professional, innovative, and results-driven. The best marketing decision we ever made.', name: 'Emma Williams', role: 'Founder, Bloom Studios' },
]

const services = [
  { icon: Brain, label: 'Marketing & Sales', color: '#7c3aed' },
  { icon: BarChart3, label: 'Data & Analytics', color: '#0ea5e9' },
  { icon: Zap, label: 'Content Creation', color: '#10b981' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="grid-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 70 }}>
        {/* Glow blobs */}
        <div style={{ position: 'absolute', top: '15%', left: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '20%', right: '10%', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,70,229,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px', textAlign: 'center', position: 'relative' }}>
          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)', borderRadius: 100, padding: '6px 16px', marginBottom: 32 }}>
            <Zap size={13} color="#a78bfa" />
            <span style={{ color: '#a78bfa', fontSize: 13, fontWeight: 500 }}>AI-Powered Marketing Solutions</span>
          </div>

          <h1 style={{ fontSize: 'clamp(42px, 7vw, 80px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 24, color: 'white', letterSpacing: '-2px' }}>
            Elevate Your Brand<br />
            <span className="gradient-text">With Intelligence</span>
          </h1>

          <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: '#64748b', maxWidth: 580, margin: '0 auto 40px', lineHeight: 1.7 }}>
            We combine cutting-edge artificial intelligence with creative excellence to deliver marketing strategies that drive unprecedented growth and engagement.
          </p>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 80 }}>
            <Link to="/contact" style={{
              textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8,
              padding: '14px 28px', borderRadius: 10, fontSize: 15, fontWeight: 600,
              background: 'linear-gradient(135deg,#7c3aed,#4f46e5)', color: 'white',
              boxShadow: '0 8px 25px rgba(124,58,237,0.4)'
            }}>
              Start Your Journey <ArrowRight size={16} />
            </Link>
            <Link to="/portfolio" style={{
              textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8,
              padding: '14px 28px', borderRadius: 10, fontSize: 15, fontWeight: 600,
              background: 'rgba(255,255,255,0.04)', color: 'white', border: '1px solid rgba(255,255,255,0.1)'
            }}>
              View Our Work
            </Link>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 2, maxWidth: 700, margin: '0 auto' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ padding: '20px 16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12 }}>
                <div style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: 'white', letterSpacing: '-1px' }}>{s.value}</div>
                <div style={{ color: '#64748b', fontSize: 12, marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service tabs */}
      <section style={{ padding: '40px 24px', background: 'rgba(124,58,237,0.04)', borderTop: '1px solid rgba(124,58,237,0.1)', borderBottom: '1px solid rgba(124,58,237,0.1)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
          {services.map(({ icon: Icon, label, color }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 24px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10 }}>
              <Icon size={16} color={color} />
              <span style={{ color: '#e2e8f0', fontSize: 14, fontWeight: 500 }}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose */}
      <section style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, color: 'white', letterSpacing: '-1px', marginBottom: 16 }}>Why Choose MarketAI</h2>
            <p style={{ color: '#64748b', fontSize: 17, maxWidth: 500, margin: '0 auto' }}>
              We don't just follow trends — we create them. Our approach combines human creativity with AI precision.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
            {features.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="glass" style={{ padding: 28, borderRadius: 16, transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(124,58,237,0.3)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'linear-gradient(135deg,rgba(124,58,237,0.2),rgba(79,70,229,0.2))', border: '1px solid rgba(124,58,237,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                  <Icon size={20} color="#a78bfa" />
                </div>
                <h3 style={{ color: 'white', fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{title}</h3>
                <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '80px 24px', background: 'rgba(124,58,237,0.03)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: 'white', letterSpacing: '-1px', marginBottom: 12 }}>Client Testimonials</h2>
            <p style={{ color: '#64748b', fontSize: 16 }}>Don't just take our word for it. Here's what our clients have to say.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {testimonials.map((t, i) => (
              <div key={i} className="glass" style={{ padding: 28, borderRadius: 16 }}>
                <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                  {[1,2,3,4,5].map(s => <Star key={s} size={14} color="#f59e0b" fill="#f59e0b" />)}
                </div>
                <p style={{ color: '#94a3b8', fontSize: 15, lineHeight: 1.7, marginBottom: 20, fontStyle: 'italic' }}>"{t.quote}"</p>
                <div>
                  <div style={{ color: 'white', fontSize: 14, fontWeight: 600 }}>{t.name}</div>
                  <div style={{ color: '#7c3aed', fontSize: 12, marginTop: 2 }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <div className="glass" style={{ padding: '60px 40px', borderRadius: 24, background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(79,70,229,0.05))', border: '1px solid rgba(124,58,237,0.2)' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: 'white', letterSpacing: '-1px', marginBottom: 16 }}>
              Ready to Transform<br />Your Marketing?
            </h2>
            <p style={{ color: '#64748b', fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>
              Join hundreds of forward-thinking brands that have elevated their digital presence with MarketAI.
            </p>
            <Link to="/contact" style={{
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 32px', borderRadius: 10, fontSize: 15, fontWeight: 600,
              background: 'linear-gradient(135deg,#7c3aed,#4f46e5)', color: 'white',
              boxShadow: '0 8px 25px rgba(124,58,237,0.4)'
            }}>
              Get Your Free Consultation <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
