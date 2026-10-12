import React from 'react'
import { DemoLabel, h, SectionHeading } from './ui.js'

export function AgentPool({ agents }) {
  return h('section', { className: 'section agents', id: 'agentes' },
    h(SectionHeading, { eyebrow: '03 · Arsenal', title: 'Agentes', description: 'Uma pool construída para criar espaço e punir erros.' }),
    h(DemoLabel, null, 'Agentes secundários demonstrativos'),
    h('div', { className: 'agent-grid' }, agents.map((agent, index) => h('article', { className: `agent-card${index === 0 ? ' agent-card-main' : ''}`, key: agent.name },
      h('span', { className: 'agent-index' }, `0${index + 1}`), h('h3', null, agent.name), h('p', null, agent.role), h('small', null, agent.specialty),
      agent.demonstrative && h('span', { className: 'card-demo' }, 'Exemplo'),
    ))),
  )
}
