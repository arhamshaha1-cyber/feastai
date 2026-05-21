export function RecipeCard({ recipe, onClick, selected }) {
  var r = recipe
  return (
    <div
      onClick={onClick}
      style={{
        background: selected ? 'rgba(255,107,53,0.08)' : 'rgba(255,255,255,0.04)',
        border: selected
          ? '1px solid rgba(255,107,53,0.4)'
          : '1px solid rgba(255,255,255,0.08)',
        borderRadius: 18,
        padding: 24,
        cursor: 'pointer',
        transition: 'border-color 0.2s, background 0.2s',
      }}
    >
      <img
  src={`https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80`}
  alt={r.name}
  style={{
    width: '100%',
    height: 180,
    objectFit: 'cover',
    borderRadius: 16,
    marginBottom: 14,
    border: '1px solid rgba(255,255,255,0.08)'
  }}
/>
      <div style={{ fontSize: 42, marginBottom: 14 }}>{r.emoji}</div>

      <h3
        style={{
          color: '#F9FAFB',
          fontSize: 18,
          fontWeight: 700,
          marginBottom: 8,
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {r.name}
      </h3>

      <p style={{ color: '#9CA3AF', fontSize: 14, lineHeight: 1.6, marginBottom: 18 }}>
        {r.description}
      </p>

      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 18 }}>
        {[
          ['⏱', r.time],
          ['📊', r.difficulty],
          ['🍽️', r.servings + ' servings'],
          ['💰', r.estimatedCost],
        ].map(function(pair) {
          return (
            <span
              key={pair[1]}
              style={{
                padding: '4px 10px',
                background: 'rgba(255,255,255,0.06)',
                borderRadius: 999,
                fontSize: 12,
                color: '#9CA3AF',
              }}
            >
              {pair[0]} {pair[1]}
            </span>
          )
        })}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 6,
          padding: 14,
          borderRadius: 12,
          background: 'rgba(255,255,255,0.04)',
          textAlign: 'center',
          marginBottom: 16,
        }}
      >
        {[
          ['🔥', r.calories,        'kcal'],
          ['💪', r.protein + 'g',   'protein'],
          ['🌾', r.carbs   + 'g',   'carbs'],
          ['🧈', r.fat     + 'g',   'fat'],
        ].map(function(row) {
          return (
            <div key={row[2]}>
              <div style={{ fontSize: 16, marginBottom: 2 }}>{row[0]}</div>
              <div style={{ color: '#F9FAFB', fontWeight: 700, fontSize: 14 }}>{row[1]}</div>
              <div style={{ color: '#6B7280', fontSize: 11 }}>{row[2]}</div>
            </div>
          )
        })}
      </div>

      <div
        style={{
          textAlign: 'center',
          fontSize: 13,
          fontWeight: 600,
          color: selected ? '#FF6B35' : '#6B7280',
        }}
      >
        {selected ? '▲ Hide Details' : '▼ View Full Recipe'}
      </div>
    </div>
  )
}

export function RecipeDetail({ recipe, onClose }) {
  var r = recipe
  return (
    <div
      style={{
        marginTop: 20,
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,107,53,0.2)',
        borderRadius: 24,
        padding: 36,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: 28,
        }}
      >
        <div>
          <h2
            style={{
              color: '#F9FAFB',
              fontSize: 24,
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              marginBottom: 6,
            }}
          >
            {r.emoji} {r.name}
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: 14 }}>{r.description}</p>
        </div>
        <button
          onClick={onClose}
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: 'none',
            borderRadius: '50%',
            width: 38,
            height: 38,
            color: '#9CA3AF',
            fontSize: 20,
            cursor: 'pointer',
            flexShrink: 0,
            marginLeft: 12,
          }}
        >
          ×
        </button>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 32,
        }}
      >
        <div>
          <h3
            style={{
              color: '#FF6B35',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 1.2,
              textTransform: 'uppercase',
              marginBottom: 14,
            }}
          >
            📋 Ingredients
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {r.ingredients.map(function(item, i) {
              return (
                <li
                  key={i}
                  style={{
                    color: '#F9FAFB',
                    fontSize: 15,
                    padding: '8px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                  }}
                >
                  <span style={{ color: '#FF6B35', fontSize: 8 }}>●</span>
                  {item}
                </li>
              )
            })}
          </ul>
        </div>

        <div>
          <h3
            style={{
              color: '#FF6B35',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 1.2,
              textTransform: 'uppercase',
              marginBottom: 14,
            }}
          >
            👨‍🍳 Instructions
          </h3>
          <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {r.steps.map(function(step, i) {
              return (
                <li key={i} style={{ display: 'flex', gap: 14, marginBottom: 16 }}>
                  <span
                    style={{
                      flexShrink: 0,
                      width: 26,
                      height: 26,
                      borderRadius: '50%',
                      background: 'rgba(255,107,53,0.2)',
                      color: '#FF6B35',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 12,
                      fontWeight: 700,
                    }}
                  >
                    {i + 1}
                  </span>
                  <span style={{ color: '#F9FAFB', fontSize: 14, lineHeight: 1.7, paddingTop: 3 }}>
                    {step}
                  </span>
                </li>
              )
            })}
          </ol>
        </div>
      </div>

      {r.tip && (
        <div
          style={{
            marginTop: 24,
            padding: '16px 20px',
            borderRadius: 12,
            background: 'rgba(167,139,250,0.08)',
            border: '1px solid rgba(167,139,250,0.2)',
          }}
        >
          <span style={{ color: '#A78BFA', fontWeight: 700 }}>👨‍🍳 Chef tip: </span>
          <span style={{ color: '#C4B5FD', fontSize: 14 }}>{r.tip}</span>
        </div>
      )}
    </div>
  )
}
