import useReveal from '../useReveal'
import Button from './Button'

export default function CTA() {
  const ref = useReveal()
  return (
    <section className="cta reveal" id="partner" ref={ref}>
      <div className="cta__card">
        <div className="cta__text">
          <p className="eyebrow">Become a partner</p>
          <h2>Grow your business with <em>betasourcesoftware.</em></h2>
        </div>
        <Button href="/contact" variant="orange">Join as retailer</Button>
      </div>
    </section>
  )
}
