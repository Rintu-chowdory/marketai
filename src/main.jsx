import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { initScrollAnimations } from './scrollObserver.js'

// Re-run observer after each navigation (SPA)
let observer = null
export function refreshScrollAnimations() {
  if (observer) observer.disconnect()
  // Small delay so new DOM nodes are painted
  setTimeout(() => { observer = initScrollAnimations() }, 80)
}

// Initial run
document.addEventListener('DOMContentLoaded', () => refreshScrollAnimations())

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
)
