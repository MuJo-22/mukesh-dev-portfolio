import Reveal from './Reveal'
import { BUILDS } from '../data'

export default function Builds() {
  return (
    <section id="builds">
      <Reveal className="section-head">
        <div className="kicker">Builds</div>
        <h2 className="title">Things I've shipped.</h2>
      </Reveal>

      <div className="builds-grid">
        {BUILDS.map((b) => (
          <Reveal key={b.title} className="card" direction="zoom">
            <div className="card-head">
              <span className="card-title">{b.title}</span>
              <span className={`status ${b.status}`}>
                <span className="d" />
                {b.statusLabel}
              </span>
            </div>
            <p>{b.desc}</p>
            <div className="tags">
              {b.tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
