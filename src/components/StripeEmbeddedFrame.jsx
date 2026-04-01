import { EmbeddedCheckout, EmbeddedCheckoutProvider } from '@stripe/react-stripe-js'
import { getStripePromise } from '../lib/stripeClient'

/**
 * @param {{ clientSecret: string }} props
 */
export default function StripeEmbeddedFrame({ clientSecret }) {
  const stripePromise = getStripePromise()
  if (!stripePromise || !clientSecret) return null

  return (
    <EmbeddedCheckoutProvider
      stripe={stripePromise}
      options={{ clientSecret }}
      key={clientSecret}
    >
      <div className="stripe-embed mt-1 min-h-[28rem] w-full overflow-hidden rounded-xl border border-slate-200/90 bg-slate-50/50 shadow-inner dark:border-slate-600/80 dark:bg-slate-950/40">
        <EmbeddedCheckout />
      </div>
    </EmbeddedCheckoutProvider>
  )
}
