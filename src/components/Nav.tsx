import { useEffect, useState } from 'react'
import { sections } from '../data/resume'
import { useScrollSpy } from '../hooks/useScrollSpy'

const ids = sections.map((s) => s.id)

export function Nav({ theme, onToggleTheme }: { theme: string; onToggleTheme: () => void }) {
  const active = useScrollSpy(ids)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="no-print fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'color-mix(in srgb, var(--bg) 85%, transparent)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--line)' : 'transparent'}`,
      }}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Spacer: balances the controls on the right so the links stay centred. */}
        <div aria-hidden className="w-9" />

        <ul className="hidden items-center gap-1 md:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="rounded-full px-3 py-1.5 text-sm transition-colors"
                style={{
                  color: active === s.id ? 'var(--accent)' : 'var(--muted)',
                  backgroundColor: active === s.id ? 'var(--accent-soft)' : 'transparent',
                }}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <button
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="grid h-9 w-9 place-items-center rounded-full transition-colors hover:opacity-70"
            style={{ border: '1px solid var(--line)' }}
          >
            <span aria-hidden className="text-sm">
              {theme === 'dark' ? '☀' : '☾'}
            </span>
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-full md:hidden"
            style={{ border: '1px solid var(--line)' }}
          >
            <span aria-hidden className="text-sm">
              {open ? '✕' : '☰'}
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <ul
          className="md:hidden"
          style={{ borderTop: '1px solid var(--line)', backgroundColor: 'var(--bg)' }}
        >
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="block px-6 py-3 text-sm"
                style={{
                  color: active === s.id ? 'var(--accent)' : 'var(--ink)',
                  borderTop: '1px solid var(--line)',
                }}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
