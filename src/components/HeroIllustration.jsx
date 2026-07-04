// Original flat-style illustration — a developer sitting cross-legged with
// a laptop. Simple geometric shapes, no external assets, no stock art.
export default function HeroIllustration() {
  return (
    <svg viewBox="0 0 360 400" className="hero-illustration" role="img" aria-label="Illustration of a developer sitting with a laptop">
      {/* soft ground shadow */}
      <ellipse cx="180" cy="368" rx="110" ry="16" fill="#000000" opacity="0.25" />

      {/* crossed legs */}
      <path d="M60 330 Q120 300 180 320 Q240 300 300 330 L300 355 Q240 335 180 350 Q120 335 60 355 Z" fill="#3a3a3a" />
      <path d="M75 320 Q130 295 180 312" stroke="#232323" strokeWidth="4" fill="none" opacity="0.5" />

      {/* feet */}
      <ellipse cx="70" cy="352" rx="22" ry="12" fill="#161616" />
      <ellipse cx="292" cy="352" rx="22" ry="12" fill="#161616" />

      {/* torso */}
      <path d="M110 160 Q180 140 250 160 L262 300 Q180 330 98 300 Z" fill="#2b2b2b" />

      {/* arms reaching to laptop */}
      <path d="M112 190 Q80 220 96 258" stroke="#2b2b2b" strokeWidth="26" fill="none" strokeLinecap="round" />
      <path d="M248 190 Q282 220 264 258" stroke="#2b2b2b" strokeWidth="26" fill="none" strokeLinecap="round" />
      <circle cx="93" cy="262" r="14" fill="#e7c9b8" />
      <circle cx="266" cy="262" r="14" fill="#e7c9b8" />

      {/* laptop */}
      <g transform="translate(122 230)">
        <rect x="0" y="34" width="116" height="10" rx="2" fill="#b7b7b7" />
        <rect x="6" y="-34" width="104" height="68" rx="4" fill="#d6d6d6" />
        <rect x="14" y="-26" width="88" height="52" rx="2" fill="var(--amber)" opacity="0.85" />
      </g>

      {/* neck + head */}
      <rect x="163" y="118" width="34" height="30" fill="#e7c9b8" />
      <circle cx="180" cy="96" r="42" fill="#efd3c2" />

      {/* hair */}
      <path d="M138 92 Q136 48 180 46 Q224 48 222 92 Q210 66 180 66 Q150 66 138 92 Z" fill="#1c1c1c" />

      {/* headphones */}
      <path d="M136 90 Q136 44 180 40 Q224 44 224 90" stroke="var(--amber)" strokeWidth="8" fill="none" strokeLinecap="round" />
      <rect x="124" y="84" width="16" height="26" rx="6" fill="var(--amber)" />
      <rect x="220" y="84" width="16" height="26" rx="6" fill="var(--amber)" />

      {/* closed eyes — relaxed / focused expression */}
      <path d="M162 98 q6 6 12 0" stroke="#3a2a22" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M186 98 q6 6 12 0" stroke="#3a2a22" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  )
}
