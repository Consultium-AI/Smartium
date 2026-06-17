import { AnimatePresence, motion } from 'framer-motion'
import { useReward } from '../context/RewardContext'
import WaifuSasugaToast from './waifu/WaifuSasugaToast'

export default function CoinNotification() {
  const { notifications } = useReward()

  return (
    <div className="fixed top-20 right-4 z-[9999] flex flex-col items-end gap-3 pointer-events-none sm:right-6">
      <AnimatePresence>
        {notifications.map((n) =>
          n.waifu && n.waifuAvatar ? (
            <WaifuSasugaToast
              key={n.id}
              avatarUrl={n.waifuAvatar}
              message={n.text}
              coins={n.coins ?? 10}
            />
          ) : (
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
          ),
        )}
      </AnimatePresence>
    </div>
  )
}
