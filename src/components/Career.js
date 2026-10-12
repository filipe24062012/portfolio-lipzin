import React from 'react'
import { DemoLabel, h, SectionHeading } from './ui.js'

export function Career({ career }) {
  return h('section', { className: 'section career', id: 'carreira' },
    h(SectionHeading, { eyebrow: '04 · Trajetória', title: 'Carreira', description: 'Evolução consistente e ambição competitiva.' }),
    h(DemoLabel, null, career.disclaimer),
    h('ol', { className: 'timeline' }, career.items.map((item) => h('li', { key: `${item.year}-${item.title}` },
      h('time', null, item.year), h('div', null, h('h3', null, item.title), h('p', null, item.text)),
    ))),
  )
}
