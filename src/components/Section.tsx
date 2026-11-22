import type { ReactNode } from 'react'

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl px-6 py-12 sm:py-16">
      <header className="reveal mb-7">
        <p
          className="font-mono text-xs tracking-[0.2em] uppercase"
          style={{ color: 'var(--accent)' }}
        >
          {eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        <div className="mt-4 h-px w-full" style={{ backgroundColor: 'var(--line)' }} />
      </header>
      {children}
    </section>
  )
}
