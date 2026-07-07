import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme.js';
import { useLang } from '../context/LangContext.jsx';
import { UI_LANGS } from '../i18n/index.js';
import { Lotus, Sun, Moon, Translate, ChevDown, Ig, Fb, Yt } from './icons/index.jsx';
import '../styles/layout.css';

function LangSwitcher({ lang, setLang }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);

  const cur = UI_LANGS.find(l => l.key === lang) || UI_LANGS[0];

  return (
    <div className="lang" ref={ref}>
      <button className="lang-btn" onClick={() => setOpen(o => !o)} aria-label="Idioma">
        <Translate size={15} /> {cur.code} <ChevDown size={13} />
      </button>
      {open && (
        <div className="lang-menu">
          {UI_LANGS.map(l => (
            <button key={l.key} className={'lang-item' + (l.key === lang ? ' on' : '')}
              onClick={() => { setLang(l.key); setOpen(false); }}>
              <b>{l.code}</b> {l.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function SiteHeader({ dark, toggleTheme }) {
  const { pathname } = useLocation();
  const { lang, setLang, t } = useLang();

  return (
    <header className="hdr">
      <div className="hdr-in">
        <Link to="/" className="brand" aria-label="World Holistic Alliance — inicio">
          <span className="brand-mark"><Lotus size={38} /></span>
          <b>World Holistic Alliance</b>
        </Link>

        <nav className="hdr-nav" aria-label="Navegación principal">
          <a href="/#formaciones">{t('nav.formaciones')}</a>
          <a href="/#directorio">{t('nav.directorio')}</a>
          <a href="/#aval">{t('nav.aval')}</a>
          <a href="/#t200">{t('nav.t200')}</a>
          <Link to="/etica" className={pathname === '/etica' ? 'on' : ''}>{t('nav.etica')}</Link>
        </nav>

        <div className="hdr-right">
          <LangSwitcher lang={lang} setLang={setLang} />
          <button className="icon-btn" onClick={toggleTheme}
            aria-label={dark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            title={dark ? 'Modo claro' : 'Modo oscuro'}>
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  const { t } = useLang();

  const cols = [
    [t('footer.explore'), [
      { label: t('footer.link.directorio'),  to: '/#directorio'  },
      { label: t('footer.link.formaciones'), to: '/#formaciones' },
      { label: t('footer.link.aval'),        to: '/#aval'        },
      { label: t('footer.link.t200'),        to: '/#t200'        },
      { label: t('footer.link.maestro'),     to: '/#maestro'     },
    ]],
    [t('footer.about'), [
      { label: t('footer.link.quienes'), to: '/#quienes' },
      { label: t('footer.link.etica'),   to: '/etica'    },
      { label: t('footer.link.blog'),    to: '#'         },
    ]],
    [t('footer.legal'), [
      { label: t('footer.link.terminos'),   to: '/terminos'   },
      { label: t('footer.link.privacidad'), to: '/privacidad' },
      { label: t('footer.link.descargo'),   to: '/descargo'   },
    ]],
  ];

  return (
    <footer className="site-footer">
      <div className="footer-in shell">
        <div className="footer-brand">
          <Link to="/" className="brand" aria-label="World Holistic Alliance — inicio">
            <span className="brand-mark"><Lotus size={34} /></span>
            <b>World Holistic Alliance</b>
          </Link>
          <p className="tagline">{t('footer.tagline')}</p>
          <div className="socials">
            <a href="#" aria-label="Instagram"><Ig size={18} /></a>
            <a href="#" aria-label="Facebook"><Fb size={18} /></a>
            <a href="#" aria-label="YouTube"><Yt size={18} /></a>
          </div>
        </div>

        {cols.map(([heading, links]) => (
          <div key={heading} className="footer-col">
            <h4>{heading}</h4>
            <ul>
              {links.map(({ label, to }) => (
                <li key={label}>
                  {to.startsWith('/') && !to.includes('#')
                    ? <Link to={to}>{label}</Link>
                    : <a href={to}>{label}</a>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-aviso shell">
        <p className="aviso-label">{t('footer.aviso.title')}</p>
        <p>{t('footer.aviso.text')}</p>
      </div>

      <div className="footer-bottom">
        <div className="shell">© 2026 {t('footer.rights')}</div>
      </div>
    </footer>
  );
}

export default function Layout({ children }) {
  const [dark, toggleTheme] = useTheme();

  return (
    <>
      <SiteHeader dark={dark} toggleTheme={toggleTheme} />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
