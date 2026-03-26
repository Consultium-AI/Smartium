import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  updateProfile,
} from 'firebase/auth'
import { auth, isFirebaseConfigured } from '../lib/firebase'
import { parseGoogleIdTokenPayload } from '../lib/googleOAuth'
import { migrateGuestDataToUser } from '../utils/accountProgressStorage'

const DEMO_USERS_KEY = 'smartium_demo_users'
/** localStorage: demo + Google OAuth (zonder Firebase); uitloggen wist de sessie */
const DEMO_SESSION_KEY = 'smartium_demo_session'

const AuthContext = createContext(null)

function readDemoSession() {
  try {
    let raw = localStorage.getItem(DEMO_SESSION_KEY)
    if (!raw) {
      const legacy = sessionStorage.getItem(DEMO_SESSION_KEY)
      if (legacy) {
        try {
          localStorage.setItem(DEMO_SESSION_KEY, legacy)
        } catch {
          /* ignore */
        }
        sessionStorage.removeItem(DEMO_SESSION_KEY)
        raw = legacy
      }
    }
    if (!raw) return null
    return JSON.parse(raw)
  } catch {
    return null
  }
}

function writeDemoSession(user) {
  try {
    localStorage.setItem(DEMO_SESSION_KEY, JSON.stringify(user))
  } catch {
    /* quota / private mode */
  }
}

function clearLocalSession() {
  try {
    localStorage.removeItem(DEMO_SESSION_KEY)
  } catch {
    /* ignore */
  }
}

function readDemoUsers() {
  try {
    const raw = localStorage.getItem(DEMO_USERS_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function saveDemoUsers(users) {
  localStorage.setItem(DEMO_USERS_KEY, JSON.stringify(users))
}

/** @param {unknown} err */
function firebaseAuthMessage(err) {
  const code = err && typeof err === 'object' && 'code' in err ? String(err.code) : ''
  const messages = {
    'auth/email-already-in-use': 'Er bestaat al een account met dit e-mailadres.',
    'auth/invalid-email': 'Ongeldig e-mailadres.',
    'auth/invalid-credential': 'Onjuist e-mailadres of wachtwoord.',
    'auth/wrong-password': 'Onjuist e-mailadres of wachtwoord.',
    'auth/user-not-found': 'Onjuist e-mailadres of wachtwoord.',
    'auth/weak-password': 'Wachtwoord is te zwak; gebruik minimaal 6 tekens.',
    'auth/popup-closed-by-user': 'Het Google-venster werd gesloten voordat je kon inloggen.',
    'auth/popup-blocked': 'De browser blokkeerde het popup-venster. Sta popups toe voor deze site.',
    'auth/network-request-failed': 'Netwerkfout. Controleer je verbinding.',
  }
  return messages[code] || 'Inloggen is mislukt. Probeer het opnieuw.'
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!isFirebaseConfigured) {
      setUser(readDemoSession())
      setLoading(false)
      return
    }

    const unsub = onAuthStateChanged(auth, (u) => {
      if (u) {
        setUser(u)
      } else {
        setUser(readDemoSession())
      }
      setLoading(false)
    })
    return () => unsub()
  }, [])

  const clearError = useCallback(() => setError(null), [])

  const signIn = useCallback(async (email, password) => {
    setError(null)
    if (!isFirebaseConfigured) {
      const users = readDemoUsers()
      const found = users.find((u) => u.email.toLowerCase() === email.trim().toLowerCase())
      if (!found || found.password !== password) {
        setError('Onjuist e-mailadres of wachtwoord.')
        throw new Error('auth failed')
      }
      const sessionUser = {
        uid: `demo:${found.email}`,
        email: found.email,
        displayName: found.displayName || null,
        photoURL: null,
        isDemo: true,
      }
      writeDemoSession(sessionUser)
      setUser(sessionUser)
      migrateGuestDataToUser('guest', sessionUser.uid)
      return
    }
    try {
      const cred = await signInWithEmailAndPassword(auth, email.trim(), password)
      clearLocalSession()
      migrateGuestDataToUser('guest', cred.user.uid)
    } catch (err) {
      setError(firebaseAuthMessage(err))
      throw err
    }
  }, [])

  const signUp = useCallback(async (email, password, displayName) => {
    setError(null)
    const nameTrimmed = displayName?.trim() ?? ''
    if (!nameTrimmed) {
      setError('Vul je naam in.')
      throw new Error('name required')
    }
    if (!isFirebaseConfigured) {
      const users = readDemoUsers()
      if (users.some((u) => u.email.toLowerCase() === email.trim().toLowerCase())) {
        setError('Er bestaat al een account met dit e-mailadres.')
        throw new Error('exists')
      }
      const entry = {
        email: email.trim(),
        password,
        displayName: nameTrimmed,
      }
      saveDemoUsers([...users, entry])
      const sessionUser = {
        uid: `demo:${entry.email}`,
        email: entry.email,
        displayName: nameTrimmed,
        photoURL: null,
        isDemo: true,
      }
      writeDemoSession(sessionUser)
      setUser(sessionUser)
      migrateGuestDataToUser('guest', sessionUser.uid)
      return
    }
    try {
      const cred = await createUserWithEmailAndPassword(auth, email.trim(), password)
      await updateProfile(cred.user, { displayName: nameTrimmed })
      clearLocalSession()
      migrateGuestDataToUser('guest', cred.user.uid)
    } catch (err) {
      setError(firebaseAuthMessage(err))
      throw err
    }
  }, [])

  /**
   * Google Identity Services ID-token → lokale sessie (geen Firebase Auth voor Google).
   */
  const signInWithGoogleOAuth = useCallback(async (idToken) => {
    setError(null)
    if (!idToken) {
      setError('Geen Google-token ontvangen.')
      throw new Error('no token')
    }
    const payload = parseGoogleIdTokenPayload(idToken)
    if (!payload?.sub) {
      setError('Ongeldig Google-token.')
      throw new Error('invalid token')
    }
    const uid = `google:${payload.sub}`
    const sessionUser = {
      uid,
      email: payload.email ?? null,
      displayName: payload.name ?? payload.email ?? null,
      photoURL: payload.picture ?? null,
      provider: 'google',
    }
    writeDemoSession(sessionUser)
    if (isFirebaseConfigured && auth) {
      try {
        await firebaseSignOut(auth)
      } catch {
        /* geen actieve Firebase-sessie */
      }
    }
    setUser(sessionUser)
    migrateGuestDataToUser('guest', uid)
  }, [])

  const signOut = useCallback(async () => {
    setError(null)
    clearLocalSession()
    if (!isFirebaseConfigured) {
      setUser(null)
      return
    }
    await firebaseSignOut(auth)
    setUser(null)
  }, [])

  const value = useMemo(
    () => ({
      user,
      loading,
      error,
      clearError,
      signIn,
      signUp,
      signInWithGoogleOAuth,
      signOut,
      isFirebaseConfigured,
    }),
    [user, loading, error, clearError, signIn, signUp, signInWithGoogleOAuth, signOut]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
