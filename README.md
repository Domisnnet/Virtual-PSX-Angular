![GitHub repo size](https://img.shields.io/github/repo-size/Domisnnet/Virtual-PSX-Angular?style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/Domisnnet/Virtual-PSX-Angular?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/Domisnnet/Virtual-PSX-Angular?style=for-the-badge)

<h2 id="sobre-o-projeto">1. PS Store Angular - Plataforma de Games Digital 🎮💿</h2>

![Status do Deploy](https://img.shields.io/badge/Status-Online-brightgreen?style=flat-square)
![Angular](https://img.shields.io/badge/Angular-20-DD0031?style=flat-square&logo=angular&logoColor=white)
![Hosting](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)
[![Licença MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://github.com/Domisnnet/Virtual-PSX-Angular/blob/main/LICENSE)
![Portfólio](src/assets/images/virtual.png)

Bem-vindo ao repositório do meu PSX Store Angular. Esta aplicação é uma plataforma fictícia de games digital desenvolvida com Angular, utilizando componentes Standalone para máxima performance. O projeto combina design sofisticado em SCSS com componentes reutilizáveis como cards e headers, refletindo minha stack de especialista em Front-end.

---

## 📚 Tabela de Conteúdo

| 💻 O Projeto | 🛠️ Técnico | 🤝 Comunidade |
| :---: | :---: | :---: |
| [![1. Sobre](https://img.shields.io/badge/1%20-%20Sobre-4CAF50)](#sobre-o-projeto) | [![5. Destaques](https://img.shields.io/badge/5%20-%20Destaques-607D8B)](#destaques-tecnicos) | [![9. Código](https://img.shields.io/badge/9%20-%20Código-795548)](#codigo-fonte) |
| [![2. Techs](https://img.shields.io/badge/2%20-%20Techs-2196F3)](#tecnologias-utilizadas) | [![6. Deploy](https://img.shields.io/badge/6%20-%20Deploy-009688)](#fluxo-de-deploy) | [![10. Créditos](https://img.shields.io/badge/10%20-%20Créditos-607D8B)](#créditos) |
| [![3. Acessar](https://img.shields.io/badge/3%20-%20Acessar-FF9800)](#como-acessar) | [![7. Contribuir](https://img.shields.io/badge/7%20-%20Contribuir-3F51B5)](#como-contribuir) | [![11. Licença](https://img.shields.io/badge/11%20-%20Licença-E91E63)](#licenca) |
| [![4. Funções](https://img.shields.io/badge/4%20-%20Funções-9C27B0)](#funcionalidades) | [![8. FAQ](https://img.shields.io/badge/8%20-%20FAQ-FFC107)](#faq) | [![12. Perfil](https://img.shields.io/badge/12%20-%20Perfil-212121)](#perfil-do-github) |

---

<h2 id="como-acessar">3. 🚀 Como Acessar</h2>

Entre na PS Store clicando no botão abaixo:

<div align="left">
<a href="https://ps-store-angular.web.app/" target="_blank">
<img alt="Botão Acessar" src="src/assets/images/botão.webp" height="70" width="70" />
</a>
</div>

---

<h2 id="funcionalidades">4. 🧩 Funcionalidades Principais</h2>

Funcionalidade	Descrição
🛡️ Standalone Components	Arquitetura moderna sem NgModules, reduzindo o bundle size e complexidade.
🎴 Card Component System	Componente reutilizável para exibição de games com imagem, título, label e preço.
🧭 Header Navigation	Componente de header com navegação, logo e links externos (YouTube, LinkedIn, GitHub).
⚡ Firebase Hosting	Entrega ultra-rápida via CDN global com certificado SSL e cache inteligente.
🎨 SCSS Modular	Estilização baseada em princípios de design atômico e estruturação modular.

---

<h2 id="destaques-tecnicos">5. 💻 Destaques Técnicos</h2>

🎴 O Componente card
Desenvolvi um sistema de cards altamente customizável para exibição de games. Ele recebe propriedades dinâmicas para imagem, título, label e preço, utilizando lazy loading (loading="lazy", decoding="async") para otimização de performance e ARIA attributes para acessibilidade.

🧭 O Componente header
O header da aplicação possui logo brand com routerLink e aria-label, navegação principal com links externos (YouTube, LinkedIn, GitHub), acessibilidade com aria-label e segurança com rel="noopener noreferrer" em links externos.

🔄 CI/CD com Firebase
O projeto utiliza GitHub Actions para que cada push na branch principal dispare um build de produção (ng build) e o deploy imediato para o Firebase Hosting, garantindo que o site esteja sempre atualizado sem intervenção manual.

---

<h2 id="fluxo-de-deploy">6. 📦 Fluxo de Deploy</h2>

O deploy da aplicação utiliza Firebase Hosting integrado ao GitHub.
Para publicar uma nova versão basta executar:
```bash
ng build --configuration production
```
Em seguida:
```bash
firebase deploy
```

---

<h2 id="como-contribuir">7. 🤝 Como Contribuir</h2>

Siga os passos abaixo para fortalecer este projeto e sugerir melhorias:

| Fase | Ação | Link / Comando |
| :---: | :--- | :--- |
| **01** | **Fork** | [![Fork](https://img.shields.io/badge/-Fazer%20Fork-blue?style=flat-square&logo=github)](https://github.com/Domisnnet/Virtual-PSX-Angular/fork) |
| **02** | **Branch** | `git checkout -b feature/MinhaMelhoria` |
| **03** | **Commit** | `git commit -m 'feat: add nova seção de projetos'` |
| **04** | **Push** | `git push origin feature/MinhaMelhoria` |
| **05** | **PR** | [![Abrir PR](https://img.shields.io/badge/-Abrir%20PR-green?style=flat-square&logo=git)](https://github.com/Domisnnet/Virtual-PSX-Angular/compare)

### 🐛 Encontrou um problema?
Se algo não estiver funcionando como esperado, não hesite em abrir um chamado:

[![Issues Abertas](https://img.shields.io/github/issues/Domisnnet/portfolio?style=flat-square&color=red&logo=github)](https://github.com/Domisnnet/Virtual-PSX-Angular/issues)
[![Report Bug](https://img.shields.io/badge/Reportar-Erro-critical?style=flat-square&logo=github)](https://github.com/Domisnnet/Virtual-PSX-Angular/issues/new)


---

<h2 id="faq">8. 🧠 Perguntas Frequentes</h2>

<details>
<summary><strong>Por que Angular Standalone em vez de NgModules ❓</strong></summary>
<p>🚀 <strong>Resposta:</strong> A arquitetura Standalone elimina a necessidade de declarar componentes em módulos. Isso torna o código mais limpo, facilita o <em>Lazy Loading</em> e reduz o tamanho final do bundle.</p>
</details>

<details>
<summary><strong>Como foi tratada a performance da PS Store ❓</strong></summary>
<p>⚡ <strong>Resposta:</strong> Utilizei lazy loading nas imagens (loading="lazy", decoding="async"), otimizações de imagem e minificação de SCSS, utilizando a CDN global do <strong>Firebase Hosting</strong> para atingir pontuações altas no <em>Lighthouse</em>.</p>
</details>

<details>
<summary><strong>O projeto é amigável para SEO ❓</strong></summary>
<p>🔍 <strong>Resposta:</strong> Sim. Mesmo sendo uma SPA, utilizei tags semânticas do HTML5 e metadados estruturados para garantir a indexação correta por motores de busca.</p>
</details>

<details>
<summary><strong>Como foi implementada a acessibilidade ❓</strong></summary>
<p>🎨 <strong>Resposta:</strong> Utilizei <code>aria-label</code> em tags navegação e links, <code>alt</code> descritivo em imagens, e estrutura semântica HTML5 para garantir acessibilidade conforme padrões WCAG.</p>
</details>

---

<h2 id="codigo-fonte">9. 💻 Código Fonte</h2>

Explore a arquitetura Angular completa no repositório oficial:

![Angular](https://img.shields.io/badge/Angular-20-DD0031?style=for-the-badge&logo=angular&logoColor=fff)
[![Repositório](https://img.shields.io/badge/Repositório-Domisnnet%2FVirtual--PSX--Angular-DD0031?style=for-the-badge&logo=github&labelColor=0d1117)](https://github.com/Domisnnet/Virtual-PSX-Angular)

---

<h2 id="créditos">10. 📝 Créditos & Reconhecimentos</h2>

| Atribuição | Responsável / Recurso | Descrição |
| :--- | :--- | :--- |
| **Full-Stack Dev** | **DomisDev** | Design, Arquitetura Angular e Configuração DevOps. |
| **Infraestrutura** | **Google Firebase** | Provedor de Hosting e serviços cloud. |
| **Apoio Técnico** | **Google Gemini** | Padronização King-Domfy e refinamento documental. |

---

<h2 id="licenca">11. 📄 Licença</h2>

Este projeto está sob a [![Licença MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/Domisnnet/Virtual-PSX-Angular/blob/main/LICENSE)

---

<h2 id="perfil-do-github">12. 👨‍💻 Perfil do GitHub</h2>

<a href="https://github.com/Domisnnet"> 
  <img src="src/assets/images/DomisDev.png" width="90" style="border-radius: 50%" alt="DomisDev GitHub"> 
</a>