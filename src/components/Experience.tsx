import { useState } from 'react'
import { experience } from '../data/resume'
import { Section } from './Section'

export function Experience() {
  // Everything starts expanded: an employer should not have to click to read the
  // work. The toggle stays available for anyone who wants to collapse a role.
  const [collapsed, setCollapsed] = useState<string[]>([])

  const toggle = (id: string) =>
    setCollapsed((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))

  return (
    <Section id="experience" eyebrow="Where I've worked" title="Experience">
      <ol className="relative">
        {experience.map((job) => {
          const isOpen = !collapsed.includes(job.id)
          return (
            <li key={job.id} className="reveal print-block relative pb-8 pl-8 sm:pl-10">
              {/* timeline rail + node */}
              <span
                aria-hidden
                className="absolute top-2 left-[5px] h-full w-px"
                style={{ backgroundColor: 'var(--line)' }}
              />
              <span
                aria-hidden
                className="absolute top-2 left-0 h-[11px] w-[11px] rounded-full"
                style={{
                  backgroundColor: job.current ? 'var(--accent)' : 'var(--bg)',
                  border: `2px solid ${job.current ? 'var(--accent)' : 'var(--line)'}`,
                }}
              />

              <button
                onClick={() => toggle(job.id)}
                aria-expanded={isOpen}
                aria-controls={`job-${job.id}`}
                className="group w-full cursor-pointer text-left"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                    {job.role}
                    <span style={{ color: 'var(--muted)' }}> · {job.company}</span>
                  </h3>
                  <span
                    className="font-mono text-xs whitespace-nowrap"
                    style={{ color: job.current ? 'var(--accent)' : 'var(--muted)' }}
                  >
                    {job.start} – {job.end}
                  </span>
                </div>

                <p className="mt-1 text-sm" style={{ color: 'var(--muted)' }}>
                  {job.location}
                </p>

                <p className="mt-2.5 max-w-2xl text-sm leading-relaxed">{job.blurb}</p>

                {/* Tags stay visible whether or not the role is collapsed — they are
                    the fastest signal of what the work involved. */}
                <ul className="mt-3 flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full px-2.5 py-1 font-mono text-[11px]"
                      style={{ backgroundColor: 'var(--accent-soft)', color: 'var(--accent)' }}
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <span
                  className="no-print mt-3 inline-block font-mono text-xs transition-opacity group-hover:opacity-70"
                  style={{ color: 'var(--accent)' }}
                >
                  {isOpen ? '− Collapse' : `+ ${job.highlights.length} highlights`}
                </span>
              </button>

              <div
                id={`job-${job.id}`}
                className="grid transition-[grid-template-rows] duration-300 ease-out print:grid-rows-[1fr]"
                style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
              >
                <div className="overflow-hidden">
                  <ul className="mt-3 space-y-2">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm leading-relaxed">
                        <span aria-hidden style={{ color: 'var(--accent)' }}>
                          ▸
                        </span>
                        <span style={{ color: 'var(--muted)' }}>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
