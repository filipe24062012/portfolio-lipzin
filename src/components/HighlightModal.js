import React from 'react'
import { h } from './ui.js'

export function HighlightModal({ highlight, onClose, returnFocusRef }) {
  const closeRef = React.useRef(null)

  React.useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKeyDown = (event) => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      returnFocusRef.current?.focus()
    }
  }, [onClose, returnFocusRef])

  return h('div', { className: 'modal-backdrop', onMouseDown: (event) => event.target === event.currentTarget && onClose() },
    h('section', { className: 'highlight-modal', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'modal-title' },
      h('button', { ref: closeRef, className: 'modal-close', type: 'button', onClick: onClose, 'aria-label': 'Fechar clipe' }, '×'),
      h('p', { className: 'eyebrow' }, highlight.meta),
      h('h2', { id: 'modal-title' }, highlight.title),
      h('div', { className: 'modal-video', 'aria-label': 'Vídeo demonstrativo' },
        h('span', { 'aria-hidden': 'true' }, '▶'),
        h('strong', null, 'CLIP DEMO'),
      ),
      h('p', null, highlight.description),
      h('small', null, 'Conteúdo demonstrativo — substitua pelo seu clipe real.'),
    ),
  )
}
