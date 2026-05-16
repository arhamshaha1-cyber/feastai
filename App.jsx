import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuth } from './hooks/useAuth'
import Nav from './components/Nav'
import Footer from './components/Footer'
import LandingPage  from './pages/LandingPage'
import AuthPage     from './pages/AuthPage'
import AppPage      from './pages/AppPage'
import PricingPage  from './pages/PricingPage'
import FeaturesPage from './pages/FeaturesPage'
import AboutPage    from './pages/AboutPage'
import TermsPage    from './pages/TermsPage'
import PrivacyPage  from './pages/PrivacyPage'

function ScrollTop() {
  var loc = useLocation()
  useEffect(function() { window.scrollTo(0, 0) }, [loc.pathname])
  return null
}

export default function App() {
  var auth     = useAuth()
  var location = useLocation()

  if (auth.loading) {
    return (
      <div style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        justifyContent: 'center', background: '#0A0A0F', flexDirection: 'column', gap: 16,
      }}>
        <div style={{ fontSize: 48, animation: 'spin 1s linear infinite' }}>🍳</div>
        <p style={{ color: '#9CA3AF', fontFamily: "'DM Sans',sans-serif" }}>Loading FeastAI…</p>
        <style>{'@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}'}</style>
      </div>
    )
  }

  var hideFooter = location.pathname === '/app'

  return (
    <>
      <ScrollTop />
      <Nav user={auth.user} onLogout={auth.logout} />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/"         element={<LandingPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing"  element={<PricingPage />} />
          <Route path="/about"    element={<AboutPage />} />
          <Route path="/terms"    element={<TermsPage />} />
          <Route path="/privacy"  element={<PrivacyPage />} />
          <Route path="/login"    element={auth.user ? <Navigate to="/app" /> : <AuthPage mode="login" />} />
          <Route path="/signup"   element={auth.user ? <Navigate to="/app" /> : <AuthPage mode="signup" />} />
          <Route path="/app"      element={<AppPage user={auth.user} />} />
          <Route path="*"         element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {!hideFooter && <Footer />}
    </>
  )
}
