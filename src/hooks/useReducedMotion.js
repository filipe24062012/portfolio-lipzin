import React from 'react'

export function useReducedMotion() {
  const [reduced, setReduced] = React.useState(() => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false)

  React.useEffect(() => {
    const query = window.matchMedia?.('(prefers-reduced-motion: reduce)')
    if (!query) return undefined
    const update = (event) => setReduced(event.matches)
    query.addEventListener?.('change', update)
    return () => query.removeEventListener?.('change', update)
  }, [])

  return reduced
}
