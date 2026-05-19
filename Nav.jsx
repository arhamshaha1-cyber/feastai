import { useNavigate, useLocation } from 'react-router-dom'
import Logo from './Logo'
import { btnPrimary, btnGhost } from './theme.js'

var NAV_LINKS = [
  { label: 'Features', path: '/features' },
  { label: 'Pricing',  path: '/pricing'  },
  { label: 'About',    path: '/about'    },
]

export default function Nav({ user, onLogout }) {
  var navigate  = useNavigate()
  var location  = useLocation()

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        background: 'rgba(10,10,15,0.88)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,107,53,0.12)',
      }}
    >
      <div onClick={function() { navigate('/') }} style={{ cursor: 'pointer' }}>
        <Logo size={34} />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        {NAV_LINKS.map(function(link) {
          return (
            <button
              key={link.path}
              onClick={function() { navigate(link.path) }}
              style={{
                background: 'none',
                border: 'none',
                color: location.pathname === link.path ? '#FF6B35' : '#9CA3AF',
                fontSize: 14,
                fontWeight: 500,
                cursor: 'pointer',
                padding: '8px 14px',
                borderRadius: 8,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {link.label}
            </button>
          )
        })}
      </div>

      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        {user ? (
          <>
            <span style={{ color: '#6B7280', fontSize: 13 }}>👋 {user.name}</span>
            <button onClick={function() { navigate('/app') }} style={btnPrimary({ padding: '8px 16px' })}>
              Open App
            </button>
            <button onClick={onLogout} style={btnGhost({ padding: '8px 16px' })}>
              Logout
            </button>
          </>
        ) : (
          <>
            <button onClick={function() { navigate('/login') }} style={btnGhost({ padding: '8px 16px' })}>
              Login
            </button>
            <button onClick={function() { navigate('/signup') }} style={btnPrimary({ padding: '8px 16px' })}>
              Sign Up Free
            </button>
          </>
        )}
      </div>
    </nav>
  )
}
