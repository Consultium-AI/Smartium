import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SCROLL_TOP_ROUTES = new Set(['/', '/billing', '/login', '/summary', '/oefenvragen'])

export default function ScrollToTopRoutes() {
  const location = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const blokParam = params.get('blok')
    if (blokParam) return
    if (!SCROLL_TOP_ROUTES.has(location.pathname)) return
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname, location.search])

  return null
}
