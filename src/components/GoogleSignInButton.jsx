import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { googleOAuthClientId } from '../lib/firebase'
import { loadGisScript } from '../lib/googleOAuth'

let gisInitializedForClientId = ''

/**
 * Google Identity Services-knop → ID-token JWT → lokale sessie (geen Firebase).
 */
export default function GoogleSignInButton({ disabled }) {
  const containerRef = useRef(null)
  const navigate = useNavigate()
  const { signInWithGoogleOAuth } = useAuth()

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
                await signInWithGoogleOAuth(response.credential)
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
  }, [disabled, navigate, signInWithGoogleOAuth])

  if (!googleOAuthClientId) return null

  return (
    <div
      ref={containerRef}
      className="flex min-h-[44px] w-full max-w-full justify-center [&>div]:!w-full"
    />
  )
}
