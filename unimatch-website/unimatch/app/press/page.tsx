export default function PressPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="label">Press</div>
          <h1 className="h1" style={{ maxWidth: 600, marginBottom: '1.5rem' }}>
            Media resources<span className="dot">.</span>
          </h1>
          <p className="body-lg" style={{ maxWidth: 480 }}>
            Everything you need to write about Unimatch. Contact us directly for interviews, additional materials, or questions.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-100)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            <div>
              <div className="label">The one-liner</div>
              <div style={{ background: 'white', border: '1px solid var(--gray-200)', borderRadius: 12, padding: '2rem', fontFamily: 'Syne', fontSize: '1.2rem', fontWeight: 700, lineHeight: 1.5, letterSpacing: '-0.02em' }}>
                "Unimatch is the dedicated platform for the university decision — an AI-powered counselor, a verified global database, and a three-sided ecosystem serving students, universities, and student companies."
              </div>
            </div>
            <div>
              <div className="label">Key facts</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {[
                  ['Founded', '2025'],
                  ['Stage', 'Pre-seed'],
                  ['Student pricing', 'Free. Permanently.'],
                  ['Database', 'Global. Verified.'],
                  ['Press contact', 'press@uninav.app'],
                  ['General', 'hello@uninav.app'],
                ].map(([k, v], i) => (
                  <div key={i} style={{ display: 'flex', gap: '2rem', padding: '1rem 0', borderBottom: '1px solid var(--gray-200)' }}>
                    <div style={{ width: 130, fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--gray-400)', flexShrink: 0, paddingTop: '0.1rem' }}>{k}</div>
                    <div style={{ fontSize: '0.92rem', color: 'var(--black)', fontWeight: 500 }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h2 className="h2" style={{ marginBottom: '1rem' }}>Get in touch<span className="dot">.</span></h2>
          <p className="body-lg" style={{ marginBottom: '2.5rem' }}>We respond to press inquiries within one business day.</p>
          <a href="mailto:press@uninav.app" className="btn-primary">press@uninav.app →</a>
        </div>
      </section>
    </>
  )
}
