/** Anime-stijl portret — puur SVG, geen afbeeldingen. */
export default function WaifuCssPortrait({
  skin = '#fde8dc',
  hair = '#7ec8f8',
  hairDark = '#4a90d9',
  outfit = '#2f4f7a',
  eye = '#8fd4ff',
  style = 'long',
  accessory,
  portraitId = 'default',
  className = '',
}) {
  const hairBack =
    style === 'twintail'
      ? 'M18 42 Q8 20 12 8 Q50 0 88 8 Q92 20 82 42 L78 55 Q50 48 22 55 Z'
      : style === 'bob'
        ? 'M14 50 Q10 20 50 6 Q90 20 86 50 L82 62 Q50 58 18 62 Z'
        : style === 'short'
          ? 'M16 48 Q14 22 50 10 Q86 22 84 48 L80 58 Q50 52 20 58 Z'
          : 'M12 55 Q6 18 50 4 Q94 18 88 55 L84 70 Q50 62 16 70 Z'

  return (
    <svg
      viewBox="0 0 100 130"
      className={className}
      aria-hidden
      role="presentation"
    >
      <defs>
        <linearGradient id={`hair-${portraitId}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={hair} />
          <stop offset="100%" stopColor={hairDark} />
        </linearGradient>
        <radialGradient id={`face-${portraitId}`} cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor={skin} />
          <stop offset="100%" stopColor={skin} stopOpacity="0.85" />
        </radialGradient>
      </defs>

      {/* outfit / shoulders */}
      <ellipse cx="50" cy="118" rx="34" ry="14" fill={outfit} opacity="0.95" />
      <path d="M28 95 Q50 88 72 95 L76 118 Q50 112 24 118 Z" fill={outfit} />

      {/* neck */}
      <rect x="44" y="82" width="12" height="14" rx="4" fill={skin} />

      {/* hair back */}
      <path d={hairBack} fill={`url(#hair-${portraitId})`} />

      {/* face */}
      <ellipse cx="50" cy="52" rx="24" ry="28" fill={`url(#face-${portraitId})`} />

      {/* bangs */}
      <path
        d="M26 52 Q28 28 50 22 Q72 28 74 52 Q68 38 50 34 Q32 38 26 52"
        fill={`url(#hair-${portraitId})`}
      />

      {/* horns — Zero Two */}
      {style === 'horns' ? (
        <>
          <path d="M32 18 L28 4 L38 16 Z" fill={hairDark} />
          <path d="M68 18 L72 4 L62 16 Z" fill={hairDark} />
        </>
      ) : null}

      {/* twintails */}
      {style === 'twintail' ? (
        <>
          <ellipse cx="14" cy="58" rx="10" ry="22" fill={hairDark} />
          <ellipse cx="86" cy="58" rx="10" ry="22" fill={hairDark} />
        </>
      ) : null}

      {/* blush */}
      <ellipse cx="36" cy="58" rx="6" ry="3" fill="#ffb4c8" opacity="0.45" />
      <ellipse cx="64" cy="58" rx="6" ry="3" fill="#ffb4c8" opacity="0.45" />

      {/* eyes */}
      <ellipse cx="40" cy="54" rx="5" ry="7" fill="#1a1025" />
      <ellipse cx="60" cy="54" rx="5" ry="7" fill="#1a1025" />
      <circle cx="41" cy="52" r="2" fill={eye} />
      <circle cx="61" cy="52" r="2" fill={eye} />
      <circle cx="42" cy="51" r="0.8" fill="#fff" opacity="0.9" />
      <circle cx="62" cy="51" r="0.8" fill="#fff" opacity="0.9" />

      {/* mouth */}
      <path d="M46 66 Q50 69 54 66" stroke="#e879a9" strokeWidth="1.2" fill="none" strokeLinecap="round" />

      {/* bunny ears — Mai */}
      {accessory === 'bunny' ? (
        <>
          <ellipse cx="32" cy="8" rx="7" ry="18" fill="#1a1a2e" transform="rotate(-12 32 8)" />
          <ellipse cx="68" cy="8" rx="7" ry="18" fill="#1a1a2e" transform="rotate(12 68 8)" />
          <ellipse cx="32" cy="8" rx="4" ry="12" fill="#fce7f3" transform="rotate(-12 32 8)" />
          <ellipse cx="68" cy="8" rx="4" ry="12" fill="#fce7f3" transform="rotate(12 68 8)" />
        </>
      ) : null}

      {/* eyepatch — Megumin */}
      {accessory === 'eyepatch' ? (
        <rect x="34" y="48" width="12" height="10" rx="2" fill="#111" />
      ) : null}
    </svg>
  )
}
