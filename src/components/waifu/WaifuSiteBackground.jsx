import { WAIFU_PREMIUM_BG_URL } from '../../constants/waifuPremiumUsers'

export default function WaifuSiteBackground() {
  return (
    <div className="waifu-site-bg pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <img
        src={WAIFU_PREMIUM_BG_URL}
        alt=""
        className="waifu-site-bg__photo"
        draggable={false}
        decoding="async"
      />
      <div className="waifu-site-bg__overlay" />
    </div>
  )
}
