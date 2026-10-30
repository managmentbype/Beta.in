import { useState } from 'react'
import useReveal from '../useReveal'
import { MailIcon, PinIcon, CheckIcon } from './Icons'
import { COMPANY } from '../companyConfig'

export default function Contact() {
  const ref = useReveal(0.1)
  const [state, setState] = useState('idle') // idle | sending | sent

  const submit = (e) => {
    e.preventDefault()
    setState('sending')
    setTimeout(() => setState('sent'), 1100)
  }

  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="section contact-section">
        {/* ---------- Hero ---------- */}
        <div className="cp-hero__copy contact-hero-copy" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p className="eyebrow rise" style={{ '--d': '.05s' }}>Contact us</p>
          <h1 className="cp-title" style={{ fontSize: 'clamp(2.4rem, 6vw, 5.2rem)', margin: '.8rem 0 1rem', color: '#1a1512' }}>
            <span className="mask"><span style={{ '--d': '.15s' }}>Get in <em>touch.</em></span></span>
          </h1>
          <p className="lead rise" style={{ '--d': '.6s', margin: '0 auto', color: '#1a1512', fontWeight: 500, padding: '0 0.5rem' }}>
            Questions about services, onboarding or commissions? Drop us a line — real people, quick answers.
          </p>
        </div>

        {/* ---------- Wide Responsive Form Card ---------- */}
        <div className="reveal contact-card" ref={ref}>
          
          {/* Left Panel - Golden Brand Theme */}
          <div className="contact-info-panel">
            {/* Decorative BG elements */}
            <div style={{ position: 'absolute', bottom: '-20%', right: '-20%', width: '380px', height: '380px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.12)', filter: 'blur(40px)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: '10%', right: '-10%', width: '180px', height: '180px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.15)', filter: 'blur(30px)', pointerEvents: 'none' }} />
            
            <h3 style={{ fontSize: 'clamp(1.9rem, 2.8vw, 2.5rem)', fontWeight: 700, marginBottom: '1.2rem', zIndex: 2, position: 'relative', textShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              Contact Information
            </h3>
            <p className="info-lead" style={{ color: 'rgba(255,255,255,0.92)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '3.5rem', zIndex: 2, position: 'relative' }}>
              Fill up the form and our team will get back to you within 24 hours.
            </p>
            
            <div className="contact-items-list" style={{ display: 'flex', flexDirection: 'column', gap: '2.4rem', zIndex: 2, position: 'relative' }}>
              <div style={{ display: 'flex', gap: '1.1rem', alignItems: 'center' }}>
                <span style={{ color: '#ffffff', flexShrink: 0 }}><MailIcon /></span>
                <a href={`mailto:${COMPANY.email}`} className="contact-link" style={{ fontSize: '1.05rem', fontWeight: 600 }}>{COMPANY.email}</a>
              </div>
              
              <div style={{ display: 'flex', gap: '1.1rem', alignItems: 'flex-start' }}>
                <span style={{ color: '#ffffff', flexShrink: 0, marginTop: '2px' }}><PinIcon /></span>
                <span style={{ fontSize: '1.05rem', fontWeight: 500, lineHeight: 1.5, color: 'rgba(255,255,255,0.95)' }}>{COMPANY.address}</span>
              </div>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="contact-form-panel">
            <form onSubmit={submit}>
              {state === 'sent' ? (
                <div className="cp-done" style={{ textAlign: 'center', padding: '3.5rem 0' }}>
                  <span className="cp-done__tick" style={{ background: '#ea8630', color: '#fff', width: '64px', height: '64px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}><CheckIcon /></span>
                  <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1a1512' }}>Message sent!</h3>
                  <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: '2rem' }}>Thank you — we've received your request and our team will get back to you shortly.</p>
                  <button type="button" onClick={() => { setState('idle') }} style={{ background: '#1a1512', color: '#fff', border: 'none', padding: '1rem 2rem', borderRadius: '100px', fontWeight: 600, cursor: 'pointer' }}>
                    Send another message
                  </button>
                </div>
              ) : (
                <div className="contact-form-grid" style={{ display: 'flex', flexDirection: 'column', gap: '2.6rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.2rem' }}>
                    <div style={{ position: 'relative' }}>
                      <label style={{ display: 'block', fontSize: '0.82rem', color: '#ea8630', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>Your Name</label>
                      <input required name="name" placeholder="Full name" style={{ width: '100%', border: 'none', borderBottom: '2px solid #e7e5e4', padding: '0.5rem 0', fontSize: '1.05rem', color: '#1a1512', outline: 'none', background: 'transparent', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderBottomColor = '#ea8630'} onBlur={(e) => e.target.style.borderBottomColor = '#e7e5e4'} />
                    </div>
                    <div style={{ position: 'relative' }}>
                      <label style={{ display: 'block', fontSize: '0.82rem', color: '#ea8630', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>Your Email</label>
                      <input required type="email" name="email" placeholder="Email address" style={{ width: '100%', border: 'none', borderBottom: '2px solid #e7e5e4', padding: '0.5rem 0', fontSize: '1.05rem', color: '#1a1512', outline: 'none', background: 'transparent', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderBottomColor = '#ea8630'} onBlur={(e) => e.target.style.borderBottomColor = '#e7e5e4'} />
                    </div>
                  </div>
                  
                  <div style={{ position: 'relative' }}>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#ea8630', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>Your Subject</label>
                    <input required name="subject" placeholder="Subject" style={{ width: '100%', border: 'none', borderBottom: '2px solid #e7e5e4', padding: '0.5rem 0', fontSize: '1.05rem', color: '#1a1512', outline: 'none', background: 'transparent', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderBottomColor = '#ea8630'} onBlur={(e) => e.target.style.borderBottomColor = '#e7e5e4'} />
                  </div>
                  
                  <div style={{ position: 'relative' }}>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#ea8630', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>Message</label>
                    <textarea required name="message" rows="3" placeholder="Write here your message" style={{ width: '100%', border: 'none', borderBottom: '2px solid #e7e5e4', padding: '0.5rem 0', fontSize: '1.05rem', color: '#1a1512', outline: 'none', background: 'transparent', resize: 'none', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderBottomColor = '#ea8630'} onBlur={(e) => e.target.style.borderBottomColor = '#e7e5e4'}></textarea>
                  </div>
                  
                  <button type="submit" disabled={state === 'sending'} className="contact-submit-btn" style={{ alignSelf: 'flex-start', background: '#ea8630', color: '#ffffff', border: 'none', padding: '1.1rem 2.8rem', borderRadius: '12px', fontWeight: 700, fontSize: '1.05rem', cursor: state === 'sending' ? 'not-allowed' : 'pointer', transition: 'background 0.3s, transform 0.2s', marginTop: '0.5rem' }} onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'} onMouseOut={(e) => e.target.style.transform = 'none'}>
                    {state === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
