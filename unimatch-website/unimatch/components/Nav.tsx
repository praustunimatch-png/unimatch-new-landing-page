'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav>
        <Link href="/" className="nav-logo">Unimatch<span className="dot">.</span></Link>
        <div className="nav-links">
          <Link href="/students">Students</Link>
          <Link href="/universities">Universities</Link>
          <Link href="/companies">Companies</Link>
          <Link href="/investors">Investors</Link>
          <Link href="/about">About</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/careers" className="nav-cta">Join Us</Link>
        </div>
        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}
          className="mobile-menu-btn"
          aria-label="Menu"
        >
          <div style={{ width: 22, height: 2, background: 'var(--black)', marginBottom: 5 }} />
          <div style={{ width: 22, height: 2, background: 'var(--black)', marginBottom: 5 }} />
          <div style={{ width: 22, height: 2, background: 'var(--black)' }} />
        </button>
      </nav>
      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  )
}
