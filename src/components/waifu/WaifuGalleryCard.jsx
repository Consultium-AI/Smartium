import WaifuCssPortrait from './WaifuCssPortrait'

export default function WaifuGalleryCard({
  character,
  compact = false,
  muted = false,
  style = {},
  className = '',
}) {
  const { name, series, skin, hair, hairDark, outfit, eye, style: hairStyle, accessory, id, tileKey } = character
  const portraitId = tileKey || id || name

  return (
    <div
      className={`waifu-gallery-card overflow-hidden ${compact ? 'waifu-gallery-card--compact' : ''} ${muted ? 'waifu-gallery-card--muted' : ''} ${className}`}
      style={style}
      title={`${name} · ${series}`}
    >
      <div className="waifu-gallery-card__shine" aria-hidden />
      <div className="waifu-gallery-card__portrait">
        <WaifuCssPortrait
          portraitId={portraitId}
          skin={skin}
          hair={hair}
          hairDark={hairDark}
          outfit={outfit}
          eye={eye}
          style={hairStyle}
          accessory={accessory}
          className="h-full w-full"
        />
      </div>
      {!compact ? (
        <div className="waifu-gallery-card__meta">
          <span className="waifu-gallery-card__name">{name}</span>
          <span className="waifu-gallery-card__series">{series}</span>
        </div>
      ) : null}
    </div>
  )
}
