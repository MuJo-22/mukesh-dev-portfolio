import { useState } from 'react'
import { NAV_LINKS } from '../data'

export default function Nav({ active }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="logo">
          <span className="dot" /> Mukesh M
        </div>

        <nav className={`links ${open ? 'open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href.slice(1) ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#contact">
          Open to work →
        </a>

        <button className="burger" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
          ☰
        </button>
      </div>
    </header>
  )
}
