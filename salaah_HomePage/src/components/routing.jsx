import { useEffect, useState } from 'react'

export function navigate(path) {
  window.history.pushState({}, '', path)
  window.dispatchEvent(new PopStateEvent('popstate'))
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export function RouteLink({ to, onClick, children, ...props }) {
  return (
    <a
      href={to}
      {...props}
      onClick={(event) => {
        onClick?.(event)
        if (!event.defaultPrevented && event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
          event.preventDefault()
          navigate(to)
        }
      }}
    >
      {children}
    </a>
  )
}

export function useRoute() {
  const [route, setRoute] = useState(window.location.pathname)
  useEffect(() => {
    const updateRoute = () => setRoute(window.location.pathname)
    window.addEventListener('popstate', updateRoute)
    return () => window.removeEventListener('popstate', updateRoute)
  }, [])
  return route
}
