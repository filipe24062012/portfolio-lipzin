import React from 'react'
import { h } from './ui.js'

export function Hero({ player }) {
  return h('section', { className: 'hero', id: 'inicio', 'aria-labelledby': 'hero-title' },
    h('div', { className: 'hero-copy' },
      h('p', { className: 'eyebrow' }, `${player.region} · ${player.rank}`),
      h('h1', { id: 'hero-title' }, player.nickname),
      h('p', { className: 'hero-tagline' }, player.tagline),
      h('p', { className: 'hero-description' }, player.availability),
      h('div', { className: 'hero-actions' },
        h('a', { className: 'button button-primary', href: '#jogadas' }, 'Ver melhores jogadas'),
        h('a', { className: 'button button-ghost', href: '#contato' }, 'Falar com LIPZIN'),
      ),
    ),
    h('div', { className: 'hero-visual', 'aria-label': 'Chamber, agente principal' },
      h('div', { className: 'scope-mark', 'aria-hidden': 'true' }),
      h('p', { className: 'agent-word' }, 'CHAMBER'),
      h('p', { className: 'agent-role' }, 'Agente principal · Sentinela'),
    ),
  )
}
