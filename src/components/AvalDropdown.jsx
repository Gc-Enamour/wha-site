import { useState, useEffect, useRef } from 'react';
import { Shield, ChevDown } from './icons/index.jsx';

export default function AvalDropdown({ t }) {
  const [open, setOpen] = useState(false);
  const [flipUp, setFlipUp] = useState(false);
  const [flipRight, setFlipRight] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function onDoc(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  useEffect(() => {
    if (!open) return;
    function recalc() {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      setFlipUp(window.innerHeight - rect.bottom < 160);
      setFlipRight(rect.left + 300 > window.innerWidth);
    }
    recalc();
    window.addEventListener('scroll', recalc);
    window.addEventListener('resize', recalc);
    return () => {
      window.removeEventListener('scroll', recalc);
      window.removeEventListener('resize', recalc);
    };
  }, [open]);

  function handleToggle(e) {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    setFlipUp(window.innerHeight - rect.bottom < 160);
    setFlipRight(rect.left + 300 > window.innerWidth);
    setOpen(o => !o);
  }

  return (
    <div className="aval-drop" ref={ref}>
      <button className="btn btn-hero-aval" onClick={handleToggle}>
        <Shield size={17} /> {t('hero.cta.secondary')} <ChevDown size={14} />
      </button>
      <div
        className={`aval-drop-panel${open ? ' open' : ''}${flipUp ? ' flip-up' : ''}${flipRight ? ' flip-right' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <a href={t('link.aval')} target="_blank" rel="noopener noreferrer" className="aval-drop-opt">
          <div className="aval-drop-title">Aval Terapeuta WHA</div>
          <div className="aval-drop-desc">Directorio oficial · Academia WHA incluida</div>
        </a>
        <a href={t('link.maestro.wa')} target="_blank" rel="noopener noreferrer" className="aval-drop-opt">
          <div className="aval-drop-title">Aval Maestro/Centro Holístico WHA <span className="beta-tag">BETA</span></div>
          <div className="aval-drop-desc">Directorio oficial · Emite certificados WHA · Academia incluida</div>
        </a>
      </div>
    </div>
  );
}
