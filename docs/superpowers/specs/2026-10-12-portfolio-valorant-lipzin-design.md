# Portfólio Valorant — LIPZIN

## Objetivo

Criar um portfólio em React para LIPZIN, jogador brasileiro de Valorant, com três objetivos equivalentes: apresentar seu perfil a equipes, atrair público para suas redes e organizar suas conquistas competitivas. O site deve parecer profissional mesmo usando conteúdo demonstrativo e permitir que os dados reais substituam os exemplos com facilidade.

## Identidade do jogador

- Nickname: LIPZIN
- Região: Brasil
- Elo: Ascendente 2
- Função competitiva informada: Duelista
- Agente principal: Chamber
- Disponibilidade: propostas de equipes, colaborações e criação de conteúdo

Chamber é oficialmente classificado como Sentinela no jogo. O portfólio apresentará “Duelista” como o estilo ou função competitiva escolhida por LIPZIN e Chamber como seu agente principal, sem alterar a classificação oficial do agente.

## Conteúdo e narrativa

O site será uma página única com navegação suave e a seguinte progressão:

1. **Hero:** nome LIPZIN, elo, região, frase “Precisão decide rounds”, chamada para assistir às jogadas e arte oficial do Chamber.
2. **Perfil competitivo:** resumo do jogador, estilo de jogo e disponibilidade para equipes.
3. **Estatísticas:** ACS, K/D, percentual de headshots, taxa de vitória e taxa de clutches. Todos os valores serão identificados como demonstrativos.
4. **Agent pool:** Chamber como principal e dois agentes secundários fictícios.
5. **Carreira:** linha do tempo com conquistas e participações fictícias, marcadas como demonstração.
6. **Melhores jogadas:** três cartões de clipes demonstrativos, abertos em um modal acessível.
7. **Depoimento:** texto fictício, explicitamente identificado como exemplo.
8. **Contato:** chamadas para recrutamento, colaboração e redes sociais, usando links de exemplo.

## Direção visual

A linguagem visual será “luxo tático”, inspirada na precisão e na elegância do Chamber. A paleta terá fundo grafite quase preto, dourado metálico, azul profundo e vermelho pontual nas ações. Títulos usarão uma fonte condensada e expressiva; textos usarão uma fonte limpa e legível.

A composição do hero terá o Chamber recortado como foco visual, iluminação suave e formas geométricas inspiradas em mira telescópica. A imagem terá como fonte a página oficial do agente em `playvalorant.com`. O uso deverá preservar a atribuição de Riot Games/Valorant no rodapé e evitar sugerir afiliação oficial.

## Interações

- Navegação suave com indicação da seção ativa.
- Entrada progressiva dos elementos conforme aparecem na tela.
- Contadores animados nas estatísticas.
- Leve profundidade nos cartões ao passar o cursor.
- Efeito discreto de mira acompanhando o cursor apenas no hero.
- Modal acessível para os clipes demonstrativos, fechável por botão, clique externo e tecla Escape.

Em telas pequenas, o conteúdo será reorganizado em uma coluna, o menu será compacto e os efeitos de maior custo visual serão reduzidos. A preferência `prefers-reduced-motion` desativará animações não essenciais.

## Arquitetura

A aplicação será criada em React e organizada em componentes com uma responsabilidade clara: cabeçalho, hero, perfil, estatísticas, agentes, carreira, clipes, depoimento, contato, rodapé e modal. Todo o conteúdo variável ficará em um único módulo local de dados, permitindo substituir exemplos por informações reais sem alterar os componentes.

Não haverá backend, autenticação ou persistência. O site será inteiramente estático e responsivo. O estado local controlará apenas o menu móvel, o modal e pequenas interações de apresentação.

## Estados de falha

Se a imagem do Chamber falhar, o hero manterá sua estrutura e exibirá um tratamento gráfico com o nome do agente. Links demonstrativos terão rótulo claro e não prometerão conteúdo real. Elementos interativos manterão foco visível e texto acessível.

## Verificação

A implementação será validada por:

- compilação de produção do projeto React;
- navegação por âncoras e indicação de seção ativa;
- abertura e fechamento do modal por mouse e teclado;
- comportamento do menu em telas pequenas;
- verificação visual em tamanhos de celular e desktop, quando a infraestrutura de preview estiver disponível;
- contraste, foco visível, textos alternativos e redução de movimento;
- revisão dos textos para garantir que estatísticas, conquistas, depoimentos e links fictícios sejam identificados como demonstração.

## Critérios de conclusão

O resultado estará pronto quando a página funcionar em desktop e celular, comunicar os três objetivos do portfólio, usar Chamber como foco visual, permitir trocar os dados fictícios em um único arquivo e passar pela compilação de produção sem erros.
