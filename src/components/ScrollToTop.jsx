import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed', bottom: 28, right: 28, zIndex: 99,
        width: 44, height: 44, borderRadius: '50%', border: 'none', cursor: 'pointer',
        background: 'linear-gradient(135deg,#7c3aed,#4f46e5)',
        color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 8px 25px rgba(124,58,237,0.45)',
        transition: 'all 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
      title="Back to top"
    >
      <ArrowUp size={18} />
    </button>
  )
}
