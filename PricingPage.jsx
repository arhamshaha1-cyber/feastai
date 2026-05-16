import { useNavigate } from 'react-router-dom'
import { PLANS, btnPrimary, btnGhost } from '../styles/theme'

var FAQ = [
  { q: 'Can I cancel anytime?',                  a: 'Yes. Cancel from account settings at any time. You keep access until the end of your billing period.' },
  { q: 'Is the free plan really free?',          a: 'Yes, forever. No credit card required. You get 5 AI recipe suggestions per day.' },
  { q: 'How accurate are nutrition estimates?',  a: 'Typically within 10–15% of actual values. For medical dietary needs, consult a registered dietitian.' },
  { q: 'What cuisines are supported?',           a: 'Indian, American, Arabic, Chinese, and Healthy/macro-balanced. More coming soon.' },
]

export default function PricingPage() {
  var navigate = useNavigate()
  return (
    <div style={{ paddingTop: 100, padding: '100px 24px 72px' }}>
      <div style={{ textAlign: 'center', marginBottom: 60 }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px,5vw,54px)', fontWeight: 800, marginBottom: 16 }}>
          Simple, Transparent Pricing
        </h1>
        <p style={{ color: '#9CA3AF', fontSize: 18, maxWidth: 480, margin: '0 auto' }}>
          Start free, upgrade when ready. No hidden fees, ever.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, maxWidth: 960, margin: '0 auto', alignItems: 'start' }}>
        {PLANS.map(function(plan, i) {
          return (
            <div
              key={i}
              style={{
                background:  plan.highlight ? 'rgba(255,107,53,0.07)' : 'rgba(255,255,255,0.04)',
                border:      plan.highlight ? '2px solid rgba(255,107,53,0.45)' : '2px solid rgba(255,255,255,0.08)',
                borderRadius: 24,
                padding: '36px 28px',
                position: 'relative',
                transform:   plan.highlight ? 'scale(1.025)' : 'none',
                boxShadow:   plan.highlight ? '0 20px 60px rgba(255,107,53,0.18)' : 'none',
              }}
            >
              {plan.highlight && (
                <div style={{
                  position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg,#FF6B35,#FFB347)',
                  borderRadius: 999, padding: '4px 18px',
                  fontSize: 11, fontWeight: 800, color: '#fff', whiteSpace: 'nowrap',
                }}>
                  ⭐ MOST POPULAR
                </div>
              )}
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 700, marginBottom: 6, color: '#F9FAFB' }}>
                {plan.name}
              </h3>
              <div style={{ marginBottom: 28 }}>
                <span style={{ fontSize: 46, fontWeight: 800, fontFamily: "'Playfair Display',serif", color: plan.color }}>{plan.price}</span>
                <span style={{ color: '#6B7280', fontSize: 16 }}>{plan.period}</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px' }}>
                {plan.features.map(function(f, j) {
                  return (
                    <li key={j} style={{ color: '#F9FAFB', fontSize: 15, padding: '9px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ color: plan.color, fontWeight: 700 }}>✓</span>{f}
                    </li>
                  )
                })}
              </ul>
              <button
                onClick={function() { navigate('/signup') }}
                style={plan.highlight
                  ? btnPrimary({ width: '100%', padding: '14px', fontSize: 15, borderRadius: 12 })
                  : btnGhost({ width: '100%', padding: '14px', fontSize: 15, borderRadius: 12, borderColor: plan.color, color: plan.color, background: plan.color + '14' })
                }
              >
                {plan.cta}
              </button>
            </div>
          )
        })}
      </div>

      <div style={{ maxWidth: 720, margin: '72px auto 0', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 32, fontWeight: 700, marginBottom: 40 }}>
          Frequently Asked Questions
        </h2>
        {FAQ.map(function(item, i) {
          return (
            <div key={i} style={{ padding: '20px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', textAlign: 'left' }}>
              <h4 style={{ color: '#F9FAFB', fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{item.q}</h4>
              <p style={{ color: '#9CA3AF', fontSize: 15, lineHeight: 1.65, margin: 0 }}>{item.a}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
