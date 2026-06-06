import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem', marginBottom: '2rem' }}>
          <div>
            <div className="footer-logo">Unimatch<span style={{ color: 'var(--pink)' }}>.</span></div>
            <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', maxWidth: 280, lineHeight: 1.6 }}>
              The dedicated platform for the university decision. Free for every student, forever.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '0.75rem' }}>Platform</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <Link href="/students" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '0.85rem' }}>Students</Link>
                <Link href="/universities" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '0.85rem' }}>Universities</Link>
                <Link href="/companies" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '0.85rem' }}>Companies</Link>
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '0.75rem' }}>Company</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <Link href="/about" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '0.85rem' }}>About</Link>
                <Link href="/investors" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '0.85rem' }}>Investors</Link>
                <Link href="/careers" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '0.85rem' }}>Careers</Link>
                <Link href="/press" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '0.85rem' }}>Press</Link>
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '0.75rem' }}>Legal</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <Link href="/privacy" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '0.85rem' }}>Privacy</Link>
                <Link href="/terms" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '0.85rem' }}>Terms</Link>
              </div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ fontSize: '0.75rem' }}>© 2025 Unimatch. All rights reserved.</div>
          <a href="https://ba.uninav.app" style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
            Early prototype →
          </a>
        </div>
      </div>
    </footer>
  )
}
