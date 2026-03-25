import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { googleOAuthClientId } from '../lib/firebase'

let gisInitializedForClientId = ''

function loadGisScript() {
  if (typeof window !== 'undefined' && window.google?.accounts?.id) {
    return Promise.resolve()
  }
  return new Promise((resolve, reject) => {
    if (document.querySelector('script[src="https://accounts.google.com/gsi/client"]')) {
      const t0 = Date.now()
      const poll = () => {
        if (window.google?.accounts?.id) {
          resolve()
          return
        }
        if (Date.now() - t0 > 12000) {
          reject(new Error('GIS timeout'))
          return
        }
        setTimeout(poll, 50)
      }
      poll()
      return
    }
    const s = document.createElement('script')
    s.src = 'https://accounts.google.com/gsi/client'
    s.async = true
    s.defer = true
    s.onload = () => resolve()
    s.onerror = () => reject(new Error('GIS script'))
    document.body.appendChild(s)
  })
}

/**
 * Google Identity Services-knop → JWT → Firebase signInWithCredential.
 * Vereist VITE_GOOGLE_OAUTH_CLIENT_ID + volledige Firebase-config.
 */
export default function GoogleSignInButton({ disabled }) {
  const containerRef = useRef(null)
  const navigate = useNavigate()
  const { signInWithGoogleCredential } = useAuth()

  useEffect(() => {
    if (disabled || !googleOAuthClientId || !containerRef.current) return

    let cancelled = false
    const el = containerRef.current

    loadGisScript()
      .then(() => {
        if (cancelled || !el || !window.google?.accounts?.id) return
        el.innerHTML = ''

        if (gisInitializedForClientId !== googleOAuthClientId) {
          window.google.accounts.id.initialize({
            client_id: googleOAuthClientId,
            callback: async (response) => {
              if (!response?.credential) return
              try {
                await signInWithGoogleCredential(response.credential)
                navigate('/summary', { replace: true })
              } catch {
                /* fout in AuthContext */
              }
            },
            auto_select: false,
            cancel_on_tap_outside: true,
          })
          gisInitializedForClientId = googleOAuthClientId
        }

        const width = Math.min(400, Math.max(280, el.offsetWidth || 400))
        window.google.accounts.id.renderButton(el, {
          type: 'standard',
          theme: 'outline',
          size: 'large',
          text: 'continue_with',
          width,
          locale: 'nl',
        })
      })
      .catch(() => {})

    return () => {
      cancelled = true
      if (el) el.innerHTML = ''
    }
  }, [disabled, navigate, signInWithGoogleCredential])

  if (!googleOAuthClientId) return null

  return (
    <div
      ref={containerRef}
      className="flex min-h-[44px] w-full max-w-full justify-center [&>div]:!w-full"
    />
  )
}
