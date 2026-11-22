import { useState } from 'react'
import { skills } from '../data/resume'
import { Section } from './Section'

const ALL = 'All'

export function Skills() {
  const [filter, setFilter] = useState<string>(ALL)
  const categories = [ALL, ...skills.map((g) => g.category)]
  const shown = filter === ALL ? skills : skills.filter((g) => g.category === filter)

  return (
    <Section id="skills" eyebrow="What I bring" title="Skills">
      <div className="no-print reveal mb-6 flex flex-wrap gap-2">
        {categories.map((c) => {
          const on = filter === c
          return (
            <button
              key={c}
              onClick={() => setFilter(c)}
              aria-pressed={on}
              className="rounded-full px-4 py-1.5 text-sm transition-colors"
              style={{
                border: `1px solid ${on ? 'var(--accent)' : 'var(--line)'}`,
                backgroundColor: on ? 'var(--accent-soft)' : 'transparent',
                color: on ? 'var(--accent)' : 'var(--muted)',
              }}
            >
              {c}
            </button>
          )
        })}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((group) => (
          <div
            key={group.category}
            className="reveal print-block rounded-2xl p-5"
            style={{ border: '1px solid var(--line)', backgroundColor: 'var(--panel)' }}
          >
            <h3 className="font-mono text-xs tracking-[0.15em] uppercase" style={{ color: 'var(--accent)' }}>
              {group.category}
            </h3>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-sm leading-relaxed"
                  style={{ color: 'var(--muted)' }}
                >
                  {/* Same marker the experience highlights use, so the two lists read
                      as one system. aria-hidden: the <li> already conveys list-ness. */}
                  <span aria-hidden style={{ color: 'var(--accent)' }}>
                    ▸
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
