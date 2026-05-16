export default function AboutPage() {
  return (
    <div style={{ paddingTop: 100, padding: '100px 24px 72px', maxWidth: 800, margin: '0 auto' }}>
      <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(32px,5vw,48px)', fontWeight: 800, marginBottom: 24 }}>
        About FeastAI
      </h1>
      <div style={{ color: '#9CA3AF', fontSize: 17, lineHeight: 1.8 }}>
        <p>FeastAI was born from a universal frustration: staring at the fridge, seeing ingredients, and having no idea what to make. That feeling is identical whether you are in Mumbai, Chicago, Riyadh, or Shanghai.</p>
        <p style={{ marginTop: 20 }}>We built FeastAI using Anthropic's Claude — one of the most advanced AI models ever created — to suggest authentic, delicious recipes from any combination of ingredients in seconds, across five major global culinary traditions.</p>
        <p style={{ marginTop: 20 }}>
          Our mission:{' '}
          <strong style={{ color: '#FF6B35' }}>make great home cooking accessible to everyone, everywhere, regardless of skill level or budget.</strong>
        </p>
      </div>

      <div style={{ marginTop: 40, padding: 28, borderRadius: 24, background: 'rgba(255,107,53,0.06)', border: '1px solid rgba(255,107,53,0.15)' }}>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#F9FAFB' }}>Our Commitments</h2>
        {[
          'Zero advertising — ever. We are 100% subscription-funded.',
          'Your data is private and will never be sold.',
          'Authentic global cuisines, not watered-down Western versions.',
          'A meaningful free tier that never expires.',
        ].map(function(item, i) {
          return (
            <div key={i} style={{ color: '#9CA3AF', fontSize: 15, padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: 10 }}>
              <span style={{ color: '#34D399', fontWeight: 700 }}>✓</span>{item}
            </div>
          )
        })}
      </div>

      <div style={{ marginTop: 24, padding: 28, borderRadius: 24, background: 'rgba(79,195,247,0.05)', border: '1px solid rgba(79,195,247,0.15)' }}>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 24, fontWeight: 700, marginBottom: 12, color: '#F9FAFB' }}>Tech Stack</h2>
        <p style={{ color: '#9CA3AF', fontSize: 15, lineHeight: 1.75 }}>
          React + Vite (frontend) · Firebase (auth and database) · Anthropic Claude API (AI recipes) · Vercel (hosting)
        </p>
      </div>

      <div style={{ marginTop: 24, padding: 28, borderRadius: 24, background: 'rgba(167,139,250,0.05)', border: '1px solid rgba(167,139,250,0.15)' }}>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 24, fontWeight: 700, marginBottom: 12, color: '#F9FAFB' }}>Contact</h2>
        <p style={{ color: '#9CA3AF', fontSize: 15, lineHeight: 2 }}>
          General: <a href="mailto:hello@feastai.app" style={{ color: '#FF6B35' }}>hello@feastai.app</a><br />
          Privacy: <a href="mailto:privacy@feastai.app" style={{ color: '#FF6B35' }}>privacy@feastai.app</a>
        </p>
      </div>
    </div>
  )
}
