import React from 'react'
import { DemoLabel, h } from './ui.js'

export function Testimonial({ testimonial }) {
  return h('section', { className: 'testimonial', 'aria-label': 'Depoimento' },
    h(DemoLabel, null, testimonial.disclaimer),
    h('blockquote', null, h('p', null, `“${testimonial.quote}”`), h('footer', null, testimonial.author)),
  )
}
