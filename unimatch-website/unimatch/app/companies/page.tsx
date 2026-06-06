import Link from 'next/link'

export default function CompaniesPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="label">For companies</div>
          <h1 className="h1" style={{ maxWidth: 700, marginBottom: '1.5rem' }}>
            The highest-intent student audience. At exactly the right moment<span className="dot">.</span>
          </h1>
          <p className="body-lg" style={{ maxWidth: 540, marginBottom: '2.5rem' }}>
            A student who just chose a university in Madrid needs accommodation, a SIM card, a flight, a bank account, insurance. These aren't abstract future needs. They're immediate decisions that follow directly from the university decision — and Unimatch sits right before them.
          </p>
          <Link href="mailto:partners@uninav.app" className="btn-primary">Talk to us →</Link>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-100)' }}>
        <div className="container">
          <div className="label">The opportunity</div>
          <h2 className="h2" style={{ marginBottom: '3rem' }}>What makes this channel different<span className="dot">.</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: 'Active researchers, not passive browsers', body: 'Every user on Unimatch is actively in the process of choosing a university. They aren\'t scrolling. They\'re deciding. That\'s a fundamentally different kind of attention.' },
              { title: 'Full context on every student', body: 'We know their destination city, their field, their timeline, their likely move date. You\'re not targeting a demographic. You\'re reaching a person at a specific moment.' },
              { title: 'Warm introduction, not cold ad', body: 'Unimatch introduces your service as a relevant next step in the student\'s journey — not as an interruption. That changes how it\'s received.' },
              { title: 'The transition moment', body: 'We identify when a student moves from researching to preparing to go. That\'s when they need what you offer. We\'re at that inflection point by design.' },
            ].map((item, i) => (
              <div key={i} className="card">
                <div style={{ width: 28, height: 3, background: 'var(--pink)', borderRadius: 2, marginBottom: '1rem' }} />
                <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1rem', marginBottom: '0.6rem' }}>{item.title}</h3>
                <p className="body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="label">Who this is for</div>
          <h2 className="h2" style={{ marginBottom: '3rem' }}>The services students need the moment they decide<span className="dot">.</span></h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem' }}>
            {['Student accommodation', 'International SIM cards', 'Student travel & flights', 'International banking', 'Student insurance', 'Visa services', 'Language schools', 'Moving & shipping', 'Student discounts & perks', 'Health & wellbeing'].map((cat, i) => (
              <div key={i} style={{ padding: '0.6rem 1.25rem', background: i % 3 === 0 ? 'var(--black)' : 'var(--gray-100)', color: i % 3 === 0 ? 'white' : 'var(--black)', borderRadius: 100, fontSize: '0.85rem', fontWeight: 500 }}>
                {cat}
              </div>
            ))}
          </div>
          <div style={{ padding: '2rem', background: 'var(--pink-ultra-light)', borderLeft: '3px solid var(--pink)', borderRadius: '0 12px 12px 0', maxWidth: 560 }}>
            <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--black)', lineHeight: 1.7 }}>
              If your product or service is relevant to students making a major international life transition — this is the channel that was built for exactly that moment.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--black)', padding: '6rem 2.5rem', textAlign: 'center' }}>
        <div className="container-narrow">
          <h2 className="h2" style={{ color: 'white', marginBottom: '1rem' }}>We're building our first partner cohort<span className="dot">.</span></h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', marginBottom: '2.5rem' }}>Early partners will have a meaningful role in shaping how this channel works. If this is a fit for your business, let's talk.</p>
          <Link href="mailto:partners@uninav.app" className="btn-pink">Get in touch →</Link>
        </div>
      </section>
    </>
  )
}
