import { useNavigate } from 'react-router-dom'
import { btnPrimary } from '../styles/theme'

var LIST = [
  { icon: '🤖', color: '#FF6B35', title: 'Claude AI Recipe Engine',   desc: "Powered by Anthropic's Claude — one of the most advanced AI models available. It understands cultural nuances, regional flavour profiles, and cooking techniques across all major world cuisines." },
  { icon: '🌍', color: '#34D399', title: '5 Authentic Global Cuisines', desc: 'Indian (curries, biryanis, dals), American (BBQ, comfort food), Arabic (mezze, tagines), Chinese (stir-fries, noodles), and Healthy (macro-balanced, clean eating). Authentic every time.' },
  { icon: '💰', color: '#F59E0B', title: 'Under $5 Budget Mode',      desc: 'One tap activates budget intelligence. AI reprioritises your exact ingredients to find the cheapest, most filling meals. Perfect for students and families.' },
  { icon: '📊', color: '#4FC3F7', title: 'Full Nutrition Breakdown',  desc: 'Every recipe includes estimated calories, protein, carbs and fat per serving. Track macros without a separate app.' },
  { icon: '⚡', color: '#A78BFA', title: 'Results in Under 10 Seconds', desc: '3 complete recipes with ingredients, steps, nutrition panels and chef tips — delivered in under 10 seconds.' },
  { icon: '📱', color: '#F472B6', title: 'Mobile-First Design',       desc: 'Every button, font and layout is optimised for one-handed phone use in the kitchen. Works on iOS and Android browsers.' },
  { icon: '🔒', color: '#34D399', title: 'Privacy First Always',      desc: 'Zero advertising. Zero data selling. We are 100% subscription-funded. Your data is yours alone.' },
  { icon: '👨‍👩‍👧‍👦', color: '#FF6B35', title: 'Family Plans',               desc: 'Up to 5 profiles with separate dietary preferences. Generate weekly meal plans and shopping lists automatically.' },
]

export default function FeaturesPage() {
  var navigate = useNavigate()
  return (
    <div style={{ paddingTop: 100, padding: '100px 24px 72px' }}>
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(32px,5vw,54px)', fontWeight: 800, marginBottom: 16 }}>
          Every Feature Designed Around<br />How People Actually Cook
        </h1>
        <p style={{ color: '#9CA3AF', fontSize: 18, maxWidth: 540, margin: '0 auto' }}>
          With what they have, on a budget, with limited time, for real families.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 18, maxWidth: 1100, margin: '0 auto' }}>
        {LIST.map(function(f, i) {
          return (
            <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 18, padding: 28, display: 'flex', gap: 18 }}>
              <div style={{ fontSize: 28, width: 56, height: 56, borderRadius: 14, flexShrink: 0, background: f.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {f.icon}
              </div>
              <div>
                <h3 style={{ color: '#F9FAFB', fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ color: '#9CA3AF', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div style={{ textAlign: 'center', marginTop: 60 }}>
        <button onClick={function() { navigate('/signup') }} style={btnPrimary({ padding: '16px 44px', fontSize: 17, borderRadius: 14 })}>
          🚀 Try Every Feature Free
        </button>
      </div>
    </div>
  )
}
