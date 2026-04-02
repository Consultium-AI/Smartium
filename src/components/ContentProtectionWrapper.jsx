import { useEffect } from 'react'

const ContentProtectionWrapper = ({ children }) => {
  useEffect(() => {
    const block = (e) => e.preventDefault()

    const blockKeys = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'p') { e.preventDefault(); return }
      if ((e.ctrlKey || e.metaKey) && ['c', 'x'].includes(e.key.toLowerCase())) { e.preventDefault(); return }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') { e.preventDefault(); return }
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && ['i', 'j', 'c', 's'].includes(e.key.toLowerCase())) { e.preventDefault(); return }
      if (e.key === 'F12') { e.preventDefault(); return }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'u') { e.preventDefault(); return }
    }

    document.addEventListener('copy', block)
    document.addEventListener('cut', block)
    document.addEventListener('contextmenu', block)
    document.addEventListener('dragstart', block)
    document.addEventListener('keydown', blockKeys, true)

    return () => {
      document.removeEventListener('copy', block)
      document.removeEventListener('cut', block)
      document.removeEventListener('contextmenu', block)
      document.removeEventListener('dragstart', block)
      document.removeEventListener('keydown', blockKeys, true)
    }
  }, [])

  return (
    <div className="protected-content">
      {children}
    </div>
  )
}

export default ContentProtectionWrapper
