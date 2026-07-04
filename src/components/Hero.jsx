import { HERO, PROFILE } from '../data'
import HeroIllustration from './HeroIllustration'
import SocialRail from './SocialRail'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-card">
        {/* Bold decorative shapes anchored to the card corners — solid,
            not ambient, matching the reference layout's floating cubes. */}
        <span className="corner-shape corner-hex" aria-hidden="true" />
        <span className="corner-shape corner-cube" aria-hidden="true" />
        <span className="corner-badge" aria-hidden="true">🧑‍💻</span>

        <div className="hero-grid">
          <SocialRail />

          <div className="hero-content">
            <div className="eyebrow">
              <span className="bar" /> Hello
            </div>
            <h1 className="headline">
              I&rsquo;m <span className="accent">{PROFILE.name}</span>
            </h1>
            <p className="sub">{HERO.sub}</p>
            <div className="cta-row">
              <a href="#builds" className="btn btn-primary">
                View builds
              </a>
              <a href="/resume.pdf" className="btn btn-ghost" download="Mukesh_M_Resume.pdf">
                Download résumé
              </a>
              <a href="#contact" className="btn btn-ghost">
                Say hello
              </a>
            </div>
            <div className="status-pill">
              <span className="d" /> OPEN_TO_WORK — Full-stack · Deployment · AI/ML
            </div>
          </div>

          <div className="hero-illustration-wrap">
            <HeroIllustration />
          </div>
        </div>

        <div className="scroll-down" aria-hidden="true">
          <span className="chevron">⌄</span> scroll down
        </div>
      </div>
    </section>
  )
}
