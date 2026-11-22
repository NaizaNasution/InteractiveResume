import { useEffect } from 'react'

/**
 * Adds `.is-visible` to every `.reveal` element once it has scrolled into view.
 *
 * A plain IntersectionObserver set up once on mount is not enough here, for two
 * separate reasons:
 *
 *  1. When the viewport jumps — an anchor link, the End key, a fast wheel scroll —
 *     an element can travel from below the viewport to above it inside a single
 *     frame. The observer then reports it as *not* intersecting and never fires
 *     again, leaving that content invisible forever. So we also reveal anything
 *     that has already passed above the fold.
 *
 *  2. Sections that re-render their children (the skills filter) mount brand new
 *     `.reveal` nodes long after this effect ran. A one-shot querySelectorAll at
 *     mount never sees them, so they stay at opacity 0 permanently. We watch the
 *     DOM for added nodes and pick those up too.
 */
export function useReveal() {
  useEffect(() => {
    const hidden = () =>
      Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)'))

    // No IntersectionObserver (old browser): show everything, now and later.
    if (!('IntersectionObserver' in window)) {
      const showAll = () => hidden().forEach((el) => el.classList.add('is-visible'))
      showAll()
      const mo = new MutationObserver(showAll)
      mo.observe(document.body, { childList: true, subtree: true })
      return () => mo.disconnect()
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    )

    const observed = new WeakSet<Element>()

    /** Reveal what is already in view; start observing anything new below it. */
    const scan = () => {
      const limit = window.innerHeight * 0.92
      for (const el of hidden()) {
        if (el.getBoundingClientRect().top < limit) {
          el.classList.add('is-visible')
          io.unobserve(el)
        } else if (!observed.has(el)) {
          observed.add(el)
          io.observe(el)
        }
      }
    }

    // Debounced with a timer rather than requestAnimationFrame: rAF callbacks are
    // gated on the page actually rendering, so a tab that is not being painted
    // would never run the scan and newly mounted content would stay invisible.
    let timer = 0
    const schedule = () => {
      if (timer) return
      timer = window.setTimeout(() => {
        timer = 0
        scan()
      }, 0)
    }

    // childList only — adding `is-visible` is an attribute change, so this cannot
    // re-trigger itself.
    const mo = new MutationObserver(schedule)
    mo.observe(document.body, { childList: true, subtree: true })

    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    scan()

    return () => {
      io.disconnect()
      mo.disconnect()
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (timer) clearTimeout(timer)
    }
  }, [])
}
