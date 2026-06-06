'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function InvestorsPage() {
  const [form, setForm] = useState({ name: '', fund: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('https://formspree.io/f/xqewrkpy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ ...form, _subject: `Investor Inquiry — ${form.fund || form.name}` }),
      })
      setSubmitted(true)
    } catch { setSubmitted(true) }
    setLoading(false)
  }

  return (
    <>
      {/* HERO */}
      <section className="section">
        <div className="container">
          <div className="label">For investors</div>
          <h1 className="h1" style={{ maxWidth: 720, marginBottom: '1.5rem' }}>
            The dedicated platform for the most consequential decision millions make every year<span className="dot">.</span>
          </h1>
          <p className="body-lg" style={{ maxWidth: 560 }}>
            You look for a job, you go to LinkedIn. You book a stay, you go to Airbnb. These platforms didn't invent the activity — they built the infrastructure. The university decision never got that platform. Until now.
          </p>
        </div>
      </section>

      {/* PART 1 — DEMAND */}
      <section className="section" style={{ background: 'var(--black)' }}>
        <div className="container">
          <div className="label" style={{ color: 'var(--pink)' }}>Part 1 — The demand</div>
          <h2 className="h2" style={{ color: 'white', marginBottom: '0.75rem' }}>
            The problem is enormous<span className="dot">.</span> The proof is public<span className="dot">.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', maxWidth: 520, marginBottom: '3.5rem', lineHeight: 1.7 }}>
            We don't need proprietary data to prove demand. Third-party sources do it for us.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.06)', borderRadius: 16, overflow: 'hidden', marginBottom: '3rem' }}>
            {[
              { n: '300M+', label: 'university-related searches annually', src: 'Google Trends / SEMrush' },
              { n: '50M', label: 'annual visitors to basic filtering sites — finding them deeply inadequate', src: 'SimilarWeb' },
              { n: '6.4M', label: 'students studying abroad per year, growing 12% annually', src: 'UNESCO / OECD' },
              { n: '47%', label: 'of high school students have only vague ideas about their future', src: 'ACT Survey' },
              { n: '$30B+', label: 'spent on student recruitment annually worldwide', src: 'HolonIQ' },
              { n: '12%', label: 'YoY growth in international student mobility', src: 'ICEF Monitor' },
            ].map((stat, i) => (
              <div key={i} style={{ background: 'var(--black)', padding: '1.75rem', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <div style={{ fontFamily: 'Syne', fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.04em', color: i === 0 ? 'var(--pink)' : 'white', lineHeight: 1, marginBottom: '0.5rem' }}>
                  {stat.n}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5, marginBottom: '0.6rem' }}>{stat.label}</div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)', fontStyle: 'italic' }}>Source: {stat.src}</div>
              </div>
            ))}
          </div>

          <div style={{ padding: '2rem', background: 'rgba(255,51,102,0.08)', border: '1px solid rgba(255,51,102,0.2)', borderRadius: 12, maxWidth: 640 }}>
            <p style={{ fontSize: '1rem', color: 'white', lineHeight: 1.75 }}>
              50 million people per year arrive at the best available solution and find it deeply inadequate. That is not a success story. That is proof of demand that has never been properly served.
            </p>
          </div>
        </div>
      </section>

      {/* PART 2 — PATH TO 1K */}
      <section className="section">
        <div className="container">
          <div className="label">Part 2 — The path</div>
          <h2 className="h2" style={{ marginBottom: '0.75rem' }}>
            A believable road to our first 1,000 users<span className="dot">.</span>
          </h2>
          <p className="body-lg" style={{ maxWidth: 520, marginBottom: '3.5rem' }}>
            Pre-seed investors aren't evaluating five-year projections. They're evaluating whether we can reach the milestone that justifies the next round. Here's how we get there.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                n: '01',
                title: 'University ambassador program',
                body: 'Launch with 5 target universities. Recruit student ambassadors who represent Unimatch on campus, run sessions, and bring the first cohort of users. Conservative estimate: 50–100 active users per university.',
              },
              {
                n: '02',
                title: 'Content-led audience building',
                body: 'LinkedIn and short-form content targeting students in the decision phase. Founder-led initially, then co-op team. This doubles as investor and partner visibility at zero additional cost.',
              },
              {
                n: '03',
                title: 'University co-op partnerships',
                body: 'Partner with university programs to bring in co-op students who create content, run outreach, and expand our reach to their networks simultaneously.',
              },
              {
                n: '04',
                title: 'Product quality as distribution',
                body: 'A tool this useful gets shared. The student who finds their program tells the student who didn\'t know where to look. Word of mouth is our most scalable channel at this stage.',
              },
            ].map((item, i) => (
              <div key={i} className="card">
                <div style={{ fontFamily: 'Syne', fontSize: '2rem', fontWeight: 800, color: 'var(--gray-200)', letterSpacing: '-0.04em', marginBottom: '0.75rem' }}>{item.n}</div>
                <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1rem', marginBottom: '0.6rem' }}>{item.title}</h3>
                <p className="body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PART 3 — UNIT ECONOMICS */}
      <section className="section" style={{ background: 'var(--gray-100)' }}>
        <div className="container">
          <div className="label">Part 3 — The model</div>
          <h2 className="h2" style={{ marginBottom: '0.75rem' }}>
            The economics make sense<span className="dot">.</span> In principle<span className="dot">.</span>
          </h2>
          <p className="body-lg" style={{ maxWidth: 540, marginBottom: '3.5rem' }}>
            We don't have revenue data. We have a logical argument — which is what pre-seed investors should expect and what honest founders provide.
          </p>

          {/* Logic chain */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', maxWidth: 680, marginBottom: '3rem' }}>
            {[
              { label: 'University spends', value: '~$200', detail: 'average cost per lead through traditional channels (fairs, ads, agencies)', color: 'var(--gray-800)' },
              { label: 'Unimatch charges', value: '$X', detail: 'for priority placement reaching Y actively-researching students per month', color: 'var(--black)' },
              { label: 'The math', value: 'Saves money', detail: 'at any price below their current cost per lead — which they already know is too high', color: 'var(--pink)' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '1.5rem', padding: '1.5rem 2rem', background: 'white', border: '1px solid var(--gray-200)', borderTop: i > 0 ? 'none' : '1px solid var(--gray-200)', borderRadius: i === 0 ? '12px 12px 0 0' : i === 2 ? '0 0 12px 12px' : 0, alignItems: 'flex-start' }}>
                <div style={{ minWidth: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '0.2rem' }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: item.color, flexShrink: 0 }} />
                  {i < 2 && <div style={{ width: 1.5, flex: 1, background: 'var(--gray-200)', marginTop: '0.35rem' }} />}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gray-400)', marginBottom: '0.25rem' }}>{item.label}</div>
                  <div style={{ fontFamily: 'Syne', fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.03em', color: item.color, lineHeight: 1, marginBottom: '0.35rem' }}>{item.value}</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--gray-600)', lineHeight: 1.6 }}>{item.detail}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Revenue streams timeline */}
          <div>
            <h3 className="h3" style={{ marginBottom: '1.5rem' }}>Revenue sequence</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              {[
                { phase: 'Now → Year 1', streams: ['Build student audience', 'Establish verified database', 'University partnership conversations'], status: 'current' },
                { phase: 'Year 1 → 2', streams: ['University visibility partnerships', 'Student premium subscriptions (optional)', 'Early partner integrations'], status: 'next' },
                { phase: 'Year 2 → 3', streams: ['Student company partner integrations', 'Data insights for institutional clients', 'Platform API licensing'], status: 'future' },
              ].map((phase, i) => (
                <div key={i} style={{ padding: '1.5rem', background: i === 0 ? 'var(--black)' : 'white', border: '1px solid var(--gray-200)', borderRadius: 12 }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: i === 0 ? 'var(--pink)' : 'var(--gray-400)', marginBottom: '0.6rem' }}>
                    {phase.phase}
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {phase.streams.map((s, j) => (
                      <li key={j} style={{ fontSize: '0.85rem', color: i === 0 ? 'rgba(255,255,255,0.65)' : 'var(--gray-600)', display: 'flex', gap: '0.5rem', alignItems: 'flex-start', lineHeight: 1.4 }}>
                        <span style={{ color: i === 0 ? 'var(--pink)' : 'var(--gray-400)', flexShrink: 0 }}>→</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY NOW */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div className="label">Why this moment</div>
              <h2 className="h2" style={{ marginBottom: '1.5rem' }}>This platform couldn't have been built three years ago<span className="dot">.</span></h2>
              <p className="body-lg" style={{ marginBottom: '1rem' }}>
                The AI infrastructure required to power a conversational, context-aware counselor at scale simply didn't exist at viable cost.
              </p>
              <p className="body-lg">
                The cost of running a RAG pipeline at scale has dropped roughly 90% since 2022. What was economically impossible three years ago is now buildable by a small team with the right architecture. That window is open now.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { label: 'AI infrastructure cost', before: 'Prohibitive', after: '↓ ~90% since 2022' },
                { label: 'International student mobility', before: 'Growing', after: '+12% per year' },
                { label: 'Demand for this platform', before: 'Always existed', after: 'Never been served' },
                { label: 'Competition', before: 'Directory sites only', after: 'No AI-native player yet' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', padding: '1rem 1.25rem', background: 'var(--gray-100)', borderRadius: 10, alignItems: 'center' }}>
                  <div style={{ flex: 1, fontSize: '0.85rem', fontWeight: 600, color: 'var(--black)' }}>{item.label}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--gray-400)', textDecoration: 'line-through', flexShrink: 0 }}>{item.before}</div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--pink)', flexShrink: 0 }}>{item.after}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="section" style={{ background: 'var(--black)' }}>
        <div className="container" style={{ maxWidth: 600 }}>
          <div className="label" style={{ color: 'var(--pink)' }}>Get in touch</div>
          <h2 className="h2" style={{ color: 'white', marginBottom: '0.75rem' }}>
            Interested in learning more<span className="dot">?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', marginBottom: '3rem', lineHeight: 1.7 }}>
            We share a full investor brief with serious parties. Fill this out and we'll be in touch within 48 hours.
          </p>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '4rem 2rem', background: 'rgba(255,255,255,0.04)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--pink)' }}>✓</div>
              <h3 style={{ fontFamily: 'Syne', fontWeight: 700, color: 'white', marginBottom: '0.75rem' }}>Message received.</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem' }}>We'll follow up within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { key: 'name', label: 'Your name *', placeholder: 'Full name', type: 'text', required: true },
                { key: 'fund', label: 'Fund or firm', placeholder: 'Fund name (or "angel" if individual)', type: 'text', required: false },
                { key: 'email', label: 'Email *', placeholder: 'your@fund.com', type: 'email', required: true },
              ].map(field => (
                <div key={field.key}>
                  <label style={{ fontSize: '0.78rem', fontWeight: 600, color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: '0.4rem', letterSpacing: '0.04em' }}>{field.label}</label>
                  <input
                    type={field.type}
                    required={field.required}
                    value={form[field.key as keyof typeof form]}
                    onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                    placeholder={field.placeholder}
                    style={{ width: '100%', padding: '0.85rem 1rem', fontFamily: 'Instrument Sans, sans-serif', fontSize: '0.9rem', border: '1.5px solid rgba(255,255,255,0.1)', borderRadius: 10, outline: 'none', color: 'white', background: 'rgba(255,255,255,0.05)' }}
                  />
                </div>
              ))}
              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 600, color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: '0.4rem', letterSpacing: '0.04em' }}>What caught your interest?</label>
                <textarea
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder="Optional — but we read every word."
                  style={{ width: '100%', minHeight: 120, padding: '0.85rem 1rem', fontFamily: 'Instrument Sans, sans-serif', fontSize: '0.9rem', border: '1.5px solid rgba(255,255,255,0.1)', borderRadius: 10, outline: 'none', color: 'white', background: 'rgba(255,255,255,0.05)', resize: 'vertical' }}
                />
              </div>
              <button type="submit" className="btn-pink" style={{ alignSelf: 'flex-start' }} disabled={loading}>
                {loading ? 'Sending...' : 'Request investor brief →'}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
