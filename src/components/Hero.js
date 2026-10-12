import React from 'react'
import { h } from './ui.js'
import { agentArtState } from '../utils/media.js'
import { useReducedMotion } from '../hooks/useReducedMotion.js'

export function Hero({ player }) {
  const [art, setArt] = React.useState(() => agentArtState('idle'))
  const reducedMotion = useReducedMotion()
  const moveScope = (event) => {
    if (reducedMotion) return
    const box = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--scope-x', `${((event.clientX - box.left) / box.width - .5) * 18}px`)
    event.currentTarget.style.setProperty('--scope-y', `${((event.clientY - box.top) / box.height - .5) * 18}px`)
  }
  return h('section', { className: 'hero', id: 'inicio', 'aria-labelledby': 'hero-title', onPointerMove: moveScope },
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
      art.showImage && h('img', {
        className: 'agent-art',
        src: 'https://liquipedia.net/commons/images/3/39/Chamber_Artwork.png',
        alt: 'Chamber, agente de Valorant, segurando sua arma de precisão',
        onError: () => setArt(agentArtState('error')),
      }),
      h('p', { className: 'agent-word' }, 'CHAMBER'),
      h('p', { className: 'agent-role' }, 'Agente principal · Sentinela'),
    ),
  )
}
