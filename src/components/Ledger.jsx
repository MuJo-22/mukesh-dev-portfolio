import Reveal from './Reveal'
import { LEDGER } from '../data'

export default function Ledger() {
  return (
    <section id="ledger">
      <Reveal className="section-head">
        <div className="kicker">Ledger</div>
        <h2 className="title">A running record of the work.</h2>
      </Reveal>

      <div className="ledger">
        {LEDGER.map((entry) => (
          <Reveal key={entry.role} className="entry">
            <div className="entry-head">
              <span className="entry-date">{entry.date}</span>
              <span className="entry-role">{entry.role}</span>
            </div>
            <div className="entry-co">{entry.company}</div>
            <ul>
              {entry.bullets.map((b, i) => (
                // eslint-disable-next-line react/no-danger
                <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
