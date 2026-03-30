import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey &&
  firebaseConfig.authDomain &&
  firebaseConfig.projectId &&
  firebaseConfig.appId
)

const envGoogleClientId = (import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID || '').trim()
/** Alleen voor GIS zonder Firebase. Met Firebase: gebruik `signInWithGoogleFirebasePopup` (geen client-ID in .env nodig). */
const DEMO_GIS_CLIENT_ID =
  '835372229666-qie3rqo789150gbu3vqaicito6ddaltd.apps.googleusercontent.com'

export const googleOAuthClientId = isFirebaseConfigured
  ? envGoogleClientId
  : envGoogleClientId || DEMO_GIS_CLIENT_ID

let app = null
/** @type {import('firebase/auth').Auth | null} */
let auth = null
/** @type {import('firebase/firestore').Firestore | null} */
let db = null

if (isFirebaseConfigured) {
  app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig)
  auth = getAuth(app)
  db = getFirestore(app)
}

export { auth, db }
