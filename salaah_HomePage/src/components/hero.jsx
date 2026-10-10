import './hero.css'
import handshakeImage from '../assets/handshake-hero.png'
import { RouteLink } from './routing.jsx'

function Hero() {
  return (
    <main className="landing-hero" id="home" style={{ '--hero-image': `url(${handshakeImage})` }}>
      <div className="hero-copy">
        <p className="hero-eyebrow"><span aria-hidden="true">✳</span> Together, we make a difference</p>
        <h1>
          Stronger communities<br />
          <span>start with us.</span>
        </h1>
        <p className="hero-description">
          Bringing people together through shared ideas, meaningful work, and a spirit of partnership.
        </p>
        <div className="hero-actions">
          <RouteLink className="hero-primary" to="/contact">Get involved <span aria-hidden="true">↗</span></RouteLink>
          <RouteLink className="hero-secondary" to="/about">Discover our work</RouteLink>
        </div>
      </div>
      <div className="hero-caption" aria-hidden="true">
        <span className="caption-dot" /> Better together
      </div>
    </main>
  )
}

export default Hero
