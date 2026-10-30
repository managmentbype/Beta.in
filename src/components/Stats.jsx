import useReveal, { useCount } from '../useReveal'

function StatItem({ to, suffix = '', title, desc }) {
  const [ref, val] = useCount(to, 2000)
  return (
    <li ref={ref} className="stat-card">
      <strong className="stat-num">
        {val.toLocaleString()}<b>{suffix}</b>
      </strong>
      <span className="stat-title">{title}</span>
      <p className="stat-desc">{desc}</p>
    </li>
  )
}

export default function Stats() {
  const ref = useReveal()
  return (
    <section className="stats reveal" id="stats" ref={ref}>
      <p className="eyebrow stats-eyebrow">At a Glance</p>
      <ul className="stats-grid">
        <StatItem 
          to={8} 
          suffix="+" 
          title="Years of Excellence" 
          desc="Serving fintech industry since 2017" 
        />
        <StatItem 
          to={3200} 
          suffix="+" 
          title="Active API Clients" 
          desc="Trusted by networks nationwide" 
        />
        <StatItem 
          to={500} 
          suffix="+" 
          title="Businesses Using Our APIs" 
          desc="Scaling digital payment platforms" 
        />
        <StatItem 
          to={150} 
          suffix="M+" 
          title="Monthly Transactions" 
          desc="Processed with 99.99% uptime" 
        />
      </ul>
    </section>
  )
}
