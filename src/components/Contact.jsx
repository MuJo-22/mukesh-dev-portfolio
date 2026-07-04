import { useState } from 'react'
import Reveal from './Reveal'
import { PROFILE } from '../data'

export default function Contact({ onAskAi }) {
  const [copied, setCopied] = useState('')

  function copy(value, key) {
    navigator.clipboard?.writeText(value).then(() => {
      setCopied(key)
      setTimeout(() => setCopied(''), 1400)
    })
  }

  return (
    <section id="contact">
      <Reveal className="section-head">
        <div className="kicker">Contact</div>
        <h2 className="title">Open a line.</h2>
      </Reveal>

      <Reveal className="contact-panel">
        <div className="contact-lines">
          <div className="l">
            <span className="k">$ email</span> {PROFILE.email}
            <button className="copy-btn" onClick={() => copy(PROFILE.email, 'email')}>
              {copied === 'email' ? 'copied' : 'copy'}
            </button>
          </div>
          <div className="l">
            <span className="k">$ phone</span> {PROFILE.phone}
            <button className="copy-btn" onClick={() => copy(PROFILE.phoneRaw, 'phone')}>
              {copied === 'phone' ? 'copied' : 'copy'}
            </button>
          </div>
          <div className="l">
            <span className="k">$ linkedin</span>{' '}
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
              {PROFILE.linkedinLabel}
            </a>
          </div>
          <div className="l">
            <span className="k">$ status</span> <span style={{ color: 'var(--live)' }}>OPEN_TO_WORK = true</span>
          </div>
        </div>
        <div className="contact-ctas">
          <a className="btn btn-primary" href={`mailto:${PROFILE.email}`}>
            Send an email
          </a>
          <button className="btn btn-ghost" type="button" onClick={onAskAi}>
            Ask my AI
          </button>
        </div>
      </Reveal>
    </section>
  )
}
