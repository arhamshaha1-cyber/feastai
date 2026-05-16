# FeastAI — AI-Powered Food Assistant

Turn any ingredients into delicious recipes using AI.

## Quick Start

```bash
npm install
cp .env.example .env   # fill in your API keys
npm run dev            # opens at http://localhost:3000
```

## Deploy to Vercel

1. Push this folder to a GitHub repository
2. Go to https://vercel.com → New Project → Import your repo
3. Vercel auto-detects Vite — no build settings needed
4. Add your .env keys under Environment Variables in Vercel
5. Click Deploy

## Environment Variables

| Variable | Where to get it |
|---|---|
| VITE_ANTHROPIC_API_KEY | https://console.anthropic.com |
| VITE_FIREBASE_* | https://console.firebase.google.com |

## Project Structure

```
feastai/
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
├── .env.example
├── public/
│   └── logo.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── components/
    │   ├── Logo.jsx
    │   ├── Nav.jsx
    │   ├── Footer.jsx
    │   └── RecipeCard.jsx
    ├── pages/
    │   ├── LandingPage.jsx
    │   ├── AppPage.jsx
    │   ├── AuthPage.jsx
    │   ├── PricingPage.jsx
    │   ├── FeaturesPage.jsx
    │   ├── AboutPage.jsx
    │   ├── TermsPage.jsx
    │   └── PrivacyPage.jsx
    ├── hooks/
    │   └── useAuth.js
    ├── lib/
    │   ├── firebase.js
    │   └── anthropic.js
    └── styles/
        ├── globals.css
        └── theme.js
```
