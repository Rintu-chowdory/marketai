import { useState } from 'react'
import { Clock, ArrowRight, BookOpen, TrendingUp, Brain, BarChart3, Zap, Target } from 'lucide-react'
import { Link } from 'react-router-dom'

const posts = [
  {
    title: 'How AI is Rewriting the Rules of B2B Lead Generation in 2024',
    excerpt: 'Traditional lead gen is dying. Discover how machine learning models are identifying buying intent 3x earlier than human SDRs.',
    category: 'AI Marketing', icon: Brain, color: '#7c3aed',
    date: 'Jun 12, 2024', readTime: '8 min read', featured: true,
  },
  {
    title: 'The Predictive Analytics Playbook: Turning Data into Revenue',
    excerpt: 'A step-by-step guide to building models that forecast churn, upsell opportunities, and campaign performance before they happen.',
    category: 'Data & Analytics', icon: BarChart3, color: '#0ea5e9',
    date: 'Jun 8, 2024', readTime: '11 min read', featured: false,
  },
  {
    title: 'Content at Scale: How We Generated 2,000 On-Brand Assets in 30 Days',
    excerpt: 'The exact AI stack and prompt engineering framework we used to 10x content output for a Fortune 500 client without sacrificing quality.',
    category: 'Content Creation', icon: Zap, color: '#10b981',
    date: 'Jun 3, 2024', readTime: '6 min read', featured: false,
  },
  {
    title: 'Audience Segmentation 3.0: Moving Beyond Demographics',
    excerpt: 'Behavioral clusters, intent signals, and psychographic modeling — the new trifecta of precision targeting that top brands are using.',
    category: 'AI Marketing', icon: Target, color: '#7c3aed',
    date: 'May 28, 2024', readTime: '9 min read', featured: false,
  },
  {
    title: 'Why Your Marketing Dashboard Is Lying to You',
    excerpt: 'Vanity metrics are costing companies millions. Here\'s how to rebuild your analytics stack around the numbers that actually move revenue.',
    category: 'Data & Analytics', icon: TrendingUp, color: '#0ea5e9',
    date: 'May 22, 2024', readTime: '7 min read', featured: false,
  },
  {
    title: 'The SEO Content Engine: Rank #1 Without Writing Everything Yourself',
    excerpt: 'How to combine AI generation with human editing to produce content that outranks competitors and actually converts readers.',
    category: 'Content Creation', icon: BookOpen, color: '#10b981',
    date: 'May 15, 2024', readTime: '10 min read', featured: false,
  },
]

const cats = ['All', 'AI Marketing', 'Data & Analytics', 'Content Creation']

export default function Blog() {
  const [active, setActive] = useState('All')
  const shown = active === 'All' ? posts : posts.filter(p => p.category === active)
  const [featured, ...rest] = shown

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Header */}
      <section className="grid-bg" style={{ padding: '80px 24px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 300, background: 'radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 680, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)', borderRadius: 100, padding: '6px 16px', marginBottom: 24 }}>
            <BookOpen size={13} color="#a78bfa" />
            <span style={{ color: '#a78bfa', fontSize: 13, fontWeight: 500 }}>Blog & Resources</span>
          </div>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 58px)', fontWeight: 900, color: 'white', letterSpacing: '-1.5px', marginBottom: 16 }}>
            Insights from the <span className="gradient-text">AI Frontier</span>
          </h1>
          <p style={{ color: '#64748b', fontSize: 17, lineHeight: 1.7 }}>
            Strategy, data, and the real-world AI moves that are separating market leaders from everyone else.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section style={{ padding: '28px 24px 0', display: 'flex', justifyContent: 'center', gap: 8, flexWrap: 'wrap' }}>
        {cats.map(c => (
          <button key={c} onClick={() => setActive(c)} style={{
            padding: '8px 18px', borderRadius: 100, fontSize: 13, fontWeight: 500, cursor: 'pointer', border: 'none', transition: 'all 0.2s',
            background: active === c ? 'linear-gradient(135deg,#7c3aed,#4f46e5)' : 'rgba(255,255,255,0.04)',
            color: active === c ? 'white' : '#64748b',
            boxShadow: active === c ? '0 4px 15px rgba(124,58,237,0.3)' : 'none'
          }}>{c}</button>
        ))}
      </section>

      {/* Content */}
      <section style={{ padding: '48px 24px 100px', maxWidth: 1200, margin: '0 auto' }}>
        {featured && (
          <div className="glass" style={{ padding: '36px', borderRadius: 20, marginBottom: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = featured.color + '44'; e.currentTarget.style.transform = 'translateY(-3px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(0)' }}
            style2={{ transition: 'all 0.3s' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <div style={{ width: 28, height: 28, borderRadius: 6, background: featured.color + '22', border: '1px solid ' + featured.color + '33', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <featured.icon size={13} color={featured.color} />
                </div>
                <span style={{ color: featured.color, fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{featured.category}</span>
                <span style={{ color: '#374151', fontSize: 12 }}>· Featured</span>
              </div>
              <h2 style={{ color: 'white', fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 800, lineHeight: 1.3, marginBottom: 16, letterSpacing: '-0.5px' }}>{featured.title}</h2>
              <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>{featured.excerpt}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span style={{ color: '#374151', fontSize: 12 }}>{featured.date}</span>
                <span style={{ color: '#374151', fontSize: 12 }}>·</span>
                <span style={{ color: '#374151', fontSize: 12 }}><Clock size={11} style={{ display: 'inline', marginRight: 4 }} />{featured.readTime}</span>
              </div>
            </div>
            <div style={{ background: 'linear-gradient(135deg, ' + featured.color + '11, ' + featured.color + '05)', border: '1px solid ' + featured.color + '22', borderRadius: 14, height: 220, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <featured.icon size={64} color={featured.color} style={{ opacity: 0.3 }} />
            </div>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
          {rest.map(post => (
            <div key={post.title} className="glass" style={{ padding: 24, borderRadius: 16, transition: 'all 0.3s', cursor: 'default' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = post.color + '44'; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(0)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <div style={{ width: 26, height: 26, borderRadius: 6, background: post.color + '22', border: '1px solid ' + post.color + '33', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <post.icon size={12} color={post.color} />
                </div>
                <span style={{ color: post.color, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{post.category}</span>
              </div>
              <h3 style={{ color: 'white', fontSize: 16, fontWeight: 700, lineHeight: 1.4, marginBottom: 10 }}>{post.title}</h3>
              <p style={{ color: '#64748b', fontSize: 13, lineHeight: 1.7, marginBottom: 18 }}>{post.excerpt}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ color: '#374151', fontSize: 11 }}>{post.date} · <Clock size={10} style={{ display: 'inline' }} /> {post.readTime}</div>
                <ArrowRight size={14} color={post.color} />
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="glass" style={{ marginTop: 60, padding: '40px', borderRadius: 20, textAlign: 'center', background: 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(79,70,229,0.04))', border: '1px solid rgba(124,58,237,0.2)' }}>
          <h3 style={{ color: 'white', fontSize: 22, fontWeight: 800, marginBottom: 10 }}>Get the weekly AI marketing digest</h3>
          <p style={{ color: '#64748b', fontSize: 14, marginBottom: 24 }}>Tactics, case studies, and tool breakdowns — every Tuesday. No fluff.</p>
          <div style={{ display: 'flex', gap: 10, maxWidth: 420, margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
            <input placeholder="your@email.com" style={{ flex: 1, minWidth: 200, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '11px 16px', color: 'white', fontSize: 14, outline: 'none' }} />
            <button style={{ padding: '11px 22px', borderRadius: 8, border: 'none', cursor: 'pointer', background: 'linear-gradient(135deg,#7c3aed,#4f46e5)', color: 'white', fontSize: 14, fontWeight: 600, whiteSpace: 'nowrap' }}>
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
