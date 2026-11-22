import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently nearest the top of the viewport.
 *
 * The bottom of the page is special-cased. A final section shorter than the
 * viewport can never be scrolled up to the activation threshold — the document
 * runs out of scroll first — so it would never light up in the nav no matter how
 * far the reader scrolls. Whenever we are at the bottom, the last section wins.
 */
export function useScrollSpy(ids: readonly string[], offset = 120) {
  const [active, setActive] = useState<string>(ids[0] ?? '')

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const atBottom = window.scrollY + window.innerHeight >= doc.scrollHeight - 2

      if (atBottom) {
        setActive(ids[ids.length - 1] ?? '')
        return
      }

      let current = ids[0] ?? ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= offset) current = id
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids, offset])

  return active
}
