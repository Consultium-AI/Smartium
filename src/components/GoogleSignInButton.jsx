import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { googleOAuthClientId, isFirebaseConfigured } from '../lib/firebase'
import { loadGisScript } from '../lib/googleOAuth'

let gisInitializedForClientId = ''

/** Officiële kleuren Google “G” (vereenvoudigd) */
function GoogleMark({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" width="20" height="20" aria-hidden>
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6C44.21 37.2 46.98 31.36 46.98 24.55z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  )
}

/**
 * Met Firebase: popup (juiste OAuth-client automatisch).
 * Zonder Firebase: Google Identity Services + optionele lokale sessie.
 */
export default function GoogleSignInButton({ disabled, redirectPath = '/summary' }) {
  const containerRef = useRef(null)
  const navigate = useNavigate()
  const { signInWithGoogleOAuth, signInWithGoogleFirebasePopup } = useAuth()
  const [popupBusy, setPopupBusy] = useState(false)

  useEffect(() => {
    if (disabled || isFirebaseConfigured || !googleOAuthClientId || !containerRef.current) return

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
                navigate(redirectPath, { replace: true })
              } catch {
                /* fout staat in AuthContext.error */
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
  }, [disabled, navigate, redirectPath, signInWithGoogleOAuth])

  if (isFirebaseConfigured) {
    return (
      <button
        type="button"
        disabled={disabled || popupBusy}
        onClick={async () => {
          setPopupBusy(true)
          try {
            await signInWithGoogleFirebasePopup()
            navigate(redirectPath, { replace: true })
          } catch {
            /* AuthContext.error */
          } finally {
            setPopupBusy(false)
          }
        }}
        className="flex min-h-[44px] w-full max-w-full items-center justify-center gap-3 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-[15px] font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:opacity-60 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
      >
        <GoogleMark className="shrink-0" />
        {popupBusy ? 'Bezig…' : 'Doorgaan met Google'}
      </button>
    )
  }

  if (!googleOAuthClientId) return null

  return (
    <div
      ref={containerRef}
      className="flex min-h-[44px] w-full max-w-full justify-center [&>div]:!w-full"
    />
  )
}
