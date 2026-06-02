import { AnimatePresence, motion } from 'framer-motion'
import { useReward } from '../context/RewardContext'

export default function CoinNotification() {
  const { notifications } = useReward()

  return (
    <div className="fixed top-20 right-4 z-[9999] flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {notifications.map(n => (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, x: 60, scale: 0.85 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 60, scale: 0.85 }}
            transition={{ type: 'spring', stiffness: 320, damping: 26 }}
            className="flex items-center gap-2 rounded-2xl border border-amber-300/60 bg-amber-500 px-4 py-2.5 text-sm font-bold text-white shadow-lg"
          >
            {n.text}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
