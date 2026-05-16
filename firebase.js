import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const cfg = {
  apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:             import.meta.env.VITE_FIREBASE_APP_ID,
}

const configured =
  typeof cfg.apiKey === 'string' &&
  cfg.apiKey.length > 10 &&
  cfg.apiKey !== 'your_firebase_api_key'

let auth = null
let db = null

if (configured) {
  const app = initializeApp(cfg)
  auth = getAuth(app)
  db = getFirestore(app)
} else {
  console.warn(
    '[FeastAI] Firebase not configured — running in demo mode.\n' +
    'Copy .env.example → .env and add your Firebase credentials.'
  )
}

export { auth, db, configured }
