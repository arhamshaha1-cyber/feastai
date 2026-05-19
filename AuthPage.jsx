import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from './Logo.jsx'
import { useAuth } from './useAuth.js'
import { btnPrimary } from './theme.js'

export default function AuthPage({ mode }) {
  var navigate  = useNavigate()
  var auth      = useAuth()
  var [name,     setName]     = useState('')
  var [email,    setEmail]    = useState('')
  var [password, setPassword] = useState('')
  var [loading,  setLoading]  = useState(false)

  var isSignup = mode === 'signup'

  async function submit() {
    auth.setError('')
    if (!email || !password) { auth.setError('Please fill in all fields.'); return }
    if (isSignup && !name)   { auth.setError('Please enter your name.');    return }
    if (password.length < 6) { auth.setError('Password must be at least 6 characters.'); return }
    setLoading(true)
    var ok = isSignup
      ? await auth.signup(name, email, password)
      : await auth.login(email, password)
    setLoading(false)
    if (ok) navigate('/app')
  }

  function onKey(e) { if (e.key === 'Enter') submit() }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px 40px',
        background:
          'radial-gradient(ellipse 60% 50% at 50% 20%, rgba(255,107,53,0.09) 0%, transparent 70%)',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 440,
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 24,
          padding: '40px 36px',
          boxShadow: '0 25px 80px rgba(0,0,0,0.5)',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div onClick={function() { navigate('/') }} style={{ cursor: 'pointer', display: 'inline-block' }}>
            <Logo size={40} />
          </div>
          <h2 style={{ marginTop: 20, fontFamily: "'Playfair Display', serif", fontSize: 26, color: '#F9FAFB', fontWeight: 700 }}>
            {isSignup ? 'Create Your Account' : 'Welcome Back'}
          </h2>
          <p style={{ color: '#6B7280', fontSize: 14, marginTop: 8 }}>
            {isSignup ? 'Free forever — no credit card needed' : 'Sign in to your FeastAI account'}
          </p>
        </div>

        {auth.error && (
          <div
            style={{
              background: 'rgba(239,68,68,0.1)',
              border: '1px solid rgba(239,68,68,0.3)',
              borderRadius: 10,
              padding: '10px 14px',
              marginBottom: 20,
              color: '#FCA5A5',
              fontSize: 14,
            }}
          >
            {auth.error}
          </div>
        )}

        {isSignup && (
          <Field label="Full Name" placeholder="Gordon Ramsay" value={name}
            onChange={function(e) { auth.setError(''); setName(e.target.value) }}
            onKeyDown={onKey} icon="👤" />
        )}
        <Field label="Email Address" type="email" placeholder="you@example.com" value={email}
          onChange={function(e) { auth.setError(''); setEmail(e.target.value) }}
          onKeyDown={onKey} icon="📧" />
        <Field label="Password" type="password" placeholder="Min 6 characters" value={password}
          onChange={function(e) { auth.setError(''); setPassword(e.target.value) }}
          onKeyDown={onKey} icon="🔑" />

        <button
          onClick={submit}
          disabled={loading}
          style={btnPrimary({ width: '100%', padding: '14px', fontSize: 16, borderRadius: 12, marginTop: 6 })}
        >
          {loading ? '⏳ Please wait…' : isSignup ? '🚀 Create Account' : '🔓 Sign In'}
        </button>

        <div style={{ textAlign: 'center', marginTop: 22, color: '#6B7280', fontSize: 14 }}>
          {isSignup ? (
            <span>
              Already have an account?{' '}
              <span onClick={function() { navigate('/login') }} style={{ color: '#FF6B35', cursor: 'pointer', fontWeight: 600 }}>
                Sign In
              </span>
            </span>
          ) : (
            <span>
              Don't have an account?{' '}
              <span onClick={function() { navigate('/signup') }} style={{ color: '#FF6B35', cursor: 'pointer', fontWeight: 600 }}>
                Sign Up Free
              </span>
            </span>
          )}
        </div>

        <div
          style={{
            marginTop: 24,
            padding: '12px 14px',
            background: 'rgba(255,107,53,0.05)',
            borderRadius: 10,
            border: '1px solid rgba(255,107,53,0.12)',
          }}
        >
          <p style={{ color: '#9CA3AF', fontSize: 12, textAlign: 'center', margin: 0, lineHeight: 1.6 }}>
            🔒 Firebase Auth powered · Demo mode until you add Firebase config to .env
          </p>
        </div>
      </div>
    </div>
  )
}

function Field({ label, type, placeholder, value, onChange, onKeyDown, icon }) {
  var [focused, setFocused] = useState(false)
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ color: '#9CA3AF', fontSize: 13, fontWeight: 600, marginBottom: 8 }}>{label}</div>
      <div style={{ position: 'relative' }}>
        <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', fontSize: 16, pointerEvents: 'none' }}>
          {icon}
        </span>
        <input
          type={type || 'text'}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          onFocus={function() { setFocused(true) }}
          onBlur={function() { setFocused(false) }}
          style={{
            width: '100%',
            padding: '12px 14px 12px 42px',
            background: 'rgba(255,255,255,0.06)',
            border: focused ? '1px solid rgba(255,107,53,0.5)' : '1px solid rgba(255,255,255,0.1)',
            borderRadius: 12,
            color: '#F9FAFB',
            fontSize: 15,
            outline: 'none',
            boxSizing: 'border-box',
            fontFamily: "'DM Sans', sans-serif",
          }}
        />
      </div>
    </div>
  )
}
