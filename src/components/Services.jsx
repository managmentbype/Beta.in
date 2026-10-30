import useReveal, { useTilt } from '../useReveal'
import { Phone, Bill, Atm } from './Art'

export const items = [
  { 
    eyebrow: 'AEPS SERVICES', 
    t: 'AEPS Services', 
    d: 'Aadhaar Enabled Payment System for seamless cash withdrawal & balance inquiry.', 
    art: <Atm /> 
  },
  { 
    eyebrow: 'BILL PAYMENTS', 
    t: 'BBPS (Bill Pay)', 
    d: 'Bharat Bill Payment System integration for electricity, water, gas, and more.', 
    art: <Bill /> 
  },
  { 
    eyebrow: 'RECHARGE & UTILITY', 
    t: 'Mobile Recharge', 
    d: 'High margin prepaid/postpaid recharge APIs for all major telecom operators.', 
    art: <Phone /> 
  },
]

export function ServiceCard({ eyebrow, t, d, art, i }) {
  const tilt = useTilt(6)
  return (
    <article className="service-card tilt" style={{ '--i': i % 3 }} {...tilt}>
      <span className="tile__glare" />
      <div className="service-card__body">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h3>{t}</h3>
        <p>{d}</p>
        <div className="service-card__art">{art}</div>
        <div className="service-card__footer">
          <span className="pill-btn">Enquire Now →</span>
        </div>
      </div>
      <svg className="card-wave" viewBox="0 0 600 200" preserveAspectRatio="none">
        <path d="M0,100 C150,150 350,50 600,90 L600,200 L0,200 Z" fill="rgba(255,255,255,0.16)" />
        <path d="M0,130 C180,75 380,165 600,110 L600,200 L0,200 Z" fill="rgba(255,255,255,0.24)" />
      </svg>
    </article>
  )
}

export default function Services() {
  const ref = useReveal(0.08)
  const group = [...items, ...items, ...items]
  const marqueeItems = [...group, ...group]

  return (
    <section className="section reveal" id="services" ref={ref}>
      <header className="section__head center">
        <p className="eyebrow">Our Services</p>
        <h2>Digital Banking & <em>Retail Solutions</em></h2>
        <p className="lead">Empower your retail business with our fast, secure and high-commission services.</p>
      </header>

      <div className="service-marquee">
        <div className="service-marquee__track">
          {marqueeItems.map((it, i) => (
            <ServiceCard key={`${it.t}-${i}`} {...it} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
