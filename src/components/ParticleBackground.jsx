const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
      {/* Subtiel raster — rustiger dan eerdere blobs/mesh */}
      <div className="absolute inset-0 hero-grid-pattern opacity-[0.22] dark:opacity-[0.14]" />
    </div>
  )
}

export default ParticleBackground
