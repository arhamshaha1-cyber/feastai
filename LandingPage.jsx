import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { btnPrimary, btnGhost } from './theme.js'

var FEATURES = [
  { icon: '🤖', title: 'Claude AI Recipe Engine',   desc: "Powered by Anthropic's Claude. Understands cultural nuances and cooking techniques across all major world cuisines." },
  { icon: '🌍', title: '5 Global Cuisines',         desc: 'Indian, American, Arabic, Chinese and Healthy diets — authentic, culturally accurate recipes every time.' },
  { icon: '💰', title: 'Meals Under $5',            desc: 'Budget mode finds the cheapest, most filling meals from your exact pantry staples. Perfect for students and families.' },
  { icon: '📊', title: 'Full Nutrition Data',       desc: 'Every recipe includes calories, protein, carbs and fat estimates so you can track macros without a separate app.' },
  { icon: '⚡', title: 'Results in 10 Seconds',    desc: 'Three complete recipes with ingredients, steps, nutrition and chef tips delivered in under 10 seconds.' },
  { icon: '🔒', title: 'Private and Ad-Free',      desc: 'Subscription-funded. Your data is never sold. Zero tracking pixels. Zero ads.' },
]

export default function LandingPage() {
  var navigate = useNavigate()
  var [vis, setVis] = useState(false)

  useEffect(function() {
    var t = setTimeout(function() { setVis(true) }, 80)
    return function() { clearTimeout(t) }
  }, [])

  function fade(delay) {
    return {
      opacity:   vis ? 1 : 0,
      transform: vis ? 'translateY(0)' : 'translateY(24px)',
      transition: 'opacity 0.6s ease ' + (delay || 0) + 's, transform 0.6s ease ' + (delay || 0) + 's',
    }
  }

  return (
    <>
  <nav
    style={{
      position: 'fixed',
      top: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '92%',
      maxWidth: 1200,
      padding: '14px 24px',
      borderRadius: 22,
      backdropFilter: 'blur(18px)',
      background: 'rgba(15,15,23,0.55)',
      border: '1px solid rgba(255,255,255,0.08)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 999,
      boxShadow: '0 10px 40px rgba(0,0,0,0.35)',
    }}
  >
    <div
      style={{
        color: '#fff',
        fontSize: 20,
        fontWeight: 700,
        letterSpacing: 1,
      }}
    >
      FeastAI
    </div>

    <button
      style={{
        background: 'linear-gradient(135deg,#FF6B35,#A78BFA)',
        border: 'none',
        color: '#fff',
        padding: '12px 22px',
        borderRadius: 14,
        fontWeight: 700,
        cursor: 'pointer',
        boxShadow: '0 10px 30px rgba(255,107,53,0.35)',
      }}
    >
      Try Free
    </button>
  </nav>
    
      {/* HERO */}
      <section
        style={{
  background:
    'radial-gradient(circle at top, rgba(255,107,53,0.22), transparent 45%), linear-gradient(180deg, #09090F 0%, #0F0F17 100%)',
  overflow: 'hidden',
          animation: 'fadeIn 1.2s ease',
  position: 'relative',
}}
      >
      <div
  style={{
    position: 'absolute',
    width: 500,
    height: 500,
    borderRadius: '50%',
    background: 'rgba(255,107,53,0.12)',
    filter: 'blur(120px)',
    top: -120,
    right: -120,
    zIndex: 0,
  }}
/>

<div
  style={{
    position: 'absolute',
    width: 400,
    height: 400,
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.04)',
    filter: 'blur(100px)',
    bottom: -100,
    left: -100,
    zIndex: 0,
    }}
/>
    <div
  style={{
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: '50%',
    background: 'rgba(255,140,80,0.08)',
    filter: 'blur(90px)',
    bottom: -80,
    right: -80,
    animation: 'float 8s ease-in-out infinite',
    zIndex: 0,
  }}
/>
  

        <div
          style={Object.assign({}, fade(0), {
            position: 'relative',
zIndex: 2,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(255,107,53,0.1)',
            border: '1px solid rgba(255,107,53,0.25)',
            borderRadius: 999,
            padding: '6px 18px',
            marginBottom: 30,
          })}
        >
          <span
            style={{
              fontSize: 12,
              color: '#FF6B35',
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: 'uppercase',
            }}
          >
            ✨ AI-Powered Food Intelligence
          </span>
        </div>

        <h1
          style={Object.assign({}, fade(0.1), {
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(40px, 9vw, 90px)',
            fontWeight: 900,
            lineHeight: 1.02,
            marginBottom: 26,
            maxWidth: 950,
          })}
        >
          <span style={{ color: '#F9FAFB' }}>Turn Any Ingredients</span>
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #FF6B35 0%, #FFB347 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Into Masterpieces
          </span>
        </h1>

        <p
          style={Object.assign({}, fade(0.2), {
            fontSize: 'clamp(16px, 2.5vw, 20px)',
            color: '#9CA3AF',
            maxWidth: 580,
            lineHeight: 1.7,
            marginBottom: 42,
          })}
        >
          FeastAI uses Claude AI to suggest delicious, culturally diverse recipes from ingredients
          you already have — with full nutrition data and budget options.
        </p>

        <div
          style={Object.assign({}, fade(0.3), {
            display: 'flex',
            gap: 14,
            flexWrap: 'wrap',
            justifyContent: 'center',
          })}
        >
          <button
            onClick={function() { navigate('/signup') }}
            style={btnPrimary({
              padding: '16px 36px',
              fontSize: 17,
              borderRadius: 14,
              boxShadow: '0 8px 30px rgba(255,107,53,0.42)',
            })}
          >
            🚀 Start Cooking Free
          </button>
          <button
            onClick={function() { navigate('/app') }}
            style={btnGhost({ padding: '16px 36px', fontSize: 17, borderRadius: 14 })}
          >
            Try Without Signup →
          </button>
        </div>

        <div
          style={Object.assign({}, fade(0.45), {
            marginTop: 64,
            display: 'flex',
            gap: 48,
            flexWrap: 'wrap',
            alignItems: 'center',
padding: '24px',
backdropFilter: 'blur(20px)',
background: 'rgba(255,255,255,0.03)',
borderRadius: 28,
border: '1px solid rgba(255,255,255,0.08)',
boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
          })}
        >
          {[
            ['50K+', 'Recipes Generated'],
            ['5',    'Global Cuisines'],
            ['4.9★', 'User Rating'],
          ].map(function(s) {
            return (
              <div key={s[1]} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: 30,
                    fontWeight: 800,
                    fontFamily: "'Playfair Display', serif",
                    background: 'linear-gradient(135deg, #FF6B35, #FFB347)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {s[0]}
                </div>
                <div style={{ fontSize: 13, color: '#6B7280', marginTop: 4 }}>{s[1]}</div>
              </div>
            )
          })}
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(28px, 5vw, 50px)',
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            Everything You Need to Cook Smarter
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: 18, maxWidth: 480, margin: '0 auto' }}>
            No more staring at the fridge wondering what to make.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 18,
          }}
        >
          {FEATURES.map(function(f, i) {
            return (
              <div
  key={i}

  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(-10px)'
    e.currentTarget.style.boxShadow = '0 20px 60px rgba(255,107,53,0.25)'
  }}

  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateY(0)'
    e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.35)'
  }}

  style={{
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: 24,
    padding: 28,
    backdropFilter: 'blur(18px)',
    boxShadow: '0 10px 40px rgba(0,0,0,0.35)',
    transition: 'all 0.35s ease',
    cursor: 'pointer',
    transform: 'translateY(0)',
  }}
>
  
              >
                <div style={{ fontSize: 38, marginBottom: 14 }}>{f.icon}</div>
                <h3 style={{ color: '#F9FAFB', fontSize: 17, fontWeight: 700, marginBottom: 10 }}>
                  {f.title}
                </h3>
                <p style={{ color: '#9CA3AF', fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                  {f.desc}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          maxWidth: 900,
          margin: '0 auto 80px',
          padding: '64px 40px',
          borderRadius: 24,
          textAlign: 'center',
          background:
            'linear-gradient(135deg, rgba(255,107,53,0.13) 0%, rgba(167,139,250,0.09) 100%)',
          border: '1px solid rgba(255,107,53,0.2)',
        }}
      >
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(26px, 4vw, 42px)',
            color: '#F9FAFB',
            marginBottom: 16,
            fontWeight: 700,
          }}
        >
          Ready to Never Wonder "What's for Dinner?" Again?
        </h2>
        <p style={{ color: '#9CA3AF', fontSize: 17, marginBottom: 36 }}>
          Join thousands of home cooks using AI to eat better and spend less.
        </p>
        <button
          onClick={function() { navigate('/signup') }}
          style={btnPrimary({ padding: '16px 44px', fontSize: 18, borderRadius: 14 })}
        >
          Get Started — It's Free
        </button>
      </section>
      </>
    
  )
}

const style = document.createElement('style')

style.innerHTML = `
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-12px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`

document.head.appendChild(style)
