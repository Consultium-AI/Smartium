import { motion } from 'framer-motion'

const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Soft gradient blobs */}
      <motion.div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary-200/30 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/3 -left-32 w-[400px] h-[400px] rounded-full bg-accent-200/20 blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-primary-100/40 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Decorative shapes */}
      <motion.div
        className="absolute top-20 right-1/4 w-16 h-16 rounded-2xl bg-accent-300/20 rotate-12"
        animate={{ rotate: [12, 20, 12], y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 left-20 w-12 h-12 rounded-full bg-primary-300/30"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-20 w-20 h-20 rounded-3xl bg-accent-200/20 -rotate-12"
        animate={{ rotate: [-12, -20, -12] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </div>
  )
}

export default ParticleBackground
