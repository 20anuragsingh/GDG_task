import { useEffect, useState } from 'react'
import './navbar.css'
import myImage from '../assets/image.png';
import { RouteLink } from './routing.jsx'


const links = [
  { label: 'About', href: '/about' },
  { label: 'Departments', href: '/departments' },
  { label: 'Events', href: '/events' },
  { label: 'Our work', href: '/work' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 24)
    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <nav className="site-navbar" aria-label="Main navigation">
        <RouteLink className="site-brand" to="/" aria-label="Salaah home">
          <span className="" aria-hidden="true"><img  className="logoImage" src={myImage} alt="logo" /></span>
          <span> </span>
        </RouteLink>

        <div className="nav-links">
          {links.map(({ label, href }) => (
            <RouteLink key={label} to={href}>{label}</RouteLink>
          ))}
        </div>

        <RouteLink className="nav-cta" to="/contact">
          Get in touch <span aria-hidden="true">↗</span>
        </RouteLink>
      </nav>
    </header>
  )
}

export default Navbar
