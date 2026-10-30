import React from 'react'
import useReveal from '../useReveal'

export default function AppShowcase() {
  const ref = useReveal()

  return (
    <section className="app-showcase reveal" id="app-showcase" ref={ref}>
      <div className="showcase__layout">
        
        {/* Top Left Text */}
        <div className="sc-top-left">
          <p>BETASOURCE SOFTWARE</p>
          <p className="sub">NEXT-GEN FINTECH PLATFORM</p>
        </div>

        {/* Top Right Huge Text */}
        <div className="sc-top-right">
          <h2 className="sc-huge orange">PAYMENTS</h2>
          <p className="sc-huge-sub">RELIABLE & FAST TRANSACTIONS</p>
        </div>

        {/* Center Left Titles */}
        <div className="sc-center-left">
          <h3 className="sc-title">ORIGINAL<br/>FINTECH SOLUTIONS</h3>
          <p className="sc-desc">Seamless integration and high margins</p>
        </div>
        
        {/* Center Middle Text */}
        <div className="sc-center-mid">
          <p>Speed, security and precision</p>
          <p className="sub">Designed for Retailers</p>
        </div>

        {/* Bottom Row: Innovation on Left, Coin on Right */}
        <div className="sc-bottom-row">
          <div className="sc-bottom-left">
            <h2 className="sc-huge orange sc-innovation-text">INNOVATION</h2>
          </div>
          <div className="sc-coin-wrapper">
            <div className="sc-coin">₹</div>
          </div>
        </div>

      </div>
    </section>
  )
}
