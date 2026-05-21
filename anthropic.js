const KEY = import.meta.env.VITE_ANTHROPIC_API_KEY
const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${KEY}`

function prompt(ingredients, cuisine, budget) {
  const note = budget
    ? ' Every meal MUST cost under $5 total. Prioritise cheap pantry staples.'
    : ''
  return (
    'You are FeastAI, a world-class chef and nutritionist.\n\n' +
    'Ingredients the user has: ' + ingredients.join(', ') + '.\n\n' +
    'Generate exactly 3 delicious ' + cuisine + ' recipes using mainly these ingredients.' + note + '\n\n' +
    'Rules:\n' +
    '- You may add up to 3 common pantry staples (salt, oil, water, basic spices).\n' +
    '- Steps must be clear for a beginner cook.\n' +
    '- Nutrition values should be realistic estimates.\n\n' +
    'Respond ONLY with valid JSON — no markdown fences, no extra text:\n\n' +
    '{\n' +
    '  "recipes": [\n' +
    '    {\n' +
    '      "name": "Recipe Name",\n' +
    '      "emoji": "🍛",\n' +
    '      "description": "One appetising sentence",\n' +
    '      "time": "25 mins",\n' +
    '      "difficulty": "Easy",\n' +
    '      "servings": 2,\n' +
    '      "estimatedCost": "$3.50",\n' +
    '      "calories": 420,\n' +
    '      "protein": 28,\n' +
    '      "carbs": 45,\n' +
    '      "fat": 12,\n' +
    '      "ingredients": ["200g chicken breast, diced"],\n' +
    '      "steps": ["Heat oil in a pan over medium heat..."],\n' +
    '      "tip": "A genuinely useful chef tip"\n' +
    '    }\n' +
    '  ]\n' +
    '}'
  )
}

export async function generateRecipes(ingredients, cuisine, budget) {
  if (!KEY || KEY === 'your_anthropic_api_key_here') {
    throw new Error('MISSING_KEY')
  }

  
const res = await fetch(URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    contents: [
      {
        parts: [
          {
            text: prompt(ingredients, cuisine, budget)
          }
        ]
      }
    ]
})


if (!res.ok) {
  const e = await res.json().catch(() => ({}))
  throw new Error(e.error?.message || 'API error ' + res.status)
                         
    
  }

  const data = await res.json()
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text || ''
  const clean = text.replace(/```json/g, '').replace(/```/g, '').trim()
  const parsed = JSON.parse(clean)

  if (!Array.isArray(parsed.recipes)) throw new Error('Unexpected response shape')
  return parsed.recipes
}
