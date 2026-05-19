import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import useAuth from './useAuth.js'

import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import LandingPage from './LandingPage.jsx'
import AuthPage from './AuthPage.jsx'
import AppPage from './AppPage.jsx'
import PricingPage from './PricingPage.jsx'
import FeaturesPage from './FeaturesPage.jsx'
import AboutPage from './AboutPage.jsx'
import TermsPage from './TermsPage.jsx'
import PrivacyPage from './PrivacyPage.jsx'
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
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0A0A0F',
        flexDirection: 'column',
        gap: 16,
      }}
    >
      <div style={{ fontSize: 48 }}>FeastAI</div>

      <p
        style={{
          color: '#9CA3AF',
          fontFamily: '"DM Sans", sans-serif',
        }}
      >
        Loading FeastAI...
      </p>
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
