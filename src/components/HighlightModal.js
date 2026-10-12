import React from 'react'
import { createPortal } from 'react-dom'
import { h } from './ui.js'

export function HighlightModal({ highlight, onClose, returnFocusRef }) {
  const closeRef = React.useRef(null)
  const dialogRef = React.useRef(null)

  React.useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialogRef.current?.showModal()
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = previousOverflow
      returnFocusRef.current?.focus()
    }
  }, [onClose, returnFocusRef])

  return createPortal(h('dialog', { ref: dialogRef, className: 'highlight-modal', 'aria-labelledby': 'modal-title', onCancel: (event) => { event.preventDefault(); onClose('cancel') }, onMouseDown: (event) => event.target === event.currentTarget && onClose('close') },
    h('section', null,
      h('button', { ref: closeRef, className: 'modal-close', type: 'button', onClick: onClose, 'aria-label': 'Fechar clipe' }, '×'),
      h('p', { className: 'eyebrow' }, highlight.meta),
      h('h2', { id: 'modal-title' }, highlight.title),
      h('div', { className: 'modal-video', 'aria-label': 'Vídeo demonstrativo' },
        h('span', { 'aria-hidden': 'true' }, '▶'),
        h('strong', null, 'CLIP DEMO'),
      ),
      h('p', null, highlight.description),
      h('small', null, 'Conteúdo demonstrativo — substitua pelo seu clipe real.'),
    )), document.body)
}
