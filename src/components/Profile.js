import React from 'react'
import { h, SectionHeading } from './ui.js'

export function Profile({ player }) {
  return h('section', { className: 'section profile', id: 'perfil' },
    h(SectionHeading, { eyebrow: '01 · Perfil', title: 'Perfil', description: 'Agressividade com cálculo. Presença sem ruído.' }),
    h('div', { className: 'profile-grid' },
      h('p', { className: 'profile-lead' }, player.bio),
      h('dl', { className: 'profile-facts' },
        h('div', null, h('dt', null, 'Estilo'), h('dd', null, player.style)),
        h('div', null, h('dt', null, 'Elo atual'), h('dd', null, player.rank)),
        h('div', null, h('dt', null, 'Região'), h('dd', null, player.region)),
      ),
    ),
  )
}
