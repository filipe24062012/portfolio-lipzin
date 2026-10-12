import React from 'react'
import { DemoLabel, h, SectionHeading } from './ui.js'

export function Stats({ stats }) {
  return h('section', { className: 'section stats', id: 'estatisticas' },
    h(SectionHeading, { eyebrow: '02 · Números', title: 'Estatísticas', description: 'Impacto medido round após round.' }),
    h(DemoLabel, null, stats.disclaimer),
    h('div', { className: 'stats-grid' }, stats.items.map((item) => h('article', { className: 'stat-card', key: item.label },
      h('strong', null, item.value), h('span', null, item.label),
    ))),
  )
}
