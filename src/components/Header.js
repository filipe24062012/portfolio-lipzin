import React from 'react'
import { sectionLabels } from '../data/portfolio.js'
import { h } from './ui.js'

const ids = ['perfil', 'estatisticas', 'agentes', 'carreira', 'jogadas', 'contato']

export function Header() {
  return h('header', { className: 'site-header' },
    h('a', { className: 'brand', href: '#inicio', 'aria-label': 'LIPZIN, voltar ao início' }, 'LZ', h('span', null, 'LIPZIN')),
    h('nav', { 'aria-label': 'Navegação principal' },
      h('ul', null, sectionLabels.map((label, index) => h('li', { key: label }, h('a', { href: `#${ids[index]}` }, label)))),
    ),
  )
}
