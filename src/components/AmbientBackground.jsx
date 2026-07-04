// Ambient, always-on animated background. Runs automatically — no click or
// hover needed. Sits fixed behind all page content (z-index: 0) and shows
// through the transparent gaps between panels as you scroll.
//
// Mix of: outlined squares, pseudo-3D cubes, hexagons, and small dev-themed
// mono-font glyphs — drifting slowly with a gentle bob and rotation.
// Respects prefers-reduced-motion.

const ELEMENTS = [
  { type: 'square', top: '8%', left: '6%', size: 46, duration: 16, delay: 0, rotate: 8 },
  { type: 'cube', top: '62%', left: '3%', size: 30, duration: 20, delay: 2, rotate: -10 },
  { type: 'hex', top: '24%', left: '90%', size: 44, duration: 18, delay: 1, rotate: 12 },
  { type: 'cube', top: '78%', left: '88%', size: 40, duration: 22, delay: 3, rotate: -6 },
  { type: 'square', top: '48%', left: '48%', size: 26, duration: 24, delay: 4, rotate: 15, filled: true },
  { type: 'hex', top: '90%', left: '30%', size: 34, duration: 20, delay: 2.2, rotate: -8 },

  { type: 'glyph', text: '</>', top: '15%', left: '78%', duration: 19, delay: 1.5, size: 26 },
  { type: 'glyph', text: '{ }', top: '70%', left: '18%', duration: 21, delay: 0.5, size: 24 },
  { type: 'glyph', text: ';', top: '38%', left: '10%', duration: 17, delay: 2.5, size: 30 },
  { type: 'glyph', text: '$_', top: '85%', left: '55%', duration: 23, delay: 1, size: 22 },
]

export default function AmbientBackground() {
  return (
    <div className="dev-bg" aria-hidden="true">
      {ELEMENTS.map((el, i) => {
        const style = {
          top: el.top,
          left: el.left,
          '--duration': `${el.duration}s`,
          '--delay': `${el.delay}s`,
          '--rotate': `${el.rotate || 0}deg`,
        }

        if (el.type === 'square') {
          return (
            <span
              key={i}
              className={`float-el float-square ${el.filled ? 'filled' : ''}`}
              style={{ ...style, width: el.size, height: el.size }}
            />
          )
        }

        if (el.type === 'cube') {
          return (
            <span
              key={i}
              className="float-el float-cube"
              style={{ ...style, width: el.size, height: el.size }}
            />
          )
        }

        if (el.type === 'hex') {
          return (
            <span
              key={i}
              className="float-el float-hex"
              style={{ ...style, width: el.size, height: el.size }}
            />
          )
        }

        return (
          <span key={i} className="float-el float-glyph" style={{ ...style, fontSize: el.size }}>
            {el.text}
          </span>
        )
      })}
    </div>
  )
}
