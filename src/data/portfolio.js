export const sectionLabels = ['Perfil', 'Estatísticas', 'Agentes', 'Carreira', 'Melhores jogadas', 'Contato']

export const portfolioData = {
  player: {
    nickname: 'LIPZIN',
    tagline: 'Precisão decide rounds',
    rank: 'Ascendente 2',
    region: 'Brasil',
    style: 'Duelista',
    mainAgent: 'Chamber',
    availability: 'Disponível para equipes, collabs e conteúdo',
    bio: 'Jogador agressivo de primeira bala, obcecado por ângulos limpos, decisões rápidas e impacto nos rounds que importam.',
  },
  stats: {
    disclaimer: 'Dados demonstrativos',
    items: [
      { label: 'ACS', value: '267' },
      { label: 'K/D', value: '1.31' },
      { label: 'Headshots', value: '31%' },
      { label: 'Win rate', value: '58%' },
      { label: 'Clutch rate', value: '19%' },
    ],
  },
  agents: [
    { name: 'Chamber', role: 'Sentinela', specialty: 'Principal · Precisão e controle de espaço' },
    { name: 'Jett', role: 'Duelista', specialty: 'Entry · Mobilidade e abertura', demonstrative: true },
    { name: 'Iso', role: 'Duelista', specialty: 'Flex · Duelos e pressão', demonstrative: true },
  ],
  career: {
    disclaimer: 'Dados demonstrativos',
    items: [
      { year: '2026', title: 'Ascendente 2', text: 'Pico competitivo na fila ranqueada brasileira.' },
      { year: '2026', title: 'Copa Precision', text: 'Top 4 com 1.29 K/D durante o torneio.' },
      { year: '2025', title: 'Projeto Zero', text: 'Entrada no cenário competitivo semi-amador.' },
    ],
  },
  highlights: {
    disclaimer: 'Dados demonstrativos',
    items: [
      { id: 'ace-ascent', title: 'ACE na Ascent', meta: '5 eliminações · Vandal', description: 'Retake preciso no bomb B com três headshots consecutivos.' },
      { id: 'clutch-lotus', title: '1v3 na Lotus', meta: 'Clutch · Tour de Force', description: 'Reposicionamento rápido e controle total do pós-plant.' },
      { id: 'operator-breeze', title: 'Domínio na Breeze', meta: '4K · Operator', description: 'Quatro abates segurando o avanço no bomb A.' },
    ],
  },
  testimonial: {
    disclaimer: 'Depoimento demonstrativo',
    quote: 'LIPZIN transforma informação em pressão e pressão em rounds. Comunicação limpa, mira fria.',
    author: 'Coach fictício · Projeto Zero',
  },
  socials: [
    { label: 'Twitch', handle: '@lipzinfps', href: '#' },
    { label: 'YouTube', handle: '@lipzinplays', href: '#' },
    { label: 'Instagram', handle: '@lipzin.val', href: '#' },
  ],
  contact: {
    email: 'lipzin.demo@example.com',
    demonstrative: true,
  },
}
