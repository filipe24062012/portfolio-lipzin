import React from 'react'
import { DemoLabel, h, SectionHeading } from './ui.js'
import { useInView } from '../hooks/useInView.js'
import { useReducedMotion } from '../hooks/useReducedMotion.js'
import { counterDisplay } from '../utils/interactions.js'

export function Stats({ stats }) {
  const [ref, visible] = useInView()
  const reducedMotion = useReducedMotion()
  return h('section', { ref, className: `section stats reveal ${visible ? 'is-visible' : ''}`, id: 'estatisticas' },
    h(SectionHeading, { eyebrow: '02 · Números', title: 'Estatísticas', description: 'Impacto medido round após round.' }),
    h(DemoLabel, null, stats.disclaimer),
    h('div', { className: 'stats-grid' }, stats.items.map((item) => h('article', { className: 'stat-card', key: item.label },
      h('strong', null, counterDisplay({ reducedMotion, visible, value: item.value })), h('span', null, item.label),
    ))),
  )
}
