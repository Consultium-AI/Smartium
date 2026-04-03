import { useState, useEffect, useCallback } from 'react'
import { useAuth } from '../context/AuthContext'
import { recoverAccessForUser } from '../lib/billingApi'

const LOCAL_KEY = 'smartium_access'
const ADMIN_EMAILS = new Set(['smartiumsupport@gmail.com'])

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
  writeLocalAccess(uid, {
    paidUntil,
    plan,
    subscriptionStopped: false,
    billingReminderOptOut: false,
  })

  try {
    const { db, isFirebaseConfigured } = await import('../lib/firebase')
    if (!isFirebaseConfigured || !db) return

    const { doc, setDoc, serverTimestamp } = await import('firebase/firestore')
    await setDoc(
      doc(db, 'users', uid),
      {
        paidUntil,
        plan,
        subscriptionStopped: false,
        billingReminderOptOut: false,
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
    return {
      hasAccess: true,
      loading: false,
      paidUntil: local.paidUntil,
      plan: local.plan,
      subscriptionStopped: Boolean(local.subscriptionStopped || local.billingReminderOptOut),
    }
  }
  return {
    hasAccess: false,
    loading: false,
    paidUntil: null,
    plan: local?.plan || null,
    subscriptionStopped: Boolean(local?.subscriptionStopped || local?.billingReminderOptOut),
  }
}

function isAdminEmail(email) {
  return ADMIN_EMAILS.has((email || '').trim().toLowerCase())
}

function resolveAdminAccess() {
  return { hasAccess: true, loading: false, paidUntil: null, plan: 'admin', subscriptionStopped: false }
}

export async function setSubscriptionStopped(uid, stopped, plan) {
  const local = readLocalAccess(uid) || {}
  writeLocalAccess(uid, {
    ...local,
    plan: local.plan || plan || null,
    subscriptionStopped: Boolean(stopped),
    billingReminderOptOut: Boolean(stopped),
  })

  try {
    const { db, isFirebaseConfigured } = await import('../lib/firebase')
    if (!isFirebaseConfigured || !db) return

    const { doc, setDoc, serverTimestamp } = await import('firebase/firestore')
    await setDoc(
      doc(db, 'users', uid),
      {
        plan: local.plan || plan || null,
        subscriptionStopped: Boolean(stopped),
        billingReminderOptOut: Boolean(stopped),
        subscriptionStoppedAt: stopped ? Date.now() : null,
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    )
  } catch (e) {
    console.warn('[Smartium] Failed to persist subscription-stop status to Firestore:', e?.message)
  }
}

export function useAccess() {
  const { user, loading: authLoading } = useAuth()
  const [access, setAccess] = useState({
    hasAccess: false,
    loading: true,
    paidUntil: null,
    plan: null,
    subscriptionStopped: false,
  })

  const refresh = useCallback(() => {
    if (isAdminEmail(user?.email)) {
      setAccess(resolveAdminAccess())
      return
    }
    if (user?.uid) {
      setAccess(resolveFromLocal(user.uid))
    }
  }, [user?.uid, user?.email])

  useEffect(() => {
    if (authLoading) return

    if (!user?.uid) {
      setAccess({ hasAccess: false, loading: false, paidUntil: null, plan: null, subscriptionStopped: false })
      return
    }

    if (isAdminEmail(user.email)) {
      setAccess(resolveAdminAccess())
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
          const subscriptionStopped = Boolean(data.subscriptionStopped || data.billingReminderOptOut)
          const hasAccess = paidUntil > Date.now()
          writeLocalAccess(uid, { paidUntil, plan, subscriptionStopped, billingReminderOptOut: subscriptionStopped })
          if (hasAccess || subscriptionStopped) {
            setAccess({ hasAccess, loading: false, paidUntil: paidUntil || null, plan, subscriptionStopped })
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
              subscriptionStopped: false,
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
              const subscriptionStopped = Boolean(data.subscriptionStopped || data.billingReminderOptOut)
              const hasAccess = paidUntil > Date.now()
              writeLocalAccess(uid, { paidUntil, plan, subscriptionStopped, billingReminderOptOut: subscriptionStopped })
              setAccess({ hasAccess, loading: false, paidUntil, plan, subscriptionStopped })
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

  const stopSubscription = useCallback(async () => {
    if (!user?.uid) return
    await setSubscriptionStopped(user.uid, true, access.plan)
    setAccess((prev) => ({ ...prev, subscriptionStopped: true }))
  }, [user?.uid, access.plan])

  return { ...access, refresh, stopSubscription }
}
