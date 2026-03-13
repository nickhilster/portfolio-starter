const particles = [
  { left: '14%', top: '20%', size: 5, delay: '0s', duration: '5.8s' },
  { left: '76%', top: '18%', size: 4, delay: '0.5s', duration: '6.6s' },
  { left: '26%', top: '58%', size: 6, delay: '1.1s', duration: '5.2s' },
  { left: '68%', top: '62%', size: 5, delay: '0.7s', duration: '6.1s' },
  { left: '46%', top: '32%', size: 3, delay: '1.5s', duration: '4.8s' },
  { left: '56%', top: '76%', size: 4, delay: '0.2s', duration: '5.5s' },
]

export default function CardParticles() {
  return (
    <div aria-hidden="true" className="card-particles">
      {particles.map((particle, index) => (
        <span
          key={index}
          className="card-particle"
          style={{
            left: particle.left,
            top: particle.top,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  )
}
