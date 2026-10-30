import React from 'react'
import useReveal from '../useReveal'
const aepsImg = '/siteadmin/images/services/AEPS.png'
const bbpsImg = '/siteadmin/images/services/BBPS.png'
const rechargeImg = '/siteadmin/images/services/Recharge.png'

const servicesData = [
  {
    title: 'AEPS (Aadhaar Enabled Payment System)',
    desc: 'Empower retail networks to provide cash withdrawal, balance inquiry, and mini statements using Aadhaar biometric authentication. Bank-grade security with real-time settlement.',
    img: aepsImg,
    reverse: false
  },
    {
    title: 'BBPS (Bharat Bill Payment System)',
    desc: 'One-stop solution for utility bill payments including electricity, water, gas, DTH, and mobile postpaid. Instant commission settlements and official BBPS receipts.',
    img: bbpsImg,
    reverse: true
  },
  {
    title: 'Mobile & DTH Recharge',
    desc: 'High-margin prepaid mobile and DTH recharge APIs covering all major operators. Auto-reconciliation and 99.99% uptime for uninterrupted retail business.',
    img: rechargeImg,
    reverse: false
  }
]

export default function Services() {
  const ref = useReveal()

  return (
    <div className="services-page" ref={ref} style={{ background: 'transparent', minHeight: '100vh', paddingBottom: '6rem' }}>
      
      {/* Services Hero (Simple, center text, shorter height) */}
      <section style={{ paddingTop: '11rem', paddingBottom: '4rem', textAlign: 'center', paddingInline: 'var(--pad)' }}>
        <div className="hero-eyebrow" style={{ justifyContent: 'center', background: '#1a1512', color: '#ffffff', border: 'none' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor" />
          </svg>
          OUR SERVICES
        </div>
        <h1 className="hero-heading" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', color: '#1a1512' }}>
          Enterprise <em style={{ color: '#ffffff', fontStyle: 'normal', fontWeight: 800, textShadow: '0 2px 12px rgba(0,0,0,0.15)' }}>Fintech</em> APIs.
        </h1>
        <p className="hero-subtext" style={{ margin: '1rem auto 0', maxWidth: '48rem', color: '#1a1512', fontWeight: 500, fontSize: '1.2rem' }}>
          Explore our suite of highly secure, scalable, and instant payment infrastructure solutions designed for B2B fintech portals and retail networks across India.
        </p>
      </section>

      {/* Zig-Zag Services Sections */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginTop: '4rem', alignItems: 'center' }}>
        {servicesData.map((svc, i) => (
          <section key={i} className={`svc-row ${svc.reverse ? 'svc-reverse' : ''}`} style={{ 
            display: 'grid', 
            gap: 'clamp(3rem, 5vw, 6rem)', 
            alignItems: 'center',
            width: 'calc(100% - clamp(1.5rem, 4vw, 4rem))', // Full width with side margins
            maxWidth: '1440px',
            margin: '0 auto',
            padding: 'clamp(3rem, 6vw, 5rem) clamp(2rem, 6vw, 5rem)',
            background: '#ffffff',
            borderRadius: '44px',
            boxShadow: '0 -20px 50px -10px rgba(0,0,0,0.08), 0 30px 60px -20px rgba(0,0,0,0.08)',
            border: '1px solid rgba(0,0,0,0.04)',
            position: 'sticky',
            top: 'clamp(80px, 10vh, 120px)',
            zIndex: i
          }}>
            
            {/* Text Side */}
            <div className="svc-text">
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: '#0a0a0a', marginBottom: '1.2rem', lineHeight: 1.15, letterSpacing: '-0.03em' }}>
                {svc.title}
              </h2>
              <p style={{ fontSize: '1.15rem', color: '#555555', lineHeight: 1.6 }}>
                {svc.desc}
              </p>
              <ul style={{ marginTop: '2rem', listStyle: 'none', display: 'flex', gap: '1rem', flexWrap: 'wrap', padding: 0 }}>
                <li style={{ background: 'rgba(234, 134, 48, 0.12)', color: '#ea8630', padding: '0.5rem 1.4rem', borderRadius: '99px', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.05em' }}>99.9% UPTIME</li>
                <li style={{ background: 'rgba(234, 134, 48, 0.12)', color: '#ea8630', padding: '0.5rem 1.4rem', borderRadius: '99px', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.05em' }}>INSTANT SETTLEMENT</li>
              </ul>
            </div>

            {/* Image Card Side */}
            <div className="svc-image" style={{ 
              background: '#f8f8f8', 
              borderRadius: '32px', 
              aspectRatio: '4/3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.04)'
            }}>
              {svc.img ? (
                <img src={svc.img} alt={svc.title} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '2rem' }} />
              ) : (
                <div style={{ textAlign: 'center', color: '#999' }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ margin: '0 auto 1rem', opacity: 0.4 }}>
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                  <p style={{ fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>Image coming soon</p>
                </div>
              )}
            </div>

          </section>
        ))}
      </div>

    </div>
  )
}
