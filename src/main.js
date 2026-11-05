import './styles.css';

const phone = '5562985458903';
const phoneLabel = '(62) 98545-8903';
const whatsappMessage = encodeURIComponent('Olá, gostaria de falar com a Machado Filho Advocacia e agendar um atendimento.');
const whatsappUrl = `https://wa.me/${phone}?text=${whatsappMessage}`;
const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Rua+Santo+Antônio,+103,+Centro,+Hidrolândia+-+GO,+75340-000';

const icon = (name, className = '') => {
  const icons = {
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>',
    shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 20 6v5c0 5.1-3.4 8.7-8 10-4.6-1.3-8-4.9-8-10V6l8-3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></svg>',
    scale: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v16M6 20h12M5 7h14M7 7l-3 6a3 3 0 0 0 6 0L7 7Zm10 0-3 6a3 3 0 0 0 6 0l-3-6Z"/></svg>',
    compass: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="m14.8 9.2-1.7 3.9-3.9 1.7 1.7-3.9 3.9-1.7Z"/></svg>',
    phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4h3l1.2 4-2 1.5a14.5 14.5 0 0 0 5.3 5.3l1.5-2 4 1.2v3c0 1.1-.9 2-2 2C11.4 19.9 4.1 12.6 4.1 5c0-1.1.9-2 2-2H7Z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="3.5"/><circle cx="17.2" cy="6.8" r=".8" fill="currentColor" stroke="none"/></svg>',
    menu: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>',
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 10c0 5-7 10-7 10S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.4"/></svg>',
    clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3 2"/></svg>'
  };
  return `<span class="icon ${className}">${icons[name] || ''}</span>`;
};

const app = document.querySelector('#app');

app.innerHTML = `
  <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
  <header class="site-header" id="topo">
    <div class="container header-inner">
      <a class="brand" href="#topo" aria-label="Machado Filho Advocacia — início">
        <span class="brand-mark" aria-hidden="true"><span>MF</span></span>
        <span class="brand-copy"><strong>Machado Filho</strong><small>ADVOCACIA</small></span>
      </a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Abrir menu">
        ${icon('menu')}
      </button>
      <nav class="site-nav" id="site-nav" aria-label="Navegação principal">
        <a href="#atuacao">Atuação</a>
        <a href="#escritorio">O escritório</a>
        <a href="#contato">Contato</a>
        <a class="nav-cta" href="${whatsappUrl}" target="_blank" rel="noreferrer">Falar com o escritório ${icon('arrow')}</a>
      </nav>
    </div>
  </header>

  <main id="conteudo">
    <section class="hero section-dark" aria-labelledby="hero-title">
      <div class="hero-grid container">
        <div class="hero-copy">
          <div class="eyebrow"><span class="eyebrow-line"></span> Advocacia em Hidrolândia, Goiás</div>
          <h1 id="hero-title">Direito com <em>clareza</em>, ética e presença.</h1>
          <p class="hero-lead">Uma escuta atenta para decisões jurídicas mais seguras. Conte com um escritório que valoriza a sua história e trata cada caso com responsabilidade.</p>
          <div class="hero-actions">
            <a class="button button-gold" href="${whatsappUrl}" target="_blank" rel="noreferrer">Agendar atendimento ${icon('arrow')}</a>
            <a class="text-link light-link" href="#atuacao">Conheça nossa atuação ${icon('arrow')}</a>
          </div>
          <div class="hero-note"><span class="status-dot"></span> Atendimento próximo, responsável e personalizado</div>
        </div>
        <div class="hero-visual" aria-label="Identidade visual da Machado Filho Advocacia">
          <div class="visual-orbit orbit-one"></div>
          <div class="visual-orbit orbit-two"></div>
          <div class="visual-panel">
            <span class="panel-label">MF</span>
            <span class="panel-title">Presença que<br /><em>protege.</em></span>
            <span class="panel-caption">Machado Filho Advocacia</span>
          </div>
          <div class="visual-stamp"><span>Ética</span><span>·</span><span>Confiança</span><span>·</span><span>Direito</span></div>
        </div>
      </div>
      <div class="hero-bottom container">
        <span>Atendimento em Hidrolândia e região</span>
        <span class="scroll-hint">Role para explorar <span class="scroll-line"></span></span>
      </div>
    </section>

    <section class="proof-strip" aria-label="Números de credibilidade">
      <div class="container proof-grid">
        <div class="proof-intro"><span class="proof-kicker">A confiança de quem já esteve aqui</span><strong>O seu caso merece atenção de verdade.</strong></div>
        <div class="proof-item"><strong>5.018</strong><span>avaliações no Google</span></div>
        <div class="proof-item"><strong>01</strong><span>escritório, perto de você</span></div>
        <div class="proof-item proof-link"><a href="https://www.google.com/search?q=Machado+Filho+Advocacia+Hidrol%C3%A2ndia" target="_blank" rel="noreferrer">Ver avaliações ${icon('arrow')}</a></div>
      </div>
    </section>

    <section class="intro section-light" id="escritorio" aria-labelledby="intro-title">
      <div class="container intro-grid">
        <div class="section-marker"><span>01</span><span class="marker-line"></span><span>O escritório</span></div>
        <div class="intro-heading"><p class="eyebrow dark-eyebrow">Um jeito mais humano de fazer advocacia</p><h2 id="intro-title">Seu problema jurídico não precisa ser enfrentado sozinho.</h2></div>
        <div class="intro-body"><p>Machado Filho Advocacia nasceu do propósito de oferecer um atendimento jurídico íntegro, acessível e comprometido com as pessoas. Aqui, a técnica caminha junto com a escuta.</p><p>Com ética, valorização do cliente e responsabilidade, o escritório busca construir caminhos claros para cada decisão.</p><a class="text-link dark-link" href="${whatsappUrl}" target="_blank" rel="noreferrer">Converse com nossa equipe ${icon('arrow')}</a></div>
      </div>
    </section>

    <section class="practice section-cream" id="atuacao" aria-labelledby="practice-title">
      <div class="container">
        <div class="section-heading-row"><div><p class="eyebrow dark-eyebrow">02 · Como podemos ajudar</p><h2 id="practice-title">Orientação para o que<br /><em>importa agora.</em></h2></div><p class="heading-aside">Cada situação pede um olhar cuidadoso. Fale com o escritório para entender o melhor caminho para o seu caso.</p></div>
        <div class="practice-grid">
          <article class="practice-card"><div class="card-top"><span class="card-number">01</span>${icon('shield', 'card-icon')}</div><h3>Direito de família</h3><p>Decisões delicadas pedem orientação clara, cuidado e respeito em cada etapa.</p><a href="${whatsappUrl}" target="_blank" rel="noreferrer" aria-label="Falar sobre direito de família">Falar sobre este tema ${icon('arrow')}</a></article>
          <article class="practice-card"><div class="card-top"><span class="card-number">02</span>${icon('scale', 'card-icon')}</div><h3>Direito civil</h3><p>Suporte jurídico para relações, contratos e situações que fazem parte da vida cotidiana.</p><a href="${whatsappUrl}" target="_blank" rel="noreferrer" aria-label="Falar sobre direito civil">Falar sobre este tema ${icon('arrow')}</a></article>
          <article class="practice-card"><div class="card-top"><span class="card-number">03</span>${icon('compass', 'card-icon')}</div><h3>Orientação jurídica</h3><p>Informação confiável para você tomar decisões com mais segurança e tranquilidade.</p><a href="${whatsappUrl}" target="_blank" rel="noreferrer" aria-label="Falar sobre orientação jurídica">Falar sobre este tema ${icon('arrow')}</a></article>
        </div>
        <div class="practice-footer"><span>${icon('check')} Atendimento com hora marcada</span><span>${icon('check')} Linguagem simples e transparente</span><span>${icon('check')} Presença em Hidrolândia - GO</span></div>
      </div>
    </section>

    <section class="manifesto section-dark" aria-labelledby="manifesto-title">
      <div class="container manifesto-grid"><div class="section-marker marker-light"><span>03</span><span class="marker-line"></span><span>Nosso jeito</span></div><div class="manifesto-quote"><span class="quote-mark">“</span><h2 id="manifesto-title">A melhor orientação é aquela que você consegue <em>entender.</em></h2><p>Por isso, a nossa conversa começa antes da resposta: começa pela escuta.</p></div><div class="manifesto-seal"><div class="seal-ring"><span>MF</span></div><span>Ética<br />e presença</span></div></div>
    </section>

    <section class="contact section-light" id="contato" aria-labelledby="contact-title">
      <div class="container contact-grid"><div class="contact-copy"><p class="eyebrow dark-eyebrow">04 · Vamos conversar</p><h2 id="contact-title">O próximo passo pode ser uma conversa.</h2><p>Conte brevemente o que você precisa. A equipe Machado Filho está pronta para ouvir e orientar você.</p><a class="button button-navy" href="${whatsappUrl}" target="_blank" rel="noreferrer">Chamar no WhatsApp ${icon('arrow')}</a><div class="contact-details"><a href="tel:+${phone}">${icon('phone')} <span><small>Telefone</small>${phoneLabel}</span></a><a href="${mapsUrl}" target="_blank" rel="noreferrer">${icon('pin')} <span><small>Endereço</small>Rua Santo Antônio, Qd. 56, nº 103<br />Centro · Hidrolândia - GO</span></a><div>${icon('clock')} <span><small>Horário</small>Segunda a sexta · até 18:00</span></div></div></div><div class="contact-card"><div class="contact-card-top"><span class="card-label">Atendimento</span><span class="card-symbol">MF</span></div><h3>Fale com o escritório</h3><p>Estamos a uma mensagem de distância. Escolha o canal que funciona melhor para você.</p><a class="contact-channel" href="${whatsappUrl}" target="_blank" rel="noreferrer"><span class="channel-icon">WA</span><span><strong>WhatsApp</strong><small>Enviar uma mensagem</small></span>${icon('arrow')}</a><a class="contact-channel" href="tel:+${phone}"><span class="channel-icon">☎</span><span><strong>Ligar agora</strong><small>${phoneLabel}</small></span>${icon('arrow')}</a><a class="instagram-link" href="https://www.instagram.com/machado_filho_adv/" target="_blank" rel="noreferrer">${icon('instagram')} @machado_filho_adv</a></div></div>
    </section>
  </main>

  <footer class="site-footer"><div class="container footer-main"><a class="brand footer-brand" href="#topo" aria-label="Voltar ao início"><span class="brand-mark" aria-hidden="true"><span>MF</span></span><span class="brand-copy"><strong>Machado Filho</strong><small>ADVOCACIA</small></span></a><p>Clareza para decidir.<br />Presença para proteger.</p><a class="footer-arrow" href="#topo" aria-label="Voltar ao topo">${icon('arrow')}</a></div><div class="container footer-bottom"><span>© ${new Date().getFullYear()} Machado Filho Advocacia</span><span>Hidrolândia · Goiás</span><a href="https://www.instagram.com/machado_filho_adv/" target="_blank" rel="noreferrer">Instagram ${icon('arrow')}</a></div></footer>
  <div class="mobile-bar"><a href="tel:+${phone}">${icon('phone')} Ligar</a><a href="${whatsappUrl}" target="_blank" rel="noreferrer">WhatsApp ${icon('arrow')}</a></div>
`;

const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
menuToggle.addEventListener('click', () => {
  const open = siteNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  menuToggle.innerHTML = icon(open ? 'close' : 'menu');
});

document.querySelectorAll('.site-nav a').forEach((link) => link.addEventListener('click', () => {
  siteNav.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Abrir menu');
  menuToggle.innerHTML = icon('menu');
}));

const header = document.querySelector('.site-header');
const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 20);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();
