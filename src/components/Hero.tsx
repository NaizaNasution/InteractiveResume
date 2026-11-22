import portrait from '../assets/portrait.jpg'
import { contact, profile } from '../data/resume'
import { CopyEmail } from './CopyEmail'

export function Hero() {

  return (
    <section id="top" className="mx-auto w-full max-w-5xl px-6 pt-28 pb-10 sm:pt-32 sm:pb-14">
      <div className="grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="reveal is-visible">
          <h1 className="text-4xl leading-[1.08] font-semibold tracking-tight sm:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-4 text-xl sm:text-2xl" style={{ color: 'var(--muted)' }}>
            {profile.title}
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {profile.tagline}
          </p>

          <div className="no-print mt-8 flex flex-wrap items-center gap-3">
            <CopyEmail />
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-70"
              style={{ border: '1px solid var(--line)' }}
            >
              LinkedIn ↗
            </a>
            <button
              onClick={() => window.print()}
              className="rounded-full px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-70"
              style={{ border: '1px solid var(--line)' }}
            >
              Save as PDF
            </button>
          </div>
        </div>

        <div className="reveal is-visible order-first md:order-last">
          <div className="relative mx-auto w-48 sm:w-60 md:w-full md:max-w-xs">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-3xl"
              style={{ backgroundColor: 'var(--accent-soft)', transform: 'rotate(-3deg)' }}
            />
            <img
              src={portrait}
              alt={`Portrait of ${profile.name}`}
              width={640}
              height={936}
              className="relative aspect-[3/4] w-full rounded-2xl object-cover object-top"
              style={{ border: '1px solid var(--line)' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
