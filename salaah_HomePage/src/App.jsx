import Navbar from './components/navbar.jsx'
import Hero from './components/hero.jsx'
import HomeSections from './components/homeSections.jsx'
import PageContent from './components/pages.jsx'
import { useRoute } from './components/routing.jsx'
import './App.css'

function App() {
  const path = useRoute()
  const isHome = path === '/'

  return (
    <div className={isHome ? 'app app-home' : 'app app-inner'}>
      <Navbar />
      {isHome ? <><Hero /><HomeSections /></> : <PageContent path={path} />}
    </div>
  )
}

export default App
