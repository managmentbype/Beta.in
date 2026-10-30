import React, { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const checkScroll = () => {
      // Appear after scrolling past top / hero (~280px)
      if (window.scrollY > 280) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    checkScroll()
    window.addEventListener('scroll', checkScroll, { passive: true })
    return () => window.removeEventListener('scroll', checkScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      className={`floating-top-btn ${visible ? 'floating-top-btn--visible is-visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <div className="top-btn-inner">
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="top-btn-icon"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </div>
      <span className="top-btn-glow" />
    </button>
  )
}
