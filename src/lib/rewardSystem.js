/**
 * Smartium Reward System
 * Coins, streaks, daily login bonus, and reward pfp unlocks.
 */

const PREFIX = 'smartium_rewards_v1'

export const COIN_REWARDS = {
  CORRECT_PRACTICE_ANSWER: 10,
  FIRST_SUMMARY_READ: 5,
  DAILY_LOGIN: 20,
  EXAM_PASS: 250,      // grade ≥ 5.5  (≥55%)
  EXAM_GOOD: 400,      // grade ≥ 7.0  (≥75%)
  EXAM_EXCELLENT: 600, // grade ≥ 9.0  (≥90%)
}

export const STREAK_MILESTONES = [
  { days: 3,  bonus: 50 },
  { days: 7,  bonus: 150 },
  { days: 14, bonus: 300 },
  { days: 30, bonus: 500 },
]

function defaultData() {
  return {
    coins: 0,
    totalCoinsEarned: 0,
    streak: 0,
    lastActivityDate: null,
    lastDailyLogin: null,
    unlockedPfps: [],
    selectedRewardPfp: null,
  }
}

function storageKey(userId) {
  return `${PREFIX}:${userId}`
}

export function getRewardData(userId) {
  if (!userId || userId === 'guest') return defaultData()
  try {
    const raw = localStorage.getItem(storageKey(userId))
    if (!raw) return defaultData()
    return { ...defaultData(), ...JSON.parse(raw) }
  } catch {
    return defaultData()
  }
}

export function saveRewardData(userId, data) {
  if (!userId || userId === 'guest') return
  try {
    localStorage.setItem(storageKey(userId), JSON.stringify(data))
  } catch {}
}

function todayStr() {
  return new Date().toISOString().slice(0, 10)
}
function yesterdayStr() {
  const d = new Date()
  d.setDate(d.getDate() - 1)
  return d.toISOString().slice(0, 10)
}

/**
 * Add coins and persist. Returns updated data or null if skipped.
 */
export function addCoins(userId, amount) {
  if (!userId || userId === 'guest' || !amount || amount <= 0) return null
  const data = getRewardData(userId)
  const updated = {
    ...data,
    coins: (data.coins || 0) + amount,
    totalCoinsEarned: (data.totalCoinsEarned || 0) + amount,
  }
  saveRewardData(userId, updated)
  return updated
}

/**
 * Update daily streak. Safe to call multiple times per day.
 * Returns { newStreak, bonusCoins, milestoneDay, data }.
 * data is null if streak was already updated today.
 */
export function updateStreak(userId) {
  const data = getRewardData(userId)
  const today = todayStr()
  const yesterday = yesterdayStr()

  if (data.lastActivityDate === today) {
    return { newStreak: data.streak, bonusCoins: 0, milestoneDay: null, data: null }
  }

  let newStreak = 1
  if (data.lastActivityDate === yesterday) {
    newStreak = (data.streak || 0) + 1
  }

  const milestone = STREAK_MILESTONES.find(m => m.days === newStreak)
  const bonusCoins = milestone ? milestone.bonus : 0
  const milestoneDay = milestone ? newStreak : null

  const updated = {
    ...data,
    streak: newStreak,
    lastActivityDate: today,
    coins: (data.coins || 0) + bonusCoins,
    totalCoinsEarned: (data.totalCoinsEarned || 0) + bonusCoins,
  }
  saveRewardData(userId, updated)
  return { newStreak, bonusCoins, milestoneDay, data: updated }
}

/**
 * Claim daily login bonus. Returns coins awarded (0 if already claimed today).
 */
export function claimDailyLogin(userId) {
  if (!userId || userId === 'guest') return 0
  const data = getRewardData(userId)
  const today = todayStr()
  if (data.lastDailyLogin === today) return 0
  const amount = COIN_REWARDS.DAILY_LOGIN
  const updated = {
    ...data,
    coins: (data.coins || 0) + amount,
    totalCoinsEarned: (data.totalCoinsEarned || 0) + amount,
    lastDailyLogin: today,
  }
  saveRewardData(userId, updated)
  return amount
}

/**
 * Spend coins to unlock a reward pfp.
 * Returns { success, reason, data }.
 */
export function buyRewardPfp(userId, pfpId, cost) {
  if (!userId || userId === 'guest') return { success: false, reason: 'not_logged_in', data: null }
  const data = getRewardData(userId)
  if ((data.unlockedPfps || []).includes(pfpId)) {
    return { success: true, reason: 'already_owned', data }
  }
  if ((data.coins || 0) < cost) {
    return { success: false, reason: 'insufficient_coins', data }
  }
  const updated = {
    ...data,
    coins: (data.coins || 0) - cost,
    unlockedPfps: [...(data.unlockedPfps || []), pfpId],
  }
  saveRewardData(userId, updated)
  return { success: true, reason: 'purchased', data: updated }
}

/**
 * Set the active reward pfp (or null to clear).
 */
export function setSelectedRewardPfp(userId, pfpId) {
  if (!userId || userId === 'guest') return
  const data = getRewardData(userId)
  saveRewardData(userId, { ...data, selectedRewardPfp: pfpId ?? null })
}
