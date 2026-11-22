import { useEffect, useState } from 'react'
import { contact } from '../data/resume'

export function CopyEmail() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const t = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(t)
  }, [copied])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopied(true)
    } catch {
      // Clipboard blocked — fall back to opening the mail client.
      window.location.href = `mailto:${contact.email}`
    }
  }

  return (
    <button
      onClick={copy}
      className="rounded-full px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-80"
      style={{ backgroundColor: 'var(--accent)', color: 'var(--bg)' }}
    >
      {copied ? '✓ Email copied' : 'Copy email'}
    </button>
  )
}
