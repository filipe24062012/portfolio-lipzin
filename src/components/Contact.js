import React from 'react'
import { h, SectionHeading } from './ui.js'

export function Contact({ socials, contact }) {
  return h('section', { className: 'section contact', id: 'contato' },
    h(SectionHeading, { eyebrow: '06 · Próximo round', title: 'Contato', description: 'Recrutamento, collabs ou conteúdo: a conversa começa aqui.' }),
    h('a', { className: 'button button-primary', href: `mailto:${contact.email}` }, 'Enviar proposta · exemplo'),
    contact.demonstrative && h('p', { className: 'contact-note' }, `Contato demonstrativo: ${contact.email}`),
    h('ul', { className: 'social-list' }, socials.map((social) => h('li', { key: social.label },
      h('a', { href: social.href, 'aria-label': `${social.label} de demonstração` }, h('span', null, social.label), h('strong', null, social.handle), h('small', null, 'Link demonstrativo')),
    ))),
  )
}
