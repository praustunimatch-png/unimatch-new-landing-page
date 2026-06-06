import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="label">About</div>
          <h1 className="h1" style={{ maxWidth: 720, marginBottom: '1.5rem' }}>
            We're building the place that should have existed for years<span className="dot">.</span>
          </h1>
          <p className="body-lg" style={{ maxWidth: 560 }}>
            Every major life decision has a dedicated platform. The university decision — one of the most consequential a person will ever make — has nothing. Unimatch is closing that gap.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-100)' }}>
        <div className="container-narrow">
          <div className="label">The mission</div>
          <h2 className="h2" style={{ marginBottom: '2rem' }}>
            The quality of your guidance shouldn't depend on what your parents can afford<span className="dot">.</span>
          </h2>
          <p className="body-lg" style={{ marginBottom: '1.25rem' }}>
            The student with a private counselor and the student with nothing are making the same decision. Not with the same resources. Not with the same odds. A private counselor costs $3,000–$10,000. That guidance has never been available to most students.
          </p>
          <p className="body-lg" style={{ marginBottom: '1.25rem' }}>
            Unimatch changes that. The student side of the platform is free — permanently, structurally, by design. We monetize the ecosystem around students, never the students themselves.
          </p>
          <p className="body-lg">
            That is not a feature. It is the reason we exist.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="label">The team</div>
          <h2 className="h2" style={{ marginBottom: '0.75rem' }}>Small. Early. Serious<span className="dot">.</span></h2>
          <p className="body-lg" style={{ maxWidth: 480, marginBottom: '3rem' }}>We're building the founding team now. If you want to shape what Unimatch becomes from the start, see our open roles.</p>
          <Link href="/careers" className="btn-primary">View open roles →</Link>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--black)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div className="label" style={{ color: 'var(--pink)' }}>Press & media</div>
              <h2 className="h2" style={{ color: 'white', marginBottom: '1rem' }}>Writing about Unimatch<span className="dot">?</span></h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                We're happy to provide background, quotes, and materials. Reach us directly.
              </p>
              <Link href="mailto:press@uninav.app" className="btn-pink">press@uninav.app →</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { label: 'Full name', value: 'Unimatch' },
                { label: 'Founded', value: '2025' },
                { label: 'Stage', value: 'Pre-seed' },
                { label: 'Domain', value: 'uninav.app' },
                { label: 'Press contact', value: 'press@uninav.app' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '2rem', padding: '0.85rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ width: 120, fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', flexShrink: 0 }}>{item.label}</div>
                  <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
