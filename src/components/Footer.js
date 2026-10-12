import React from 'react'
import { h } from './ui.js'

export function Footer() {
  return h('footer', { className: 'footer' },
    h('p', null, 'LIPZIN · Brasil · 2026'),
    h('p', null, 'Projeto demonstrativo. Valorant e Chamber © Riot Games. Sem afiliação oficial.'),
  )
}
