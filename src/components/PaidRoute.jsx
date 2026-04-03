import { Navigate, useLocation } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useAccess } from '../hooks/useAccess'
import { canFreePlanAccessRoute } from '../utils/freePlanAccess'

export default function PaidRoute({ children }) {
  const location = useLocation()
  const { user, loading: authLoading } = useAuth()
  const { hasAccess, plan, loading: accessLoading } = useAccess()

  if (authLoading || accessLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f8f9fb] dark:bg-[#0a0d12]">
        <Loader2 className="h-8 w-8 animate-spin text-primary-500" strokeWidth={2} />
      </div>
    )
  }

  if (!user) {
    return <Navigate to={`/login?redirect=${encodeURIComponent(window.location.pathname + window.location.search)}`} replace />
  }

  const hasPaidAccess = hasAccess && plan !== 'free'
  const canUseFreePlanForRoute = canFreePlanAccessRoute(location.pathname, location.search)

  if (!hasPaidAccess && !canUseFreePlanForRoute) {
    return <Navigate to="/billing" replace />
  }

  return children
}
