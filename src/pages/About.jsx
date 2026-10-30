import React from 'react'
import useReveal from '../useReveal'
const aboutImg = '/siteadmin/images/About_us.png'
import PremiumGlobe from '../components/PremiumGlobe'

export default function About() {
  const ref = useReveal()

  return (
    <div className="about-page" ref={ref} style={{ background: 'transparent', minHeight: '100vh', paddingBottom: '6rem' }}>
      
      {/* Hero Section */}
      <section style={{ paddingTop: '11rem', paddingBottom: '4rem', textAlign: 'center', paddingInline: 'var(--pad)' }}>
        <div className="hero-eyebrow" style={{ justifyContent: 'center', background: '#1a1512', color: '#ffffff', border: 'none' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z" fill="currentColor" />
          </svg>
          ABOUT US
        </div>
        <h1 className="hero-heading" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', color: '#1a1512' }}>
          Who <em style={{ color: '#ffffff', fontStyle: 'normal' }}>We Are</em>.
        </h1>
        <p className="hero-subtext" style={{ margin: '1rem auto 0', maxWidth: '48rem', color: '#1a1512', fontWeight: 500, fontSize: '1.2rem' }}>
          We are India's leading B2B Fintech API provider, innovating for a safer and more inclusive digital economy.
        </p>
      </section>

      {/* About Us Card */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginTop: '4rem', alignItems: 'center' }}>
        <section className="svc-row" style={{ 
            display: 'grid', 
            gap: 'clamp(3rem, 5vw, 6rem)', 
            alignItems: 'center',
            width: 'calc(100% - clamp(1.5rem, 4vw, 4rem))', 
            maxWidth: '1440px',
            margin: '0 auto',
            padding: 'clamp(3rem, 6vw, 5rem) clamp(2rem, 6vw, 5rem)',
            background: '#ffffff',
            borderRadius: '44px',
            boxShadow: '0 30px 60px -20px rgba(0,0,0,0.08)',
            border: '1px solid rgba(0,0,0,0.04)'
          }}>
            <div className="svc-text">
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: '#0a0a0a', marginBottom: '1.2rem', lineHeight: 1.15, letterSpacing: '-0.03em' }}>
                Innovation for a safer world.
              </h2>
              <p style={{ fontSize: '1.15rem', color: '#555555', lineHeight: 1.6, marginBottom: '1rem' }}>
                BetaSource Software is dedicated to building highly secure and scalable fintech infrastructure for businesses across India. With our robust API solutions, we empower retail networks to provide seamless financial services to millions of customers.
              </p>
              <p style={{ fontSize: '1.15rem', color: '#555555', lineHeight: 1.6 }}>
                Our team of industry experts ensures 99.99% uptime, instant settlements, and continuous innovation, helping you scale your digital banking portal with confidence and peace of mind.
              </p>
            </div>

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
              <img src={aboutImg} alt="About Us" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '2rem' }} />
            </div>
        </section>
      </div>

      {/* Premium Globe Section */}
      <div className="about-globe-section">
        <section className="about-globe-card">
          {/* Header Row */}
          <div className="about-globe-header">
            <div className="about-globe-left">
              <div className="globe-badge">
                <span className="globe-badge-dot" />
                <span className="globe-badge-text">Live Network</span>
              </div>
              <h3 className="globe-main-title">
                Connected<br className="desktop-br" /> Ecosystem.
              </h3>
            </div>

            <div className="about-globe-right">
              <h4 className="globe-sub-title">
                Nationwide Scale.<br />
                <span className="highlight-orange">Local Precision.</span>
              </h4>
              <p className="globe-desc">
                Powering millions of highly secure transactions daily across India's vast digital retail ecosystem.
              </p>
            </div>
          </div>

          {/* 3D Globe Visual */}
          <div className="about-globe-canvas-wrap">
            <PremiumGlobe />
          </div>
        </section>
      </div>

    </div>
  )
}
