import Reveal from './Reveal'
import { ABOUT } from '../data'

export default function About() {
  return (
    <section id="about">
      <Reveal className="section-head">
        <div className="kicker">About</div>
        <h2 className="title">Two years in, six modules owned.</h2>
      </Reveal>

      <div className="about-grid">
        <Reveal direction="left" className="about-copy">
          {ABOUT.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>

        <Reveal direction="right" className="stats">
          {ABOUT.stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="num">{s.num}</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
