var SECTIONS = [
  { title: '1. Acceptance of Terms',      body: 'By accessing FeastAI you agree to these Terms. If you disagree, do not use the service.' },
  { title: '2. Description of Service',   body: 'FeastAI provides AI-powered recipe suggestions based on user-provided ingredients. Recipes are suggestions only. Users are responsible for verifying ingredient safety, allergens, and safe cooking temperatures.' },
  { title: '3. User Accounts',            body: 'You are responsible for your account credentials. Notify us immediately of any unauthorised use. We use Firebase Authentication for secure identity management.' },
  { title: '4. Subscription and Billing', body: 'Premium plans are billed monthly or annually via Stripe. Cancel anytime from account settings. Refunds available within 7 days of any charge.' },
  { title: '5. AI-Generated Content',     body: 'Recipes are AI-generated and may contain errors. Always verify cooking times, temperatures, and allergen information independently. FeastAI is not liable for health issues arising from AI suggestions.' },
  { title: '6. Acceptable Use',           body: 'Do not attempt to reverse-engineer the AI, submit automated requests at scale, share account credentials, or violate applicable laws.' },
  { title: '7. Changes to Terms',         body: 'We will notify users via email at least 14 days before any material changes take effect.' },
  { title: '8. Governing Law',            body: 'These Terms are governed by the laws of the State of Delaware, United States.' },
]

export default function TermsPage() {
  return (
    <div style={{ paddingTop: 100, padding: '100px 24px 72px', maxWidth: 800, margin: '0 auto' }}>
      <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(32px,5vw,48px)', fontWeight: 800, marginBottom: 8 }}>
        Terms of Service
      </h1>
      <p style={{ color: '#6B7280', marginBottom: 48, fontSize: 14 }}>Last updated: May 2025</p>
      {SECTIONS.map(function(s, i) {
        return (
          <div key={i} style={{ marginBottom: 32, paddingBottom: 32, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <h2 style={{ color: '#FF6B35', fontSize: 16, fontWeight: 700, marginBottom: 12 }}>{s.title}</h2>
            <p style={{ color: '#9CA3AF', fontSize: 15, lineHeight: 1.8, margin: 0 }}>{s.body}</p>
          </div>
        )
      })}
    </div>
  )
}
