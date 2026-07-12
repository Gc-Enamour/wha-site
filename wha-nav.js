// wha-nav.js v1.8
(function () {
  'use strict';

  // ── FONT ──────────────────────────────────────────────────────
  function injectFont() {
    if (document.getElementById('wha-nav-font')) return;
    const l1 = document.createElement('link');
    l1.rel = 'preconnect'; l1.href = 'https://fonts.googleapis.com';
    const l2 = document.createElement('link');
    l2.rel = 'preconnect'; l2.href = 'https://fonts.gstatic.com'; l2.crossOrigin = '';
    const l3 = document.createElement('link');
    l3.id = 'wha-nav-font'; l3.rel = 'stylesheet';
    l3.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap';
    document.head.append(l1, l2, l3);
  }

  // ── CSS ───────────────────────────────────────────────────────
  const CSS = `
    :root {
      --wha-nav-hbg:      #6A1B6C;
      --wha-nav-hrgba:    rgba(106,27,108,.97);
      --wha-nav-font:     'Plus Jakarta Sans', system-ui, sans-serif;
      --wha-nav-maxw:     1200px;
      --wha-nav-surface:  #fff;
      --wha-nav-border:   rgba(0,0,0,.1);
      --wha-nav-ink:      #1a1a2e;
      --wha-nav-faint:    rgba(26,26,46,.38);
      --wha-nav-plum:     #3d0052;
      --wha-nav-p050:     rgba(106,27,108,.06);
      --wha-nav-p100:     rgba(106,27,108,.14);
      --wha-nav-p600:     #6A1B6C;
      --wha-nav-p700:     #56155a;
      --wha-nav-gold:     #c9a227;
      --wha-nav-shad:     0 12px 40px rgba(0,0,0,.14);
    }
    [data-theme="dark"] {
      --wha-nav-hbg:     #34103A;
      --wha-nav-hrgba:   rgba(40,12,46,.96);
      --wha-nav-surface: #241A2B;
      --wha-nav-border:  #3A2C42;
      --wha-nav-ink:     #F0E8F1;
      --wha-nav-faint:   #897C8E;
      --wha-nav-plum:    #DBA6DC;
      --wha-nav-p050:    #3A2740;
      --wha-nav-p100:    #4A3350;
      --wha-nav-p600:    #C76AC9;
      --wha-nav-p700:    #DBA6DC;
      --wha-nav-shad:    0 18px 50px rgba(0,0,0,.55);
    }

    wha-header, wha-footer { display: block; }

    /* ── Header ── */
    .wha-hdr { position: sticky; top: 0; z-index: 1000; background: var(--wha-nav-hrgba); backdrop-filter: saturate(1.2) blur(6px); color: #fff; }
    .wha-hdr-in { display: flex; align-items: center; gap: 18px; height: 70px; max-width: var(--wha-nav-maxw); margin: 0 auto; padding: 0 22px; font-family: var(--wha-nav-font); }

    .wha-brand { display: flex; align-items: center; gap: 12px; flex: none; text-decoration: none; }
    .wha-brand img { width: 50px; height: 50px; border-radius: 12px; flex: none; display: block; }
    .wha-sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); }

    .wha-nav { display: flex; align-items: center; gap: 26px; margin-left: auto; }
    .wha-nav > a { font-size: .78rem; font-weight: 700; letter-spacing: .13em; text-transform: uppercase; color: rgba(255,255,255,.9); padding: 6px 0; border-bottom: 2px solid transparent; transition: color .16s; cursor: pointer; text-decoration: none; font-family: var(--wha-nav-font); }
    .wha-nav > a:hover { color: #fff; }
    .wha-nav > a.wha-active { border-bottom-color: #fff; color: #fff; }

    /* Dropdown desktop */
    .wha-drop { position: relative; }
    .wha-drop-btn { display: inline-flex; align-items: center; gap: 5px; font-size: .78rem; font-weight: 700; letter-spacing: .13em; text-transform: uppercase; color: rgba(255,255,255,.9); background: none; border: none; border-bottom: 2px solid transparent; padding: 6px 0; cursor: pointer; font-family: var(--wha-nav-font); transition: color .16s; }
    .wha-drop-btn:hover { color: #fff; }
    .wha-drop-menu { position: absolute; right: 0; top: 100%; padding-top: 14px; z-index: 1010; opacity: 0; pointer-events: none; transition: opacity .15s; }
    .wha-drop:hover .wha-drop-menu { opacity: 1; pointer-events: auto; }
    .wha-drop-inner { background: var(--wha-nav-surface); border: 1px solid var(--wha-nav-border); border-radius: 14px; box-shadow: var(--wha-nav-shad); padding: 6px; min-width: 260px; }
    .wha-drop-inner a { display: flex; align-items: center; gap: 10px; padding: 11px 12px; border-radius: 9px; color: var(--wha-nav-ink); font-size: .88rem; font-weight: 600; letter-spacing: 0; text-transform: none; text-decoration: none; font-family: var(--wha-nav-font); }
    .wha-drop-inner a:hover { background: var(--wha-nav-p050); color: var(--wha-nav-p700); }
    .wha-drop-inner a svg { color: var(--wha-nav-p600); flex: none; }

    .wha-badge { font-size: .6rem; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; background: var(--wha-nav-p100); color: var(--wha-nav-p700); border-radius: 4px; padding: 2px 5px; margin-left: 4px; vertical-align: middle; white-space: nowrap; }
    .wha-badge--light { background: rgba(255,255,255,.18); color: #fff; }

    /* Right controls */
    .wha-hdr-right { display: flex; align-items: center; gap: 12px; margin-left: auto; }
    .wha-theme-btn { display: flex; align-items: center; justify-content: center; width: 38px; height: 38px; background: rgba(255,255,255,.14); color: #fff; border: 1px solid rgba(255,255,255,.24); border-radius: 999px; flex: none; cursor: pointer; }
    .wha-theme-btn:hover { background: rgba(255,255,255,.24); }

    /* Lang switcher */
    .wha-lang { position: relative; }
    .wha-lang-btn { display: flex; align-items: center; gap: 6px; background: rgba(255,255,255,.14); color: #fff; border: 1px solid rgba(255,255,255,.24); border-radius: 999px; padding: 7px 12px; font-weight: 700; font-size: .78rem; letter-spacing: .04em; cursor: pointer; font-family: var(--wha-nav-font); }
    .wha-lang-btn:hover { background: rgba(255,255,255,.24); }
    .wha-lang-menu { position: absolute; right: 0; top: calc(100% + 8px); background: var(--wha-nav-surface); border: 1px solid var(--wha-nav-border); border-radius: 14px; box-shadow: var(--wha-nav-shad); padding: 6px; min-width: 206px; z-index: 1010; display: none; }
    .wha-lang-menu.wha-open { display: block; }
    .wha-lang-item { display: flex; align-items: center; gap: 9px; width: 100%; text-align: left; background: none; border: 0; padding: 9px 11px; border-radius: 9px; font-size: .86rem; color: var(--wha-nav-ink); font-weight: 500; cursor: pointer; font-family: var(--wha-nav-font); }
    .wha-lang-item:hover { background: var(--wha-nav-p050); }
    .wha-lang-item.wha-on { background: var(--wha-nav-p050); color: var(--wha-nav-p700); }
    .wha-lang-item b { width: 24px; color: var(--wha-nav-plum); font-weight: 800; }
    .wha-lang-note { font-size: .68rem; color: var(--wha-nav-faint); padding: 9px 11px 4px; border-top: 1px solid var(--wha-nav-border); margin-top: 4px; line-height: 1.45; }

    /* Burger */
    .wha-burger { display: none; margin-left: auto; width: 42px; height: 42px; border: 0; background: rgba(255,255,255,.14); border-radius: 11px; color: #fff; align-items: center; justify-content: center; cursor: pointer; }

    /* Mobile nav */
    .wha-mnav { display: none; background: var(--wha-nav-hbg); padding: 6px 22px 16px; font-family: var(--wha-nav-font); }
    .wha-mnav.wha-open { display: block; }
    .wha-mnav > a { display: block; padding: 13px 0; color: #fff; font-weight: 700; letter-spacing: .1em; font-size: .82rem; text-transform: uppercase; border-bottom: 1px solid rgba(255,255,255,.14); text-decoration: none; }

    .wha-mnav .wha-msub { display: block; padding: 11px 0 11px 40px; color: rgba(255,255,255,.82); font-weight: 400; letter-spacing: .04em; font-size: .74rem; text-transform: uppercase; text-decoration: none; border-bottom: 0; }
    .wha-mnav .wha-msub .wha-badge { background: var(--wha-nav-gold); color: #fff; }
    .wha-mtoggle { display: flex; align-items: center; justify-content: space-between; padding: 13px 0; color: #fff; font-weight: 700; letter-spacing: .1em; font-size: .82rem; text-transform: uppercase; border-bottom: 1px solid rgba(255,255,255,.14); cursor: pointer; }
    .wha-mtoggle svg { transition: transform .2s; flex: none; }
    .wha-mtoggle.wha-open svg { transform: rotate(180deg); }
    .wha-msection { display: none; }
    .wha-msection.wha-open { display: block; }

    /* ── Footer ── */
    .wha-ftr { background: var(--wha-nav-hbg); color: #fff; padding: 54px 0 30px; font-family: var(--wha-nav-font); }
    .wha-ftr-in { max-width: var(--wha-nav-maxw); margin: 0 auto; padding: 0 22px; }
    .wha-ftr h5 { font-weight: 800; letter-spacing: .14em; text-transform: uppercase; font-size: .74rem; color: #fff; margin: 0 0 14px; font-family: var(--wha-nav-font); }
    .wha-ftr ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 9px; }
    .wha-ftr ul a { color: rgba(255,255,255,.85); font-size: .9rem; text-decoration: none; font-family: var(--wha-nav-font); }
    .wha-ftr ul a:hover { color: #fff; }
    .wha-ftr-brand { max-width: 300px; }
    .wha-ftr-brand .wha-ftr-name { font-size: 1.4rem; color: #fff; font-weight: 600; font-family: var(--wha-nav-font); }
    .wha-ftr-brand p { color: rgba(255,255,255,.8); font-size: .88rem; margin: .6rem 0 0; }
    .wha-ftr-top { display: flex; flex-wrap: wrap; gap: 40px 60px; justify-content: space-between; padding-bottom: 34px; }
    .wha-ftr-socials { display: flex; gap: 20px; padding-bottom: 28px; }
    .wha-ftr-socials a { color: rgba(255,255,255,.7); transition: color .15s; display: flex; text-decoration: none; }
    .wha-ftr-socials a:hover { color: #fff; }
    .wha-ftr-bot { padding-top: 22px; font-size: .78rem; color: rgba(255,255,255,.72); display: flex; flex-wrap: wrap; gap: 8px 22px; justify-content: space-between; align-items: center; }
    .wha-ftr-bot a { color: rgba(255,255,255,.86); text-decoration: underline; text-underline-offset: 2px; }
    .wha-ftr-aviso { margin-top: 20px; padding-top: 18px; font-size: .74rem; color: rgba(255,255,255,.45); line-height: 1.6; }
    .wha-ftr-aviso p { margin: 0; }
    .wha-ftr-aviso-title { font-weight: 700; letter-spacing: .06em; text-transform: uppercase; font-size: .68rem; margin-bottom: 6px; color: rgba(255,255,255,.55); }

    /* ── Responsive ── */
    @media (max-width: 960px) {
      .wha-nav { display: none; }
      .wha-burger { display: inline-flex; }
    }
    @media (max-width: 560px) {
      .wha-hdr-in { padding: 0 16px; gap: 10px; }
      .wha-ftr-top { flex-direction: column; gap: 30px; }
      .wha-ftr-brand { max-width: none; }
      .wha-lang-btn span { display: none; }
    }
  `;

  function injectStyles() {
    if (document.getElementById('wha-nav-styles')) return;
    const s = document.createElement('style');
    s.id = 'wha-nav-styles';
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  // ── ICONS ─────────────────────────────────────────────────────
  function ic(size, content) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${content}</svg>`;
  }

  const I = {
    sun:       s => ic(s, '<circle cx="12" cy="12" r="4"/><path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8 6 18M18 6l1.8-1.8"/>'),
    moon:      s => ic(s, '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z"/>'),
    translate: s => ic(s, '<path d="M4 5h8M8 4v1.5c0 3-1.8 6.5-5 8M6 8c.6 2 2.4 3.8 4.5 4.8"/><path d="m13 20 3.5-9 3.5 9M14.3 16.8h4.4"/>'),
    chev:      s => ic(s, '<path d="m6 9 6 6 6-6"/>'),
    shield:    s => ic(s, '<path d="M12 2 4 6v5c0 5.2 3.4 9.8 8 11 4.6-1.2 8-5.8 8-11V6Z"/><path d="m9 12 2 2 4-4"/>'),
    award:     s => ic(s, '<circle cx="12" cy="9" r="6"/><path d="M8.5 14.5 7 22l5-3 5 3-1.5-7.5"/>'),
    users:     s => ic(s, '<circle cx="9" cy="7" r="4"/><path d="M3 21v-2a6 6 0 0 1 12 0v2"/><path d="M16 3.1a4 4 0 0 1 0 7.8M21 21v-2a6 6 0 0 0-5-5.95"/>'),
    pencil:    s => ic(s, '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5Z"/>'),
    x:         s => ic(s, '<path d="M18 6 6 18M6 6l12 12"/>'),
    list:      s => ic(s, '<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>'),
    ig:        s => ic(s, '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r="1" fill="currentColor" stroke="none"/>'),
    fb:        s => ic(s, '<path d="M14 8.5h2V5.5h-2.2C11.4 5.5 10 7 10 9v1.5H8v3h2V21h3v-7.5h2.2l.5-3H13V9c0-.4.3-.5.6-.5H14Z"/>'),
    yt:        s => ic(s, '<rect x="3" y="6" width="18" height="12" rx="3.5"/><path d="m10.5 9.5 4.5 2.5-4.5 2.5Z" fill="currentColor" stroke="none"/>'),
    tiktok:    s => ic(s, '<path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>'),
    whatsapp:  s => ic(s, '<path d="M3 21l1.5-4.5A9 9 0 1 1 7.5 19.5Z"/>'),
    spotify:   s => ic(s, '<circle cx="12" cy="12" r="9"/><path d="M8 13.5c2.5-1 5.5-.8 8 .8"/><path d="M7.5 11c3-1.2 6.5-1 9 1"/><path d="M9 16c1.8-.7 4-.6 5.5.5"/>'),
    linkedin:  s => ic(s, '<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 11v6M8 8v.01M12 11v6M12 14a3 3 0 0 1 6 0v3"/>'),
  };

  // ── THEME / LANG ──────────────────────────────────────────────
  function getTheme() {
    const match = document.cookie.match(/(?:^|;\s*)wha-theme=([^;]+)/);
    return match ? match[1] : (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }
  function applyTheme(t) {
    const opts = "; domain=.worldholisticalliance.org; path=/; max-age=31536000; SameSite=Lax; Secure";
    document.cookie = "wha-theme=" + t + opts;
    document.documentElement.setAttribute('data-theme', t);
  }
  function getLang() {
    const match = document.cookie.match(/(?:^|;\s*)wha-lang=([^;]+)/);
    return match ? match[1] : 'es';
  }
  function saveLang(l) {
    const opts = "; domain=.worldholisticalliance.org; path=/; max-age=31536000; SameSite=Lax; Secure";
    document.cookie = "wha-lang=" + l + opts;
    document.cookie = "wha-lang-manual=true" + opts;
    localStorage.setItem('idioma', l);
  }

  const LANGS = [
    { key: 'es', code: 'ES', name: 'Español' },
    { key: 'pt', code: 'PT', name: 'Português' },
    { key: 'en', code: 'EN', name: 'English' },
    { key: 'it', code: 'IT', name: 'Italiano' },
    { key: 'fr', code: 'FR', name: 'Français' },
  ];

  // ── WHA-HEADER ────────────────────────────────────────────────
  class WHAHeader extends HTMLElement {
    connectedCallback() {
      injectFont();
      injectStyles();
      applyTheme(getTheme());
      this._lang = getLang();
      this._render();
    }

    _render() {
      const dark = getTheme() === 'dark';
      const lang = this._lang;
      const cur  = LANGS.find(l => l.key === lang) || LANGS[0];

      this.innerHTML = `
        <header class="wha-hdr">
          <div class="wha-hdr-in">

            <a class="wha-brand" href="https://worldholisticalliance.org" aria-label="World Holistic Alliance">
              <img src="https://worldholisticalliance.org/logo.png" alt="Logo WHA" />
              <span class="wha-sr">World Holistic Alliance</span>
            </a>

            <nav class="wha-nav" aria-label="Navegación principal">
              <a href="https://directorio.worldholisticalliance.org/">Directorio</a>
              <a href="https://formaciones.worldholisticalliance.org/">Formaciones</a>

              <div class="wha-drop">
                <button class="wha-drop-btn">Sé parte de WHA ${I.chev(13)}</button>
                <div class="wha-drop-menu">
                  <div class="wha-drop-inner">
                    <a href="https://worldholisticalliance.com/avalwha/" target="_blank" rel="noopener noreferrer">
                      ${I.shield(15)} Aval Terapeuta WHA
                    </a>
                    <a href="https://wa.me/5491124014443?text=Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20Aval%20Maestro%2FCentro%20Hol%C3%ADstico%20WHA" target="_blank" rel="noopener noreferrer">
                      ${I.users(15)} Aval Maestro / Centro Holístico <span class="wha-badge">BETA</span>
                    </a>
                    <a href="https://worldholisticalliance.com/terapeutaintegralwhat200/" target="_blank" rel="noopener noreferrer">
                      ${I.award(15)} Certificación T200
                    </a>
                  </div>
                </div>
              </div>

              <a href="https://worldholisticalliance.org/etica">Ética</a>

              <div class="wha-drop">
                <button class="wha-drop-btn">Acceso ${I.chev(13)}</button>
                <div class="wha-drop-menu">
                  <div class="wha-drop-inner">
                    <a href="https://consumer.hotmart.com" target="_blank" rel="noopener noreferrer">
                      ${I.users(15)} Acceso alumnos
                    </a>
                    <a href="https://directorio.worldholisticalliance.org/acceso">
                      ${I.pencil(15)} Acceso formadores
                    </a>
                  </div>
                </div>
              </div>
            </nav>

            <div class="wha-hdr-right">
              <button class="wha-theme-btn" data-wha-theme aria-label="${dark ? 'Modo claro' : 'Modo oscuro'}">
                ${dark ? I.sun(17) : I.moon(17)}
              </button>

              <div class="wha-lang">
                <button class="wha-lang-btn" data-wha-lang-btn aria-label="Idioma de interfaz">
                  ${I.translate(16)} <span>${cur.code}</span> ${I.chev(13)}
                </button>
                <div class="wha-lang-menu" data-wha-lang-menu>
                  ${LANGS.map(l => `
                    <button class="wha-lang-item${l.key === lang ? ' wha-on' : ''}" data-wha-lang-pick="${l.key}">
                      <b>${l.code}</b> ${l.name}
                    </button>
                  `).join('')}
                  <div class="wha-lang-note">Detección automática por ubicación · cambio manual disponible</div>
                </div>
              </div>

              <button class="wha-burger" data-wha-burger aria-label="Menú">
                ${I.list(20)}
              </button>
            </div>

          </div>

          <div class="wha-mnav" data-wha-mnav>
            <a href="https://directorio.worldholisticalliance.org/">Directorio</a>
            <a href="https://formaciones.worldholisticalliance.org/">Formaciones</a>

            <div class="wha-mtoggle" data-wha-mtoggle="separte">
              Sé parte de WHA ${I.chev(13)}
            </div>
            <div class="wha-msection" data-wha-msection="separte">
              <a class="wha-msub" href="https://worldholisticalliance.com/avalwha/" target="_blank" rel="noopener noreferrer">Aval Terapeuta WHA</a>
              <a class="wha-msub" href="https://wa.me/5491124014443?text=Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20Aval%20Maestro%2FCentro%20Hol%C3%ADstico%20WHA" target="_blank" rel="noopener noreferrer">Aval Maestro / Centro <span class="wha-badge wha-badge--light">BETA</span></a>
              <a class="wha-msub" href="https://worldholisticalliance.com/terapeutaintegralwhat200/" target="_blank" rel="noopener noreferrer">Certificación T200</a>
            </div>

            <a href="https://worldholisticalliance.org/etica">Ética</a>

            <div class="wha-mtoggle" data-wha-mtoggle="acceso">
              Acceso ${I.chev(13)}
            </div>
            <div class="wha-msection" data-wha-msection="acceso">
              <a class="wha-msub" href="https://consumer.hotmart.com" target="_blank" rel="noopener noreferrer">Acceso alumnos</a>
              <a class="wha-msub" href="https://directorio.worldholisticalliance.org/acceso">Acceso formadores</a>
            </div>
          </div>
        </header>
      `;

      this._bind();
    }

    _bind() {
      // Theme toggle
      this.querySelector('[data-wha-theme]').addEventListener('click', () => {
        applyTheme(getTheme() === 'dark' ? 'light' : 'dark');
        this._render();
      });

      // Lang menu open/close
      const langBtn  = this.querySelector('[data-wha-lang-btn]');
      const langMenu = this.querySelector('[data-wha-lang-menu]');
      langBtn.addEventListener('click', e => {
        e.stopPropagation();
        langMenu.classList.toggle('wha-open');
      });
      this.querySelectorAll('[data-wha-lang-pick]').forEach(btn => {
        btn.addEventListener('click', () => {
          const newLang = btn.dataset.whaLangPick;
          saveLang(newLang);
          langMenu.classList.remove('wha-open');
          const url = new URL(window.location.href);
          if (url.searchParams.has('idioma')) {
            url.searchParams.set('idioma', newLang);
            window.location.href = url.toString();
          } else {
            window.location.reload();
          }
        });
      });
      // Close on outside click — store reference to remove on re-render
      this._outsideClick = e => {
        if (!this.querySelector('.wha-lang')?.contains(e.target)) {
          langMenu?.classList.remove('wha-open');
        }
      };
      document.addEventListener('click', this._outsideClick);

      // Burger
      const burger = this.querySelector('[data-wha-burger]');
      const mnav   = this.querySelector('[data-wha-mnav]');
      burger.addEventListener('click', () => {
        const open = mnav.classList.toggle('wha-open');
        burger.innerHTML  = open ? I.x(20) : I.list(20);
        burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Menú');
      });

      // Mobile toggles
      this.querySelectorAll('[data-wha-mtoggle]').forEach(toggle => {
        toggle.addEventListener('click', () => {
          const key     = toggle.dataset.whaMtoggle;
          const section = this.querySelector(`[data-wha-msection="${key}"]`);
          const open    = section.classList.toggle('wha-open');
          toggle.classList.toggle('wha-open', open);
        });
      });
    }

    disconnectedCallback() {
      if (this._outsideClick) document.removeEventListener('click', this._outsideClick);
    }
  }

  // ── WHA-FOOTER ────────────────────────────────────────────────
  class WHAFooter extends HTMLElement {
    connectedCallback() {
      injectFont();
      injectStyles();
      this.innerHTML = `
        <footer class="wha-ftr">
          <div class="wha-ftr-in">

            <div class="wha-ftr-socials">
              <a href="https://www.instagram.com/worldholisticalliance/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">${I.ig(28)}</a>
              <a href="https://www.facebook.com/worldholisticalliance" target="_blank" rel="noopener noreferrer" aria-label="Facebook">${I.fb(28)}</a>
              <a href="https://www.youtube.com/@worldholisticalliance" target="_blank" rel="noopener noreferrer" aria-label="YouTube">${I.yt(28)}</a>
              <a href="https://www.tiktok.com/@holisticalliance" target="_blank" rel="noopener noreferrer" aria-label="TikTok">${I.tiktok(28)}</a>
              <a href="https://api.whatsapp.com/send?phone=541124014443&text=Hola%20WHA!%20Tengo%20una%20consulta" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">${I.whatsapp(28)}</a>
              <a href="https://open.spotify.com/show/5eMo2HgyM354DI4BY7tNLd" target="_blank" rel="noopener noreferrer" aria-label="Spotify">${I.spotify(28)}</a>
              <a href="https://www.linkedin.com/company/worldholisticalliance" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">${I.linkedin(28)}</a>
            </div>

            <div class="wha-ftr-top">
              <div class="wha-ftr-brand">
                <div class="wha-ftr-name">World Holistic Alliance</div>
                <p>Asociación internacional que agrupa y representa a profesionales del mundo holístico. Cada perfil de este directorio cuenta con aval activo de WHA.</p>
              </div>
              <div>
                <h5>Directorio</h5>
                <ul>
                  <li><a href="https://worldholisticalliance.org/etica">Código de Ética</a></li>
                  <li><a href="https://directorio.worldholisticalliance.org/">Buscar perfiles</a></li>
                  <li><a href="https://directorio.worldholisticalliance.org/#como-leer">Cómo leer los perfiles</a></li>
                  <li><a href="https://worldholisticalliance.com/avalwha/" target="_blank" rel="noopener noreferrer">Quiero mi aval WHA</a></li>
                </ul>
              </div>
              <div>
                <h5>WHA</h5>
                <ul>
                  <li><a href="https://worldholisticalliance.org/">Quiénes somos</a></li>
                  <li><a href="https://formaciones.worldholisticalliance.org">Formaciones</a></li>
                  <li><a href="https://worldholisticalliance.org/blog-2">Blog</a></li>
                  <li><a href="https://directorio.worldholisticalliance.org/acceso">Acceso formadores</a></li>
                  <li><a href="https://wa.me/5491124014443?text=Hola!%20Necesito%20entrar%20en%20contacto." target="_blank" rel="noopener noreferrer">Contacto WhatsApp</a></li>
                </ul>
              </div>
              <div>
                <h5>Legal</h5>
                <ul>
                  <li><a href="https://worldholisticalliance.org/terminos">Términos y Condiciones</a></li>
                  <li><a href="https://worldholisticalliance.org/privacidad">Política de Privacidad</a></li>
                  <li><a href="https://worldholisticalliance.org/descargo">Descargo de Responsabilidad</a></li>
                </ul>
              </div>
            </div>

            <div class="wha-ftr-bot">
              <span>Copyright © 2026 World Holistic Alliance.</span>
              <span>El aval significa que WHA ha revisado la documentación formativa presentada. No garantiza resultados ni supervisa el trabajo profesional.</span>
            </div>

            <div class="wha-ftr-aviso">
              <p class="wha-ftr-aviso-title">Aviso legal</p>
              <p>Las Terapias Holísticas colaboran con los tratamientos médicos, pero no lo reemplazan. Si padece alguna dolencia, consulte a un profesional de la salud matriculado. No abandone ninguna clase de tratamiento médico o medicaciones que le hayan sido recetadas, sin la previa aprobación de su médico. Siempre consulte a su médico antes de iniciar una terapia alternativa. WHA (WorldHolisticAlliance.org) no asume ninguna responsabilidad sobre el uso que usted haga con la información que este sitio replica y sus posibles efectos en su salud o la de sus pacientes.</p>
            </div>

          </div>
        </footer>
      `;
    }
  }

  // ── REGISTER ──────────────────────────────────────────────────
  if (!customElements.get('wha-header')) customElements.define('wha-header', WHAHeader);
  if (!customElements.get('wha-footer')) customElements.define('wha-footer', WHAFooter);

})();
