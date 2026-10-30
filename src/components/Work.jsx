import useReveal, { useTilt } from '../useReveal'
import Button from './Button'

function Tile({ className, children, style }) {
  const tilt = useTilt(6)
  return (
    <article className={`tile tilt ${className}`} style={style} {...tilt}>
      <span className="tile__glare" />
      {children}
    </article>
  )
}

export default function Work() {
  const ref = useReveal()
  return (
    <section className="section section--tint reveal" id="platform" ref={ref}>
      <header className="section__head center">
        <p className="eyebrow">Platform</p>
        <h2>Tools for the <em>retailer</em></h2>
      </header>

      <div className="bento">
        <Tile className="tile--hero">
          <div style={{ position: 'relative', zIndex: 2 }}>
            <p className="eyebrow">Retailer dashboard</p>
            <h3>One dashboard,<br />every service</h3>
            <p>Manage wallet, transactions, commissions and reports from a single clean screen.</p>
            <div className="row">
              <Button href="/contact" variant="green">See how it works</Button>
            </div>
          </div>
          <span className="hero-tile-pattern" />
        </Tile>

        <Tile className="tile--orange">
          <p className="eyebrow">Commission</p>
          <h3>Earn on every<br />transaction</h3>
          <p>Each service you offer adds to your commission.</p>
          <span className="pill">All services</span>
          <svg className="card-wave" viewBox="0 0 600 200" preserveAspectRatio="none">
            <path d="M0,100 C150,150 350,50 600,90 L600,200 L0,200 Z" fill="rgba(255,255,255,0.16)" />
            <path d="M0,130 C180,75 380,165 600,110 L600,200 L0,200 Z" fill="rgba(255,255,255,0.24)" />
          </svg>
        </Tile>

        <Tile className="tile--sun">
          <p className="eyebrow">Support</p>
          <h3>Real people,<br />real help</h3>
          <p>Email our team, Monday to Saturday.</p>
          <span className="glow-dot" />
        </Tile>

        <Tile className="tile--emerald">
          <p className="eyebrow">Security</p>
          <h3>Your data,<br />protected</h3>
          <p>Access controls and encrypted connections.</p>
        </Tile>

        <Tile className="tile--white">
          <p className="eyebrow">Reports</p>
          <h3>Full statement</h3>
          <p>Every transaction and commission, listed in one place.</p>
        </Tile>

        <Tile className="tile--wide">
          <p className="eyebrow">Smart Balance</p>
          <h3>Simple wallet</h3>
          <p>Load your balance once and seamlessly use it across all our services. Easy tracking and zero hassle.</p>
        </Tile>
      </div>
    </section>
  )
}
