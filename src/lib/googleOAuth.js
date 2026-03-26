/**
 * Google Identity Services (OAuth 2.0) — zonder Firebase Auth.
 * Alleen de JWT-payload uit het ID-token lezen (client-side; geen handtekeningverificatie).
 */

/** @param {string} idToken */
export function parseGoogleIdTokenPayload(idToken) {
  if (!idToken || typeof idToken !== 'string') return null
  try {
    const parts = idToken.split('.')
    if (parts.length !== 3) return null
    let base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/')
    const pad = base64.length % 4
    if (pad === 2) base64 += '=='
    else if (pad === 3) base64 += '='
    const json = atob(base64)
    return JSON.parse(json)
  } catch {
    return null
  }
}

export function loadGisScript() {
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
