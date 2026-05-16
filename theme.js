export const CUISINES = [
  { id: 'indian',   label: '🇮🇳 Indian',   color: '#FF6B35' },
  { id: 'american', label: '🇺🇸 American', color: '#4FC3F7' },
  { id: 'arabic',   label: '🌙 Arabic',    color: '#A78BFA' },
  { id: 'chinese',  label: '🐉 Chinese',   color: '#F59E0B' },
  { id: 'healthy',  label: '🥗 Healthy',   color: '#34D399' },
]

export const QUICK_INGREDIENTS = [
  'chicken', 'rice', 'tomatoes', 'onions', 'garlic', 'olive oil',
  'eggs', 'pasta', 'lentils', 'spinach', 'potatoes', 'cheese',
  'bread', 'milk', 'butter', 'flour', 'beans', 'peppers',
  'ginger', 'cumin', 'soy sauce', 'coconut milk', 'chickpeas',
  'mushrooms', 'broccoli', 'carrots',
]

export const PLANS = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    color: '#6B7280',
    highlight: false,
    cta: 'Get Started Free',
    features: [
      '5 AI recipe suggestions per day',
      'Basic calorie estimates',
      '2 cuisine types',
      'Community support',
    ],
  },
  {
    name: 'Chef',
    price: '$7.99',
    period: '/month',
    color: '#FF6B35',
    highlight: true,
    cta: 'Start 7-Day Free Trial',
    features: [
      'Unlimited AI recipes',
      'Full nutrition breakdown',
      'All 5 cuisine types',
      'Budget meals under $5 mode',
      'Save and export recipes',
      'Priority support',
    ],
  },
  {
    name: 'Family',
    price: '$14.99',
    period: '/month',
    color: '#A78BFA',
    highlight: false,
    cta: 'Start Family Plan',
    features: [
      'Everything in Chef',
      'Up to 5 family profiles',
      'Weekly meal planner',
      'Smart shopping list',
      'Dietary restriction filters',
      'Dedicated support',
    ],
  },
]

export function btnPrimary(overrides) {
  return Object.assign(
    {
      background: 'linear-gradient(135deg, #FF6B35, #FF9A5C)',
      color: '#fff',
      border: 'none',
      borderRadius: '12px',
      padding: '10px 20px',
      fontWeight: 600,
      fontSize: '14px',
      cursor: 'pointer',
      boxShadow: '0 4px 15px rgba(255,107,53,0.35)',
      fontFamily: "'DM Sans', sans-serif",
    },
    overrides || {}
  )
}

export function btnGhost(overrides) {
  return Object.assign(
    {
      background: 'rgba(255,107,53,0.1)',
      color: '#FF6B35',
      border: '1px solid rgba(255,107,53,0.3)',
      borderRadius: '12px',
      padding: '10px 20px',
      fontWeight: 600,
      fontSize: '14px',
      cursor: 'pointer',
      fontFamily: "'DM Sans', sans-serif",
    },
    overrides || {}
  )
}
