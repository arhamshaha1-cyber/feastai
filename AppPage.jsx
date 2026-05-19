import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { generateRecipes } from './anthropic.js'
import { RecipeCard, RecipeDetail } from '../components/RecipeCard'
import { CUISINES, QUICK_INGREDIENTS, btnPrimary, btnGhost } from '../styles/theme'

export default function AppPage({ user }) {
  var navigate = useNavigate()
  var [ingredients,  setIngredients]  = useState([])
  var [inputVal,     setInputVal]     = useState('')
  var [cuisine,      setCuisine]      = useState('indian')
  var [budget,       setBudget]       = useState(false)
  var [recipes,      setRecipes]      = useState([])
  var [loading,      setLoading]      = useState(false)
  var [error,        setError]        = useState('')
  var [activeRecipe, setActiveRecipe] = useState(null)

  function addItem(val) {
    var v = (val || inputVal).trim().toLowerCase()
    if (v && !ingredients.includes(v) && ingredients.length < 15) {
      setIngredients(function(prev) { return prev.concat(v) })
      setInputVal('')
    }
  }

  function removeItem(val) {
    setIngredients(function(prev) { return prev.filter(function(i) { return i !== val }) })
  }

  async function generate() {
    if (ingredients.length < 2) { setError('Please add at least 2 ingredients.'); return }
    setLoading(true); setError(''); setRecipes([]); setActiveRecipe(null)
    var label = (CUISINES.find(function(c) { return c.id === cuisine }) || {}).label || cuisine
    try {
      var result = await generateRecipes(ingredients, label, budget)
      setRecipes(result)
    } catch (err) {
      if (err.message === 'MISSING_KEY') {
        setError('Add VITE_ANTHROPIC_API_KEY to your .env file to enable AI recipes. See README.md.')
      } else {
        setError('Request failed: ' + err.message)
      }
    }
    setLoading(false)
  }

  function toggleRecipe(r) {
    setActiveRecipe(function(prev) { return prev && prev.name === r.name ? null : r })
  }

  var suggestions = QUICK_INGREDIENTS.filter(function(i) { return !ingredients.includes(i) }).slice(0, 12)

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '88px 20px 48px' }}>
      <div style={{ marginBottom: 32 }}>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(26px, 5vw, 40px)',
            fontWeight: 700,
            marginBottom: 8,
          }}
        >
          {user ? 'Welcome back, ' + user.name + '! 👋' : "What's in your kitchen? 🧑‍🍳"}
        </h1>
        <p style={{ color: '#9CA3AF', fontSize: 16 }}>
          Add your ingredients and let AI create something delicious.{' '}
          {!user && (
            <span
              onClick={function() { navigate('/signup') }}
              style={{ color: '#FF6B35', cursor: 'pointer', fontWeight: 600 }}
            >
              Sign up free
            </span>
          )}{!user && ' to save your recipes.'}
        </p>
      </div>

      {/* INPUT PANEL */}
      <div
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 24,
          padding: 28,
          marginBottom: 28,
        }}
      >
        {/* Cuisine */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ color: '#9CA3AF', fontSize: 12, fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 12 }}>
            🌍 Select Cuisine
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {CUISINES.map(function(c) {
              var active = cuisine === c.id
              return (
                <button
                  key={c.id}
                  onClick={function() { setCuisine(c.id) }}
                  style={{
                    padding: '9px 18px',
                    borderRadius: 999,
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: "'DM Sans', sans-serif",
                    background: active ? c.color : 'rgba(255,255,255,0.06)',
                    color: active ? '#fff' : '#9CA3AF',
                    border: active ? '2px solid ' + c.color : '2px solid transparent',
                    boxShadow: active ? '0 4px 16px ' + c.color + '44' : 'none',
                    transition: 'all 0.2s',
                  }}
                >
                  {c.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Budget toggle */}
        <div
          onClick={function() { setBudget(function(b) { return !b }) }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            marginBottom: 24,
            padding: '14px 18px',
            borderRadius: 12,
            background: budget ? 'rgba(52,211,153,0.08)' : 'rgba(255,255,255,0.03)',
            border: budget ? '1px solid rgba(52,211,153,0.3)' : '1px solid rgba(255,255,255,0.08)',
            cursor: 'pointer',
          }}
        >
          <div
            style={{
              width: 46, height: 26, borderRadius: 13,
              background: budget ? '#34D399' : '#374151',
              position: 'relative', flexShrink: 0, transition: 'background 0.25s',
            }}
          >
            <div
              style={{
                width: 20, height: 20, borderRadius: '50%', background: '#fff',
                position: 'absolute', top: 3, left: budget ? 23 : 3, transition: 'left 0.25s',
              }}
            />
          </div>
          <div>
            <div style={{ color: budget ? '#34D399' : '#F9FAFB', fontWeight: 600, fontSize: 15 }}>
              💰 Cheap Meals Under $5 Mode
            </div>
            <div style={{ color: '#6B7280', fontSize: 13, marginTop: 2 }}>
              AI will prioritise budget-friendly recipes
            </div>
          </div>
        </div>

        {/* Ingredient input */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ color: '#9CA3AF', fontSize: 12, fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 12 }}>
            🛒 Your Ingredients ({ingredients.length}/15)
          </div>

          <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
            <input
              value={inputVal}
              onChange={function(e) { setInputVal(e.target.value) }}
              onKeyDown={function(e) { if (e.key === 'Enter') addItem() }}
              placeholder="Type an ingredient and press Enter…"
              style={{
                flex: 1,
                padding: '12px 16px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 12,
                color: '#F9FAFB',
                fontSize: 15,
                outline: 'none',
              }}
            />
            <button
              onClick={function() { addItem() }}
              style={btnPrimary({ padding: '12px 22px', borderRadius: 12, fontSize: 22 })}
            >
              +
            </button>
          </div>

          {/* Quick add */}
          <div style={{ marginBottom: 14 }}>
            <div style={{ color: '#6B7280', fontSize: 12, marginBottom: 8 }}>Quick add:</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {suggestions.map(function(s) {
                return (
                  <button
                    key={s}
                    onClick={function() { addItem(s) }}
                    style={{
                      padding: '5px 12px',
                      fontSize: 12,
                      borderRadius: 999,
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: '#9CA3AF',
                      cursor: 'pointer',
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    + {s}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Tags */}
          {ingredients.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {ingredients.map(function(item) {
                return (
                  <div
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      background: 'rgba(255,107,53,0.15)',
                      border: '1px solid rgba(255,107,53,0.3)',
                      borderRadius: 999,
                      padding: '6px 14px',
                    }}
                  >
                    <span style={{ color: '#FF9A5C', fontSize: 14, fontWeight: 500 }}>{item}</span>
                    <span
                      onClick={function() { removeItem(item) }}
                      style={{ color: '#FF6B35', cursor: 'pointer', fontSize: 18, lineHeight: 1 }}
                    >
                      ×
                    </span>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {error && (
          <div
            style={{
              background: 'rgba(239,68,68,0.1)',
              border: '1px solid rgba(239,68,68,0.3)',
              borderRadius: 10,
              padding: '12px 16px',
              marginBottom: 18,
              color: '#FCA5A5',
              fontSize: 14,
              lineHeight: 1.5,
            }}
          >
            {error}
          </div>
        )}

        <button
          onClick={generate}
          disabled={loading}
          style={btnPrimary({
            width: '100%',
            padding: '16px',
            fontSize: 17,
            borderRadius: 12,
            boxShadow: loading ? 'none' : '0 6px 24px rgba(255,107,53,0.4)',
          })}
        >
          {loading ? '🤖 AI is crafting your recipes…' : '✨ Generate AI Recipes'}
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <div style={{ fontSize: 52, marginBottom: 16, display: 'inline-block', animation: 'spin 1s linear infinite' }}>🍳</div>
          <p style={{ color: '#9CA3AF', fontSize: 17 }}>Our AI chef is working on your recipes…</p>
          <p style={{ color: '#6B7280', fontSize: 14, marginTop: 8 }}>Usually takes 5–10 seconds</p>
        </div>
      )}

      {/* Results */}
      {recipes.length > 0 && !loading && (
        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, marginBottom: 20 }}>
            🍽️ Your AI-Generated Recipes
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 18 }}>
            {recipes.map(function(r, i) {
              return (
                <RecipeCard
                  key={i}
                  recipe={r}
                  onClick={function() { toggleRecipe(r) }}
                  selected={activeRecipe && activeRecipe.name === r.name}
                />
              )
            })}
          </div>

          {activeRecipe && (
            <RecipeDetail recipe={activeRecipe} onClose={function() { setActiveRecipe(null) }} />
          )}

          <div style={{ textAlign: 'center', marginTop: 28 }}>
            <button onClick={generate} style={btnGhost({ padding: '12px 28px', fontSize: 15 })}>
              🔄 Generate Different Recipes
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
