import React from 'react'

export const h = React.createElement

export function SectionHeading({ eyebrow, title, description }) {
  return h('header', { className: 'section-heading' },
    h('p', { className: 'eyebrow' }, eyebrow),
    h('h2', null, title),
    description && h('p', { className: 'section-description' }, description),
  )
}

export function DemoLabel({ children = 'Dados demonstrativos' }) {
  return h('span', { className: 'demo-label' }, children)
}
