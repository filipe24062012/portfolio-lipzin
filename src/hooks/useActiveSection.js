import React from 'react'

export function useActiveSection(sectionIds) {
  const [active, setActive] = React.useState(sectionIds[0])

  React.useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActive(visible.target.id)
    }, { rootMargin: '-25% 0px -60%', threshold: [0, .25, .5] })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [sectionIds.join('|')])

  return active
}
