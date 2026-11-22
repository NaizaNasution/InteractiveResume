import { languages, profile } from '../data/resume'
import { Section } from './Section'

export function About() {
  return (
    <Section id="about" eyebrow="Profile" title="About">
      <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
        <p className="reveal text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
          {profile.summary}
        </p>

        <div className="reveal">
          <h3
            className="font-mono text-xs tracking-[0.15em] uppercase"
            style={{ color: 'var(--accent)' }}
          >
            Languages
          </h3>
          <ul className="mt-4 space-y-3">
            {languages.map((l) => (
              <li key={l.name}>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-sm font-medium">{l.name}</span>
                  <span className="text-xs" style={{ color: 'var(--muted)' }}>
                    {l.level}
                  </span>
                </div>
                <div
                  className="mt-1.5 flex gap-1"
                  role="img"
                  aria-label={`${l.name}: ${l.level}`}
                >
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      aria-hidden
                      className="h-1 flex-1 rounded-full"
                      style={{
                        backgroundColor: i < l.strength ? 'var(--accent)' : 'var(--line)',
                      }}
                    />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
