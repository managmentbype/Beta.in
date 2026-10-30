import React from 'react'

const featurePairs = [
  {
    img: "/siteadmin/images/First1.jpg",
    title: "Instant Settlements", name: "24x7 Payouts", role: "Transfer earnings directly to your bank account anytime, instantly.", color: "#f8dea5"
  },
  {
    img: "/siteadmin/images/First2.jpg",
    title: "Highest Margins", name: "Maximize Profit", role: "Earn industry-leading commissions on Recharges and BBPS.", color: "#d2b9fb"
  },
  {
    img: "/siteadmin/images/First3.jpg?v=2",
    title: "99.99% Uptime", name: "Reliable APIs", role: "Experience seamless and secure transactions without failures.", color: "#b9fbd2"
  },
  {
    img: "/siteadmin/images/First4.jpg",
    title: "24/7 Dedicated Support", name: "Real Help, Fast", role: "Our support team is always available to help you succeed.", color: "#ffb4a2"
  },
]

export default function Testimonials() {
  const pairs = [...featurePairs, ...featurePairs, ...featurePairs, ...featurePairs] // Duplicate for continuous scroll

  return (
    <section className="testimonials">
      <h2 className="testi-title">Powerful Features<br/>For Your Business</h2>
      <div className="testi-marquee">
        <div className="testi-track">
          {pairs.map((p, i) => (
            <div key={i} className="testi-pair">
              <div className="testi-img">
                <img src={p.img} alt="Feature" />
              </div>
              <div className="testi-card" style={{ backgroundColor: p.color }}>
                <p className="testi-quote">{p.title}</p>
                <div className="testi-author">
                  <strong>{p.name}</strong>
                  <span>{p.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
