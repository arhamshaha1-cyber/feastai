import { useNavigate } from 'react-router-dom'
import Logo from './Logo'

var COLS = [
  {
    title: 'Product',
    links: [
      { label: 'Features', path: '/features' },
      { label: 'Pricing',  path: '/pricing'  },
      { label: 'App',      path: '/app'      },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About',   path: '/about'   },
      { label: 'Terms',   path: '/terms'   },
      { label: 'Privacy', path: '/privacy' },
    ],
  },
]

export default function Footer() {
  var navigate = useNavigate()
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: '48px 24px 32px',
        marginTop: 'auto',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: 40,
            marginBottom: 40,
          }}
        >
          <div>
            <Logo size={32} />
            <p
              style={{
                color: '#6B7280',
                fontSize: 14,
                marginTop: 14,
                maxWidth: 240,
                lineHeight: 1.65,
              }}
            >
              AI-powered recipe intelligence for global kitchens.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 60, flexWrap: 'wrap' }}>
            {COLS.map(function(col) {
              return (
                <div key={col.title}>
                  <h4
                    style={{
                      color: '#F9FAFB',
                      fontSize: 12,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: 1.2,
                      marginBottom: 16,
                    }}
                  >
                    {col.title}
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {col.links.map(function(link) {
                      return (
                        <span
                          key={link.path}
                          onClick={function() { navigate(link.path) }}
                          style={{ color: '#6B7280', fontSize: 14, cursor: 'pointer' }}
                        >
                          {link.label}
                        </span>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: 20,
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 10,
          }}
        >
          <p style={{ color: '#4B5563', fontSize: 13 }}>© 2025 FeastAI. All rights reserved.</p>
          <p style={{ color: '#4B5563', fontSize: 13 }}>Made with 🍳 and AI · Zero ads, ever.</p>
        </div>
      </div>
    </footer>
  )
}
