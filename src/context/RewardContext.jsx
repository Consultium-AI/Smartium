import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react'
import { useAuth } from './AuthContext'
import {
  getRewardData,
  addCoins,
  updateStreak,
  claimDailyLogin,
  buyRewardPfp,
  setSelectedRewardPfp,
} from '../lib/rewardSystem'

const RewardContext = createContext(null)

const EMPTY_DATA = {
  coins: 0,
  totalCoinsEarned: 0,
  streak: 0,
  lastActivityDate: null,
  lastDailyLogin: null,
  unlockedPfps: [],
  selectedRewardPfp: null,
}

export function RewardProvider({ children }) {
  const { user } = useAuth()
  const userId = user?.uid || null
  const notifIdRef = useRef(0)

  const [rewardData, setRewardData] = useState(EMPTY_DATA)
  const [notifications, setNotifications] = useState([])

  const refreshRewardData = useCallback(() => {
    if (!userId || userId === 'guest') {
      setRewardData(EMPTY_DATA)
      return
    }
    setRewardData(getRewardData(userId))
  }, [userId])

  useEffect(() => {
    refreshRewardData()
  }, [refreshRewardData])

  const showNotification = useCallback((text) => {
    const id = ++notifIdRef.current
    setNotifications(prev => [...prev, { id, text }])
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id))
    }, 2800)
  }, [])

  /**
   * Award coins for an activity. Also updates daily streak.
   * @param {number} amount - Coins to award
   * @param {string} [label] - Optional label for the notification
   */
  const awardCoins = useCallback((amount, label) => {
    if (!userId || userId === 'guest') return
    const updated = addCoins(userId, amount)
    if (!updated) return
    setRewardData(updated)
    showNotification(`+${amount} 🪙${label ? ` — ${label}` : ''}`)

    // Update streak once per day (no-op if already done today)
    const { bonusCoins, milestoneDay, data: streakData } = updateStreak(userId)
    if (streakData) {
      setRewardData(streakData)
      if (bonusCoins > 0) {
        showNotification(`🔥 ${milestoneDay}-daagse streak! +${bonusCoins} bonus!`)
      }
    }
  }, [userId, showNotification])

  /**
   * Spend coins to purchase a reward pfp.
   * Returns { success, reason }.
   */
  const purchasePfp = useCallback((pfpId, cost) => {
    if (!userId) return { success: false, reason: 'not_logged_in' }
    const result = buyRewardPfp(userId, pfpId, cost)
    if (result.data) setRewardData(result.data)
    return result
  }, [userId])

  /**
   * Set the active reward pfp (saves immediately, no Save button needed).
   */
  const activateRewardPfp = useCallback((pfpId) => {
    if (!userId) return
    setSelectedRewardPfp(userId, pfpId)
    setRewardData(prev => ({ ...prev, selectedRewardPfp: pfpId }))
  }, [userId])

  /**
   * Clear the active reward pfp (fall back to regular photoURL).
   */
  const deactivateRewardPfp = useCallback(() => {
    if (!userId) return
    setSelectedRewardPfp(userId, null)
    setRewardData(prev => ({ ...prev, selectedRewardPfp: null }))
  }, [userId])

  // Claim daily login bonus once per session/day
  useEffect(() => {
    if (!userId || userId === 'guest') return
    const claimed = claimDailyLogin(userId)
    if (claimed > 0) {
      refreshRewardData()
      setTimeout(() => {
        showNotification(`🌅 Dagelijkse login: +${claimed} 🪙`)
      }, 1500)
    }
  }, [userId]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <RewardContext.Provider value={{
      coins: rewardData.coins,
      totalCoinsEarned: rewardData.totalCoinsEarned,
      streak: rewardData.streak,
      unlockedPfps: rewardData.unlockedPfps,
      selectedRewardPfp: rewardData.selectedRewardPfp,
      notifications,
      awardCoins,
      purchasePfp,
      activateRewardPfp,
      deactivateRewardPfp,
      refreshRewardData,
    }}>
      {children}
    </RewardContext.Provider>
  )
}

export function useReward() {
  const ctx = useContext(RewardContext)
  if (!ctx) throw new Error('useReward must be used inside RewardProvider')
  return ctx
}
