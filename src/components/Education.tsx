import { education } from '../data/resume'
import { Section } from './Section'

export function Education() {
  return (
    <Section id="education" eyebrow="Background" title="Education">
      <div className="grid gap-4 sm:grid-cols-2">
        {education.map((e) => (
          <article
            key={e.school}
            className="reveal print-block rounded-2xl p-6"
            style={{ border: '1px solid var(--line)', backgroundColor: 'var(--panel)' }}
          >
            <p className="font-mono text-xs" style={{ color: 'var(--muted)' }}>
              {e.start} – {e.end}
            </p>
            <h3 className="mt-2 text-lg font-semibold tracking-tight">{e.school}</h3>
            <p className="mt-1 text-sm" style={{ color: 'var(--muted)' }}>
              {e.credential}
            </p>
            <p
              className="mt-3 inline-block rounded-full px-2.5 py-1 font-mono text-[11px]"
              style={{ backgroundColor: 'var(--accent-soft)', color: 'var(--accent)' }}
            >
              {e.detail}
            </p>
          </article>
        ))}
      </div>
    </Section>
  )
}
