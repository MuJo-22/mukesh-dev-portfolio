import { useReveal } from '../hooks/useReveal'

export default function Reveal({ children, className = '', direction = '' }) {
  const [ref, visible] = useReveal()
  const dirClass = direction ? `from-${direction}` : ''
  return (
    <div ref={ref} className={`reveal ${dirClass} ${visible ? 'in' : ''} ${className}`}>
      {children}
    </div>
  )
}
