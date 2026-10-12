import React from 'react'

export function useInView(options = {}) {
  const ref = React.useRef(null)
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    if (!ref.current || !('IntersectionObserver' in window)) {
      setVisible(true)
      return undefined
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { threshold: .18, ...options })
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}
