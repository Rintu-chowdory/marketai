import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('marketai-cookies-accepted')
    if (!accepted) {
      setVisible(true)
    }
  }, [])

  const handleAccept = () => {
    setClosing(true)
    setTimeout(() => {
      localStorage.setItem('marketai-cookies-accepted', 'true')
      setVisible(false)
    }, 300)
  }

  const handleManage = () => {
    setClosing(true)
    setTimeout(() => {
      localStorage.setItem('marketai-cookies-accepted', 'true')
      setVisible(false)
    }, 300)
  }

  if (!visible) return null

  return (
    <>
      <style>{`
        @keyframes slideUpBanner {
          from {
            opacity: 0;
            transform: translateY(100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideDownBanner {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(100%);
          }
        }
        .cookie-banner {
          animation: slideUpBanner 0.5s cubic-bezier(0.32, 0.72, 0.3, 1) forwards;
        }
        .cookie-banner.closing {
          animation: slideDownBanner 0.4s cubic-bezier(0.32, 0.72, 0.3, 1) forwards;
        }
      `}</style>

      <div className={`cookie-banner ${closing ? 'closing' : ''}`} style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 99,
        background: 'rgba(8,8,16,0.95)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(124,58,237,0.25)',
        padding: '20px 24px',
        animation: closing ? 'slideDownBanner 0.4s cubic-bezier(0.32, 0.72, 0.3, 1) forwards' : 'slideUpBanner 0.5s cubic-bezier(0.32, 0.72, 0.3, 1) forwards'
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          flexWrap: 'wrap'
        }}>
          {/* Text content */}
          <p style={{
            color: '#94a3b8',
            fontSize: 14,
            lineHeight: 1.6,
            flex: 1,
            minWidth: 250,
            margin: 0
          }}>
            We use cookies to improve your experience and analyze site traffic. By continuing to use this site, you agree to our cookie policy.
          </p>

          {/* Buttons */}
          <div style={{
            display: 'flex',
            gap: 12,
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
            minWidth: 'fit-content'
          }}>
            <button
              onClick={handleManage}
              style={{
                padding: '10px 20px',
                borderRadius: 8,
                border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.05)',
                color: '#94a3b8',
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
                textDecoration: 'none'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.borderColor = 'rgba(124,58,237,0.4)'
                e.currentTarget.style.color = '#a78bfa'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                e.currentTarget.style.color = '#94a3b8'
              }}
            >
              Manage Preferences
            </button>
            <button
              onClick={handleAccept}
              style={{
                padding: '10px 24px',
                borderRadius: 8,
                border: 'none',
                background: 'linear-gradient(135deg,#7c3aed,#4f46e5)',
                color: 'white',
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: '0 4px 15px rgba(124,58,237,0.35)',
                textDecoration: 'none'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(124,58,237,0.45)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(124,58,237,0.35)'
              }}
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
