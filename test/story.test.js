import test from 'node:test'
import assert from 'node:assert/strict'
import { portfolioData, sectionLabels } from '../src/data/portfolio.js'

test('renders the complete portfolio story from one content source', () => {
  assert.equal(portfolioData.player.nickname, 'LIPZIN')
  assert.equal(portfolioData.player.rank, 'Ascendente 2')
  assert.equal(portfolioData.player.tagline, 'Precisão decide rounds')
  assert.deepEqual(sectionLabels, [
    'Perfil',
    'Estatísticas',
    'Agentes',
    'Carreira',
    'Melhores jogadas',
    'Contato',
  ])

  const demonstrativeAreas = [
    portfolioData.stats,
    portfolioData.career,
    portfolioData.highlights,
    portfolioData.testimonial,
  ]
  assert.ok(demonstrativeAreas.every((area) => /demonstrativo/i.test(area.disclaimer)))
  assert.ok(demonstrativeAreas.filter((area) => area.disclaimer === 'Dados demonstrativos').length >= 3)
  assert.ok(portfolioData.agents.slice(1).every((agent) => agent.demonstrative === true))
  assert.deepEqual(portfolioData.contact, {
    email: 'lipzin.demo@example.com',
    demonstrative: true,
  })
})
