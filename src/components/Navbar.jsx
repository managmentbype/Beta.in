import { useEffect, useState, useRef } from 'react'
import { Link, useRouter } from '../router'
const logoImg = '/siteadmin/images/LOGO.png'

const demoItems = [
  { label: 'B2B Admin Panel', desc: 'Complete enterprise administration' },
  { label: 'B2B Member Panel', desc: 'Retailer & agent portal' },
  { label: 'Ecommerce', desc: 'Digital storefront & checkout' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [imgError, setImgError] = useState(false)
  const [demoOpen, setDemoOpen] = useState(false)
  const demoRef = useRef(null)
  const { path } = useRouter()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close demo dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (demoRef.current && !demoRef.current.contains(e.target)) {
        setDemoOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const toggleDemo = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDemoOpen((prev) => !prev)
  }

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // When open is true, don't apply nav--float so transform doesn't break mobile menu fixed positioning
  const isFloating = scrolled && !open

  return (
    <>
      <header className={`nav ${isFloating ? 'nav--float' : ''} ${open ? 'nav--menu-open' : ''}`}>
        <Link href="/#top" className="logo" onClick={() => { setOpen(false); setDemoOpen(false) }}>
          {!imgError ? (
            <img 
              src={logoImg} 
              alt="betasourcesoftware" 
              style={{ height: '38px', width: 'auto', display: 'block' }} 
              onError={() => setImgError(true)} 
            />
          ) : (
            <>betasource<span>software</span></>
          )}
        </Link>
        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          <Link 
            href="/#top" 
            className={path === '/' || path === '/#top' ? 'is-active' : ''} 
            onClick={() => { setOpen(false); setDemoOpen(false) }}
          >
            Home
          </Link>

          <Link 
            href="/about" 
            className={path === '/about' ? 'is-active' : ''} 
            onClick={() => { setOpen(false); setDemoOpen(false) }}
          >
            About
          </Link>

          <Link 
            href="/services" 
            className={path === '/services' ? 'is-active' : ''} 
            onClick={() => { setOpen(false); setDemoOpen(false) }}
          >
            Services
          </Link>

          {/* Demo Dropdown */}
          <div 
            className={`nav-dropdown ${demoOpen ? 'is-active' : ''}`}
            ref={demoRef}
          >
            <button 
              type="button" 
              className="nav-dropdown-trigger" 
              onClick={toggleDemo}
              aria-expanded={demoOpen}
            >
              <span>Demo</span>
              <svg 
                className={`nav-dropdown-arrow ${demoOpen ? 'is-rotated' : ''}`} 
                width="12" 
                height="12" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>

            <div className={`nav-dropdown-menu ${demoOpen ? 'is-open' : ''}`}>
              {demoItems.map((item, idx) => (
                <a 
                  key={idx} 
                  href="/contact" 
                  className="nav-dropdown-item" 
                  onClick={() => { 
                    setDemoOpen(false)
                    setOpen(false) 
                  }}
                >
                  <div className="ndi-bullet" />
                  <div className="ndi-text">
                    <span className="ndi-title">{item.label}</span>
                    <span className="ndi-desc">{item.desc}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <Link 
            href="/contact" 
            className={path === '/contact' ? 'is-active' : ''} 
            onClick={() => { setOpen(false); setDemoOpen(false) }}
          >
            Contact
          </Link>

          <Link href="/contact" className="nav-premium-btn" onClick={() => { setOpen(false); setDemoOpen(false) }}>
            <div className="np-icon-ring">
              <div className="np-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </div>
            <span className="np-text">Get started</span>
          </Link>
        </nav>
        <button className={`burger ${open ? 'is-open' : ''}`} aria-label="Menu" onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
      </header>
    </>
  )
}
