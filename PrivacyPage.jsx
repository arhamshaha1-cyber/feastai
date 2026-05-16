var SECTIONS = [
  { title: 'What We Collect',              body: 'Email and display name (account creation). Ingredient lists you enter (sent to Anthropic API for processing, not permanently stored by FeastAI). Subscription status and payment metadata via Stripe (we never see card numbers).' },
  { title: 'What We Do NOT Collect',       body: 'We do not collect precise location data, device identifiers for advertising, browser history outside FeastAI, biometric data, or any information from children under 13.' },
  { title: 'How We Use Your Data',         body: 'To authenticate your account, send ingredient data to Anthropic API for recipe generation, process subscription payments, and send transactional emails. We do not use your data for advertising or third-party marketing.' },
  { title: 'Data Storage and Security',    body: 'Account data is stored in Firebase (Google Cloud, US region). All data in transit is encrypted via TLS 1.3. Passwords are never stored — Firebase manages authentication.' },
  { title: 'Third-Party Services',         body: 'We share data only with: Firebase (Google) for auth and storage, Anthropic for AI processing, and Stripe for payment processing. All are bound by strong data processing agreements.' },
  { title: 'Your Rights',                  body: 'You may request a copy of your data, correction of inaccurate data, or deletion of your account (within 30 days). Email privacy@feastai.app.' },
  { title: 'Cookies',                      body: 'We use only essential session cookies for authentication. No advertising cookies, no cross-site trackers.' },
  { title: "Children's Privacy",           body: 'FeastAI is not for users under 13. If we become aware of such data, we will delete it immediately.' },
]

export default function PrivacyPage() {
  return (
    <div style={{ paddingTop: 100, padding: '100px 24px 72px', maxWidth: 800, margin: '0 auto' }}>
      <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(32px,5vw,48px)', fontWeight: 800, marginBottom: 8 }}>
        Privacy Policy
      </h1>
      <p style={{ color: '#6B7280', marginBottom: 12, fontSize: 14 }}>Last updated: May 2025</p>
      <p style={{ color: '#34D399', fontWeight: 600, marginBottom: 48, fontSize: 15 }}>
        We believe in radical transparency. Here is exactly what we do and do not do with your data.
      </p>
      {SECTIONS.map(function(s, i) {
        return (
          <div key={i} style={{ marginBottom: 32, paddingBottom: 32, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <h2 style={{ color: '#34D399', fontSize: 16, fontWeight: 700, marginBottom: 12 }}>{s.title}</h2>
            <p style={{ color: '#9CA3AF', fontSize: 15, lineHeight: 1.8, margin: 0 }}>{s.body}</p>
          </div>
        )
      })}
      <p style={{ color: '#6B7280', fontSize: 14 }}>
        Questions? Email <a href="mailto:privacy@feastai.app" style={{ color: '#FF6B35' }}>privacy@feastai.app</a>. We respond within 48 hours.
      </p>
    </div>
  )
}
