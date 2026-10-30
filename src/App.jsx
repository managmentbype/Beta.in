import { useEffect } from 'react'
import { Router, useRouter, Link } from './router'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import AboutPage from './pages/About'
import Contact from './components/Contact'
import Legal from './pages/Legal'
import { privacy, refund, terms } from './pages/legalData'
import ScrollToTop from './components/ScrollToTop'
import Preloader from './components/Preloader'

const routes = {
  '/': { el: <Home />, title: 'betasourcesoftware' }, 
  '/index.aspx': { el: <Home />, title: 'betasourcesoftware — AEPS, DMT, Recharge & BBPS' },
  '/about': { el: <AboutPage />, title: 'About Us - betasourcesoftware' },
  '/services': { el: <Services />, title: 'Services - betasourcesoftware' },
  '/contact': { el: <Contact />, title: 'Contact us — betasourcesoftware' },
  '/privacy': { el: <Legal doc={privacy} />, title: 'Privacy Policy — betasourcesoftware' },
  '/refund': { el: <Legal doc={refund} />, title: 'Refund Policy — betasourcesoftware' },
  '/terms': { el: <Legal doc={terms} />, title: 'Terms & Conditions — betasourcesoftware' },
}

function NotFound() {
  return (
    <section className="nf">
      <p className="eyebrow">Error 404</p>
      <h1>Page not <em>found.</em></h1>
      <p className="lead">The page you are looking for doesn&apos;t exist or has moved.</p>
      <Link href="/" className="btn btn--green"><span className="btn__label">Back to home</span><span className="btn__arrow">→</span></Link>
    </section>
  )
}

function Pages() {
  const { path } = useRouter()
  const page = routes[path]
  useEffect(() => { document.title = page ? page.title : 'Page not found — betasourcesoftware' }, [page])
  return <main key={path}>{page ? page.el : <NotFound />}</main>
}

export default function App() {
  return (
    <Router>
      <Preloader />
      <div id="top" style={{ position: "absolute", top: 0 }} />
      <Cursor />
      <Navbar />
      <Pages />
      <Footer />
      <ScrollToTop />
    </Router>
  )
}
