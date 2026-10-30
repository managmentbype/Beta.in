import React, { useState, useEffect } from 'react'
import Button from './Button'
import { Link } from '../router'
import useReveal from '../useReveal'
const heroImg1 = '/siteadmin/images/HERO_img1.png'
const heroImg2 = '/siteadmin/images/HERO_img2.png'
const heroImg3 = '/siteadmin/images/HERO_img3.png'

const images = [heroImg1, heroImg2, heroImg3]

export default function Hero() {
  const ref = useReveal()
  const [currentIdx, setCurrentIdx] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="hero-section reveal" ref={ref}>
      <div className="hero-bg"></div>
      
      <div className="hero-content">
        
        {/* Left Side: Typography and Buttons */}
        <div className="hero-text">
          <h1 className="hero-heading">
            <span className="hero-heading--desktop">
              Empowering India's <em className="hero-highlight">Next-</em><br />
              <em className="hero-highlight">Gen</em><br />
              Digital Banking &amp; Payment<br />
              <em className="hero-highlight">APIs.</em>
            </span>
            <span className="hero-heading--mobile">
              <span className="hero-mob-row">Empowering India's <em className="hero-highlight">Next-</em></span>
              <span className="hero-mob-row"><em className="hero-highlight">Gen</em></span>
              <span className="hero-mob-row">Digital Banking &amp; Payment</span>
              <span className="hero-mob-row"><em className="hero-highlight">APIs.</em></span>
            </span>
          </h1>
          
          <p className="hero-subtext">
            Launch & scale enterprise AEPS, BBPS bill payments, DMT payouts, micro ATM, and recharge software with 99.99% uptime and instant automated settlements.
          </p>
          
          <div className="hero-actions">
            <Button href="#services" variant="orange">
              Explore All APIs
            </Button>
            <Link href="/contact" className="btn btn--white">
              <span className="btn__label">Contact Us</span>
              <span className="btn__arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        
        {/* Right Side: Hero Image Slider */}
        <div className="hero-image-wrapper">
          <div style={{ width: '100%', maxWidth: '720px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="hero-main-img" style={{ display: 'grid', padding: 0, overflow: 'hidden', position: 'relative' }}>
              {images.map((src, i) => (
                <img 
                  key={i}
                  src={src} 
                  alt={`BetaSource Fintech APIs ${i + 1}`} 
                  style={{
                    gridArea: '1 / 1',
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    opacity: currentIdx === i ? 1 : 0,
                    transition: 'opacity 0.8s ease-in-out',
                    pointerEvents: currentIdx === i ? 'auto' : 'none'
                  }}
                />
              ))}
            </div>
            
            {/* Dots */}
            <div className="hero-dots" style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
              {images.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setCurrentIdx(i)}
                  style={{
                    width: '12px', height: '12px', borderRadius: '50%', border: 'none',
                    background: currentIdx === i ? '#ea8630' : 'rgba(0,0,0,0.15)',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'background 0.3s ease, transform 0.3s ease',
                    transform: currentIdx === i ? 'scale(1.2)' : 'scale(1)'
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
