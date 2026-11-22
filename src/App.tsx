import { About } from './components/About'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Skills } from './components/Skills'
import { useReveal } from './hooks/useReveal'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme, toggle } = useTheme()
  useReveal()

  return (
    <>
      <a
        href="#about"
        className="no-print sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:px-4 focus:py-2"
        style={{ backgroundColor: 'var(--accent)', color: 'var(--bg)' }}
      >
        Skip to content
      </a>

      <Nav theme={theme} onToggleTheme={toggle} />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
    </>
  )
}
