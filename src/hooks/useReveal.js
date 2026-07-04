import { useEffect, useRef, useState } from 'react'

// Reveals an element (fade + slide) every time it scrolls into view, and
// resets it when it scrolls back out — so the animation plays again both
// scrolling down AND scrolling back up.
export function useReveal(options = { threshold: 0.15 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect prefers-reduced-motion: just show it immediately.
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setVisible(true)
      return
    }

    // Toggle visibility both ways: animate in when it enters the viewport,
    // reset when it leaves, so it plays again on the way back up too.
    const io = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting)
    }, options)

    io.observe(el)
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [ref, visible]
}
