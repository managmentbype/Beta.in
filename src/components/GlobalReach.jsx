import React from 'react'
import useReveal from '../useReveal'
import Button from './Button'
import Globe from './Globe'

export default function GlobalReach() {
  const ref = useReveal()

  return (
    <section className="globe-section" id="global-reach" ref={ref}>
      <div className="globe-content">
        
        <div className="globe-text">
          <h2 className="hero-heading" style={{ color: '#1a1512' }}>
            Empowering Every Corner of <br />
            <em className="hero-highlight">India.</em>
          </h2>
          
          <p className="hero-subtext" style={{ color: '#4a4a4a' }}>
            Our resilient API architecture connects you to a nationwide ecosystem of banking and payment nodes. Scale your enterprise effortlessly across every state with zero latency friction.
          </p>

          <div className="globe-stats">
            <div className="g-stat">
              <b>99.99%</b>
              <span>Uptime SLA</span>
            </div>
            <div className="g-stat">
              <b>&lt; 50ms</b>
              <span>API Latency</span>
            </div>
            <div className="g-stat">
              <b>150M+</b>
              <span>Transactions</span>
            </div>
          </div>
          
        </div>

        <div className="globe-canvas-wrapper">
          <Globe />
        </div>

      </div>
    </section>
  )
}
