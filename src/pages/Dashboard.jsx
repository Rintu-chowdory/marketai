import { useState } from 'react'
import { TrendingUp, TrendingDown, Users, MousePointer, DollarSign, Zap, BarChart3, Brain, Target, RefreshCw } from 'lucide-react'

const metrics = [
  { label: 'Total Revenue', value: '$124,580', change: '+18.4%', up: true, icon: DollarSign, color: '#10b981' },
  { label: 'Active Campaigns', value: '24', change: '+3 this week', up: true, icon: Zap, color: '#7c3aed' },
  { label: 'Leads Generated', value: '3,847', change: '+22.1%', up: true, icon: Users, color: '#0ea5e9' },
  { label: 'Avg. CTR', value: '4.73%', change: '-0.2%', up: false, icon: MousePointer, color: '#f59e0b' },
]

const campaigns = [
  { name: 'Q2 AI Product Launch', status: 'Live', budget: '$12,400', spend: '$8,920', leads: 847, score: 94, color: '#10b981' },
  { name: 'Brand Awareness - EU', status: 'Live', budget: '$8,000', spend: '$5,100', leads: 412, score: 78, color: '#10b981' },
  { name: 'Retargeting - US West', status: 'Paused', budget: '$5,000', spend: '$4,800', leads: 263, score: 61, color: '#f59e0b' },
  { name: 'SEO Content Push', status: 'Live', budget: '$3,200', spend: '$1,400', leads: 192, score: 87, color: '#10b981' },
  { name: 'LinkedIn B2B Outreach', status: 'Draft', budget: '$6,000', spend: '$0', leads: 0, score: null, color: '#64748b' },
]

const insights = [
  { icon: Brain, color: '#7c3aed', text: 'Campaign "Q2 AI Product Launch" is 34% above projected ROAS — consider increasing budget by $3K.' },
  { icon: Target, color: '#0ea5e9', text: 'EU audience segment 25–34 is converting 2x better than average. Recommend a dedicated creative set.' },
  { icon: TrendingUp, color: '#10b981', text: 'Tuesday 9–11am sends are outperforming by 41%. Rescheduling 3 queued campaigns.' },
]

const barData = [62, 48, 75, 83, 55, 90, 72, 88, 65, 94, 71, 85]
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

export default function Dashboard() {
  const [refreshing, setRefreshing] = useState(false)

  const handleRefresh = () => {
    setRefreshing(true)
    setTimeout(() => setRefreshing(false), 1200)
  }

  return (
    <div style={{ paddingTop: 70 }}>
      <section className="grid-bg" style={{ minHeight: '100vh', padding: '40px 24px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)', borderRadius: 100, padding: '5px 14px', marginBottom: 10 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981' }} />
                <span style={{ color: '#a78bfa', fontSize: 12, fontWeight: 500 }}>Live Demo Dashboard</span>
              </div>
              <h1 style={{ fontSize: 28, fontWeight: 800, color: 'white', letterSpacing: '-0.5px' }}>Marketing Command Center</h1>
              <p style={{ color: '#64748b', fontSize: 13, marginTop: 4 }}>Last updated: just now · AI models refreshing every 15 min</p>
            </div>
            <button onClick={handleRefresh} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px', borderRadius: 10, border: '1px solid rgba(124,58,237,0.3)', background: 'rgba(124,58,237,0.08)', color: '#a78bfa', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
              <RefreshCw size={14} style={{ animation: refreshing ? 'spin 0.8s linear infinite' : 'none' }} /> Refresh
            </button>
          </div>

          {/* KPI Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 28 }}>
            {metrics.map(({ label, value, change, up, icon: Icon, color }) => (
              <div key={label} className="glass" style={{ padding: '20px 22px', borderRadius: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <span style={{ color: '#64748b', fontSize: 12, fontWeight: 600 }}>{label}</span>
                  <div style={{ width: 30, height: 30, borderRadius: 8, background: color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={14} color={color} />
                  </div>
                </div>
                <div style={{ fontSize: 26, fontWeight: 800, color: 'white', letterSpacing: '-0.5px', marginBottom: 6 }}>{value}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  {up ? <TrendingUp size={12} color="#10b981" /> : <TrendingDown size={12} color="#ef4444" />}
                  <span style={{ color: up ? '#10b981' : '#ef4444', fontSize: 12, fontWeight: 600 }}>{change}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 20, marginBottom: 20 }}>
            {/* Bar chart */}
            <div className="glass" style={{ padding: '24px', borderRadius: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <div>
                  <h3 style={{ color: 'white', fontSize: 15, fontWeight: 700 }}>Revenue Performance</h3>
                  <p style={{ color: '#64748b', fontSize: 12, marginTop: 2 }}>Monthly · AI-projected</p>
                </div>
                <BarChart3 size={16} color="#7c3aed" />
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 140 }}>
                {barData.map((v, i) => (
                  <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                    <div style={{ width: '100%', borderRadius: 4, background: i === 11 ? 'linear-gradient(to top,#7c3aed,#a78bfa)' : 'rgba(124,58,237,0.3)', height: v + '%', transition: 'all 0.5s', minHeight: 4 }} />
                    <span style={{ color: '#374151', fontSize: 9 }}>{months[i]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI score ring */}
            <div className="glass" style={{ padding: '24px', borderRadius: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <Brain size={16} color="#7c3aed" style={{ marginBottom: 12 }} />
              <p style={{ color: '#64748b', fontSize: 12, marginBottom: 16 }}>Overall AI Score</p>
              <div style={{ position: 'relative', width: 120, height: 120 }}>
                <svg width="120" height="120" style={{ transform: 'rotate(-90deg)' }}>
                  <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(124,58,237,0.15)" strokeWidth="10" />
                  <circle cx="60" cy="60" r="50" fill="none" stroke="url(#grad)" strokeWidth="10"
                    strokeDasharray={`${2 * Math.PI * 50 * 0.87} ${2 * Math.PI * 50}`} strokeLinecap="round" />
                  <defs>
                    <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#7c3aed" />
                      <stop offset="100%" stopColor="#4f46e5" />
                    </linearGradient>
                  </defs>
                </svg>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: 26, fontWeight: 900, color: 'white' }}>87</span>
                  <span style={{ fontSize: 11, color: '#64748b' }}>/ 100</span>
                </div>
              </div>
              <p style={{ color: '#10b981', fontSize: 12, fontWeight: 600, marginTop: 12 }}>Excellent Performance</p>
            </div>
          </div>

          {/* Campaigns table */}
          <div className="glass" style={{ borderRadius: 16, overflow: 'hidden', marginBottom: 20 }}>
            <div style={{ padding: '18px 22px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ color: 'white', fontSize: 15, fontWeight: 700 }}>Active Campaigns</h3>
              <span style={{ color: '#64748b', fontSize: 12 }}>{campaigns.length} total</span>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  {['Campaign', 'Status', 'Budget', 'Spent', 'Leads', 'AI Score'].map(h => (
                    <th key={h} style={{ padding: '10px 16px', textAlign: 'left', color: '#374151', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {campaigns.map((c, i) => (
                  <tr key={c.name} style={{ borderBottom: i < campaigns.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                    <td style={{ padding: '12px 16px', color: 'white', fontSize: 13, fontWeight: 500 }}>{c.name}</td>
                    <td style={{ padding: '12px 16px' }}>
                      <span style={{ background: c.color + '18', color: c.color, border: '1px solid ' + c.color + '33', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 100 }}>{c.status}</span>
                    </td>
                    <td style={{ padding: '12px 16px', color: '#94a3b8', fontSize: 13 }}>{c.budget}</td>
                    <td style={{ padding: '12px 16px', color: '#94a3b8', fontSize: 13 }}>{c.spend}</td>
                    <td style={{ padding: '12px 16px', color: '#94a3b8', fontSize: 13 }}>{c.leads.toLocaleString()}</td>
                    <td style={{ padding: '12px 16px' }}>
                      {c.score ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <div style={{ flex: 1, height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2 }}>
                            <div style={{ width: c.score + '%', height: '100%', borderRadius: 2, background: c.score >= 80 ? '#10b981' : c.score >= 60 ? '#f59e0b' : '#ef4444' }} />
                          </div>
                          <span style={{ color: '#94a3b8', fontSize: 12, minWidth: 24 }}>{c.score}</span>
                        </div>
                      ) : <span style={{ color: '#374151', fontSize: 12 }}>—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* AI Insights */}
          <div className="glass" style={{ padding: '22px', borderRadius: 16, background: 'linear-gradient(135deg, rgba(124,58,237,0.06), transparent)', border: '1px solid rgba(124,58,237,0.2)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <Brain size={16} color="#a78bfa" />
              <h3 style={{ color: 'white', fontSize: 15, fontWeight: 700 }}>AI Recommendations</h3>
              <span style={{ background: 'rgba(124,58,237,0.15)', color: '#a78bfa', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 100 }}>{insights.length} new</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {insights.map(({ icon: Icon, color, text }, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '12px 14px', background: 'rgba(255,255,255,0.02)', borderRadius: 10, border: '1px solid rgba(255,255,255,0.04)' }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: color + '18', border: '1px solid ' + color + '22', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={13} color={color} />
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}
