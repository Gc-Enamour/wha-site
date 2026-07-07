import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../context/LangContext.jsx';
import { UI_LANGS } from '../i18n/index.js';
import { Sun, Moon, Translate, ChevDown, Users, Pencil, X, List } from './icons/index.jsx';
import '../styles/dir-layout.css';

/* ---------- Toggle tema claro / oscuro ---------- */
function ThemeToggle() {
  const [dark, setDark] = useState(
    () => document.documentElement.getAttribute('data-theme') === 'dark'
  );
  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
    try { localStorage.setItem('wha-theme', next ? 'dark' : 'light'); } catch (e) {}
  }
  return (
    <button className="theme-btn" onClick={toggle}
      aria-label={dark ? 'Modo claro' : 'Modo oscuro'}
      title={dark ? 'Modo claro' : 'Modo oscuro'}>
      {dark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}

/* ---------- Selector de idioma ---------- */
function LangSwitcher() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function onDoc(e) { if (ref.current && !ref.current.contains(e.target)) setOpen(false); }
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);

  const cur = UI_LANGS.find(l => l.key === lang) || UI_LANGS[0];

  return (
    <div className="lang" ref={ref}>
      <button className="lang-btn" onClick={() => setOpen(o => !o)} aria-label="Idioma de interfaz">
        <Translate size={16} /> <span>{cur.code}</span> <ChevDown size={13} />
      </button>
      {open && (
        <div className="lang-menu">
          {UI_LANGS.map(l => (
            <button key={l.key} className={'lang-item' + (l.key === lang ? ' on' : '')}
              onClick={() => { setLang(l.key); setOpen(false); }}>
              <b>{l.code}</b> {l.name}
            </button>
          ))}
          <div className="lang-note">Detección automática por ubicación · cambio manual disponible</div>
        </div>
      )}
    </div>
  );
}

/* ---------- Header ---------- */
function Header() {
  const [open, setOpen] = useState(false);
  const [accOpen, setAccOpen] = useState(false);
  const accRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    function onDoc(e) { if (accRef.current && !accRef.current.contains(e.target)) setAccOpen(false); }
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);

  return (
    <header className="hdr">
      <div className="hdr-in">
        <a className="brand" href="https://worldholisticalliance.com">
          <img src="/logo.png" alt="Logo WHA" style={{ width: '50px', height: '50px', borderRadius: '12px' }} />
          <span className="sr">World Holistic Alliance</span>
        </a>

        <nav className="nav" aria-label="Navegación principal">
          <a href="https://directorio.worldholisticalliance.org/">Directorio</a>
          <a href="https://formaciones.worldholisticalliance.org/" target="_blank" rel="noopener noreferrer">Formaciones</a>
          <a href="https://worldholisticalliance.com/avalwha/" target="_blank" rel="noopener noreferrer">Sé parte de WHA</a>
          <Link to="/etica" className={pathname === '/etica' ? 'active' : ''}>Ética</Link>
          <div className="nav-acc" ref={accRef}>
            <a className="nav-acc-btn" onClick={() => setAccOpen(o => !o)}>
              Acceso <ChevDown size={13} />
            </a>
            {accOpen && (
              <div className="acc-menu">
                <a href="https://consumer.hotmart.com" target="_blank" rel="noopener noreferrer"
                  onClick={() => setAccOpen(false)}>
                  <Users size={15} /> Acceso alumnos
                </a>
                <a href="https://directorio.worldholisticalliance.org/" target="_blank" rel="noopener noreferrer"
                  onClick={() => setAccOpen(false)}>
                  <Pencil size={15} /> Acceso formadores
                </a>
              </div>
            )}
          </div>
        </nav>

        <div className="hdr-right">
          <ThemeToggle />
          <LangSwitcher />
          <button className="burger" aria-label="Menú" onClick={() => setOpen(o => !o)}>
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mnav">
          <a href="https://directorio.worldholisticalliance.org/" onClick={() => setOpen(false)}>Directorio</a>
          <a href="https://formaciones.worldholisticalliance.org/" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Formaciones</a>
          <a href="https://worldholisticalliance.com/avalwha/" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Sé parte de WHA</a>
          <Link to="/etica" onClick={() => setOpen(false)}>Ética</Link>
          <div className="mnav-group">Acceso</div>
          <a className="mnav-sub" href="https://consumer.hotmart.com" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Acceso alumnos</a>
          <a className="mnav-sub" href="https://directorio.worldholisticalliance.org/" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Acceso formadores</a>
        </div>
      )}
    </header>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="ftr">
      <div className="ftr-in">
        <div className="ftr-top">
          <div className="ftr-brand">
            <div className="serif">World Holistic Alliance</div>
            <p>Asociación internacional que agrupa y representa a profesionales del mundo holístico. Cada perfil de este directorio cuenta con aval activo de WHA.</p>
          </div>
          <div>
            <h5>Directorio</h5>
            <ul>
              <li><Link to="/etica">Código de Ética</Link></li>
              <li><a href="https://directorio.worldholisticalliance.org/">Buscar perfiles</a></li>
              <li><a href="https://directorio.worldholisticalliance.org/">Cómo leer los perfiles</a></li>
              <li><a href="https://worldholisticalliance.com/avalwha/" target="_blank" rel="noopener noreferrer">Quiero mi aval WHA</a></li>
            </ul>
          </div>
          <div>
            <h5>WHA</h5>
            <ul>
              <li><a href="https://worldholisticalliance.org/" target="_blank" rel="noopener noreferrer">Quiénes somos</a></li>
              <li><a href="https://formaciones.worldholisticalliance.org" target="_blank" rel="noopener noreferrer">Formaciones</a></li>
              <li><a href="https://worldholisticalliance.org/blog-2" target="_blank" rel="noopener noreferrer">Blog</a></li>
              <li><a href="https://directorio.worldholisticalliance.org/" target="_blank" rel="noopener noreferrer">Acceso formadores</a></li>
              <li><a href="https://wa.me/5491124014443?text=Hola!%20Necesito%20entrar%20en%20contacto." target="_blank" rel="noopener noreferrer">Contacto WhatsApp</a></li>
            </ul>
          </div>
          <div>
            <h5>Legal</h5>
            <ul>
              <li><Link to="/terminos">Términos y Condiciones</Link></li>
              <li><Link to="/privacidad">Política de Privacidad</Link></li>
              <li><Link to="/descargo">Descargo de Responsabilidad</Link></li>
            </ul>
          </div>
        </div>
        <div className="ftr-bot">
          <span>Copyright © 2026 World Holistic Alliance.</span>
          <span>El aval significa que WHA ha revisado la documentación formativa presentada. No garantiza resultados ni supervisa el trabajo profesional.</span>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
