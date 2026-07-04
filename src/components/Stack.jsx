import Reveal from './Reveal'
import { STACK } from '../data'

export default function Stack() {
  return (
    <section id="stack">
      <Reveal className="section-head">
        <div className="kicker">Stack</div>
        <h2 className="title">What I actually build with.</h2>
      </Reveal>

      <div className="stack-grid">
        {STACK.map((pkg) => (
          <Reveal key={pkg.name} className="pkg" direction="zoom">
            <div className="pkg-head">
              <span className="pkg-name">{pkg.name}</span>
              <span className="pkg-tag">{pkg.tag}</span>
            </div>
            <div className="pkg-items">
              {pkg.items.map((item) => (
                <span className="pkg-item" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
