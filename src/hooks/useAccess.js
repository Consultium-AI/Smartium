import { useState, useEffect } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db, isFirebaseConfigured } from '../lib/firebase'
import { useAuth } from '../context/AuthContext'

const LOCAL_KEY = 'smartium_access'

function readLocalAccess(uid) {
  try {
    const raw = localStorage.getItem(`${LOCAL_KEY}:${uid}`)
    if (!raw) return null
    return JSON.parse(raw)
  } catch {
    return null
  }
}

export function writeLocalAccess(uid, data) {
  try {
    localStorage.setItem(`${LOCAL_KEY}:${uid}`, JSON.stringify(data))
  } catch { /* quota */ }
}

/**
 * Returns { hasAccess, loading, paidUntil, plan }
 * Reads from Firestore `users/{uid}` doc. Falls back to localStorage.
 */
export function useAccess() {
  const { user, loading: authLoading } = useAuth()
  const [access, setAccess] = useState({ hasAccess: false, loading: true, paidUntil: null, plan: null })

  useEffect(() => {
    if (authLoading) return

    if (!user?.uid) {
      setAccess({ hasAccess: false, loading: false, paidUntil: null, plan: null })
      return
    }

    const uid = user.uid
    const local = readLocalAccess(uid)
    if (local?.paidUntil && local.paidUntil > Date.now()) {
      setAccess({ hasAccess: true, loading: false, paidUntil: local.paidUntil, plan: local.plan })
    }

    if (!isFirebaseConfigured || !db) {
      if (local?.paidUntil && local.paidUntil > Date.now()) {
        setAccess({ hasAccess: true, loading: false, paidUntil: local.paidUntil, plan: local.plan })
      } else {
        setAccess({ hasAccess: false, loading: false, paidUntil: null, plan: null })
      }
      return
    }

    const ref = doc(db, 'users', uid)
    const unsub = onSnapshot(
      ref,
      (snap) => {
        if (snap.exists()) {
          const data = snap.data()
          const paidUntil = Number(data.paidUntil) || 0
          const plan = data.plan || null
          const hasAccess = paidUntil > Date.now()
          writeLocalAccess(uid, { paidUntil, plan })
          setAccess({ hasAccess, loading: false, paidUntil, plan })
        } else {
          const local2 = readLocalAccess(uid)
          if (local2?.paidUntil && local2.paidUntil > Date.now()) {
            setAccess({ hasAccess: true, loading: false, paidUntil: local2.paidUntil, plan: local2.plan })
          } else {
            setAccess({ hasAccess: false, loading: false, paidUntil: null, plan: null })
          }
        }
      },
      () => {
        const local2 = readLocalAccess(uid)
        if (local2?.paidUntil && local2.paidUntil > Date.now()) {
          setAccess({ hasAccess: true, loading: false, paidUntil: local2.paidUntil, plan: local2.plan })
        } else {
          setAccess({ hasAccess: false, loading: false, paidUntil: null, plan: null })
        }
      }
    )

    return () => unsub()
  }, [user?.uid, authLoading])

  return access
}
