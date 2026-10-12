import React from 'react'
import { useInView } from '../hooks/useInView.js'

export const h = React.createElement

export function SectionHeading({ eyebrow, title, description }) {
  const [ref, visible] = useInView()
  return h('header', { ref, className: `section-heading reveal ${visible ? 'is-visible' : ''}` },
    h('p', { className: 'eyebrow' }, eyebrow),
    h('h2', null, title),
    description && h('p', { className: 'section-description' }, description),
  )
}

export function DemoLabel({ children = 'Dados demonstrativos' }) {
  return h('span', { className: 'demo-label' }, children)
}
