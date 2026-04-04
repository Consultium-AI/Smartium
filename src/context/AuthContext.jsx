import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithCredential,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut as firebaseSignOut,
  updateProfile,
} from 'firebase/auth'
import { auth, db, isFirebaseConfigured } from '../lib/firebase'
import { hydrateFromCloud, triggerCloudProgressSyncNow } from '../lib/cloudUserProgress'
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

function normalizeUsername(value) {
  return (value || '').trim().toLowerCase()
}

function updateDemoUserProfile(currentUser, nextDisplayName, nextPhotoURL) {
  const email = currentUser?.email?.toLowerCase()
  if (!email) return
  const users = readDemoUsers()
  const updated = users.map((u) => {
    if (u.email?.toLowerCase() !== email) return u
    return {
      ...u,
      displayName: nextDisplayName ?? u.displayName ?? null,
      photoURL: nextPhotoURL ?? u.photoURL ?? null,
    }
  })
  saveDemoUsers(updated)
}

/**
 * @param {unknown} err
 * @param {boolean} [googleFlow] — true voor Google/GIS: `auth/invalid-credential` is dan geen e-mail/wachtwoord-fout
 */
function firebaseAuthMessage(err, googleFlow = false) {
  const code = err && typeof err === 'object' && 'code' in err ? String(err.code) : ''
  if (code === 'auth/invalid-credential' && googleFlow) {
    return 'Google-inloggen mislukt. Controleer in Firebase: Authentication → Google ingeschakeld, en Authorized domains (smartium.nl, localhost). Of gebruik e-mail/wachtwoord.'
  }
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

function isPermissionDeniedError(err) {
  const code = err && typeof err === 'object' && 'code' in err ? String(err.code) : ''
  return code === 'permission-denied' || code === 'firestore/permission-denied'
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const lastHydratedUid = useRef(null)

  useEffect(() => {
    if (!isFirebaseConfigured) {
      setUser(readDemoSession())
      setLoading(false)
      return
    }

    const unsub = onAuthStateChanged(auth, async (u) => {
      if (u) {
        if (lastHydratedUid.current !== u.uid) {
          lastHydratedUid.current = u.uid
          // Eerst guest → uid, daarna cloud: anders schrijft hydrate vóór migratie een lege bundel.
          migrateGuestDataToUser('guest', u.uid)
          await hydrateFromCloud(u.uid)
        }
        setUser(u)
      } else {
        lastHydratedUid.current = null
        setUser(readDemoSession())
      }
      setLoading(false)
    })
    return () => unsub()
  }, [])

  const clearError = useCallback(() => setError(null), [])

  const resolveEmailFromUsername = useCallback(async (usernameInput) => {
    const usernameNormalized = normalizeUsername(usernameInput)
    if (!usernameNormalized || !isFirebaseConfigured || !db) return null
    try {
      const { collection, getDocs, limit, query, where } = await import('firebase/firestore')
      const q = query(
        collection(db, 'users'),
        where('usernameNormalized', '==', usernameNormalized),
        limit(1)
      )
      const snap = await getDocs(q)
      if (snap.empty) return null
      const data = snap.docs[0].data() || {}
      return typeof data.email === 'string' ? data.email.trim() : null
    } catch {
      return null
    }
  }, [])

  const signIn = useCallback(async (identifier, password) => {
    setError(null)
    const loginId = identifier?.trim() || ''

    if (!isFirebaseConfigured) {
      const users = readDemoUsers()
      const loginIdLower = loginId.toLowerCase()
      const found = users.find((u) =>
        u.email.toLowerCase() === loginIdLower ||
        (u.username && normalizeUsername(u.username) === loginIdLower)
      )
      if (!found || found.password !== password) {
        setError('Onjuiste gebruikersnaam/e-mail of wachtwoord.')
        throw new Error('auth failed')
      }
      const sessionUser = {
        uid: `demo:${found.email}`,
        email: found.email,
        displayName: found.displayName || null,
        photoURL: null,
        username: found.username || null,
        isDemo: true,
      }
      writeDemoSession(sessionUser)
      setUser(sessionUser)
      migrateGuestDataToUser('guest', sessionUser.uid)
      return
    }

    try {
      const emailForAuth = loginId.includes('@')
        ? loginId
        : (await resolveEmailFromUsername(loginId))

      if (!emailForAuth) {
        setError('Onjuiste gebruikersnaam/e-mail of wachtwoord.')
        throw new Error('unknown username')
      }

      await signInWithEmailAndPassword(auth, emailForAuth, password)
      clearLocalSession()
    } catch (err) {
      setError(firebaseAuthMessage(err))
      throw err
    }
  }, [resolveEmailFromUsername])

  const signUp = useCallback(async (email, password, displayName, username) => {
    setError(null)
    const emailTrimmed = email.trim()
    const nameTrimmed = displayName?.trim() ?? ''
    const usernameTrimmed = username?.trim() ?? ''
    const usernameNormalized = normalizeUsername(usernameTrimmed)

    if (!nameTrimmed) {
      setError('Vul je naam in.')
      throw new Error('name required')
    }
    if (!usernameTrimmed) {
      setError('Vul een gebruikersnaam in.')
      throw new Error('username required')
    }
    if (!/^[a-zA-Z0-9._-]{3,24}$/.test(usernameTrimmed)) {
      setError('Gebruikersnaam: 3-24 tekens, alleen letters/cijfers en . _ -')
      throw new Error('invalid username')
    }

    if (!isFirebaseConfigured) {
      const users = readDemoUsers()
      if (users.some((u) => u.email.toLowerCase() === emailTrimmed.toLowerCase())) {
        setError('Er bestaat al een account met dit e-mailadres.')
        throw new Error('exists')
      }
      if (users.some((u) => normalizeUsername(u.username) === usernameNormalized)) {
        setError('Deze gebruikersnaam is al in gebruik.')
        throw new Error('username exists')
      }
      const entry = {
        email: emailTrimmed,
        password,
        displayName: nameTrimmed,
        username: usernameTrimmed,
      }
      saveDemoUsers([...users, entry])
      const sessionUser = {
        uid: `demo:${entry.email}`,
        email: entry.email,
        displayName: nameTrimmed,
        photoURL: null,
        username: usernameTrimmed,
        isDemo: true,
      }
      writeDemoSession(sessionUser)
      setUser(sessionUser)
      migrateGuestDataToUser('guest', sessionUser.uid)
      return
    }

    try {
      if (db) {
        try {
          const { collection, getDocs, limit, query, where } = await import('firebase/firestore')
          const q = query(
            collection(db, 'users'),
            where('usernameNormalized', '==', usernameNormalized),
            limit(1)
          )
          const exists = await getDocs(q)
          if (!exists.empty) {
            setError('Deze gebruikersnaam is al in gebruik.')
            throw new Error('username exists')
          }
        } catch (err) {
          // Bij strikte Firestore rules (alleen eigen uid leesbaar) is deze pre-check niet mogelijk
          // vóór accountcreatie. Sla de check dan over zodat registreren kan doorgaan.
          if (!isPermissionDeniedError(err)) throw err
        }
      }

      const methods = await fetchSignInMethodsForEmail(auth, emailTrimmed)
      if (methods.length > 0) {
        setError('Er bestaat al een account met dit e-mailadres.')
        throw new Error('email exists')
      }

      const cred = await createUserWithEmailAndPassword(auth, emailTrimmed, password)
      await updateProfile(cred.user, { displayName: nameTrimmed })
      if (db) {
        const { doc, serverTimestamp, setDoc } = await import('firebase/firestore')
        await setDoc(
          doc(db, 'users', cred.user.uid),
          {
            email: emailTrimmed,
            username: usernameTrimmed,
            usernameNormalized,
            displayName: nameTrimmed,
            updatedAt: serverTimestamp(),
          },
          { merge: true }
        )
      }
      clearLocalSession()
    } catch (err) {
      setError(firebaseAuthMessage(err))
      throw err
    }
  }, [])

  /**
   * Google Identity Services ID-token.
   * Met Firebase: signInWithCredential → zelfde uid op elk apparaat + Firestore-sync.
   * Zonder Firebase: lokale sessie alleen op dit apparaat.
   */
  const signInWithGoogleOAuth = useCallback(async (idToken) => {
    setError(null)
    if (!idToken) {
      setError('Geen Google-token ontvangen.')
      throw new Error('no token')
    }
    if (isFirebaseConfigured && auth) {
      clearLocalSession()
      try {
        await signInWithCredential(auth, GoogleAuthProvider.credential(idToken))
      } catch (err) {
        setError(firebaseAuthMessage(err, true))
        throw err
      }
      return
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
    setUser(sessionUser)
    migrateGuestDataToUser('guest', uid)
  }, [])

  /** Google via Firebase-popup — gebruikt OAuth-client van je Firebase-project (geen VITE_GOOGLE_OAUTH_CLIENT_ID nodig). */
  const signInWithGoogleFirebasePopup = useCallback(async () => {
    setError(null)
    if (!isFirebaseConfigured || !auth) {
      setError('Firebase is niet geconfigureerd.')
      throw new Error('no firebase')
    }
    clearLocalSession()
    const provider = new GoogleAuthProvider()
    provider.setCustomParameters({ prompt: 'select_account' })
    try {
      await signInWithPopup(auth, provider)
    } catch (err) {
      setError(firebaseAuthMessage(err, true))
      throw err
    }
  }, [])

  const signOut = useCallback(async () => {
    setError(null)
    if (isFirebaseConfigured && auth?.currentUser?.uid) {
      await triggerCloudProgressSyncNow(auth.currentUser.uid)
    }
    clearLocalSession()
    if (!isFirebaseConfigured) {
      setUser(null)
      return
    }
    await firebaseSignOut(auth)
    setUser(null)
  }, [])

  const requestPasswordReset = useCallback(async (email) => {
    setError(null)
    const emailTrimmed = email?.trim() || ''
    if (!emailTrimmed) {
      setError('Vul eerst je e-mailadres in.')
      throw new Error('email required')
    }
    if (!emailTrimmed.includes('@')) {
      setError('Voor wachtwoord resetten heb je je e-mailadres nodig.')
      throw new Error('email required for reset')
    }
    if (!isFirebaseConfigured || !auth) {
      setError('Wachtwoord resetten is alleen beschikbaar met Firebase Authentication.')
      throw new Error('no firebase')
    }
    try {
      await sendPasswordResetEmail(auth, emailTrimmed)
    } catch (err) {
      setError(firebaseAuthMessage(err))
      throw err
    }
  }, [])

  const updateUserProfile = useCallback(async ({ displayName, photoURL }) => {
    const nameTrimmed = displayName?.trim() || null
    const photoTrimmed = photoURL?.trim() || null

    if (!user) throw new Error('Niet ingelogd.')

    if (!isFirebaseConfigured || user.isDemo) {
      const merged = {
        ...user,
        displayName: nameTrimmed,
        photoURL: photoTrimmed,
      }
      writeDemoSession(merged)
      updateDemoUserProfile(user, nameTrimmed, photoTrimmed)
      setUser(merged)
      return merged
    }

    if (!auth?.currentUser) throw new Error('Geen actieve Firebase sessie.')

    await updateProfile(auth.currentUser, {
      displayName: nameTrimmed,
      photoURL: photoTrimmed,
    })

    const merged = {
      ...user,
      displayName: nameTrimmed,
      photoURL: photoTrimmed,
    }
    setUser(merged)
    return merged
  }, [user])

  const value = useMemo(
    () => ({
      user,
      loading,
      error,
      clearError,
      signIn,
      signUp,
      signInWithGoogleOAuth,
      signInWithGoogleFirebasePopup,
      signOut,
      requestPasswordReset,
      updateUserProfile,
      isFirebaseConfigured,
    }),
    [
      user,
      loading,
      error,
      clearError,
      signIn,
      signUp,
      signInWithGoogleOAuth,
      signInWithGoogleFirebasePopup,
      signOut,
      requestPasswordReset,
      updateUserProfile,
    ]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
