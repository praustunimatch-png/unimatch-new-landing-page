'use client'
import { useState } from 'react'
import Link from 'next/link'

const SIDES = [
  {
    label: 'Students',
    icon: '→',
    headline: 'The guidance you deserve. Free.',
    body: 'An AI counselor that understands you in plain language. A verified global database of universities and programs. No hallucinations. No wrong deadlines. A shortlist that actually fits you.',
    link: '/students',
    linkText: 'How it works for students',
  },
  {
    label: 'Universities',
    icon: '→',
    headline: 'Reach the students already looking for you.',
    body: 'Every user on Unimatch is actively in the university decision process. Not passive. Not accidentally exposed. Actively researching, comparing, shortlisting — and you can be there.',
    link: '/universities',
    linkText: 'See the opportunity',
  },
  {
    label: 'Companies',
    icon: '→',
    headline: 'The highest-intent student channel that never existed.',
    body: 'A student who just chose a university in Madrid needs accommodation, a SIM card, a flight, a bank account. Unimatch sits at exactly that transition moment.',
    link: '/companies',
    linkText: 'Reach student-ready audiences',
  },
]

const STATS = [
  { number: '300M+', label: 'university-related searches annually' },
  { number: '6.4M', label: 'students studying abroad per year' },
  { number: '12%', label: 'annual growth in international student mobility' },
  { number: '$30B+', label: 'spent on student recruitment annually' },
]

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [activeSide, setActiveSide] = useState(0)

  async function handleWaitlist(e: React.FormEvent) {
    e.preventDefault()
    if (!email.includes('@')) return
    try {
      await fetch('https://formspree.io/f/xqewrkpy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ email, _subject: 'New Unimatch Waitlist Signup' }),
      })
      setSubmitted(true)
    } catch { setSubmitted(true) }
  }

  return (
    <>
      {/* HERO */}
      <section style={{ minHeight: '92vh', display: 'flex', alignItems: 'center', padding: '6rem 2.5rem 4rem' }}>
        <div className="container">
          <div style={{ maxWidth: 820 }}>
            <div className="label fade-up">The university decision deserves its own platform</div>
            <h1 className="h1 fade-up-delay-1" style={{ marginBottom: '1.5rem' }}>
              The place built<br />for one decision<span className="dot">.</span>
            </h1>
            <p className="body-lg fade-up-delay-2" style={{ maxWidth: 560, marginBottom: '2.5rem' }}>
              You look for a job, you go to LinkedIn. You book a stay, you go to Airbnb.
              The university decision is just as consequential — and until now,
              no dedicated place existed for it.
            </p>
            <div className="fade-up-delay-3" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              {submitted ? (
                <div style={{ fontSize: '1rem', color: 'var(--pink)', fontWeight: 600 }}>You're on the list. We'll be in touch.</div>
              ) : (
                <form onSubmit={handleWaitlist} style={{ display: 'flex', gap: 0, maxWidth: 400 }}>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    style={{
                      flex: 1, padding: '0.85rem 1.2rem',
                      fontFamily: 'Instrument Sans, sans-serif', fontSize: '0.9rem',
                      border: '1.5px solid var(--gray-200)', borderRight: 'none',
                      borderRadius: '100px 0 0 100px', outline: 'none', color: 'var(--black)',
                      background: 'white',
                    }}
                  />
                  <button type="submit" className="btn-primary" style={{ borderRadius: '0 100px 100px 0', whiteSpace: 'nowrap' }}>
                    Join waitlist
                  </button>
                </form>
              )}
              <Link href="/about" className="btn-secondary">Learn more</Link>
            </div>
          </div>

          {/* Floating stat pills */}
          <div style={{ display: 'flex', gap: '1rem', marginTop: '5rem', flexWrap: 'wrap' }}>
            {STATS.map((s, i) => (
              <div key={i} style={{
                background: i === 0 ? 'var(--black)' : 'var(--gray-100)',
                color: i === 0 ? 'white' : 'var(--black)',
                borderRadius: 12, padding: '1.25rem 1.75rem',
                minWidth: 160,
              }}>
                <div style={{
                  fontFamily: 'Syne, sans-serif', fontSize: '1.75rem',
                  fontWeight: 800, letterSpacing: '-0.04em',
                  color: i === 0 ? 'white' : 'var(--black)',
                  lineHeight: 1,
                }}>
                  {s.number}
                </div>
                <div style={{ fontSize: '0.75rem', color: i === 0 ? 'rgba(255,255,255,0.6)' : 'var(--gray-600)', marginTop: '0.35rem', lineHeight: 1.4 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="section" style={{ background: 'var(--black)', color: 'white' }}>
        <div className="container">
          <div className="label" style={{ color: 'var(--pink)' }}>The problem</div>
          <h2 className="h2" style={{ color: 'white', maxWidth: 700, marginBottom: '3rem' }}>
            The tools are symptoms<span className="dot">.</span> The disease is structural<span className="dot">.</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.08)' }}>
            {[
              { problem: 'ChatGPT', detail: 'Hallucinates programs and deadlines. Sounds confident, often wrong.' },
              { problem: 'Google', detail: 'Forty tabs of noise. No one built the filter you actually need.' },
              { problem: 'Directory sites', detail: '50M visitors per year. Still can\'t filter by language or deadline.' },
              { problem: 'Private counselors', detail: '$3,000–$10,000. Available only to those who can afford them.' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'var(--black)', padding: '2rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--pink)', marginBottom: '0.75rem' }}>
                  {item.problem}
                </div>
                <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>{item.detail}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(255,51,102,0.08)', borderLeft: '3px solid var(--pink)', borderRadius: '0 8px 8px 0', maxWidth: 640 }}>
            <p style={{ fontSize: '1.1rem', color: 'white', lineHeight: 1.7, fontWeight: 400 }}>
              There is no dedicated ecosystem for the university decision. Students, universities, and the companies that serve them are all scattered — using platforms built for something else.
            </p>
          </div>
        </div>
      </section>

      {/* THE THREE SIDES */}
      <section className="section">
        <div className="container">
          <div className="label">The platform</div>
          <h2 className="h2" style={{ marginBottom: '0.75rem' }}>Three sides<span className="dot">.</span> One ecosystem<span className="dot">.</span></h2>
          <p className="body-lg" style={{ maxWidth: 540, marginBottom: '3.5rem' }}>
            Each side makes the others more valuable. That's not a feature — it's a flywheel.
          </p>

          {/* Tab selector */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2.5rem', background: 'var(--gray-100)', borderRadius: 100, padding: '0.35rem', width: 'fit-content' }}>
            {SIDES.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveSide(i)}
                style={{
                  padding: '0.6rem 1.5rem', borderRadius: 100,
                  border: 'none', cursor: 'pointer',
                  fontFamily: 'Instrument Sans, sans-serif',
                  fontSize: '0.88rem', fontWeight: 600,
                  background: activeSide === i ? 'var(--black)' : 'transparent',
                  color: activeSide === i ? 'white' : 'var(--gray-600)',
                  transition: 'all 0.2s',
                }}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h3 className="h3" style={{ marginBottom: '1rem' }}>{SIDES[activeSide].headline}</h3>
              <p className="body-lg" style={{ marginBottom: '2rem' }}>{SIDES[activeSide].body}</p>
              <Link href={SIDES[activeSide].link} className="btn-primary">{SIDES[activeSide].linkText} →</Link>
            </div>
            <div style={{ background: 'var(--gray-100)', borderRadius: 20, height: 320, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Syne', fontSize: '5rem', fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--gray-200)' }}>
                  {['🎓', '🏛️', '🤝'][activeSide]}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--gray-400)', marginTop: '0.5rem' }}>
                  {SIDES[activeSide].label} side
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE FLYWHEEL */}
      <section className="section" style={{ background: 'var(--gray-100)' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <div className="label" style={{ justifyContent: 'center' }}>The flywheel</div>
          <h2 className="h2" style={{ marginBottom: '1rem' }}>Each side feeds the others<span className="dot">.</span></h2>
          <p className="body-lg" style={{ marginBottom: '4rem' }}>
            More students → richer data → better results → more students.<br />
            More universities → more complete database → more valuable for students.<br />
            Both together → the most compelling channel for student companies.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {['Students', 'Universities', 'Companies'].map((side, i) => (
              <div key={i} style={{
                background: 'white', border: '1px solid var(--gray-200)',
                borderRadius: 100, padding: '0.6rem 1.5rem',
                fontFamily: 'Syne', fontWeight: 700, fontSize: '0.9rem',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
              }}>
                {side}
                {i < 2 && <span style={{ color: 'var(--pink)', fontWeight: 800 }}>→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
            <div>
              <div className="label">The mission</div>
              <h2 className="h2" style={{ marginBottom: '1.5rem' }}>
                The quality of guidance you receive shouldn't depend on what your parents can afford<span className="dot">.</span>
              </h2>
              <p className="body-lg" style={{ marginBottom: '1rem' }}>
                The student with a private counselor and the student with nothing are making the same decision. Not with the same resources. Not with the same odds.
              </p>
              <p className="body-lg" style={{ marginBottom: '2rem' }}>
                That's why the student side of Unimatch is free. Permanently.
              </p>
              <Link href="/about" className="btn-primary">Read our story →</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { n: 'Free', d: 'for students. Always. No paywalls, no premium tiers for guidance.' },
                { n: 'Verified', d: 'database only. No hallucinations. No invented programs.' },
                { n: 'Earned', d: 'monetization. We earn from universities and companies — never at the student\'s expense.' },
              ].map((item, i) => (
                <div key={i} className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ fontFamily: 'Syne', fontSize: '1.1rem', fontWeight: 800, color: 'var(--pink)', flexShrink: 0, minWidth: 70 }}>{item.n}</div>
                  <p className="body">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: 'var(--black)', padding: '6rem 2.5rem', textAlign: 'center' }}>
        <div className="container-narrow">
          <h2 className="h2" style={{ color: 'white', marginBottom: '1rem' }}>
            Be part of what comes next<span className="dot">.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            Whether you're a student, a university, a company, or someone who wants to build this with us — there's a place for you here.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/careers" className="btn-pink">See open roles →</Link>
            <Link href="/investors" className="btn-secondary" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>Investor info</Link>
          </div>
        </div>
      </section>
    </>
  )
}
