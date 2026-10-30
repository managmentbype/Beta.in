import useReveal from '../useReveal'
import Button from './Button'
const missionImg = '/siteadmin/images/Mission_Vision.png'

export default function Overview() {
  const ref = useReveal()
  return (
    <section className="section about reveal" id="overview" ref={ref} style={{ padding: '2.5rem var(--pad) 3rem' }}>
      <div className="about__frame">
        <div className="about__photo" style={{ height: 'clamp(240px, 32vw, 380px)', backgroundColor: '#fff' }}>
          <img 
            src={missionImg} 
            alt="BetaSource Software Vision" 
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
          <li>RETAIL FINTECH NETWORK</li>
        </ul>
      </div>

      <div className="about__story">
        <span className="vline" />
        <div>
          <p className="eyebrow" style={{ color: '#ea8630', fontWeight: 700, marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.14em', fontSize: '0.82rem' }}>
            OUR MISSION &amp; VISION
          </p>
          <h3>Building India&apos;s Most Trusted <em>Digital Banking Network.</em></h3>
          <p>
            Our mission is to empower millions of micro-entrepreneurs and retail store owners across urban and rural India with cutting-edge fintech infrastructure.
          </p>
          <p>
            By providing high-speed APIs, instant settlements, bank-grade encryption, and 24/7 dedicated support, we help local shops expand their services and grow their monthly business revenue.
          </p>
          <Button href="/contact" variant="green">Learn more →</Button>
        </div>
      </div>
    </section>
  )
}
