# Portfólio Valorant LIPZIN Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir e publicar um portfólio responsivo em React para LIPZIN, com Chamber como foco visual, perfil competitivo, conteúdo demonstrativo e chamadas para recrutamento e redes sociais.

**Architecture:** Aplicação React estática criada com Vite e organizada por seções. O conteúdo variável vive em um módulo de dados tipado por JSDoc; componentes recebem apenas os dados que exibem, enquanto `App` controla navegação, menu e modal. A saída de produção será gerada em `dist` para hospedagem no Sites.

**Tech Stack:** React, Vite, CSS modular por responsabilidade, Vitest, Testing Library e Sites static hosting.

**Spec:** `docs/superpowers/specs/2026-10-12-portfolio-valorant-lipzin-design.md`

## Global Constraints

- Página única em React, inteiramente estática, sem backend, autenticação ou persistência.
- Paleta grafite, dourado metálico, azul profundo e vermelho pontual; direção “luxo tático”.
- Conteúdo variável concentrado em `src/data/portfolio.js`.
- Estatísticas, conquistas, depoimento, clipes e links fictícios devem ser marcados como demonstração.
- Chamber deve ser apresentado como agente principal e oficialmente identificado como Sentinela; Duelista descreve o perfil competitivo de LIPZIN.
- A arte do Chamber deve vir de uma fonte oficial do Valorant, com crédito no rodapé e fallback visual.
- Layout responsivo, foco visível, navegação por teclado e suporte a `prefers-reduced-motion`.

## Review Focus

- Imagem oficial indisponível: o hero mantém título, CTA e composição gráfica sem área quebrada.
- Movimento reduzido: contadores e entradas aparecem sem transições obrigatórias.
- Modal operado por teclado: recebe foco, fecha com Escape e devolve foco ao botão que o abriu.
- Navegação móvel: menu abre, fecha após selecionar uma seção e mantém atributos ARIA corretos.
- Conteúdo fictício: cada área demonstrativa exibe um rótulo visível e não parece alegação real.

---

### Task 1: Base React, dados e estrutura semântica

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `index.html`
- Create: `.gitignore`
- Create: `src/main.jsx`
- Create: `src/App.jsx`
- Create: `src/test/setup.js`
- Create: `src/data/portfolio.js`
- Create: `src/components/Header.jsx`
- Create: `src/components/Hero.jsx`
- Create: `src/components/SectionHeading.jsx`
- Create: `src/components/Profile.jsx`
- Create: `src/components/Stats.jsx`
- Create: `src/components/AgentPool.jsx`
- Create: `src/components/Career.jsx`
- Create: `src/components/Highlights.jsx`
- Create: `src/components/Testimonial.jsx`
- Create: `src/components/Contact.jsx`
- Create: `src/components/Footer.jsx`
- Test: `src/App.test.jsx`

**Interfaces:**
- Consumes: conteúdo e requisitos do documento de design.
- Produces: `portfolioData` com `player`, `stats`, `agents`, `career`, `highlights`, `testimonial` e `socials`; componentes de seção renderizados por `App`.

- [ ] **Step 1: Escrever o teste estrutural que falha**

Criar `src/App.test.jsx` com o teste `renders_the_complete_portfolio_story`, afirmando a presença de “LIPZIN”, “Ascendente 2”, “Precisão decide rounds”, as seções Perfil, Estatísticas, Agentes, Carreira, Melhores jogadas e Contato, além dos rótulos “Dados demonstrativos”.

- [ ] **Step 2: Executar o teste e confirmar a falha**

Run: `npm test -- --run src/App.test.jsx`
Expected: FAIL porque a aplicação e os componentes ainda não existem.

- [ ] **Step 3: Criar o projeto Vite e o módulo de dados**

Definir scripts `dev`, `build` e `test`; instalar as versões estáveis atuais de React, Vite, Vitest, jsdom e Testing Library e registrá-las no lockfile. Configurar o ambiente `jsdom` e `src/test/setup.js`. Exportar `portfolioData` de `src/data/portfolio.js`, incluindo LIPZIN, Brasil, Ascendente 2, estilo Duelista, Chamber principal e valores fictícios explicitamente marcados.

- [ ] **Step 4: Implementar a estrutura semântica das seções**

Montar `App` com `Header`, `Hero`, `Profile`, `Stats`, `AgentPool`, `Career`, `Highlights`, `Testimonial`, `Contact` e `Footer`. Usar headings em ordem, landmarks apropriados, âncoras estáveis e texto claro de demonstração.

- [ ] **Step 5: Executar o teste e a compilação**

Run: `npm test -- --run src/App.test.jsx && npm run build`
Expected: teste PASS e build concluído em `dist`.

- [ ] **Step 6: Commit**

```bash
git add package.json package-lock.json vite.config.js index.html .gitignore src
git commit -m "feat: build Lipzin portfolio structure"
```

### Task 2: Identidade visual responsiva e arte do Chamber

**Files:**
- Create: `src/styles/tokens.css`
- Create: `src/styles/base.css`
- Create: `src/styles/layout.css`
- Create: `src/styles/components.css`
- Create: `public/assets/chamber.png`
- Modify: `src/main.jsx`
- Modify: `src/components/Hero.jsx`
- Modify: `src/components/Footer.jsx`
- Test: `src/components/Hero.test.jsx`

**Interfaces:**
- Consumes: `portfolioData.player` e os componentes semânticos da Task 1.
- Produces: tokens visuais reutilizáveis, composição responsiva e fallback `onError` do hero.

- [ ] **Step 1: Escrever o teste de fallback que falha**

Criar `Hero.test.jsx` com `keeps_hero_content_when_agent_art_fails`: disparar `error` na imagem, afirmar que ela deixa de ser exibida e que “CHAMBER”, “LIPZIN” e os CTAs continuam visíveis.

- [ ] **Step 2: Executar o teste e confirmar a falha**

Run: `npm test -- --run src/components/Hero.test.jsx`
Expected: FAIL porque o fallback ainda não existe.

- [ ] **Step 3: Baixar e registrar a arte oficial**

Obter a arte do Chamber a partir da página oficial `https://playvalorant.com/en-us/agents/chamber/`, salvá-la como `public/assets/chamber.png`, otimizar tamanho sem distorção e manter crédito “Chamber e Valorant © Riot Games” no rodapé.

- [ ] **Step 4: Implementar o sistema visual e o fallback**

Criar tokens de cor, tipografia, espaçamento e elevação; estilizar o layout “luxo tático”, a mira geométrica e os cartões. Em `Hero`, controlar a falha da imagem com estado local e preservar a composição textual. Adicionar breakpoints para celular, tablet e desktop.

- [ ] **Step 5: Executar testes e build**

Run: `npm test -- --run src/components/Hero.test.jsx src/App.test.jsx && npm run build`
Expected: testes PASS, sem overflow horizontal e build concluído.

- [ ] **Step 6: Commit**

```bash
git add public src
git commit -m "feat: add tactical visual identity"
```

### Task 3: Interações acessíveis e movimento progressivo

**Files:**
- Create: `src/components/HighlightModal.jsx`
- Create: `src/hooks/useActiveSection.js`
- Create: `src/hooks/useInView.js`
- Create: `src/hooks/useReducedMotion.js`
- Modify: `src/App.jsx`
- Modify: `src/components/Header.jsx`
- Modify: `src/components/Hero.jsx`
- Modify: `src/components/Stats.jsx`
- Modify: `src/components/Highlights.jsx`
- Modify: `src/styles/components.css`
- Test: `src/interactions.test.jsx`

**Interfaces:**
- Consumes: `portfolioData.highlights`, IDs das seções e tokens visuais das Tasks 1–2.
- Produces: `HighlightModal({ highlight, onClose, returnFocusRef })`, `useActiveSection(sectionIds)`, `useInView(options)` e `useReducedMotion()`.

- [ ] **Step 1: Escrever testes de interação que falham**

Criar os testes `mobile_menu_reports_and_updates_its_state`, `modal_closes_with_escape_and_restores_focus` e `reduced_motion_disables_animated_counters`. Afirmar `aria-expanded`, fechamento do menu após clique, diálogo rotulado, retorno de foco e renderização imediata dos valores finais.

- [ ] **Step 2: Executar os testes e confirmar as falhas**

Run: `npm test -- --run src/interactions.test.jsx`
Expected: FAIL porque menu, modal e hooks ainda não implementam os comportamentos.

- [ ] **Step 3: Implementar navegação e seção ativa**

Usar `useActiveSection(sectionIds)` com `IntersectionObserver`. O menu móvel deve controlar `aria-expanded`, fechar após navegação e manter foco visível.

- [ ] **Step 4: Implementar modal e animações**

Criar modal com `role="dialog"`, título associado, bloqueio de scroll, fechamento por botão, backdrop e Escape, além de retorno de foco. Implementar entradas, contadores e mira do cursor com `useInView` e `useReducedMotion`; desativar movimento não essencial quando solicitado pelo sistema.

- [ ] **Step 5: Executar a suíte e o build**

Run: `npm test -- --run && npm run build`
Expected: todos os testes PASS e build concluído.

- [ ] **Step 6: Commit**

```bash
git add src
git commit -m "feat: add accessible portfolio interactions"
```

### Task 4: Hospedagem, revisão final e publicação

**Files:**
- Create: `.openai/hosting.json`
- Modify: `index.html`
- Modify: `src/data/portfolio.js`
- Modify: `src/styles/base.css`
- Modify: `src/styles/layout.css`
- Modify: `src/styles/components.css`

**Interfaces:**
- Consumes: aplicação compilada e testada das Tasks 1–3.
- Produces: `dist/` pronto para Sites e versão privada publicada.

- [ ] **Step 1: Fazer a revisão textual e de estados extremos**

Confirmar que todo conteúdo fictício tem rótulo visível, links de exemplo não simulam perfis reais, textos longos não causam overflow e a classificação oficial do Chamber aparece como Sentinela.

- [ ] **Step 2: Configurar a hospedagem estática**

Registrar o novo Site privado, persistir seu `project_id` em `.openai/hosting.json` com `static.directory` igual a `dist` e preservar o ID retornado durante todo o fluxo.

- [ ] **Step 3: Executar verificação final**

Run: `npm test -- --run && npm run build`
Expected: todos os testes PASS e `dist/index.html` presente.

- [ ] **Step 4: Verificar a interface no navegador quando disponível**

Revisar desktop e celular, navegação, modal, foco, fallback da imagem, ausência de overflow e redução de movimento. Corrigir apenas falhas observadas e repetir os checks afetados.

- [ ] **Step 5: Empacotar, salvar e publicar**

Usar o helper do Sites para sincronizar a fonte, gerar o arquivo de publicação e chamar a ferramenta nativa de save/deploy privado. Aguardar o estado terminal e registrar a URL retornada.

- [ ] **Step 6: Commit**

```bash
git add .openai/hosting.json index.html src
git commit -m "chore: prepare Lipzin portfolio for hosting"
```
