import { RouteLink } from './routing.jsx'

const pageData = {
  '/about': {
    eyebrow: 'About Salaah',
    title: <>People first.<br /><span>Always.</span></>,
    intro: 'We bring people together to build a more connected, supportive community.',
    cards: [
      ['Our purpose', 'Create a place where everyone feels welcome, heard, and able to contribute.'],
      ['Our approach', 'Listen first, work together, and turn good ideas into practical action.'],
      ['Our community', 'People, volunteers, and local partners sharing time, skills, and care.'],
    ],
  },
  '/departments': {
    eyebrow: 'Departments',
    title: <>Find your way<br /><span>to take part.</span></>,
    intro: 'Join a team, share what you know, and help make community life stronger.',
    cards: [
      ['Community', 'Welcome new people and create opportunities to connect.'],
      ['Learning', 'Share useful skills through friendly workshops and peer support.'],
      ['Outreach', 'Build local partnerships and connect people with opportunities.'],
    ],
  },
  '/events': {
    eyebrow: 'Events',
    title: <>Meet, learn,<br /><span>make a difference.</span></>,
    intro: 'A few simple ways to meet people and get involved. Event details are sample listings.',
    cards: [
      ['Nov 01 · Community Meetup', 'Meet neighbours, share ideas, and find out what is happening locally.'],
      ['Nov 09 · Skills Workshop', 'A relaxed, hands-on session hosted by community volunteers.'],
      ['Nov 23 · Volunteer Day', 'Spend a few hours helping with a local project.'],
    ],
  },
  '/work': {
    eyebrow: 'Our work',
    title: <>Small steps.<br /><span>Shared impact.</span></>,
    intro: 'We help local people turn care for their community into meaningful action.',
    cards: [
      ['Peer support', 'Make it easier to ask for help and share experience with one another.'],
      ['Local projects', 'Bring neighbours together to improve shared spaces and daily life.'],
      ['Partnerships', 'Connect community groups with people and resources that can help.'],
    ],
  },
  '/contact': {
    eyebrow: 'Get involved',
    title: <>There’s a place<br /><span>for you here.</span></>,
    intro: 'Have an idea, want to volunteer, or just want to say hello? We’d love to hear from you.',
    cards: [],
  },
}

function PageContent({ path }) {
  const page = pageData[path] ?? pageData['/about']
  return (
    <main className="inner-page">
      <section className="page-intro">
        <p className="page-eyebrow">{page.eyebrow}</p>
        <h1>{page.title}</h1>
        <p className="page-lede">{page.intro}</p>
        {path === '/contact' && <a className="page-button" href="mailto:hello@salaah.org">Email our team <span>↗</span></a>}
      </section>
      {page.cards.length > 0 && (
        <section className="page-cards" aria-label={`${page.eyebrow} details`}>
          {page.cards.map(([title, text], index) => (
            <article className="page-card" key={title} style={{ '--card-delay': `${index * 100}ms` }}>
              <span className="page-card-number">0{index + 1}</span>
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </section>
      )}
      <section className="page-invite">
        <div><p className="page-eyebrow">Let’s do this together</p><h2>Have an idea to share?</h2></div>
        <RouteLink to="/contact" className="page-button">Get in touch <span>↗</span></RouteLink>
      </section>
      <footer className="page-footer"><span>Salaah · Together, we make a difference.</span><RouteLink to="/">Home ↑</RouteLink></footer>
    </main>
  )
}

export default PageContent
