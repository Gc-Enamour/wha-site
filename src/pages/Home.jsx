import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext.jsx';
import {
  Search, Shield, Book, Award, Users, Cert, Star,
  Sparkle, Layers, Check, ChevRight, Quote,
} from '../components/icons/index.jsx';
import '../styles/home.css';

/* Placeholder para imágenes aún no disponibles */
function ImgPlaceholder({ label, className }) {
  return <div className={'img-ph ' + (className || '')} aria-hidden="true">{label}</div>;
}

/* ── Hero ──────────────────────────────────────────────── */
function Hero({ t }) {
  return (
    <section className="hero">
      <div className="hero-bg bg-gradient">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
      </div>
      <div className="hero-overlay" />

      <div className="hero-in">
        <div className="hero-content">
          <div className="eyebrow">{t('hero.eyebrow')}</div>
          <h1>{t('hero.title')}</h1>
          <p className="lead">{t('hero.lead')}</p>
          <div className="ctas">
            <a href={t('link.directorio')} target="_blank" rel="noopener noreferrer" className="btn btn-on-hero"><Search size={17} /> {t('hero.cta.primary')}</a>
            <a href="#aval" className="btn btn-hero-aval"><Shield size={17} /> {t('hero.cta.secondary')}</a>
          </div>
          <div className="microtrust"><Shield size={18} /> {t('hero.trust')}</div>
        </div>
      </div>
    </section>
  );
}

/* ── Quiénes somos ─────────────────────────────────────── */
function About({ t }) {
  return (
    <section className="about">
      <div className="shell about-in">
        <div className="eyebrow">{t('about.eyebrow')}</div>
        <p className="about-text">{t('about.text')}</p>
      </div>
    </section>
  );
}

/* ── ¿Cuál es tu camino? ───────────────────────────────── */
function Paths({ t }) {
  const cards = [
    { k: 'aprender', Icon: Book,   color: 'var(--wha-info)',    urlKey: 'link.formaciones' },
    { k: 'validar',  Icon: Shield, color: 'var(--wha-success)', urlKey: 'link.aval'        },
    { k: 't200',     Icon: Award,  color: 'var(--done-fg)',     urlKey: 'link.t200'        },
    { k: 'maestro',  Icon: Users,  color: 'var(--wha-gold)',    urlKey: 'link.maestro.wa', beta: true },
  ];
  return (
    <section className="home-section" id="formaciones">
      <div className="shell">
        <div className="sec-head">
          <div className="eyebrow">{t('paths.eyebrow')}</div>
          <h2>{t('paths.title')}</h2>
          <p>{t('paths.lead')}</p>
        </div>
        <div className="paths">
          {cards.map(({ k, Icon, color, urlKey, beta }) => (
            <a key={k} href={t(urlKey)} target="_blank" rel="noopener noreferrer" className="path" style={{ '--path-accent': color }}>
              {beta && <span className="beta-tag">{t('paths.maestro.beta')}</span>}
              <div className="path-ic" style={{ color }}><Icon size={28} /></div>
              <div className="want">{t(`paths.${k}.want`)}</div>
              <h3>{t(`paths.${k}.title`)}</h3>
              <p className="desc">{t(`paths.${k}.desc`)}</p>
              <span className="go">{t(`paths.${k}.cta`)} <ChevRight size={15} /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Directorio (muestra) ──────────────────────────────── */
const SAMPLE_PROFILES = [
  { name: 'Silvia Casal',          type: 'Terapeuta avalado', track: 'WHA-N5', modality: 'Presencial y Online', bio: 'Fundadora de Paloma Aromas y Bienestar para el Alma. Profesora universitaria y terapeuta holística con amplia trayectoria.', centro: false },
  { name: 'Ana María Rojas Acuña', type: 'Terapeuta avalado', track: 'WHA-N5', modality: 'Presencial y Online', bio: 'Hola, soy Ana María, soy de Bogotá, Colombia. Si estás aquí, creo que nuestro encuentro no es casualidad.',                   centro: false },
  { name: 'Jacqueline Alvarenga',  type: 'Terapeuta avalado', track: 'WHA-N5', modality: 'Presencial y Online', bio: 'Soy Psicóloga, con una Maestría en Psicología Clínica. Tengo 32 años de ejercicio acompañando procesos de sanación.',         centro: false },
  { name: 'Centro Armonía Interior', type: 'Maestro / Centro', track: 'WHA-N20', modality: 'Online',           bio: 'Espacio de formación y sanación en meditación, Reiki y cristales. Más de una década formando terapeutas.',                 centro: true  },
];

function SampleCard({ p, t }) {
  return (
    <article className="mini-card">
      <div className="mini-body">
        <div className={'mini-av' + (p.centro ? ' sq' : '')}>
          {p.centro ? '🏛' : '👤'}
        </div>
        <div className="mini-main">
          <h3>{p.name}</h3>
          <p className="mini-bio">{p.bio}</p>
          <div className="mini-badges">
            <span className="mini-bdg b-tipo"><Sparkle size={12} /> {p.type}</span>
            <span className="mini-bdg b-aval"><Shield size={12} /> {t('dir.badge.aval')}</span>
            <span className="mini-bdg b-track"><Layers size={12} /> {p.track}</span>
            <span className="mini-bdg b-mod"><Layers size={12} /> {p.modality}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

function Directory({ t }) {
  return (
    <section className="home-section sec-alt" id="directorio">
      <div className="shell">
        <div className="sec-head">
          <div className="eyebrow">{t('dir.eyebrow')}</div>
          <h2>{t('dir.title')}</h2>
          <p>{t('dir.lead')}</p>
        </div>
        <div className="mini-grid">
          {SAMPLE_PROFILES.map((p, i) => <SampleCard key={i} p={p} t={t} />)}
        </div>
        <div className="sec-cta">
          <a href={t('link.directorio')} target="_blank" rel="noopener noreferrer" className="btn btn-primary"><Search size={17} /> {t('dir.cta')}</a>
        </div>
      </div>
    </section>
  );
}

/* ── Aval Terapeuta ────────────────────────────────────── */
function Aval({ t }) {
  const benefits = [
    ['aval.b1.t', 'aval.b1.d', Search],
    ['aval.b2.t', 'aval.b2.d', Cert],
    ['aval.b3.t', 'aval.b3.d', Star],
  ];
  return (
    <section className="home-section" id="aval">
      <div className="shell offer">
        <div className="offer-copy">
          <div className="eyebrow">{t('aval.eyebrow')}</div>
          <h2>{t('aval.title')}</h2>
          <p className="offer-lead">{t('aval.lead')}</p>
          <div className="benefits">
            {benefits.map(([tk, dk, Icon], i) => (
              <div key={i} className="benefit">
                <span className="benefit-ic"><Icon size={20} /></span>
                <div><b>{t(tk)}</b><span>{t(dk)}</span></div>
              </div>
            ))}
          </div>
        </div>
        <aside className="offer-card">
          <div className="price-label">{t('aval.price.label')}</div>
          <div className="price"><b>{t('aval.price.value')}</b><span>{t('aval.price.per')}</span></div>
          <div className="price-note">{t('aval.price.note')}</div>
          <a href={t('link.aval')} target="_blank" rel="noopener noreferrer" className="btn btn-primary full"><Shield size={17} /> {t('aval.cta')}</a>
          <div className="offer-seal"><Shield size={15} /> {t('dir.badge.aval')}</div>
        </aside>
      </div>
    </section>
  );
}

/* ── Certificación T200 ────────────────────────────────── */
function T200({ t }) {
  const feats = ['t200.f1', 't200.f2', 't200.f3', 't200.f4'];
  return (
    <section className="home-section sec-accent" id="t200">
      <div className="shell offer offer-rev">
        <aside className="offer-card gold">
          <span className="beta-solid t200-beca">{t('t200.beca')}</span>
          <div className="cert-badge">
            <div className="cert-label">{t('t200.cert.label')}</div>
            <div className="cert-name"><Award size={20} /> {t('t200.cert.name')}</div>
            <div className="cert-level">{t('t200.cert.level')}</div>
          </div>
          <div className="price-label">{t('t200.price.label')}</div>
          <div className="price"><b>{t('t200.price.value')}</b><span>{t('t200.price.per')}</span></div>
          <div className="price-note">{t('t200.price.note')}</div>
          <a href={t('link.t200')} target="_blank" rel="noopener noreferrer" className="btn btn-primary full"><Award size={17} /> {t('t200.cta')}</a>
        </aside>
        <div className="offer-copy">
          <div className="eyebrow">{t('t200.eyebrow')}</div>
          <h2>{t('t200.title')}</h2>
          <p className="offer-lead">
            Un programa de 12 meses con 12 formaciones completas que te forma, te certifica y
            te posiciona como terapeuta integral. Al finalizar recibes el certificado oficial{' '}
            <b>Terapeuta Integral WHA – Nivel T200</b>.
          </p>
          <ul className="feat-list">
            {feats.map(f => (
              <li key={f}>
                <span className="feat-check"><Check size={14} strokeWidth={2.4} /></span>
                {t(f)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ── Aval Maestro / Centro ─────────────────────────────── */
function Maestro({ t }) {
  return (
    <section className="home-section" id="maestro">
      <div className="shell">
        <div className="maestro-band">
          <div className="maestro-body">
            <div className="maestro-head">
              <div className="eyebrow">{t('maestro.eyebrow')}</div>
            </div>
            <h2>{t('maestro.title')}</h2>
            <p>{t('maestro.lead')}</p>
            <div className="maestro-cta">
              <span className="maestro-note">{t('maestro.note')}</span>
            </div>
          </div>
          <div className="maestro-visual">
            <aside className="offer-card maestro-price">
              <span className="beta-solid">{t('maestro.badge')}</span>
              <div className="price-label">{t('maestro.price.label')}</div>
              <div className="price"><b>{t('maestro.price.value')}</b><span>{t('maestro.price.per')}</span></div>
              <div className="price-note">{t('maestro.price.note')}</div>
              <a href={t('link.maestro.wa')} target="_blank" rel="noopener noreferrer" className="btn btn-primary full"><Cert size={17} /> {t('maestro.cta')}</a>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Testimonios ───────────────────────────────────────── */
const TESTIMONIALS = [
  ['test.1.q', 'test.1.n', 'test.1.r'],
  ['test.2.q', 'test.2.n', 'test.2.r'],
  ['test.3.q', 'test.3.n', 'test.3.r'],
];

function Testimonials({ t }) {
  return (
    <section className="home-section sec-alt">
      <div className="shell">
        <div className="sec-head">
          <div className="eyebrow">{t('test.eyebrow')}</div>
          <h2>{t('test.title')}</h2>
        </div>
        <div className="tst-grid">
          {TESTIMONIALS.map(([q, n, r], i) => (
            <figure key={i} className="tst">
              <div className="tst-photo">👤</div>
              <span className="tst-q"><Quote size={24} /></span>
              <blockquote>{t(q)}</blockquote>
              <figcaption>
                <b>{t(n)}</b>
                <span>{t(r)}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Formaciones ───────────────────────────────────────── */
function Formaciones({ t }) {
  const items = t('form.items');
  return (
    <section className="home-section" id="formaciones-catalogo">
      <div className="shell">
        <div className="sec-head">
          <div className="eyebrow">{t('form.eyebrow')}</div>
          <h2>{t('form.title')}</h2>
          <p>{t('form.lead')}</p>
        </div>
        <div className="form-grid">
          {items.map(({ name, url }, i) => (
            <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="form-card">
              <div className="form-thumb">Imagen</div>
              <div className="form-info">
                <h3>{name}</h3>
                <span className="form-dur"><Shield size={12} /> {t('form.duration')}</span>
              </div>
            </a>
          ))}
        </div>
        <div className="sec-cta">
          <a href={t('link.formaciones')} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><Book size={17} /> {t('form.cta')}</a>
        </div>
      </div>
    </section>
  );
}

/* ── Home ──────────────────────────────────────────────── */
export default function Home() {
  const { t } = useLang();

  useEffect(() => { document.title = 'World Holistic Alliance'; }, []);

  return (
    <>
      <Hero t={t} />
      <About t={t} />
      <Paths t={t} />
      <Directory t={t} />
      <Aval t={t} />
      <T200 t={t} />
      <Maestro t={t} />
      <Testimonials t={t} />
      <Formaciones t={t} />
    </>
  );
}
