import { useState, useEffect, useCallback } from 'react'
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
    window.dispatchEvent(new CustomEvent('smartium-access-updated', { detail: { uid } }))
  } catch { /* quota */ }
}

/**
 * After successful payment, write paidUntil to both localStorage and Firestore.
 */
export async function grantAccess(uid, paidUntil, plan) {
  writeLocalAccess(uid, { paidUntil, plan })

  try {
    const { db, isFirebaseConfigured } = await import('../lib/firebase')
    if (!isFirebaseConfigured || !db) return

    const { doc, setDoc, serverTimestamp } = await import('firebase/firestore')
    await setDoc(
      doc(db, 'users', uid),
      {
        paidUntil,
        plan,
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    )
  } catch (e) {
    console.warn('[Smartium] Firestore write for access failed, localStorage still valid:', e?.message)
  }
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

  const refresh = useCallback(() => {
    if (user?.uid) {
      setAccess(resolveFromLocal(user.uid))
    }
  }, [user?.uid])

  useEffect(() => {
    if (authLoading) return

    if (!user?.uid) {
      setAccess({ hasAccess: false, loading: false, paidUntil: null, plan: null })
      return
    }

    const uid = user.uid
    setAccess(resolveFromLocal(uid))

    const onAccessUpdated = (e) => {
      if (e.detail?.uid === uid) {
        setAccess(resolveFromLocal(uid))
      }
    }
    window.addEventListener('smartium-access-updated', onAccessUpdated)

    let unsub = null
    let cancelled = false

    async function listenFirestore() {
      try {
        const { db, isFirebaseConfigured } = await import('../lib/firebase')
        if (!isFirebaseConfigured || !db || cancelled) return

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
            }
          },
          () => {}
        )
      } catch {}
    }

    listenFirestore()

    return () => {
      cancelled = true
      window.removeEventListener('smartium-access-updated', onAccessUpdated)
      if (unsub) unsub()
    }
  }, [user?.uid, authLoading])

  return { ...access, refresh }
}
