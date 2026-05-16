export default function Logo({ size }) {
  var s = size || 36
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div
        style={{
          width: s,
          height: s,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #FF6B35, #FFB347)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: Math.round(s * 0.54),
          boxShadow: '0 0 18px rgba(255,107,53,0.4)',
          flexShrink: 0,
        }}
      >
        🍳
      </div>
      <span
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontWeight: 800,
          fontSize: Math.round(s * 0.58),
          background: 'linear-gradient(90deg, #FF6B35, #FFB347)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-0.5px',
        }}
      >
        FeastAI
      </span>
    </div>
  )
}
