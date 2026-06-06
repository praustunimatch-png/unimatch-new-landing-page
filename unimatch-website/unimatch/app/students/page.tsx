import Link from 'next/link'

const STEPS = [
  { n: '01', title: 'Tell us what you want', body: 'In plain language. No forms. No checkboxes. Just a conversation — your field, your location, your budget, the kind of experience you\'re looking for.' },
  { n: '02', title: 'We build your profile', body: 'Our AI counselor understands context, not just keywords. It builds a picture of what you actually need through the conversation itself.' },
  { n: '03', title: 'We search a verified database', body: 'Behind every result is a verified global database — programs, deadlines, tuition by nationality, language of instruction. No hallucinations. Ever.' },
  { n: '04', title: 'You get a shortlist that fits', body: 'Not fifty results to scroll through. A real shortlist of programs that match your profile — with accurate information you can act on.' },
]

export default function StudentsPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="label">For students</div>
          <h1 className="h1" style={{ maxWidth: 700, marginBottom: '1.5rem' }}>
            The guidance that used to cost thousands<span className="dot">.</span> Free<span className="dot">.</span>
          </h1>
          <p className="body-lg" style={{ maxWidth: 540, marginBottom: '2.5rem' }}>
            A private university counselor costs $3,000–$10,000. Most students make this decision without one — with Google, and hope. We think that's wrong.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/#waitlist" className="btn-primary">Join the waitlist →</Link>
            <Link href="/about" className="btn-secondary">Our mission</Link>
          </div>
        </div>
      </section>

      {/* FREE FOREVER BANNER */}
      <section style={{ background: 'var(--pink)', padding: '2rem 2.5rem' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1.5rem', color: 'white', letterSpacing: '-0.03em' }}>Free. Permanently.</div>
            <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', marginTop: '0.25rem' }}>No premium tier for guidance. No paywall. No catch.</div>
          </div>
          <div style={{ fontFamily: 'Syne', fontSize: '3rem', fontWeight: 800, color: 'rgba(255,255,255,0.15)', letterSpacing: '-0.04em' }}>$0</div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" style={{ background: 'var(--gray-100)' }}>
        <div className="container">
          <div className="label">How it works</div>
          <h2 className="h2" style={{ marginBottom: '3.5rem' }}>Four steps to a shortlist that actually fits<span className="dot">.</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {STEPS.map((step, i) => (
              <div key={i} style={{ background: 'white', borderRadius: 16, padding: '2rem', border: '1px solid var(--gray-200)' }}>
                <div style={{ fontFamily: 'Syne', fontSize: '2.5rem', fontWeight: 800, color: 'var(--gray-200)', letterSpacing: '-0.04em', marginBottom: '0.75rem' }}>{step.n}</div>
                <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1rem', marginBottom: '0.6rem' }}>{step.title}</h3>
                <p className="body">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div className="label">Why Unimatch</div>
              <h2 className="h2" style={{ marginBottom: '1.5rem' }}>Not another search engine<span className="dot">.</span></h2>
              <p className="body-lg" style={{ marginBottom: '1.5rem' }}>
                Directory sites give you filters. ChatGPT gives you confident guesses. Private counselors give you their network's preferences.
              </p>
              <p className="body-lg">
                Unimatch gives you a verified database, a counselor that understands context, and results that are accurate enough to act on.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { them: 'Generic AI (ChatGPT)', issue: 'Hallucinates programs, wrong deadlines', us: false },
                { them: 'Directory sites', issue: 'Can\'t filter by language or nationality tuition', us: false },
                { them: 'Private counselors', issue: '$3,000–$10,000. Biased toward their network.', us: false },
                { them: 'Unimatch', issue: 'Verified database. Context-aware. Free.', us: true },
              ].map((row, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', padding: '1rem 1.25rem', background: row.us ? 'var(--black)' : 'var(--gray-100)', borderRadius: 10, alignItems: 'center' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: row.us ? 'var(--pink)' : 'var(--gray-400)', flexShrink: 0 }} />
                  <div style={{ flex: 1, fontWeight: 600, fontSize: '0.88rem', color: row.us ? 'white' : 'var(--black)' }}>{row.them}</div>
                  <div style={{ fontSize: '0.82rem', color: row.us ? 'rgba(255,255,255,0.55)' : 'var(--gray-400)', textAlign: 'right', maxWidth: 200 }}>{row.issue}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--black)', padding: '6rem 2.5rem', textAlign: 'center' }}>
        <div className="container-narrow">
          <h2 className="h2" style={{ color: 'white', marginBottom: '1rem' }}>
            You deserve the same quality of guidance as everyone else<span className="dot">.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', marginBottom: '2.5rem' }}>
            We're building this for you. Join the waitlist and be first in.
          </p>
          <Link href="/#waitlist" className="btn-pink">Get early access →</Link>
        </div>
      </section>
    </>
  )
}
