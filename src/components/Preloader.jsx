import { useState, useEffect } from 'react'

export default function Preloader() {
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Show preloader smoothly on initial load
    const timer = setTimeout(() => {
      setFadeOut(true)
      const removeTimer = setTimeout(() => {
        setLoading(false)
      }, 550) // wait for fade animation
      return () => clearTimeout(removeTimer)
    }, 850) // minimum display time for premium experience

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div 
      className={`global-preloader ${fadeOut ? 'is-fading' : ''}`}
      aria-hidden="true"
    >
      <div className="preloader-content">
        {/* Animated Rings Container */}
        <div className="preloader-rings-wrap">
          {/* Subtle Outer Orbit Halo */}
          <div className="pl-ring pl-ring-halo" />

          {/* Outer Rotating Glowing Ring */}
          <div className="pl-ring pl-ring-outer" />
          
          {/* Inner Counter-Rotating Ring */}
          <div className="pl-ring pl-ring-inner" />

          {/* Glowing Ambient Core */}
          <div className="pl-glow-core" />

          {/* Centered Favicon */}
          <div className="pl-favicon-box">
            <img 
              src="/siteadmin/images/Favicon.png" 
              alt="Loading" 
              className="pl-favicon-img" 
            />
          </div>
        </div>

        {/* Brand Caption */}
        <div className="preloader-caption">
          <span className="pl-brand">BETASOURCE</span>
          <span className="pl-subbrand">FINTECH INFRASTRUCTURE</span>
          <div className="pl-dots">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  )
}
