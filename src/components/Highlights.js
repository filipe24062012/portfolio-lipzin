import React from 'react'
import { DemoLabel, h, SectionHeading } from './ui.js'
import { HighlightModal } from './HighlightModal.js'
import { modalState } from '../utils/interactions.js'

export function Highlights({ highlights }) {
  const [selected, setSelected] = React.useState(null)
  const returnFocusRef = React.useRef(null)
  const openHighlight = (highlight, event) => {
    returnFocusRef.current = event.currentTarget
    setSelected(highlight)
  }
  const closeHighlight = (action = 'close') => setSelected((current) => {
    const next = modalState({ open: true, highlightId: current?.id ?? null }, action)
    return next.open ? current : null
  })
  return h('section', { className: 'section highlights', id: 'jogadas' },
    h(SectionHeading, { eyebrow: '05 · Highlights', title: 'Melhores jogadas', description: 'Momentos em que uma decisão muda o placar.' }),
    h(DemoLabel, null, highlights.disclaimer),
    h('div', { className: 'highlight-grid' }, highlights.items.map((highlight, index) => h('article', { className: 'highlight-card', key: highlight.id },
      h('div', { className: 'highlight-preview' }, h('span', null, `PLAY 0${index + 1}`)),
      h('p', { className: 'highlight-meta' }, highlight.meta),
      h('h3', null, highlight.title),
      h('p', null, highlight.description),
      h('button', { type: 'button', onClick: (event) => openHighlight(highlight, event) }, 'Assistir clipe'),
    ))),
    selected && h(HighlightModal, { highlight: selected, onClose: closeHighlight, returnFocusRef }),
  )
}
