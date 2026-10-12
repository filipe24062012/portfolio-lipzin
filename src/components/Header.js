import React from 'react'
import { sectionLabels } from '../data/portfolio.js'
import { h } from './ui.js'
import { useActiveSection } from '../hooks/useActiveSection.js'
import { menuState } from '../utils/interactions.js'

const ids = ['perfil', 'estatisticas', 'agentes', 'carreira', 'jogadas', 'contato']

export function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const active = useActiveSection(ids)
  const applyMenu = (action) => setMenuOpen((current) => menuState(current, action).open)
  const menu = menuState(menuOpen, 'current')
  return h('header', { className: 'site-header' },
    h('a', { className: 'brand', href: '#inicio', 'aria-label': 'LIPZIN, voltar ao início' }, 'LZ', h('span', null, 'LIPZIN')),
    h('button', { className: 'menu-toggle', type: 'button', 'aria-label': menuOpen ? 'Fechar menu' : 'Abrir menu', 'aria-expanded': menu.ariaExpanded, 'aria-controls': 'main-menu', onClick: () => applyMenu('toggle') },
      h('span'), h('span'),
    ),
    h('nav', { id: 'main-menu', className: menuOpen ? 'is-open' : 'is-collapsed', 'aria-label': 'Navegação principal' },
      h('ul', null, sectionLabels.map((label, index) => h('li', { key: label }, h('a', { href: `#${ids[index]}`, 'aria-current': active === ids[index] ? 'location' : undefined, onClick: () => applyMenu('navigate') }, label)))),
    ),
  )
}
