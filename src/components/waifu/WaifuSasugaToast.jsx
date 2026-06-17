import { motion } from 'framer-motion'

export default function WaifuSasugaToast({ avatarUrl, message, coins = 10 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 60, scale: 0.92 }}
      transition={{ type: 'spring', stiffness: 340, damping: 24 }}
      className="waifu-sasuga-toast flex items-end justify-end gap-0"
      role="status"
      aria-live="polite"
    >
      <div className="waifu-sasuga-bubble relative mb-3 mr-2 max-w-[min(280px,calc(100vw-7rem))] rounded-2xl border-2 border-pink-300/80 bg-white/95 px-4 py-3 shadow-xl shadow-pink-500/25 backdrop-blur-sm">
        <p className="text-sm font-black leading-snug text-pink-700">{message}</p>
        <p className="mt-1 text-xs font-bold text-fuchsia-600">+{coins} 🪙</p>
        <span className="waifu-sasuga-bubble__tail" aria-hidden />
      </div>

      <motion.div
        initial={{ scale: 0.6, rotate: -8 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 420, damping: 18, delay: 0.05 }}
        className="waifu-sasuga-avatar shrink-0"
      >
        <img
          src={avatarUrl}
          alt=""
          className="h-[72px] w-[72px] rounded-full border-[3px] border-pink-400 object-cover object-top shadow-lg shadow-pink-500/40 ring-2 ring-white/80 sm:h-20 sm:w-20"
          draggable={false}
        />
      </motion.div>
    </motion.div>
  )
}
