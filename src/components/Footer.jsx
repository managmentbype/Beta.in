import { Link } from '../router'
import { MailIcon, PinIcon } from './Icons'
import { COMPANY } from '../companyConfig'
const logoImg = '/siteadmin/images/LOGO.png'

const socials = []

export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot__top">
        <div className="foot__brand">
          <Link href="/#top" className="logo">
            <img
              src={logoImg}
              alt="BetaSource Software"
              style={{ height: '42px', width: 'auto', display: 'block' }}
            />
          </Link>
          <p style={{ marginTop: '1rem', opacity: 0.85, fontSize: '0.95rem', color: '#e0e0e0' }}>
            Fast, simple and secure digital payment services for retailers and their customers — Recharge, BBPS, Payouts, Gateway and more.
          </p>
          <ul className="foot__social">
            {socials.map(([n, ic, href]) => (
              <li key={n}><a href={href} target="_blank" rel="noreferrer" aria-label={n}>{ic}</a></li>
            ))}
          </ul>
        </div>

        <div className="foot__col">
          <h4>Services</h4>
          <Link href="/services">Recharge</Link>
          <Link href="/services">BBPS Bill Pay</Link>
          <Link href="/services">CC Bill Payment</Link>
          <Link href="/services">Payment Gateway</Link>
          <Link href="/services">Payout</Link>
        </div>

        <div className="foot__col">
          <h4>Company</h4>
          <Link href="/about">About us</Link>
          <Link href="/#platform">Platform</Link>
          <Link href="/#stats">At a Glance</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="foot__col">
          <h4>Legal</h4>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/refund">Refund Policy</Link>
          <Link href="/terms">Terms &amp; Conditions</Link>
        </div>

        <div className="foot__contact">
          <h4>Get in touch</h4>
          <a href={`mailto:${COMPANY.email}`}><MailIcon />{COMPANY.email}</a>
          <span><PinIcon />{COMPANY.address}</span>
        </div>
      </div>

      <div className="foot__bottom">
        <span className="foot__copy">© {new Date().getFullYear()} BetaSource Software Technologies. All rights reserved.</span>
        <nav aria-label="Legal">
          <Link href="/privacy">Privacy</Link>
          <Link href="/refund">Refund</Link>
          <Link href="/terms">Terms</Link>
        </nav>
      </div>
    </footer>
  )
}
