'use client'
import { useState } from 'react'
import Link from 'next/link'

const CHANNELS = [
  { name: 'Instagram / Facebook Ads', cpl: '$40–$100', conversion: '~1–3%', intent: 'Low', color: '#FF6B6B' },
  { name: 'Recruitment Fairs', cpl: '$150–$500', conversion: '~2–5%', intent: 'Medium', color: '#FF9F43' },
  { name: 'Email Campaigns', cpl: '$20–$60', conversion: '<1%', intent: 'Very Low', color: '#FF6B6B' },
  { name: 'Recruitment Agencies', cpl: '10–15% of tuition', conversion: 'High cost', intent: 'Medium', color: '#FF9F43' },
  { name: 'Unimatch', cpl: 'TBD — student came to you', conversion: 'Active researcher', intent: '★ Highest', color: 'var(--pink)', highlight: true },
]

const FUNNEL = [
  { stage: 'Awareness', pct: 100, desc: 'Student becomes aware universities exist for their field', unimatch: true },
  { stage: 'Consideration', pct: 35, desc: 'Student researches options — most drop-off happens here', unimatch: true },
  { stage: 'Shortlisting', pct: 18, desc: 'Student creates a list of realistic options', unimatch: true },
  { stage: 'Application', pct: 10, desc: 'Student applies — 10–15% conversion from leads', unimatch: false },
  { stage: 'Enrollment', pct: 3, desc: 'Student enrolls — 20–30% of applications', unimatch: false },
]

export default function UniversitiesPage() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      {/* HERO */}
      <section className="section">
        <div className="container">
          <div className="label">For universities</div>
          <h1 className="h1" style={{ maxWidth: 700, marginBottom: '1.5rem' }}>
            Your recruitment budget deserves better returns<span className="dot">.</span>
          </h1>
          <p className="body-lg" style={{ maxWidth: 560, marginBottom: '2.5rem' }}>
            Universities spend billions chasing students through channels that don't know who's actively looking. Unimatch does.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="mailto:universities@uninav.app" className="btn-primary">Get in touch →</Link>
            <a href="#the-problem" className="btn-secondary">See the data</a>
          </div>
        </div>
      </section>

      {/* THE PROBLEM IN NUMBERS */}
      <section id="the-problem" className="section" style={{ background: 'var(--gray-100)', paddingTop: '5rem' }}>
        <div className="container">
          <div className="label">The numbers</div>
          <h2 className="h2" style={{ marginBottom: '0.75rem' }}>What you're already spending<span className="dot">.</span></h2>
          <p className="body-lg" style={{ maxWidth: 540, marginBottom: '3rem' }}>
            These aren't our numbers. They're industry benchmarks. Every university marketing director in the room will recognise them.
          </p>

          {/* Channel comparison table */}
          <div style={{ background: 'white', borderRadius: 16, overflow: 'hidden', border: '1px solid var(--gray-200)' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: 'var(--black)' }}>
                    {['Channel', 'Cost per Lead', 'Avg. Conversion', 'Student Intent'].map(h => (
                      <th key={h} style={{ padding: '1rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {CHANNELS.map((ch, i) => (
                    <tr key={i} style={{ background: ch.highlight ? 'var(--pink-ultra-light)' : 'white', borderBottom: '1px solid var(--gray-200)' }}>
                      <td style={{ padding: '1.1rem 1.5rem', fontWeight: ch.highlight ? 700 : 400, fontFamily: ch.highlight ? 'Syne, sans-serif' : 'inherit' }}>
                        {ch.highlight && <span style={{ color: 'var(--pink)', marginRight: '0.5rem' }}>★</span>}
                        {ch.name}
                      </td>
                      <td style={{ padding: '1.1rem 1.5rem', fontWeight: 600, color: ch.highlight ? 'var(--pink)' : 'var(--black)' }}>{ch.cpl}</td>
                      <td style={{ padding: '1.1rem 1.5rem', color: 'var(--gray-600)' }}>{ch.conversion}</td>
                      <td style={{ padding: '1.1rem 1.5rem' }}>
                        <span style={{ background: ch.highlight ? 'var(--pink)' : '#F7F7F7', color: ch.highlight ? 'white' : ch.color, padding: '0.25rem 0.75rem', borderRadius: 100, fontSize: '0.78rem', fontWeight: 600 }}>
                          {ch.intent}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ padding: '1rem 1.5rem', background: 'var(--gray-100)', borderTop: '1px solid var(--gray-200)' }}>
              <p style={{ fontSize: '0.75rem', color: 'var(--gray-400)', fontStyle: 'italic' }}>
                Sources: HubSpot Higher Education Benchmarks, EduBirdie Recruitment Cost Reports, NACAC Conference Data. CPL figures are industry approximations.
              </p>
            </div>
          </div>

          {/* Bar chart visual */}
          <div style={{ marginTop: '3rem', background: 'white', border: '1px solid var(--gray-200)', borderRadius: 16, padding: '2rem' }}>
            <h3 className="h3" style={{ marginBottom: '0.5rem' }}>Cost per Lead — Visual Comparison</h3>
            <p className="body" style={{ marginBottom: '2rem' }}>Midpoint estimates across common recruitment channels.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { label: 'Recruitment Fairs', value: 325, max: 500, color: '#FF9F43' },
                { label: 'Instagram / Facebook', value: 70, max: 500, color: '#FF6B6B' },
                { label: 'Email Campaigns', value: 40, max: 500, color: '#AAAAAA' },
                { label: 'Unimatch', value: 0, max: 500, color: 'var(--pink)', note: 'Student-initiated — different model entirely' },
              ].map((bar, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: 160, fontSize: '0.85rem', color: 'var(--gray-800)', fontWeight: i === 3 ? 700 : 400, flexShrink: 0 }}>{bar.label}</div>
                  <div style={{ flex: 1, background: 'var(--gray-100)', borderRadius: 100, height: 12, overflow: 'hidden' }}>
                    {bar.value > 0 ? (
                      <div style={{ width: `${(bar.value / bar.max) * 100}%`, height: '100%', background: bar.color, borderRadius: 100, transition: 'width 1s ease' }} />
                    ) : (
                      <div style={{ height: '100%', background: 'linear-gradient(90deg, var(--pink) 0%, var(--pink-light) 100%)', borderRadius: 100, width: '30%', display: 'flex', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.6rem', color: 'white', paddingLeft: '0.5rem', whiteSpace: 'nowrap', fontWeight: 700 }}>New model</span>
                      </div>
                    )}
                  </div>
                  <div style={{ width: 80, fontSize: '0.82rem', fontWeight: 600, color: i === 3 ? 'var(--pink)' : 'var(--black)', flexShrink: 0 }}>
                    {bar.value > 0 ? `~$${bar.value}` : bar.note ? '—' : ''}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE FUNNEL PROBLEM */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
            <div>
              <div className="label">The funnel problem</div>
              <h2 className="h2" style={{ marginBottom: '1.5rem' }}>
                Drop-off happens before you even know they exist<span className="dot">.</span>
              </h2>
              <p className="body-lg" style={{ marginBottom: '1rem' }}>
                The average university converts 10–15% of leads to applications, and 20–30% of applications to enrollments. The math is brutal.
              </p>
              <p className="body-lg" style={{ marginBottom: '1.5rem' }}>
                But most of the drop-off doesn't happen at application. It happens at awareness and consideration — when students never find you, or never seriously consider you.
              </p>
              <div style={{ padding: '1.25rem', background: 'var(--pink-ultra-light)', borderLeft: '3px solid var(--pink)', borderRadius: '0 8px 8px 0' }}>
                <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--black)', lineHeight: 1.6 }}>
                  Unimatch owns the top of your funnel — the awareness and consideration stages where the decision is actually made.
                </p>
              </div>
            </div>
            {/* Funnel visualization */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {FUNNEL.map((stage, i) => (
                <div key={i} style={{
                  margin: `0 ${((100 - stage.pct) / 2)}%`,
                  background: stage.unimatch ? (i < 2 ? 'var(--black)' : 'var(--gray-200)') : 'var(--gray-200)',
                  borderRadius: 8, padding: '0.9rem 1.25rem',
                  transition: 'all 0.3s',
                  border: stage.unimatch && i < 3 ? '2px solid var(--pink)' : '2px solid transparent',
                  position: 'relative',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '0.9rem', color: (stage.unimatch && i < 2) ? 'white' : 'var(--black)' }}>
                        {stage.stage}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: (stage.unimatch && i < 2) ? 'rgba(255,255,255,0.6)' : 'var(--gray-400)', marginTop: '0.2rem' }}>
                        {stage.desc}
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.2rem' }}>
                      <div style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1.1rem', color: (stage.unimatch && i < 2) ? 'white' : 'var(--black)' }}>
                        {stage.pct}%
                      </div>
                      {i < 3 && (
                        <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--pink)', background: 'white', padding: '0.1rem 0.4rem', borderRadius: 4 }}>
                          Unimatch
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <p style={{ fontSize: '0.75rem', color: 'var(--gray-400)', textAlign: 'center', marginTop: '0.5rem' }}>
                Pink border = where Unimatch operates. Sources: NACAC, Ruffalo Noel Levitz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT UNIMATCH OFFERS */}
      <section className="section" style={{ background: 'var(--black)' }}>
        <div className="container">
          <div className="label" style={{ color: 'var(--pink)' }}>What you get</div>
          <h2 className="h2" style={{ color: 'white', marginBottom: '3rem' }}>
            A channel that has never existed before<span className="dot">.</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: 'Verified presence', body: 'Every university is in the database. Students can find you whether or not we have a commercial relationship.' },
              { title: 'Priority placement', body: 'Paid partners appear prominently in relevant search results — when a student\'s profile genuinely matches what you offer.' },
              { title: 'Active researchers only', body: 'Every user on the platform is actively in the university decision. Not passive browsing. Not accidental exposure.' },
              { title: 'Profile integrity', body: 'Your information is verified. No hallucinations, no outdated deadlines. Students trust what they see.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '1.75rem', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, background: 'rgba(255,255,255,0.03)' }}>
                <div style={{ width: 32, height: 3, background: 'var(--pink)', borderRadius: 2, marginBottom: '1rem' }} />
                <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1.05rem', color: 'white', marginBottom: '0.6rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h2 className="h2" style={{ marginBottom: '1rem' }}>Ready to talk<span className="dot">?</span></h2>
          <p className="body-lg" style={{ marginBottom: '2.5rem' }}>We're in early partnership conversations. The earlier you're in, the more you help shape how your institution is represented on the platform.</p>
          <Link href="mailto:universities@uninav.app" className="btn-primary">Contact our partnerships team →</Link>
        </div>
      </section>
    </>
  )
}
