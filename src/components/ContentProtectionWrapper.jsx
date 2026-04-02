import { useEffect, useRef, useCallback } from 'react'

const ContentProtectionWrapper = ({ children }) => {
  const wrapperRef = useRef(null)
  const blurTimeout = useRef(null)

  const setBlurred = useCallback((on) => {
    const el = wrapperRef.current
    if (!el) return
    if (on) {
      el.classList.add('blurred')
    } else {
      el.classList.remove('blurred')
    }
  }, [])

  useEffect(() => {
    const block = (e) => e.preventDefault()

    const blockKeys = (e) => {
      if (e.key === 'PrintScreen') {
        e.preventDefault()
        setBlurred(true)
        navigator.clipboard?.writeText?.('')?.catch?.(() => {})
        clearTimeout(blurTimeout.current)
        blurTimeout.current = setTimeout(() => setBlurred(false), 1200)
        return
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'p') { e.preventDefault(); return }
      if ((e.ctrlKey || e.metaKey) && ['c', 'x'].includes(e.key.toLowerCase())) { e.preventDefault(); return }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') { e.preventDefault(); return }
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && ['i', 'j', 'c', 's'].includes(e.key.toLowerCase())) { e.preventDefault(); return }
      if (e.key === 'F12') { e.preventDefault(); return }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'u') { e.preventDefault(); return }
    }

    const onVisibilityChange = () => {
      if (document.hidden) {
        setBlurred(true)
      } else {
        clearTimeout(blurTimeout.current)
        blurTimeout.current = setTimeout(() => setBlurred(false), 300)
      }
    }

    const onWindowBlur = () => setBlurred(true)
    const onWindowFocus = () => {
      clearTimeout(blurTimeout.current)
      blurTimeout.current = setTimeout(() => setBlurred(false), 300)
    }

    document.addEventListener('copy', block)
    document.addEventListener('cut', block)
    document.addEventListener('contextmenu', block)
    document.addEventListener('dragstart', block)
    document.addEventListener('keydown', blockKeys, true)
    document.addEventListener('visibilitychange', onVisibilityChange)
    window.addEventListener('blur', onWindowBlur)
    window.addEventListener('focus', onWindowFocus)

    return () => {
      clearTimeout(blurTimeout.current)
      document.removeEventListener('copy', block)
      document.removeEventListener('cut', block)
      document.removeEventListener('contextmenu', block)
      document.removeEventListener('dragstart', block)
      document.removeEventListener('keydown', blockKeys, true)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      window.removeEventListener('blur', onWindowBlur)
      window.removeEventListener('focus', onWindowFocus)
    }
  }, [setBlurred])

  return (
    <div className="protected-content" ref={wrapperRef}>
      <div className="protection-overlay" />
      {children}
    </div>
  )
}

export default ContentProtectionWrapper
