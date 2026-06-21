import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import CookieBanner from './components/CookieBanner.jsx'
import { ThemeProvider } from './contexts/ThemeContext'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import About from './pages/About.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Contact from './pages/Contact.jsx'
import Pricing from './pages/Pricing.jsx'
import Blog from './pages/Blog.jsx'
import CaseStudies from './pages/CaseStudies.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Datenschutz from './pages/Datenschutz.jsx'
import Impressum from './pages/Impressum.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import { refreshScrollAnimations } from './scrollUtils.js'

function ScrollReset() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    refreshScrollAnimations()
  }, [pathname])
  return null
}

export default function App() {
  return (
    <ThemeProvider>
      <div style={{ minHeight: '100vh', background: '#080810' }}>
        <ScrollReset />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
        <ScrollToTop />
        <CookieBanner />
      </div>
    </ThemeProvider>
  )
}
