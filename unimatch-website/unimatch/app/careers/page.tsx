'use client'
import { useState } from 'react'

const ROLES = [
  {
    title: 'Technical Co-Founder',
    type: 'Co-Founder',
    location: 'Remote / Hybrid',
    tag: 'Founding Team',
    description: 'We are looking for a technical co-founder to build Unimatch alongside the CEO. This is not a hire — it is a partnership. You will own the architecture, lead the engineering team we build together, and have meaningful equity in something we believe will become a category-defining platform.',
    looking: [
      'Full-stack engineering depth — you can build and ship end-to-end',
      'Experience with AI/ML pipelines or strong desire to work with them',
      'Comfort with ambiguity and speed — we are pre-product, pre-revenue, building fast',
      'Someone who thinks about systems, not just features',
      'YC co-founder match profile or equivalent — we are evaluating this seriously',
    ],
    equity: true,
    urgent: true,
  },
  {
    title: 'Fundraising & Business Scout',
    type: 'Part-time / Contract',
    location: 'Remote',
    tag: 'Growth',
    description: 'Help us identify and connect with the right investors, grants, and funding opportunities at the pre-seed stage. You understand early-stage fundraising dynamics and know how to open doors. This role is about intelligence, relationships, and timing — not cold outreach volume.',
    looking: [
      'Familiarity with pre-seed and seed stage fundraising ecosystems',
      'Network in VC, angel investing, or startup accelerators',
      'Ability to identify and qualify funding opportunities quickly',
      'Strong written communication — you can represent Unimatch in an email',
      'Comfortable working autonomously with limited structure',
    ],
    equity: false,
    urgent: true,
  },
  {
    title: 'Partnerships Scout',
    type: 'Part-time / Contract',
    location: 'Remote',
    tag: 'Partnerships',
    description: 'Identify and initiate conversations with universities, student service companies, and potential platform partners. You will be the first contact that many of our future partners have with Unimatch — which means quality over quantity, always.',
    looking: [
      'Experience in B2B outreach, business development, or university relations',
      'Strong interpersonal skills — you are comfortable starting conversations cold',
      'Understanding of the higher education landscape is a plus',
      'Organised and methodical — you track everything and follow up reliably',
      'Genuine interest in what Unimatch is building',
    ],
    equity: false,
    urgent: false,
  },
]

export default function CareersPage() {
  const [selected, setSelected] = useState<number | null>(null)
  const [form, setForm] = useState({ name: '', email: '', role: '', message: '', linkedin: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function openRole(i: number) {
    setSelected(i)
    setForm(f => ({ ...f, role: ROLES[i].title }))
    setTimeout(() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' }), 100)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('https://formspree.io/f/xqewrkpy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ ...form, _subject: `Unimatch Application — ${form.role}` }),
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
          <div className="label">Careers</div>
          <h1 className="h1" style={{ maxWidth: 660, marginBottom: '1.5rem' }}>
            Build the platform that never existed<span className="dot">.</span>
          </h1>
          <p className="body-lg" style={{ maxWidth: 520, marginBottom: '1.5rem' }}>
            We are early. That means the decisions made now will define what Unimatch becomes. The people who join at this stage will have shaped it.
          </p>
          <p className="body-lg" style={{ maxWidth: 520 }}>
            We are not looking for people who want a job. We are looking for people who see the same gap we see and want to close it.
          </p>
        </div>
      </section>

      {/* VALUES STRIP */}
      <section style={{ background: 'var(--black)', padding: '3rem 2.5rem' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {[
              { v: 'Early-stage reality', d: 'No bureaucracy. No slow decisions. High ownership.' },
              { v: 'Mission-driven', d: 'We are building this because it should exist.' },
              { v: 'Remote-first', d: 'We care about output, not where you sit.' },
              { v: 'Equity on the table', d: 'For the right roles, meaningful ownership.' },
            ].map((item, i) => (
              <div key={i} style={{ flex: '1 1 180px' }}>
                <div style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '0.95rem', color: 'white', marginBottom: '0.35rem' }}>{item.v}</div>
                <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{item.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROLES */}
      <section className="section" style={{ background: 'var(--gray-100)' }}>
        <div className="container">
          <div className="label">Open positions</div>
          <h2 className="h2" style={{ marginBottom: '0.75rem' }}>
            {ROLES.length} roles open now<span className="dot">.</span>
          </h2>
          <p className="body-lg" style={{ marginBottom: '3rem' }}>
            More will open as we grow. If you don't see your role but believe you belong here, tell us why below.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {ROLES.map((role, i) => (
              <div
                key={i}
                style={{
                  background: 'white', border: `1.5px solid ${selected === i ? 'var(--black)' : 'var(--gray-200)'}`,
                  borderRadius: 16, padding: '2rem', transition: 'all 0.2s',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                      <span style={{
                        background: role.urgent ? 'var(--pink)' : 'var(--gray-100)',
                        color: role.urgent ? 'white' : 'var(--gray-600)',
                        fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: 100, letterSpacing: '0.06em'
                      }}>
                        {role.tag}
                      </span>
                      {role.equity && (
                        <span style={{ background: '#F0FFF4', color: '#2D7D46', fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: 100, letterSpacing: '0.06em' }}>
                          Equity
                        </span>
                      )}
                      {role.urgent && (
                        <span style={{ background: 'var(--pink-ultra-light)', color: 'var(--pink)', fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: 100, letterSpacing: '0.06em' }}>
                          Actively hiring
                        </span>
                      )}
                    </div>
                    <h3 className="h3">{role.title}</h3>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '0.35rem' }}>
                      <span style={{ fontSize: '0.82rem', color: 'var(--gray-400)' }}>{role.type}</span>
                      <span style={{ fontSize: '0.82rem', color: 'var(--gray-400)' }}>· {role.location}</span>
                    </div>
                  </div>
                  <button onClick={() => openRole(i)} className="btn-primary" style={{ flexShrink: 0 }}>
                    Apply →
                  </button>
                </div>
                <p className="body" style={{ marginBottom: '1.25rem' }}>{role.description}</p>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gray-400)', marginBottom: '0.6rem' }}>We're looking for</div>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', listStyle: 'none' }}>
                    {role.looking.map((item, j) => (
                      <li key={j} style={{ display: 'flex', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--gray-600)', alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--pink)', fontWeight: 700, flexShrink: 0, marginTop: '0.05rem' }}>→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="apply-form" className="section">
        <div className="container" style={{ maxWidth: 680 }}>
          <div className="label">Apply</div>
          <h2 className="h2" style={{ marginBottom: '0.75rem' }}>
            Tell us about yourself<span className="dot">.</span>
          </h2>
          <p className="body-lg" style={{ marginBottom: '3rem' }}>
            No cover letter template needed. Talk to us like a person. Tell us why you see what we're building and why you want to be part of it.
          </p>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '4rem 2rem', background: 'var(--gray-100)', borderRadius: 16 }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
              <h3 className="h3" style={{ marginBottom: '0.75rem' }}>We got it.</h3>
              <p className="body-lg">We read every application personally. We'll be in touch if there's a fit.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--gray-800)', display: 'block', marginBottom: '0.4rem' }}>Full name *</label>
                  <input
                    required value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    style={inputStyle}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--gray-800)', display: 'block', marginBottom: '0.4rem' }}>Email *</label>
                  <input
                    required type="email" value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    style={inputStyle}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--gray-800)', display: 'block', marginBottom: '0.4rem' }}>Role you're applying for *</label>
                <select
                  required value={form.role}
                  onChange={e => setForm(f => ({ ...f, role: e.target.value }))}
                  style={{ ...inputStyle, cursor: 'pointer' }}
                >
                  <option value="">Select a role</option>
                  {ROLES.map((r, i) => <option key={i} value={r.title}>{r.title}</option>)}
                  <option value="Other / Spontaneous">Other — I don't see my role listed</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--gray-800)', display: 'block', marginBottom: '0.4rem' }}>LinkedIn or personal link</label>
                <input
                  value={form.linkedin}
                  onChange={e => setForm(f => ({ ...f, linkedin: e.target.value }))}
                  style={inputStyle}
                  placeholder="https://linkedin.com/in/..."
                />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--gray-800)', display: 'block', marginBottom: '0.4rem' }}>Why Unimatch? *</label>
                <textarea
                  required value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  style={{ ...inputStyle, minHeight: 160, resize: 'vertical' }}
                  placeholder="Tell us what you see, why you want in, and what you'd bring. We read every word."
                />
              </div>

              <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }} disabled={loading}>
                {loading ? 'Sending...' : 'Submit application →'}
              </button>
              <p style={{ fontSize: '0.75rem', color: 'var(--gray-400)' }}>We respond to every serious application within 5 business days.</p>
            </form>
          )}
        </div>
      </section>
    </>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '0.8rem 1rem',
  fontFamily: 'Instrument Sans, sans-serif', fontSize: '0.9rem',
  border: '1.5px solid var(--gray-200)', borderRadius: 10,
  outline: 'none', color: 'var(--black)', background: 'white',
  transition: 'border-color 0.2s',
}
