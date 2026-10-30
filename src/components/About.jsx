import useReveal from '../useReveal'
import Button from './Button'
const aboutImg = '/siteadmin/images/About_us.png'

export default function About() {
  const ref = useReveal()
  return (
    <section className="section about reveal" id="about" ref={ref} style={{ padding: '2rem var(--pad) 2.5rem' }}>
      <div className="about__frame">
        <div className="about__photo" style={{ height: 'clamp(280px, 35vw, 420px)', backgroundColor: '#fff' }}>
          <img 
            src={aboutImg} 
            alt="BetaSource Software About Us" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              padding: '1.5rem',
              display: 'block'
            }}
          />
        </div>
        <h2 className="about__name">
          BetaSource <span style={{ color: '#ea8630' }}>Software</span>
        </h2>
        <ul className="about__roles">
          <li>DIGITAL PAYMENTS</li>
        </ul>
      </div>

      <div className="about__story">
        <span className="vline" />
        <div>
          <p className="eyebrow" style={{ color: '#ea8630', fontWeight: 700, marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.14em', fontSize: '0.82rem' }}>
            ABOUT BETASOURCE
          </p>
          <h3>Empowering Retailers with <em>Next-Gen Fintech.</em></h3>
          <p>
            BetaSource Software is a leading digital payment & API technology platform designed to transform local retail counters into full-fledged digital banking hubs.
          </p>
          <p>
            We enable seamless cash withdrawals, AEPS, money transfers, bill payments, and payouts — giving business owners powerful tools to maximize revenues and serve millions across India with 99.99% uptime.
          </p>
          <Button href="/contact" variant="orange">Talk to us →</Button>
        </div>
      </div>
    </section>
  )
}
