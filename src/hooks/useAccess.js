import { useState, useEffect, useCallback } from 'react'
import { useAuth } from '../context/AuthContext'
import { recoverAccessForUser } from '../lib/billingApi'

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
    const initial = resolveFromLocal(uid)
    setAccess({ ...initial, loading: !initial.hasAccess })

    const onAccessUpdated = (e) => {
      if (e.detail?.uid === uid) {
        setAccess(resolveFromLocal(uid))
      }
    }
    window.addEventListener('smartium-access-updated', onAccessUpdated)

    let unsub = null
    let cancelled = false

    async function loadAccountAccess() {
      // If local cache is still valid, allow immediately while snapshot keeps data fresh.
      if (initial.hasAccess) return

      try {
        const { db, isFirebaseConfigured } = await import('../lib/firebase')
        if (!isFirebaseConfigured || !db || cancelled) return

        const { doc, getDoc } = await import('firebase/firestore')
        const ref = doc(db, 'users', uid)
        const snap = await getDoc(ref)
        if (cancelled) return

        if (snap.exists()) {
          const data = snap.data()
          const paidUntil = Number(data.paidUntil) || 0
          const plan = data.plan || null
          const hasAccess = paidUntil > Date.now()
          if (hasAccess) {
            writeLocalAccess(uid, { paidUntil, plan })
            setAccess({ hasAccess: true, loading: false, paidUntil, plan })
            return
          }
        }
      } catch {
        // no-op: still try recover endpoint below
      }

      try {
        const recovered = await recoverAccessForUser(uid, user?.email || undefined)
        if (recovered?.paidUntil) {
          await grantAccess(uid, recovered.paidUntil, recovered.plan)
          if (!cancelled) {
            setAccess({
              hasAccess: Number(recovered.paidUntil) > Date.now(),
              loading: false,
              paidUntil: Number(recovered.paidUntil) || null,
              plan: recovered.plan || null,
            })
          }
          return
        }
      } catch {
        // no-op: user may simply not have active paid access
      }

      if (!cancelled) {
        setAccess((prev) => ({ ...prev, loading: false }))
      }
    }

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

    void loadAccountAccess()
    void listenFirestore()

    return () => {
      cancelled = true
      window.removeEventListener('smartium-access-updated', onAccessUpdated)
      if (unsub) unsub()
    }
  }, [user?.uid, user?.email, authLoading])

  return { ...access, refresh }
}
