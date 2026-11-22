import { contact, profile } from '../data/resume'
import { Section } from './Section'

const links = [
  { label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  { label: 'Phone', value: contact.phone, href: `tel:${contact.phone.replace(/[^\d+]/g, '')}` },
  { label: 'LinkedIn', value: contact.linkedinLabel, href: contact.linkedin },
]

export function Contact() {
  return (
    <Section id="contact" eyebrow="Get in touch" title="Contact">
      <p className="reveal max-w-xl text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
        Open to conversations about QA, test automation and team process. The quickest way to
        reach me is email.
      </p>

      <ul className="reveal mt-10 grid gap-px overflow-hidden rounded-2xl sm:grid-cols-3"
          style={{ backgroundColor: 'var(--line)', border: '1px solid var(--line)' }}>
        {links.map((l) => (
          <li key={l.label} style={{ backgroundColor: 'var(--panel)' }}>
            <a
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="block p-6 transition-colors hover:opacity-70"
            >
              <span
                className="font-mono text-xs tracking-[0.15em] uppercase"
                style={{ color: 'var(--accent)' }}
              >
                {l.label}
              </span>
              <span className="mt-2 block text-sm break-words">{l.value}</span>
            </a>
          </li>
        ))}
      </ul>

      <footer className="mt-20 flex flex-wrap items-center justify-between gap-4 pt-8"
              style={{ borderTop: '1px solid var(--line)' }}>
        <p className="text-xs" style={{ color: 'var(--muted)' }}>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs" style={{ color: 'var(--muted)' }}>
          Built with React, Vite &amp; Tailwind
        </p>
      </footer>
    </Section>
  )
}
