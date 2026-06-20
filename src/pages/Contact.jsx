import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, Zap } from 'lucide-react'

const services = ['AI Marketing', 'Data & Analytics', 'Content Creation', 'Brand Strategy', 'SEO Optimization', 'Social Media']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Header */}
      <section className="grid-bg" style={{ padding: '80px 24px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)', width: 500, height: 300, background: 'radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 600, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)', borderRadius: 100, padding: '6px 16px', marginBottom: 24 }}>
            <Mail size={13} color="#a78bfa" />
            <span style={{ color: '#a78bfa', fontSize: 13, fontWeight: 500 }}>Get In Touch</span>
          </div>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 58px)', fontWeight: 900, color: 'white', letterSpacing: '-1.5px', marginBottom: 16 }}>
            Let's Build Something <span className="gradient-text">Remarkable</span>
          </h1>
          <p style={{ color: '#64748b', fontSize: 17, lineHeight: 1.7 }}>
            Free strategy call. No sales pitch. Just a real conversation about your growth.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '60px 24px 100px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40, alignItems: 'start' }}>
          {/* Info */}
          <div>
            <h2 style={{ color: 'white', fontSize: 22, fontWeight: 700, marginBottom: 24 }}>Contact Information</h2>
            {[
              { icon: Mail, label: 'Email Us', value: 'hello@marketai.com', color: '#7c3aed' },
              { icon: Phone, label: 'Call Us', value: '+1 (234) 567-890', color: '#0ea5e9' },
              { icon: MapPin, label: 'Visit Us', value: '123 Innovation Street, Tech City, TC 10001', color: '#10b981' },
            ].map(({ icon: Icon, label, value, color }) => (
              <div key={label} className="glass" style={{ padding: '20px 24px', borderRadius: 14, marginBottom: 16, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: color + '22', border: '1px solid ' + color + '33', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={16} color={color} />
                </div>
                <div>
                  <div style={{ color: '#64748b', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>{label}</div>
                  <div style={{ color: 'white', fontSize: 14 }}>{value}</div>
                </div>
              </div>
            ))}

            <div className="glass" style={{ padding: '24px', borderRadius: 14, marginTop: 24, background: 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(79,70,229,0.04))', border: '1px solid rgba(124,58,237,0.2)' }}>
              <Zap size={18} color="#a78bfa" style={{ marginBottom: 12 }} />
              <h3 style={{ color: 'white', fontSize: 15, fontWeight: 600, marginBottom: 8 }}>What to expect</h3>
              {[
                'Reply within 2 business hours',
                '30-min free strategy call',
                'Custom growth roadmap',
                'No long-term commitment required',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <CheckCircle size={13} color="#7c3aed" />
                  <span style={{ color: '#94a3b8', fontSize: 13 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div className="glass" style={{ padding: '60px 40px', borderRadius: 20, textAlign: 'center' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(16,185,129,0.15)', border: '2px solid rgba(16,185,129,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <CheckCircle size={28} color="#10b981" />
                </div>
                <h3 style={{ color: 'white', fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Message Sent!</h3>
                <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.7 }}>We'll be in touch within 2 business hours. Looking forward to it.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass" style={{ padding: '32px', borderRadius: 20 }}>
                <h2 style={{ color: 'white', fontSize: 20, fontWeight: 700, marginBottom: 24 }}>Send Us a Message</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
                  {[
                    { key: 'name', placeholder: 'Your Name', label: 'Name' },
                    { key: 'email', placeholder: 'your@email.com', label: 'Email', type: 'email' },
                  ].map(({ key, placeholder, label, type }) => (
                    <div key={key}>
                      <label style={{ color: '#64748b', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: 6 }}>{label}</label>
                      <input
                        type={type || 'text'}
                        placeholder={placeholder}
                        value={form[key]}
                        onChange={e => setForm({ ...form, [key]: e.target.value })}
                        required
                        style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, padding: '10px 14px', color: 'white', fontSize: 14, outline: 'none' }}
                      />
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom: 14 }}>
                  <label style={{ color: '#64748b', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: 6 }}>Company</label>
                  <input
                    type="text" placeholder="Your Company"
                    value={form.company}
                    onChange={e => setForm({ ...form, company: e.target.value })}
                    style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, padding: '10px 14px', color: 'white', fontSize: 14, outline: 'none' }}
                  />
                </div>
                <div style={{ marginBottom: 14 }}>
                  <label style={{ color: '#64748b', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: 6 }}>Service Interested In</label>
                  <select
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                    style={{ width: '100%', background: '#0d0d1a', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, padding: '10px 14px', color: form.service ? 'white' : '#64748b', fontSize: 14, outline: 'none' }}
                  >
                    <option value="">Select a service...</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label style={{ color: '#64748b', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: 6 }}>Message</label>
                  <textarea
                    placeholder="Tell us about your goals and current challenges..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    required
                    rows={4}
                    style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, padding: '10px 14px', color: 'white', fontSize: 14, outline: 'none', resize: 'vertical' }}
                  />
                </div>
                <button type="submit" style={{
                  width: '100%', padding: '14px', borderRadius: 10, border: 'none', cursor: 'pointer',
                  background: 'linear-gradient(135deg,#7c3aed,#4f46e5)', color: 'white', fontSize: 15, fontWeight: 600,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  boxShadow: '0 8px 25px rgba(124,58,237,0.35)'
                }}>
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
