import { ArrowRight, Calendar, Clock, Zap, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

const featured = {
  title: '5 AI Marketing Tactics That Are Delivering 3x ROI',
  category: 'Strategy',
  date: 'Mar 15, 2024',
  readTime: '8 min read',
  excerpt: 'Discover how leading brands are using AI to predict winning campaigns before they launch. Includes real case studies and implementation playbooks.',
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80'
}

const posts = [
  {
    title: 'Conversion Rate Optimization with Predictive Analytics',
    category: 'Analytics',
    date: 'Mar 12, 2024',
    readTime: '6 min',
    excerpt: 'Learn how to identify friction points in your funnel and predict which optimizations will move the needle.',
    color: '#0ea5e9'
  },
  {
    title: 'The Complete Guide to AI-Generated Marketing Content',
    category: 'Content',
    date: 'Mar 8, 2024',
    readTime: '10 min',
    excerpt: 'Everything you need to know about using AI to scale content production without sacrificing quality or brand voice.',
    color: '#10b981'
  },
  {
    title: 'Email Segmentation Strategies for 2024',
    category: 'Email Marketing',
    date: 'Mar 5, 2024',
    readTime: '7 min',
    excerpt: 'Go beyond basic demographics. Learn behavioral segmentation techniques that drive real engagement.',
    color: '#f59e0b'
  },
  {
    title: 'Using Customer Data Platforms for Growth',
    category: 'Data & Analytics',
    date: 'Mar 1, 2024',
    readTime: '9 min',
    excerpt: 'CDPs are changing how teams understand customers. Here's how to implement and get immediate results.',
    color: '#ec4899'
  },
  {
    title: 'AI-Powered Lead Scoring: When and How',
    category: 'Sales',
    date: 'Feb 28, 2024',
    readTime: '6 min',
    excerpt: 'Automate lead qualification and focus your team on the prospects most likely to convert.',
    color: '#14b8a6'
  },
  {
    title: 'Measuring Marketing Attribution in 2024',
    category: 'Measurement',
    date: 'Feb 24, 2024',
    readTime: '8 min',
    excerpt: 'Navigate post-cookie tracking and get a clear picture of which campaigns actually drive revenue.',
    color: '#7c3aed'
  }
]

export default function Blog() {
  return (
    <div style={{ minHeight: '100vh', background: '#080810', paddingTop: 70 }}>
      <section style={{ padding: '80px 24px 60px', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="animate-on-scroll" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.35)', borderRadius: 100, padding: '6px 18px', marginBottom: 24 }}>
            <Zap size={13} color="#a78bfa" />
            <span style={{ color: '#a78bfa', fontSize: 13, fontWeight: 600 }}>RESOURCES & INSIGHTS</span>
          </div>
          <h1 className="animate-on-scroll" style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 900, color: 'white', letterSpacing: '-1.5px', marginBottom: 16 }}>
            Articles, guides, and <span className="gradient-text">best practices</span>
          </h1>
          <p className="animate-on-scroll" style={{ color: '#64748b', fontSize: 17, lineHeight: 1.7 }}>
            Learn from our team and industry experts. Get actionable strategies for growing your business with AI.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div
            className="animate-on-scroll glass"
            style={{
              borderRadius: 20,
              overflow: 'hidden',
              border: '1px solid rgba(124,58,237,0.3)',
              background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(79,70,229,0.05))',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              cursor: 'default',
              transition: 'all 0.3s'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <img
              src={featured.image}
              alt={featured.title}
              style={{ width: '100%', height: 300, objectFit: 'cover' }}
            />
            <div style={{ padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', gap: 16, marginBottom: 16, flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#a78bfa', fontSize: 12, fontWeight: 600 }}>
                  <span style={{ color: '#7c3aed', background: 'rgba(124,58,237,0.2)', padding: '4px 10px', borderRadius: 6 }}>
                    {featured.category}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#64748b', fontSize: 12 }}>
                  <Calendar size={14} />
                  {featured.date}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#64748b', fontSize: 12 }}>
                  <Clock size={14} />
                  {featured.readTime}
                </div>
              </div>
              <h2 style={{ fontSize: 28, fontWeight: 800, color: 'white', marginBottom: 16, lineHeight: 1.3 }}>
                {featured.title}
              </h2>
              <p style={{ color: '#94a3b8', fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>
                {featured.excerpt}
              </p>
              <div style={{ display: 'flex', gap: 12 }}>
                <button style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '11px 22px', borderRadius: 10,
                  background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.4)',
                  color: '#a78bfa', fontSize: 14, fontWeight: 600,
                  cursor: 'pointer', transition: 'all 0.2s'
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(124,58,237,0.25)'; e.currentTarget.style.transform = 'translateX(4px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(124,58,237,0.15)'; e.currentTarget.style.transform = 'translateX(0)' }}
                >
                  Read article <ExternalLink size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="animate-on-scroll" style={{ marginBottom: 60 }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: 'white' }}>Latest Articles</h2>
          </div>

          <div className="stagger-children" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
            {posts.map((post) => (
              <div
                key={post.title}
                className="animate-on-scroll glass"
                style={{
                  padding: 24,
                  borderRadius: 16,
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = post.color + '55'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <span style={{ background: post.color + '22', color: post.color, display: 'inline-block', width: 'fit-content', padding: '4px 10px', borderRadius: 6, fontSize: 11, fontWeight: 700, marginBottom: 12 }}>
                  {post.category}
                </span>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: 'white', marginBottom: 12, lineHeight: 1.5 }}>
                  {post.title}
                </h3>
                <p style={{ color: '#64748b', fontSize: 13, lineHeight: 1.6, marginBottom: 16, flex: 1 }}>
                  {post.excerpt}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ display: 'flex', gap: 12, fontSize: 12, color: '#64748b' }}>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <ArrowRight size={14} color={post.color} style={{ transition: 'transform 0.2s' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px 100px' }}>
        <div className="animate-on-scroll" style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', padding: '64px 40px', borderRadius: 28, background: 'linear-gradient(135deg,rgba(124,58,237,0.1),rgba(79,70,229,0.06))', border: '1px solid rgba(124,58,237,0.25)' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, color: 'white', marginBottom: 16 }}>
            Get weekly insights
          </h2>
          <p style={{ color: '#64748b', fontSize: 17, marginBottom: 32 }}>
            Join 5,000+ marketers getting strategies, insights, and case studies delivered to their inbox.
          </p>
          <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
            <input
              type="email"
              placeholder="you@company.com"
              style={{
                flex: 1,
                padding: '12px 18px',
                borderRadius: 10,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'white',
                fontSize: 14,
                outline: 'none'
              }}
            />
            <button style={{
              padding: '12px 28px',
              borderRadius: 10,
              background: 'linear-gradient(135deg,#7c3aed,#4f46e5)',
              color: 'white',
              border: 'none',
              fontWeight: 700,
              fontSize: 14,
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Subscribe
            </button>
          </div>
          <p style={{ color: '#475569', fontSize: 12 }}>No spam, unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  )
}
