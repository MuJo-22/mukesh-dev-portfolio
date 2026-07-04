import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'
import Ledger from './components/Ledger'
import Builds from './components/Builds'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AIChat from './components/AIChat'
import AmbientBackground from './components/AmbientBackground'

export default function App() {
  const [active, setActive] = useState('about')
  const [aiOpen, setAiOpen] = useState(false)

  // Scroll-spy: highlight the nav link for whichever section is in view.
  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <div className="grid-backdrop" />
      <AmbientBackground />
      <Nav active={active} />

      <main className="wrap">
        <Hero />
        <About />
        <Stack />
        <Ledger />
        <Builds />
        <Contact onAskAi={() => setAiOpen(true)} />
      </main>

      <Footer />

      <AIChat open={aiOpen} onOpen={() => setAiOpen(true)} onClose={() => setAiOpen(false)} />
    </>
  )
}
