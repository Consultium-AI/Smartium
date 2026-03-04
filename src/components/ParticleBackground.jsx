const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Soft gradient blobs - CSS animations for better performance */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary-200/30 blur-3xl animate-blob-slow" />
      <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] rounded-full bg-accent-200/20 blur-3xl animate-blob-slow-delayed" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-primary-100/40 blur-3xl" />

      {/* Decorative shapes - static for performance */}
      <div className="absolute top-20 right-1/4 w-16 h-16 rounded-2xl bg-accent-300/20 rotate-12" />
      <div className="absolute top-1/2 left-20 w-12 h-12 rounded-full bg-primary-300/30" />
      <div className="absolute bottom-1/4 right-20 w-20 h-20 rounded-3xl bg-accent-200/20 -rotate-12" />
    </div>
  )
}

export default ParticleBackground
