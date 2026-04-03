import { useState, useEffect } from 'react'
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

function resolveFromLocal(uid) {
  const local = readLocalAccess(uid)
  if (local?.paidUntil && local.paidUntil > Date.now()) {
    return { hasAccess: true, loading: false, paidUntil: local.paidUntil, plan: local.plan }
  }
  return { hasAccess: false, loading: false, paidUntil: null, plan: null }
}

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
    setAccess((prev) => ({ ...prev, ...resolveFromLocal(uid) }))

    let unsub = null
    let cancelled = false

    async function listenFirestore() {
      try {
        const { db, isFirebaseConfigured } = await import('../lib/firebase')
        if (!isFirebaseConfigured || !db || cancelled) {
          if (!cancelled) setAccess(resolveFromLocal(uid))
          return
        }

        const { doc, onSnapshot } = await import('firebase/firestore')
        const ref = doc(db, 'users', uid)

        unsub = onSnapshot(
          ref,
          (snap) => {
            if (cancelled) return
            if (snap.exists()) {
              const data = snap.data()
              const paidUntil = Number(data.paidUntil) || 0
              const plan = data.plan || null
              const hasAccess = paidUntil > Date.now()
              writeLocalAccess(uid, { paidUntil, plan })
              setAccess({ hasAccess, loading: false, paidUntil, plan })
            } else {
              if (!cancelled) setAccess(resolveFromLocal(uid))
            }
          },
          () => {
            if (!cancelled) setAccess(resolveFromLocal(uid))
          }
        )
      } catch {
        if (!cancelled) setAccess(resolveFromLocal(uid))
      }
    }

    listenFirestore()

    return () => {
      cancelled = true
      if (unsub) unsub()
    }
  }, [user?.uid, authLoading])

  return access
}
