export const WEEK_MS = 7 * 24 * 60 * 60 * 1000
export const DAY_MS = 24 * 60 * 60 * 1000

/**
 * @param {string | null | undefined} plan
 * @param {number | null | undefined} paidUntil
 * @param {boolean | undefined} subscriptionStopped
 * @param {number} [now]
 */
export function getSubscriptionRenewalState(plan, paidUntil, subscriptionStopped, now = Date.now()) {
  const isComplimentaryUnlimited = plan === 'admin' || plan === 'vip'
  const isPaidPlan = plan === 'monthly' || plan === 'yearly'
  const paidUntilMs = Number(paidUntil) || 0
  const remainingMs = paidUntilMs - now

  const endDateText = paidUntilMs
    ? new Intl.DateTimeFormat('nl-NL', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }).format(new Date(paidUntilMs))
    : '—'

  const daysLeft = Math.ceil(remainingMs / DAY_MS)

  const showRenewalReminder =
    !isComplimentaryUnlimited &&
    !subscriptionStopped &&
    isPaidPlan &&
    paidUntilMs > now &&
    remainingMs <= WEEK_MS

  return {
    showRenewalReminder,
    daysLeft: Math.max(0, daysLeft),
    endDateText,
    renewalPlan: isPaidPlan ? plan : null,
    paidUntilMs,
  }
}
