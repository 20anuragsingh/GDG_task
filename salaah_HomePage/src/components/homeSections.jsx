import { RouteLink } from './routing.jsx'

const previews = [
  { id: 'departments', number: '01', title: 'Departments', text: 'Find a team, share your skills, and help the community grow.', to: '/departments' },
  { id: 'events', number: '02', title: 'Events', text: 'Meet people and take part in workshops and local activities.', to: '/events' },
  { id: 'work', number: '03', title: 'Our work', text: 'See how small, shared actions can make a lasting difference.', to: '/work' },
]

function HomeSections() {
  return (
    <div className="home-sections">
      <section className="home-about" id="about">
        <div className="home-section-inner home-about-grid">
          <div>
            <p className="home-eyebrow">About Salaah</p>
            <h2>Good things happen<br />when we come together.</h2>
          </div>
          <div className="home-about-copy">
            <p>We bring people together to build a more connected, supportive community through shared ideas and meaningful action.</p>
            <RouteLink to="/about" className="home-text-link">Meet Salaah <span>↗</span></RouteLink>
          </div>
        </div>
      </section>

      <section className="home-overview">
        <div className="home-section-inner">
          <p className="home-eyebrow">Explore Salaah</p>
          <h2>There’s a place for you here.</h2>
          <div className="home-preview-grid">
            {previews.map((item) => (
              <article className="home-preview-card" id={item.id} key={item.id}>
                <span className="home-preview-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <RouteLink to={item.to} aria-label={`Explore ${item.title}`}>Explore <span>↗</span></RouteLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-contact" id="contact">
        <div className="home-section-inner home-contact-inner">
          <div><p className="home-eyebrow">Get involved</p><h2>Let’s make something good happen.</h2></div>
          <RouteLink to="/contact" className="home-contact-button">Get in touch <span>↗</span></RouteLink>
        </div>
      </section>

      <footer className="home-footer"><span>Salaah · Together, we make a difference.</span><RouteLink to="/">Back to top ↑</RouteLink></footer>
    </div>
  )
}

export default HomeSections
