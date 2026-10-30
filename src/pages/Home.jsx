import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Work from '../components/Work'
import Overview from '../components/Overview'
import Stats from '../components/Stats'
import Process from '../components/Process'
import AppShowcase from '../components/AppShowcase'
import GlobalReach from '../components/GlobalReach'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Work />
      <Overview />
      <Stats />
      <Process />
      <GlobalReach />
      <AppShowcase />
      <Testimonials />
      <CTA />
    </>
  )
}
